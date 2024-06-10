import {
  program as ASTProgram,
  DeclFun,
  If,
  Succ,
  type_ as StellaType,
  expr,
  TypeFun,
  IsZero,
  NatRec,
  Abstraction,
  Application,
  Let,
  Sequence,
  Ref,
  Deref,
  TypeRef,
  Assign,
  pattern,
  PatternSucc,
  Add,
  Multiply
} from '@abstract'
import {printExpr, printPattern, printType} from '@printer'
import {Scope} from './scope'

export class Typechecker {
  private scope = new Scope()

  typecheck(program: ASTProgram) {
    program.listdecl.forEach((decl) => {
      switch (decl.type) {
        case 'DeclFun':
          this.typecheckFunDecl(decl)
          break
        default:
          throw new Error(`typecheck for node ${decl.type} is not implemented`)
      }
    })
  }

  typecheckFunDecl(funDecl: DeclFun) {
    const identifier = funDecl.stellaident.value
    const returnExpr = funDecl.expr
    const paramsList = funDecl.listparamdecl
    const returnType = funDecl.returntype
    if (returnType.type === 'NoReturnType') {
      const error = `function ${identifier} should have a return type`
      throw new Error(error)
    }

    const functionStellaType: TypeFun = {
      type: 'TypeFun',
      listtype: paramsList.map((param) => param.type_),
      type_: returnType.type_
    }
    this.scope.addVariable(identifier, functionStellaType)

    this.scope.enterScope()
    paramsList.forEach((param) => {
      this.scope.addVariable(param.stellaident.value, param.type_)
    })
    if (!this.typecheckExpression(returnExpr, returnType.type_)) {
      const error = `Expected expression [${printExpr(returnExpr)}] to be of type ${printType(returnType.type_)}`
      throw new Error(error)
    }

    this.scope.exitScope()
  }

  /** @returns Stella type of the expression */
  typecheckExpression(expr: expr, expectedType?: StellaType): StellaType {
    switch (expr.type) {
      case 'ConstInt':
        if (expectedType && !this.checkSameTypes({type: 'TypeNat'}, expectedType)) {
          this.throwTypeIncompatibilityError(expr, expectedType)
        }
        return {type: 'TypeNat'}
      case 'ConstTrue':
      case 'ConstFalse':
        if (expectedType && !this.checkSameTypes({type: 'TypeBool'}, expectedType)) {
          this.throwTypeIncompatibilityError(expr, expectedType)
        }
        return {type: 'TypeBool'}
      case 'Var':
        const variableType = this.scope.getVariableType(expr.stellaident.value)
        if (expectedType && !this.checkSameTypes(variableType, expectedType)) {
          this.throwTypeIncompatibilityError(expr, expectedType)
        }
        return variableType
      case 'If':
        return this.typecheckIf(expr, expectedType)
      case 'IsZero':
        return this.typecheckIsZero(expr, expectedType)
      case 'NatRec':
        return this.typecheckNatRec(expr, expectedType)
      case 'Succ':
        return this.typecheckSucc(expr, expectedType)
      case 'Abstraction':
        return this.typecheckAbstraction(expr, expectedType)
      case 'Application':
        return this.typecheckApplication(expr, expectedType)
      case 'Let':
        return this.typecheckLet(expr, expectedType)
      case 'Sequence':
        return this.typecheckSequence(expr, expectedType)
      case 'Ref':
        return this.typecheckRef(expr, expectedType)
      case 'Deref':
        return this.typecheckDeref(expr, expectedType)
      case 'Assign':
        return this.typecheckAssign(expr, expectedType)
      case 'Add':
        return this.typecheckAdd(expr, expectedType)
      case 'Multiply':
        return this.typecheckMultiply(expr, expectedType)
      default:
        const message = `type checking is not supported for expression ${printExpr(expr)}`
        throw new Error(message)
    }
  }

  typecheckIsZero(isZeroNode: IsZero, expectedType?: StellaType): StellaType {
    try {
      this.typecheckExpression(isZeroNode.expr, {type: 'TypeNat'})
    } catch (e) {
      const error = `Error at ${printExpr(isZeroNode)}`
      const initialMessage = (e as Error).message
      const fullError = `${initialMessage}\n${error}`
      throw new Error(fullError)
    }

    if (expectedType && expectedType.type !== 'TypeBool') {
      this.throwTypeIncompatibilityError(isZeroNode, expectedType)
    }

    return {type: 'TypeBool'}
  }

  typecheckNatRec(natRecNode: NatRec, expectedType?: StellaType): StellaType {
    this.typecheckExpression(natRecNode.expr_1, {type: 'TypeNat'})

    const initialValueStellaType = this.typecheckExpression(natRecNode.expr_2)
    const expectedFuncStellaType: TypeFun = {
      type: 'TypeFun',
      listtype: [{type: 'TypeNat'}],
      type_: {
        type: 'TypeFun',
        listtype: [initialValueStellaType],
        type_: initialValueStellaType
      }
    }

    if (!this.typecheckExpression(natRecNode.expr_3, expectedFuncStellaType)) {
      const error = `${printExpr(natRecNode.expr_3)} is expected to be of type ${printType(
        expectedFuncStellaType
      )}. Actual type is ${printType(this.typecheckExpression(natRecNode.expr_3))}`
      throw new Error(error)
    }

    if (expectedType && !this.checkSameTypes(initialValueStellaType, expectedType)) {
      this.throwTypeIncompatibilityError(natRecNode, expectedFuncStellaType)
    }

    return initialValueStellaType
  }

  typecheckSucc(succNode: Succ, expectedType?: StellaType): StellaType {
    this.stackExprError(() => this.typecheckExpression(succNode.expr, {type: 'TypeNat'}), succNode)

    if (expectedType && !this.checkSameTypes({type: 'TypeNat'}, expectedType)) {
      this.throwTypeIncompatibilityError(succNode, expectedType)
    }

    return {type: 'TypeNat'}
  }

  typecheckIf(ifNode: If, expectedType?: StellaType): StellaType {
    this.stackExprError(() => this.typecheckExpression(ifNode.expr_1, {type: 'TypeBool'}), ifNode)

    const thenExprType = this.stackExprError(() => this.typecheckExpression(ifNode.expr_2, expectedType), ifNode)
    const elseExprType = this.stackExprError(() => this.typecheckExpression(ifNode.expr_3, expectedType), ifNode)

    if (!this.checkSameTypes(thenExprType, elseExprType)) {
      const error = `${printExpr(ifNode.expr_2)} and ${printExpr(ifNode.expr_3)} have different types: ${printType(thenExprType)} and ${printType(elseExprType)}\nat ${printExpr(ifNode)}`
      throw new Error(error)
    }

    return thenExprType
  }

  typecheckAbstraction(abstractionNode: Abstraction, expectedType?: StellaType): StellaType {
    this.scope.enterScope()
    abstractionNode.listparamdecl.forEach((param) => {
      this.scope.addVariable(param.stellaident.value, param.type_)
    })

    const returnType = this.typecheckExpression(abstractionNode.expr)
    const paramsStellaTypes = abstractionNode.listparamdecl.map((param) => param.type_)
    const abstractionStellaType: TypeFun = {
      type: 'TypeFun',
      listtype: paramsStellaTypes,
      type_: returnType
    }

    if (expectedType && !this.checkSameTypes(abstractionStellaType, expectedType)) {
      this.throwTypeIncompatibilityError(abstractionNode, expectedType)
    }

    this.scope.exitScope()
    return abstractionStellaType
  }

  typecheckApplication(applicationNode: Application, expectedType?: StellaType): StellaType {
    const functionType = this.typecheckExpression(applicationNode.expr)
    if (functionType.type !== 'TypeFun') {
      const error = `${printExpr(applicationNode.expr)} is not a function`
      throw new Error(error)
    }

    if (functionType.listtype.length !== applicationNode.listexpr.length) {
      const error = `Wrong number of arguments to ${printExpr(applicationNode.expr)}`
      throw new Error(error)
    }

    applicationNode.listexpr.forEach((expr, index) => {
      if (!this.typecheckExpression(expr, functionType.listtype[index])) {
        const error = `${printExpr(expr)} is not assignable to type ${printType(
          functionType.listtype[index]
        )}. Actual type is ${printType(this.typecheckExpression(expr))}`
        throw new Error(error)
      }
    })

    if (expectedType && !this.checkSameTypes(functionType.type_, expectedType)) {
      this.throwTypeIncompatibilityError(applicationNode, expectedType)
    }

    return functionType.type_
  }

  typecheckLet(letNode: Let, expectedType?: StellaType): StellaType {
    this.scope.enterScope()
    letNode.listpatternbinding.forEach(binding => {
      const exprType = this.typecheckExpression(binding.expr)
      this.typecheckPattern(binding.pattern, exprType)
    })

    const letBindingStellaType = this.stackExprError(() => this.typecheckExpression(letNode.expr, expectedType), letNode)
    this.scope.exitScope()
    return letBindingStellaType
  }

  typecheckSequence(sequenceNode: Sequence, expectedType?: StellaType): StellaType {
    this.stackExprError(() => this.typecheckExpression(sequenceNode.expr_1), sequenceNode)
    return this.stackExprError(() => this.typecheckExpression(sequenceNode.expr_2, expectedType), sequenceNode)
  }

  typecheckRef(refNode: Ref, expectedType?: StellaType): StellaType {
    const exprStellaType = this.stackExprError(() => this.typecheckExpression(refNode.expr), refNode)
    const refType: TypeRef = {
      type: 'TypeRef',
      type_: exprStellaType
    }

    if (expectedType && !this.checkSameTypes(refType, expectedType)) {
      const error = `${printExpr(refNode)} does not match to type ${printType(expectedType)}. Actual type is ${printType(refType)}`
      throw new Error(error)
    }

    return refType
  }

  typecheckDeref(derefNode: Deref, expectedType?: StellaType): StellaType {
    const exprType = this.stackExprError(() => this.typecheckExpression(derefNode.expr), derefNode)
    if (exprType.type !== 'TypeRef') {
      const error = `${printExpr(derefNode.expr)} is not of type Ref. Actual type is ${printType(exprType)}\nat ${printExpr(derefNode)}`
      throw new Error(error)
    }

    if (expectedType && !this.checkSameTypes(exprType.type_, expectedType)) {
      const error = `${printExpr(derefNode.expr)} does not match to type ${printType(expectedType)}. Actual type is ${printType(exprType.type_)}\nat ${printExpr(derefNode)}`
      throw new Error(error)
    }

    return exprType.type_
  }

  typecheckAssign(assignNode: Assign, expectedType?: StellaType): StellaType {
    const rightHandSideStellaType = this.stackExprError(() => this.typecheckExpression(assignNode.expr_2), assignNode)
    const leftHandSideStellaType = this.typecheckExpression(assignNode.expr_1)

    if (leftHandSideStellaType.type === 'TypeRef' && !['TypeNat', 'TypeRef'].includes(rightHandSideStellaType.type)) {
      const error = `Type ${printType(rightHandSideStellaType)} is not assignable to ${printType(leftHandSideStellaType)} at ${printExpr(assignNode)}`
      throw new Error(error)
    } else if (rightHandSideStellaType.type === 'TypeRef' && !this.checkSameTypes(rightHandSideStellaType, leftHandSideStellaType)) {
      const error = `Type ${printType(rightHandSideStellaType)} is not assignable to ${printType(leftHandSideStellaType)} at ${printExpr(assignNode)}`
      throw new Error(error)
    }
    
    if (expectedType && expectedType.type !== 'TypeUnit') {
      const error = `${printExpr(assignNode)} is not compatible to Unit type`
      throw new Error(error)
    }

    return {type: 'TypeUnit'}
  }

  typecheckAdd(addNode: Add, expectedType?: StellaType): StellaType {
    this.stackExprError(() => this.typecheckExpression(addNode.expr_1, {type: 'TypeNat'}), addNode)
    this.stackExprError(() => this.typecheckExpression(addNode.expr_2, {type: 'TypeNat'}), addNode)
    if (expectedType && expectedType.type !== 'TypeNat') {
      this.throwTypeIncompatibilityError(addNode, expectedType)
    }

    return {type: 'TypeNat'}
  }

  typecheckMultiply(addNode: Multiply, expectedType?: StellaType): StellaType {
    this.stackExprError(() => this.typecheckExpression(addNode.expr_1, {type: 'TypeNat'}), addNode)
    this.stackExprError(() => this.typecheckExpression(addNode.expr_2, {type: 'TypeNat'}), addNode)

    if (expectedType && expectedType.type !== 'TypeNat') {
      this.throwTypeIncompatibilityError(addNode, expectedType)
    }

    return {type: 'TypeNat'}
  }

  typecheckPattern(pattern: pattern, expectedType?: StellaType): StellaType {
    switch(pattern.type) {
      case 'PatternFalse':
      case 'PatternTrue':
        if (expectedType && expectedType.type !== 'TypeBool') {
          this.throwPatternTypeIncompatibilityError(pattern, expectedType)
        }
        return {type: 'TypeBool'}
      case 'PatternVar':
        if (expectedType) {
          this.scope.addVariable(pattern.stellaident.value, expectedType)
        }

        return this.scope.getVariableType(pattern.stellaident.value)
      case 'PatternSucc':
        this.typecheckPattern(pattern, expectedType)
      default:
        const error = `${printPattern(pattern)} is not supported for typechecking`
        throw new Error(error)
    }
  }

  typecheckPatternSucc(succPattern: PatternSucc, expectedType?: StellaType): StellaType {
    this.stackPattern(() => this.typecheckPattern(succPattern.pattern, {type: 'TypeNat'}), succPattern)
    if (expectedType && expectedType.type !== 'TypeNat') {
      this.throwPatternTypeIncompatibilityError(succPattern, expectedType)
    }
    return {type:'TypeNat'}
  }

  checkSameTypes(actualType: StellaType, expectedType: StellaType): boolean {
    switch (actualType.type) {
      case 'TypeNat':
        return expectedType.type === 'TypeNat'
      case 'TypeBool':
        return expectedType.type === 'TypeBool'
      case 'TypeFun':
        return this.checkSameFunTypes(actualType, expectedType)
      case 'TypeRef':
        return (expectedType.type === 'TypeRef' && this.checkSameTypes(actualType.type_, expectedType.type_))
      default:
        return false
    }
  }

  checkSameFunTypes(actualType: TypeFun, expectedType: StellaType): boolean {
    if (expectedType.type !== 'TypeFun') {
      return false
    }

    if (actualType.listtype.length !== expectedType.listtype.length) {
      return false
    }

    const paramsAreEqual = actualType.listtype.every((param, index) =>
      this.checkSameTypes(param, expectedType.listtype[index])
    )
    const returnTypesAreEqual = this.checkSameTypes(actualType.type_, expectedType.type_)
    return paramsAreEqual && returnTypesAreEqual
  }

  stackExprError<T>(fn: () => T, expr: expr) {
    try {
      return fn()
    } catch (e) {
      const initialMessage = (e as Error).message
      const error = `Error at ${printExpr(expr)}`
      const fullError = `${initialMessage}\n${error}`
      throw new Error(fullError)
    }
  }

  throwTypeIncompatibilityError(expr: expr, type: StellaType) {
    const error = `${printExpr(expr)} is expected to have type ${printType(type)}`
    throw new Error(error)
  }

  stackPattern<T>(fn: () => T, pattern: pattern) {
    try {
      return fn()
    } catch (e) {
      const initialMessage = (e as Error).message
      const error = `Error at ${printPattern(pattern)}`
      const fullError = `${initialMessage}\n${error}`
      throw new Error(fullError)
    }
  }

  throwPatternTypeIncompatibilityError(pattern: pattern, type: StellaType) {
    const error = `${printPattern(pattern)} is expected to have type ${printType(type)}`
    throw new Error(error)
  }
}
