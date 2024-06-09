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
  Application
} from '@abstract'
import {printExpr, printType} from '@printer'
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
      throw new Error(`function ${identifier} should have a return type`)
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
  }

  typecheckExpression(expr: expr, expectedType: StellaType): boolean {
    switch (expr.type) {
      case 'ConstInt':
        return this.checkSameTypes({type: 'TypeNat'}, expectedType)
      case 'ConstTrue':
      case 'ConstFalse':
        return this.checkSameTypes({type: 'TypeBool'}, expectedType)
      case 'Var':
        return this.checkSameTypes(this.scope.getVariableType(expr.stellaident.value), expectedType)
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
      default:
        const message = `type checking is not supported for expression ${printExpr(expr)}`
        throw new Error(message)
    }
  }

  getExpressionType(expr: expr): StellaType {
    switch (expr.type) {
      case 'ConstInt':
        return {type: 'TypeNat'}
      case 'Succ': {
        this.typecheckExpression(expr.expr, {type: 'TypeNat'})
        return {type: 'TypeNat'}
      }
      case 'ConstTrue':
      case 'ConstFalse':
        return {type: 'TypeBool'}
      case 'IsZero': {
        this.typecheckExpression(expr.expr, {type: 'TypeNat'})
        return {type: 'TypeBool'}
      }
      case 'Var':
        return this.scope.getVariableType(expr.stellaident.value)
      case 'Application':
        return this.getExpressionType(expr.expr)
      case 'Abstraction':
        return {
          type: 'TypeFun',
          listtype: expr.listparamdecl.map((param) => param.type_),
          type_: this.getExpressionType(expr.expr)
        }
      default:
        throw new Error(`Expression [${printExpr(expr)}] is not supported for type checking`)
    }
  }

  typecheckIsZero(isZeroNode: IsZero, expectedType: StellaType): boolean {
    if (!this.typecheckExpression(isZeroNode.expr, {type: 'TypeNat'})) {
      const error = `expression [${printExpr(
        isZeroNode.expr
      )}] can not be used as an argument to Nat::iszero. Expected type TypeNat`
      throw new Error(error)
    }

    return expectedType.type === 'TypeBool'
  }

  typecheckNatRec(natRecNode: NatRec, expectedType: StellaType): boolean {
    if (!this.typecheckExpression(natRecNode.expr_1, {type: 'TypeNat'})) {
      const error = `${printExpr(natRecNode.expr_1)} should be of type Nat`
      throw new Error(error)
    }

    const initialValueStellaType = this.getExpressionType(natRecNode.expr_2)
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
      const error = `${printExpr(natRecNode.expr_3)} is expected to be of type ${printType(expectedFuncStellaType)}`
      throw new Error(error)
    }

    return this.checkSameTypes(initialValueStellaType, expectedType)
  }

  typecheckSucc(succNode: Succ, expectedType: StellaType): boolean {
    if (!this.typecheckExpression(succNode.expr, {type: 'TypeNat'})) {
      const error = `expression [${printExpr(succNode.expr)}] can not be used as an argument to succ. Expected type Nat`
      throw new Error(error)
    }
    return expectedType.type === 'TypeNat'
  }

  typecheckIf(ifNode: If, expectedType: StellaType): boolean {
    if (!this.typecheckExpression(ifNode.expr_1, {type: 'TypeBool'})) {
      const error = `Expected expression [${printExpr(ifNode.expr_1)}] to be of type Bool`
      throw new Error(error)
    }

    return (
      this.typecheckExpression(ifNode.expr_2, expectedType) && this.typecheckExpression(ifNode.expr_3, expectedType)
    )
  }

  typecheckAbstraction(abstractionNode: Abstraction, expectedType: StellaType): boolean {
    const returnType = this.getExpressionType(abstractionNode.expr)
    const paramsStellaTypes = abstractionNode.listparamdecl.map((param) => param.type_)
    const abstractionStellaType: TypeFun = {
      type: 'TypeFun',
      listtype: paramsStellaTypes,
      type_: returnType
    }

    return this.checkSameTypes(abstractionStellaType, expectedType)
  }

  typecheckApplication(applicationNode: Application, expectedType: StellaType): boolean {
    const functionType = this.getExpressionType(applicationNode.expr)
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
        )}. Actual type is ${printType(this.getExpressionType(expr))}`
        throw new Error(error)
      }
    })

    return this.checkSameTypes(functionType.type_, expectedType)
  }

  checkSameTypes(actualType: StellaType, expectedType: StellaType): boolean {
    switch (actualType.type) {
      case 'TypeNat':
        return expectedType.type === 'TypeNat'
      case 'TypeBool':
        return expectedType.type === 'TypeBool'
      case 'TypeFun':
        return this.checkSameFunTypes(actualType, expectedType)
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
}
