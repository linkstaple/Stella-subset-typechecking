// Generated from Stella/StellaParser.g4 by ANTLR 4.13.1

import {ParseTreeListener} from "antlr4";


import { Start_ProgramContext } from "./StellaParser";
import { Start_ListStellaIdentContext } from "./StellaParser";
import { Start_LanguageDeclContext } from "./StellaParser";
import { Start_ExtensionContext } from "./StellaParser";
import { Start_ListExtensionNameContext } from "./StellaParser";
import { Start_ListExtensionContext } from "./StellaParser";
import { Start_DeclContext } from "./StellaParser";
import { Start_ListDeclContext } from "./StellaParser";
import { Start_LocalDeclContext } from "./StellaParser";
import { Start_ListLocalDeclContext } from "./StellaParser";
import { Start_AnnotationContext } from "./StellaParser";
import { Start_ListAnnotationContext } from "./StellaParser";
import { Start_ParamDeclContext } from "./StellaParser";
import { Start_ListParamDeclContext } from "./StellaParser";
import { Start_ReturnTypeContext } from "./StellaParser";
import { Start_ThrowTypeContext } from "./StellaParser";
import { Start_Type9Context } from "./StellaParser";
import { Start_ListType9Context } from "./StellaParser";
import { Start_MatchCaseContext } from "./StellaParser";
import { Start_ListMatchCaseContext } from "./StellaParser";
import { Start_OptionalTypingContext } from "./StellaParser";
import { Start_PatternDataContext } from "./StellaParser";
import { Start_ExprDataContext } from "./StellaParser";
import { Start_PatternContext } from "./StellaParser";
import { Start_ListPatternContext } from "./StellaParser";
import { Start_LabelledPatternContext } from "./StellaParser";
import { Start_ListLabelledPatternContext } from "./StellaParser";
import { Start_BindingContext } from "./StellaParser";
import { Start_ListBindingContext } from "./StellaParser";
import { Start_ExprContext } from "./StellaParser";
import { Start_ListExprContext } from "./StellaParser";
import { Start_Expr1Context } from "./StellaParser";
import { Start_PatternBindingContext } from "./StellaParser";
import { Start_ListPatternBindingContext } from "./StellaParser";
import { Start_Expr2Context } from "./StellaParser";
import { Start_ListExpr2Context } from "./StellaParser";
import { Start_Expr3Context } from "./StellaParser";
import { Start_Expr4Context } from "./StellaParser";
import { Start_Expr5Context } from "./StellaParser";
import { Start_Expr6Context } from "./StellaParser";
import { Start_Expr7Context } from "./StellaParser";
import { Start_TypeContext } from "./StellaParser";
import { Start_Type1Context } from "./StellaParser";
import { Start_Type2Context } from "./StellaParser";
import { Start_Type3Context } from "./StellaParser";
import { Start_ListTypeContext } from "./StellaParser";
import { Start_VariantFieldTypeContext } from "./StellaParser";
import { Start_ListVariantFieldTypeContext } from "./StellaParser";
import { Start_RecordFieldTypeContext } from "./StellaParser";
import { Start_ListRecordFieldTypeContext } from "./StellaParser";
import { Start_TypingContext } from "./StellaParser";
import { AProgramContext } from "./StellaParser";
import { ListStellaIdent_EmptyContext } from "./StellaParser";
import { ListStellaIdent_AppendLastContext } from "./StellaParser";
import { ListStellaIdent_PrependFirstContext } from "./StellaParser";
import { LanguageCoreContext } from "./StellaParser";
import { AnExtensionContext } from "./StellaParser";
import { ListExtensionName_EmptyContext } from "./StellaParser";
import { ListExtensionName_AppendLastContext } from "./StellaParser";
import { ListExtensionName_PrependFirstContext } from "./StellaParser";
import { ListExtension_PrependFirstContext } from "./StellaParser";
import { ListExtension_EmptyContext } from "./StellaParser";
import { DeclFunContext } from "./StellaParser";
import { DeclFunGenericContext } from "./StellaParser";
import { DeclTypeAliasContext } from "./StellaParser";
import { DeclExceptionTypeContext } from "./StellaParser";
import { DeclExceptionVariantContext } from "./StellaParser";
import { ListDecl_EmptyContext } from "./StellaParser";
import { ListDecl_PrependFirstContext } from "./StellaParser";
import { ALocalDeclContext } from "./StellaParser";
import { ListLocalDecl_EmptyContext } from "./StellaParser";
import { ListLocalDecl_PrependFirstContext } from "./StellaParser";
import { InlineAnnotationContext } from "./StellaParser";
import { ListAnnotation_PrependFirstContext } from "./StellaParser";
import { ListAnnotation_EmptyContext } from "./StellaParser";
import { AParamDeclContext } from "./StellaParser";
import { ListParamDecl_EmptyContext } from "./StellaParser";
import { ListParamDecl_AppendLastContext } from "./StellaParser";
import { ListParamDecl_PrependFirstContext } from "./StellaParser";
import { NoReturnTypeContext } from "./StellaParser";
import { SomeReturnTypeContext } from "./StellaParser";
import { NoThrowTypeContext } from "./StellaParser";
import { SomeThrowTypeContext } from "./StellaParser";
import { Coercion_Type9_1Context } from "./StellaParser";
import { ListType9_AppendLastContext } from "./StellaParser";
import { ListType9_PrependFirstContext } from "./StellaParser";
import { AMatchCaseContext } from "./StellaParser";
import { ListMatchCase_EmptyContext } from "./StellaParser";
import { ListMatchCase_AppendLastContext } from "./StellaParser";
import { ListMatchCase_PrependFirstContext } from "./StellaParser";
import { NoTypingContext } from "./StellaParser";
import { SomeTypingContext } from "./StellaParser";
import { NoPatternDataContext } from "./StellaParser";
import { SomePatternDataContext } from "./StellaParser";
import { NoExprDataContext } from "./StellaParser";
import { SomeExprDataContext } from "./StellaParser";
import { PatternConsContext } from "./StellaParser";
import { Coercion_Pattern_16Context } from "./StellaParser";
import { PatternTupleContext } from "./StellaParser";
import { PatternListContext } from "./StellaParser";
import { PatternRecordContext } from "./StellaParser";
import { PatternVariantContext } from "./StellaParser";
import { PatternAscContext } from "./StellaParser";
import { PatternIntContext } from "./StellaParser";
import { PatternInrContext } from "./StellaParser";
import { PatternTrueContext } from "./StellaParser";
import { PatternInlContext } from "./StellaParser";
import { PatternVarContext } from "./StellaParser";
import { PatternSuccContext } from "./StellaParser";
import { PatternFalseContext } from "./StellaParser";
import { PatternUnitContext } from "./StellaParser";
import { PatternCastAsContext } from "./StellaParser";
import { ListPattern_EmptyContext } from "./StellaParser";
import { ListPattern_AppendLastContext } from "./StellaParser";
import { ListPattern_PrependFirstContext } from "./StellaParser";
import { ALabelledPatternContext } from "./StellaParser";
import { ListLabelledPattern_AppendLastContext } from "./StellaParser";
import { ListLabelledPattern_PrependFirstContext } from "./StellaParser";
import { ABindingContext } from "./StellaParser";
import { ListBinding_AppendLastContext } from "./StellaParser";
import { ListBinding_PrependFirstContext } from "./StellaParser";
import { SequenceContext } from "./StellaParser";
import { Coercion_Expr_2Context } from "./StellaParser";
import { LetContext } from "./StellaParser";
import { LetRecContext } from "./StellaParser";
import { TypeAbstractionContext } from "./StellaParser";
import { Coercion_Expr_6Context } from "./StellaParser";
import { ListExpr_EmptyContext } from "./StellaParser";
import { ListExpr_AppendLastContext } from "./StellaParser";
import { ListExpr_PrependFirstContext } from "./StellaParser";
import { AssignContext } from "./StellaParser";
import { IfContext } from "./StellaParser";
import { Coercion_Expr1_3Context } from "./StellaParser";
import { APatternBindingContext } from "./StellaParser";
import { ListPatternBinding_AppendLastContext } from "./StellaParser";
import { ListPatternBinding_PrependFirstContext } from "./StellaParser";
import { LessThanContext } from "./StellaParser";
import { LessThanOrEqualContext } from "./StellaParser";
import { GreaterThanContext } from "./StellaParser";
import { GreaterThanOrEqualContext } from "./StellaParser";
import { EqualContext } from "./StellaParser";
import { NotEqualContext } from "./StellaParser";
import { Coercion_Expr2_7Context } from "./StellaParser";
import { ListExpr2_AppendLastContext } from "./StellaParser";
import { ListExpr2_PrependFirstContext } from "./StellaParser";
import { VariantContext } from "./StellaParser";
import { AddContext } from "./StellaParser";
import { LogicOrContext } from "./StellaParser";
import { Coercion_Expr3_10Context } from "./StellaParser";
import { TypeAscContext } from "./StellaParser";
import { SubtractContext } from "./StellaParser";
import { ListContext } from "./StellaParser";
import { TypeCastContext } from "./StellaParser";
import { AbstractionContext } from "./StellaParser";
import { MatchContext } from "./StellaParser";
import { DivideContext } from "./StellaParser";
import { MultiplyContext } from "./StellaParser";
import { Coercion_Expr4_4Context } from "./StellaParser";
import { LogicAndContext } from "./StellaParser";
import { RefContext } from "./StellaParser";
import { DerefContext } from "./StellaParser";
import { Coercion_Expr5_3Context } from "./StellaParser";
import { IsEmptyContext } from "./StellaParser";
import { FoldContext } from "./StellaParser";
import { PanicContext } from "./StellaParser";
import { IsZeroContext } from "./StellaParser";
import { SuccContext } from "./StellaParser";
import { InlContext } from "./StellaParser";
import { InrContext } from "./StellaParser";
import { LogicNotContext } from "./StellaParser";
import { DotRecordContext } from "./StellaParser";
import { ThrowContext } from "./StellaParser";
import { TailContext } from "./StellaParser";
import { RecordContext } from "./StellaParser";
import { TypeApplicationContext } from "./StellaParser";
import { TryCatchContext } from "./StellaParser";
import { HeadContext } from "./StellaParser";
import { TryCastAsContext } from "./StellaParser";
import { TryWithContext } from "./StellaParser";
import { PredContext } from "./StellaParser";
import { NatRecContext } from "./StellaParser";
import { Coercion_Expr6_26Context } from "./StellaParser";
import { UnfoldContext } from "./StellaParser";
import { DotTupleContext } from "./StellaParser";
import { FixContext } from "./StellaParser";
import { ApplicationContext } from "./StellaParser";
import { TupleContext } from "./StellaParser";
import { ConsListContext } from "./StellaParser";
import { ConstTrueContext } from "./StellaParser";
import { ConstFalseContext } from "./StellaParser";
import { ConstUnitContext } from "./StellaParser";
import { ConstIntContext } from "./StellaParser";
import { ConstMemoryContext } from "./StellaParser";
import { VarContext } from "./StellaParser";
import { Coercion_Expr7_7Context } from "./StellaParser";
import { TypeAutoContext } from "./StellaParser";
import { TypeFunContext } from "./StellaParser";
import { TypeForAllContext } from "./StellaParser";
import { TypeRecContext } from "./StellaParser";
import { Coercion_Type_5Context } from "./StellaParser";
import { TypeSumContext } from "./StellaParser";
import { Coercion_Type1_2Context } from "./StellaParser";
import { TypeTupleContext } from "./StellaParser";
import { TypeRecordContext } from "./StellaParser";
import { TypeVariantContext } from "./StellaParser";
import { TypeListContext } from "./StellaParser";
import { Coercion_Type2_5Context } from "./StellaParser";
import { TypeBoolContext } from "./StellaParser";
import { TypeNatContext } from "./StellaParser";
import { TypeUnitContext } from "./StellaParser";
import { TypeTopContext } from "./StellaParser";
import { TypeBottomContext } from "./StellaParser";
import { TypeRefContext } from "./StellaParser";
import { TypeVarContext } from "./StellaParser";
import { Coercion_Type3_8Context } from "./StellaParser";
import { ListType_EmptyContext } from "./StellaParser";
import { ListType_AppendLastContext } from "./StellaParser";
import { ListType_PrependFirstContext } from "./StellaParser";
import { AVariantFieldTypeContext } from "./StellaParser";
import { ListVariantFieldType_EmptyContext } from "./StellaParser";
import { ListVariantFieldType_AppendLastContext } from "./StellaParser";
import { ListVariantFieldType_PrependFirstContext } from "./StellaParser";
import { ARecordFieldTypeContext } from "./StellaParser";
import { ListRecordFieldType_AppendLastContext } from "./StellaParser";
import { ListRecordFieldType_PrependFirstContext } from "./StellaParser";
import { ATypingContext } from "./StellaParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `StellaParser`.
 */
export default class StellaParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `StellaParser.start_Program`.
	 * @param ctx the parse tree
	 */
	enterStart_Program?: (ctx: Start_ProgramContext) => void;
	/**
	 * Exit a parse tree produced by `StellaParser.start_Program`.
	 * @param ctx the parse tree
	 */
	exitStart_Program?: (ctx: Start_ProgramContext) => void;
	/**
	 * Enter a parse tree produced by `StellaParser.start_ListStellaIdent`.
	 * @param ctx the parse tree
	 */
	enterStart_ListStellaIdent?: (ctx: Start_ListStellaIdentContext) => void;
	/**
	 * Exit a parse tree produced by `StellaParser.start_ListStellaIdent`.
	 * @param ctx the parse tree
	 */
	exitStart_ListStellaIdent?: (ctx: Start_ListStellaIdentContext) => void;
	/**
	 * Enter a parse tree produced by `StellaParser.start_LanguageDecl`.
	 * @param ctx the parse tree
	 */
	enterStart_LanguageDecl?: (ctx: Start_LanguageDeclContext) => void;
	/**
	 * Exit a parse tree produced by `StellaParser.start_LanguageDecl`.
	 * @param ctx the parse tree
	 */
	exitStart_LanguageDecl?: (ctx: Start_LanguageDeclContext) => void;
	/**
	 * Enter a parse tree produced by `StellaParser.start_Extension`.
	 * @param ctx the parse tree
	 */
	enterStart_Extension?: (ctx: Start_ExtensionContext) => void;
	/**
	 * Exit a parse tree produced by `StellaParser.start_Extension`.
	 * @param ctx the parse tree
	 */
	exitStart_Extension?: (ctx: Start_ExtensionContext) => void;
	/**
	 * Enter a parse tree produced by `StellaParser.start_ListExtensionName`.
	 * @param ctx the parse tree
	 */
	enterStart_ListExtensionName?: (ctx: Start_ListExtensionNameContext) => void;
	/**
	 * Exit a parse tree produced by `StellaParser.start_ListExtensionName`.
	 * @param ctx the parse tree
	 */
	exitStart_ListExtensionName?: (ctx: Start_ListExtensionNameContext) => void;
	/**
	 * Enter a parse tree produced by `StellaParser.start_ListExtension`.
	 * @param ctx the parse tree
	 */
	enterStart_ListExtension?: (ctx: Start_ListExtensionContext) => void;
	/**
	 * Exit a parse tree produced by `StellaParser.start_ListExtension`.
	 * @param ctx the parse tree
	 */
	exitStart_ListExtension?: (ctx: Start_ListExtensionContext) => void;
	/**
	 * Enter a parse tree produced by `StellaParser.start_Decl`.
	 * @param ctx the parse tree
	 */
	enterStart_Decl?: (ctx: Start_DeclContext) => void;
	/**
	 * Exit a parse tree produced by `StellaParser.start_Decl`.
	 * @param ctx the parse tree
	 */
	exitStart_Decl?: (ctx: Start_DeclContext) => void;
	/**
	 * Enter a parse tree produced by `StellaParser.start_ListDecl`.
	 * @param ctx the parse tree
	 */
	enterStart_ListDecl?: (ctx: Start_ListDeclContext) => void;
	/**
	 * Exit a parse tree produced by `StellaParser.start_ListDecl`.
	 * @param ctx the parse tree
	 */
	exitStart_ListDecl?: (ctx: Start_ListDeclContext) => void;
	/**
	 * Enter a parse tree produced by `StellaParser.start_LocalDecl`.
	 * @param ctx the parse tree
	 */
	enterStart_LocalDecl?: (ctx: Start_LocalDeclContext) => void;
	/**
	 * Exit a parse tree produced by `StellaParser.start_LocalDecl`.
	 * @param ctx the parse tree
	 */
	exitStart_LocalDecl?: (ctx: Start_LocalDeclContext) => void;
	/**
	 * Enter a parse tree produced by `StellaParser.start_ListLocalDecl`.
	 * @param ctx the parse tree
	 */
	enterStart_ListLocalDecl?: (ctx: Start_ListLocalDeclContext) => void;
	/**
	 * Exit a parse tree produced by `StellaParser.start_ListLocalDecl`.
	 * @param ctx the parse tree
	 */
	exitStart_ListLocalDecl?: (ctx: Start_ListLocalDeclContext) => void;
	/**
	 * Enter a parse tree produced by `StellaParser.start_Annotation`.
	 * @param ctx the parse tree
	 */
	enterStart_Annotation?: (ctx: Start_AnnotationContext) => void;
	/**
	 * Exit a parse tree produced by `StellaParser.start_Annotation`.
	 * @param ctx the parse tree
	 */
	exitStart_Annotation?: (ctx: Start_AnnotationContext) => void;
	/**
	 * Enter a parse tree produced by `StellaParser.start_ListAnnotation`.
	 * @param ctx the parse tree
	 */
	enterStart_ListAnnotation?: (ctx: Start_ListAnnotationContext) => void;
	/**
	 * Exit a parse tree produced by `StellaParser.start_ListAnnotation`.
	 * @param ctx the parse tree
	 */
	exitStart_ListAnnotation?: (ctx: Start_ListAnnotationContext) => void;
	/**
	 * Enter a parse tree produced by `StellaParser.start_ParamDecl`.
	 * @param ctx the parse tree
	 */
	enterStart_ParamDecl?: (ctx: Start_ParamDeclContext) => void;
	/**
	 * Exit a parse tree produced by `StellaParser.start_ParamDecl`.
	 * @param ctx the parse tree
	 */
	exitStart_ParamDecl?: (ctx: Start_ParamDeclContext) => void;
	/**
	 * Enter a parse tree produced by `StellaParser.start_ListParamDecl`.
	 * @param ctx the parse tree
	 */
	enterStart_ListParamDecl?: (ctx: Start_ListParamDeclContext) => void;
	/**
	 * Exit a parse tree produced by `StellaParser.start_ListParamDecl`.
	 * @param ctx the parse tree
	 */
	exitStart_ListParamDecl?: (ctx: Start_ListParamDeclContext) => void;
	/**
	 * Enter a parse tree produced by `StellaParser.start_ReturnType`.
	 * @param ctx the parse tree
	 */
	enterStart_ReturnType?: (ctx: Start_ReturnTypeContext) => void;
	/**
	 * Exit a parse tree produced by `StellaParser.start_ReturnType`.
	 * @param ctx the parse tree
	 */
	exitStart_ReturnType?: (ctx: Start_ReturnTypeContext) => void;
	/**
	 * Enter a parse tree produced by `StellaParser.start_ThrowType`.
	 * @param ctx the parse tree
	 */
	enterStart_ThrowType?: (ctx: Start_ThrowTypeContext) => void;
	/**
	 * Exit a parse tree produced by `StellaParser.start_ThrowType`.
	 * @param ctx the parse tree
	 */
	exitStart_ThrowType?: (ctx: Start_ThrowTypeContext) => void;
	/**
	 * Enter a parse tree produced by `StellaParser.start_Type9`.
	 * @param ctx the parse tree
	 */
	enterStart_Type9?: (ctx: Start_Type9Context) => void;
	/**
	 * Exit a parse tree produced by `StellaParser.start_Type9`.
	 * @param ctx the parse tree
	 */
	exitStart_Type9?: (ctx: Start_Type9Context) => void;
	/**
	 * Enter a parse tree produced by `StellaParser.start_ListType9`.
	 * @param ctx the parse tree
	 */
	enterStart_ListType9?: (ctx: Start_ListType9Context) => void;
	/**
	 * Exit a parse tree produced by `StellaParser.start_ListType9`.
	 * @param ctx the parse tree
	 */
	exitStart_ListType9?: (ctx: Start_ListType9Context) => void;
	/**
	 * Enter a parse tree produced by `StellaParser.start_MatchCase`.
	 * @param ctx the parse tree
	 */
	enterStart_MatchCase?: (ctx: Start_MatchCaseContext) => void;
	/**
	 * Exit a parse tree produced by `StellaParser.start_MatchCase`.
	 * @param ctx the parse tree
	 */
	exitStart_MatchCase?: (ctx: Start_MatchCaseContext) => void;
	/**
	 * Enter a parse tree produced by `StellaParser.start_ListMatchCase`.
	 * @param ctx the parse tree
	 */
	enterStart_ListMatchCase?: (ctx: Start_ListMatchCaseContext) => void;
	/**
	 * Exit a parse tree produced by `StellaParser.start_ListMatchCase`.
	 * @param ctx the parse tree
	 */
	exitStart_ListMatchCase?: (ctx: Start_ListMatchCaseContext) => void;
	/**
	 * Enter a parse tree produced by `StellaParser.start_OptionalTyping`.
	 * @param ctx the parse tree
	 */
	enterStart_OptionalTyping?: (ctx: Start_OptionalTypingContext) => void;
	/**
	 * Exit a parse tree produced by `StellaParser.start_OptionalTyping`.
	 * @param ctx the parse tree
	 */
	exitStart_OptionalTyping?: (ctx: Start_OptionalTypingContext) => void;
	/**
	 * Enter a parse tree produced by `StellaParser.start_PatternData`.
	 * @param ctx the parse tree
	 */
	enterStart_PatternData?: (ctx: Start_PatternDataContext) => void;
	/**
	 * Exit a parse tree produced by `StellaParser.start_PatternData`.
	 * @param ctx the parse tree
	 */
	exitStart_PatternData?: (ctx: Start_PatternDataContext) => void;
	/**
	 * Enter a parse tree produced by `StellaParser.start_ExprData`.
	 * @param ctx the parse tree
	 */
	enterStart_ExprData?: (ctx: Start_ExprDataContext) => void;
	/**
	 * Exit a parse tree produced by `StellaParser.start_ExprData`.
	 * @param ctx the parse tree
	 */
	exitStart_ExprData?: (ctx: Start_ExprDataContext) => void;
	/**
	 * Enter a parse tree produced by `StellaParser.start_Pattern`.
	 * @param ctx the parse tree
	 */
	enterStart_Pattern?: (ctx: Start_PatternContext) => void;
	/**
	 * Exit a parse tree produced by `StellaParser.start_Pattern`.
	 * @param ctx the parse tree
	 */
	exitStart_Pattern?: (ctx: Start_PatternContext) => void;
	/**
	 * Enter a parse tree produced by `StellaParser.start_ListPattern`.
	 * @param ctx the parse tree
	 */
	enterStart_ListPattern?: (ctx: Start_ListPatternContext) => void;
	/**
	 * Exit a parse tree produced by `StellaParser.start_ListPattern`.
	 * @param ctx the parse tree
	 */
	exitStart_ListPattern?: (ctx: Start_ListPatternContext) => void;
	/**
	 * Enter a parse tree produced by `StellaParser.start_LabelledPattern`.
	 * @param ctx the parse tree
	 */
	enterStart_LabelledPattern?: (ctx: Start_LabelledPatternContext) => void;
	/**
	 * Exit a parse tree produced by `StellaParser.start_LabelledPattern`.
	 * @param ctx the parse tree
	 */
	exitStart_LabelledPattern?: (ctx: Start_LabelledPatternContext) => void;
	/**
	 * Enter a parse tree produced by `StellaParser.start_ListLabelledPattern`.
	 * @param ctx the parse tree
	 */
	enterStart_ListLabelledPattern?: (ctx: Start_ListLabelledPatternContext) => void;
	/**
	 * Exit a parse tree produced by `StellaParser.start_ListLabelledPattern`.
	 * @param ctx the parse tree
	 */
	exitStart_ListLabelledPattern?: (ctx: Start_ListLabelledPatternContext) => void;
	/**
	 * Enter a parse tree produced by `StellaParser.start_Binding`.
	 * @param ctx the parse tree
	 */
	enterStart_Binding?: (ctx: Start_BindingContext) => void;
	/**
	 * Exit a parse tree produced by `StellaParser.start_Binding`.
	 * @param ctx the parse tree
	 */
	exitStart_Binding?: (ctx: Start_BindingContext) => void;
	/**
	 * Enter a parse tree produced by `StellaParser.start_ListBinding`.
	 * @param ctx the parse tree
	 */
	enterStart_ListBinding?: (ctx: Start_ListBindingContext) => void;
	/**
	 * Exit a parse tree produced by `StellaParser.start_ListBinding`.
	 * @param ctx the parse tree
	 */
	exitStart_ListBinding?: (ctx: Start_ListBindingContext) => void;
	/**
	 * Enter a parse tree produced by `StellaParser.start_Expr`.
	 * @param ctx the parse tree
	 */
	enterStart_Expr?: (ctx: Start_ExprContext) => void;
	/**
	 * Exit a parse tree produced by `StellaParser.start_Expr`.
	 * @param ctx the parse tree
	 */
	exitStart_Expr?: (ctx: Start_ExprContext) => void;
	/**
	 * Enter a parse tree produced by `StellaParser.start_ListExpr`.
	 * @param ctx the parse tree
	 */
	enterStart_ListExpr?: (ctx: Start_ListExprContext) => void;
	/**
	 * Exit a parse tree produced by `StellaParser.start_ListExpr`.
	 * @param ctx the parse tree
	 */
	exitStart_ListExpr?: (ctx: Start_ListExprContext) => void;
	/**
	 * Enter a parse tree produced by `StellaParser.start_Expr1`.
	 * @param ctx the parse tree
	 */
	enterStart_Expr1?: (ctx: Start_Expr1Context) => void;
	/**
	 * Exit a parse tree produced by `StellaParser.start_Expr1`.
	 * @param ctx the parse tree
	 */
	exitStart_Expr1?: (ctx: Start_Expr1Context) => void;
	/**
	 * Enter a parse tree produced by `StellaParser.start_PatternBinding`.
	 * @param ctx the parse tree
	 */
	enterStart_PatternBinding?: (ctx: Start_PatternBindingContext) => void;
	/**
	 * Exit a parse tree produced by `StellaParser.start_PatternBinding`.
	 * @param ctx the parse tree
	 */
	exitStart_PatternBinding?: (ctx: Start_PatternBindingContext) => void;
	/**
	 * Enter a parse tree produced by `StellaParser.start_ListPatternBinding`.
	 * @param ctx the parse tree
	 */
	enterStart_ListPatternBinding?: (ctx: Start_ListPatternBindingContext) => void;
	/**
	 * Exit a parse tree produced by `StellaParser.start_ListPatternBinding`.
	 * @param ctx the parse tree
	 */
	exitStart_ListPatternBinding?: (ctx: Start_ListPatternBindingContext) => void;
	/**
	 * Enter a parse tree produced by `StellaParser.start_Expr2`.
	 * @param ctx the parse tree
	 */
	enterStart_Expr2?: (ctx: Start_Expr2Context) => void;
	/**
	 * Exit a parse tree produced by `StellaParser.start_Expr2`.
	 * @param ctx the parse tree
	 */
	exitStart_Expr2?: (ctx: Start_Expr2Context) => void;
	/**
	 * Enter a parse tree produced by `StellaParser.start_ListExpr2`.
	 * @param ctx the parse tree
	 */
	enterStart_ListExpr2?: (ctx: Start_ListExpr2Context) => void;
	/**
	 * Exit a parse tree produced by `StellaParser.start_ListExpr2`.
	 * @param ctx the parse tree
	 */
	exitStart_ListExpr2?: (ctx: Start_ListExpr2Context) => void;
	/**
	 * Enter a parse tree produced by `StellaParser.start_Expr3`.
	 * @param ctx the parse tree
	 */
	enterStart_Expr3?: (ctx: Start_Expr3Context) => void;
	/**
	 * Exit a parse tree produced by `StellaParser.start_Expr3`.
	 * @param ctx the parse tree
	 */
	exitStart_Expr3?: (ctx: Start_Expr3Context) => void;
	/**
	 * Enter a parse tree produced by `StellaParser.start_Expr4`.
	 * @param ctx the parse tree
	 */
	enterStart_Expr4?: (ctx: Start_Expr4Context) => void;
	/**
	 * Exit a parse tree produced by `StellaParser.start_Expr4`.
	 * @param ctx the parse tree
	 */
	exitStart_Expr4?: (ctx: Start_Expr4Context) => void;
	/**
	 * Enter a parse tree produced by `StellaParser.start_Expr5`.
	 * @param ctx the parse tree
	 */
	enterStart_Expr5?: (ctx: Start_Expr5Context) => void;
	/**
	 * Exit a parse tree produced by `StellaParser.start_Expr5`.
	 * @param ctx the parse tree
	 */
	exitStart_Expr5?: (ctx: Start_Expr5Context) => void;
	/**
	 * Enter a parse tree produced by `StellaParser.start_Expr6`.
	 * @param ctx the parse tree
	 */
	enterStart_Expr6?: (ctx: Start_Expr6Context) => void;
	/**
	 * Exit a parse tree produced by `StellaParser.start_Expr6`.
	 * @param ctx the parse tree
	 */
	exitStart_Expr6?: (ctx: Start_Expr6Context) => void;
	/**
	 * Enter a parse tree produced by `StellaParser.start_Expr7`.
	 * @param ctx the parse tree
	 */
	enterStart_Expr7?: (ctx: Start_Expr7Context) => void;
	/**
	 * Exit a parse tree produced by `StellaParser.start_Expr7`.
	 * @param ctx the parse tree
	 */
	exitStart_Expr7?: (ctx: Start_Expr7Context) => void;
	/**
	 * Enter a parse tree produced by `StellaParser.start_Type`.
	 * @param ctx the parse tree
	 */
	enterStart_Type?: (ctx: Start_TypeContext) => void;
	/**
	 * Exit a parse tree produced by `StellaParser.start_Type`.
	 * @param ctx the parse tree
	 */
	exitStart_Type?: (ctx: Start_TypeContext) => void;
	/**
	 * Enter a parse tree produced by `StellaParser.start_Type1`.
	 * @param ctx the parse tree
	 */
	enterStart_Type1?: (ctx: Start_Type1Context) => void;
	/**
	 * Exit a parse tree produced by `StellaParser.start_Type1`.
	 * @param ctx the parse tree
	 */
	exitStart_Type1?: (ctx: Start_Type1Context) => void;
	/**
	 * Enter a parse tree produced by `StellaParser.start_Type2`.
	 * @param ctx the parse tree
	 */
	enterStart_Type2?: (ctx: Start_Type2Context) => void;
	/**
	 * Exit a parse tree produced by `StellaParser.start_Type2`.
	 * @param ctx the parse tree
	 */
	exitStart_Type2?: (ctx: Start_Type2Context) => void;
	/**
	 * Enter a parse tree produced by `StellaParser.start_Type3`.
	 * @param ctx the parse tree
	 */
	enterStart_Type3?: (ctx: Start_Type3Context) => void;
	/**
	 * Exit a parse tree produced by `StellaParser.start_Type3`.
	 * @param ctx the parse tree
	 */
	exitStart_Type3?: (ctx: Start_Type3Context) => void;
	/**
	 * Enter a parse tree produced by `StellaParser.start_ListType`.
	 * @param ctx the parse tree
	 */
	enterStart_ListType?: (ctx: Start_ListTypeContext) => void;
	/**
	 * Exit a parse tree produced by `StellaParser.start_ListType`.
	 * @param ctx the parse tree
	 */
	exitStart_ListType?: (ctx: Start_ListTypeContext) => void;
	/**
	 * Enter a parse tree produced by `StellaParser.start_VariantFieldType`.
	 * @param ctx the parse tree
	 */
	enterStart_VariantFieldType?: (ctx: Start_VariantFieldTypeContext) => void;
	/**
	 * Exit a parse tree produced by `StellaParser.start_VariantFieldType`.
	 * @param ctx the parse tree
	 */
	exitStart_VariantFieldType?: (ctx: Start_VariantFieldTypeContext) => void;
	/**
	 * Enter a parse tree produced by `StellaParser.start_ListVariantFieldType`.
	 * @param ctx the parse tree
	 */
	enterStart_ListVariantFieldType?: (ctx: Start_ListVariantFieldTypeContext) => void;
	/**
	 * Exit a parse tree produced by `StellaParser.start_ListVariantFieldType`.
	 * @param ctx the parse tree
	 */
	exitStart_ListVariantFieldType?: (ctx: Start_ListVariantFieldTypeContext) => void;
	/**
	 * Enter a parse tree produced by `StellaParser.start_RecordFieldType`.
	 * @param ctx the parse tree
	 */
	enterStart_RecordFieldType?: (ctx: Start_RecordFieldTypeContext) => void;
	/**
	 * Exit a parse tree produced by `StellaParser.start_RecordFieldType`.
	 * @param ctx the parse tree
	 */
	exitStart_RecordFieldType?: (ctx: Start_RecordFieldTypeContext) => void;
	/**
	 * Enter a parse tree produced by `StellaParser.start_ListRecordFieldType`.
	 * @param ctx the parse tree
	 */
	enterStart_ListRecordFieldType?: (ctx: Start_ListRecordFieldTypeContext) => void;
	/**
	 * Exit a parse tree produced by `StellaParser.start_ListRecordFieldType`.
	 * @param ctx the parse tree
	 */
	exitStart_ListRecordFieldType?: (ctx: Start_ListRecordFieldTypeContext) => void;
	/**
	 * Enter a parse tree produced by `StellaParser.start_Typing`.
	 * @param ctx the parse tree
	 */
	enterStart_Typing?: (ctx: Start_TypingContext) => void;
	/**
	 * Exit a parse tree produced by `StellaParser.start_Typing`.
	 * @param ctx the parse tree
	 */
	exitStart_Typing?: (ctx: Start_TypingContext) => void;
	/**
	 * Enter a parse tree produced by the `AProgram`
	 * labeled alternative in `StellaParser.program`.
	 * @param ctx the parse tree
	 */
	enterAProgram?: (ctx: AProgramContext) => void;
	/**
	 * Exit a parse tree produced by the `AProgram`
	 * labeled alternative in `StellaParser.program`.
	 * @param ctx the parse tree
	 */
	exitAProgram?: (ctx: AProgramContext) => void;
	/**
	 * Enter a parse tree produced by the `ListStellaIdent_Empty`
	 * labeled alternative in `StellaParser.listStellaIdent`.
	 * @param ctx the parse tree
	 */
	enterListStellaIdent_Empty?: (ctx: ListStellaIdent_EmptyContext) => void;
	/**
	 * Exit a parse tree produced by the `ListStellaIdent_Empty`
	 * labeled alternative in `StellaParser.listStellaIdent`.
	 * @param ctx the parse tree
	 */
	exitListStellaIdent_Empty?: (ctx: ListStellaIdent_EmptyContext) => void;
	/**
	 * Enter a parse tree produced by the `ListStellaIdent_AppendLast`
	 * labeled alternative in `StellaParser.listStellaIdent`.
	 * @param ctx the parse tree
	 */
	enterListStellaIdent_AppendLast?: (ctx: ListStellaIdent_AppendLastContext) => void;
	/**
	 * Exit a parse tree produced by the `ListStellaIdent_AppendLast`
	 * labeled alternative in `StellaParser.listStellaIdent`.
	 * @param ctx the parse tree
	 */
	exitListStellaIdent_AppendLast?: (ctx: ListStellaIdent_AppendLastContext) => void;
	/**
	 * Enter a parse tree produced by the `ListStellaIdent_PrependFirst`
	 * labeled alternative in `StellaParser.listStellaIdent`.
	 * @param ctx the parse tree
	 */
	enterListStellaIdent_PrependFirst?: (ctx: ListStellaIdent_PrependFirstContext) => void;
	/**
	 * Exit a parse tree produced by the `ListStellaIdent_PrependFirst`
	 * labeled alternative in `StellaParser.listStellaIdent`.
	 * @param ctx the parse tree
	 */
	exitListStellaIdent_PrependFirst?: (ctx: ListStellaIdent_PrependFirstContext) => void;
	/**
	 * Enter a parse tree produced by the `LanguageCore`
	 * labeled alternative in `StellaParser.languageDecl`.
	 * @param ctx the parse tree
	 */
	enterLanguageCore?: (ctx: LanguageCoreContext) => void;
	/**
	 * Exit a parse tree produced by the `LanguageCore`
	 * labeled alternative in `StellaParser.languageDecl`.
	 * @param ctx the parse tree
	 */
	exitLanguageCore?: (ctx: LanguageCoreContext) => void;
	/**
	 * Enter a parse tree produced by the `AnExtension`
	 * labeled alternative in `StellaParser.extension`.
	 * @param ctx the parse tree
	 */
	enterAnExtension?: (ctx: AnExtensionContext) => void;
	/**
	 * Exit a parse tree produced by the `AnExtension`
	 * labeled alternative in `StellaParser.extension`.
	 * @param ctx the parse tree
	 */
	exitAnExtension?: (ctx: AnExtensionContext) => void;
	/**
	 * Enter a parse tree produced by the `ListExtensionName_Empty`
	 * labeled alternative in `StellaParser.listExtensionName`.
	 * @param ctx the parse tree
	 */
	enterListExtensionName_Empty?: (ctx: ListExtensionName_EmptyContext) => void;
	/**
	 * Exit a parse tree produced by the `ListExtensionName_Empty`
	 * labeled alternative in `StellaParser.listExtensionName`.
	 * @param ctx the parse tree
	 */
	exitListExtensionName_Empty?: (ctx: ListExtensionName_EmptyContext) => void;
	/**
	 * Enter a parse tree produced by the `ListExtensionName_AppendLast`
	 * labeled alternative in `StellaParser.listExtensionName`.
	 * @param ctx the parse tree
	 */
	enterListExtensionName_AppendLast?: (ctx: ListExtensionName_AppendLastContext) => void;
	/**
	 * Exit a parse tree produced by the `ListExtensionName_AppendLast`
	 * labeled alternative in `StellaParser.listExtensionName`.
	 * @param ctx the parse tree
	 */
	exitListExtensionName_AppendLast?: (ctx: ListExtensionName_AppendLastContext) => void;
	/**
	 * Enter a parse tree produced by the `ListExtensionName_PrependFirst`
	 * labeled alternative in `StellaParser.listExtensionName`.
	 * @param ctx the parse tree
	 */
	enterListExtensionName_PrependFirst?: (ctx: ListExtensionName_PrependFirstContext) => void;
	/**
	 * Exit a parse tree produced by the `ListExtensionName_PrependFirst`
	 * labeled alternative in `StellaParser.listExtensionName`.
	 * @param ctx the parse tree
	 */
	exitListExtensionName_PrependFirst?: (ctx: ListExtensionName_PrependFirstContext) => void;
	/**
	 * Enter a parse tree produced by the `ListExtension_PrependFirst`
	 * labeled alternative in `StellaParser.listExtension`.
	 * @param ctx the parse tree
	 */
	enterListExtension_PrependFirst?: (ctx: ListExtension_PrependFirstContext) => void;
	/**
	 * Exit a parse tree produced by the `ListExtension_PrependFirst`
	 * labeled alternative in `StellaParser.listExtension`.
	 * @param ctx the parse tree
	 */
	exitListExtension_PrependFirst?: (ctx: ListExtension_PrependFirstContext) => void;
	/**
	 * Enter a parse tree produced by the `ListExtension_Empty`
	 * labeled alternative in `StellaParser.listExtension`.
	 * @param ctx the parse tree
	 */
	enterListExtension_Empty?: (ctx: ListExtension_EmptyContext) => void;
	/**
	 * Exit a parse tree produced by the `ListExtension_Empty`
	 * labeled alternative in `StellaParser.listExtension`.
	 * @param ctx the parse tree
	 */
	exitListExtension_Empty?: (ctx: ListExtension_EmptyContext) => void;
	/**
	 * Enter a parse tree produced by the `DeclFun`
	 * labeled alternative in `StellaParser.decl`.
	 * @param ctx the parse tree
	 */
	enterDeclFun?: (ctx: DeclFunContext) => void;
	/**
	 * Exit a parse tree produced by the `DeclFun`
	 * labeled alternative in `StellaParser.decl`.
	 * @param ctx the parse tree
	 */
	exitDeclFun?: (ctx: DeclFunContext) => void;
	/**
	 * Enter a parse tree produced by the `DeclFunGeneric`
	 * labeled alternative in `StellaParser.decl`.
	 * @param ctx the parse tree
	 */
	enterDeclFunGeneric?: (ctx: DeclFunGenericContext) => void;
	/**
	 * Exit a parse tree produced by the `DeclFunGeneric`
	 * labeled alternative in `StellaParser.decl`.
	 * @param ctx the parse tree
	 */
	exitDeclFunGeneric?: (ctx: DeclFunGenericContext) => void;
	/**
	 * Enter a parse tree produced by the `DeclTypeAlias`
	 * labeled alternative in `StellaParser.decl`.
	 * @param ctx the parse tree
	 */
	enterDeclTypeAlias?: (ctx: DeclTypeAliasContext) => void;
	/**
	 * Exit a parse tree produced by the `DeclTypeAlias`
	 * labeled alternative in `StellaParser.decl`.
	 * @param ctx the parse tree
	 */
	exitDeclTypeAlias?: (ctx: DeclTypeAliasContext) => void;
	/**
	 * Enter a parse tree produced by the `DeclExceptionType`
	 * labeled alternative in `StellaParser.decl`.
	 * @param ctx the parse tree
	 */
	enterDeclExceptionType?: (ctx: DeclExceptionTypeContext) => void;
	/**
	 * Exit a parse tree produced by the `DeclExceptionType`
	 * labeled alternative in `StellaParser.decl`.
	 * @param ctx the parse tree
	 */
	exitDeclExceptionType?: (ctx: DeclExceptionTypeContext) => void;
	/**
	 * Enter a parse tree produced by the `DeclExceptionVariant`
	 * labeled alternative in `StellaParser.decl`.
	 * @param ctx the parse tree
	 */
	enterDeclExceptionVariant?: (ctx: DeclExceptionVariantContext) => void;
	/**
	 * Exit a parse tree produced by the `DeclExceptionVariant`
	 * labeled alternative in `StellaParser.decl`.
	 * @param ctx the parse tree
	 */
	exitDeclExceptionVariant?: (ctx: DeclExceptionVariantContext) => void;
	/**
	 * Enter a parse tree produced by the `ListDecl_Empty`
	 * labeled alternative in `StellaParser.listDecl`.
	 * @param ctx the parse tree
	 */
	enterListDecl_Empty?: (ctx: ListDecl_EmptyContext) => void;
	/**
	 * Exit a parse tree produced by the `ListDecl_Empty`
	 * labeled alternative in `StellaParser.listDecl`.
	 * @param ctx the parse tree
	 */
	exitListDecl_Empty?: (ctx: ListDecl_EmptyContext) => void;
	/**
	 * Enter a parse tree produced by the `ListDecl_PrependFirst`
	 * labeled alternative in `StellaParser.listDecl`.
	 * @param ctx the parse tree
	 */
	enterListDecl_PrependFirst?: (ctx: ListDecl_PrependFirstContext) => void;
	/**
	 * Exit a parse tree produced by the `ListDecl_PrependFirst`
	 * labeled alternative in `StellaParser.listDecl`.
	 * @param ctx the parse tree
	 */
	exitListDecl_PrependFirst?: (ctx: ListDecl_PrependFirstContext) => void;
	/**
	 * Enter a parse tree produced by the `ALocalDecl`
	 * labeled alternative in `StellaParser.localDecl`.
	 * @param ctx the parse tree
	 */
	enterALocalDecl?: (ctx: ALocalDeclContext) => void;
	/**
	 * Exit a parse tree produced by the `ALocalDecl`
	 * labeled alternative in `StellaParser.localDecl`.
	 * @param ctx the parse tree
	 */
	exitALocalDecl?: (ctx: ALocalDeclContext) => void;
	/**
	 * Enter a parse tree produced by the `ListLocalDecl_Empty`
	 * labeled alternative in `StellaParser.listLocalDecl`.
	 * @param ctx the parse tree
	 */
	enterListLocalDecl_Empty?: (ctx: ListLocalDecl_EmptyContext) => void;
	/**
	 * Exit a parse tree produced by the `ListLocalDecl_Empty`
	 * labeled alternative in `StellaParser.listLocalDecl`.
	 * @param ctx the parse tree
	 */
	exitListLocalDecl_Empty?: (ctx: ListLocalDecl_EmptyContext) => void;
	/**
	 * Enter a parse tree produced by the `ListLocalDecl_PrependFirst`
	 * labeled alternative in `StellaParser.listLocalDecl`.
	 * @param ctx the parse tree
	 */
	enterListLocalDecl_PrependFirst?: (ctx: ListLocalDecl_PrependFirstContext) => void;
	/**
	 * Exit a parse tree produced by the `ListLocalDecl_PrependFirst`
	 * labeled alternative in `StellaParser.listLocalDecl`.
	 * @param ctx the parse tree
	 */
	exitListLocalDecl_PrependFirst?: (ctx: ListLocalDecl_PrependFirstContext) => void;
	/**
	 * Enter a parse tree produced by the `InlineAnnotation`
	 * labeled alternative in `StellaParser.annotation`.
	 * @param ctx the parse tree
	 */
	enterInlineAnnotation?: (ctx: InlineAnnotationContext) => void;
	/**
	 * Exit a parse tree produced by the `InlineAnnotation`
	 * labeled alternative in `StellaParser.annotation`.
	 * @param ctx the parse tree
	 */
	exitInlineAnnotation?: (ctx: InlineAnnotationContext) => void;
	/**
	 * Enter a parse tree produced by the `ListAnnotation_PrependFirst`
	 * labeled alternative in `StellaParser.listAnnotation`.
	 * @param ctx the parse tree
	 */
	enterListAnnotation_PrependFirst?: (ctx: ListAnnotation_PrependFirstContext) => void;
	/**
	 * Exit a parse tree produced by the `ListAnnotation_PrependFirst`
	 * labeled alternative in `StellaParser.listAnnotation`.
	 * @param ctx the parse tree
	 */
	exitListAnnotation_PrependFirst?: (ctx: ListAnnotation_PrependFirstContext) => void;
	/**
	 * Enter a parse tree produced by the `ListAnnotation_Empty`
	 * labeled alternative in `StellaParser.listAnnotation`.
	 * @param ctx the parse tree
	 */
	enterListAnnotation_Empty?: (ctx: ListAnnotation_EmptyContext) => void;
	/**
	 * Exit a parse tree produced by the `ListAnnotation_Empty`
	 * labeled alternative in `StellaParser.listAnnotation`.
	 * @param ctx the parse tree
	 */
	exitListAnnotation_Empty?: (ctx: ListAnnotation_EmptyContext) => void;
	/**
	 * Enter a parse tree produced by the `AParamDecl`
	 * labeled alternative in `StellaParser.paramDecl`.
	 * @param ctx the parse tree
	 */
	enterAParamDecl?: (ctx: AParamDeclContext) => void;
	/**
	 * Exit a parse tree produced by the `AParamDecl`
	 * labeled alternative in `StellaParser.paramDecl`.
	 * @param ctx the parse tree
	 */
	exitAParamDecl?: (ctx: AParamDeclContext) => void;
	/**
	 * Enter a parse tree produced by the `ListParamDecl_Empty`
	 * labeled alternative in `StellaParser.listParamDecl`.
	 * @param ctx the parse tree
	 */
	enterListParamDecl_Empty?: (ctx: ListParamDecl_EmptyContext) => void;
	/**
	 * Exit a parse tree produced by the `ListParamDecl_Empty`
	 * labeled alternative in `StellaParser.listParamDecl`.
	 * @param ctx the parse tree
	 */
	exitListParamDecl_Empty?: (ctx: ListParamDecl_EmptyContext) => void;
	/**
	 * Enter a parse tree produced by the `ListParamDecl_AppendLast`
	 * labeled alternative in `StellaParser.listParamDecl`.
	 * @param ctx the parse tree
	 */
	enterListParamDecl_AppendLast?: (ctx: ListParamDecl_AppendLastContext) => void;
	/**
	 * Exit a parse tree produced by the `ListParamDecl_AppendLast`
	 * labeled alternative in `StellaParser.listParamDecl`.
	 * @param ctx the parse tree
	 */
	exitListParamDecl_AppendLast?: (ctx: ListParamDecl_AppendLastContext) => void;
	/**
	 * Enter a parse tree produced by the `ListParamDecl_PrependFirst`
	 * labeled alternative in `StellaParser.listParamDecl`.
	 * @param ctx the parse tree
	 */
	enterListParamDecl_PrependFirst?: (ctx: ListParamDecl_PrependFirstContext) => void;
	/**
	 * Exit a parse tree produced by the `ListParamDecl_PrependFirst`
	 * labeled alternative in `StellaParser.listParamDecl`.
	 * @param ctx the parse tree
	 */
	exitListParamDecl_PrependFirst?: (ctx: ListParamDecl_PrependFirstContext) => void;
	/**
	 * Enter a parse tree produced by the `NoReturnType`
	 * labeled alternative in `StellaParser.returnType`.
	 * @param ctx the parse tree
	 */
	enterNoReturnType?: (ctx: NoReturnTypeContext) => void;
	/**
	 * Exit a parse tree produced by the `NoReturnType`
	 * labeled alternative in `StellaParser.returnType`.
	 * @param ctx the parse tree
	 */
	exitNoReturnType?: (ctx: NoReturnTypeContext) => void;
	/**
	 * Enter a parse tree produced by the `SomeReturnType`
	 * labeled alternative in `StellaParser.returnType`.
	 * @param ctx the parse tree
	 */
	enterSomeReturnType?: (ctx: SomeReturnTypeContext) => void;
	/**
	 * Exit a parse tree produced by the `SomeReturnType`
	 * labeled alternative in `StellaParser.returnType`.
	 * @param ctx the parse tree
	 */
	exitSomeReturnType?: (ctx: SomeReturnTypeContext) => void;
	/**
	 * Enter a parse tree produced by the `NoThrowType`
	 * labeled alternative in `StellaParser.throwType`.
	 * @param ctx the parse tree
	 */
	enterNoThrowType?: (ctx: NoThrowTypeContext) => void;
	/**
	 * Exit a parse tree produced by the `NoThrowType`
	 * labeled alternative in `StellaParser.throwType`.
	 * @param ctx the parse tree
	 */
	exitNoThrowType?: (ctx: NoThrowTypeContext) => void;
	/**
	 * Enter a parse tree produced by the `SomeThrowType`
	 * labeled alternative in `StellaParser.throwType`.
	 * @param ctx the parse tree
	 */
	enterSomeThrowType?: (ctx: SomeThrowTypeContext) => void;
	/**
	 * Exit a parse tree produced by the `SomeThrowType`
	 * labeled alternative in `StellaParser.throwType`.
	 * @param ctx the parse tree
	 */
	exitSomeThrowType?: (ctx: SomeThrowTypeContext) => void;
	/**
	 * Enter a parse tree produced by the `Coercion_Type9_1`
	 * labeled alternative in `StellaParser.type9`.
	 * @param ctx the parse tree
	 */
	enterCoercion_Type9_1?: (ctx: Coercion_Type9_1Context) => void;
	/**
	 * Exit a parse tree produced by the `Coercion_Type9_1`
	 * labeled alternative in `StellaParser.type9`.
	 * @param ctx the parse tree
	 */
	exitCoercion_Type9_1?: (ctx: Coercion_Type9_1Context) => void;
	/**
	 * Enter a parse tree produced by the `ListType9_AppendLast`
	 * labeled alternative in `StellaParser.listType9`.
	 * @param ctx the parse tree
	 */
	enterListType9_AppendLast?: (ctx: ListType9_AppendLastContext) => void;
	/**
	 * Exit a parse tree produced by the `ListType9_AppendLast`
	 * labeled alternative in `StellaParser.listType9`.
	 * @param ctx the parse tree
	 */
	exitListType9_AppendLast?: (ctx: ListType9_AppendLastContext) => void;
	/**
	 * Enter a parse tree produced by the `ListType9_PrependFirst`
	 * labeled alternative in `StellaParser.listType9`.
	 * @param ctx the parse tree
	 */
	enterListType9_PrependFirst?: (ctx: ListType9_PrependFirstContext) => void;
	/**
	 * Exit a parse tree produced by the `ListType9_PrependFirst`
	 * labeled alternative in `StellaParser.listType9`.
	 * @param ctx the parse tree
	 */
	exitListType9_PrependFirst?: (ctx: ListType9_PrependFirstContext) => void;
	/**
	 * Enter a parse tree produced by the `AMatchCase`
	 * labeled alternative in `StellaParser.matchCase`.
	 * @param ctx the parse tree
	 */
	enterAMatchCase?: (ctx: AMatchCaseContext) => void;
	/**
	 * Exit a parse tree produced by the `AMatchCase`
	 * labeled alternative in `StellaParser.matchCase`.
	 * @param ctx the parse tree
	 */
	exitAMatchCase?: (ctx: AMatchCaseContext) => void;
	/**
	 * Enter a parse tree produced by the `ListMatchCase_Empty`
	 * labeled alternative in `StellaParser.listMatchCase`.
	 * @param ctx the parse tree
	 */
	enterListMatchCase_Empty?: (ctx: ListMatchCase_EmptyContext) => void;
	/**
	 * Exit a parse tree produced by the `ListMatchCase_Empty`
	 * labeled alternative in `StellaParser.listMatchCase`.
	 * @param ctx the parse tree
	 */
	exitListMatchCase_Empty?: (ctx: ListMatchCase_EmptyContext) => void;
	/**
	 * Enter a parse tree produced by the `ListMatchCase_AppendLast`
	 * labeled alternative in `StellaParser.listMatchCase`.
	 * @param ctx the parse tree
	 */
	enterListMatchCase_AppendLast?: (ctx: ListMatchCase_AppendLastContext) => void;
	/**
	 * Exit a parse tree produced by the `ListMatchCase_AppendLast`
	 * labeled alternative in `StellaParser.listMatchCase`.
	 * @param ctx the parse tree
	 */
	exitListMatchCase_AppendLast?: (ctx: ListMatchCase_AppendLastContext) => void;
	/**
	 * Enter a parse tree produced by the `ListMatchCase_PrependFirst`
	 * labeled alternative in `StellaParser.listMatchCase`.
	 * @param ctx the parse tree
	 */
	enterListMatchCase_PrependFirst?: (ctx: ListMatchCase_PrependFirstContext) => void;
	/**
	 * Exit a parse tree produced by the `ListMatchCase_PrependFirst`
	 * labeled alternative in `StellaParser.listMatchCase`.
	 * @param ctx the parse tree
	 */
	exitListMatchCase_PrependFirst?: (ctx: ListMatchCase_PrependFirstContext) => void;
	/**
	 * Enter a parse tree produced by the `NoTyping`
	 * labeled alternative in `StellaParser.optionalTyping`.
	 * @param ctx the parse tree
	 */
	enterNoTyping?: (ctx: NoTypingContext) => void;
	/**
	 * Exit a parse tree produced by the `NoTyping`
	 * labeled alternative in `StellaParser.optionalTyping`.
	 * @param ctx the parse tree
	 */
	exitNoTyping?: (ctx: NoTypingContext) => void;
	/**
	 * Enter a parse tree produced by the `SomeTyping`
	 * labeled alternative in `StellaParser.optionalTyping`.
	 * @param ctx the parse tree
	 */
	enterSomeTyping?: (ctx: SomeTypingContext) => void;
	/**
	 * Exit a parse tree produced by the `SomeTyping`
	 * labeled alternative in `StellaParser.optionalTyping`.
	 * @param ctx the parse tree
	 */
	exitSomeTyping?: (ctx: SomeTypingContext) => void;
	/**
	 * Enter a parse tree produced by the `NoPatternData`
	 * labeled alternative in `StellaParser.patternData`.
	 * @param ctx the parse tree
	 */
	enterNoPatternData?: (ctx: NoPatternDataContext) => void;
	/**
	 * Exit a parse tree produced by the `NoPatternData`
	 * labeled alternative in `StellaParser.patternData`.
	 * @param ctx the parse tree
	 */
	exitNoPatternData?: (ctx: NoPatternDataContext) => void;
	/**
	 * Enter a parse tree produced by the `SomePatternData`
	 * labeled alternative in `StellaParser.patternData`.
	 * @param ctx the parse tree
	 */
	enterSomePatternData?: (ctx: SomePatternDataContext) => void;
	/**
	 * Exit a parse tree produced by the `SomePatternData`
	 * labeled alternative in `StellaParser.patternData`.
	 * @param ctx the parse tree
	 */
	exitSomePatternData?: (ctx: SomePatternDataContext) => void;
	/**
	 * Enter a parse tree produced by the `NoExprData`
	 * labeled alternative in `StellaParser.exprData`.
	 * @param ctx the parse tree
	 */
	enterNoExprData?: (ctx: NoExprDataContext) => void;
	/**
	 * Exit a parse tree produced by the `NoExprData`
	 * labeled alternative in `StellaParser.exprData`.
	 * @param ctx the parse tree
	 */
	exitNoExprData?: (ctx: NoExprDataContext) => void;
	/**
	 * Enter a parse tree produced by the `SomeExprData`
	 * labeled alternative in `StellaParser.exprData`.
	 * @param ctx the parse tree
	 */
	enterSomeExprData?: (ctx: SomeExprDataContext) => void;
	/**
	 * Exit a parse tree produced by the `SomeExprData`
	 * labeled alternative in `StellaParser.exprData`.
	 * @param ctx the parse tree
	 */
	exitSomeExprData?: (ctx: SomeExprDataContext) => void;
	/**
	 * Enter a parse tree produced by the `PatternCons`
	 * labeled alternative in `StellaParser.pattern`.
	 * @param ctx the parse tree
	 */
	enterPatternCons?: (ctx: PatternConsContext) => void;
	/**
	 * Exit a parse tree produced by the `PatternCons`
	 * labeled alternative in `StellaParser.pattern`.
	 * @param ctx the parse tree
	 */
	exitPatternCons?: (ctx: PatternConsContext) => void;
	/**
	 * Enter a parse tree produced by the `Coercion_Pattern_16`
	 * labeled alternative in `StellaParser.pattern`.
	 * @param ctx the parse tree
	 */
	enterCoercion_Pattern_16?: (ctx: Coercion_Pattern_16Context) => void;
	/**
	 * Exit a parse tree produced by the `Coercion_Pattern_16`
	 * labeled alternative in `StellaParser.pattern`.
	 * @param ctx the parse tree
	 */
	exitCoercion_Pattern_16?: (ctx: Coercion_Pattern_16Context) => void;
	/**
	 * Enter a parse tree produced by the `PatternTuple`
	 * labeled alternative in `StellaParser.pattern`.
	 * @param ctx the parse tree
	 */
	enterPatternTuple?: (ctx: PatternTupleContext) => void;
	/**
	 * Exit a parse tree produced by the `PatternTuple`
	 * labeled alternative in `StellaParser.pattern`.
	 * @param ctx the parse tree
	 */
	exitPatternTuple?: (ctx: PatternTupleContext) => void;
	/**
	 * Enter a parse tree produced by the `PatternList`
	 * labeled alternative in `StellaParser.pattern`.
	 * @param ctx the parse tree
	 */
	enterPatternList?: (ctx: PatternListContext) => void;
	/**
	 * Exit a parse tree produced by the `PatternList`
	 * labeled alternative in `StellaParser.pattern`.
	 * @param ctx the parse tree
	 */
	exitPatternList?: (ctx: PatternListContext) => void;
	/**
	 * Enter a parse tree produced by the `PatternRecord`
	 * labeled alternative in `StellaParser.pattern`.
	 * @param ctx the parse tree
	 */
	enterPatternRecord?: (ctx: PatternRecordContext) => void;
	/**
	 * Exit a parse tree produced by the `PatternRecord`
	 * labeled alternative in `StellaParser.pattern`.
	 * @param ctx the parse tree
	 */
	exitPatternRecord?: (ctx: PatternRecordContext) => void;
	/**
	 * Enter a parse tree produced by the `PatternVariant`
	 * labeled alternative in `StellaParser.pattern`.
	 * @param ctx the parse tree
	 */
	enterPatternVariant?: (ctx: PatternVariantContext) => void;
	/**
	 * Exit a parse tree produced by the `PatternVariant`
	 * labeled alternative in `StellaParser.pattern`.
	 * @param ctx the parse tree
	 */
	exitPatternVariant?: (ctx: PatternVariantContext) => void;
	/**
	 * Enter a parse tree produced by the `PatternAsc`
	 * labeled alternative in `StellaParser.pattern`.
	 * @param ctx the parse tree
	 */
	enterPatternAsc?: (ctx: PatternAscContext) => void;
	/**
	 * Exit a parse tree produced by the `PatternAsc`
	 * labeled alternative in `StellaParser.pattern`.
	 * @param ctx the parse tree
	 */
	exitPatternAsc?: (ctx: PatternAscContext) => void;
	/**
	 * Enter a parse tree produced by the `PatternInt`
	 * labeled alternative in `StellaParser.pattern`.
	 * @param ctx the parse tree
	 */
	enterPatternInt?: (ctx: PatternIntContext) => void;
	/**
	 * Exit a parse tree produced by the `PatternInt`
	 * labeled alternative in `StellaParser.pattern`.
	 * @param ctx the parse tree
	 */
	exitPatternInt?: (ctx: PatternIntContext) => void;
	/**
	 * Enter a parse tree produced by the `PatternInr`
	 * labeled alternative in `StellaParser.pattern`.
	 * @param ctx the parse tree
	 */
	enterPatternInr?: (ctx: PatternInrContext) => void;
	/**
	 * Exit a parse tree produced by the `PatternInr`
	 * labeled alternative in `StellaParser.pattern`.
	 * @param ctx the parse tree
	 */
	exitPatternInr?: (ctx: PatternInrContext) => void;
	/**
	 * Enter a parse tree produced by the `PatternTrue`
	 * labeled alternative in `StellaParser.pattern`.
	 * @param ctx the parse tree
	 */
	enterPatternTrue?: (ctx: PatternTrueContext) => void;
	/**
	 * Exit a parse tree produced by the `PatternTrue`
	 * labeled alternative in `StellaParser.pattern`.
	 * @param ctx the parse tree
	 */
	exitPatternTrue?: (ctx: PatternTrueContext) => void;
	/**
	 * Enter a parse tree produced by the `PatternInl`
	 * labeled alternative in `StellaParser.pattern`.
	 * @param ctx the parse tree
	 */
	enterPatternInl?: (ctx: PatternInlContext) => void;
	/**
	 * Exit a parse tree produced by the `PatternInl`
	 * labeled alternative in `StellaParser.pattern`.
	 * @param ctx the parse tree
	 */
	exitPatternInl?: (ctx: PatternInlContext) => void;
	/**
	 * Enter a parse tree produced by the `PatternVar`
	 * labeled alternative in `StellaParser.pattern`.
	 * @param ctx the parse tree
	 */
	enterPatternVar?: (ctx: PatternVarContext) => void;
	/**
	 * Exit a parse tree produced by the `PatternVar`
	 * labeled alternative in `StellaParser.pattern`.
	 * @param ctx the parse tree
	 */
	exitPatternVar?: (ctx: PatternVarContext) => void;
	/**
	 * Enter a parse tree produced by the `PatternSucc`
	 * labeled alternative in `StellaParser.pattern`.
	 * @param ctx the parse tree
	 */
	enterPatternSucc?: (ctx: PatternSuccContext) => void;
	/**
	 * Exit a parse tree produced by the `PatternSucc`
	 * labeled alternative in `StellaParser.pattern`.
	 * @param ctx the parse tree
	 */
	exitPatternSucc?: (ctx: PatternSuccContext) => void;
	/**
	 * Enter a parse tree produced by the `PatternFalse`
	 * labeled alternative in `StellaParser.pattern`.
	 * @param ctx the parse tree
	 */
	enterPatternFalse?: (ctx: PatternFalseContext) => void;
	/**
	 * Exit a parse tree produced by the `PatternFalse`
	 * labeled alternative in `StellaParser.pattern`.
	 * @param ctx the parse tree
	 */
	exitPatternFalse?: (ctx: PatternFalseContext) => void;
	/**
	 * Enter a parse tree produced by the `PatternUnit`
	 * labeled alternative in `StellaParser.pattern`.
	 * @param ctx the parse tree
	 */
	enterPatternUnit?: (ctx: PatternUnitContext) => void;
	/**
	 * Exit a parse tree produced by the `PatternUnit`
	 * labeled alternative in `StellaParser.pattern`.
	 * @param ctx the parse tree
	 */
	exitPatternUnit?: (ctx: PatternUnitContext) => void;
	/**
	 * Enter a parse tree produced by the `PatternCastAs`
	 * labeled alternative in `StellaParser.pattern`.
	 * @param ctx the parse tree
	 */
	enterPatternCastAs?: (ctx: PatternCastAsContext) => void;
	/**
	 * Exit a parse tree produced by the `PatternCastAs`
	 * labeled alternative in `StellaParser.pattern`.
	 * @param ctx the parse tree
	 */
	exitPatternCastAs?: (ctx: PatternCastAsContext) => void;
	/**
	 * Enter a parse tree produced by the `ListPattern_Empty`
	 * labeled alternative in `StellaParser.listPattern`.
	 * @param ctx the parse tree
	 */
	enterListPattern_Empty?: (ctx: ListPattern_EmptyContext) => void;
	/**
	 * Exit a parse tree produced by the `ListPattern_Empty`
	 * labeled alternative in `StellaParser.listPattern`.
	 * @param ctx the parse tree
	 */
	exitListPattern_Empty?: (ctx: ListPattern_EmptyContext) => void;
	/**
	 * Enter a parse tree produced by the `ListPattern_AppendLast`
	 * labeled alternative in `StellaParser.listPattern`.
	 * @param ctx the parse tree
	 */
	enterListPattern_AppendLast?: (ctx: ListPattern_AppendLastContext) => void;
	/**
	 * Exit a parse tree produced by the `ListPattern_AppendLast`
	 * labeled alternative in `StellaParser.listPattern`.
	 * @param ctx the parse tree
	 */
	exitListPattern_AppendLast?: (ctx: ListPattern_AppendLastContext) => void;
	/**
	 * Enter a parse tree produced by the `ListPattern_PrependFirst`
	 * labeled alternative in `StellaParser.listPattern`.
	 * @param ctx the parse tree
	 */
	enterListPattern_PrependFirst?: (ctx: ListPattern_PrependFirstContext) => void;
	/**
	 * Exit a parse tree produced by the `ListPattern_PrependFirst`
	 * labeled alternative in `StellaParser.listPattern`.
	 * @param ctx the parse tree
	 */
	exitListPattern_PrependFirst?: (ctx: ListPattern_PrependFirstContext) => void;
	/**
	 * Enter a parse tree produced by the `ALabelledPattern`
	 * labeled alternative in `StellaParser.labelledPattern`.
	 * @param ctx the parse tree
	 */
	enterALabelledPattern?: (ctx: ALabelledPatternContext) => void;
	/**
	 * Exit a parse tree produced by the `ALabelledPattern`
	 * labeled alternative in `StellaParser.labelledPattern`.
	 * @param ctx the parse tree
	 */
	exitALabelledPattern?: (ctx: ALabelledPatternContext) => void;
	/**
	 * Enter a parse tree produced by the `ListLabelledPattern_AppendLast`
	 * labeled alternative in `StellaParser.listLabelledPattern`.
	 * @param ctx the parse tree
	 */
	enterListLabelledPattern_AppendLast?: (ctx: ListLabelledPattern_AppendLastContext) => void;
	/**
	 * Exit a parse tree produced by the `ListLabelledPattern_AppendLast`
	 * labeled alternative in `StellaParser.listLabelledPattern`.
	 * @param ctx the parse tree
	 */
	exitListLabelledPattern_AppendLast?: (ctx: ListLabelledPattern_AppendLastContext) => void;
	/**
	 * Enter a parse tree produced by the `ListLabelledPattern_PrependFirst`
	 * labeled alternative in `StellaParser.listLabelledPattern`.
	 * @param ctx the parse tree
	 */
	enterListLabelledPattern_PrependFirst?: (ctx: ListLabelledPattern_PrependFirstContext) => void;
	/**
	 * Exit a parse tree produced by the `ListLabelledPattern_PrependFirst`
	 * labeled alternative in `StellaParser.listLabelledPattern`.
	 * @param ctx the parse tree
	 */
	exitListLabelledPattern_PrependFirst?: (ctx: ListLabelledPattern_PrependFirstContext) => void;
	/**
	 * Enter a parse tree produced by the `ABinding`
	 * labeled alternative in `StellaParser.binding`.
	 * @param ctx the parse tree
	 */
	enterABinding?: (ctx: ABindingContext) => void;
	/**
	 * Exit a parse tree produced by the `ABinding`
	 * labeled alternative in `StellaParser.binding`.
	 * @param ctx the parse tree
	 */
	exitABinding?: (ctx: ABindingContext) => void;
	/**
	 * Enter a parse tree produced by the `ListBinding_AppendLast`
	 * labeled alternative in `StellaParser.listBinding`.
	 * @param ctx the parse tree
	 */
	enterListBinding_AppendLast?: (ctx: ListBinding_AppendLastContext) => void;
	/**
	 * Exit a parse tree produced by the `ListBinding_AppendLast`
	 * labeled alternative in `StellaParser.listBinding`.
	 * @param ctx the parse tree
	 */
	exitListBinding_AppendLast?: (ctx: ListBinding_AppendLastContext) => void;
	/**
	 * Enter a parse tree produced by the `ListBinding_PrependFirst`
	 * labeled alternative in `StellaParser.listBinding`.
	 * @param ctx the parse tree
	 */
	enterListBinding_PrependFirst?: (ctx: ListBinding_PrependFirstContext) => void;
	/**
	 * Exit a parse tree produced by the `ListBinding_PrependFirst`
	 * labeled alternative in `StellaParser.listBinding`.
	 * @param ctx the parse tree
	 */
	exitListBinding_PrependFirst?: (ctx: ListBinding_PrependFirstContext) => void;
	/**
	 * Enter a parse tree produced by the `Sequence`
	 * labeled alternative in `StellaParser.expr`.
	 * @param ctx the parse tree
	 */
	enterSequence?: (ctx: SequenceContext) => void;
	/**
	 * Exit a parse tree produced by the `Sequence`
	 * labeled alternative in `StellaParser.expr`.
	 * @param ctx the parse tree
	 */
	exitSequence?: (ctx: SequenceContext) => void;
	/**
	 * Enter a parse tree produced by the `Coercion_Expr_2`
	 * labeled alternative in `StellaParser.expr`.
	 * @param ctx the parse tree
	 */
	enterCoercion_Expr_2?: (ctx: Coercion_Expr_2Context) => void;
	/**
	 * Exit a parse tree produced by the `Coercion_Expr_2`
	 * labeled alternative in `StellaParser.expr`.
	 * @param ctx the parse tree
	 */
	exitCoercion_Expr_2?: (ctx: Coercion_Expr_2Context) => void;
	/**
	 * Enter a parse tree produced by the `Let`
	 * labeled alternative in `StellaParser.expr`.
	 * @param ctx the parse tree
	 */
	enterLet?: (ctx: LetContext) => void;
	/**
	 * Exit a parse tree produced by the `Let`
	 * labeled alternative in `StellaParser.expr`.
	 * @param ctx the parse tree
	 */
	exitLet?: (ctx: LetContext) => void;
	/**
	 * Enter a parse tree produced by the `LetRec`
	 * labeled alternative in `StellaParser.expr`.
	 * @param ctx the parse tree
	 */
	enterLetRec?: (ctx: LetRecContext) => void;
	/**
	 * Exit a parse tree produced by the `LetRec`
	 * labeled alternative in `StellaParser.expr`.
	 * @param ctx the parse tree
	 */
	exitLetRec?: (ctx: LetRecContext) => void;
	/**
	 * Enter a parse tree produced by the `TypeAbstraction`
	 * labeled alternative in `StellaParser.expr`.
	 * @param ctx the parse tree
	 */
	enterTypeAbstraction?: (ctx: TypeAbstractionContext) => void;
	/**
	 * Exit a parse tree produced by the `TypeAbstraction`
	 * labeled alternative in `StellaParser.expr`.
	 * @param ctx the parse tree
	 */
	exitTypeAbstraction?: (ctx: TypeAbstractionContext) => void;
	/**
	 * Enter a parse tree produced by the `Coercion_Expr_6`
	 * labeled alternative in `StellaParser.expr`.
	 * @param ctx the parse tree
	 */
	enterCoercion_Expr_6?: (ctx: Coercion_Expr_6Context) => void;
	/**
	 * Exit a parse tree produced by the `Coercion_Expr_6`
	 * labeled alternative in `StellaParser.expr`.
	 * @param ctx the parse tree
	 */
	exitCoercion_Expr_6?: (ctx: Coercion_Expr_6Context) => void;
	/**
	 * Enter a parse tree produced by the `ListExpr_Empty`
	 * labeled alternative in `StellaParser.listExpr`.
	 * @param ctx the parse tree
	 */
	enterListExpr_Empty?: (ctx: ListExpr_EmptyContext) => void;
	/**
	 * Exit a parse tree produced by the `ListExpr_Empty`
	 * labeled alternative in `StellaParser.listExpr`.
	 * @param ctx the parse tree
	 */
	exitListExpr_Empty?: (ctx: ListExpr_EmptyContext) => void;
	/**
	 * Enter a parse tree produced by the `ListExpr_AppendLast`
	 * labeled alternative in `StellaParser.listExpr`.
	 * @param ctx the parse tree
	 */
	enterListExpr_AppendLast?: (ctx: ListExpr_AppendLastContext) => void;
	/**
	 * Exit a parse tree produced by the `ListExpr_AppendLast`
	 * labeled alternative in `StellaParser.listExpr`.
	 * @param ctx the parse tree
	 */
	exitListExpr_AppendLast?: (ctx: ListExpr_AppendLastContext) => void;
	/**
	 * Enter a parse tree produced by the `ListExpr_PrependFirst`
	 * labeled alternative in `StellaParser.listExpr`.
	 * @param ctx the parse tree
	 */
	enterListExpr_PrependFirst?: (ctx: ListExpr_PrependFirstContext) => void;
	/**
	 * Exit a parse tree produced by the `ListExpr_PrependFirst`
	 * labeled alternative in `StellaParser.listExpr`.
	 * @param ctx the parse tree
	 */
	exitListExpr_PrependFirst?: (ctx: ListExpr_PrependFirstContext) => void;
	/**
	 * Enter a parse tree produced by the `Assign`
	 * labeled alternative in `StellaParser.expr1`.
	 * @param ctx the parse tree
	 */
	enterAssign?: (ctx: AssignContext) => void;
	/**
	 * Exit a parse tree produced by the `Assign`
	 * labeled alternative in `StellaParser.expr1`.
	 * @param ctx the parse tree
	 */
	exitAssign?: (ctx: AssignContext) => void;
	/**
	 * Enter a parse tree produced by the `If`
	 * labeled alternative in `StellaParser.expr1`.
	 * @param ctx the parse tree
	 */
	enterIf?: (ctx: IfContext) => void;
	/**
	 * Exit a parse tree produced by the `If`
	 * labeled alternative in `StellaParser.expr1`.
	 * @param ctx the parse tree
	 */
	exitIf?: (ctx: IfContext) => void;
	/**
	 * Enter a parse tree produced by the `Coercion_Expr1_3`
	 * labeled alternative in `StellaParser.expr1`.
	 * @param ctx the parse tree
	 */
	enterCoercion_Expr1_3?: (ctx: Coercion_Expr1_3Context) => void;
	/**
	 * Exit a parse tree produced by the `Coercion_Expr1_3`
	 * labeled alternative in `StellaParser.expr1`.
	 * @param ctx the parse tree
	 */
	exitCoercion_Expr1_3?: (ctx: Coercion_Expr1_3Context) => void;
	/**
	 * Enter a parse tree produced by the `APatternBinding`
	 * labeled alternative in `StellaParser.patternBinding`.
	 * @param ctx the parse tree
	 */
	enterAPatternBinding?: (ctx: APatternBindingContext) => void;
	/**
	 * Exit a parse tree produced by the `APatternBinding`
	 * labeled alternative in `StellaParser.patternBinding`.
	 * @param ctx the parse tree
	 */
	exitAPatternBinding?: (ctx: APatternBindingContext) => void;
	/**
	 * Enter a parse tree produced by the `ListPatternBinding_AppendLast`
	 * labeled alternative in `StellaParser.listPatternBinding`.
	 * @param ctx the parse tree
	 */
	enterListPatternBinding_AppendLast?: (ctx: ListPatternBinding_AppendLastContext) => void;
	/**
	 * Exit a parse tree produced by the `ListPatternBinding_AppendLast`
	 * labeled alternative in `StellaParser.listPatternBinding`.
	 * @param ctx the parse tree
	 */
	exitListPatternBinding_AppendLast?: (ctx: ListPatternBinding_AppendLastContext) => void;
	/**
	 * Enter a parse tree produced by the `ListPatternBinding_PrependFirst`
	 * labeled alternative in `StellaParser.listPatternBinding`.
	 * @param ctx the parse tree
	 */
	enterListPatternBinding_PrependFirst?: (ctx: ListPatternBinding_PrependFirstContext) => void;
	/**
	 * Exit a parse tree produced by the `ListPatternBinding_PrependFirst`
	 * labeled alternative in `StellaParser.listPatternBinding`.
	 * @param ctx the parse tree
	 */
	exitListPatternBinding_PrependFirst?: (ctx: ListPatternBinding_PrependFirstContext) => void;
	/**
	 * Enter a parse tree produced by the `LessThan`
	 * labeled alternative in `StellaParser.expr2`.
	 * @param ctx the parse tree
	 */
	enterLessThan?: (ctx: LessThanContext) => void;
	/**
	 * Exit a parse tree produced by the `LessThan`
	 * labeled alternative in `StellaParser.expr2`.
	 * @param ctx the parse tree
	 */
	exitLessThan?: (ctx: LessThanContext) => void;
	/**
	 * Enter a parse tree produced by the `LessThanOrEqual`
	 * labeled alternative in `StellaParser.expr2`.
	 * @param ctx the parse tree
	 */
	enterLessThanOrEqual?: (ctx: LessThanOrEqualContext) => void;
	/**
	 * Exit a parse tree produced by the `LessThanOrEqual`
	 * labeled alternative in `StellaParser.expr2`.
	 * @param ctx the parse tree
	 */
	exitLessThanOrEqual?: (ctx: LessThanOrEqualContext) => void;
	/**
	 * Enter a parse tree produced by the `GreaterThan`
	 * labeled alternative in `StellaParser.expr2`.
	 * @param ctx the parse tree
	 */
	enterGreaterThan?: (ctx: GreaterThanContext) => void;
	/**
	 * Exit a parse tree produced by the `GreaterThan`
	 * labeled alternative in `StellaParser.expr2`.
	 * @param ctx the parse tree
	 */
	exitGreaterThan?: (ctx: GreaterThanContext) => void;
	/**
	 * Enter a parse tree produced by the `GreaterThanOrEqual`
	 * labeled alternative in `StellaParser.expr2`.
	 * @param ctx the parse tree
	 */
	enterGreaterThanOrEqual?: (ctx: GreaterThanOrEqualContext) => void;
	/**
	 * Exit a parse tree produced by the `GreaterThanOrEqual`
	 * labeled alternative in `StellaParser.expr2`.
	 * @param ctx the parse tree
	 */
	exitGreaterThanOrEqual?: (ctx: GreaterThanOrEqualContext) => void;
	/**
	 * Enter a parse tree produced by the `Equal`
	 * labeled alternative in `StellaParser.expr2`.
	 * @param ctx the parse tree
	 */
	enterEqual?: (ctx: EqualContext) => void;
	/**
	 * Exit a parse tree produced by the `Equal`
	 * labeled alternative in `StellaParser.expr2`.
	 * @param ctx the parse tree
	 */
	exitEqual?: (ctx: EqualContext) => void;
	/**
	 * Enter a parse tree produced by the `NotEqual`
	 * labeled alternative in `StellaParser.expr2`.
	 * @param ctx the parse tree
	 */
	enterNotEqual?: (ctx: NotEqualContext) => void;
	/**
	 * Exit a parse tree produced by the `NotEqual`
	 * labeled alternative in `StellaParser.expr2`.
	 * @param ctx the parse tree
	 */
	exitNotEqual?: (ctx: NotEqualContext) => void;
	/**
	 * Enter a parse tree produced by the `Coercion_Expr2_7`
	 * labeled alternative in `StellaParser.expr2`.
	 * @param ctx the parse tree
	 */
	enterCoercion_Expr2_7?: (ctx: Coercion_Expr2_7Context) => void;
	/**
	 * Exit a parse tree produced by the `Coercion_Expr2_7`
	 * labeled alternative in `StellaParser.expr2`.
	 * @param ctx the parse tree
	 */
	exitCoercion_Expr2_7?: (ctx: Coercion_Expr2_7Context) => void;
	/**
	 * Enter a parse tree produced by the `ListExpr2_AppendLast`
	 * labeled alternative in `StellaParser.listExpr2`.
	 * @param ctx the parse tree
	 */
	enterListExpr2_AppendLast?: (ctx: ListExpr2_AppendLastContext) => void;
	/**
	 * Exit a parse tree produced by the `ListExpr2_AppendLast`
	 * labeled alternative in `StellaParser.listExpr2`.
	 * @param ctx the parse tree
	 */
	exitListExpr2_AppendLast?: (ctx: ListExpr2_AppendLastContext) => void;
	/**
	 * Enter a parse tree produced by the `ListExpr2_PrependFirst`
	 * labeled alternative in `StellaParser.listExpr2`.
	 * @param ctx the parse tree
	 */
	enterListExpr2_PrependFirst?: (ctx: ListExpr2_PrependFirstContext) => void;
	/**
	 * Exit a parse tree produced by the `ListExpr2_PrependFirst`
	 * labeled alternative in `StellaParser.listExpr2`.
	 * @param ctx the parse tree
	 */
	exitListExpr2_PrependFirst?: (ctx: ListExpr2_PrependFirstContext) => void;
	/**
	 * Enter a parse tree produced by the `Variant`
	 * labeled alternative in `StellaParser.expr3`.
	 * @param ctx the parse tree
	 */
	enterVariant?: (ctx: VariantContext) => void;
	/**
	 * Exit a parse tree produced by the `Variant`
	 * labeled alternative in `StellaParser.expr3`.
	 * @param ctx the parse tree
	 */
	exitVariant?: (ctx: VariantContext) => void;
	/**
	 * Enter a parse tree produced by the `Add`
	 * labeled alternative in `StellaParser.expr3`.
	 * @param ctx the parse tree
	 */
	enterAdd?: (ctx: AddContext) => void;
	/**
	 * Exit a parse tree produced by the `Add`
	 * labeled alternative in `StellaParser.expr3`.
	 * @param ctx the parse tree
	 */
	exitAdd?: (ctx: AddContext) => void;
	/**
	 * Enter a parse tree produced by the `LogicOr`
	 * labeled alternative in `StellaParser.expr3`.
	 * @param ctx the parse tree
	 */
	enterLogicOr?: (ctx: LogicOrContext) => void;
	/**
	 * Exit a parse tree produced by the `LogicOr`
	 * labeled alternative in `StellaParser.expr3`.
	 * @param ctx the parse tree
	 */
	exitLogicOr?: (ctx: LogicOrContext) => void;
	/**
	 * Enter a parse tree produced by the `Coercion_Expr3_10`
	 * labeled alternative in `StellaParser.expr3`.
	 * @param ctx the parse tree
	 */
	enterCoercion_Expr3_10?: (ctx: Coercion_Expr3_10Context) => void;
	/**
	 * Exit a parse tree produced by the `Coercion_Expr3_10`
	 * labeled alternative in `StellaParser.expr3`.
	 * @param ctx the parse tree
	 */
	exitCoercion_Expr3_10?: (ctx: Coercion_Expr3_10Context) => void;
	/**
	 * Enter a parse tree produced by the `TypeAsc`
	 * labeled alternative in `StellaParser.expr3`.
	 * @param ctx the parse tree
	 */
	enterTypeAsc?: (ctx: TypeAscContext) => void;
	/**
	 * Exit a parse tree produced by the `TypeAsc`
	 * labeled alternative in `StellaParser.expr3`.
	 * @param ctx the parse tree
	 */
	exitTypeAsc?: (ctx: TypeAscContext) => void;
	/**
	 * Enter a parse tree produced by the `Subtract`
	 * labeled alternative in `StellaParser.expr3`.
	 * @param ctx the parse tree
	 */
	enterSubtract?: (ctx: SubtractContext) => void;
	/**
	 * Exit a parse tree produced by the `Subtract`
	 * labeled alternative in `StellaParser.expr3`.
	 * @param ctx the parse tree
	 */
	exitSubtract?: (ctx: SubtractContext) => void;
	/**
	 * Enter a parse tree produced by the `List`
	 * labeled alternative in `StellaParser.expr3`.
	 * @param ctx the parse tree
	 */
	enterList?: (ctx: ListContext) => void;
	/**
	 * Exit a parse tree produced by the `List`
	 * labeled alternative in `StellaParser.expr3`.
	 * @param ctx the parse tree
	 */
	exitList?: (ctx: ListContext) => void;
	/**
	 * Enter a parse tree produced by the `TypeCast`
	 * labeled alternative in `StellaParser.expr3`.
	 * @param ctx the parse tree
	 */
	enterTypeCast?: (ctx: TypeCastContext) => void;
	/**
	 * Exit a parse tree produced by the `TypeCast`
	 * labeled alternative in `StellaParser.expr3`.
	 * @param ctx the parse tree
	 */
	exitTypeCast?: (ctx: TypeCastContext) => void;
	/**
	 * Enter a parse tree produced by the `Abstraction`
	 * labeled alternative in `StellaParser.expr3`.
	 * @param ctx the parse tree
	 */
	enterAbstraction?: (ctx: AbstractionContext) => void;
	/**
	 * Exit a parse tree produced by the `Abstraction`
	 * labeled alternative in `StellaParser.expr3`.
	 * @param ctx the parse tree
	 */
	exitAbstraction?: (ctx: AbstractionContext) => void;
	/**
	 * Enter a parse tree produced by the `Match`
	 * labeled alternative in `StellaParser.expr3`.
	 * @param ctx the parse tree
	 */
	enterMatch?: (ctx: MatchContext) => void;
	/**
	 * Exit a parse tree produced by the `Match`
	 * labeled alternative in `StellaParser.expr3`.
	 * @param ctx the parse tree
	 */
	exitMatch?: (ctx: MatchContext) => void;
	/**
	 * Enter a parse tree produced by the `Divide`
	 * labeled alternative in `StellaParser.expr4`.
	 * @param ctx the parse tree
	 */
	enterDivide?: (ctx: DivideContext) => void;
	/**
	 * Exit a parse tree produced by the `Divide`
	 * labeled alternative in `StellaParser.expr4`.
	 * @param ctx the parse tree
	 */
	exitDivide?: (ctx: DivideContext) => void;
	/**
	 * Enter a parse tree produced by the `Multiply`
	 * labeled alternative in `StellaParser.expr4`.
	 * @param ctx the parse tree
	 */
	enterMultiply?: (ctx: MultiplyContext) => void;
	/**
	 * Exit a parse tree produced by the `Multiply`
	 * labeled alternative in `StellaParser.expr4`.
	 * @param ctx the parse tree
	 */
	exitMultiply?: (ctx: MultiplyContext) => void;
	/**
	 * Enter a parse tree produced by the `Coercion_Expr4_4`
	 * labeled alternative in `StellaParser.expr4`.
	 * @param ctx the parse tree
	 */
	enterCoercion_Expr4_4?: (ctx: Coercion_Expr4_4Context) => void;
	/**
	 * Exit a parse tree produced by the `Coercion_Expr4_4`
	 * labeled alternative in `StellaParser.expr4`.
	 * @param ctx the parse tree
	 */
	exitCoercion_Expr4_4?: (ctx: Coercion_Expr4_4Context) => void;
	/**
	 * Enter a parse tree produced by the `LogicAnd`
	 * labeled alternative in `StellaParser.expr4`.
	 * @param ctx the parse tree
	 */
	enterLogicAnd?: (ctx: LogicAndContext) => void;
	/**
	 * Exit a parse tree produced by the `LogicAnd`
	 * labeled alternative in `StellaParser.expr4`.
	 * @param ctx the parse tree
	 */
	exitLogicAnd?: (ctx: LogicAndContext) => void;
	/**
	 * Enter a parse tree produced by the `Ref`
	 * labeled alternative in `StellaParser.expr5`.
	 * @param ctx the parse tree
	 */
	enterRef?: (ctx: RefContext) => void;
	/**
	 * Exit a parse tree produced by the `Ref`
	 * labeled alternative in `StellaParser.expr5`.
	 * @param ctx the parse tree
	 */
	exitRef?: (ctx: RefContext) => void;
	/**
	 * Enter a parse tree produced by the `Deref`
	 * labeled alternative in `StellaParser.expr5`.
	 * @param ctx the parse tree
	 */
	enterDeref?: (ctx: DerefContext) => void;
	/**
	 * Exit a parse tree produced by the `Deref`
	 * labeled alternative in `StellaParser.expr5`.
	 * @param ctx the parse tree
	 */
	exitDeref?: (ctx: DerefContext) => void;
	/**
	 * Enter a parse tree produced by the `Coercion_Expr5_3`
	 * labeled alternative in `StellaParser.expr5`.
	 * @param ctx the parse tree
	 */
	enterCoercion_Expr5_3?: (ctx: Coercion_Expr5_3Context) => void;
	/**
	 * Exit a parse tree produced by the `Coercion_Expr5_3`
	 * labeled alternative in `StellaParser.expr5`.
	 * @param ctx the parse tree
	 */
	exitCoercion_Expr5_3?: (ctx: Coercion_Expr5_3Context) => void;
	/**
	 * Enter a parse tree produced by the `IsEmpty`
	 * labeled alternative in `StellaParser.expr6`.
	 * @param ctx the parse tree
	 */
	enterIsEmpty?: (ctx: IsEmptyContext) => void;
	/**
	 * Exit a parse tree produced by the `IsEmpty`
	 * labeled alternative in `StellaParser.expr6`.
	 * @param ctx the parse tree
	 */
	exitIsEmpty?: (ctx: IsEmptyContext) => void;
	/**
	 * Enter a parse tree produced by the `Fold`
	 * labeled alternative in `StellaParser.expr6`.
	 * @param ctx the parse tree
	 */
	enterFold?: (ctx: FoldContext) => void;
	/**
	 * Exit a parse tree produced by the `Fold`
	 * labeled alternative in `StellaParser.expr6`.
	 * @param ctx the parse tree
	 */
	exitFold?: (ctx: FoldContext) => void;
	/**
	 * Enter a parse tree produced by the `Panic`
	 * labeled alternative in `StellaParser.expr6`.
	 * @param ctx the parse tree
	 */
	enterPanic?: (ctx: PanicContext) => void;
	/**
	 * Exit a parse tree produced by the `Panic`
	 * labeled alternative in `StellaParser.expr6`.
	 * @param ctx the parse tree
	 */
	exitPanic?: (ctx: PanicContext) => void;
	/**
	 * Enter a parse tree produced by the `IsZero`
	 * labeled alternative in `StellaParser.expr6`.
	 * @param ctx the parse tree
	 */
	enterIsZero?: (ctx: IsZeroContext) => void;
	/**
	 * Exit a parse tree produced by the `IsZero`
	 * labeled alternative in `StellaParser.expr6`.
	 * @param ctx the parse tree
	 */
	exitIsZero?: (ctx: IsZeroContext) => void;
	/**
	 * Enter a parse tree produced by the `Succ`
	 * labeled alternative in `StellaParser.expr6`.
	 * @param ctx the parse tree
	 */
	enterSucc?: (ctx: SuccContext) => void;
	/**
	 * Exit a parse tree produced by the `Succ`
	 * labeled alternative in `StellaParser.expr6`.
	 * @param ctx the parse tree
	 */
	exitSucc?: (ctx: SuccContext) => void;
	/**
	 * Enter a parse tree produced by the `Inl`
	 * labeled alternative in `StellaParser.expr6`.
	 * @param ctx the parse tree
	 */
	enterInl?: (ctx: InlContext) => void;
	/**
	 * Exit a parse tree produced by the `Inl`
	 * labeled alternative in `StellaParser.expr6`.
	 * @param ctx the parse tree
	 */
	exitInl?: (ctx: InlContext) => void;
	/**
	 * Enter a parse tree produced by the `Inr`
	 * labeled alternative in `StellaParser.expr6`.
	 * @param ctx the parse tree
	 */
	enterInr?: (ctx: InrContext) => void;
	/**
	 * Exit a parse tree produced by the `Inr`
	 * labeled alternative in `StellaParser.expr6`.
	 * @param ctx the parse tree
	 */
	exitInr?: (ctx: InrContext) => void;
	/**
	 * Enter a parse tree produced by the `LogicNot`
	 * labeled alternative in `StellaParser.expr6`.
	 * @param ctx the parse tree
	 */
	enterLogicNot?: (ctx: LogicNotContext) => void;
	/**
	 * Exit a parse tree produced by the `LogicNot`
	 * labeled alternative in `StellaParser.expr6`.
	 * @param ctx the parse tree
	 */
	exitLogicNot?: (ctx: LogicNotContext) => void;
	/**
	 * Enter a parse tree produced by the `DotRecord`
	 * labeled alternative in `StellaParser.expr6`.
	 * @param ctx the parse tree
	 */
	enterDotRecord?: (ctx: DotRecordContext) => void;
	/**
	 * Exit a parse tree produced by the `DotRecord`
	 * labeled alternative in `StellaParser.expr6`.
	 * @param ctx the parse tree
	 */
	exitDotRecord?: (ctx: DotRecordContext) => void;
	/**
	 * Enter a parse tree produced by the `Throw`
	 * labeled alternative in `StellaParser.expr6`.
	 * @param ctx the parse tree
	 */
	enterThrow?: (ctx: ThrowContext) => void;
	/**
	 * Exit a parse tree produced by the `Throw`
	 * labeled alternative in `StellaParser.expr6`.
	 * @param ctx the parse tree
	 */
	exitThrow?: (ctx: ThrowContext) => void;
	/**
	 * Enter a parse tree produced by the `Tail`
	 * labeled alternative in `StellaParser.expr6`.
	 * @param ctx the parse tree
	 */
	enterTail?: (ctx: TailContext) => void;
	/**
	 * Exit a parse tree produced by the `Tail`
	 * labeled alternative in `StellaParser.expr6`.
	 * @param ctx the parse tree
	 */
	exitTail?: (ctx: TailContext) => void;
	/**
	 * Enter a parse tree produced by the `Record`
	 * labeled alternative in `StellaParser.expr6`.
	 * @param ctx the parse tree
	 */
	enterRecord?: (ctx: RecordContext) => void;
	/**
	 * Exit a parse tree produced by the `Record`
	 * labeled alternative in `StellaParser.expr6`.
	 * @param ctx the parse tree
	 */
	exitRecord?: (ctx: RecordContext) => void;
	/**
	 * Enter a parse tree produced by the `TypeApplication`
	 * labeled alternative in `StellaParser.expr6`.
	 * @param ctx the parse tree
	 */
	enterTypeApplication?: (ctx: TypeApplicationContext) => void;
	/**
	 * Exit a parse tree produced by the `TypeApplication`
	 * labeled alternative in `StellaParser.expr6`.
	 * @param ctx the parse tree
	 */
	exitTypeApplication?: (ctx: TypeApplicationContext) => void;
	/**
	 * Enter a parse tree produced by the `TryCatch`
	 * labeled alternative in `StellaParser.expr6`.
	 * @param ctx the parse tree
	 */
	enterTryCatch?: (ctx: TryCatchContext) => void;
	/**
	 * Exit a parse tree produced by the `TryCatch`
	 * labeled alternative in `StellaParser.expr6`.
	 * @param ctx the parse tree
	 */
	exitTryCatch?: (ctx: TryCatchContext) => void;
	/**
	 * Enter a parse tree produced by the `Head`
	 * labeled alternative in `StellaParser.expr6`.
	 * @param ctx the parse tree
	 */
	enterHead?: (ctx: HeadContext) => void;
	/**
	 * Exit a parse tree produced by the `Head`
	 * labeled alternative in `StellaParser.expr6`.
	 * @param ctx the parse tree
	 */
	exitHead?: (ctx: HeadContext) => void;
	/**
	 * Enter a parse tree produced by the `TryCastAs`
	 * labeled alternative in `StellaParser.expr6`.
	 * @param ctx the parse tree
	 */
	enterTryCastAs?: (ctx: TryCastAsContext) => void;
	/**
	 * Exit a parse tree produced by the `TryCastAs`
	 * labeled alternative in `StellaParser.expr6`.
	 * @param ctx the parse tree
	 */
	exitTryCastAs?: (ctx: TryCastAsContext) => void;
	/**
	 * Enter a parse tree produced by the `TryWith`
	 * labeled alternative in `StellaParser.expr6`.
	 * @param ctx the parse tree
	 */
	enterTryWith?: (ctx: TryWithContext) => void;
	/**
	 * Exit a parse tree produced by the `TryWith`
	 * labeled alternative in `StellaParser.expr6`.
	 * @param ctx the parse tree
	 */
	exitTryWith?: (ctx: TryWithContext) => void;
	/**
	 * Enter a parse tree produced by the `Pred`
	 * labeled alternative in `StellaParser.expr6`.
	 * @param ctx the parse tree
	 */
	enterPred?: (ctx: PredContext) => void;
	/**
	 * Exit a parse tree produced by the `Pred`
	 * labeled alternative in `StellaParser.expr6`.
	 * @param ctx the parse tree
	 */
	exitPred?: (ctx: PredContext) => void;
	/**
	 * Enter a parse tree produced by the `NatRec`
	 * labeled alternative in `StellaParser.expr6`.
	 * @param ctx the parse tree
	 */
	enterNatRec?: (ctx: NatRecContext) => void;
	/**
	 * Exit a parse tree produced by the `NatRec`
	 * labeled alternative in `StellaParser.expr6`.
	 * @param ctx the parse tree
	 */
	exitNatRec?: (ctx: NatRecContext) => void;
	/**
	 * Enter a parse tree produced by the `Coercion_Expr6_26`
	 * labeled alternative in `StellaParser.expr6`.
	 * @param ctx the parse tree
	 */
	enterCoercion_Expr6_26?: (ctx: Coercion_Expr6_26Context) => void;
	/**
	 * Exit a parse tree produced by the `Coercion_Expr6_26`
	 * labeled alternative in `StellaParser.expr6`.
	 * @param ctx the parse tree
	 */
	exitCoercion_Expr6_26?: (ctx: Coercion_Expr6_26Context) => void;
	/**
	 * Enter a parse tree produced by the `Unfold`
	 * labeled alternative in `StellaParser.expr6`.
	 * @param ctx the parse tree
	 */
	enterUnfold?: (ctx: UnfoldContext) => void;
	/**
	 * Exit a parse tree produced by the `Unfold`
	 * labeled alternative in `StellaParser.expr6`.
	 * @param ctx the parse tree
	 */
	exitUnfold?: (ctx: UnfoldContext) => void;
	/**
	 * Enter a parse tree produced by the `DotTuple`
	 * labeled alternative in `StellaParser.expr6`.
	 * @param ctx the parse tree
	 */
	enterDotTuple?: (ctx: DotTupleContext) => void;
	/**
	 * Exit a parse tree produced by the `DotTuple`
	 * labeled alternative in `StellaParser.expr6`.
	 * @param ctx the parse tree
	 */
	exitDotTuple?: (ctx: DotTupleContext) => void;
	/**
	 * Enter a parse tree produced by the `Fix`
	 * labeled alternative in `StellaParser.expr6`.
	 * @param ctx the parse tree
	 */
	enterFix?: (ctx: FixContext) => void;
	/**
	 * Exit a parse tree produced by the `Fix`
	 * labeled alternative in `StellaParser.expr6`.
	 * @param ctx the parse tree
	 */
	exitFix?: (ctx: FixContext) => void;
	/**
	 * Enter a parse tree produced by the `Application`
	 * labeled alternative in `StellaParser.expr6`.
	 * @param ctx the parse tree
	 */
	enterApplication?: (ctx: ApplicationContext) => void;
	/**
	 * Exit a parse tree produced by the `Application`
	 * labeled alternative in `StellaParser.expr6`.
	 * @param ctx the parse tree
	 */
	exitApplication?: (ctx: ApplicationContext) => void;
	/**
	 * Enter a parse tree produced by the `Tuple`
	 * labeled alternative in `StellaParser.expr6`.
	 * @param ctx the parse tree
	 */
	enterTuple?: (ctx: TupleContext) => void;
	/**
	 * Exit a parse tree produced by the `Tuple`
	 * labeled alternative in `StellaParser.expr6`.
	 * @param ctx the parse tree
	 */
	exitTuple?: (ctx: TupleContext) => void;
	/**
	 * Enter a parse tree produced by the `ConsList`
	 * labeled alternative in `StellaParser.expr6`.
	 * @param ctx the parse tree
	 */
	enterConsList?: (ctx: ConsListContext) => void;
	/**
	 * Exit a parse tree produced by the `ConsList`
	 * labeled alternative in `StellaParser.expr6`.
	 * @param ctx the parse tree
	 */
	exitConsList?: (ctx: ConsListContext) => void;
	/**
	 * Enter a parse tree produced by the `ConstTrue`
	 * labeled alternative in `StellaParser.expr7`.
	 * @param ctx the parse tree
	 */
	enterConstTrue?: (ctx: ConstTrueContext) => void;
	/**
	 * Exit a parse tree produced by the `ConstTrue`
	 * labeled alternative in `StellaParser.expr7`.
	 * @param ctx the parse tree
	 */
	exitConstTrue?: (ctx: ConstTrueContext) => void;
	/**
	 * Enter a parse tree produced by the `ConstFalse`
	 * labeled alternative in `StellaParser.expr7`.
	 * @param ctx the parse tree
	 */
	enterConstFalse?: (ctx: ConstFalseContext) => void;
	/**
	 * Exit a parse tree produced by the `ConstFalse`
	 * labeled alternative in `StellaParser.expr7`.
	 * @param ctx the parse tree
	 */
	exitConstFalse?: (ctx: ConstFalseContext) => void;
	/**
	 * Enter a parse tree produced by the `ConstUnit`
	 * labeled alternative in `StellaParser.expr7`.
	 * @param ctx the parse tree
	 */
	enterConstUnit?: (ctx: ConstUnitContext) => void;
	/**
	 * Exit a parse tree produced by the `ConstUnit`
	 * labeled alternative in `StellaParser.expr7`.
	 * @param ctx the parse tree
	 */
	exitConstUnit?: (ctx: ConstUnitContext) => void;
	/**
	 * Enter a parse tree produced by the `ConstInt`
	 * labeled alternative in `StellaParser.expr7`.
	 * @param ctx the parse tree
	 */
	enterConstInt?: (ctx: ConstIntContext) => void;
	/**
	 * Exit a parse tree produced by the `ConstInt`
	 * labeled alternative in `StellaParser.expr7`.
	 * @param ctx the parse tree
	 */
	exitConstInt?: (ctx: ConstIntContext) => void;
	/**
	 * Enter a parse tree produced by the `ConstMemory`
	 * labeled alternative in `StellaParser.expr7`.
	 * @param ctx the parse tree
	 */
	enterConstMemory?: (ctx: ConstMemoryContext) => void;
	/**
	 * Exit a parse tree produced by the `ConstMemory`
	 * labeled alternative in `StellaParser.expr7`.
	 * @param ctx the parse tree
	 */
	exitConstMemory?: (ctx: ConstMemoryContext) => void;
	/**
	 * Enter a parse tree produced by the `Var`
	 * labeled alternative in `StellaParser.expr7`.
	 * @param ctx the parse tree
	 */
	enterVar?: (ctx: VarContext) => void;
	/**
	 * Exit a parse tree produced by the `Var`
	 * labeled alternative in `StellaParser.expr7`.
	 * @param ctx the parse tree
	 */
	exitVar?: (ctx: VarContext) => void;
	/**
	 * Enter a parse tree produced by the `Coercion_Expr7_7`
	 * labeled alternative in `StellaParser.expr7`.
	 * @param ctx the parse tree
	 */
	enterCoercion_Expr7_7?: (ctx: Coercion_Expr7_7Context) => void;
	/**
	 * Exit a parse tree produced by the `Coercion_Expr7_7`
	 * labeled alternative in `StellaParser.expr7`.
	 * @param ctx the parse tree
	 */
	exitCoercion_Expr7_7?: (ctx: Coercion_Expr7_7Context) => void;
	/**
	 * Enter a parse tree produced by the `TypeAuto`
	 * labeled alternative in `StellaParser.type`.
	 * @param ctx the parse tree
	 */
	enterTypeAuto?: (ctx: TypeAutoContext) => void;
	/**
	 * Exit a parse tree produced by the `TypeAuto`
	 * labeled alternative in `StellaParser.type`.
	 * @param ctx the parse tree
	 */
	exitTypeAuto?: (ctx: TypeAutoContext) => void;
	/**
	 * Enter a parse tree produced by the `TypeFun`
	 * labeled alternative in `StellaParser.type`.
	 * @param ctx the parse tree
	 */
	enterTypeFun?: (ctx: TypeFunContext) => void;
	/**
	 * Exit a parse tree produced by the `TypeFun`
	 * labeled alternative in `StellaParser.type`.
	 * @param ctx the parse tree
	 */
	exitTypeFun?: (ctx: TypeFunContext) => void;
	/**
	 * Enter a parse tree produced by the `TypeForAll`
	 * labeled alternative in `StellaParser.type`.
	 * @param ctx the parse tree
	 */
	enterTypeForAll?: (ctx: TypeForAllContext) => void;
	/**
	 * Exit a parse tree produced by the `TypeForAll`
	 * labeled alternative in `StellaParser.type`.
	 * @param ctx the parse tree
	 */
	exitTypeForAll?: (ctx: TypeForAllContext) => void;
	/**
	 * Enter a parse tree produced by the `TypeRec`
	 * labeled alternative in `StellaParser.type`.
	 * @param ctx the parse tree
	 */
	enterTypeRec?: (ctx: TypeRecContext) => void;
	/**
	 * Exit a parse tree produced by the `TypeRec`
	 * labeled alternative in `StellaParser.type`.
	 * @param ctx the parse tree
	 */
	exitTypeRec?: (ctx: TypeRecContext) => void;
	/**
	 * Enter a parse tree produced by the `Coercion_Type_5`
	 * labeled alternative in `StellaParser.type`.
	 * @param ctx the parse tree
	 */
	enterCoercion_Type_5?: (ctx: Coercion_Type_5Context) => void;
	/**
	 * Exit a parse tree produced by the `Coercion_Type_5`
	 * labeled alternative in `StellaParser.type`.
	 * @param ctx the parse tree
	 */
	exitCoercion_Type_5?: (ctx: Coercion_Type_5Context) => void;
	/**
	 * Enter a parse tree produced by the `TypeSum`
	 * labeled alternative in `StellaParser.type1`.
	 * @param ctx the parse tree
	 */
	enterTypeSum?: (ctx: TypeSumContext) => void;
	/**
	 * Exit a parse tree produced by the `TypeSum`
	 * labeled alternative in `StellaParser.type1`.
	 * @param ctx the parse tree
	 */
	exitTypeSum?: (ctx: TypeSumContext) => void;
	/**
	 * Enter a parse tree produced by the `Coercion_Type1_2`
	 * labeled alternative in `StellaParser.type1`.
	 * @param ctx the parse tree
	 */
	enterCoercion_Type1_2?: (ctx: Coercion_Type1_2Context) => void;
	/**
	 * Exit a parse tree produced by the `Coercion_Type1_2`
	 * labeled alternative in `StellaParser.type1`.
	 * @param ctx the parse tree
	 */
	exitCoercion_Type1_2?: (ctx: Coercion_Type1_2Context) => void;
	/**
	 * Enter a parse tree produced by the `TypeTuple`
	 * labeled alternative in `StellaParser.type2`.
	 * @param ctx the parse tree
	 */
	enterTypeTuple?: (ctx: TypeTupleContext) => void;
	/**
	 * Exit a parse tree produced by the `TypeTuple`
	 * labeled alternative in `StellaParser.type2`.
	 * @param ctx the parse tree
	 */
	exitTypeTuple?: (ctx: TypeTupleContext) => void;
	/**
	 * Enter a parse tree produced by the `TypeRecord`
	 * labeled alternative in `StellaParser.type2`.
	 * @param ctx the parse tree
	 */
	enterTypeRecord?: (ctx: TypeRecordContext) => void;
	/**
	 * Exit a parse tree produced by the `TypeRecord`
	 * labeled alternative in `StellaParser.type2`.
	 * @param ctx the parse tree
	 */
	exitTypeRecord?: (ctx: TypeRecordContext) => void;
	/**
	 * Enter a parse tree produced by the `TypeVariant`
	 * labeled alternative in `StellaParser.type2`.
	 * @param ctx the parse tree
	 */
	enterTypeVariant?: (ctx: TypeVariantContext) => void;
	/**
	 * Exit a parse tree produced by the `TypeVariant`
	 * labeled alternative in `StellaParser.type2`.
	 * @param ctx the parse tree
	 */
	exitTypeVariant?: (ctx: TypeVariantContext) => void;
	/**
	 * Enter a parse tree produced by the `TypeList`
	 * labeled alternative in `StellaParser.type2`.
	 * @param ctx the parse tree
	 */
	enterTypeList?: (ctx: TypeListContext) => void;
	/**
	 * Exit a parse tree produced by the `TypeList`
	 * labeled alternative in `StellaParser.type2`.
	 * @param ctx the parse tree
	 */
	exitTypeList?: (ctx: TypeListContext) => void;
	/**
	 * Enter a parse tree produced by the `Coercion_Type2_5`
	 * labeled alternative in `StellaParser.type2`.
	 * @param ctx the parse tree
	 */
	enterCoercion_Type2_5?: (ctx: Coercion_Type2_5Context) => void;
	/**
	 * Exit a parse tree produced by the `Coercion_Type2_5`
	 * labeled alternative in `StellaParser.type2`.
	 * @param ctx the parse tree
	 */
	exitCoercion_Type2_5?: (ctx: Coercion_Type2_5Context) => void;
	/**
	 * Enter a parse tree produced by the `TypeBool`
	 * labeled alternative in `StellaParser.type3`.
	 * @param ctx the parse tree
	 */
	enterTypeBool?: (ctx: TypeBoolContext) => void;
	/**
	 * Exit a parse tree produced by the `TypeBool`
	 * labeled alternative in `StellaParser.type3`.
	 * @param ctx the parse tree
	 */
	exitTypeBool?: (ctx: TypeBoolContext) => void;
	/**
	 * Enter a parse tree produced by the `TypeNat`
	 * labeled alternative in `StellaParser.type3`.
	 * @param ctx the parse tree
	 */
	enterTypeNat?: (ctx: TypeNatContext) => void;
	/**
	 * Exit a parse tree produced by the `TypeNat`
	 * labeled alternative in `StellaParser.type3`.
	 * @param ctx the parse tree
	 */
	exitTypeNat?: (ctx: TypeNatContext) => void;
	/**
	 * Enter a parse tree produced by the `TypeUnit`
	 * labeled alternative in `StellaParser.type3`.
	 * @param ctx the parse tree
	 */
	enterTypeUnit?: (ctx: TypeUnitContext) => void;
	/**
	 * Exit a parse tree produced by the `TypeUnit`
	 * labeled alternative in `StellaParser.type3`.
	 * @param ctx the parse tree
	 */
	exitTypeUnit?: (ctx: TypeUnitContext) => void;
	/**
	 * Enter a parse tree produced by the `TypeTop`
	 * labeled alternative in `StellaParser.type3`.
	 * @param ctx the parse tree
	 */
	enterTypeTop?: (ctx: TypeTopContext) => void;
	/**
	 * Exit a parse tree produced by the `TypeTop`
	 * labeled alternative in `StellaParser.type3`.
	 * @param ctx the parse tree
	 */
	exitTypeTop?: (ctx: TypeTopContext) => void;
	/**
	 * Enter a parse tree produced by the `TypeBottom`
	 * labeled alternative in `StellaParser.type3`.
	 * @param ctx the parse tree
	 */
	enterTypeBottom?: (ctx: TypeBottomContext) => void;
	/**
	 * Exit a parse tree produced by the `TypeBottom`
	 * labeled alternative in `StellaParser.type3`.
	 * @param ctx the parse tree
	 */
	exitTypeBottom?: (ctx: TypeBottomContext) => void;
	/**
	 * Enter a parse tree produced by the `TypeRef`
	 * labeled alternative in `StellaParser.type3`.
	 * @param ctx the parse tree
	 */
	enterTypeRef?: (ctx: TypeRefContext) => void;
	/**
	 * Exit a parse tree produced by the `TypeRef`
	 * labeled alternative in `StellaParser.type3`.
	 * @param ctx the parse tree
	 */
	exitTypeRef?: (ctx: TypeRefContext) => void;
	/**
	 * Enter a parse tree produced by the `TypeVar`
	 * labeled alternative in `StellaParser.type3`.
	 * @param ctx the parse tree
	 */
	enterTypeVar?: (ctx: TypeVarContext) => void;
	/**
	 * Exit a parse tree produced by the `TypeVar`
	 * labeled alternative in `StellaParser.type3`.
	 * @param ctx the parse tree
	 */
	exitTypeVar?: (ctx: TypeVarContext) => void;
	/**
	 * Enter a parse tree produced by the `Coercion_Type3_8`
	 * labeled alternative in `StellaParser.type3`.
	 * @param ctx the parse tree
	 */
	enterCoercion_Type3_8?: (ctx: Coercion_Type3_8Context) => void;
	/**
	 * Exit a parse tree produced by the `Coercion_Type3_8`
	 * labeled alternative in `StellaParser.type3`.
	 * @param ctx the parse tree
	 */
	exitCoercion_Type3_8?: (ctx: Coercion_Type3_8Context) => void;
	/**
	 * Enter a parse tree produced by the `ListType_Empty`
	 * labeled alternative in `StellaParser.listType`.
	 * @param ctx the parse tree
	 */
	enterListType_Empty?: (ctx: ListType_EmptyContext) => void;
	/**
	 * Exit a parse tree produced by the `ListType_Empty`
	 * labeled alternative in `StellaParser.listType`.
	 * @param ctx the parse tree
	 */
	exitListType_Empty?: (ctx: ListType_EmptyContext) => void;
	/**
	 * Enter a parse tree produced by the `ListType_AppendLast`
	 * labeled alternative in `StellaParser.listType`.
	 * @param ctx the parse tree
	 */
	enterListType_AppendLast?: (ctx: ListType_AppendLastContext) => void;
	/**
	 * Exit a parse tree produced by the `ListType_AppendLast`
	 * labeled alternative in `StellaParser.listType`.
	 * @param ctx the parse tree
	 */
	exitListType_AppendLast?: (ctx: ListType_AppendLastContext) => void;
	/**
	 * Enter a parse tree produced by the `ListType_PrependFirst`
	 * labeled alternative in `StellaParser.listType`.
	 * @param ctx the parse tree
	 */
	enterListType_PrependFirst?: (ctx: ListType_PrependFirstContext) => void;
	/**
	 * Exit a parse tree produced by the `ListType_PrependFirst`
	 * labeled alternative in `StellaParser.listType`.
	 * @param ctx the parse tree
	 */
	exitListType_PrependFirst?: (ctx: ListType_PrependFirstContext) => void;
	/**
	 * Enter a parse tree produced by the `AVariantFieldType`
	 * labeled alternative in `StellaParser.variantFieldType`.
	 * @param ctx the parse tree
	 */
	enterAVariantFieldType?: (ctx: AVariantFieldTypeContext) => void;
	/**
	 * Exit a parse tree produced by the `AVariantFieldType`
	 * labeled alternative in `StellaParser.variantFieldType`.
	 * @param ctx the parse tree
	 */
	exitAVariantFieldType?: (ctx: AVariantFieldTypeContext) => void;
	/**
	 * Enter a parse tree produced by the `ListVariantFieldType_Empty`
	 * labeled alternative in `StellaParser.listVariantFieldType`.
	 * @param ctx the parse tree
	 */
	enterListVariantFieldType_Empty?: (ctx: ListVariantFieldType_EmptyContext) => void;
	/**
	 * Exit a parse tree produced by the `ListVariantFieldType_Empty`
	 * labeled alternative in `StellaParser.listVariantFieldType`.
	 * @param ctx the parse tree
	 */
	exitListVariantFieldType_Empty?: (ctx: ListVariantFieldType_EmptyContext) => void;
	/**
	 * Enter a parse tree produced by the `ListVariantFieldType_AppendLast`
	 * labeled alternative in `StellaParser.listVariantFieldType`.
	 * @param ctx the parse tree
	 */
	enterListVariantFieldType_AppendLast?: (ctx: ListVariantFieldType_AppendLastContext) => void;
	/**
	 * Exit a parse tree produced by the `ListVariantFieldType_AppendLast`
	 * labeled alternative in `StellaParser.listVariantFieldType`.
	 * @param ctx the parse tree
	 */
	exitListVariantFieldType_AppendLast?: (ctx: ListVariantFieldType_AppendLastContext) => void;
	/**
	 * Enter a parse tree produced by the `ListVariantFieldType_PrependFirst`
	 * labeled alternative in `StellaParser.listVariantFieldType`.
	 * @param ctx the parse tree
	 */
	enterListVariantFieldType_PrependFirst?: (ctx: ListVariantFieldType_PrependFirstContext) => void;
	/**
	 * Exit a parse tree produced by the `ListVariantFieldType_PrependFirst`
	 * labeled alternative in `StellaParser.listVariantFieldType`.
	 * @param ctx the parse tree
	 */
	exitListVariantFieldType_PrependFirst?: (ctx: ListVariantFieldType_PrependFirstContext) => void;
	/**
	 * Enter a parse tree produced by the `ARecordFieldType`
	 * labeled alternative in `StellaParser.recordFieldType`.
	 * @param ctx the parse tree
	 */
	enterARecordFieldType?: (ctx: ARecordFieldTypeContext) => void;
	/**
	 * Exit a parse tree produced by the `ARecordFieldType`
	 * labeled alternative in `StellaParser.recordFieldType`.
	 * @param ctx the parse tree
	 */
	exitARecordFieldType?: (ctx: ARecordFieldTypeContext) => void;
	/**
	 * Enter a parse tree produced by the `ListRecordFieldType_AppendLast`
	 * labeled alternative in `StellaParser.listRecordFieldType`.
	 * @param ctx the parse tree
	 */
	enterListRecordFieldType_AppendLast?: (ctx: ListRecordFieldType_AppendLastContext) => void;
	/**
	 * Exit a parse tree produced by the `ListRecordFieldType_AppendLast`
	 * labeled alternative in `StellaParser.listRecordFieldType`.
	 * @param ctx the parse tree
	 */
	exitListRecordFieldType_AppendLast?: (ctx: ListRecordFieldType_AppendLastContext) => void;
	/**
	 * Enter a parse tree produced by the `ListRecordFieldType_PrependFirst`
	 * labeled alternative in `StellaParser.listRecordFieldType`.
	 * @param ctx the parse tree
	 */
	enterListRecordFieldType_PrependFirst?: (ctx: ListRecordFieldType_PrependFirstContext) => void;
	/**
	 * Exit a parse tree produced by the `ListRecordFieldType_PrependFirst`
	 * labeled alternative in `StellaParser.listRecordFieldType`.
	 * @param ctx the parse tree
	 */
	exitListRecordFieldType_PrependFirst?: (ctx: ListRecordFieldType_PrependFirstContext) => void;
	/**
	 * Enter a parse tree produced by the `ATyping`
	 * labeled alternative in `StellaParser.typing`.
	 * @param ctx the parse tree
	 */
	enterATyping?: (ctx: ATypingContext) => void;
	/**
	 * Exit a parse tree produced by the `ATyping`
	 * labeled alternative in `StellaParser.typing`.
	 * @param ctx the parse tree
	 */
	exitATyping?: (ctx: ATypingContext) => void;
}

