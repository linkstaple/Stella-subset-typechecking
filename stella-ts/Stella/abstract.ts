// TypeScript File generated by the BNF Converter (bnfc 2.9.6).

export type integerToken = {
  type: 'IntegerToken'
  value: number
}
export type stellaIdentToken = {
  type: 'StellaIdentToken'
  value: string
}
export type extensionNameToken = {
  type: 'ExtensionNameToken'
  value: string
}
export type memoryAddressToken = {
  type: 'MemoryAddressToken'
  value: string
}

export type program = AProgram

export type AProgram = {
  type: 'AProgram'
  languagedecl: languageDecl
  listextension: Array<extension>
  listdecl: Array<decl>
}

export type languageDecl = LanguageCore

export type LanguageCore = {
  type: 'LanguageCore'
}

export type extension = AnExtension

export type AnExtension = {
  type: 'AnExtension'
  listextensionname: Array<extensionNameToken>
}

export type decl = DeclFun | DeclFunGeneric | DeclTypeAlias | DeclExceptionType | DeclExceptionVariant

export type DeclFun = {
  type: 'DeclFun'
  listannotation: Array<annotation>
  stellaident: stellaIdentToken
  listparamdecl: Array<paramDecl>
  returntype: returnType
  throwtype: throwType
  listdecl: Array<decl>
  expr: expr
}

export type DeclFunGeneric = {
  type: 'DeclFunGeneric'
  listannotation: Array<annotation>
  stellaident: stellaIdentToken
  liststellaident: Array<stellaIdentToken>
  listparamdecl: Array<paramDecl>
  returntype: returnType
  throwtype: throwType
  listdecl: Array<decl>
  expr: expr
}

export type DeclTypeAlias = {
  type: 'DeclTypeAlias'
  stellaident: stellaIdentToken
  type_: type_
}

export type DeclExceptionType = {
  type: 'DeclExceptionType'
  type_: type_
}

export type DeclExceptionVariant = {
  type: 'DeclExceptionVariant'
  stellaident: stellaIdentToken
  type_: type_
}

export type localDecl = ALocalDecl

export type ALocalDecl = {
  type: 'ALocalDecl'
  decl: decl
}

export type annotation = InlineAnnotation

export type InlineAnnotation = {
  type: 'InlineAnnotation'
}

export type paramDecl = AParamDecl

export type AParamDecl = {
  type: 'AParamDecl'
  stellaident: stellaIdentToken
  type_: type_
}

export type returnType = NoReturnType | SomeReturnType

export type NoReturnType = {
  type: 'NoReturnType'
}

export type SomeReturnType = {
  type: 'SomeReturnType'
  type_: type_
}

export type throwType = NoThrowType | SomeThrowType

export type NoThrowType = {
  type: 'NoThrowType'
}

export type SomeThrowType = {
  type: 'SomeThrowType'
  listtype: Array<type_>
}

export type type_ = TypeAuto | TypeFun | TypeForAll | TypeRec | TypeSum | TypeTuple | TypeRecord | TypeVariant | TypeList | TypeBool | TypeNat | TypeUnit | TypeTop | TypeBottom | TypeRef | TypeVar

export type TypeAuto = {
  type: 'TypeAuto'
}

export type TypeFun = {
  type: 'TypeFun'
  listtype: Array<type_>
  type_: type_
}

export type TypeForAll = {
  type: 'TypeForAll'
  liststellaident: Array<stellaIdentToken>
  type_: type_
}

export type TypeRec = {
  type: 'TypeRec'
  stellaident: stellaIdentToken
  type_: type_
}

export type TypeSum = {
  type: 'TypeSum'
  type_1: type_
  type_2: type_
}

export type TypeTuple = {
  type: 'TypeTuple'
  listtype: Array<type_>
}

export type TypeRecord = {
  type: 'TypeRecord'
  listrecordfieldtype: Array<recordFieldType>
}

export type TypeVariant = {
  type: 'TypeVariant'
  listvariantfieldtype: Array<variantFieldType>
}

export type TypeList = {
  type: 'TypeList'
  type_: type_
}

export type TypeBool = {
  type: 'TypeBool'
}

export type TypeNat = {
  type: 'TypeNat'
}

export type TypeUnit = {
  type: 'TypeUnit'
}

export type TypeTop = {
  type: 'TypeTop'
}

export type TypeBottom = {
  type: 'TypeBottom'
}

export type TypeRef = {
  type: 'TypeRef'
  type_: type_
}

export type TypeVar = {
  type: 'TypeVar'
  stellaident: stellaIdentToken
}

export type matchCase = AMatchCase

export type AMatchCase = {
  type: 'AMatchCase'
  pattern: pattern
  expr: expr
}

export type optionalTyping = NoTyping | SomeTyping

export type NoTyping = {
  type: 'NoTyping'
}

export type SomeTyping = {
  type: 'SomeTyping'
  type_: type_
}

export type patternData = NoPatternData | SomePatternData

export type NoPatternData = {
  type: 'NoPatternData'
}

export type SomePatternData = {
  type: 'SomePatternData'
  pattern: pattern
}

export type exprData = NoExprData | SomeExprData

export type NoExprData = {
  type: 'NoExprData'
}

export type SomeExprData = {
  type: 'SomeExprData'
  expr: expr
}

export type pattern = PatternCastAs | PatternAsc | PatternVariant | PatternInl | PatternInr | PatternTuple | PatternRecord | PatternList | PatternCons | PatternFalse | PatternTrue | PatternUnit | PatternInt | PatternSucc | PatternVar

export type PatternCastAs = {
  type: 'PatternCastAs'
  pattern: pattern
  type_: type_
}

export type PatternAsc = {
  type: 'PatternAsc'
  pattern: pattern
  type_: type_
}

export type PatternVariant = {
  type: 'PatternVariant'
  stellaident: stellaIdentToken
  patterndata: patternData
}

export type PatternInl = {
  type: 'PatternInl'
  pattern: pattern
}

export type PatternInr = {
  type: 'PatternInr'
  pattern: pattern
}

export type PatternTuple = {
  type: 'PatternTuple'
  listpattern: Array<pattern>
}

export type PatternRecord = {
  type: 'PatternRecord'
  listlabelledpattern: Array<labelledPattern>
}

export type PatternList = {
  type: 'PatternList'
  listpattern: Array<pattern>
}

export type PatternCons = {
  type: 'PatternCons'
  pattern_1: pattern
  pattern_2: pattern
}

export type PatternFalse = {
  type: 'PatternFalse'
}

export type PatternTrue = {
  type: 'PatternTrue'
}

export type PatternUnit = {
  type: 'PatternUnit'
}

export type PatternInt = {
  type: 'PatternInt'
  integer: integerToken
}

export type PatternSucc = {
  type: 'PatternSucc'
  pattern: pattern
}

export type PatternVar = {
  type: 'PatternVar'
  stellaident: stellaIdentToken
}

export type labelledPattern = ALabelledPattern

export type ALabelledPattern = {
  type: 'ALabelledPattern'
  stellaident: stellaIdentToken
  pattern: pattern
}

export type binding = ABinding

export type ABinding = {
  type: 'ABinding'
  stellaident: stellaIdentToken
  expr: expr
}

export type expr = Sequence | Assign | If | Let | LetRec | TypeAbstraction | LessThan | LessThanOrEqual | GreaterThan | GreaterThanOrEqual | Equal | NotEqual | TypeAsc | TypeCast | Abstraction | Variant | Match | List | Add | Subtract | LogicOr | Multiply | Divide | LogicAnd | Ref | Deref | Application | TypeApplication | DotRecord | DotTuple | Tuple | Record | ConsList | Head | IsEmpty | Tail | Panic | Throw | TryCatch | TryWith | TryCastAs | Inl | Inr | Succ | LogicNot | Pred | IsZero | Fix | NatRec | Fold | Unfold | ConstTrue | ConstFalse | ConstUnit | ConstInt | ConstMemory | Var

export type Sequence = {
  type: 'Sequence'
  expr_1: expr
  expr_2: expr
}

export type Assign = {
  type: 'Assign'
  expr_1: expr
  expr_2: expr
}

export type If = {
  type: 'If'
  expr_1: expr
  expr_2: expr
  expr_3: expr
}

export type Let = {
  type: 'Let'
  listpatternbinding: Array<patternBinding>
  expr: expr
}

export type LetRec = {
  type: 'LetRec'
  listpatternbinding: Array<patternBinding>
  expr: expr
}

export type TypeAbstraction = {
  type: 'TypeAbstraction'
  liststellaident: Array<stellaIdentToken>
  expr: expr
}

export type LessThan = {
  type: 'LessThan'
  expr_1: expr
  expr_2: expr
}

export type LessThanOrEqual = {
  type: 'LessThanOrEqual'
  expr_1: expr
  expr_2: expr
}

export type GreaterThan = {
  type: 'GreaterThan'
  expr_1: expr
  expr_2: expr
}

export type GreaterThanOrEqual = {
  type: 'GreaterThanOrEqual'
  expr_1: expr
  expr_2: expr
}

export type Equal = {
  type: 'Equal'
  expr_1: expr
  expr_2: expr
}

export type NotEqual = {
  type: 'NotEqual'
  expr_1: expr
  expr_2: expr
}

export type TypeAsc = {
  type: 'TypeAsc'
  expr: expr
  type_: type_
}

export type TypeCast = {
  type: 'TypeCast'
  expr: expr
  type_: type_
}

export type Abstraction = {
  type: 'Abstraction'
  listparamdecl: Array<paramDecl>
  expr: expr
}

export type Variant = {
  type: 'Variant'
  stellaident: stellaIdentToken
  exprdata: exprData
}

export type Match = {
  type: 'Match'
  expr: expr
  listmatchcase: Array<matchCase>
}

export type List = {
  type: 'List'
  listexpr: Array<expr>
}

export type Add = {
  type: 'Add'
  expr_1: expr
  expr_2: expr
}

export type Subtract = {
  type: 'Subtract'
  expr_1: expr
  expr_2: expr
}

export type LogicOr = {
  type: 'LogicOr'
  expr_1: expr
  expr_2: expr
}

export type Multiply = {
  type: 'Multiply'
  expr_1: expr
  expr_2: expr
}

export type Divide = {
  type: 'Divide'
  expr_1: expr
  expr_2: expr
}

export type LogicAnd = {
  type: 'LogicAnd'
  expr_1: expr
  expr_2: expr
}

export type Ref = {
  type: 'Ref'
  expr: expr
}

export type Deref = {
  type: 'Deref'
  expr: expr
}

export type Application = {
  type: 'Application'
  expr: expr
  listexpr: Array<expr>
}

export type TypeApplication = {
  type: 'TypeApplication'
  expr: expr
  listtype: Array<type_>
}

export type DotRecord = {
  type: 'DotRecord'
  expr: expr
  stellaident: stellaIdentToken
}

export type DotTuple = {
  type: 'DotTuple'
  expr: expr
  integer: integerToken
}

export type Tuple = {
  type: 'Tuple'
  listexpr: Array<expr>
}

export type Record = {
  type: 'Record'
  listbinding: Array<binding>
}

export type ConsList = {
  type: 'ConsList'
  expr_1: expr
  expr_2: expr
}

export type Head = {
  type: 'Head'
  expr: expr
}

export type IsEmpty = {
  type: 'IsEmpty'
  expr: expr
}

export type Tail = {
  type: 'Tail'
  expr: expr
}

export type Panic = {
  type: 'Panic'
}

export type Throw = {
  type: 'Throw'
  expr: expr
}

export type TryCatch = {
  type: 'TryCatch'
  expr_1: expr
  pattern: pattern
  expr_2: expr
}

export type TryWith = {
  type: 'TryWith'
  expr_1: expr
  expr_2: expr
}

export type TryCastAs = {
  type: 'TryCastAs'
  expr_1: expr
  type_: type_
  pattern: pattern
  expr_2: expr
  expr_3: expr
}

export type Inl = {
  type: 'Inl'
  expr: expr
}

export type Inr = {
  type: 'Inr'
  expr: expr
}

export type Succ = {
  type: 'Succ'
  expr: expr
}

export type LogicNot = {
  type: 'LogicNot'
  expr: expr
}

export type Pred = {
  type: 'Pred'
  expr: expr
}

export type IsZero = {
  type: 'IsZero'
  expr: expr
}

export type Fix = {
  type: 'Fix'
  expr: expr
}

export type NatRec = {
  type: 'NatRec'
  expr_1: expr
  expr_2: expr
  expr_3: expr
}

export type Fold = {
  type: 'Fold'
  type_: type_
  expr: expr
}

export type Unfold = {
  type: 'Unfold'
  type_: type_
  expr: expr
}

export type ConstTrue = {
  type: 'ConstTrue'
}

export type ConstFalse = {
  type: 'ConstFalse'
}

export type ConstUnit = {
  type: 'ConstUnit'
}

export type ConstInt = {
  type: 'ConstInt'
  integer: integerToken
}

export type ConstMemory = {
  type: 'ConstMemory'
  memoryaddress: memoryAddressToken
}

export type Var = {
  type: 'Var'
  stellaident: stellaIdentToken
}

export type patternBinding = APatternBinding

export type APatternBinding = {
  type: 'APatternBinding'
  pattern: pattern
  expr: expr
}

export type variantFieldType = AVariantFieldType

export type AVariantFieldType = {
  type: 'AVariantFieldType'
  stellaident: stellaIdentToken
  optionaltyping: optionalTyping
}

export type recordFieldType = ARecordFieldType

export type ARecordFieldType = {
  type: 'ARecordFieldType'
  stellaident: stellaIdentToken
  type_: type_
}

export type typing = ATyping

export type ATyping = {
  type: 'ATyping'
  expr: expr
  type_: type_
}
