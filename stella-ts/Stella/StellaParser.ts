// Generated from Stella/StellaParser.g4 by ANTLR 4.13.1
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import StellaParserListener from "./StellaParserListener.js";
// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class StellaParser extends Parser {
	public static readonly Surrogate_id_SYMB_0 = 1;
	public static readonly Surrogate_id_SYMB_1 = 2;
	public static readonly Surrogate_id_SYMB_2 = 3;
	public static readonly Surrogate_id_SYMB_3 = 4;
	public static readonly Surrogate_id_SYMB_4 = 5;
	public static readonly Surrogate_id_SYMB_5 = 6;
	public static readonly Surrogate_id_SYMB_6 = 7;
	public static readonly Surrogate_id_SYMB_7 = 8;
	public static readonly Surrogate_id_SYMB_8 = 9;
	public static readonly Surrogate_id_SYMB_9 = 10;
	public static readonly Surrogate_id_SYMB_10 = 11;
	public static readonly Surrogate_id_SYMB_11 = 12;
	public static readonly Surrogate_id_SYMB_12 = 13;
	public static readonly Surrogate_id_SYMB_13 = 14;
	public static readonly Surrogate_id_SYMB_14 = 15;
	public static readonly Surrogate_id_SYMB_15 = 16;
	public static readonly Surrogate_id_SYMB_16 = 17;
	public static readonly Surrogate_id_SYMB_17 = 18;
	public static readonly Surrogate_id_SYMB_18 = 19;
	public static readonly Surrogate_id_SYMB_19 = 20;
	public static readonly Surrogate_id_SYMB_20 = 21;
	public static readonly Surrogate_id_SYMB_21 = 22;
	public static readonly Surrogate_id_SYMB_22 = 23;
	public static readonly Surrogate_id_SYMB_23 = 24;
	public static readonly Surrogate_id_SYMB_24 = 25;
	public static readonly Surrogate_id_SYMB_25 = 26;
	public static readonly Surrogate_id_SYMB_26 = 27;
	public static readonly Surrogate_id_SYMB_27 = 28;
	public static readonly Surrogate_id_SYMB_28 = 29;
	public static readonly Surrogate_id_SYMB_29 = 30;
	public static readonly Surrogate_id_SYMB_30 = 31;
	public static readonly Surrogate_id_SYMB_31 = 32;
	public static readonly Surrogate_id_SYMB_32 = 33;
	public static readonly Surrogate_id_SYMB_33 = 34;
	public static readonly Surrogate_id_SYMB_34 = 35;
	public static readonly Surrogate_id_SYMB_35 = 36;
	public static readonly Surrogate_id_SYMB_36 = 37;
	public static readonly Surrogate_id_SYMB_37 = 38;
	public static readonly Surrogate_id_SYMB_38 = 39;
	public static readonly Surrogate_id_SYMB_39 = 40;
	public static readonly Surrogate_id_SYMB_40 = 41;
	public static readonly Surrogate_id_SYMB_41 = 42;
	public static readonly Surrogate_id_SYMB_42 = 43;
	public static readonly Surrogate_id_SYMB_43 = 44;
	public static readonly Surrogate_id_SYMB_44 = 45;
	public static readonly Surrogate_id_SYMB_45 = 46;
	public static readonly Surrogate_id_SYMB_46 = 47;
	public static readonly Surrogate_id_SYMB_47 = 48;
	public static readonly Surrogate_id_SYMB_48 = 49;
	public static readonly Surrogate_id_SYMB_49 = 50;
	public static readonly Surrogate_id_SYMB_50 = 51;
	public static readonly Surrogate_id_SYMB_51 = 52;
	public static readonly Surrogate_id_SYMB_52 = 53;
	public static readonly Surrogate_id_SYMB_53 = 54;
	public static readonly Surrogate_id_SYMB_54 = 55;
	public static readonly Surrogate_id_SYMB_55 = 56;
	public static readonly Surrogate_id_SYMB_56 = 57;
	public static readonly Surrogate_id_SYMB_57 = 58;
	public static readonly Surrogate_id_SYMB_58 = 59;
	public static readonly Surrogate_id_SYMB_59 = 60;
	public static readonly Surrogate_id_SYMB_60 = 61;
	public static readonly Surrogate_id_SYMB_61 = 62;
	public static readonly Surrogate_id_SYMB_62 = 63;
	public static readonly Surrogate_id_SYMB_63 = 64;
	public static readonly Surrogate_id_SYMB_64 = 65;
	public static readonly Surrogate_id_SYMB_65 = 66;
	public static readonly Surrogate_id_SYMB_66 = 67;
	public static readonly Surrogate_id_SYMB_67 = 68;
	public static readonly Surrogate_id_SYMB_68 = 69;
	public static readonly Surrogate_id_SYMB_69 = 70;
	public static readonly Surrogate_id_SYMB_70 = 71;
	public static readonly Surrogate_id_SYMB_71 = 72;
	public static readonly Surrogate_id_SYMB_72 = 73;
	public static readonly Surrogate_id_SYMB_73 = 74;
	public static readonly Surrogate_id_SYMB_74 = 75;
	public static readonly Surrogate_id_SYMB_75 = 76;
	public static readonly Surrogate_id_SYMB_76 = 77;
	public static readonly Surrogate_id_SYMB_77 = 78;
	public static readonly Surrogate_id_SYMB_78 = 79;
	public static readonly Surrogate_id_SYMB_79 = 80;
	public static readonly Surrogate_id_SYMB_80 = 81;
	public static readonly COMMENT_antlr_builtin = 82;
	public static readonly MULTICOMMENT_antlr_builtin = 83;
	public static readonly StellaIdent = 84;
	public static readonly ExtensionName = 85;
	public static readonly MemoryAddress = 86;
	public static readonly INTEGER = 87;
	public static readonly WS = 88;
	public static readonly ErrorToken = 89;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_start_Program = 0;
	public static readonly RULE_start_ListStellaIdent = 1;
	public static readonly RULE_start_LanguageDecl = 2;
	public static readonly RULE_start_Extension = 3;
	public static readonly RULE_start_ListExtensionName = 4;
	public static readonly RULE_start_ListExtension = 5;
	public static readonly RULE_start_Decl = 6;
	public static readonly RULE_start_ListDecl = 7;
	public static readonly RULE_start_LocalDecl = 8;
	public static readonly RULE_start_ListLocalDecl = 9;
	public static readonly RULE_start_Annotation = 10;
	public static readonly RULE_start_ListAnnotation = 11;
	public static readonly RULE_start_ParamDecl = 12;
	public static readonly RULE_start_ListParamDecl = 13;
	public static readonly RULE_start_ReturnType = 14;
	public static readonly RULE_start_ThrowType = 15;
	public static readonly RULE_start_Type9 = 16;
	public static readonly RULE_start_ListType9 = 17;
	public static readonly RULE_start_MatchCase = 18;
	public static readonly RULE_start_ListMatchCase = 19;
	public static readonly RULE_start_OptionalTyping = 20;
	public static readonly RULE_start_PatternData = 21;
	public static readonly RULE_start_ExprData = 22;
	public static readonly RULE_start_Pattern = 23;
	public static readonly RULE_start_ListPattern = 24;
	public static readonly RULE_start_LabelledPattern = 25;
	public static readonly RULE_start_ListLabelledPattern = 26;
	public static readonly RULE_start_Binding = 27;
	public static readonly RULE_start_ListBinding = 28;
	public static readonly RULE_start_Expr = 29;
	public static readonly RULE_start_ListExpr = 30;
	public static readonly RULE_start_Expr1 = 31;
	public static readonly RULE_start_PatternBinding = 32;
	public static readonly RULE_start_ListPatternBinding = 33;
	public static readonly RULE_start_Expr2 = 34;
	public static readonly RULE_start_ListExpr2 = 35;
	public static readonly RULE_start_Expr3 = 36;
	public static readonly RULE_start_Expr4 = 37;
	public static readonly RULE_start_Expr5 = 38;
	public static readonly RULE_start_Expr6 = 39;
	public static readonly RULE_start_Expr7 = 40;
	public static readonly RULE_start_Type = 41;
	public static readonly RULE_start_Type1 = 42;
	public static readonly RULE_start_Type2 = 43;
	public static readonly RULE_start_Type3 = 44;
	public static readonly RULE_start_ListType = 45;
	public static readonly RULE_start_VariantFieldType = 46;
	public static readonly RULE_start_ListVariantFieldType = 47;
	public static readonly RULE_start_RecordFieldType = 48;
	public static readonly RULE_start_ListRecordFieldType = 49;
	public static readonly RULE_start_Typing = 50;
	public static readonly RULE_program = 51;
	public static readonly RULE_listStellaIdent = 52;
	public static readonly RULE_languageDecl = 53;
	public static readonly RULE_extension = 54;
	public static readonly RULE_listExtensionName = 55;
	public static readonly RULE_listExtension = 56;
	public static readonly RULE_decl = 57;
	public static readonly RULE_listDecl = 58;
	public static readonly RULE_localDecl = 59;
	public static readonly RULE_listLocalDecl = 60;
	public static readonly RULE_annotation = 61;
	public static readonly RULE_listAnnotation = 62;
	public static readonly RULE_paramDecl = 63;
	public static readonly RULE_listParamDecl = 64;
	public static readonly RULE_returnType = 65;
	public static readonly RULE_throwType = 66;
	public static readonly RULE_type9 = 67;
	public static readonly RULE_listType9 = 68;
	public static readonly RULE_matchCase = 69;
	public static readonly RULE_listMatchCase = 70;
	public static readonly RULE_optionalTyping = 71;
	public static readonly RULE_patternData = 72;
	public static readonly RULE_exprData = 73;
	public static readonly RULE_pattern = 74;
	public static readonly RULE_listPattern = 75;
	public static readonly RULE_labelledPattern = 76;
	public static readonly RULE_listLabelledPattern = 77;
	public static readonly RULE_binding = 78;
	public static readonly RULE_listBinding = 79;
	public static readonly RULE_expr = 80;
	public static readonly RULE_listExpr = 81;
	public static readonly RULE_expr1 = 82;
	public static readonly RULE_patternBinding = 83;
	public static readonly RULE_listPatternBinding = 84;
	public static readonly RULE_expr2 = 85;
	public static readonly RULE_listExpr2 = 86;
	public static readonly RULE_expr3 = 87;
	public static readonly RULE_expr4 = 88;
	public static readonly RULE_expr5 = 89;
	public static readonly RULE_expr6 = 90;
	public static readonly RULE_expr7 = 91;
	public static readonly RULE_type = 92;
	public static readonly RULE_type1 = 93;
	public static readonly RULE_type2 = 94;
	public static readonly RULE_type3 = 95;
	public static readonly RULE_listType = 96;
	public static readonly RULE_variantFieldType = 97;
	public static readonly RULE_listVariantFieldType = 98;
	public static readonly RULE_recordFieldType = 99;
	public static readonly RULE_listRecordFieldType = 100;
	public static readonly RULE_typing = 101;
	public static readonly literalNames: (string | null)[] = [ null, "','", 
                                                            "';'", "'('", 
                                                            "')'", "'{'", 
                                                            "'}'", "'['", 
                                                            "']'", "'='", 
                                                            "':'", "'->'", 
                                                            "'=>'", "'|'", 
                                                            "'<|'", "'|>'", 
                                                            "':='", "'<'", 
                                                            "'<='", "'>'", 
                                                            "'>='", "'=='", 
                                                            "'!='", "'+'", 
                                                            "'-'", "'*'", 
                                                            "'/'", "'.'", 
                                                            "'List::head'", 
                                                            "'List::isempty'", 
                                                            "'List::tail'", 
                                                            "'panic!'", 
                                                            "'Nat::pred'", 
                                                            "'Nat::iszero'", 
                                                            "'Nat::rec'", 
                                                            "'&'", "'Bool'", 
                                                            "'Bot'", "'Nat'", 
                                                            "'Top'", "'Unit'", 
                                                            "'and'", "'as'", 
                                                            "'auto'", "'cast'", 
                                                            "'catch'", "'cons'", 
                                                            "'core'", "'else'", 
                                                            "'exception'", 
                                                            "'extend'", 
                                                            "'false'", "'fix'", 
                                                            "'fn'", "'fold'", 
                                                            "'forall'", 
                                                            "'generic'", 
                                                            "'if'", "'in'", 
                                                            "'inl'", "'inline'", 
                                                            "'inr'", "'language'", 
                                                            "'let'", "'letrec'", 
                                                            "'match'", "'new'", 
                                                            "'not'", "'or'", 
                                                            "'return'", 
                                                            "'succ'", "'then'", 
                                                            "'throw'", "'throws'", 
                                                            "'true'", "'try'", 
                                                            "'type'", "'unfold'", 
                                                            "'unit'", "'variant'", 
                                                            "'with'", "'??'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "Surrogate_id_SYMB_0", 
                                                             "Surrogate_id_SYMB_1", 
                                                             "Surrogate_id_SYMB_2", 
                                                             "Surrogate_id_SYMB_3", 
                                                             "Surrogate_id_SYMB_4", 
                                                             "Surrogate_id_SYMB_5", 
                                                             "Surrogate_id_SYMB_6", 
                                                             "Surrogate_id_SYMB_7", 
                                                             "Surrogate_id_SYMB_8", 
                                                             "Surrogate_id_SYMB_9", 
                                                             "Surrogate_id_SYMB_10", 
                                                             "Surrogate_id_SYMB_11", 
                                                             "Surrogate_id_SYMB_12", 
                                                             "Surrogate_id_SYMB_13", 
                                                             "Surrogate_id_SYMB_14", 
                                                             "Surrogate_id_SYMB_15", 
                                                             "Surrogate_id_SYMB_16", 
                                                             "Surrogate_id_SYMB_17", 
                                                             "Surrogate_id_SYMB_18", 
                                                             "Surrogate_id_SYMB_19", 
                                                             "Surrogate_id_SYMB_20", 
                                                             "Surrogate_id_SYMB_21", 
                                                             "Surrogate_id_SYMB_22", 
                                                             "Surrogate_id_SYMB_23", 
                                                             "Surrogate_id_SYMB_24", 
                                                             "Surrogate_id_SYMB_25", 
                                                             "Surrogate_id_SYMB_26", 
                                                             "Surrogate_id_SYMB_27", 
                                                             "Surrogate_id_SYMB_28", 
                                                             "Surrogate_id_SYMB_29", 
                                                             "Surrogate_id_SYMB_30", 
                                                             "Surrogate_id_SYMB_31", 
                                                             "Surrogate_id_SYMB_32", 
                                                             "Surrogate_id_SYMB_33", 
                                                             "Surrogate_id_SYMB_34", 
                                                             "Surrogate_id_SYMB_35", 
                                                             "Surrogate_id_SYMB_36", 
                                                             "Surrogate_id_SYMB_37", 
                                                             "Surrogate_id_SYMB_38", 
                                                             "Surrogate_id_SYMB_39", 
                                                             "Surrogate_id_SYMB_40", 
                                                             "Surrogate_id_SYMB_41", 
                                                             "Surrogate_id_SYMB_42", 
                                                             "Surrogate_id_SYMB_43", 
                                                             "Surrogate_id_SYMB_44", 
                                                             "Surrogate_id_SYMB_45", 
                                                             "Surrogate_id_SYMB_46", 
                                                             "Surrogate_id_SYMB_47", 
                                                             "Surrogate_id_SYMB_48", 
                                                             "Surrogate_id_SYMB_49", 
                                                             "Surrogate_id_SYMB_50", 
                                                             "Surrogate_id_SYMB_51", 
                                                             "Surrogate_id_SYMB_52", 
                                                             "Surrogate_id_SYMB_53", 
                                                             "Surrogate_id_SYMB_54", 
                                                             "Surrogate_id_SYMB_55", 
                                                             "Surrogate_id_SYMB_56", 
                                                             "Surrogate_id_SYMB_57", 
                                                             "Surrogate_id_SYMB_58", 
                                                             "Surrogate_id_SYMB_59", 
                                                             "Surrogate_id_SYMB_60", 
                                                             "Surrogate_id_SYMB_61", 
                                                             "Surrogate_id_SYMB_62", 
                                                             "Surrogate_id_SYMB_63", 
                                                             "Surrogate_id_SYMB_64", 
                                                             "Surrogate_id_SYMB_65", 
                                                             "Surrogate_id_SYMB_66", 
                                                             "Surrogate_id_SYMB_67", 
                                                             "Surrogate_id_SYMB_68", 
                                                             "Surrogate_id_SYMB_69", 
                                                             "Surrogate_id_SYMB_70", 
                                                             "Surrogate_id_SYMB_71", 
                                                             "Surrogate_id_SYMB_72", 
                                                             "Surrogate_id_SYMB_73", 
                                                             "Surrogate_id_SYMB_74", 
                                                             "Surrogate_id_SYMB_75", 
                                                             "Surrogate_id_SYMB_76", 
                                                             "Surrogate_id_SYMB_77", 
                                                             "Surrogate_id_SYMB_78", 
                                                             "Surrogate_id_SYMB_79", 
                                                             "Surrogate_id_SYMB_80", 
                                                             "COMMENT_antlr_builtin", 
                                                             "MULTICOMMENT_antlr_builtin", 
                                                             "StellaIdent", 
                                                             "ExtensionName", 
                                                             "MemoryAddress", 
                                                             "INTEGER", 
                                                             "WS", "ErrorToken" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"start_Program", "start_ListStellaIdent", "start_LanguageDecl", "start_Extension", 
		"start_ListExtensionName", "start_ListExtension", "start_Decl", "start_ListDecl", 
		"start_LocalDecl", "start_ListLocalDecl", "start_Annotation", "start_ListAnnotation", 
		"start_ParamDecl", "start_ListParamDecl", "start_ReturnType", "start_ThrowType", 
		"start_Type9", "start_ListType9", "start_MatchCase", "start_ListMatchCase", 
		"start_OptionalTyping", "start_PatternData", "start_ExprData", "start_Pattern", 
		"start_ListPattern", "start_LabelledPattern", "start_ListLabelledPattern", 
		"start_Binding", "start_ListBinding", "start_Expr", "start_ListExpr", 
		"start_Expr1", "start_PatternBinding", "start_ListPatternBinding", "start_Expr2", 
		"start_ListExpr2", "start_Expr3", "start_Expr4", "start_Expr5", "start_Expr6", 
		"start_Expr7", "start_Type", "start_Type1", "start_Type2", "start_Type3", 
		"start_ListType", "start_VariantFieldType", "start_ListVariantFieldType", 
		"start_RecordFieldType", "start_ListRecordFieldType", "start_Typing", 
		"program", "listStellaIdent", "languageDecl", "extension", "listExtensionName", 
		"listExtension", "decl", "listDecl", "localDecl", "listLocalDecl", "annotation", 
		"listAnnotation", "paramDecl", "listParamDecl", "returnType", "throwType", 
		"type9", "listType9", "matchCase", "listMatchCase", "optionalTyping", 
		"patternData", "exprData", "pattern", "listPattern", "labelledPattern", 
		"listLabelledPattern", "binding", "listBinding", "expr", "listExpr", "expr1", 
		"patternBinding", "listPatternBinding", "expr2", "listExpr2", "expr3", 
		"expr4", "expr5", "expr6", "expr7", "type", "type1", "type2", "type3", 
		"listType", "variantFieldType", "listVariantFieldType", "recordFieldType", 
		"listRecordFieldType", "typing",
	];
	public get grammarFileName(): string { return "StellaParser.g4"; }
	public get literalNames(): (string | null)[] { return StellaParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return StellaParser.symbolicNames; }
	public get ruleNames(): string[] { return StellaParser.ruleNames; }
	public get serializedATN(): number[] { return StellaParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, StellaParser._ATN, StellaParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public start_Program(): Start_ProgramContext {
		let localctx: Start_ProgramContext = new Start_ProgramContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, StellaParser.RULE_start_Program);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 204;
			this.program();
			this.state = 205;
			this.match(StellaParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public start_ListStellaIdent(): Start_ListStellaIdentContext {
		let localctx: Start_ListStellaIdentContext = new Start_ListStellaIdentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, StellaParser.RULE_start_ListStellaIdent);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 207;
			this.listStellaIdent();
			this.state = 208;
			this.match(StellaParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public start_LanguageDecl(): Start_LanguageDeclContext {
		let localctx: Start_LanguageDeclContext = new Start_LanguageDeclContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, StellaParser.RULE_start_LanguageDecl);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 210;
			this.languageDecl();
			this.state = 211;
			this.match(StellaParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public start_Extension(): Start_ExtensionContext {
		let localctx: Start_ExtensionContext = new Start_ExtensionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, StellaParser.RULE_start_Extension);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 213;
			this.extension();
			this.state = 214;
			this.match(StellaParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public start_ListExtensionName(): Start_ListExtensionNameContext {
		let localctx: Start_ListExtensionNameContext = new Start_ListExtensionNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, StellaParser.RULE_start_ListExtensionName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 216;
			this.listExtensionName();
			this.state = 217;
			this.match(StellaParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public start_ListExtension(): Start_ListExtensionContext {
		let localctx: Start_ListExtensionContext = new Start_ListExtensionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, StellaParser.RULE_start_ListExtension);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 219;
			this.listExtension(0);
			this.state = 220;
			this.match(StellaParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public start_Decl(): Start_DeclContext {
		let localctx: Start_DeclContext = new Start_DeclContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, StellaParser.RULE_start_Decl);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 222;
			this.decl();
			this.state = 223;
			this.match(StellaParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public start_ListDecl(): Start_ListDeclContext {
		let localctx: Start_ListDeclContext = new Start_ListDeclContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, StellaParser.RULE_start_ListDecl);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 225;
			this.listDecl(0);
			this.state = 226;
			this.match(StellaParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public start_LocalDecl(): Start_LocalDeclContext {
		let localctx: Start_LocalDeclContext = new Start_LocalDeclContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, StellaParser.RULE_start_LocalDecl);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 228;
			this.localDecl();
			this.state = 229;
			this.match(StellaParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public start_ListLocalDecl(): Start_ListLocalDeclContext {
		let localctx: Start_ListLocalDeclContext = new Start_ListLocalDeclContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, StellaParser.RULE_start_ListLocalDecl);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 231;
			this.listLocalDecl(0);
			this.state = 232;
			this.match(StellaParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public start_Annotation(): Start_AnnotationContext {
		let localctx: Start_AnnotationContext = new Start_AnnotationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, StellaParser.RULE_start_Annotation);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 234;
			this.annotation();
			this.state = 235;
			this.match(StellaParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public start_ListAnnotation(): Start_ListAnnotationContext {
		let localctx: Start_ListAnnotationContext = new Start_ListAnnotationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, StellaParser.RULE_start_ListAnnotation);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 237;
			this.listAnnotation(0);
			this.state = 238;
			this.match(StellaParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public start_ParamDecl(): Start_ParamDeclContext {
		let localctx: Start_ParamDeclContext = new Start_ParamDeclContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, StellaParser.RULE_start_ParamDecl);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 240;
			this.paramDecl();
			this.state = 241;
			this.match(StellaParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public start_ListParamDecl(): Start_ListParamDeclContext {
		let localctx: Start_ListParamDeclContext = new Start_ListParamDeclContext(this, this._ctx, this.state);
		this.enterRule(localctx, 26, StellaParser.RULE_start_ListParamDecl);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 243;
			this.listParamDecl();
			this.state = 244;
			this.match(StellaParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public start_ReturnType(): Start_ReturnTypeContext {
		let localctx: Start_ReturnTypeContext = new Start_ReturnTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 28, StellaParser.RULE_start_ReturnType);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 246;
			this.returnType();
			this.state = 247;
			this.match(StellaParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public start_ThrowType(): Start_ThrowTypeContext {
		let localctx: Start_ThrowTypeContext = new Start_ThrowTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 30, StellaParser.RULE_start_ThrowType);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 249;
			this.throwType();
			this.state = 250;
			this.match(StellaParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public start_Type9(): Start_Type9Context {
		let localctx: Start_Type9Context = new Start_Type9Context(this, this._ctx, this.state);
		this.enterRule(localctx, 32, StellaParser.RULE_start_Type9);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 252;
			this.type9();
			this.state = 253;
			this.match(StellaParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public start_ListType9(): Start_ListType9Context {
		let localctx: Start_ListType9Context = new Start_ListType9Context(this, this._ctx, this.state);
		this.enterRule(localctx, 34, StellaParser.RULE_start_ListType9);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 255;
			this.listType9();
			this.state = 256;
			this.match(StellaParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public start_MatchCase(): Start_MatchCaseContext {
		let localctx: Start_MatchCaseContext = new Start_MatchCaseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 36, StellaParser.RULE_start_MatchCase);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 258;
			this.matchCase();
			this.state = 259;
			this.match(StellaParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public start_ListMatchCase(): Start_ListMatchCaseContext {
		let localctx: Start_ListMatchCaseContext = new Start_ListMatchCaseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 38, StellaParser.RULE_start_ListMatchCase);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 261;
			this.listMatchCase();
			this.state = 262;
			this.match(StellaParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public start_OptionalTyping(): Start_OptionalTypingContext {
		let localctx: Start_OptionalTypingContext = new Start_OptionalTypingContext(this, this._ctx, this.state);
		this.enterRule(localctx, 40, StellaParser.RULE_start_OptionalTyping);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 264;
			this.optionalTyping();
			this.state = 265;
			this.match(StellaParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public start_PatternData(): Start_PatternDataContext {
		let localctx: Start_PatternDataContext = new Start_PatternDataContext(this, this._ctx, this.state);
		this.enterRule(localctx, 42, StellaParser.RULE_start_PatternData);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 267;
			this.patternData();
			this.state = 268;
			this.match(StellaParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public start_ExprData(): Start_ExprDataContext {
		let localctx: Start_ExprDataContext = new Start_ExprDataContext(this, this._ctx, this.state);
		this.enterRule(localctx, 44, StellaParser.RULE_start_ExprData);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 270;
			this.exprData();
			this.state = 271;
			this.match(StellaParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public start_Pattern(): Start_PatternContext {
		let localctx: Start_PatternContext = new Start_PatternContext(this, this._ctx, this.state);
		this.enterRule(localctx, 46, StellaParser.RULE_start_Pattern);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 273;
			this.pattern(0);
			this.state = 274;
			this.match(StellaParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public start_ListPattern(): Start_ListPatternContext {
		let localctx: Start_ListPatternContext = new Start_ListPatternContext(this, this._ctx, this.state);
		this.enterRule(localctx, 48, StellaParser.RULE_start_ListPattern);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 276;
			this.listPattern();
			this.state = 277;
			this.match(StellaParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public start_LabelledPattern(): Start_LabelledPatternContext {
		let localctx: Start_LabelledPatternContext = new Start_LabelledPatternContext(this, this._ctx, this.state);
		this.enterRule(localctx, 50, StellaParser.RULE_start_LabelledPattern);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 279;
			this.labelledPattern();
			this.state = 280;
			this.match(StellaParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public start_ListLabelledPattern(): Start_ListLabelledPatternContext {
		let localctx: Start_ListLabelledPatternContext = new Start_ListLabelledPatternContext(this, this._ctx, this.state);
		this.enterRule(localctx, 52, StellaParser.RULE_start_ListLabelledPattern);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 282;
			this.listLabelledPattern();
			this.state = 283;
			this.match(StellaParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public start_Binding(): Start_BindingContext {
		let localctx: Start_BindingContext = new Start_BindingContext(this, this._ctx, this.state);
		this.enterRule(localctx, 54, StellaParser.RULE_start_Binding);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 285;
			this.binding();
			this.state = 286;
			this.match(StellaParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public start_ListBinding(): Start_ListBindingContext {
		let localctx: Start_ListBindingContext = new Start_ListBindingContext(this, this._ctx, this.state);
		this.enterRule(localctx, 56, StellaParser.RULE_start_ListBinding);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 288;
			this.listBinding();
			this.state = 289;
			this.match(StellaParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public start_Expr(): Start_ExprContext {
		let localctx: Start_ExprContext = new Start_ExprContext(this, this._ctx, this.state);
		this.enterRule(localctx, 58, StellaParser.RULE_start_Expr);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 291;
			this.expr();
			this.state = 292;
			this.match(StellaParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public start_ListExpr(): Start_ListExprContext {
		let localctx: Start_ListExprContext = new Start_ListExprContext(this, this._ctx, this.state);
		this.enterRule(localctx, 60, StellaParser.RULE_start_ListExpr);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 294;
			this.listExpr();
			this.state = 295;
			this.match(StellaParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public start_Expr1(): Start_Expr1Context {
		let localctx: Start_Expr1Context = new Start_Expr1Context(this, this._ctx, this.state);
		this.enterRule(localctx, 62, StellaParser.RULE_start_Expr1);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 297;
			this.expr1();
			this.state = 298;
			this.match(StellaParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public start_PatternBinding(): Start_PatternBindingContext {
		let localctx: Start_PatternBindingContext = new Start_PatternBindingContext(this, this._ctx, this.state);
		this.enterRule(localctx, 64, StellaParser.RULE_start_PatternBinding);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 300;
			this.patternBinding();
			this.state = 301;
			this.match(StellaParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public start_ListPatternBinding(): Start_ListPatternBindingContext {
		let localctx: Start_ListPatternBindingContext = new Start_ListPatternBindingContext(this, this._ctx, this.state);
		this.enterRule(localctx, 66, StellaParser.RULE_start_ListPatternBinding);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 303;
			this.listPatternBinding();
			this.state = 304;
			this.match(StellaParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public start_Expr2(): Start_Expr2Context {
		let localctx: Start_Expr2Context = new Start_Expr2Context(this, this._ctx, this.state);
		this.enterRule(localctx, 68, StellaParser.RULE_start_Expr2);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 306;
			this.expr2();
			this.state = 307;
			this.match(StellaParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public start_ListExpr2(): Start_ListExpr2Context {
		let localctx: Start_ListExpr2Context = new Start_ListExpr2Context(this, this._ctx, this.state);
		this.enterRule(localctx, 70, StellaParser.RULE_start_ListExpr2);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 309;
			this.listExpr2();
			this.state = 310;
			this.match(StellaParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public start_Expr3(): Start_Expr3Context {
		let localctx: Start_Expr3Context = new Start_Expr3Context(this, this._ctx, this.state);
		this.enterRule(localctx, 72, StellaParser.RULE_start_Expr3);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 312;
			this.expr3(0);
			this.state = 313;
			this.match(StellaParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public start_Expr4(): Start_Expr4Context {
		let localctx: Start_Expr4Context = new Start_Expr4Context(this, this._ctx, this.state);
		this.enterRule(localctx, 74, StellaParser.RULE_start_Expr4);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 315;
			this.expr4(0);
			this.state = 316;
			this.match(StellaParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public start_Expr5(): Start_Expr5Context {
		let localctx: Start_Expr5Context = new Start_Expr5Context(this, this._ctx, this.state);
		this.enterRule(localctx, 76, StellaParser.RULE_start_Expr5);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 318;
			this.expr5();
			this.state = 319;
			this.match(StellaParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public start_Expr6(): Start_Expr6Context {
		let localctx: Start_Expr6Context = new Start_Expr6Context(this, this._ctx, this.state);
		this.enterRule(localctx, 78, StellaParser.RULE_start_Expr6);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 321;
			this.expr6(0);
			this.state = 322;
			this.match(StellaParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public start_Expr7(): Start_Expr7Context {
		let localctx: Start_Expr7Context = new Start_Expr7Context(this, this._ctx, this.state);
		this.enterRule(localctx, 80, StellaParser.RULE_start_Expr7);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 324;
			this.expr7();
			this.state = 325;
			this.match(StellaParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public start_Type(): Start_TypeContext {
		let localctx: Start_TypeContext = new Start_TypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 82, StellaParser.RULE_start_Type);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 327;
			this.type_();
			this.state = 328;
			this.match(StellaParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public start_Type1(): Start_Type1Context {
		let localctx: Start_Type1Context = new Start_Type1Context(this, this._ctx, this.state);
		this.enterRule(localctx, 84, StellaParser.RULE_start_Type1);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 330;
			this.type1();
			this.state = 331;
			this.match(StellaParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public start_Type2(): Start_Type2Context {
		let localctx: Start_Type2Context = new Start_Type2Context(this, this._ctx, this.state);
		this.enterRule(localctx, 86, StellaParser.RULE_start_Type2);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 333;
			this.type2();
			this.state = 334;
			this.match(StellaParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public start_Type3(): Start_Type3Context {
		let localctx: Start_Type3Context = new Start_Type3Context(this, this._ctx, this.state);
		this.enterRule(localctx, 88, StellaParser.RULE_start_Type3);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 336;
			this.type3();
			this.state = 337;
			this.match(StellaParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public start_ListType(): Start_ListTypeContext {
		let localctx: Start_ListTypeContext = new Start_ListTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 90, StellaParser.RULE_start_ListType);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 339;
			this.listType();
			this.state = 340;
			this.match(StellaParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public start_VariantFieldType(): Start_VariantFieldTypeContext {
		let localctx: Start_VariantFieldTypeContext = new Start_VariantFieldTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 92, StellaParser.RULE_start_VariantFieldType);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 342;
			this.variantFieldType();
			this.state = 343;
			this.match(StellaParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public start_ListVariantFieldType(): Start_ListVariantFieldTypeContext {
		let localctx: Start_ListVariantFieldTypeContext = new Start_ListVariantFieldTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 94, StellaParser.RULE_start_ListVariantFieldType);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 345;
			this.listVariantFieldType();
			this.state = 346;
			this.match(StellaParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public start_RecordFieldType(): Start_RecordFieldTypeContext {
		let localctx: Start_RecordFieldTypeContext = new Start_RecordFieldTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 96, StellaParser.RULE_start_RecordFieldType);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 348;
			this.recordFieldType();
			this.state = 349;
			this.match(StellaParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public start_ListRecordFieldType(): Start_ListRecordFieldTypeContext {
		let localctx: Start_ListRecordFieldTypeContext = new Start_ListRecordFieldTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 98, StellaParser.RULE_start_ListRecordFieldType);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 351;
			this.listRecordFieldType();
			this.state = 352;
			this.match(StellaParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public start_Typing(): Start_TypingContext {
		let localctx: Start_TypingContext = new Start_TypingContext(this, this._ctx, this.state);
		this.enterRule(localctx, 100, StellaParser.RULE_start_Typing);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 354;
			this.typing();
			this.state = 355;
			this.match(StellaParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let localctx: ProgramContext = new ProgramContext(this, this._ctx, this.state);
		this.enterRule(localctx, 102, StellaParser.RULE_program);
		try {
			localctx = new AProgramContext(this, localctx);
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 357;
			(localctx as AProgramContext)._p_1_1 = this.languageDecl();
			this.state = 358;
			(localctx as AProgramContext)._p_1_2 = this.listExtension(0);
			this.state = 359;
			(localctx as AProgramContext)._p_1_3 = this.listDecl(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public listStellaIdent(): ListStellaIdentContext {
		let localctx: ListStellaIdentContext = new ListStellaIdentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 104, StellaParser.RULE_listStellaIdent);
		try {
			this.state = 366;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 0, this._ctx) ) {
			case 1:
				localctx = new ListStellaIdent_EmptyContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				// tslint:disable-next-line:no-empty
				{
				}
				break;
			case 2:
				localctx = new ListStellaIdent_AppendLastContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 362;
				(localctx as ListStellaIdent_AppendLastContext)._p_2_1 = this.match(StellaParser.StellaIdent);
				}
				break;
			case 3:
				localctx = new ListStellaIdent_PrependFirstContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 363;
				(localctx as ListStellaIdent_PrependFirstContext)._p_3_1 = this.match(StellaParser.StellaIdent);
				this.state = 364;
				this.match(StellaParser.Surrogate_id_SYMB_0);
				this.state = 365;
				(localctx as ListStellaIdent_PrependFirstContext)._p_3_3 = this.listStellaIdent();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public languageDecl(): LanguageDeclContext {
		let localctx: LanguageDeclContext = new LanguageDeclContext(this, this._ctx, this.state);
		this.enterRule(localctx, 106, StellaParser.RULE_languageDecl);
		try {
			localctx = new LanguageCoreContext(this, localctx);
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 368;
			this.match(StellaParser.Surrogate_id_SYMB_61);
			this.state = 369;
			this.match(StellaParser.Surrogate_id_SYMB_46);
			this.state = 370;
			this.match(StellaParser.Surrogate_id_SYMB_1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public extension(): ExtensionContext {
		let localctx: ExtensionContext = new ExtensionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 108, StellaParser.RULE_extension);
		try {
			localctx = new AnExtensionContext(this, localctx);
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 372;
			this.match(StellaParser.Surrogate_id_SYMB_49);
			this.state = 373;
			this.match(StellaParser.Surrogate_id_SYMB_79);
			this.state = 374;
			(localctx as AnExtensionContext)._p_1_3 = this.listExtensionName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public listExtensionName(): ListExtensionNameContext {
		let localctx: ListExtensionNameContext = new ListExtensionNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 110, StellaParser.RULE_listExtensionName);
		try {
			this.state = 381;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				localctx = new ListExtensionName_EmptyContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				// tslint:disable-next-line:no-empty
				{
				}
				break;
			case 2:
				localctx = new ListExtensionName_AppendLastContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 377;
				(localctx as ListExtensionName_AppendLastContext)._p_2_1 = this.match(StellaParser.ExtensionName);
				}
				break;
			case 3:
				localctx = new ListExtensionName_PrependFirstContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 378;
				(localctx as ListExtensionName_PrependFirstContext)._p_3_1 = this.match(StellaParser.ExtensionName);
				this.state = 379;
				this.match(StellaParser.Surrogate_id_SYMB_0);
				this.state = 380;
				(localctx as ListExtensionName_PrependFirstContext)._p_3_3 = this.listExtensionName();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public listExtension(): ListExtensionContext;
	public listExtension(_p: number): ListExtensionContext;
	// @RuleVersion(0)
	public listExtension(_p?: number): ListExtensionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: ListExtensionContext = new ListExtensionContext(this, this._ctx, _parentState);
		let _prevctx: ListExtensionContext = localctx;
		let _startState: number = 112;
		this.enterRecursionRule(localctx, 112, StellaParser.RULE_listExtension, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			localctx = new ListExtension_EmptyContext(this, localctx);
			this._ctx = localctx;
			_prevctx = localctx;

			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 390;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 2, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					{
					localctx = new ListExtension_PrependFirstContext(this, new ListExtensionContext(this, _parentctx, _parentState));
					(localctx as ListExtension_PrependFirstContext)._p_2_1 = _prevctx;
					this.pushNewRecursionContext(localctx, _startState, StellaParser.RULE_listExtension);
					this.state = 384;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 385;
					(localctx as ListExtension_PrependFirstContext)._p_2_2 = this.extension();
					this.state = 386;
					this.match(StellaParser.Surrogate_id_SYMB_1);
					}
					}
				}
				this.state = 392;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 2, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public decl(): DeclContext {
		let localctx: DeclContext = new DeclContext(this, this._ctx, this.state);
		this.enterRule(localctx, 114, StellaParser.RULE_decl);
		try {
			this.state = 438;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				localctx = new DeclFunContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 393;
				(localctx as DeclFunContext)._p_1_1 = this.listAnnotation(0);
				this.state = 394;
				this.match(StellaParser.Surrogate_id_SYMB_52);
				this.state = 395;
				(localctx as DeclFunContext)._p_1_3 = this.match(StellaParser.StellaIdent);
				this.state = 396;
				this.match(StellaParser.Surrogate_id_SYMB_2);
				this.state = 397;
				(localctx as DeclFunContext)._p_1_5 = this.listParamDecl();
				this.state = 398;
				this.match(StellaParser.Surrogate_id_SYMB_3);
				this.state = 399;
				(localctx as DeclFunContext)._p_1_7 = this.returnType();
				this.state = 400;
				(localctx as DeclFunContext)._p_1_8 = this.throwType();
				this.state = 401;
				this.match(StellaParser.Surrogate_id_SYMB_4);
				this.state = 402;
				(localctx as DeclFunContext)._p_1_10 = this.listDecl(0);
				this.state = 403;
				this.match(StellaParser.Surrogate_id_SYMB_68);
				this.state = 404;
				(localctx as DeclFunContext)._p_1_12 = this.expr();
				this.state = 405;
				this.match(StellaParser.Surrogate_id_SYMB_5);
				}
				break;
			case 2:
				localctx = new DeclFunGenericContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 407;
				(localctx as DeclFunGenericContext)._p_2_1 = this.listAnnotation(0);
				this.state = 408;
				this.match(StellaParser.Surrogate_id_SYMB_55);
				this.state = 409;
				this.match(StellaParser.Surrogate_id_SYMB_52);
				this.state = 410;
				(localctx as DeclFunGenericContext)._p_2_4 = this.match(StellaParser.StellaIdent);
				this.state = 411;
				this.match(StellaParser.Surrogate_id_SYMB_6);
				this.state = 412;
				(localctx as DeclFunGenericContext)._p_2_6 = this.listStellaIdent();
				this.state = 413;
				this.match(StellaParser.Surrogate_id_SYMB_7);
				this.state = 414;
				this.match(StellaParser.Surrogate_id_SYMB_2);
				this.state = 415;
				(localctx as DeclFunGenericContext)._p_2_9 = this.listParamDecl();
				this.state = 416;
				this.match(StellaParser.Surrogate_id_SYMB_3);
				this.state = 417;
				(localctx as DeclFunGenericContext)._p_2_11 = this.returnType();
				this.state = 418;
				(localctx as DeclFunGenericContext)._p_2_12 = this.throwType();
				this.state = 419;
				this.match(StellaParser.Surrogate_id_SYMB_4);
				this.state = 420;
				(localctx as DeclFunGenericContext)._p_2_14 = this.listDecl(0);
				this.state = 421;
				this.match(StellaParser.Surrogate_id_SYMB_68);
				this.state = 422;
				(localctx as DeclFunGenericContext)._p_2_16 = this.expr();
				this.state = 423;
				this.match(StellaParser.Surrogate_id_SYMB_5);
				}
				break;
			case 3:
				localctx = new DeclTypeAliasContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 425;
				this.match(StellaParser.Surrogate_id_SYMB_75);
				this.state = 426;
				(localctx as DeclTypeAliasContext)._p_3_2 = this.match(StellaParser.StellaIdent);
				this.state = 427;
				this.match(StellaParser.Surrogate_id_SYMB_8);
				this.state = 428;
				(localctx as DeclTypeAliasContext)._p_3_4 = this.type_();
				}
				break;
			case 4:
				localctx = new DeclExceptionTypeContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 429;
				this.match(StellaParser.Surrogate_id_SYMB_48);
				this.state = 430;
				this.match(StellaParser.Surrogate_id_SYMB_75);
				this.state = 431;
				this.match(StellaParser.Surrogate_id_SYMB_8);
				this.state = 432;
				(localctx as DeclExceptionTypeContext)._p_4_4 = this.type_();
				}
				break;
			case 5:
				localctx = new DeclExceptionVariantContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 433;
				this.match(StellaParser.Surrogate_id_SYMB_48);
				this.state = 434;
				this.match(StellaParser.Surrogate_id_SYMB_78);
				this.state = 435;
				(localctx as DeclExceptionVariantContext)._p_5_3 = this.match(StellaParser.StellaIdent);
				this.state = 436;
				this.match(StellaParser.Surrogate_id_SYMB_9);
				this.state = 437;
				(localctx as DeclExceptionVariantContext)._p_5_5 = this.type_();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public listDecl(): ListDeclContext;
	public listDecl(_p: number): ListDeclContext;
	// @RuleVersion(0)
	public listDecl(_p?: number): ListDeclContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: ListDeclContext = new ListDeclContext(this, this._ctx, _parentState);
		let _prevctx: ListDeclContext = localctx;
		let _startState: number = 116;
		this.enterRecursionRule(localctx, 116, StellaParser.RULE_listDecl, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			localctx = new ListDecl_EmptyContext(this, localctx);
			this._ctx = localctx;
			_prevctx = localctx;

			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 445;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 4, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					{
					localctx = new ListDecl_PrependFirstContext(this, new ListDeclContext(this, _parentctx, _parentState));
					(localctx as ListDecl_PrependFirstContext)._p_2_1 = _prevctx;
					this.pushNewRecursionContext(localctx, _startState, StellaParser.RULE_listDecl);
					this.state = 441;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 442;
					(localctx as ListDecl_PrependFirstContext)._p_2_2 = this.decl();
					}
					}
				}
				this.state = 447;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 4, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public localDecl(): LocalDeclContext {
		let localctx: LocalDeclContext = new LocalDeclContext(this, this._ctx, this.state);
		this.enterRule(localctx, 118, StellaParser.RULE_localDecl);
		try {
			localctx = new ALocalDeclContext(this, localctx);
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 448;
			(localctx as ALocalDeclContext)._p_1_1 = this.decl();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public listLocalDecl(): ListLocalDeclContext;
	public listLocalDecl(_p: number): ListLocalDeclContext;
	// @RuleVersion(0)
	public listLocalDecl(_p?: number): ListLocalDeclContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: ListLocalDeclContext = new ListLocalDeclContext(this, this._ctx, _parentState);
		let _prevctx: ListLocalDeclContext = localctx;
		let _startState: number = 120;
		this.enterRecursionRule(localctx, 120, StellaParser.RULE_listLocalDecl, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			localctx = new ListLocalDecl_EmptyContext(this, localctx);
			this._ctx = localctx;
			_prevctx = localctx;

			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 457;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 5, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					{
					localctx = new ListLocalDecl_PrependFirstContext(this, new ListLocalDeclContext(this, _parentctx, _parentState));
					(localctx as ListLocalDecl_PrependFirstContext)._p_2_1 = _prevctx;
					this.pushNewRecursionContext(localctx, _startState, StellaParser.RULE_listLocalDecl);
					this.state = 451;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 452;
					(localctx as ListLocalDecl_PrependFirstContext)._p_2_2 = this.localDecl();
					this.state = 453;
					this.match(StellaParser.Surrogate_id_SYMB_1);
					}
					}
				}
				this.state = 459;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 5, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public annotation(): AnnotationContext {
		let localctx: AnnotationContext = new AnnotationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 122, StellaParser.RULE_annotation);
		try {
			localctx = new InlineAnnotationContext(this, localctx);
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 460;
			this.match(StellaParser.Surrogate_id_SYMB_59);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public listAnnotation(): ListAnnotationContext;
	public listAnnotation(_p: number): ListAnnotationContext;
	// @RuleVersion(0)
	public listAnnotation(_p?: number): ListAnnotationContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: ListAnnotationContext = new ListAnnotationContext(this, this._ctx, _parentState);
		let _prevctx: ListAnnotationContext = localctx;
		let _startState: number = 124;
		this.enterRecursionRule(localctx, 124, StellaParser.RULE_listAnnotation, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			localctx = new ListAnnotation_EmptyContext(this, localctx);
			this._ctx = localctx;
			_prevctx = localctx;

			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 467;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 6, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					{
					localctx = new ListAnnotation_PrependFirstContext(this, new ListAnnotationContext(this, _parentctx, _parentState));
					(localctx as ListAnnotation_PrependFirstContext)._p_2_1 = _prevctx;
					this.pushNewRecursionContext(localctx, _startState, StellaParser.RULE_listAnnotation);
					this.state = 463;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 464;
					(localctx as ListAnnotation_PrependFirstContext)._p_2_2 = this.annotation();
					}
					}
				}
				this.state = 469;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 6, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public paramDecl(): ParamDeclContext {
		let localctx: ParamDeclContext = new ParamDeclContext(this, this._ctx, this.state);
		this.enterRule(localctx, 126, StellaParser.RULE_paramDecl);
		try {
			localctx = new AParamDeclContext(this, localctx);
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 470;
			(localctx as AParamDeclContext)._p_1_1 = this.match(StellaParser.StellaIdent);
			this.state = 471;
			this.match(StellaParser.Surrogate_id_SYMB_9);
			this.state = 472;
			(localctx as AParamDeclContext)._p_1_3 = this.type_();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public listParamDecl(): ListParamDeclContext {
		let localctx: ListParamDeclContext = new ListParamDeclContext(this, this._ctx, this.state);
		this.enterRule(localctx, 128, StellaParser.RULE_listParamDecl);
		try {
			this.state = 480;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				localctx = new ListParamDecl_EmptyContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				// tslint:disable-next-line:no-empty
				{
				}
				break;
			case 2:
				localctx = new ListParamDecl_AppendLastContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 475;
				(localctx as ListParamDecl_AppendLastContext)._p_2_1 = this.paramDecl();
				}
				break;
			case 3:
				localctx = new ListParamDecl_PrependFirstContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 476;
				(localctx as ListParamDecl_PrependFirstContext)._p_3_1 = this.paramDecl();
				this.state = 477;
				this.match(StellaParser.Surrogate_id_SYMB_0);
				this.state = 478;
				(localctx as ListParamDecl_PrependFirstContext)._p_3_3 = this.listParamDecl();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public returnType(): ReturnTypeContext {
		let localctx: ReturnTypeContext = new ReturnTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 130, StellaParser.RULE_returnType);
		try {
			this.state = 485;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case -1:
			case 5:
			case 73:
				localctx = new NoReturnTypeContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				// tslint:disable-next-line:no-empty
				{
				}
				break;
			case 11:
				localctx = new SomeReturnTypeContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 483;
				this.match(StellaParser.Surrogate_id_SYMB_10);
				this.state = 484;
				(localctx as SomeReturnTypeContext)._p_2_2 = this.type_();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public throwType(): ThrowTypeContext {
		let localctx: ThrowTypeContext = new ThrowTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 132, StellaParser.RULE_throwType);
		try {
			this.state = 490;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case -1:
			case 5:
				localctx = new NoThrowTypeContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				// tslint:disable-next-line:no-empty
				{
				}
				break;
			case 73:
				localctx = new SomeThrowTypeContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 488;
				this.match(StellaParser.Surrogate_id_SYMB_72);
				this.state = 489;
				(localctx as SomeThrowTypeContext)._p_2_2 = this.listType9();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public type9(): Type9Context {
		let localctx: Type9Context = new Type9Context(this, this._ctx, this.state);
		this.enterRule(localctx, 134, StellaParser.RULE_type9);
		try {
			localctx = new Coercion_Type9_1Context(this, localctx);
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 492;
			(localctx as Coercion_Type9_1Context)._p_1_1 = this.type_();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public listType9(): ListType9Context {
		let localctx: ListType9Context = new ListType9Context(this, this._ctx, this.state);
		this.enterRule(localctx, 136, StellaParser.RULE_listType9);
		try {
			this.state = 499;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				localctx = new ListType9_AppendLastContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 494;
				(localctx as ListType9_AppendLastContext)._p_1_1 = this.type9();
				}
				break;
			case 2:
				localctx = new ListType9_PrependFirstContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 495;
				(localctx as ListType9_PrependFirstContext)._p_2_1 = this.type9();
				this.state = 496;
				this.match(StellaParser.Surrogate_id_SYMB_0);
				this.state = 497;
				(localctx as ListType9_PrependFirstContext)._p_2_3 = this.listType9();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public matchCase(): MatchCaseContext {
		let localctx: MatchCaseContext = new MatchCaseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 138, StellaParser.RULE_matchCase);
		try {
			localctx = new AMatchCaseContext(this, localctx);
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 501;
			(localctx as AMatchCaseContext)._p_1_1 = this.pattern(0);
			this.state = 502;
			this.match(StellaParser.Surrogate_id_SYMB_11);
			this.state = 503;
			(localctx as AMatchCaseContext)._p_1_3 = this.expr();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public listMatchCase(): ListMatchCaseContext {
		let localctx: ListMatchCaseContext = new ListMatchCaseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 140, StellaParser.RULE_listMatchCase);
		try {
			this.state = 511;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				localctx = new ListMatchCase_EmptyContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				// tslint:disable-next-line:no-empty
				{
				}
				break;
			case 2:
				localctx = new ListMatchCase_AppendLastContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 506;
				(localctx as ListMatchCase_AppendLastContext)._p_2_1 = this.matchCase();
				}
				break;
			case 3:
				localctx = new ListMatchCase_PrependFirstContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 507;
				(localctx as ListMatchCase_PrependFirstContext)._p_3_1 = this.matchCase();
				this.state = 508;
				this.match(StellaParser.Surrogate_id_SYMB_12);
				this.state = 509;
				(localctx as ListMatchCase_PrependFirstContext)._p_3_3 = this.listMatchCase();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public optionalTyping(): OptionalTypingContext {
		let localctx: OptionalTypingContext = new OptionalTypingContext(this, this._ctx, this.state);
		this.enterRule(localctx, 142, StellaParser.RULE_optionalTyping);
		try {
			this.state = 516;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case -1:
			case 1:
			case 15:
				localctx = new NoTypingContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				// tslint:disable-next-line:no-empty
				{
				}
				break;
			case 10:
				localctx = new SomeTypingContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 514;
				this.match(StellaParser.Surrogate_id_SYMB_9);
				this.state = 515;
				(localctx as SomeTypingContext)._p_2_2 = this.type_();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public patternData(): PatternDataContext {
		let localctx: PatternDataContext = new PatternDataContext(this, this._ctx, this.state);
		this.enterRule(localctx, 144, StellaParser.RULE_patternData);
		try {
			this.state = 521;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case -1:
			case 15:
				localctx = new NoPatternDataContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				// tslint:disable-next-line:no-empty
				{
				}
				break;
			case 9:
				localctx = new SomePatternDataContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 519;
				this.match(StellaParser.Surrogate_id_SYMB_8);
				this.state = 520;
				(localctx as SomePatternDataContext)._p_2_2 = this.pattern(0);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public exprData(): ExprDataContext {
		let localctx: ExprDataContext = new ExprDataContext(this, this._ctx, this.state);
		this.enterRule(localctx, 146, StellaParser.RULE_exprData);
		try {
			this.state = 526;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case -1:
			case 15:
				localctx = new NoExprDataContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				// tslint:disable-next-line:no-empty
				{
				}
				break;
			case 9:
				localctx = new SomeExprDataContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 524;
				this.match(StellaParser.Surrogate_id_SYMB_8);
				this.state = 525;
				(localctx as SomeExprDataContext)._p_2_2 = this.expr();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public pattern(): PatternContext;
	public pattern(_p: number): PatternContext;
	// @RuleVersion(0)
	public pattern(_p?: number): PatternContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: PatternContext = new PatternContext(this, this._ctx, _parentState);
		let _prevctx: PatternContext = localctx;
		let _startState: number = 148;
		this.enterRecursionRule(localctx, 148, StellaParser.RULE_pattern, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 577;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 15, this._ctx) ) {
			case 1:
				{
				localctx = new PatternVariantContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 529;
				this.match(StellaParser.Surrogate_id_SYMB_13);
				this.state = 530;
				(localctx as PatternVariantContext)._p_3_2 = this.match(StellaParser.StellaIdent);
				this.state = 531;
				(localctx as PatternVariantContext)._p_3_3 = this.patternData();
				this.state = 532;
				this.match(StellaParser.Surrogate_id_SYMB_14);
				}
				break;
			case 2:
				{
				localctx = new PatternInlContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 534;
				this.match(StellaParser.Surrogate_id_SYMB_58);
				this.state = 535;
				this.match(StellaParser.Surrogate_id_SYMB_2);
				this.state = 536;
				(localctx as PatternInlContext)._p_4_3 = this.pattern(0);
				this.state = 537;
				this.match(StellaParser.Surrogate_id_SYMB_3);
				}
				break;
			case 3:
				{
				localctx = new PatternInrContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 539;
				this.match(StellaParser.Surrogate_id_SYMB_60);
				this.state = 540;
				this.match(StellaParser.Surrogate_id_SYMB_2);
				this.state = 541;
				(localctx as PatternInrContext)._p_5_3 = this.pattern(0);
				this.state = 542;
				this.match(StellaParser.Surrogate_id_SYMB_3);
				}
				break;
			case 4:
				{
				localctx = new PatternTupleContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 544;
				this.match(StellaParser.Surrogate_id_SYMB_4);
				this.state = 545;
				(localctx as PatternTupleContext)._p_6_2 = this.listPattern();
				this.state = 546;
				this.match(StellaParser.Surrogate_id_SYMB_5);
				}
				break;
			case 5:
				{
				localctx = new PatternRecordContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 548;
				this.match(StellaParser.Surrogate_id_SYMB_4);
				this.state = 549;
				(localctx as PatternRecordContext)._p_7_2 = this.listLabelledPattern();
				this.state = 550;
				this.match(StellaParser.Surrogate_id_SYMB_5);
				}
				break;
			case 6:
				{
				localctx = new PatternListContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 552;
				this.match(StellaParser.Surrogate_id_SYMB_6);
				this.state = 553;
				(localctx as PatternListContext)._p_8_2 = this.listPattern();
				this.state = 554;
				this.match(StellaParser.Surrogate_id_SYMB_7);
				}
				break;
			case 7:
				{
				localctx = new PatternConsContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 556;
				this.match(StellaParser.Surrogate_id_SYMB_45);
				this.state = 557;
				this.match(StellaParser.Surrogate_id_SYMB_2);
				this.state = 558;
				(localctx as PatternConsContext)._p_9_3 = this.pattern(0);
				this.state = 559;
				this.match(StellaParser.Surrogate_id_SYMB_0);
				this.state = 560;
				(localctx as PatternConsContext)._p_9_5 = this.pattern(0);
				this.state = 561;
				this.match(StellaParser.Surrogate_id_SYMB_3);
				}
				break;
			case 8:
				{
				localctx = new PatternFalseContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 563;
				this.match(StellaParser.Surrogate_id_SYMB_50);
				}
				break;
			case 9:
				{
				localctx = new PatternTrueContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 564;
				this.match(StellaParser.Surrogate_id_SYMB_73);
				}
				break;
			case 10:
				{
				localctx = new PatternUnitContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 565;
				this.match(StellaParser.Surrogate_id_SYMB_77);
				}
				break;
			case 11:
				{
				localctx = new PatternIntContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 566;
				(localctx as PatternIntContext)._p_13_1 = this.match(StellaParser.INTEGER);
				}
				break;
			case 12:
				{
				localctx = new PatternSuccContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 567;
				this.match(StellaParser.Surrogate_id_SYMB_69);
				this.state = 568;
				this.match(StellaParser.Surrogate_id_SYMB_2);
				this.state = 569;
				(localctx as PatternSuccContext)._p_14_3 = this.pattern(0);
				this.state = 570;
				this.match(StellaParser.Surrogate_id_SYMB_3);
				}
				break;
			case 13:
				{
				localctx = new PatternVarContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 572;
				(localctx as PatternVarContext)._p_15_1 = this.match(StellaParser.StellaIdent);
				}
				break;
			case 14:
				{
				localctx = new Coercion_Pattern_16Context(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 573;
				this.match(StellaParser.Surrogate_id_SYMB_2);
				this.state = 574;
				(localctx as Coercion_Pattern_16Context)._p_16_2 = this.pattern(0);
				this.state = 575;
				this.match(StellaParser.Surrogate_id_SYMB_3);
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 588;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 17, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 586;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 16, this._ctx) ) {
					case 1:
						{
						localctx = new PatternCastAsContext(this, new PatternContext(this, _parentctx, _parentState));
						(localctx as PatternCastAsContext)._p_1_1 = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, StellaParser.RULE_pattern);
						this.state = 579;
						if (!(this.precpred(this._ctx, 16))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 16)");
						}
						this.state = 580;
						this.match(StellaParser.Surrogate_id_SYMB_43);
						this.state = 581;
						this.match(StellaParser.Surrogate_id_SYMB_41);
						this.state = 582;
						(localctx as PatternCastAsContext)._p_1_4 = this.type_();
						}
						break;
					case 2:
						{
						localctx = new PatternAscContext(this, new PatternContext(this, _parentctx, _parentState));
						(localctx as PatternAscContext)._p_2_1 = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, StellaParser.RULE_pattern);
						this.state = 583;
						if (!(this.precpred(this._ctx, 15))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 15)");
						}
						this.state = 584;
						this.match(StellaParser.Surrogate_id_SYMB_41);
						this.state = 585;
						(localctx as PatternAscContext)._p_2_3 = this.type_();
						}
						break;
					}
					}
				}
				this.state = 590;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 17, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public listPattern(): ListPatternContext {
		let localctx: ListPatternContext = new ListPatternContext(this, this._ctx, this.state);
		this.enterRule(localctx, 150, StellaParser.RULE_listPattern);
		try {
			this.state = 597;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 18, this._ctx) ) {
			case 1:
				localctx = new ListPattern_EmptyContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				// tslint:disable-next-line:no-empty
				{
				}
				break;
			case 2:
				localctx = new ListPattern_AppendLastContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 592;
				(localctx as ListPattern_AppendLastContext)._p_2_1 = this.pattern(0);
				}
				break;
			case 3:
				localctx = new ListPattern_PrependFirstContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 593;
				(localctx as ListPattern_PrependFirstContext)._p_3_1 = this.pattern(0);
				this.state = 594;
				this.match(StellaParser.Surrogate_id_SYMB_0);
				this.state = 595;
				(localctx as ListPattern_PrependFirstContext)._p_3_3 = this.listPattern();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public labelledPattern(): LabelledPatternContext {
		let localctx: LabelledPatternContext = new LabelledPatternContext(this, this._ctx, this.state);
		this.enterRule(localctx, 152, StellaParser.RULE_labelledPattern);
		try {
			localctx = new ALabelledPatternContext(this, localctx);
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 599;
			(localctx as ALabelledPatternContext)._p_1_1 = this.match(StellaParser.StellaIdent);
			this.state = 600;
			this.match(StellaParser.Surrogate_id_SYMB_8);
			this.state = 601;
			(localctx as ALabelledPatternContext)._p_1_3 = this.pattern(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public listLabelledPattern(): ListLabelledPatternContext {
		let localctx: ListLabelledPatternContext = new ListLabelledPatternContext(this, this._ctx, this.state);
		this.enterRule(localctx, 154, StellaParser.RULE_listLabelledPattern);
		try {
			this.state = 608;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 19, this._ctx) ) {
			case 1:
				localctx = new ListLabelledPattern_AppendLastContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 603;
				(localctx as ListLabelledPattern_AppendLastContext)._p_1_1 = this.labelledPattern();
				}
				break;
			case 2:
				localctx = new ListLabelledPattern_PrependFirstContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 604;
				(localctx as ListLabelledPattern_PrependFirstContext)._p_2_1 = this.labelledPattern();
				this.state = 605;
				this.match(StellaParser.Surrogate_id_SYMB_0);
				this.state = 606;
				(localctx as ListLabelledPattern_PrependFirstContext)._p_2_3 = this.listLabelledPattern();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public binding(): BindingContext {
		let localctx: BindingContext = new BindingContext(this, this._ctx, this.state);
		this.enterRule(localctx, 156, StellaParser.RULE_binding);
		try {
			localctx = new ABindingContext(this, localctx);
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 610;
			(localctx as ABindingContext)._p_1_1 = this.match(StellaParser.StellaIdent);
			this.state = 611;
			this.match(StellaParser.Surrogate_id_SYMB_8);
			this.state = 612;
			(localctx as ABindingContext)._p_1_3 = this.expr();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public listBinding(): ListBindingContext {
		let localctx: ListBindingContext = new ListBindingContext(this, this._ctx, this.state);
		this.enterRule(localctx, 158, StellaParser.RULE_listBinding);
		try {
			this.state = 619;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 20, this._ctx) ) {
			case 1:
				localctx = new ListBinding_AppendLastContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 614;
				(localctx as ListBinding_AppendLastContext)._p_1_1 = this.binding();
				}
				break;
			case 2:
				localctx = new ListBinding_PrependFirstContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 615;
				(localctx as ListBinding_PrependFirstContext)._p_2_1 = this.binding();
				this.state = 616;
				this.match(StellaParser.Surrogate_id_SYMB_0);
				this.state = 617;
				(localctx as ListBinding_PrependFirstContext)._p_2_3 = this.listBinding();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public expr(): ExprContext {
		let localctx: ExprContext = new ExprContext(this, this._ctx, this.state);
		this.enterRule(localctx, 160, StellaParser.RULE_expr);
		try {
			this.state = 645;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 21, this._ctx) ) {
			case 1:
				localctx = new SequenceContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 621;
				(localctx as SequenceContext)._p_1_1 = this.expr1();
				this.state = 622;
				this.match(StellaParser.Surrogate_id_SYMB_1);
				this.state = 623;
				(localctx as SequenceContext)._p_1_3 = this.expr();
				}
				break;
			case 2:
				localctx = new Coercion_Expr_2Context(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 625;
				(localctx as Coercion_Expr_2Context)._p_2_1 = this.expr1();
				this.state = 626;
				this.match(StellaParser.Surrogate_id_SYMB_1);
				}
				break;
			case 3:
				localctx = new LetContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 628;
				this.match(StellaParser.Surrogate_id_SYMB_62);
				this.state = 629;
				(localctx as LetContext)._p_3_2 = this.listPatternBinding();
				this.state = 630;
				this.match(StellaParser.Surrogate_id_SYMB_57);
				this.state = 631;
				(localctx as LetContext)._p_3_4 = this.expr();
				}
				break;
			case 4:
				localctx = new LetRecContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 633;
				this.match(StellaParser.Surrogate_id_SYMB_63);
				this.state = 634;
				(localctx as LetRecContext)._p_4_2 = this.listPatternBinding();
				this.state = 635;
				this.match(StellaParser.Surrogate_id_SYMB_57);
				this.state = 636;
				(localctx as LetRecContext)._p_4_4 = this.expr();
				}
				break;
			case 5:
				localctx = new TypeAbstractionContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 638;
				this.match(StellaParser.Surrogate_id_SYMB_55);
				this.state = 639;
				this.match(StellaParser.Surrogate_id_SYMB_6);
				this.state = 640;
				(localctx as TypeAbstractionContext)._p_5_3 = this.listStellaIdent();
				this.state = 641;
				this.match(StellaParser.Surrogate_id_SYMB_7);
				this.state = 642;
				(localctx as TypeAbstractionContext)._p_5_5 = this.expr();
				}
				break;
			case 6:
				localctx = new Coercion_Expr_6Context(this, localctx);
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 644;
				(localctx as Coercion_Expr_6Context)._p_6_1 = this.expr1();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public listExpr(): ListExprContext {
		let localctx: ListExprContext = new ListExprContext(this, this._ctx, this.state);
		this.enterRule(localctx, 162, StellaParser.RULE_listExpr);
		try {
			this.state = 653;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 22, this._ctx) ) {
			case 1:
				localctx = new ListExpr_EmptyContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				// tslint:disable-next-line:no-empty
				{
				}
				break;
			case 2:
				localctx = new ListExpr_AppendLastContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 648;
				(localctx as ListExpr_AppendLastContext)._p_2_1 = this.expr();
				}
				break;
			case 3:
				localctx = new ListExpr_PrependFirstContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 649;
				(localctx as ListExpr_PrependFirstContext)._p_3_1 = this.expr();
				this.state = 650;
				this.match(StellaParser.Surrogate_id_SYMB_0);
				this.state = 651;
				(localctx as ListExpr_PrependFirstContext)._p_3_3 = this.listExpr();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public expr1(): Expr1Context {
		let localctx: Expr1Context = new Expr1Context(this, this._ctx, this.state);
		this.enterRule(localctx, 164, StellaParser.RULE_expr1);
		try {
			this.state = 667;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 23, this._ctx) ) {
			case 1:
				localctx = new AssignContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 655;
				(localctx as AssignContext)._p_1_1 = this.expr2();
				this.state = 656;
				this.match(StellaParser.Surrogate_id_SYMB_15);
				this.state = 657;
				(localctx as AssignContext)._p_1_3 = this.expr1();
				}
				break;
			case 2:
				localctx = new IfContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 659;
				this.match(StellaParser.Surrogate_id_SYMB_56);
				this.state = 660;
				(localctx as IfContext)._p_2_2 = this.expr1();
				this.state = 661;
				this.match(StellaParser.Surrogate_id_SYMB_70);
				this.state = 662;
				(localctx as IfContext)._p_2_4 = this.expr1();
				this.state = 663;
				this.match(StellaParser.Surrogate_id_SYMB_47);
				this.state = 664;
				(localctx as IfContext)._p_2_6 = this.expr1();
				}
				break;
			case 3:
				localctx = new Coercion_Expr1_3Context(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 666;
				(localctx as Coercion_Expr1_3Context)._p_3_1 = this.expr2();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public patternBinding(): PatternBindingContext {
		let localctx: PatternBindingContext = new PatternBindingContext(this, this._ctx, this.state);
		this.enterRule(localctx, 166, StellaParser.RULE_patternBinding);
		try {
			localctx = new APatternBindingContext(this, localctx);
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 669;
			(localctx as APatternBindingContext)._p_1_1 = this.pattern(0);
			this.state = 670;
			this.match(StellaParser.Surrogate_id_SYMB_8);
			this.state = 671;
			(localctx as APatternBindingContext)._p_1_3 = this.expr();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public listPatternBinding(): ListPatternBindingContext {
		let localctx: ListPatternBindingContext = new ListPatternBindingContext(this, this._ctx, this.state);
		this.enterRule(localctx, 168, StellaParser.RULE_listPatternBinding);
		try {
			this.state = 678;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 24, this._ctx) ) {
			case 1:
				localctx = new ListPatternBinding_AppendLastContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 673;
				(localctx as ListPatternBinding_AppendLastContext)._p_1_1 = this.patternBinding();
				}
				break;
			case 2:
				localctx = new ListPatternBinding_PrependFirstContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 674;
				(localctx as ListPatternBinding_PrependFirstContext)._p_2_1 = this.patternBinding();
				this.state = 675;
				this.match(StellaParser.Surrogate_id_SYMB_0);
				this.state = 676;
				(localctx as ListPatternBinding_PrependFirstContext)._p_2_3 = this.listPatternBinding();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public expr2(): Expr2Context {
		let localctx: Expr2Context = new Expr2Context(this, this._ctx, this.state);
		this.enterRule(localctx, 170, StellaParser.RULE_expr2);
		try {
			this.state = 705;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 25, this._ctx) ) {
			case 1:
				localctx = new LessThanContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 680;
				(localctx as LessThanContext)._p_1_1 = this.expr3(0);
				this.state = 681;
				this.match(StellaParser.Surrogate_id_SYMB_16);
				this.state = 682;
				(localctx as LessThanContext)._p_1_3 = this.expr3(0);
				}
				break;
			case 2:
				localctx = new LessThanOrEqualContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 684;
				(localctx as LessThanOrEqualContext)._p_2_1 = this.expr3(0);
				this.state = 685;
				this.match(StellaParser.Surrogate_id_SYMB_17);
				this.state = 686;
				(localctx as LessThanOrEqualContext)._p_2_3 = this.expr3(0);
				}
				break;
			case 3:
				localctx = new GreaterThanContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 688;
				(localctx as GreaterThanContext)._p_3_1 = this.expr3(0);
				this.state = 689;
				this.match(StellaParser.Surrogate_id_SYMB_18);
				this.state = 690;
				(localctx as GreaterThanContext)._p_3_3 = this.expr3(0);
				}
				break;
			case 4:
				localctx = new GreaterThanOrEqualContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 692;
				(localctx as GreaterThanOrEqualContext)._p_4_1 = this.expr3(0);
				this.state = 693;
				this.match(StellaParser.Surrogate_id_SYMB_19);
				this.state = 694;
				(localctx as GreaterThanOrEqualContext)._p_4_3 = this.expr3(0);
				}
				break;
			case 5:
				localctx = new EqualContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 696;
				(localctx as EqualContext)._p_5_1 = this.expr3(0);
				this.state = 697;
				this.match(StellaParser.Surrogate_id_SYMB_20);
				this.state = 698;
				(localctx as EqualContext)._p_5_3 = this.expr3(0);
				}
				break;
			case 6:
				localctx = new NotEqualContext(this, localctx);
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 700;
				(localctx as NotEqualContext)._p_6_1 = this.expr3(0);
				this.state = 701;
				this.match(StellaParser.Surrogate_id_SYMB_21);
				this.state = 702;
				(localctx as NotEqualContext)._p_6_3 = this.expr3(0);
				}
				break;
			case 7:
				localctx = new Coercion_Expr2_7Context(this, localctx);
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 704;
				(localctx as Coercion_Expr2_7Context)._p_7_1 = this.expr3(0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public listExpr2(): ListExpr2Context {
		let localctx: ListExpr2Context = new ListExpr2Context(this, this._ctx, this.state);
		this.enterRule(localctx, 172, StellaParser.RULE_listExpr2);
		try {
			this.state = 714;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 26, this._ctx) ) {
			case 1:
				localctx = new ListExpr2_AppendLastContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 707;
				(localctx as ListExpr2_AppendLastContext)._p_1_1 = this.expr2();
				this.state = 708;
				this.match(StellaParser.Surrogate_id_SYMB_1);
				}
				break;
			case 2:
				localctx = new ListExpr2_PrependFirstContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 710;
				(localctx as ListExpr2_PrependFirstContext)._p_2_1 = this.expr2();
				this.state = 711;
				this.match(StellaParser.Surrogate_id_SYMB_1);
				this.state = 712;
				(localctx as ListExpr2_PrependFirstContext)._p_2_3 = this.listExpr2();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public expr3(): Expr3Context;
	public expr3(_p: number): Expr3Context;
	// @RuleVersion(0)
	public expr3(_p?: number): Expr3Context {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: Expr3Context = new Expr3Context(this, this._ctx, _parentState);
		let _prevctx: Expr3Context = localctx;
		let _startState: number = 174;
		this.enterRecursionRule(localctx, 174, StellaParser.RULE_expr3, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 742;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 53:
				{
				localctx = new AbstractionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 717;
				this.match(StellaParser.Surrogate_id_SYMB_52);
				this.state = 718;
				this.match(StellaParser.Surrogate_id_SYMB_2);
				this.state = 719;
				(localctx as AbstractionContext)._p_3_3 = this.listParamDecl();
				this.state = 720;
				this.match(StellaParser.Surrogate_id_SYMB_3);
				this.state = 721;
				this.match(StellaParser.Surrogate_id_SYMB_4);
				this.state = 722;
				this.match(StellaParser.Surrogate_id_SYMB_68);
				this.state = 723;
				(localctx as AbstractionContext)._p_3_7 = this.expr();
				this.state = 724;
				this.match(StellaParser.Surrogate_id_SYMB_5);
				}
				break;
			case 14:
				{
				localctx = new VariantContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 726;
				this.match(StellaParser.Surrogate_id_SYMB_13);
				this.state = 727;
				(localctx as VariantContext)._p_4_2 = this.match(StellaParser.StellaIdent);
				this.state = 728;
				(localctx as VariantContext)._p_4_3 = this.exprData();
				this.state = 729;
				this.match(StellaParser.Surrogate_id_SYMB_14);
				}
				break;
			case 65:
				{
				localctx = new MatchContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 731;
				this.match(StellaParser.Surrogate_id_SYMB_64);
				this.state = 732;
				(localctx as MatchContext)._p_5_2 = this.expr2();
				this.state = 733;
				this.match(StellaParser.Surrogate_id_SYMB_4);
				this.state = 734;
				(localctx as MatchContext)._p_5_4 = this.listMatchCase();
				this.state = 735;
				this.match(StellaParser.Surrogate_id_SYMB_5);
				}
				break;
			case 7:
				{
				localctx = new ListContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 737;
				this.match(StellaParser.Surrogate_id_SYMB_6);
				this.state = 738;
				(localctx as ListContext)._p_6_2 = this.listExpr();
				this.state = 739;
				this.match(StellaParser.Surrogate_id_SYMB_7);
				}
				break;
			case 3:
			case 5:
			case 25:
			case 28:
			case 29:
			case 30:
			case 31:
			case 32:
			case 33:
			case 34:
			case 46:
			case 51:
			case 52:
			case 54:
			case 59:
			case 61:
			case 66:
			case 67:
			case 70:
			case 72:
			case 74:
			case 75:
			case 77:
			case 78:
			case 84:
			case 86:
			case 87:
				{
				localctx = new Coercion_Expr3_10Context(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 741;
				(localctx as Coercion_Expr3_10Context)._p_10_1 = this.expr4(0);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 762;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 29, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 760;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 28, this._ctx) ) {
					case 1:
						{
						localctx = new TypeAscContext(this, new Expr3Context(this, _parentctx, _parentState));
						(localctx as TypeAscContext)._p_1_1 = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, StellaParser.RULE_expr3);
						this.state = 744;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 745;
						this.match(StellaParser.Surrogate_id_SYMB_41);
						this.state = 746;
						(localctx as TypeAscContext)._p_1_3 = this.type2();
						}
						break;
					case 2:
						{
						localctx = new TypeCastContext(this, new Expr3Context(this, _parentctx, _parentState));
						(localctx as TypeCastContext)._p_2_1 = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, StellaParser.RULE_expr3);
						this.state = 747;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 748;
						this.match(StellaParser.Surrogate_id_SYMB_43);
						this.state = 749;
						this.match(StellaParser.Surrogate_id_SYMB_41);
						this.state = 750;
						(localctx as TypeCastContext)._p_2_4 = this.type2();
						}
						break;
					case 3:
						{
						localctx = new AddContext(this, new Expr3Context(this, _parentctx, _parentState));
						(localctx as AddContext)._p_7_1 = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, StellaParser.RULE_expr3);
						this.state = 751;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 752;
						this.match(StellaParser.Surrogate_id_SYMB_22);
						this.state = 753;
						(localctx as AddContext)._p_7_3 = this.expr4(0);
						}
						break;
					case 4:
						{
						localctx = new SubtractContext(this, new Expr3Context(this, _parentctx, _parentState));
						(localctx as SubtractContext)._p_8_1 = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, StellaParser.RULE_expr3);
						this.state = 754;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 755;
						this.match(StellaParser.Surrogate_id_SYMB_23);
						this.state = 756;
						(localctx as SubtractContext)._p_8_3 = this.expr4(0);
						}
						break;
					case 5:
						{
						localctx = new LogicOrContext(this, new Expr3Context(this, _parentctx, _parentState));
						(localctx as LogicOrContext)._p_9_1 = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, StellaParser.RULE_expr3);
						this.state = 757;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 758;
						this.match(StellaParser.Surrogate_id_SYMB_67);
						this.state = 759;
						(localctx as LogicOrContext)._p_9_3 = this.expr4(0);
						}
						break;
					}
					}
				}
				this.state = 764;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 29, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}

	public expr4(): Expr4Context;
	public expr4(_p: number): Expr4Context;
	// @RuleVersion(0)
	public expr4(_p?: number): Expr4Context {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: Expr4Context = new Expr4Context(this, this._ctx, _parentState);
		let _prevctx: Expr4Context = localctx;
		let _startState: number = 176;
		this.enterRecursionRule(localctx, 176, StellaParser.RULE_expr4, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			localctx = new Coercion_Expr4_4Context(this, localctx);
			this._ctx = localctx;
			_prevctx = localctx;

			this.state = 766;
			(localctx as Coercion_Expr4_4Context)._p_4_1 = this.expr5();
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 779;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 31, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 777;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 30, this._ctx) ) {
					case 1:
						{
						localctx = new MultiplyContext(this, new Expr4Context(this, _parentctx, _parentState));
						(localctx as MultiplyContext)._p_1_1 = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, StellaParser.RULE_expr4);
						this.state = 768;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 769;
						this.match(StellaParser.Surrogate_id_SYMB_24);
						this.state = 770;
						(localctx as MultiplyContext)._p_1_3 = this.expr5();
						}
						break;
					case 2:
						{
						localctx = new DivideContext(this, new Expr4Context(this, _parentctx, _parentState));
						(localctx as DivideContext)._p_2_1 = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, StellaParser.RULE_expr4);
						this.state = 771;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 772;
						this.match(StellaParser.Surrogate_id_SYMB_25);
						this.state = 773;
						(localctx as DivideContext)._p_2_3 = this.expr5();
						}
						break;
					case 3:
						{
						localctx = new LogicAndContext(this, new Expr4Context(this, _parentctx, _parentState));
						(localctx as LogicAndContext)._p_3_1 = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, StellaParser.RULE_expr4);
						this.state = 774;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 775;
						this.match(StellaParser.Surrogate_id_SYMB_40);
						this.state = 776;
						(localctx as LogicAndContext)._p_3_3 = this.expr5();
						}
						break;
					}
					}
				}
				this.state = 781;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 31, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public expr5(): Expr5Context {
		let localctx: Expr5Context = new Expr5Context(this, this._ctx, this.state);
		this.enterRule(localctx, 178, StellaParser.RULE_expr5);
		try {
			this.state = 790;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 66:
				localctx = new RefContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 782;
				this.match(StellaParser.Surrogate_id_SYMB_65);
				this.state = 783;
				this.match(StellaParser.Surrogate_id_SYMB_2);
				this.state = 784;
				(localctx as RefContext)._p_1_3 = this.expr();
				this.state = 785;
				this.match(StellaParser.Surrogate_id_SYMB_3);
				}
				break;
			case 25:
				localctx = new DerefContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 787;
				this.match(StellaParser.Surrogate_id_SYMB_24);
				this.state = 788;
				(localctx as DerefContext)._p_2_2 = this.expr5();
				}
				break;
			case 3:
			case 5:
			case 28:
			case 29:
			case 30:
			case 31:
			case 32:
			case 33:
			case 34:
			case 46:
			case 51:
			case 52:
			case 54:
			case 59:
			case 61:
			case 67:
			case 70:
			case 72:
			case 74:
			case 75:
			case 77:
			case 78:
			case 84:
			case 86:
			case 87:
				localctx = new Coercion_Expr5_3Context(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 789;
				(localctx as Coercion_Expr5_3Context)._p_3_1 = this.expr6(0);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public expr6(): Expr6Context;
	public expr6(_p: number): Expr6Context;
	// @RuleVersion(0)
	public expr6(_p?: number): Expr6Context {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: Expr6Context = new Expr6Context(this, this._ctx, _parentState);
		let _prevctx: Expr6Context = localctx;
		let _startState: number = 180;
		this.enterRecursionRule(localctx, 180, StellaParser.RULE_expr6, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 923;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 33, this._ctx) ) {
			case 1:
				{
				localctx = new TupleContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 793;
				this.match(StellaParser.Surrogate_id_SYMB_4);
				this.state = 794;
				(localctx as TupleContext)._p_5_2 = this.listExpr();
				this.state = 795;
				this.match(StellaParser.Surrogate_id_SYMB_5);
				}
				break;
			case 2:
				{
				localctx = new RecordContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 797;
				this.match(StellaParser.Surrogate_id_SYMB_4);
				this.state = 798;
				(localctx as RecordContext)._p_6_2 = this.listBinding();
				this.state = 799;
				this.match(StellaParser.Surrogate_id_SYMB_5);
				}
				break;
			case 3:
				{
				localctx = new ConsListContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 801;
				this.match(StellaParser.Surrogate_id_SYMB_45);
				this.state = 802;
				this.match(StellaParser.Surrogate_id_SYMB_2);
				this.state = 803;
				(localctx as ConsListContext)._p_7_3 = this.expr();
				this.state = 804;
				this.match(StellaParser.Surrogate_id_SYMB_0);
				this.state = 805;
				(localctx as ConsListContext)._p_7_5 = this.expr();
				this.state = 806;
				this.match(StellaParser.Surrogate_id_SYMB_3);
				}
				break;
			case 4:
				{
				localctx = new HeadContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 808;
				this.match(StellaParser.Surrogate_id_SYMB_27);
				this.state = 809;
				this.match(StellaParser.Surrogate_id_SYMB_2);
				this.state = 810;
				(localctx as HeadContext)._p_8_3 = this.expr();
				this.state = 811;
				this.match(StellaParser.Surrogate_id_SYMB_3);
				}
				break;
			case 5:
				{
				localctx = new IsEmptyContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 813;
				this.match(StellaParser.Surrogate_id_SYMB_28);
				this.state = 814;
				this.match(StellaParser.Surrogate_id_SYMB_2);
				this.state = 815;
				(localctx as IsEmptyContext)._p_9_3 = this.expr();
				this.state = 816;
				this.match(StellaParser.Surrogate_id_SYMB_3);
				}
				break;
			case 6:
				{
				localctx = new TailContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 818;
				this.match(StellaParser.Surrogate_id_SYMB_29);
				this.state = 819;
				this.match(StellaParser.Surrogate_id_SYMB_2);
				this.state = 820;
				(localctx as TailContext)._p_10_3 = this.expr();
				this.state = 821;
				this.match(StellaParser.Surrogate_id_SYMB_3);
				}
				break;
			case 7:
				{
				localctx = new PanicContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 823;
				this.match(StellaParser.Surrogate_id_SYMB_30);
				}
				break;
			case 8:
				{
				localctx = new ThrowContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 824;
				this.match(StellaParser.Surrogate_id_SYMB_71);
				this.state = 825;
				this.match(StellaParser.Surrogate_id_SYMB_2);
				this.state = 826;
				(localctx as ThrowContext)._p_12_3 = this.expr();
				this.state = 827;
				this.match(StellaParser.Surrogate_id_SYMB_3);
				}
				break;
			case 9:
				{
				localctx = new TryCatchContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 829;
				this.match(StellaParser.Surrogate_id_SYMB_74);
				this.state = 830;
				this.match(StellaParser.Surrogate_id_SYMB_4);
				this.state = 831;
				(localctx as TryCatchContext)._p_13_3 = this.expr();
				this.state = 832;
				this.match(StellaParser.Surrogate_id_SYMB_5);
				this.state = 833;
				this.match(StellaParser.Surrogate_id_SYMB_44);
				this.state = 834;
				this.match(StellaParser.Surrogate_id_SYMB_4);
				this.state = 835;
				(localctx as TryCatchContext)._p_13_7 = this.pattern(0);
				this.state = 836;
				this.match(StellaParser.Surrogate_id_SYMB_11);
				this.state = 837;
				(localctx as TryCatchContext)._p_13_9 = this.expr();
				this.state = 838;
				this.match(StellaParser.Surrogate_id_SYMB_5);
				}
				break;
			case 10:
				{
				localctx = new TryWithContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 840;
				this.match(StellaParser.Surrogate_id_SYMB_74);
				this.state = 841;
				this.match(StellaParser.Surrogate_id_SYMB_4);
				this.state = 842;
				(localctx as TryWithContext)._p_14_3 = this.expr();
				this.state = 843;
				this.match(StellaParser.Surrogate_id_SYMB_5);
				this.state = 844;
				this.match(StellaParser.Surrogate_id_SYMB_79);
				this.state = 845;
				this.match(StellaParser.Surrogate_id_SYMB_4);
				this.state = 846;
				(localctx as TryWithContext)._p_14_7 = this.expr();
				this.state = 847;
				this.match(StellaParser.Surrogate_id_SYMB_5);
				}
				break;
			case 11:
				{
				localctx = new TryCastAsContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 849;
				this.match(StellaParser.Surrogate_id_SYMB_74);
				this.state = 850;
				this.match(StellaParser.Surrogate_id_SYMB_4);
				this.state = 851;
				(localctx as TryCastAsContext)._p_15_3 = this.expr();
				this.state = 852;
				this.match(StellaParser.Surrogate_id_SYMB_5);
				this.state = 853;
				this.match(StellaParser.Surrogate_id_SYMB_43);
				this.state = 854;
				this.match(StellaParser.Surrogate_id_SYMB_41);
				this.state = 855;
				(localctx as TryCastAsContext)._p_15_7 = this.type_();
				this.state = 856;
				this.match(StellaParser.Surrogate_id_SYMB_4);
				this.state = 857;
				(localctx as TryCastAsContext)._p_15_9 = this.pattern(0);
				this.state = 858;
				this.match(StellaParser.Surrogate_id_SYMB_11);
				this.state = 859;
				(localctx as TryCastAsContext)._p_15_11 = this.expr();
				this.state = 860;
				this.match(StellaParser.Surrogate_id_SYMB_5);
				this.state = 861;
				this.match(StellaParser.Surrogate_id_SYMB_79);
				this.state = 862;
				this.match(StellaParser.Surrogate_id_SYMB_4);
				this.state = 863;
				(localctx as TryCastAsContext)._p_15_15 = this.expr();
				this.state = 864;
				this.match(StellaParser.Surrogate_id_SYMB_5);
				}
				break;
			case 12:
				{
				localctx = new InlContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 866;
				this.match(StellaParser.Surrogate_id_SYMB_58);
				this.state = 867;
				this.match(StellaParser.Surrogate_id_SYMB_2);
				this.state = 868;
				(localctx as InlContext)._p_16_3 = this.expr();
				this.state = 869;
				this.match(StellaParser.Surrogate_id_SYMB_3);
				}
				break;
			case 13:
				{
				localctx = new InrContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 871;
				this.match(StellaParser.Surrogate_id_SYMB_60);
				this.state = 872;
				this.match(StellaParser.Surrogate_id_SYMB_2);
				this.state = 873;
				(localctx as InrContext)._p_17_3 = this.expr();
				this.state = 874;
				this.match(StellaParser.Surrogate_id_SYMB_3);
				}
				break;
			case 14:
				{
				localctx = new SuccContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 876;
				this.match(StellaParser.Surrogate_id_SYMB_69);
				this.state = 877;
				this.match(StellaParser.Surrogate_id_SYMB_2);
				this.state = 878;
				(localctx as SuccContext)._p_18_3 = this.expr();
				this.state = 879;
				this.match(StellaParser.Surrogate_id_SYMB_3);
				}
				break;
			case 15:
				{
				localctx = new LogicNotContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 881;
				this.match(StellaParser.Surrogate_id_SYMB_66);
				this.state = 882;
				this.match(StellaParser.Surrogate_id_SYMB_2);
				this.state = 883;
				(localctx as LogicNotContext)._p_19_3 = this.expr();
				this.state = 884;
				this.match(StellaParser.Surrogate_id_SYMB_3);
				}
				break;
			case 16:
				{
				localctx = new PredContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 886;
				this.match(StellaParser.Surrogate_id_SYMB_31);
				this.state = 887;
				this.match(StellaParser.Surrogate_id_SYMB_2);
				this.state = 888;
				(localctx as PredContext)._p_20_3 = this.expr();
				this.state = 889;
				this.match(StellaParser.Surrogate_id_SYMB_3);
				}
				break;
			case 17:
				{
				localctx = new IsZeroContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 891;
				this.match(StellaParser.Surrogate_id_SYMB_32);
				this.state = 892;
				this.match(StellaParser.Surrogate_id_SYMB_2);
				this.state = 893;
				(localctx as IsZeroContext)._p_21_3 = this.expr();
				this.state = 894;
				this.match(StellaParser.Surrogate_id_SYMB_3);
				}
				break;
			case 18:
				{
				localctx = new FixContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 896;
				this.match(StellaParser.Surrogate_id_SYMB_51);
				this.state = 897;
				this.match(StellaParser.Surrogate_id_SYMB_2);
				this.state = 898;
				(localctx as FixContext)._p_22_3 = this.expr();
				this.state = 899;
				this.match(StellaParser.Surrogate_id_SYMB_3);
				}
				break;
			case 19:
				{
				localctx = new NatRecContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 901;
				this.match(StellaParser.Surrogate_id_SYMB_33);
				this.state = 902;
				this.match(StellaParser.Surrogate_id_SYMB_2);
				this.state = 903;
				(localctx as NatRecContext)._p_23_3 = this.expr();
				this.state = 904;
				this.match(StellaParser.Surrogate_id_SYMB_0);
				this.state = 905;
				(localctx as NatRecContext)._p_23_5 = this.expr();
				this.state = 906;
				this.match(StellaParser.Surrogate_id_SYMB_0);
				this.state = 907;
				(localctx as NatRecContext)._p_23_7 = this.expr();
				this.state = 908;
				this.match(StellaParser.Surrogate_id_SYMB_3);
				}
				break;
			case 20:
				{
				localctx = new FoldContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 910;
				this.match(StellaParser.Surrogate_id_SYMB_53);
				this.state = 911;
				this.match(StellaParser.Surrogate_id_SYMB_6);
				this.state = 912;
				(localctx as FoldContext)._p_24_3 = this.type_();
				this.state = 913;
				this.match(StellaParser.Surrogate_id_SYMB_7);
				this.state = 914;
				(localctx as FoldContext)._p_24_5 = this.expr7();
				}
				break;
			case 21:
				{
				localctx = new UnfoldContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 916;
				this.match(StellaParser.Surrogate_id_SYMB_76);
				this.state = 917;
				this.match(StellaParser.Surrogate_id_SYMB_6);
				this.state = 918;
				(localctx as UnfoldContext)._p_25_3 = this.type_();
				this.state = 919;
				this.match(StellaParser.Surrogate_id_SYMB_7);
				this.state = 920;
				(localctx as UnfoldContext)._p_25_5 = this.expr7();
				}
				break;
			case 22:
				{
				localctx = new Coercion_Expr6_26Context(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 922;
				(localctx as Coercion_Expr6_26Context)._p_26_1 = this.expr7();
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 943;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 35, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 941;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 34, this._ctx) ) {
					case 1:
						{
						localctx = new ApplicationContext(this, new Expr6Context(this, _parentctx, _parentState));
						(localctx as ApplicationContext)._p_1_1 = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, StellaParser.RULE_expr6);
						this.state = 925;
						if (!(this.precpred(this._ctx, 26))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 26)");
						}
						this.state = 926;
						this.match(StellaParser.Surrogate_id_SYMB_2);
						this.state = 927;
						(localctx as ApplicationContext)._p_1_3 = this.listExpr();
						this.state = 928;
						this.match(StellaParser.Surrogate_id_SYMB_3);
						}
						break;
					case 2:
						{
						localctx = new TypeApplicationContext(this, new Expr6Context(this, _parentctx, _parentState));
						(localctx as TypeApplicationContext)._p_2_1 = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, StellaParser.RULE_expr6);
						this.state = 930;
						if (!(this.precpred(this._ctx, 25))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 25)");
						}
						this.state = 931;
						this.match(StellaParser.Surrogate_id_SYMB_6);
						this.state = 932;
						(localctx as TypeApplicationContext)._p_2_3 = this.listType();
						this.state = 933;
						this.match(StellaParser.Surrogate_id_SYMB_7);
						}
						break;
					case 3:
						{
						localctx = new DotRecordContext(this, new Expr6Context(this, _parentctx, _parentState));
						(localctx as DotRecordContext)._p_3_1 = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, StellaParser.RULE_expr6);
						this.state = 935;
						if (!(this.precpred(this._ctx, 24))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 24)");
						}
						this.state = 936;
						this.match(StellaParser.Surrogate_id_SYMB_26);
						this.state = 937;
						(localctx as DotRecordContext)._p_3_3 = this.match(StellaParser.StellaIdent);
						}
						break;
					case 4:
						{
						localctx = new DotTupleContext(this, new Expr6Context(this, _parentctx, _parentState));
						(localctx as DotTupleContext)._p_4_1 = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, StellaParser.RULE_expr6);
						this.state = 938;
						if (!(this.precpred(this._ctx, 23))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 23)");
						}
						this.state = 939;
						this.match(StellaParser.Surrogate_id_SYMB_26);
						this.state = 940;
						(localctx as DotTupleContext)._p_4_3 = this.match(StellaParser.INTEGER);
						}
						break;
					}
					}
				}
				this.state = 945;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 35, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public expr7(): Expr7Context {
		let localctx: Expr7Context = new Expr7Context(this, this._ctx, this.state);
		this.enterRule(localctx, 182, StellaParser.RULE_expr7);
		try {
			this.state = 956;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 74:
				localctx = new ConstTrueContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 946;
				this.match(StellaParser.Surrogate_id_SYMB_73);
				}
				break;
			case 51:
				localctx = new ConstFalseContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 947;
				this.match(StellaParser.Surrogate_id_SYMB_50);
				}
				break;
			case 78:
				localctx = new ConstUnitContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 948;
				this.match(StellaParser.Surrogate_id_SYMB_77);
				}
				break;
			case 87:
				localctx = new ConstIntContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 949;
				(localctx as ConstIntContext)._p_4_1 = this.match(StellaParser.INTEGER);
				}
				break;
			case 86:
				localctx = new ConstMemoryContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 950;
				(localctx as ConstMemoryContext)._p_5_1 = this.match(StellaParser.MemoryAddress);
				}
				break;
			case 84:
				localctx = new VarContext(this, localctx);
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 951;
				(localctx as VarContext)._p_6_1 = this.match(StellaParser.StellaIdent);
				}
				break;
			case 3:
				localctx = new Coercion_Expr7_7Context(this, localctx);
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 952;
				this.match(StellaParser.Surrogate_id_SYMB_2);
				this.state = 953;
				(localctx as Coercion_Expr7_7Context)._p_7_2 = this.expr();
				this.state = 954;
				this.match(StellaParser.Surrogate_id_SYMB_3);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public type_(): TypeContext {
		let localctx: TypeContext = new TypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 184, StellaParser.RULE_type);
		try {
			this.state = 976;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 43:
				localctx = new TypeAutoContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 958;
				this.match(StellaParser.Surrogate_id_SYMB_42);
				}
				break;
			case 53:
				localctx = new TypeFunContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 959;
				this.match(StellaParser.Surrogate_id_SYMB_52);
				this.state = 960;
				this.match(StellaParser.Surrogate_id_SYMB_2);
				this.state = 961;
				(localctx as TypeFunContext)._p_2_3 = this.listType();
				this.state = 962;
				this.match(StellaParser.Surrogate_id_SYMB_3);
				this.state = 963;
				this.match(StellaParser.Surrogate_id_SYMB_10);
				this.state = 964;
				(localctx as TypeFunContext)._p_2_6 = this.type_();
				}
				break;
			case 55:
				localctx = new TypeForAllContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 966;
				this.match(StellaParser.Surrogate_id_SYMB_54);
				this.state = 967;
				(localctx as TypeForAllContext)._p_3_2 = this.listStellaIdent();
				this.state = 968;
				this.match(StellaParser.Surrogate_id_SYMB_26);
				this.state = 969;
				(localctx as TypeForAllContext)._p_3_4 = this.type_();
				}
				break;
			case 81:
				localctx = new TypeRecContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 971;
				this.match(StellaParser.Surrogate_id_SYMB_80);
				this.state = 972;
				(localctx as TypeRecContext)._p_4_2 = this.match(StellaParser.StellaIdent);
				this.state = 973;
				this.match(StellaParser.Surrogate_id_SYMB_26);
				this.state = 974;
				(localctx as TypeRecContext)._p_4_4 = this.type_();
				}
				break;
			case 3:
			case 5:
			case 7:
			case 14:
			case 35:
			case 36:
			case 37:
			case 38:
			case 39:
			case 40:
			case 84:
				localctx = new Coercion_Type_5Context(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 975;
				(localctx as Coercion_Type_5Context)._p_5_1 = this.type1();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public type1(): Type1Context {
		let localctx: Type1Context = new Type1Context(this, this._ctx, this.state);
		this.enterRule(localctx, 186, StellaParser.RULE_type1);
		try {
			this.state = 983;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 38, this._ctx) ) {
			case 1:
				localctx = new TypeSumContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 978;
				(localctx as TypeSumContext)._p_1_1 = this.type2();
				this.state = 979;
				this.match(StellaParser.Surrogate_id_SYMB_22);
				this.state = 980;
				(localctx as TypeSumContext)._p_1_3 = this.type2();
				}
				break;
			case 2:
				localctx = new Coercion_Type1_2Context(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 982;
				(localctx as Coercion_Type1_2Context)._p_2_1 = this.type2();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public type2(): Type2Context {
		let localctx: Type2Context = new Type2Context(this, this._ctx, this.state);
		this.enterRule(localctx, 188, StellaParser.RULE_type2);
		try {
			this.state = 1002;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 39, this._ctx) ) {
			case 1:
				localctx = new TypeTupleContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 985;
				this.match(StellaParser.Surrogate_id_SYMB_4);
				this.state = 986;
				(localctx as TypeTupleContext)._p_1_2 = this.listType();
				this.state = 987;
				this.match(StellaParser.Surrogate_id_SYMB_5);
				}
				break;
			case 2:
				localctx = new TypeRecordContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 989;
				this.match(StellaParser.Surrogate_id_SYMB_4);
				this.state = 990;
				(localctx as TypeRecordContext)._p_2_2 = this.listRecordFieldType();
				this.state = 991;
				this.match(StellaParser.Surrogate_id_SYMB_5);
				}
				break;
			case 3:
				localctx = new TypeVariantContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 993;
				this.match(StellaParser.Surrogate_id_SYMB_13);
				this.state = 994;
				(localctx as TypeVariantContext)._p_3_2 = this.listVariantFieldType();
				this.state = 995;
				this.match(StellaParser.Surrogate_id_SYMB_14);
				}
				break;
			case 4:
				localctx = new TypeListContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 997;
				this.match(StellaParser.Surrogate_id_SYMB_6);
				this.state = 998;
				(localctx as TypeListContext)._p_4_2 = this.type_();
				this.state = 999;
				this.match(StellaParser.Surrogate_id_SYMB_7);
				}
				break;
			case 5:
				localctx = new Coercion_Type2_5Context(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1001;
				(localctx as Coercion_Type2_5Context)._p_5_1 = this.type3();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public type3(): Type3Context {
		let localctx: Type3Context = new Type3Context(this, this._ctx, this.state);
		this.enterRule(localctx, 190, StellaParser.RULE_type3);
		try {
			this.state = 1016;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 36:
				localctx = new TypeBoolContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1004;
				this.match(StellaParser.Surrogate_id_SYMB_35);
				}
				break;
			case 38:
				localctx = new TypeNatContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1005;
				this.match(StellaParser.Surrogate_id_SYMB_37);
				}
				break;
			case 40:
				localctx = new TypeUnitContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1006;
				this.match(StellaParser.Surrogate_id_SYMB_39);
				}
				break;
			case 39:
				localctx = new TypeTopContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1007;
				this.match(StellaParser.Surrogate_id_SYMB_38);
				}
				break;
			case 37:
				localctx = new TypeBottomContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1008;
				this.match(StellaParser.Surrogate_id_SYMB_36);
				}
				break;
			case 35:
				localctx = new TypeRefContext(this, localctx);
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 1009;
				this.match(StellaParser.Surrogate_id_SYMB_34);
				this.state = 1010;
				(localctx as TypeRefContext)._p_6_2 = this.type2();
				}
				break;
			case 84:
				localctx = new TypeVarContext(this, localctx);
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 1011;
				(localctx as TypeVarContext)._p_7_1 = this.match(StellaParser.StellaIdent);
				}
				break;
			case 3:
				localctx = new Coercion_Type3_8Context(this, localctx);
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 1012;
				this.match(StellaParser.Surrogate_id_SYMB_2);
				this.state = 1013;
				(localctx as Coercion_Type3_8Context)._p_8_2 = this.type_();
				this.state = 1014;
				this.match(StellaParser.Surrogate_id_SYMB_3);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public listType(): ListTypeContext {
		let localctx: ListTypeContext = new ListTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 192, StellaParser.RULE_listType);
		try {
			this.state = 1024;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 41, this._ctx) ) {
			case 1:
				localctx = new ListType_EmptyContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				// tslint:disable-next-line:no-empty
				{
				}
				break;
			case 2:
				localctx = new ListType_AppendLastContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1019;
				(localctx as ListType_AppendLastContext)._p_2_1 = this.type_();
				}
				break;
			case 3:
				localctx = new ListType_PrependFirstContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1020;
				(localctx as ListType_PrependFirstContext)._p_3_1 = this.type_();
				this.state = 1021;
				this.match(StellaParser.Surrogate_id_SYMB_0);
				this.state = 1022;
				(localctx as ListType_PrependFirstContext)._p_3_3 = this.listType();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public variantFieldType(): VariantFieldTypeContext {
		let localctx: VariantFieldTypeContext = new VariantFieldTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 194, StellaParser.RULE_variantFieldType);
		try {
			localctx = new AVariantFieldTypeContext(this, localctx);
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1026;
			(localctx as AVariantFieldTypeContext)._p_1_1 = this.match(StellaParser.StellaIdent);
			this.state = 1027;
			(localctx as AVariantFieldTypeContext)._p_1_2 = this.optionalTyping();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public listVariantFieldType(): ListVariantFieldTypeContext {
		let localctx: ListVariantFieldTypeContext = new ListVariantFieldTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 196, StellaParser.RULE_listVariantFieldType);
		try {
			this.state = 1035;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 42, this._ctx) ) {
			case 1:
				localctx = new ListVariantFieldType_EmptyContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				// tslint:disable-next-line:no-empty
				{
				}
				break;
			case 2:
				localctx = new ListVariantFieldType_AppendLastContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1030;
				(localctx as ListVariantFieldType_AppendLastContext)._p_2_1 = this.variantFieldType();
				}
				break;
			case 3:
				localctx = new ListVariantFieldType_PrependFirstContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1031;
				(localctx as ListVariantFieldType_PrependFirstContext)._p_3_1 = this.variantFieldType();
				this.state = 1032;
				this.match(StellaParser.Surrogate_id_SYMB_0);
				this.state = 1033;
				(localctx as ListVariantFieldType_PrependFirstContext)._p_3_3 = this.listVariantFieldType();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public recordFieldType(): RecordFieldTypeContext {
		let localctx: RecordFieldTypeContext = new RecordFieldTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 198, StellaParser.RULE_recordFieldType);
		try {
			localctx = new ARecordFieldTypeContext(this, localctx);
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1037;
			(localctx as ARecordFieldTypeContext)._p_1_1 = this.match(StellaParser.StellaIdent);
			this.state = 1038;
			this.match(StellaParser.Surrogate_id_SYMB_9);
			this.state = 1039;
			(localctx as ARecordFieldTypeContext)._p_1_3 = this.type_();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public listRecordFieldType(): ListRecordFieldTypeContext {
		let localctx: ListRecordFieldTypeContext = new ListRecordFieldTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 200, StellaParser.RULE_listRecordFieldType);
		try {
			this.state = 1046;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 43, this._ctx) ) {
			case 1:
				localctx = new ListRecordFieldType_AppendLastContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1041;
				(localctx as ListRecordFieldType_AppendLastContext)._p_1_1 = this.recordFieldType();
				}
				break;
			case 2:
				localctx = new ListRecordFieldType_PrependFirstContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1042;
				(localctx as ListRecordFieldType_PrependFirstContext)._p_2_1 = this.recordFieldType();
				this.state = 1043;
				this.match(StellaParser.Surrogate_id_SYMB_0);
				this.state = 1044;
				(localctx as ListRecordFieldType_PrependFirstContext)._p_2_3 = this.listRecordFieldType();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public typing(): TypingContext {
		let localctx: TypingContext = new TypingContext(this, this._ctx, this.state);
		this.enterRule(localctx, 202, StellaParser.RULE_typing);
		try {
			localctx = new ATypingContext(this, localctx);
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1048;
			(localctx as ATypingContext)._p_1_1 = this.expr();
			this.state = 1049;
			this.match(StellaParser.Surrogate_id_SYMB_9);
			this.state = 1050;
			(localctx as ATypingContext)._p_1_3 = this.type_();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public sempred(localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 56:
			return this.listExtension_sempred(localctx as ListExtensionContext, predIndex);
		case 58:
			return this.listDecl_sempred(localctx as ListDeclContext, predIndex);
		case 60:
			return this.listLocalDecl_sempred(localctx as ListLocalDeclContext, predIndex);
		case 62:
			return this.listAnnotation_sempred(localctx as ListAnnotationContext, predIndex);
		case 74:
			return this.pattern_sempred(localctx as PatternContext, predIndex);
		case 87:
			return this.expr3_sempred(localctx as Expr3Context, predIndex);
		case 88:
			return this.expr4_sempred(localctx as Expr4Context, predIndex);
		case 90:
			return this.expr6_sempred(localctx as Expr6Context, predIndex);
		}
		return true;
	}
	private listExtension_sempred(localctx: ListExtensionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private listDecl_sempred(localctx: ListDeclContext, predIndex: number): boolean {
		switch (predIndex) {
		case 1:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private listLocalDecl_sempred(localctx: ListLocalDeclContext, predIndex: number): boolean {
		switch (predIndex) {
		case 2:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private listAnnotation_sempred(localctx: ListAnnotationContext, predIndex: number): boolean {
		switch (predIndex) {
		case 3:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private pattern_sempred(localctx: PatternContext, predIndex: number): boolean {
		switch (predIndex) {
		case 4:
			return this.precpred(this._ctx, 16);
		case 5:
			return this.precpred(this._ctx, 15);
		}
		return true;
	}
	private expr3_sempred(localctx: Expr3Context, predIndex: number): boolean {
		switch (predIndex) {
		case 6:
			return this.precpred(this._ctx, 10);
		case 7:
			return this.precpred(this._ctx, 9);
		case 8:
			return this.precpred(this._ctx, 4);
		case 9:
			return this.precpred(this._ctx, 3);
		case 10:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}
	private expr4_sempred(localctx: Expr4Context, predIndex: number): boolean {
		switch (predIndex) {
		case 11:
			return this.precpred(this._ctx, 4);
		case 12:
			return this.precpred(this._ctx, 3);
		case 13:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}
	private expr6_sempred(localctx: Expr6Context, predIndex: number): boolean {
		switch (predIndex) {
		case 14:
			return this.precpred(this._ctx, 26);
		case 15:
			return this.precpred(this._ctx, 25);
		case 16:
			return this.precpred(this._ctx, 24);
		case 17:
			return this.precpred(this._ctx, 23);
		}
		return true;
	}

	public static readonly _serializedATN: number[] = [4,1,89,1053,2,0,7,0,
	2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,
	2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,
	17,7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,
	7,24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,
	31,2,32,7,32,2,33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,
	2,39,7,39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,
	46,7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,2,51,7,51,2,52,7,52,2,53,
	7,53,2,54,7,54,2,55,7,55,2,56,7,56,2,57,7,57,2,58,7,58,2,59,7,59,2,60,7,
	60,2,61,7,61,2,62,7,62,2,63,7,63,2,64,7,64,2,65,7,65,2,66,7,66,2,67,7,67,
	2,68,7,68,2,69,7,69,2,70,7,70,2,71,7,71,2,72,7,72,2,73,7,73,2,74,7,74,2,
	75,7,75,2,76,7,76,2,77,7,77,2,78,7,78,2,79,7,79,2,80,7,80,2,81,7,81,2,82,
	7,82,2,83,7,83,2,84,7,84,2,85,7,85,2,86,7,86,2,87,7,87,2,88,7,88,2,89,7,
	89,2,90,7,90,2,91,7,91,2,92,7,92,2,93,7,93,2,94,7,94,2,95,7,95,2,96,7,96,
	2,97,7,97,2,98,7,98,2,99,7,99,2,100,7,100,2,101,7,101,1,0,1,0,1,0,1,1,1,
	1,1,1,1,2,1,2,1,2,1,3,1,3,1,3,1,4,1,4,1,4,1,5,1,5,1,5,1,6,1,6,1,6,1,7,1,
	7,1,7,1,8,1,8,1,8,1,9,1,9,1,9,1,10,1,10,1,10,1,11,1,11,1,11,1,12,1,12,1,
	12,1,13,1,13,1,13,1,14,1,14,1,14,1,15,1,15,1,15,1,16,1,16,1,16,1,17,1,17,
	1,17,1,18,1,18,1,18,1,19,1,19,1,19,1,20,1,20,1,20,1,21,1,21,1,21,1,22,1,
	22,1,22,1,23,1,23,1,23,1,24,1,24,1,24,1,25,1,25,1,25,1,26,1,26,1,26,1,27,
	1,27,1,27,1,28,1,28,1,28,1,29,1,29,1,29,1,30,1,30,1,30,1,31,1,31,1,31,1,
	32,1,32,1,32,1,33,1,33,1,33,1,34,1,34,1,34,1,35,1,35,1,35,1,36,1,36,1,36,
	1,37,1,37,1,37,1,38,1,38,1,38,1,39,1,39,1,39,1,40,1,40,1,40,1,41,1,41,1,
	41,1,42,1,42,1,42,1,43,1,43,1,43,1,44,1,44,1,44,1,45,1,45,1,45,1,46,1,46,
	1,46,1,47,1,47,1,47,1,48,1,48,1,48,1,49,1,49,1,49,1,50,1,50,1,50,1,51,1,
	51,1,51,1,51,1,52,1,52,1,52,1,52,1,52,3,52,367,8,52,1,53,1,53,1,53,1,53,
	1,54,1,54,1,54,1,54,1,55,1,55,1,55,1,55,1,55,3,55,382,8,55,1,56,1,56,1,
	56,1,56,1,56,5,56,389,8,56,10,56,12,56,392,9,56,1,57,1,57,1,57,1,57,1,57,
	1,57,1,57,1,57,1,57,1,57,1,57,1,57,1,57,1,57,1,57,1,57,1,57,1,57,1,57,1,
	57,1,57,1,57,1,57,1,57,1,57,1,57,1,57,1,57,1,57,1,57,1,57,1,57,1,57,1,57,
	1,57,1,57,1,57,1,57,1,57,1,57,1,57,1,57,1,57,1,57,1,57,3,57,439,8,57,1,
	58,1,58,1,58,5,58,444,8,58,10,58,12,58,447,9,58,1,59,1,59,1,60,1,60,1,60,
	1,60,1,60,5,60,456,8,60,10,60,12,60,459,9,60,1,61,1,61,1,62,1,62,1,62,5,
	62,466,8,62,10,62,12,62,469,9,62,1,63,1,63,1,63,1,63,1,64,1,64,1,64,1,64,
	1,64,1,64,3,64,481,8,64,1,65,1,65,1,65,3,65,486,8,65,1,66,1,66,1,66,3,66,
	491,8,66,1,67,1,67,1,68,1,68,1,68,1,68,1,68,3,68,500,8,68,1,69,1,69,1,69,
	1,69,1,70,1,70,1,70,1,70,1,70,1,70,3,70,512,8,70,1,71,1,71,1,71,3,71,517,
	8,71,1,72,1,72,1,72,3,72,522,8,72,1,73,1,73,1,73,3,73,527,8,73,1,74,1,74,
	1,74,1,74,1,74,1,74,1,74,1,74,1,74,1,74,1,74,1,74,1,74,1,74,1,74,1,74,1,
	74,1,74,1,74,1,74,1,74,1,74,1,74,1,74,1,74,1,74,1,74,1,74,1,74,1,74,1,74,
	1,74,1,74,1,74,1,74,1,74,1,74,1,74,1,74,1,74,1,74,1,74,1,74,1,74,1,74,1,
	74,1,74,1,74,1,74,3,74,578,8,74,1,74,1,74,1,74,1,74,1,74,1,74,1,74,5,74,
	587,8,74,10,74,12,74,590,9,74,1,75,1,75,1,75,1,75,1,75,1,75,3,75,598,8,
	75,1,76,1,76,1,76,1,76,1,77,1,77,1,77,1,77,1,77,3,77,609,8,77,1,78,1,78,
	1,78,1,78,1,79,1,79,1,79,1,79,1,79,3,79,620,8,79,1,80,1,80,1,80,1,80,1,
	80,1,80,1,80,1,80,1,80,1,80,1,80,1,80,1,80,1,80,1,80,1,80,1,80,1,80,1,80,
	1,80,1,80,1,80,1,80,1,80,3,80,646,8,80,1,81,1,81,1,81,1,81,1,81,1,81,3,
	81,654,8,81,1,82,1,82,1,82,1,82,1,82,1,82,1,82,1,82,1,82,1,82,1,82,1,82,
	3,82,668,8,82,1,83,1,83,1,83,1,83,1,84,1,84,1,84,1,84,1,84,3,84,679,8,84,
	1,85,1,85,1,85,1,85,1,85,1,85,1,85,1,85,1,85,1,85,1,85,1,85,1,85,1,85,1,
	85,1,85,1,85,1,85,1,85,1,85,1,85,1,85,1,85,1,85,1,85,3,85,706,8,85,1,86,
	1,86,1,86,1,86,1,86,1,86,1,86,3,86,715,8,86,1,87,1,87,1,87,1,87,1,87,1,
	87,1,87,1,87,1,87,1,87,1,87,1,87,1,87,1,87,1,87,1,87,1,87,1,87,1,87,1,87,
	1,87,1,87,1,87,1,87,1,87,1,87,3,87,743,8,87,1,87,1,87,1,87,1,87,1,87,1,
	87,1,87,1,87,1,87,1,87,1,87,1,87,1,87,1,87,1,87,1,87,5,87,761,8,87,10,87,
	12,87,764,9,87,1,88,1,88,1,88,1,88,1,88,1,88,1,88,1,88,1,88,1,88,1,88,1,
	88,5,88,778,8,88,10,88,12,88,781,9,88,1,89,1,89,1,89,1,89,1,89,1,89,1,89,
	1,89,3,89,791,8,89,1,90,1,90,1,90,1,90,1,90,1,90,1,90,1,90,1,90,1,90,1,
	90,1,90,1,90,1,90,1,90,1,90,1,90,1,90,1,90,1,90,1,90,1,90,1,90,1,90,1,90,
	1,90,1,90,1,90,1,90,1,90,1,90,1,90,1,90,1,90,1,90,1,90,1,90,1,90,1,90,1,
	90,1,90,1,90,1,90,1,90,1,90,1,90,1,90,1,90,1,90,1,90,1,90,1,90,1,90,1,90,
	1,90,1,90,1,90,1,90,1,90,1,90,1,90,1,90,1,90,1,90,1,90,1,90,1,90,1,90,1,
	90,1,90,1,90,1,90,1,90,1,90,1,90,1,90,1,90,1,90,1,90,1,90,1,90,1,90,1,90,
	1,90,1,90,1,90,1,90,1,90,1,90,1,90,1,90,1,90,1,90,1,90,1,90,1,90,1,90,1,
	90,1,90,1,90,1,90,1,90,1,90,1,90,1,90,1,90,1,90,1,90,1,90,1,90,1,90,1,90,
	1,90,1,90,1,90,1,90,1,90,1,90,1,90,1,90,1,90,1,90,1,90,1,90,1,90,1,90,1,
	90,1,90,1,90,1,90,1,90,3,90,924,8,90,1,90,1,90,1,90,1,90,1,90,1,90,1,90,
	1,90,1,90,1,90,1,90,1,90,1,90,1,90,1,90,1,90,5,90,942,8,90,10,90,12,90,
	945,9,90,1,91,1,91,1,91,1,91,1,91,1,91,1,91,1,91,1,91,1,91,3,91,957,8,91,
	1,92,1,92,1,92,1,92,1,92,1,92,1,92,1,92,1,92,1,92,1,92,1,92,1,92,1,92,1,
	92,1,92,1,92,1,92,3,92,977,8,92,1,93,1,93,1,93,1,93,1,93,3,93,984,8,93,
	1,94,1,94,1,94,1,94,1,94,1,94,1,94,1,94,1,94,1,94,1,94,1,94,1,94,1,94,1,
	94,1,94,1,94,3,94,1003,8,94,1,95,1,95,1,95,1,95,1,95,1,95,1,95,1,95,1,95,
	1,95,1,95,1,95,3,95,1017,8,95,1,96,1,96,1,96,1,96,1,96,1,96,3,96,1025,8,
	96,1,97,1,97,1,97,1,98,1,98,1,98,1,98,1,98,1,98,3,98,1036,8,98,1,99,1,99,
	1,99,1,99,1,100,1,100,1,100,1,100,1,100,3,100,1047,8,100,1,101,1,101,1,
	101,1,101,1,101,0,8,112,116,120,124,148,174,176,180,102,0,2,4,6,8,10,12,
	14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,
	62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,
	108,110,112,114,116,118,120,122,124,126,128,130,132,134,136,138,140,142,
	144,146,148,150,152,154,156,158,160,162,164,166,168,170,172,174,176,178,
	180,182,184,186,188,190,192,194,196,198,200,202,0,0,1074,0,204,1,0,0,0,
	2,207,1,0,0,0,4,210,1,0,0,0,6,213,1,0,0,0,8,216,1,0,0,0,10,219,1,0,0,0,
	12,222,1,0,0,0,14,225,1,0,0,0,16,228,1,0,0,0,18,231,1,0,0,0,20,234,1,0,
	0,0,22,237,1,0,0,0,24,240,1,0,0,0,26,243,1,0,0,0,28,246,1,0,0,0,30,249,
	1,0,0,0,32,252,1,0,0,0,34,255,1,0,0,0,36,258,1,0,0,0,38,261,1,0,0,0,40,
	264,1,0,0,0,42,267,1,0,0,0,44,270,1,0,0,0,46,273,1,0,0,0,48,276,1,0,0,0,
	50,279,1,0,0,0,52,282,1,0,0,0,54,285,1,0,0,0,56,288,1,0,0,0,58,291,1,0,
	0,0,60,294,1,0,0,0,62,297,1,0,0,0,64,300,1,0,0,0,66,303,1,0,0,0,68,306,
	1,0,0,0,70,309,1,0,0,0,72,312,1,0,0,0,74,315,1,0,0,0,76,318,1,0,0,0,78,
	321,1,0,0,0,80,324,1,0,0,0,82,327,1,0,0,0,84,330,1,0,0,0,86,333,1,0,0,0,
	88,336,1,0,0,0,90,339,1,0,0,0,92,342,1,0,0,0,94,345,1,0,0,0,96,348,1,0,
	0,0,98,351,1,0,0,0,100,354,1,0,0,0,102,357,1,0,0,0,104,366,1,0,0,0,106,
	368,1,0,0,0,108,372,1,0,0,0,110,381,1,0,0,0,112,383,1,0,0,0,114,438,1,0,
	0,0,116,440,1,0,0,0,118,448,1,0,0,0,120,450,1,0,0,0,122,460,1,0,0,0,124,
	462,1,0,0,0,126,470,1,0,0,0,128,480,1,0,0,0,130,485,1,0,0,0,132,490,1,0,
	0,0,134,492,1,0,0,0,136,499,1,0,0,0,138,501,1,0,0,0,140,511,1,0,0,0,142,
	516,1,0,0,0,144,521,1,0,0,0,146,526,1,0,0,0,148,577,1,0,0,0,150,597,1,0,
	0,0,152,599,1,0,0,0,154,608,1,0,0,0,156,610,1,0,0,0,158,619,1,0,0,0,160,
	645,1,0,0,0,162,653,1,0,0,0,164,667,1,0,0,0,166,669,1,0,0,0,168,678,1,0,
	0,0,170,705,1,0,0,0,172,714,1,0,0,0,174,742,1,0,0,0,176,765,1,0,0,0,178,
	790,1,0,0,0,180,923,1,0,0,0,182,956,1,0,0,0,184,976,1,0,0,0,186,983,1,0,
	0,0,188,1002,1,0,0,0,190,1016,1,0,0,0,192,1024,1,0,0,0,194,1026,1,0,0,0,
	196,1035,1,0,0,0,198,1037,1,0,0,0,200,1046,1,0,0,0,202,1048,1,0,0,0,204,
	205,3,102,51,0,205,206,5,0,0,1,206,1,1,0,0,0,207,208,3,104,52,0,208,209,
	5,0,0,1,209,3,1,0,0,0,210,211,3,106,53,0,211,212,5,0,0,1,212,5,1,0,0,0,
	213,214,3,108,54,0,214,215,5,0,0,1,215,7,1,0,0,0,216,217,3,110,55,0,217,
	218,5,0,0,1,218,9,1,0,0,0,219,220,3,112,56,0,220,221,5,0,0,1,221,11,1,0,
	0,0,222,223,3,114,57,0,223,224,5,0,0,1,224,13,1,0,0,0,225,226,3,116,58,
	0,226,227,5,0,0,1,227,15,1,0,0,0,228,229,3,118,59,0,229,230,5,0,0,1,230,
	17,1,0,0,0,231,232,3,120,60,0,232,233,5,0,0,1,233,19,1,0,0,0,234,235,3,
	122,61,0,235,236,5,0,0,1,236,21,1,0,0,0,237,238,3,124,62,0,238,239,5,0,
	0,1,239,23,1,0,0,0,240,241,3,126,63,0,241,242,5,0,0,1,242,25,1,0,0,0,243,
	244,3,128,64,0,244,245,5,0,0,1,245,27,1,0,0,0,246,247,3,130,65,0,247,248,
	5,0,0,1,248,29,1,0,0,0,249,250,3,132,66,0,250,251,5,0,0,1,251,31,1,0,0,
	0,252,253,3,134,67,0,253,254,5,0,0,1,254,33,1,0,0,0,255,256,3,136,68,0,
	256,257,5,0,0,1,257,35,1,0,0,0,258,259,3,138,69,0,259,260,5,0,0,1,260,37,
	1,0,0,0,261,262,3,140,70,0,262,263,5,0,0,1,263,39,1,0,0,0,264,265,3,142,
	71,0,265,266,5,0,0,1,266,41,1,0,0,0,267,268,3,144,72,0,268,269,5,0,0,1,
	269,43,1,0,0,0,270,271,3,146,73,0,271,272,5,0,0,1,272,45,1,0,0,0,273,274,
	3,148,74,0,274,275,5,0,0,1,275,47,1,0,0,0,276,277,3,150,75,0,277,278,5,
	0,0,1,278,49,1,0,0,0,279,280,3,152,76,0,280,281,5,0,0,1,281,51,1,0,0,0,
	282,283,3,154,77,0,283,284,5,0,0,1,284,53,1,0,0,0,285,286,3,156,78,0,286,
	287,5,0,0,1,287,55,1,0,0,0,288,289,3,158,79,0,289,290,5,0,0,1,290,57,1,
	0,0,0,291,292,3,160,80,0,292,293,5,0,0,1,293,59,1,0,0,0,294,295,3,162,81,
	0,295,296,5,0,0,1,296,61,1,0,0,0,297,298,3,164,82,0,298,299,5,0,0,1,299,
	63,1,0,0,0,300,301,3,166,83,0,301,302,5,0,0,1,302,65,1,0,0,0,303,304,3,
	168,84,0,304,305,5,0,0,1,305,67,1,0,0,0,306,307,3,170,85,0,307,308,5,0,
	0,1,308,69,1,0,0,0,309,310,3,172,86,0,310,311,5,0,0,1,311,71,1,0,0,0,312,
	313,3,174,87,0,313,314,5,0,0,1,314,73,1,0,0,0,315,316,3,176,88,0,316,317,
	5,0,0,1,317,75,1,0,0,0,318,319,3,178,89,0,319,320,5,0,0,1,320,77,1,0,0,
	0,321,322,3,180,90,0,322,323,5,0,0,1,323,79,1,0,0,0,324,325,3,182,91,0,
	325,326,5,0,0,1,326,81,1,0,0,0,327,328,3,184,92,0,328,329,5,0,0,1,329,83,
	1,0,0,0,330,331,3,186,93,0,331,332,5,0,0,1,332,85,1,0,0,0,333,334,3,188,
	94,0,334,335,5,0,0,1,335,87,1,0,0,0,336,337,3,190,95,0,337,338,5,0,0,1,
	338,89,1,0,0,0,339,340,3,192,96,0,340,341,5,0,0,1,341,91,1,0,0,0,342,343,
	3,194,97,0,343,344,5,0,0,1,344,93,1,0,0,0,345,346,3,196,98,0,346,347,5,
	0,0,1,347,95,1,0,0,0,348,349,3,198,99,0,349,350,5,0,0,1,350,97,1,0,0,0,
	351,352,3,200,100,0,352,353,5,0,0,1,353,99,1,0,0,0,354,355,3,202,101,0,
	355,356,5,0,0,1,356,101,1,0,0,0,357,358,3,106,53,0,358,359,3,112,56,0,359,
	360,3,116,58,0,360,103,1,0,0,0,361,367,1,0,0,0,362,367,5,84,0,0,363,364,
	5,84,0,0,364,365,5,1,0,0,365,367,3,104,52,0,366,361,1,0,0,0,366,362,1,0,
	0,0,366,363,1,0,0,0,367,105,1,0,0,0,368,369,5,62,0,0,369,370,5,47,0,0,370,
	371,5,2,0,0,371,107,1,0,0,0,372,373,5,50,0,0,373,374,5,80,0,0,374,375,3,
	110,55,0,375,109,1,0,0,0,376,382,1,0,0,0,377,382,5,85,0,0,378,379,5,85,
	0,0,379,380,5,1,0,0,380,382,3,110,55,0,381,376,1,0,0,0,381,377,1,0,0,0,
	381,378,1,0,0,0,382,111,1,0,0,0,383,390,6,56,-1,0,384,385,10,1,0,0,385,
	386,3,108,54,0,386,387,5,2,0,0,387,389,1,0,0,0,388,384,1,0,0,0,389,392,
	1,0,0,0,390,388,1,0,0,0,390,391,1,0,0,0,391,113,1,0,0,0,392,390,1,0,0,0,
	393,394,3,124,62,0,394,395,5,53,0,0,395,396,5,84,0,0,396,397,5,3,0,0,397,
	398,3,128,64,0,398,399,5,4,0,0,399,400,3,130,65,0,400,401,3,132,66,0,401,
	402,5,5,0,0,402,403,3,116,58,0,403,404,5,69,0,0,404,405,3,160,80,0,405,
	406,5,6,0,0,406,439,1,0,0,0,407,408,3,124,62,0,408,409,5,56,0,0,409,410,
	5,53,0,0,410,411,5,84,0,0,411,412,5,7,0,0,412,413,3,104,52,0,413,414,5,
	8,0,0,414,415,5,3,0,0,415,416,3,128,64,0,416,417,5,4,0,0,417,418,3,130,
	65,0,418,419,3,132,66,0,419,420,5,5,0,0,420,421,3,116,58,0,421,422,5,69,
	0,0,422,423,3,160,80,0,423,424,5,6,0,0,424,439,1,0,0,0,425,426,5,76,0,0,
	426,427,5,84,0,0,427,428,5,9,0,0,428,439,3,184,92,0,429,430,5,49,0,0,430,
	431,5,76,0,0,431,432,5,9,0,0,432,439,3,184,92,0,433,434,5,49,0,0,434,435,
	5,79,0,0,435,436,5,84,0,0,436,437,5,10,0,0,437,439,3,184,92,0,438,393,1,
	0,0,0,438,407,1,0,0,0,438,425,1,0,0,0,438,429,1,0,0,0,438,433,1,0,0,0,439,
	115,1,0,0,0,440,445,6,58,-1,0,441,442,10,1,0,0,442,444,3,114,57,0,443,441,
	1,0,0,0,444,447,1,0,0,0,445,443,1,0,0,0,445,446,1,0,0,0,446,117,1,0,0,0,
	447,445,1,0,0,0,448,449,3,114,57,0,449,119,1,0,0,0,450,457,6,60,-1,0,451,
	452,10,1,0,0,452,453,3,118,59,0,453,454,5,2,0,0,454,456,1,0,0,0,455,451,
	1,0,0,0,456,459,1,0,0,0,457,455,1,0,0,0,457,458,1,0,0,0,458,121,1,0,0,0,
	459,457,1,0,0,0,460,461,5,60,0,0,461,123,1,0,0,0,462,467,6,62,-1,0,463,
	464,10,1,0,0,464,466,3,122,61,0,465,463,1,0,0,0,466,469,1,0,0,0,467,465,
	1,0,0,0,467,468,1,0,0,0,468,125,1,0,0,0,469,467,1,0,0,0,470,471,5,84,0,
	0,471,472,5,10,0,0,472,473,3,184,92,0,473,127,1,0,0,0,474,481,1,0,0,0,475,
	481,3,126,63,0,476,477,3,126,63,0,477,478,5,1,0,0,478,479,3,128,64,0,479,
	481,1,0,0,0,480,474,1,0,0,0,480,475,1,0,0,0,480,476,1,0,0,0,481,129,1,0,
	0,0,482,486,1,0,0,0,483,484,5,11,0,0,484,486,3,184,92,0,485,482,1,0,0,0,
	485,483,1,0,0,0,486,131,1,0,0,0,487,491,1,0,0,0,488,489,5,73,0,0,489,491,
	3,136,68,0,490,487,1,0,0,0,490,488,1,0,0,0,491,133,1,0,0,0,492,493,3,184,
	92,0,493,135,1,0,0,0,494,500,3,134,67,0,495,496,3,134,67,0,496,497,5,1,
	0,0,497,498,3,136,68,0,498,500,1,0,0,0,499,494,1,0,0,0,499,495,1,0,0,0,
	500,137,1,0,0,0,501,502,3,148,74,0,502,503,5,12,0,0,503,504,3,160,80,0,
	504,139,1,0,0,0,505,512,1,0,0,0,506,512,3,138,69,0,507,508,3,138,69,0,508,
	509,5,13,0,0,509,510,3,140,70,0,510,512,1,0,0,0,511,505,1,0,0,0,511,506,
	1,0,0,0,511,507,1,0,0,0,512,141,1,0,0,0,513,517,1,0,0,0,514,515,5,10,0,
	0,515,517,3,184,92,0,516,513,1,0,0,0,516,514,1,0,0,0,517,143,1,0,0,0,518,
	522,1,0,0,0,519,520,5,9,0,0,520,522,3,148,74,0,521,518,1,0,0,0,521,519,
	1,0,0,0,522,145,1,0,0,0,523,527,1,0,0,0,524,525,5,9,0,0,525,527,3,160,80,
	0,526,523,1,0,0,0,526,524,1,0,0,0,527,147,1,0,0,0,528,529,6,74,-1,0,529,
	530,5,14,0,0,530,531,5,84,0,0,531,532,3,144,72,0,532,533,5,15,0,0,533,578,
	1,0,0,0,534,535,5,59,0,0,535,536,5,3,0,0,536,537,3,148,74,0,537,538,5,4,
	0,0,538,578,1,0,0,0,539,540,5,61,0,0,540,541,5,3,0,0,541,542,3,148,74,0,
	542,543,5,4,0,0,543,578,1,0,0,0,544,545,5,5,0,0,545,546,3,150,75,0,546,
	547,5,6,0,0,547,578,1,0,0,0,548,549,5,5,0,0,549,550,3,154,77,0,550,551,
	5,6,0,0,551,578,1,0,0,0,552,553,5,7,0,0,553,554,3,150,75,0,554,555,5,8,
	0,0,555,578,1,0,0,0,556,557,5,46,0,0,557,558,5,3,0,0,558,559,3,148,74,0,
	559,560,5,1,0,0,560,561,3,148,74,0,561,562,5,4,0,0,562,578,1,0,0,0,563,
	578,5,51,0,0,564,578,5,74,0,0,565,578,5,78,0,0,566,578,5,87,0,0,567,568,
	5,70,0,0,568,569,5,3,0,0,569,570,3,148,74,0,570,571,5,4,0,0,571,578,1,0,
	0,0,572,578,5,84,0,0,573,574,5,3,0,0,574,575,3,148,74,0,575,576,5,4,0,0,
	576,578,1,0,0,0,577,528,1,0,0,0,577,534,1,0,0,0,577,539,1,0,0,0,577,544,
	1,0,0,0,577,548,1,0,0,0,577,552,1,0,0,0,577,556,1,0,0,0,577,563,1,0,0,0,
	577,564,1,0,0,0,577,565,1,0,0,0,577,566,1,0,0,0,577,567,1,0,0,0,577,572,
	1,0,0,0,577,573,1,0,0,0,578,588,1,0,0,0,579,580,10,16,0,0,580,581,5,44,
	0,0,581,582,5,42,0,0,582,587,3,184,92,0,583,584,10,15,0,0,584,585,5,42,
	0,0,585,587,3,184,92,0,586,579,1,0,0,0,586,583,1,0,0,0,587,590,1,0,0,0,
	588,586,1,0,0,0,588,589,1,0,0,0,589,149,1,0,0,0,590,588,1,0,0,0,591,598,
	1,0,0,0,592,598,3,148,74,0,593,594,3,148,74,0,594,595,5,1,0,0,595,596,3,
	150,75,0,596,598,1,0,0,0,597,591,1,0,0,0,597,592,1,0,0,0,597,593,1,0,0,
	0,598,151,1,0,0,0,599,600,5,84,0,0,600,601,5,9,0,0,601,602,3,148,74,0,602,
	153,1,0,0,0,603,609,3,152,76,0,604,605,3,152,76,0,605,606,5,1,0,0,606,607,
	3,154,77,0,607,609,1,0,0,0,608,603,1,0,0,0,608,604,1,0,0,0,609,155,1,0,
	0,0,610,611,5,84,0,0,611,612,5,9,0,0,612,613,3,160,80,0,613,157,1,0,0,0,
	614,620,3,156,78,0,615,616,3,156,78,0,616,617,5,1,0,0,617,618,3,158,79,
	0,618,620,1,0,0,0,619,614,1,0,0,0,619,615,1,0,0,0,620,159,1,0,0,0,621,622,
	3,164,82,0,622,623,5,2,0,0,623,624,3,160,80,0,624,646,1,0,0,0,625,626,3,
	164,82,0,626,627,5,2,0,0,627,646,1,0,0,0,628,629,5,63,0,0,629,630,3,168,
	84,0,630,631,5,58,0,0,631,632,3,160,80,0,632,646,1,0,0,0,633,634,5,64,0,
	0,634,635,3,168,84,0,635,636,5,58,0,0,636,637,3,160,80,0,637,646,1,0,0,
	0,638,639,5,56,0,0,639,640,5,7,0,0,640,641,3,104,52,0,641,642,5,8,0,0,642,
	643,3,160,80,0,643,646,1,0,0,0,644,646,3,164,82,0,645,621,1,0,0,0,645,625,
	1,0,0,0,645,628,1,0,0,0,645,633,1,0,0,0,645,638,1,0,0,0,645,644,1,0,0,0,
	646,161,1,0,0,0,647,654,1,0,0,0,648,654,3,160,80,0,649,650,3,160,80,0,650,
	651,5,1,0,0,651,652,3,162,81,0,652,654,1,0,0,0,653,647,1,0,0,0,653,648,
	1,0,0,0,653,649,1,0,0,0,654,163,1,0,0,0,655,656,3,170,85,0,656,657,5,16,
	0,0,657,658,3,164,82,0,658,668,1,0,0,0,659,660,5,57,0,0,660,661,3,164,82,
	0,661,662,5,71,0,0,662,663,3,164,82,0,663,664,5,48,0,0,664,665,3,164,82,
	0,665,668,1,0,0,0,666,668,3,170,85,0,667,655,1,0,0,0,667,659,1,0,0,0,667,
	666,1,0,0,0,668,165,1,0,0,0,669,670,3,148,74,0,670,671,5,9,0,0,671,672,
	3,160,80,0,672,167,1,0,0,0,673,679,3,166,83,0,674,675,3,166,83,0,675,676,
	5,1,0,0,676,677,3,168,84,0,677,679,1,0,0,0,678,673,1,0,0,0,678,674,1,0,
	0,0,679,169,1,0,0,0,680,681,3,174,87,0,681,682,5,17,0,0,682,683,3,174,87,
	0,683,706,1,0,0,0,684,685,3,174,87,0,685,686,5,18,0,0,686,687,3,174,87,
	0,687,706,1,0,0,0,688,689,3,174,87,0,689,690,5,19,0,0,690,691,3,174,87,
	0,691,706,1,0,0,0,692,693,3,174,87,0,693,694,5,20,0,0,694,695,3,174,87,
	0,695,706,1,0,0,0,696,697,3,174,87,0,697,698,5,21,0,0,698,699,3,174,87,
	0,699,706,1,0,0,0,700,701,3,174,87,0,701,702,5,22,0,0,702,703,3,174,87,
	0,703,706,1,0,0,0,704,706,3,174,87,0,705,680,1,0,0,0,705,684,1,0,0,0,705,
	688,1,0,0,0,705,692,1,0,0,0,705,696,1,0,0,0,705,700,1,0,0,0,705,704,1,0,
	0,0,706,171,1,0,0,0,707,708,3,170,85,0,708,709,5,2,0,0,709,715,1,0,0,0,
	710,711,3,170,85,0,711,712,5,2,0,0,712,713,3,172,86,0,713,715,1,0,0,0,714,
	707,1,0,0,0,714,710,1,0,0,0,715,173,1,0,0,0,716,717,6,87,-1,0,717,718,5,
	53,0,0,718,719,5,3,0,0,719,720,3,128,64,0,720,721,5,4,0,0,721,722,5,5,0,
	0,722,723,5,69,0,0,723,724,3,160,80,0,724,725,5,6,0,0,725,743,1,0,0,0,726,
	727,5,14,0,0,727,728,5,84,0,0,728,729,3,146,73,0,729,730,5,15,0,0,730,743,
	1,0,0,0,731,732,5,65,0,0,732,733,3,170,85,0,733,734,5,5,0,0,734,735,3,140,
	70,0,735,736,5,6,0,0,736,743,1,0,0,0,737,738,5,7,0,0,738,739,3,162,81,0,
	739,740,5,8,0,0,740,743,1,0,0,0,741,743,3,176,88,0,742,716,1,0,0,0,742,
	726,1,0,0,0,742,731,1,0,0,0,742,737,1,0,0,0,742,741,1,0,0,0,743,762,1,0,
	0,0,744,745,10,10,0,0,745,746,5,42,0,0,746,761,3,188,94,0,747,748,10,9,
	0,0,748,749,5,44,0,0,749,750,5,42,0,0,750,761,3,188,94,0,751,752,10,4,0,
	0,752,753,5,23,0,0,753,761,3,176,88,0,754,755,10,3,0,0,755,756,5,24,0,0,
	756,761,3,176,88,0,757,758,10,2,0,0,758,759,5,68,0,0,759,761,3,176,88,0,
	760,744,1,0,0,0,760,747,1,0,0,0,760,751,1,0,0,0,760,754,1,0,0,0,760,757,
	1,0,0,0,761,764,1,0,0,0,762,760,1,0,0,0,762,763,1,0,0,0,763,175,1,0,0,0,
	764,762,1,0,0,0,765,766,6,88,-1,0,766,767,3,178,89,0,767,779,1,0,0,0,768,
	769,10,4,0,0,769,770,5,25,0,0,770,778,3,178,89,0,771,772,10,3,0,0,772,773,
	5,26,0,0,773,778,3,178,89,0,774,775,10,2,0,0,775,776,5,41,0,0,776,778,3,
	178,89,0,777,768,1,0,0,0,777,771,1,0,0,0,777,774,1,0,0,0,778,781,1,0,0,
	0,779,777,1,0,0,0,779,780,1,0,0,0,780,177,1,0,0,0,781,779,1,0,0,0,782,783,
	5,66,0,0,783,784,5,3,0,0,784,785,3,160,80,0,785,786,5,4,0,0,786,791,1,0,
	0,0,787,788,5,25,0,0,788,791,3,178,89,0,789,791,3,180,90,0,790,782,1,0,
	0,0,790,787,1,0,0,0,790,789,1,0,0,0,791,179,1,0,0,0,792,793,6,90,-1,0,793,
	794,5,5,0,0,794,795,3,162,81,0,795,796,5,6,0,0,796,924,1,0,0,0,797,798,
	5,5,0,0,798,799,3,158,79,0,799,800,5,6,0,0,800,924,1,0,0,0,801,802,5,46,
	0,0,802,803,5,3,0,0,803,804,3,160,80,0,804,805,5,1,0,0,805,806,3,160,80,
	0,806,807,5,4,0,0,807,924,1,0,0,0,808,809,5,28,0,0,809,810,5,3,0,0,810,
	811,3,160,80,0,811,812,5,4,0,0,812,924,1,0,0,0,813,814,5,29,0,0,814,815,
	5,3,0,0,815,816,3,160,80,0,816,817,5,4,0,0,817,924,1,0,0,0,818,819,5,30,
	0,0,819,820,5,3,0,0,820,821,3,160,80,0,821,822,5,4,0,0,822,924,1,0,0,0,
	823,924,5,31,0,0,824,825,5,72,0,0,825,826,5,3,0,0,826,827,3,160,80,0,827,
	828,5,4,0,0,828,924,1,0,0,0,829,830,5,75,0,0,830,831,5,5,0,0,831,832,3,
	160,80,0,832,833,5,6,0,0,833,834,5,45,0,0,834,835,5,5,0,0,835,836,3,148,
	74,0,836,837,5,12,0,0,837,838,3,160,80,0,838,839,5,6,0,0,839,924,1,0,0,
	0,840,841,5,75,0,0,841,842,5,5,0,0,842,843,3,160,80,0,843,844,5,6,0,0,844,
	845,5,80,0,0,845,846,5,5,0,0,846,847,3,160,80,0,847,848,5,6,0,0,848,924,
	1,0,0,0,849,850,5,75,0,0,850,851,5,5,0,0,851,852,3,160,80,0,852,853,5,6,
	0,0,853,854,5,44,0,0,854,855,5,42,0,0,855,856,3,184,92,0,856,857,5,5,0,
	0,857,858,3,148,74,0,858,859,5,12,0,0,859,860,3,160,80,0,860,861,5,6,0,
	0,861,862,5,80,0,0,862,863,5,5,0,0,863,864,3,160,80,0,864,865,5,6,0,0,865,
	924,1,0,0,0,866,867,5,59,0,0,867,868,5,3,0,0,868,869,3,160,80,0,869,870,
	5,4,0,0,870,924,1,0,0,0,871,872,5,61,0,0,872,873,5,3,0,0,873,874,3,160,
	80,0,874,875,5,4,0,0,875,924,1,0,0,0,876,877,5,70,0,0,877,878,5,3,0,0,878,
	879,3,160,80,0,879,880,5,4,0,0,880,924,1,0,0,0,881,882,5,67,0,0,882,883,
	5,3,0,0,883,884,3,160,80,0,884,885,5,4,0,0,885,924,1,0,0,0,886,887,5,32,
	0,0,887,888,5,3,0,0,888,889,3,160,80,0,889,890,5,4,0,0,890,924,1,0,0,0,
	891,892,5,33,0,0,892,893,5,3,0,0,893,894,3,160,80,0,894,895,5,4,0,0,895,
	924,1,0,0,0,896,897,5,52,0,0,897,898,5,3,0,0,898,899,3,160,80,0,899,900,
	5,4,0,0,900,924,1,0,0,0,901,902,5,34,0,0,902,903,5,3,0,0,903,904,3,160,
	80,0,904,905,5,1,0,0,905,906,3,160,80,0,906,907,5,1,0,0,907,908,3,160,80,
	0,908,909,5,4,0,0,909,924,1,0,0,0,910,911,5,54,0,0,911,912,5,7,0,0,912,
	913,3,184,92,0,913,914,5,8,0,0,914,915,3,182,91,0,915,924,1,0,0,0,916,917,
	5,77,0,0,917,918,5,7,0,0,918,919,3,184,92,0,919,920,5,8,0,0,920,921,3,182,
	91,0,921,924,1,0,0,0,922,924,3,182,91,0,923,792,1,0,0,0,923,797,1,0,0,0,
	923,801,1,0,0,0,923,808,1,0,0,0,923,813,1,0,0,0,923,818,1,0,0,0,923,823,
	1,0,0,0,923,824,1,0,0,0,923,829,1,0,0,0,923,840,1,0,0,0,923,849,1,0,0,0,
	923,866,1,0,0,0,923,871,1,0,0,0,923,876,1,0,0,0,923,881,1,0,0,0,923,886,
	1,0,0,0,923,891,1,0,0,0,923,896,1,0,0,0,923,901,1,0,0,0,923,910,1,0,0,0,
	923,916,1,0,0,0,923,922,1,0,0,0,924,943,1,0,0,0,925,926,10,26,0,0,926,927,
	5,3,0,0,927,928,3,162,81,0,928,929,5,4,0,0,929,942,1,0,0,0,930,931,10,25,
	0,0,931,932,5,7,0,0,932,933,3,192,96,0,933,934,5,8,0,0,934,942,1,0,0,0,
	935,936,10,24,0,0,936,937,5,27,0,0,937,942,5,84,0,0,938,939,10,23,0,0,939,
	940,5,27,0,0,940,942,5,87,0,0,941,925,1,0,0,0,941,930,1,0,0,0,941,935,1,
	0,0,0,941,938,1,0,0,0,942,945,1,0,0,0,943,941,1,0,0,0,943,944,1,0,0,0,944,
	181,1,0,0,0,945,943,1,0,0,0,946,957,5,74,0,0,947,957,5,51,0,0,948,957,5,
	78,0,0,949,957,5,87,0,0,950,957,5,86,0,0,951,957,5,84,0,0,952,953,5,3,0,
	0,953,954,3,160,80,0,954,955,5,4,0,0,955,957,1,0,0,0,956,946,1,0,0,0,956,
	947,1,0,0,0,956,948,1,0,0,0,956,949,1,0,0,0,956,950,1,0,0,0,956,951,1,0,
	0,0,956,952,1,0,0,0,957,183,1,0,0,0,958,977,5,43,0,0,959,960,5,53,0,0,960,
	961,5,3,0,0,961,962,3,192,96,0,962,963,5,4,0,0,963,964,5,11,0,0,964,965,
	3,184,92,0,965,977,1,0,0,0,966,967,5,55,0,0,967,968,3,104,52,0,968,969,
	5,27,0,0,969,970,3,184,92,0,970,977,1,0,0,0,971,972,5,81,0,0,972,973,5,
	84,0,0,973,974,5,27,0,0,974,977,3,184,92,0,975,977,3,186,93,0,976,958,1,
	0,0,0,976,959,1,0,0,0,976,966,1,0,0,0,976,971,1,0,0,0,976,975,1,0,0,0,977,
	185,1,0,0,0,978,979,3,188,94,0,979,980,5,23,0,0,980,981,3,188,94,0,981,
	984,1,0,0,0,982,984,3,188,94,0,983,978,1,0,0,0,983,982,1,0,0,0,984,187,
	1,0,0,0,985,986,5,5,0,0,986,987,3,192,96,0,987,988,5,6,0,0,988,1003,1,0,
	0,0,989,990,5,5,0,0,990,991,3,200,100,0,991,992,5,6,0,0,992,1003,1,0,0,
	0,993,994,5,14,0,0,994,995,3,196,98,0,995,996,5,15,0,0,996,1003,1,0,0,0,
	997,998,5,7,0,0,998,999,3,184,92,0,999,1000,5,8,0,0,1000,1003,1,0,0,0,1001,
	1003,3,190,95,0,1002,985,1,0,0,0,1002,989,1,0,0,0,1002,993,1,0,0,0,1002,
	997,1,0,0,0,1002,1001,1,0,0,0,1003,189,1,0,0,0,1004,1017,5,36,0,0,1005,
	1017,5,38,0,0,1006,1017,5,40,0,0,1007,1017,5,39,0,0,1008,1017,5,37,0,0,
	1009,1010,5,35,0,0,1010,1017,3,188,94,0,1011,1017,5,84,0,0,1012,1013,5,
	3,0,0,1013,1014,3,184,92,0,1014,1015,5,4,0,0,1015,1017,1,0,0,0,1016,1004,
	1,0,0,0,1016,1005,1,0,0,0,1016,1006,1,0,0,0,1016,1007,1,0,0,0,1016,1008,
	1,0,0,0,1016,1009,1,0,0,0,1016,1011,1,0,0,0,1016,1012,1,0,0,0,1017,191,
	1,0,0,0,1018,1025,1,0,0,0,1019,1025,3,184,92,0,1020,1021,3,184,92,0,1021,
	1022,5,1,0,0,1022,1023,3,192,96,0,1023,1025,1,0,0,0,1024,1018,1,0,0,0,1024,
	1019,1,0,0,0,1024,1020,1,0,0,0,1025,193,1,0,0,0,1026,1027,5,84,0,0,1027,
	1028,3,142,71,0,1028,195,1,0,0,0,1029,1036,1,0,0,0,1030,1036,3,194,97,0,
	1031,1032,3,194,97,0,1032,1033,5,1,0,0,1033,1034,3,196,98,0,1034,1036,1,
	0,0,0,1035,1029,1,0,0,0,1035,1030,1,0,0,0,1035,1031,1,0,0,0,1036,197,1,
	0,0,0,1037,1038,5,84,0,0,1038,1039,5,10,0,0,1039,1040,3,184,92,0,1040,199,
	1,0,0,0,1041,1047,3,198,99,0,1042,1043,3,198,99,0,1043,1044,5,1,0,0,1044,
	1045,3,200,100,0,1045,1047,1,0,0,0,1046,1041,1,0,0,0,1046,1042,1,0,0,0,
	1047,201,1,0,0,0,1048,1049,3,160,80,0,1049,1050,5,10,0,0,1050,1051,3,184,
	92,0,1051,203,1,0,0,0,44,366,381,390,438,445,457,467,480,485,490,499,511,
	516,521,526,577,586,588,597,608,619,645,653,667,678,705,714,742,760,762,
	777,779,790,923,941,943,956,976,983,1002,1016,1024,1035,1046];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!StellaParser.__ATN) {
			StellaParser.__ATN = new ATNDeserializer().deserialize(StellaParser._serializedATN);
		}

		return StellaParser.__ATN;
	}


	static DecisionsToDFA = StellaParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class Start_ProgramContext extends ParserRuleContext {
	constructor(parser?: StellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public program(): ProgramContext {
		return this.getTypedRuleContext(ProgramContext, 0) as ProgramContext;
	}
	public EOF(): TerminalNode {
		return this.getToken(StellaParser.EOF, 0);
	}
    public get ruleIndex(): number {
    	return StellaParser.RULE_start_Program;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterStart_Program) {
	 		listener.enterStart_Program(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitStart_Program) {
	 		listener.exitStart_Program(this);
		}
	}
}


export class Start_ListStellaIdentContext extends ParserRuleContext {
	constructor(parser?: StellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public listStellaIdent(): ListStellaIdentContext {
		return this.getTypedRuleContext(ListStellaIdentContext, 0) as ListStellaIdentContext;
	}
	public EOF(): TerminalNode {
		return this.getToken(StellaParser.EOF, 0);
	}
    public get ruleIndex(): number {
    	return StellaParser.RULE_start_ListStellaIdent;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterStart_ListStellaIdent) {
	 		listener.enterStart_ListStellaIdent(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitStart_ListStellaIdent) {
	 		listener.exitStart_ListStellaIdent(this);
		}
	}
}


export class Start_LanguageDeclContext extends ParserRuleContext {
	constructor(parser?: StellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public languageDecl(): LanguageDeclContext {
		return this.getTypedRuleContext(LanguageDeclContext, 0) as LanguageDeclContext;
	}
	public EOF(): TerminalNode {
		return this.getToken(StellaParser.EOF, 0);
	}
    public get ruleIndex(): number {
    	return StellaParser.RULE_start_LanguageDecl;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterStart_LanguageDecl) {
	 		listener.enterStart_LanguageDecl(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitStart_LanguageDecl) {
	 		listener.exitStart_LanguageDecl(this);
		}
	}
}


export class Start_ExtensionContext extends ParserRuleContext {
	constructor(parser?: StellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public extension(): ExtensionContext {
		return this.getTypedRuleContext(ExtensionContext, 0) as ExtensionContext;
	}
	public EOF(): TerminalNode {
		return this.getToken(StellaParser.EOF, 0);
	}
    public get ruleIndex(): number {
    	return StellaParser.RULE_start_Extension;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterStart_Extension) {
	 		listener.enterStart_Extension(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitStart_Extension) {
	 		listener.exitStart_Extension(this);
		}
	}
}


export class Start_ListExtensionNameContext extends ParserRuleContext {
	constructor(parser?: StellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public listExtensionName(): ListExtensionNameContext {
		return this.getTypedRuleContext(ListExtensionNameContext, 0) as ListExtensionNameContext;
	}
	public EOF(): TerminalNode {
		return this.getToken(StellaParser.EOF, 0);
	}
    public get ruleIndex(): number {
    	return StellaParser.RULE_start_ListExtensionName;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterStart_ListExtensionName) {
	 		listener.enterStart_ListExtensionName(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitStart_ListExtensionName) {
	 		listener.exitStart_ListExtensionName(this);
		}
	}
}


export class Start_ListExtensionContext extends ParserRuleContext {
	constructor(parser?: StellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public listExtension(): ListExtensionContext {
		return this.getTypedRuleContext(ListExtensionContext, 0) as ListExtensionContext;
	}
	public EOF(): TerminalNode {
		return this.getToken(StellaParser.EOF, 0);
	}
    public get ruleIndex(): number {
    	return StellaParser.RULE_start_ListExtension;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterStart_ListExtension) {
	 		listener.enterStart_ListExtension(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitStart_ListExtension) {
	 		listener.exitStart_ListExtension(this);
		}
	}
}


export class Start_DeclContext extends ParserRuleContext {
	constructor(parser?: StellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public decl(): DeclContext {
		return this.getTypedRuleContext(DeclContext, 0) as DeclContext;
	}
	public EOF(): TerminalNode {
		return this.getToken(StellaParser.EOF, 0);
	}
    public get ruleIndex(): number {
    	return StellaParser.RULE_start_Decl;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterStart_Decl) {
	 		listener.enterStart_Decl(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitStart_Decl) {
	 		listener.exitStart_Decl(this);
		}
	}
}


export class Start_ListDeclContext extends ParserRuleContext {
	constructor(parser?: StellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public listDecl(): ListDeclContext {
		return this.getTypedRuleContext(ListDeclContext, 0) as ListDeclContext;
	}
	public EOF(): TerminalNode {
		return this.getToken(StellaParser.EOF, 0);
	}
    public get ruleIndex(): number {
    	return StellaParser.RULE_start_ListDecl;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterStart_ListDecl) {
	 		listener.enterStart_ListDecl(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitStart_ListDecl) {
	 		listener.exitStart_ListDecl(this);
		}
	}
}


export class Start_LocalDeclContext extends ParserRuleContext {
	constructor(parser?: StellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public localDecl(): LocalDeclContext {
		return this.getTypedRuleContext(LocalDeclContext, 0) as LocalDeclContext;
	}
	public EOF(): TerminalNode {
		return this.getToken(StellaParser.EOF, 0);
	}
    public get ruleIndex(): number {
    	return StellaParser.RULE_start_LocalDecl;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterStart_LocalDecl) {
	 		listener.enterStart_LocalDecl(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitStart_LocalDecl) {
	 		listener.exitStart_LocalDecl(this);
		}
	}
}


export class Start_ListLocalDeclContext extends ParserRuleContext {
	constructor(parser?: StellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public listLocalDecl(): ListLocalDeclContext {
		return this.getTypedRuleContext(ListLocalDeclContext, 0) as ListLocalDeclContext;
	}
	public EOF(): TerminalNode {
		return this.getToken(StellaParser.EOF, 0);
	}
    public get ruleIndex(): number {
    	return StellaParser.RULE_start_ListLocalDecl;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterStart_ListLocalDecl) {
	 		listener.enterStart_ListLocalDecl(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitStart_ListLocalDecl) {
	 		listener.exitStart_ListLocalDecl(this);
		}
	}
}


export class Start_AnnotationContext extends ParserRuleContext {
	constructor(parser?: StellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public annotation(): AnnotationContext {
		return this.getTypedRuleContext(AnnotationContext, 0) as AnnotationContext;
	}
	public EOF(): TerminalNode {
		return this.getToken(StellaParser.EOF, 0);
	}
    public get ruleIndex(): number {
    	return StellaParser.RULE_start_Annotation;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterStart_Annotation) {
	 		listener.enterStart_Annotation(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitStart_Annotation) {
	 		listener.exitStart_Annotation(this);
		}
	}
}


export class Start_ListAnnotationContext extends ParserRuleContext {
	constructor(parser?: StellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public listAnnotation(): ListAnnotationContext {
		return this.getTypedRuleContext(ListAnnotationContext, 0) as ListAnnotationContext;
	}
	public EOF(): TerminalNode {
		return this.getToken(StellaParser.EOF, 0);
	}
    public get ruleIndex(): number {
    	return StellaParser.RULE_start_ListAnnotation;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterStart_ListAnnotation) {
	 		listener.enterStart_ListAnnotation(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitStart_ListAnnotation) {
	 		listener.exitStart_ListAnnotation(this);
		}
	}
}


export class Start_ParamDeclContext extends ParserRuleContext {
	constructor(parser?: StellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public paramDecl(): ParamDeclContext {
		return this.getTypedRuleContext(ParamDeclContext, 0) as ParamDeclContext;
	}
	public EOF(): TerminalNode {
		return this.getToken(StellaParser.EOF, 0);
	}
    public get ruleIndex(): number {
    	return StellaParser.RULE_start_ParamDecl;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterStart_ParamDecl) {
	 		listener.enterStart_ParamDecl(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitStart_ParamDecl) {
	 		listener.exitStart_ParamDecl(this);
		}
	}
}


export class Start_ListParamDeclContext extends ParserRuleContext {
	constructor(parser?: StellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public listParamDecl(): ListParamDeclContext {
		return this.getTypedRuleContext(ListParamDeclContext, 0) as ListParamDeclContext;
	}
	public EOF(): TerminalNode {
		return this.getToken(StellaParser.EOF, 0);
	}
    public get ruleIndex(): number {
    	return StellaParser.RULE_start_ListParamDecl;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterStart_ListParamDecl) {
	 		listener.enterStart_ListParamDecl(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitStart_ListParamDecl) {
	 		listener.exitStart_ListParamDecl(this);
		}
	}
}


export class Start_ReturnTypeContext extends ParserRuleContext {
	constructor(parser?: StellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public returnType(): ReturnTypeContext {
		return this.getTypedRuleContext(ReturnTypeContext, 0) as ReturnTypeContext;
	}
	public EOF(): TerminalNode {
		return this.getToken(StellaParser.EOF, 0);
	}
    public get ruleIndex(): number {
    	return StellaParser.RULE_start_ReturnType;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterStart_ReturnType) {
	 		listener.enterStart_ReturnType(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitStart_ReturnType) {
	 		listener.exitStart_ReturnType(this);
		}
	}
}


export class Start_ThrowTypeContext extends ParserRuleContext {
	constructor(parser?: StellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public throwType(): ThrowTypeContext {
		return this.getTypedRuleContext(ThrowTypeContext, 0) as ThrowTypeContext;
	}
	public EOF(): TerminalNode {
		return this.getToken(StellaParser.EOF, 0);
	}
    public get ruleIndex(): number {
    	return StellaParser.RULE_start_ThrowType;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterStart_ThrowType) {
	 		listener.enterStart_ThrowType(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitStart_ThrowType) {
	 		listener.exitStart_ThrowType(this);
		}
	}
}


export class Start_Type9Context extends ParserRuleContext {
	constructor(parser?: StellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public type9(): Type9Context {
		return this.getTypedRuleContext(Type9Context, 0) as Type9Context;
	}
	public EOF(): TerminalNode {
		return this.getToken(StellaParser.EOF, 0);
	}
    public get ruleIndex(): number {
    	return StellaParser.RULE_start_Type9;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterStart_Type9) {
	 		listener.enterStart_Type9(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitStart_Type9) {
	 		listener.exitStart_Type9(this);
		}
	}
}


export class Start_ListType9Context extends ParserRuleContext {
	constructor(parser?: StellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public listType9(): ListType9Context {
		return this.getTypedRuleContext(ListType9Context, 0) as ListType9Context;
	}
	public EOF(): TerminalNode {
		return this.getToken(StellaParser.EOF, 0);
	}
    public get ruleIndex(): number {
    	return StellaParser.RULE_start_ListType9;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterStart_ListType9) {
	 		listener.enterStart_ListType9(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitStart_ListType9) {
	 		listener.exitStart_ListType9(this);
		}
	}
}


export class Start_MatchCaseContext extends ParserRuleContext {
	constructor(parser?: StellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public matchCase(): MatchCaseContext {
		return this.getTypedRuleContext(MatchCaseContext, 0) as MatchCaseContext;
	}
	public EOF(): TerminalNode {
		return this.getToken(StellaParser.EOF, 0);
	}
    public get ruleIndex(): number {
    	return StellaParser.RULE_start_MatchCase;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterStart_MatchCase) {
	 		listener.enterStart_MatchCase(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitStart_MatchCase) {
	 		listener.exitStart_MatchCase(this);
		}
	}
}


export class Start_ListMatchCaseContext extends ParserRuleContext {
	constructor(parser?: StellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public listMatchCase(): ListMatchCaseContext {
		return this.getTypedRuleContext(ListMatchCaseContext, 0) as ListMatchCaseContext;
	}
	public EOF(): TerminalNode {
		return this.getToken(StellaParser.EOF, 0);
	}
    public get ruleIndex(): number {
    	return StellaParser.RULE_start_ListMatchCase;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterStart_ListMatchCase) {
	 		listener.enterStart_ListMatchCase(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitStart_ListMatchCase) {
	 		listener.exitStart_ListMatchCase(this);
		}
	}
}


export class Start_OptionalTypingContext extends ParserRuleContext {
	constructor(parser?: StellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public optionalTyping(): OptionalTypingContext {
		return this.getTypedRuleContext(OptionalTypingContext, 0) as OptionalTypingContext;
	}
	public EOF(): TerminalNode {
		return this.getToken(StellaParser.EOF, 0);
	}
    public get ruleIndex(): number {
    	return StellaParser.RULE_start_OptionalTyping;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterStart_OptionalTyping) {
	 		listener.enterStart_OptionalTyping(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitStart_OptionalTyping) {
	 		listener.exitStart_OptionalTyping(this);
		}
	}
}


export class Start_PatternDataContext extends ParserRuleContext {
	constructor(parser?: StellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public patternData(): PatternDataContext {
		return this.getTypedRuleContext(PatternDataContext, 0) as PatternDataContext;
	}
	public EOF(): TerminalNode {
		return this.getToken(StellaParser.EOF, 0);
	}
    public get ruleIndex(): number {
    	return StellaParser.RULE_start_PatternData;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterStart_PatternData) {
	 		listener.enterStart_PatternData(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitStart_PatternData) {
	 		listener.exitStart_PatternData(this);
		}
	}
}


export class Start_ExprDataContext extends ParserRuleContext {
	constructor(parser?: StellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public exprData(): ExprDataContext {
		return this.getTypedRuleContext(ExprDataContext, 0) as ExprDataContext;
	}
	public EOF(): TerminalNode {
		return this.getToken(StellaParser.EOF, 0);
	}
    public get ruleIndex(): number {
    	return StellaParser.RULE_start_ExprData;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterStart_ExprData) {
	 		listener.enterStart_ExprData(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitStart_ExprData) {
	 		listener.exitStart_ExprData(this);
		}
	}
}


export class Start_PatternContext extends ParserRuleContext {
	constructor(parser?: StellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public pattern(): PatternContext {
		return this.getTypedRuleContext(PatternContext, 0) as PatternContext;
	}
	public EOF(): TerminalNode {
		return this.getToken(StellaParser.EOF, 0);
	}
    public get ruleIndex(): number {
    	return StellaParser.RULE_start_Pattern;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterStart_Pattern) {
	 		listener.enterStart_Pattern(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitStart_Pattern) {
	 		listener.exitStart_Pattern(this);
		}
	}
}


export class Start_ListPatternContext extends ParserRuleContext {
	constructor(parser?: StellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public listPattern(): ListPatternContext {
		return this.getTypedRuleContext(ListPatternContext, 0) as ListPatternContext;
	}
	public EOF(): TerminalNode {
		return this.getToken(StellaParser.EOF, 0);
	}
    public get ruleIndex(): number {
    	return StellaParser.RULE_start_ListPattern;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterStart_ListPattern) {
	 		listener.enterStart_ListPattern(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitStart_ListPattern) {
	 		listener.exitStart_ListPattern(this);
		}
	}
}


export class Start_LabelledPatternContext extends ParserRuleContext {
	constructor(parser?: StellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public labelledPattern(): LabelledPatternContext {
		return this.getTypedRuleContext(LabelledPatternContext, 0) as LabelledPatternContext;
	}
	public EOF(): TerminalNode {
		return this.getToken(StellaParser.EOF, 0);
	}
    public get ruleIndex(): number {
    	return StellaParser.RULE_start_LabelledPattern;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterStart_LabelledPattern) {
	 		listener.enterStart_LabelledPattern(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitStart_LabelledPattern) {
	 		listener.exitStart_LabelledPattern(this);
		}
	}
}


export class Start_ListLabelledPatternContext extends ParserRuleContext {
	constructor(parser?: StellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public listLabelledPattern(): ListLabelledPatternContext {
		return this.getTypedRuleContext(ListLabelledPatternContext, 0) as ListLabelledPatternContext;
	}
	public EOF(): TerminalNode {
		return this.getToken(StellaParser.EOF, 0);
	}
    public get ruleIndex(): number {
    	return StellaParser.RULE_start_ListLabelledPattern;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterStart_ListLabelledPattern) {
	 		listener.enterStart_ListLabelledPattern(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitStart_ListLabelledPattern) {
	 		listener.exitStart_ListLabelledPattern(this);
		}
	}
}


export class Start_BindingContext extends ParserRuleContext {
	constructor(parser?: StellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public binding(): BindingContext {
		return this.getTypedRuleContext(BindingContext, 0) as BindingContext;
	}
	public EOF(): TerminalNode {
		return this.getToken(StellaParser.EOF, 0);
	}
    public get ruleIndex(): number {
    	return StellaParser.RULE_start_Binding;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterStart_Binding) {
	 		listener.enterStart_Binding(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitStart_Binding) {
	 		listener.exitStart_Binding(this);
		}
	}
}


export class Start_ListBindingContext extends ParserRuleContext {
	constructor(parser?: StellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public listBinding(): ListBindingContext {
		return this.getTypedRuleContext(ListBindingContext, 0) as ListBindingContext;
	}
	public EOF(): TerminalNode {
		return this.getToken(StellaParser.EOF, 0);
	}
    public get ruleIndex(): number {
    	return StellaParser.RULE_start_ListBinding;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterStart_ListBinding) {
	 		listener.enterStart_ListBinding(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitStart_ListBinding) {
	 		listener.exitStart_ListBinding(this);
		}
	}
}


export class Start_ExprContext extends ParserRuleContext {
	constructor(parser?: StellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public EOF(): TerminalNode {
		return this.getToken(StellaParser.EOF, 0);
	}
    public get ruleIndex(): number {
    	return StellaParser.RULE_start_Expr;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterStart_Expr) {
	 		listener.enterStart_Expr(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitStart_Expr) {
	 		listener.exitStart_Expr(this);
		}
	}
}


export class Start_ListExprContext extends ParserRuleContext {
	constructor(parser?: StellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public listExpr(): ListExprContext {
		return this.getTypedRuleContext(ListExprContext, 0) as ListExprContext;
	}
	public EOF(): TerminalNode {
		return this.getToken(StellaParser.EOF, 0);
	}
    public get ruleIndex(): number {
    	return StellaParser.RULE_start_ListExpr;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterStart_ListExpr) {
	 		listener.enterStart_ListExpr(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitStart_ListExpr) {
	 		listener.exitStart_ListExpr(this);
		}
	}
}


export class Start_Expr1Context extends ParserRuleContext {
	constructor(parser?: StellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expr1(): Expr1Context {
		return this.getTypedRuleContext(Expr1Context, 0) as Expr1Context;
	}
	public EOF(): TerminalNode {
		return this.getToken(StellaParser.EOF, 0);
	}
    public get ruleIndex(): number {
    	return StellaParser.RULE_start_Expr1;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterStart_Expr1) {
	 		listener.enterStart_Expr1(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitStart_Expr1) {
	 		listener.exitStart_Expr1(this);
		}
	}
}


export class Start_PatternBindingContext extends ParserRuleContext {
	constructor(parser?: StellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public patternBinding(): PatternBindingContext {
		return this.getTypedRuleContext(PatternBindingContext, 0) as PatternBindingContext;
	}
	public EOF(): TerminalNode {
		return this.getToken(StellaParser.EOF, 0);
	}
    public get ruleIndex(): number {
    	return StellaParser.RULE_start_PatternBinding;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterStart_PatternBinding) {
	 		listener.enterStart_PatternBinding(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitStart_PatternBinding) {
	 		listener.exitStart_PatternBinding(this);
		}
	}
}


export class Start_ListPatternBindingContext extends ParserRuleContext {
	constructor(parser?: StellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public listPatternBinding(): ListPatternBindingContext {
		return this.getTypedRuleContext(ListPatternBindingContext, 0) as ListPatternBindingContext;
	}
	public EOF(): TerminalNode {
		return this.getToken(StellaParser.EOF, 0);
	}
    public get ruleIndex(): number {
    	return StellaParser.RULE_start_ListPatternBinding;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterStart_ListPatternBinding) {
	 		listener.enterStart_ListPatternBinding(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitStart_ListPatternBinding) {
	 		listener.exitStart_ListPatternBinding(this);
		}
	}
}


export class Start_Expr2Context extends ParserRuleContext {
	constructor(parser?: StellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expr2(): Expr2Context {
		return this.getTypedRuleContext(Expr2Context, 0) as Expr2Context;
	}
	public EOF(): TerminalNode {
		return this.getToken(StellaParser.EOF, 0);
	}
    public get ruleIndex(): number {
    	return StellaParser.RULE_start_Expr2;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterStart_Expr2) {
	 		listener.enterStart_Expr2(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitStart_Expr2) {
	 		listener.exitStart_Expr2(this);
		}
	}
}


export class Start_ListExpr2Context extends ParserRuleContext {
	constructor(parser?: StellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public listExpr2(): ListExpr2Context {
		return this.getTypedRuleContext(ListExpr2Context, 0) as ListExpr2Context;
	}
	public EOF(): TerminalNode {
		return this.getToken(StellaParser.EOF, 0);
	}
    public get ruleIndex(): number {
    	return StellaParser.RULE_start_ListExpr2;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterStart_ListExpr2) {
	 		listener.enterStart_ListExpr2(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitStart_ListExpr2) {
	 		listener.exitStart_ListExpr2(this);
		}
	}
}


export class Start_Expr3Context extends ParserRuleContext {
	constructor(parser?: StellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expr3(): Expr3Context {
		return this.getTypedRuleContext(Expr3Context, 0) as Expr3Context;
	}
	public EOF(): TerminalNode {
		return this.getToken(StellaParser.EOF, 0);
	}
    public get ruleIndex(): number {
    	return StellaParser.RULE_start_Expr3;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterStart_Expr3) {
	 		listener.enterStart_Expr3(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitStart_Expr3) {
	 		listener.exitStart_Expr3(this);
		}
	}
}


export class Start_Expr4Context extends ParserRuleContext {
	constructor(parser?: StellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expr4(): Expr4Context {
		return this.getTypedRuleContext(Expr4Context, 0) as Expr4Context;
	}
	public EOF(): TerminalNode {
		return this.getToken(StellaParser.EOF, 0);
	}
    public get ruleIndex(): number {
    	return StellaParser.RULE_start_Expr4;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterStart_Expr4) {
	 		listener.enterStart_Expr4(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitStart_Expr4) {
	 		listener.exitStart_Expr4(this);
		}
	}
}


export class Start_Expr5Context extends ParserRuleContext {
	constructor(parser?: StellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expr5(): Expr5Context {
		return this.getTypedRuleContext(Expr5Context, 0) as Expr5Context;
	}
	public EOF(): TerminalNode {
		return this.getToken(StellaParser.EOF, 0);
	}
    public get ruleIndex(): number {
    	return StellaParser.RULE_start_Expr5;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterStart_Expr5) {
	 		listener.enterStart_Expr5(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitStart_Expr5) {
	 		listener.exitStart_Expr5(this);
		}
	}
}


export class Start_Expr6Context extends ParserRuleContext {
	constructor(parser?: StellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expr6(): Expr6Context {
		return this.getTypedRuleContext(Expr6Context, 0) as Expr6Context;
	}
	public EOF(): TerminalNode {
		return this.getToken(StellaParser.EOF, 0);
	}
    public get ruleIndex(): number {
    	return StellaParser.RULE_start_Expr6;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterStart_Expr6) {
	 		listener.enterStart_Expr6(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitStart_Expr6) {
	 		listener.exitStart_Expr6(this);
		}
	}
}


export class Start_Expr7Context extends ParserRuleContext {
	constructor(parser?: StellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expr7(): Expr7Context {
		return this.getTypedRuleContext(Expr7Context, 0) as Expr7Context;
	}
	public EOF(): TerminalNode {
		return this.getToken(StellaParser.EOF, 0);
	}
    public get ruleIndex(): number {
    	return StellaParser.RULE_start_Expr7;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterStart_Expr7) {
	 		listener.enterStart_Expr7(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitStart_Expr7) {
	 		listener.exitStart_Expr7(this);
		}
	}
}


export class Start_TypeContext extends ParserRuleContext {
	constructor(parser?: StellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public type_(): TypeContext {
		return this.getTypedRuleContext(TypeContext, 0) as TypeContext;
	}
	public EOF(): TerminalNode {
		return this.getToken(StellaParser.EOF, 0);
	}
    public get ruleIndex(): number {
    	return StellaParser.RULE_start_Type;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterStart_Type) {
	 		listener.enterStart_Type(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitStart_Type) {
	 		listener.exitStart_Type(this);
		}
	}
}


export class Start_Type1Context extends ParserRuleContext {
	constructor(parser?: StellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public type1(): Type1Context {
		return this.getTypedRuleContext(Type1Context, 0) as Type1Context;
	}
	public EOF(): TerminalNode {
		return this.getToken(StellaParser.EOF, 0);
	}
    public get ruleIndex(): number {
    	return StellaParser.RULE_start_Type1;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterStart_Type1) {
	 		listener.enterStart_Type1(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitStart_Type1) {
	 		listener.exitStart_Type1(this);
		}
	}
}


export class Start_Type2Context extends ParserRuleContext {
	constructor(parser?: StellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public type2(): Type2Context {
		return this.getTypedRuleContext(Type2Context, 0) as Type2Context;
	}
	public EOF(): TerminalNode {
		return this.getToken(StellaParser.EOF, 0);
	}
    public get ruleIndex(): number {
    	return StellaParser.RULE_start_Type2;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterStart_Type2) {
	 		listener.enterStart_Type2(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitStart_Type2) {
	 		listener.exitStart_Type2(this);
		}
	}
}


export class Start_Type3Context extends ParserRuleContext {
	constructor(parser?: StellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public type3(): Type3Context {
		return this.getTypedRuleContext(Type3Context, 0) as Type3Context;
	}
	public EOF(): TerminalNode {
		return this.getToken(StellaParser.EOF, 0);
	}
    public get ruleIndex(): number {
    	return StellaParser.RULE_start_Type3;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterStart_Type3) {
	 		listener.enterStart_Type3(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitStart_Type3) {
	 		listener.exitStart_Type3(this);
		}
	}
}


export class Start_ListTypeContext extends ParserRuleContext {
	constructor(parser?: StellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public listType(): ListTypeContext {
		return this.getTypedRuleContext(ListTypeContext, 0) as ListTypeContext;
	}
	public EOF(): TerminalNode {
		return this.getToken(StellaParser.EOF, 0);
	}
    public get ruleIndex(): number {
    	return StellaParser.RULE_start_ListType;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterStart_ListType) {
	 		listener.enterStart_ListType(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitStart_ListType) {
	 		listener.exitStart_ListType(this);
		}
	}
}


export class Start_VariantFieldTypeContext extends ParserRuleContext {
	constructor(parser?: StellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public variantFieldType(): VariantFieldTypeContext {
		return this.getTypedRuleContext(VariantFieldTypeContext, 0) as VariantFieldTypeContext;
	}
	public EOF(): TerminalNode {
		return this.getToken(StellaParser.EOF, 0);
	}
    public get ruleIndex(): number {
    	return StellaParser.RULE_start_VariantFieldType;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterStart_VariantFieldType) {
	 		listener.enterStart_VariantFieldType(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitStart_VariantFieldType) {
	 		listener.exitStart_VariantFieldType(this);
		}
	}
}


export class Start_ListVariantFieldTypeContext extends ParserRuleContext {
	constructor(parser?: StellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public listVariantFieldType(): ListVariantFieldTypeContext {
		return this.getTypedRuleContext(ListVariantFieldTypeContext, 0) as ListVariantFieldTypeContext;
	}
	public EOF(): TerminalNode {
		return this.getToken(StellaParser.EOF, 0);
	}
    public get ruleIndex(): number {
    	return StellaParser.RULE_start_ListVariantFieldType;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterStart_ListVariantFieldType) {
	 		listener.enterStart_ListVariantFieldType(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitStart_ListVariantFieldType) {
	 		listener.exitStart_ListVariantFieldType(this);
		}
	}
}


export class Start_RecordFieldTypeContext extends ParserRuleContext {
	constructor(parser?: StellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public recordFieldType(): RecordFieldTypeContext {
		return this.getTypedRuleContext(RecordFieldTypeContext, 0) as RecordFieldTypeContext;
	}
	public EOF(): TerminalNode {
		return this.getToken(StellaParser.EOF, 0);
	}
    public get ruleIndex(): number {
    	return StellaParser.RULE_start_RecordFieldType;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterStart_RecordFieldType) {
	 		listener.enterStart_RecordFieldType(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitStart_RecordFieldType) {
	 		listener.exitStart_RecordFieldType(this);
		}
	}
}


export class Start_ListRecordFieldTypeContext extends ParserRuleContext {
	constructor(parser?: StellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public listRecordFieldType(): ListRecordFieldTypeContext {
		return this.getTypedRuleContext(ListRecordFieldTypeContext, 0) as ListRecordFieldTypeContext;
	}
	public EOF(): TerminalNode {
		return this.getToken(StellaParser.EOF, 0);
	}
    public get ruleIndex(): number {
    	return StellaParser.RULE_start_ListRecordFieldType;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterStart_ListRecordFieldType) {
	 		listener.enterStart_ListRecordFieldType(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitStart_ListRecordFieldType) {
	 		listener.exitStart_ListRecordFieldType(this);
		}
	}
}


export class Start_TypingContext extends ParserRuleContext {
	constructor(parser?: StellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public typing(): TypingContext {
		return this.getTypedRuleContext(TypingContext, 0) as TypingContext;
	}
	public EOF(): TerminalNode {
		return this.getToken(StellaParser.EOF, 0);
	}
    public get ruleIndex(): number {
    	return StellaParser.RULE_start_Typing;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterStart_Typing) {
	 		listener.enterStart_Typing(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitStart_Typing) {
	 		listener.exitStart_Typing(this);
		}
	}
}


export class ProgramContext extends ParserRuleContext {
	constructor(parser?: StellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return StellaParser.RULE_program;
	}
	public copyFrom(ctx: ProgramContext): void {
		super.copyFrom(ctx);
	}
}
export class AProgramContext extends ProgramContext {
	public _p_1_1!: LanguageDeclContext;
	public _p_1_2!: ListExtensionContext;
	public _p_1_3!: ListDeclContext;
	constructor(parser: StellaParser, ctx: ProgramContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public languageDecl(): LanguageDeclContext {
		return this.getTypedRuleContext(LanguageDeclContext, 0) as LanguageDeclContext;
	}
	public listExtension(): ListExtensionContext {
		return this.getTypedRuleContext(ListExtensionContext, 0) as ListExtensionContext;
	}
	public listDecl(): ListDeclContext {
		return this.getTypedRuleContext(ListDeclContext, 0) as ListDeclContext;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterAProgram) {
	 		listener.enterAProgram(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitAProgram) {
	 		listener.exitAProgram(this);
		}
	}
}


export class ListStellaIdentContext extends ParserRuleContext {
	constructor(parser?: StellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return StellaParser.RULE_listStellaIdent;
	}
	public copyFrom(ctx: ListStellaIdentContext): void {
		super.copyFrom(ctx);
	}
}
export class ListStellaIdent_PrependFirstContext extends ListStellaIdentContext {
	public _p_3_1!: Token;
	public _p_3_3!: ListStellaIdentContext;
	constructor(parser: StellaParser, ctx: ListStellaIdentContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_0(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_0, 0);
	}
	public StellaIdent(): TerminalNode {
		return this.getToken(StellaParser.StellaIdent, 0);
	}
	public listStellaIdent(): ListStellaIdentContext {
		return this.getTypedRuleContext(ListStellaIdentContext, 0) as ListStellaIdentContext;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterListStellaIdent_PrependFirst) {
	 		listener.enterListStellaIdent_PrependFirst(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitListStellaIdent_PrependFirst) {
	 		listener.exitListStellaIdent_PrependFirst(this);
		}
	}
}
export class ListStellaIdent_EmptyContext extends ListStellaIdentContext {
	constructor(parser: StellaParser, ctx: ListStellaIdentContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterListStellaIdent_Empty) {
	 		listener.enterListStellaIdent_Empty(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitListStellaIdent_Empty) {
	 		listener.exitListStellaIdent_Empty(this);
		}
	}
}
export class ListStellaIdent_AppendLastContext extends ListStellaIdentContext {
	public _p_2_1!: Token;
	constructor(parser: StellaParser, ctx: ListStellaIdentContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public StellaIdent(): TerminalNode {
		return this.getToken(StellaParser.StellaIdent, 0);
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterListStellaIdent_AppendLast) {
	 		listener.enterListStellaIdent_AppendLast(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitListStellaIdent_AppendLast) {
	 		listener.exitListStellaIdent_AppendLast(this);
		}
	}
}


export class LanguageDeclContext extends ParserRuleContext {
	constructor(parser?: StellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return StellaParser.RULE_languageDecl;
	}
	public copyFrom(ctx: LanguageDeclContext): void {
		super.copyFrom(ctx);
	}
}
export class LanguageCoreContext extends LanguageDeclContext {
	constructor(parser: StellaParser, ctx: LanguageDeclContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_61(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_61, 0);
	}
	public Surrogate_id_SYMB_46(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_46, 0);
	}
	public Surrogate_id_SYMB_1(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_1, 0);
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterLanguageCore) {
	 		listener.enterLanguageCore(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitLanguageCore) {
	 		listener.exitLanguageCore(this);
		}
	}
}


export class ExtensionContext extends ParserRuleContext {
	constructor(parser?: StellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return StellaParser.RULE_extension;
	}
	public copyFrom(ctx: ExtensionContext): void {
		super.copyFrom(ctx);
	}
}
export class AnExtensionContext extends ExtensionContext {
	public _p_1_3!: ListExtensionNameContext;
	constructor(parser: StellaParser, ctx: ExtensionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_49(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_49, 0);
	}
	public Surrogate_id_SYMB_79(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_79, 0);
	}
	public listExtensionName(): ListExtensionNameContext {
		return this.getTypedRuleContext(ListExtensionNameContext, 0) as ListExtensionNameContext;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterAnExtension) {
	 		listener.enterAnExtension(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitAnExtension) {
	 		listener.exitAnExtension(this);
		}
	}
}


export class ListExtensionNameContext extends ParserRuleContext {
	constructor(parser?: StellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return StellaParser.RULE_listExtensionName;
	}
	public copyFrom(ctx: ListExtensionNameContext): void {
		super.copyFrom(ctx);
	}
}
export class ListExtensionName_PrependFirstContext extends ListExtensionNameContext {
	public _p_3_1!: Token;
	public _p_3_3!: ListExtensionNameContext;
	constructor(parser: StellaParser, ctx: ListExtensionNameContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_0(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_0, 0);
	}
	public ExtensionName(): TerminalNode {
		return this.getToken(StellaParser.ExtensionName, 0);
	}
	public listExtensionName(): ListExtensionNameContext {
		return this.getTypedRuleContext(ListExtensionNameContext, 0) as ListExtensionNameContext;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterListExtensionName_PrependFirst) {
	 		listener.enterListExtensionName_PrependFirst(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitListExtensionName_PrependFirst) {
	 		listener.exitListExtensionName_PrependFirst(this);
		}
	}
}
export class ListExtensionName_AppendLastContext extends ListExtensionNameContext {
	public _p_2_1!: Token;
	constructor(parser: StellaParser, ctx: ListExtensionNameContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ExtensionName(): TerminalNode {
		return this.getToken(StellaParser.ExtensionName, 0);
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterListExtensionName_AppendLast) {
	 		listener.enterListExtensionName_AppendLast(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitListExtensionName_AppendLast) {
	 		listener.exitListExtensionName_AppendLast(this);
		}
	}
}
export class ListExtensionName_EmptyContext extends ListExtensionNameContext {
	constructor(parser: StellaParser, ctx: ListExtensionNameContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterListExtensionName_Empty) {
	 		listener.enterListExtensionName_Empty(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitListExtensionName_Empty) {
	 		listener.exitListExtensionName_Empty(this);
		}
	}
}


export class ListExtensionContext extends ParserRuleContext {
	constructor(parser?: StellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return StellaParser.RULE_listExtension;
	}
	public copyFrom(ctx: ListExtensionContext): void {
		super.copyFrom(ctx);
	}
}
export class ListExtension_PrependFirstContext extends ListExtensionContext {
	public _p_2_1!: ListExtensionContext;
	public _p_2_2!: ExtensionContext;
	constructor(parser: StellaParser, ctx: ListExtensionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_1(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_1, 0);
	}
	public listExtension(): ListExtensionContext {
		return this.getTypedRuleContext(ListExtensionContext, 0) as ListExtensionContext;
	}
	public extension(): ExtensionContext {
		return this.getTypedRuleContext(ExtensionContext, 0) as ExtensionContext;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterListExtension_PrependFirst) {
	 		listener.enterListExtension_PrependFirst(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitListExtension_PrependFirst) {
	 		listener.exitListExtension_PrependFirst(this);
		}
	}
}
export class ListExtension_EmptyContext extends ListExtensionContext {
	constructor(parser: StellaParser, ctx: ListExtensionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterListExtension_Empty) {
	 		listener.enterListExtension_Empty(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitListExtension_Empty) {
	 		listener.exitListExtension_Empty(this);
		}
	}
}


export class DeclContext extends ParserRuleContext {
	constructor(parser?: StellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return StellaParser.RULE_decl;
	}
	public copyFrom(ctx: DeclContext): void {
		super.copyFrom(ctx);
	}
}
export class DeclTypeAliasContext extends DeclContext {
	public _p_3_2!: Token;
	public _p_3_4!: TypeContext;
	constructor(parser: StellaParser, ctx: DeclContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_75(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_75, 0);
	}
	public Surrogate_id_SYMB_8(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_8, 0);
	}
	public StellaIdent(): TerminalNode {
		return this.getToken(StellaParser.StellaIdent, 0);
	}
	public type_(): TypeContext {
		return this.getTypedRuleContext(TypeContext, 0) as TypeContext;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterDeclTypeAlias) {
	 		listener.enterDeclTypeAlias(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitDeclTypeAlias) {
	 		listener.exitDeclTypeAlias(this);
		}
	}
}
export class DeclExceptionTypeContext extends DeclContext {
	public _p_4_4!: TypeContext;
	constructor(parser: StellaParser, ctx: DeclContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_48(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_48, 0);
	}
	public Surrogate_id_SYMB_75(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_75, 0);
	}
	public Surrogate_id_SYMB_8(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_8, 0);
	}
	public type_(): TypeContext {
		return this.getTypedRuleContext(TypeContext, 0) as TypeContext;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterDeclExceptionType) {
	 		listener.enterDeclExceptionType(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitDeclExceptionType) {
	 		listener.exitDeclExceptionType(this);
		}
	}
}
export class DeclFunContext extends DeclContext {
	public _p_1_1!: ListAnnotationContext;
	public _p_1_3!: Token;
	public _p_1_5!: ListParamDeclContext;
	public _p_1_7!: ReturnTypeContext;
	public _p_1_8!: ThrowTypeContext;
	public _p_1_10!: ListDeclContext;
	public _p_1_12!: ExprContext;
	constructor(parser: StellaParser, ctx: DeclContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_52(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_52, 0);
	}
	public Surrogate_id_SYMB_2(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_2, 0);
	}
	public Surrogate_id_SYMB_3(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_3, 0);
	}
	public Surrogate_id_SYMB_4(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_4, 0);
	}
	public Surrogate_id_SYMB_68(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_68, 0);
	}
	public Surrogate_id_SYMB_5(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_5, 0);
	}
	public listAnnotation(): ListAnnotationContext {
		return this.getTypedRuleContext(ListAnnotationContext, 0) as ListAnnotationContext;
	}
	public StellaIdent(): TerminalNode {
		return this.getToken(StellaParser.StellaIdent, 0);
	}
	public listParamDecl(): ListParamDeclContext {
		return this.getTypedRuleContext(ListParamDeclContext, 0) as ListParamDeclContext;
	}
	public returnType(): ReturnTypeContext {
		return this.getTypedRuleContext(ReturnTypeContext, 0) as ReturnTypeContext;
	}
	public throwType(): ThrowTypeContext {
		return this.getTypedRuleContext(ThrowTypeContext, 0) as ThrowTypeContext;
	}
	public listDecl(): ListDeclContext {
		return this.getTypedRuleContext(ListDeclContext, 0) as ListDeclContext;
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterDeclFun) {
	 		listener.enterDeclFun(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitDeclFun) {
	 		listener.exitDeclFun(this);
		}
	}
}
export class DeclExceptionVariantContext extends DeclContext {
	public _p_5_3!: Token;
	public _p_5_5!: TypeContext;
	constructor(parser: StellaParser, ctx: DeclContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_48(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_48, 0);
	}
	public Surrogate_id_SYMB_78(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_78, 0);
	}
	public Surrogate_id_SYMB_9(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_9, 0);
	}
	public StellaIdent(): TerminalNode {
		return this.getToken(StellaParser.StellaIdent, 0);
	}
	public type_(): TypeContext {
		return this.getTypedRuleContext(TypeContext, 0) as TypeContext;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterDeclExceptionVariant) {
	 		listener.enterDeclExceptionVariant(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitDeclExceptionVariant) {
	 		listener.exitDeclExceptionVariant(this);
		}
	}
}
export class DeclFunGenericContext extends DeclContext {
	public _p_2_1!: ListAnnotationContext;
	public _p_2_4!: Token;
	public _p_2_6!: ListStellaIdentContext;
	public _p_2_9!: ListParamDeclContext;
	public _p_2_11!: ReturnTypeContext;
	public _p_2_12!: ThrowTypeContext;
	public _p_2_14!: ListDeclContext;
	public _p_2_16!: ExprContext;
	constructor(parser: StellaParser, ctx: DeclContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_55(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_55, 0);
	}
	public Surrogate_id_SYMB_52(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_52, 0);
	}
	public Surrogate_id_SYMB_6(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_6, 0);
	}
	public Surrogate_id_SYMB_7(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_7, 0);
	}
	public Surrogate_id_SYMB_2(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_2, 0);
	}
	public Surrogate_id_SYMB_3(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_3, 0);
	}
	public Surrogate_id_SYMB_4(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_4, 0);
	}
	public Surrogate_id_SYMB_68(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_68, 0);
	}
	public Surrogate_id_SYMB_5(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_5, 0);
	}
	public listAnnotation(): ListAnnotationContext {
		return this.getTypedRuleContext(ListAnnotationContext, 0) as ListAnnotationContext;
	}
	public StellaIdent(): TerminalNode {
		return this.getToken(StellaParser.StellaIdent, 0);
	}
	public listStellaIdent(): ListStellaIdentContext {
		return this.getTypedRuleContext(ListStellaIdentContext, 0) as ListStellaIdentContext;
	}
	public listParamDecl(): ListParamDeclContext {
		return this.getTypedRuleContext(ListParamDeclContext, 0) as ListParamDeclContext;
	}
	public returnType(): ReturnTypeContext {
		return this.getTypedRuleContext(ReturnTypeContext, 0) as ReturnTypeContext;
	}
	public throwType(): ThrowTypeContext {
		return this.getTypedRuleContext(ThrowTypeContext, 0) as ThrowTypeContext;
	}
	public listDecl(): ListDeclContext {
		return this.getTypedRuleContext(ListDeclContext, 0) as ListDeclContext;
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterDeclFunGeneric) {
	 		listener.enterDeclFunGeneric(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitDeclFunGeneric) {
	 		listener.exitDeclFunGeneric(this);
		}
	}
}


export class ListDeclContext extends ParserRuleContext {
	constructor(parser?: StellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return StellaParser.RULE_listDecl;
	}
	public copyFrom(ctx: ListDeclContext): void {
		super.copyFrom(ctx);
	}
}
export class ListDecl_EmptyContext extends ListDeclContext {
	constructor(parser: StellaParser, ctx: ListDeclContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterListDecl_Empty) {
	 		listener.enterListDecl_Empty(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitListDecl_Empty) {
	 		listener.exitListDecl_Empty(this);
		}
	}
}
export class ListDecl_PrependFirstContext extends ListDeclContext {
	public _p_2_1!: ListDeclContext;
	public _p_2_2!: DeclContext;
	constructor(parser: StellaParser, ctx: ListDeclContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public listDecl(): ListDeclContext {
		return this.getTypedRuleContext(ListDeclContext, 0) as ListDeclContext;
	}
	public decl(): DeclContext {
		return this.getTypedRuleContext(DeclContext, 0) as DeclContext;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterListDecl_PrependFirst) {
	 		listener.enterListDecl_PrependFirst(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitListDecl_PrependFirst) {
	 		listener.exitListDecl_PrependFirst(this);
		}
	}
}


export class LocalDeclContext extends ParserRuleContext {
	constructor(parser?: StellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return StellaParser.RULE_localDecl;
	}
	public copyFrom(ctx: LocalDeclContext): void {
		super.copyFrom(ctx);
	}
}
export class ALocalDeclContext extends LocalDeclContext {
	public _p_1_1!: DeclContext;
	constructor(parser: StellaParser, ctx: LocalDeclContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public decl(): DeclContext {
		return this.getTypedRuleContext(DeclContext, 0) as DeclContext;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterALocalDecl) {
	 		listener.enterALocalDecl(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitALocalDecl) {
	 		listener.exitALocalDecl(this);
		}
	}
}


export class ListLocalDeclContext extends ParserRuleContext {
	constructor(parser?: StellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return StellaParser.RULE_listLocalDecl;
	}
	public copyFrom(ctx: ListLocalDeclContext): void {
		super.copyFrom(ctx);
	}
}
export class ListLocalDecl_EmptyContext extends ListLocalDeclContext {
	constructor(parser: StellaParser, ctx: ListLocalDeclContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterListLocalDecl_Empty) {
	 		listener.enterListLocalDecl_Empty(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitListLocalDecl_Empty) {
	 		listener.exitListLocalDecl_Empty(this);
		}
	}
}
export class ListLocalDecl_PrependFirstContext extends ListLocalDeclContext {
	public _p_2_1!: ListLocalDeclContext;
	public _p_2_2!: LocalDeclContext;
	constructor(parser: StellaParser, ctx: ListLocalDeclContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_1(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_1, 0);
	}
	public listLocalDecl(): ListLocalDeclContext {
		return this.getTypedRuleContext(ListLocalDeclContext, 0) as ListLocalDeclContext;
	}
	public localDecl(): LocalDeclContext {
		return this.getTypedRuleContext(LocalDeclContext, 0) as LocalDeclContext;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterListLocalDecl_PrependFirst) {
	 		listener.enterListLocalDecl_PrependFirst(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitListLocalDecl_PrependFirst) {
	 		listener.exitListLocalDecl_PrependFirst(this);
		}
	}
}


export class AnnotationContext extends ParserRuleContext {
	constructor(parser?: StellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return StellaParser.RULE_annotation;
	}
	public copyFrom(ctx: AnnotationContext): void {
		super.copyFrom(ctx);
	}
}
export class InlineAnnotationContext extends AnnotationContext {
	constructor(parser: StellaParser, ctx: AnnotationContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_59(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_59, 0);
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterInlineAnnotation) {
	 		listener.enterInlineAnnotation(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitInlineAnnotation) {
	 		listener.exitInlineAnnotation(this);
		}
	}
}


export class ListAnnotationContext extends ParserRuleContext {
	constructor(parser?: StellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return StellaParser.RULE_listAnnotation;
	}
	public copyFrom(ctx: ListAnnotationContext): void {
		super.copyFrom(ctx);
	}
}
export class ListAnnotation_PrependFirstContext extends ListAnnotationContext {
	public _p_2_1!: ListAnnotationContext;
	public _p_2_2!: AnnotationContext;
	constructor(parser: StellaParser, ctx: ListAnnotationContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public listAnnotation(): ListAnnotationContext {
		return this.getTypedRuleContext(ListAnnotationContext, 0) as ListAnnotationContext;
	}
	public annotation(): AnnotationContext {
		return this.getTypedRuleContext(AnnotationContext, 0) as AnnotationContext;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterListAnnotation_PrependFirst) {
	 		listener.enterListAnnotation_PrependFirst(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitListAnnotation_PrependFirst) {
	 		listener.exitListAnnotation_PrependFirst(this);
		}
	}
}
export class ListAnnotation_EmptyContext extends ListAnnotationContext {
	constructor(parser: StellaParser, ctx: ListAnnotationContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterListAnnotation_Empty) {
	 		listener.enterListAnnotation_Empty(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitListAnnotation_Empty) {
	 		listener.exitListAnnotation_Empty(this);
		}
	}
}


export class ParamDeclContext extends ParserRuleContext {
	constructor(parser?: StellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return StellaParser.RULE_paramDecl;
	}
	public copyFrom(ctx: ParamDeclContext): void {
		super.copyFrom(ctx);
	}
}
export class AParamDeclContext extends ParamDeclContext {
	public _p_1_1!: Token;
	public _p_1_3!: TypeContext;
	constructor(parser: StellaParser, ctx: ParamDeclContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_9(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_9, 0);
	}
	public StellaIdent(): TerminalNode {
		return this.getToken(StellaParser.StellaIdent, 0);
	}
	public type_(): TypeContext {
		return this.getTypedRuleContext(TypeContext, 0) as TypeContext;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterAParamDecl) {
	 		listener.enterAParamDecl(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitAParamDecl) {
	 		listener.exitAParamDecl(this);
		}
	}
}


export class ListParamDeclContext extends ParserRuleContext {
	constructor(parser?: StellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return StellaParser.RULE_listParamDecl;
	}
	public copyFrom(ctx: ListParamDeclContext): void {
		super.copyFrom(ctx);
	}
}
export class ListParamDecl_PrependFirstContext extends ListParamDeclContext {
	public _p_3_1!: ParamDeclContext;
	public _p_3_3!: ListParamDeclContext;
	constructor(parser: StellaParser, ctx: ListParamDeclContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_0(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_0, 0);
	}
	public paramDecl(): ParamDeclContext {
		return this.getTypedRuleContext(ParamDeclContext, 0) as ParamDeclContext;
	}
	public listParamDecl(): ListParamDeclContext {
		return this.getTypedRuleContext(ListParamDeclContext, 0) as ListParamDeclContext;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterListParamDecl_PrependFirst) {
	 		listener.enterListParamDecl_PrependFirst(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitListParamDecl_PrependFirst) {
	 		listener.exitListParamDecl_PrependFirst(this);
		}
	}
}
export class ListParamDecl_AppendLastContext extends ListParamDeclContext {
	public _p_2_1!: ParamDeclContext;
	constructor(parser: StellaParser, ctx: ListParamDeclContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public paramDecl(): ParamDeclContext {
		return this.getTypedRuleContext(ParamDeclContext, 0) as ParamDeclContext;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterListParamDecl_AppendLast) {
	 		listener.enterListParamDecl_AppendLast(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitListParamDecl_AppendLast) {
	 		listener.exitListParamDecl_AppendLast(this);
		}
	}
}
export class ListParamDecl_EmptyContext extends ListParamDeclContext {
	constructor(parser: StellaParser, ctx: ListParamDeclContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterListParamDecl_Empty) {
	 		listener.enterListParamDecl_Empty(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitListParamDecl_Empty) {
	 		listener.exitListParamDecl_Empty(this);
		}
	}
}


export class ReturnTypeContext extends ParserRuleContext {
	constructor(parser?: StellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return StellaParser.RULE_returnType;
	}
	public copyFrom(ctx: ReturnTypeContext): void {
		super.copyFrom(ctx);
	}
}
export class SomeReturnTypeContext extends ReturnTypeContext {
	public _p_2_2!: TypeContext;
	constructor(parser: StellaParser, ctx: ReturnTypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_10(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_10, 0);
	}
	public type_(): TypeContext {
		return this.getTypedRuleContext(TypeContext, 0) as TypeContext;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterSomeReturnType) {
	 		listener.enterSomeReturnType(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitSomeReturnType) {
	 		listener.exitSomeReturnType(this);
		}
	}
}
export class NoReturnTypeContext extends ReturnTypeContext {
	constructor(parser: StellaParser, ctx: ReturnTypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterNoReturnType) {
	 		listener.enterNoReturnType(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitNoReturnType) {
	 		listener.exitNoReturnType(this);
		}
	}
}


export class ThrowTypeContext extends ParserRuleContext {
	constructor(parser?: StellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return StellaParser.RULE_throwType;
	}
	public copyFrom(ctx: ThrowTypeContext): void {
		super.copyFrom(ctx);
	}
}
export class SomeThrowTypeContext extends ThrowTypeContext {
	public _p_2_2!: ListType9Context;
	constructor(parser: StellaParser, ctx: ThrowTypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_72(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_72, 0);
	}
	public listType9(): ListType9Context {
		return this.getTypedRuleContext(ListType9Context, 0) as ListType9Context;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterSomeThrowType) {
	 		listener.enterSomeThrowType(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitSomeThrowType) {
	 		listener.exitSomeThrowType(this);
		}
	}
}
export class NoThrowTypeContext extends ThrowTypeContext {
	constructor(parser: StellaParser, ctx: ThrowTypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterNoThrowType) {
	 		listener.enterNoThrowType(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitNoThrowType) {
	 		listener.exitNoThrowType(this);
		}
	}
}


export class Type9Context extends ParserRuleContext {
	constructor(parser?: StellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return StellaParser.RULE_type9;
	}
	public copyFrom(ctx: Type9Context): void {
		super.copyFrom(ctx);
	}
}
export class Coercion_Type9_1Context extends Type9Context {
	public _p_1_1!: TypeContext;
	constructor(parser: StellaParser, ctx: Type9Context) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public type_(): TypeContext {
		return this.getTypedRuleContext(TypeContext, 0) as TypeContext;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterCoercion_Type9_1) {
	 		listener.enterCoercion_Type9_1(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitCoercion_Type9_1) {
	 		listener.exitCoercion_Type9_1(this);
		}
	}
}


export class ListType9Context extends ParserRuleContext {
	constructor(parser?: StellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return StellaParser.RULE_listType9;
	}
	public copyFrom(ctx: ListType9Context): void {
		super.copyFrom(ctx);
	}
}
export class ListType9_PrependFirstContext extends ListType9Context {
	public _p_2_1!: Type9Context;
	public _p_2_3!: ListType9Context;
	constructor(parser: StellaParser, ctx: ListType9Context) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_0(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_0, 0);
	}
	public type9(): Type9Context {
		return this.getTypedRuleContext(Type9Context, 0) as Type9Context;
	}
	public listType9(): ListType9Context {
		return this.getTypedRuleContext(ListType9Context, 0) as ListType9Context;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterListType9_PrependFirst) {
	 		listener.enterListType9_PrependFirst(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitListType9_PrependFirst) {
	 		listener.exitListType9_PrependFirst(this);
		}
	}
}
export class ListType9_AppendLastContext extends ListType9Context {
	public _p_1_1!: Type9Context;
	constructor(parser: StellaParser, ctx: ListType9Context) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public type9(): Type9Context {
		return this.getTypedRuleContext(Type9Context, 0) as Type9Context;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterListType9_AppendLast) {
	 		listener.enterListType9_AppendLast(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitListType9_AppendLast) {
	 		listener.exitListType9_AppendLast(this);
		}
	}
}


export class MatchCaseContext extends ParserRuleContext {
	constructor(parser?: StellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return StellaParser.RULE_matchCase;
	}
	public copyFrom(ctx: MatchCaseContext): void {
		super.copyFrom(ctx);
	}
}
export class AMatchCaseContext extends MatchCaseContext {
	public _p_1_1!: PatternContext;
	public _p_1_3!: ExprContext;
	constructor(parser: StellaParser, ctx: MatchCaseContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_11(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_11, 0);
	}
	public pattern(): PatternContext {
		return this.getTypedRuleContext(PatternContext, 0) as PatternContext;
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterAMatchCase) {
	 		listener.enterAMatchCase(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitAMatchCase) {
	 		listener.exitAMatchCase(this);
		}
	}
}


export class ListMatchCaseContext extends ParserRuleContext {
	constructor(parser?: StellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return StellaParser.RULE_listMatchCase;
	}
	public copyFrom(ctx: ListMatchCaseContext): void {
		super.copyFrom(ctx);
	}
}
export class ListMatchCase_EmptyContext extends ListMatchCaseContext {
	constructor(parser: StellaParser, ctx: ListMatchCaseContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterListMatchCase_Empty) {
	 		listener.enterListMatchCase_Empty(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitListMatchCase_Empty) {
	 		listener.exitListMatchCase_Empty(this);
		}
	}
}
export class ListMatchCase_AppendLastContext extends ListMatchCaseContext {
	public _p_2_1!: MatchCaseContext;
	constructor(parser: StellaParser, ctx: ListMatchCaseContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public matchCase(): MatchCaseContext {
		return this.getTypedRuleContext(MatchCaseContext, 0) as MatchCaseContext;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterListMatchCase_AppendLast) {
	 		listener.enterListMatchCase_AppendLast(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitListMatchCase_AppendLast) {
	 		listener.exitListMatchCase_AppendLast(this);
		}
	}
}
export class ListMatchCase_PrependFirstContext extends ListMatchCaseContext {
	public _p_3_1!: MatchCaseContext;
	public _p_3_3!: ListMatchCaseContext;
	constructor(parser: StellaParser, ctx: ListMatchCaseContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_12(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_12, 0);
	}
	public matchCase(): MatchCaseContext {
		return this.getTypedRuleContext(MatchCaseContext, 0) as MatchCaseContext;
	}
	public listMatchCase(): ListMatchCaseContext {
		return this.getTypedRuleContext(ListMatchCaseContext, 0) as ListMatchCaseContext;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterListMatchCase_PrependFirst) {
	 		listener.enterListMatchCase_PrependFirst(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitListMatchCase_PrependFirst) {
	 		listener.exitListMatchCase_PrependFirst(this);
		}
	}
}


export class OptionalTypingContext extends ParserRuleContext {
	constructor(parser?: StellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return StellaParser.RULE_optionalTyping;
	}
	public copyFrom(ctx: OptionalTypingContext): void {
		super.copyFrom(ctx);
	}
}
export class NoTypingContext extends OptionalTypingContext {
	constructor(parser: StellaParser, ctx: OptionalTypingContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterNoTyping) {
	 		listener.enterNoTyping(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitNoTyping) {
	 		listener.exitNoTyping(this);
		}
	}
}
export class SomeTypingContext extends OptionalTypingContext {
	public _p_2_2!: TypeContext;
	constructor(parser: StellaParser, ctx: OptionalTypingContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_9(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_9, 0);
	}
	public type_(): TypeContext {
		return this.getTypedRuleContext(TypeContext, 0) as TypeContext;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterSomeTyping) {
	 		listener.enterSomeTyping(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitSomeTyping) {
	 		listener.exitSomeTyping(this);
		}
	}
}


export class PatternDataContext extends ParserRuleContext {
	constructor(parser?: StellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return StellaParser.RULE_patternData;
	}
	public copyFrom(ctx: PatternDataContext): void {
		super.copyFrom(ctx);
	}
}
export class SomePatternDataContext extends PatternDataContext {
	public _p_2_2!: PatternContext;
	constructor(parser: StellaParser, ctx: PatternDataContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_8(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_8, 0);
	}
	public pattern(): PatternContext {
		return this.getTypedRuleContext(PatternContext, 0) as PatternContext;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterSomePatternData) {
	 		listener.enterSomePatternData(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitSomePatternData) {
	 		listener.exitSomePatternData(this);
		}
	}
}
export class NoPatternDataContext extends PatternDataContext {
	constructor(parser: StellaParser, ctx: PatternDataContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterNoPatternData) {
	 		listener.enterNoPatternData(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitNoPatternData) {
	 		listener.exitNoPatternData(this);
		}
	}
}


export class ExprDataContext extends ParserRuleContext {
	constructor(parser?: StellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return StellaParser.RULE_exprData;
	}
	public copyFrom(ctx: ExprDataContext): void {
		super.copyFrom(ctx);
	}
}
export class SomeExprDataContext extends ExprDataContext {
	public _p_2_2!: ExprContext;
	constructor(parser: StellaParser, ctx: ExprDataContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_8(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_8, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterSomeExprData) {
	 		listener.enterSomeExprData(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitSomeExprData) {
	 		listener.exitSomeExprData(this);
		}
	}
}
export class NoExprDataContext extends ExprDataContext {
	constructor(parser: StellaParser, ctx: ExprDataContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterNoExprData) {
	 		listener.enterNoExprData(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitNoExprData) {
	 		listener.exitNoExprData(this);
		}
	}
}


export class PatternContext extends ParserRuleContext {
	constructor(parser?: StellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return StellaParser.RULE_pattern;
	}
	public copyFrom(ctx: PatternContext): void {
		super.copyFrom(ctx);
	}
}
export class PatternConsContext extends PatternContext {
	public _p_9_3!: PatternContext;
	public _p_9_5!: PatternContext;
	constructor(parser: StellaParser, ctx: PatternContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_45(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_45, 0);
	}
	public Surrogate_id_SYMB_2(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_2, 0);
	}
	public Surrogate_id_SYMB_0(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_0, 0);
	}
	public Surrogate_id_SYMB_3(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_3, 0);
	}
	public pattern_list(): PatternContext[] {
		return this.getTypedRuleContexts(PatternContext) as PatternContext[];
	}
	public pattern(i: number): PatternContext {
		return this.getTypedRuleContext(PatternContext, i) as PatternContext;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterPatternCons) {
	 		listener.enterPatternCons(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitPatternCons) {
	 		listener.exitPatternCons(this);
		}
	}
}
export class Coercion_Pattern_16Context extends PatternContext {
	public _p_16_2!: PatternContext;
	constructor(parser: StellaParser, ctx: PatternContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_2(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_2, 0);
	}
	public Surrogate_id_SYMB_3(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_3, 0);
	}
	public pattern(): PatternContext {
		return this.getTypedRuleContext(PatternContext, 0) as PatternContext;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterCoercion_Pattern_16) {
	 		listener.enterCoercion_Pattern_16(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitCoercion_Pattern_16) {
	 		listener.exitCoercion_Pattern_16(this);
		}
	}
}
export class PatternTupleContext extends PatternContext {
	public _p_6_2!: ListPatternContext;
	constructor(parser: StellaParser, ctx: PatternContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_4(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_4, 0);
	}
	public Surrogate_id_SYMB_5(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_5, 0);
	}
	public listPattern(): ListPatternContext {
		return this.getTypedRuleContext(ListPatternContext, 0) as ListPatternContext;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterPatternTuple) {
	 		listener.enterPatternTuple(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitPatternTuple) {
	 		listener.exitPatternTuple(this);
		}
	}
}
export class PatternListContext extends PatternContext {
	public _p_8_2!: ListPatternContext;
	constructor(parser: StellaParser, ctx: PatternContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_6(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_6, 0);
	}
	public Surrogate_id_SYMB_7(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_7, 0);
	}
	public listPattern(): ListPatternContext {
		return this.getTypedRuleContext(ListPatternContext, 0) as ListPatternContext;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterPatternList) {
	 		listener.enterPatternList(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitPatternList) {
	 		listener.exitPatternList(this);
		}
	}
}
export class PatternRecordContext extends PatternContext {
	public _p_7_2!: ListLabelledPatternContext;
	constructor(parser: StellaParser, ctx: PatternContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_4(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_4, 0);
	}
	public Surrogate_id_SYMB_5(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_5, 0);
	}
	public listLabelledPattern(): ListLabelledPatternContext {
		return this.getTypedRuleContext(ListLabelledPatternContext, 0) as ListLabelledPatternContext;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterPatternRecord) {
	 		listener.enterPatternRecord(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitPatternRecord) {
	 		listener.exitPatternRecord(this);
		}
	}
}
export class PatternVariantContext extends PatternContext {
	public _p_3_2!: Token;
	public _p_3_3!: PatternDataContext;
	constructor(parser: StellaParser, ctx: PatternContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_13(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_13, 0);
	}
	public Surrogate_id_SYMB_14(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_14, 0);
	}
	public StellaIdent(): TerminalNode {
		return this.getToken(StellaParser.StellaIdent, 0);
	}
	public patternData(): PatternDataContext {
		return this.getTypedRuleContext(PatternDataContext, 0) as PatternDataContext;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterPatternVariant) {
	 		listener.enterPatternVariant(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitPatternVariant) {
	 		listener.exitPatternVariant(this);
		}
	}
}
export class PatternAscContext extends PatternContext {
	public _p_2_1!: PatternContext;
	public _p_2_3!: TypeContext;
	constructor(parser: StellaParser, ctx: PatternContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_41(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_41, 0);
	}
	public pattern(): PatternContext {
		return this.getTypedRuleContext(PatternContext, 0) as PatternContext;
	}
	public type_(): TypeContext {
		return this.getTypedRuleContext(TypeContext, 0) as TypeContext;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterPatternAsc) {
	 		listener.enterPatternAsc(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitPatternAsc) {
	 		listener.exitPatternAsc(this);
		}
	}
}
export class PatternIntContext extends PatternContext {
	public _p_13_1!: Token;
	constructor(parser: StellaParser, ctx: PatternContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public INTEGER(): TerminalNode {
		return this.getToken(StellaParser.INTEGER, 0);
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterPatternInt) {
	 		listener.enterPatternInt(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitPatternInt) {
	 		listener.exitPatternInt(this);
		}
	}
}
export class PatternInrContext extends PatternContext {
	public _p_5_3!: PatternContext;
	constructor(parser: StellaParser, ctx: PatternContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_60(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_60, 0);
	}
	public Surrogate_id_SYMB_2(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_2, 0);
	}
	public Surrogate_id_SYMB_3(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_3, 0);
	}
	public pattern(): PatternContext {
		return this.getTypedRuleContext(PatternContext, 0) as PatternContext;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterPatternInr) {
	 		listener.enterPatternInr(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitPatternInr) {
	 		listener.exitPatternInr(this);
		}
	}
}
export class PatternTrueContext extends PatternContext {
	constructor(parser: StellaParser, ctx: PatternContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_73(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_73, 0);
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterPatternTrue) {
	 		listener.enterPatternTrue(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitPatternTrue) {
	 		listener.exitPatternTrue(this);
		}
	}
}
export class PatternInlContext extends PatternContext {
	public _p_4_3!: PatternContext;
	constructor(parser: StellaParser, ctx: PatternContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_58(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_58, 0);
	}
	public Surrogate_id_SYMB_2(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_2, 0);
	}
	public Surrogate_id_SYMB_3(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_3, 0);
	}
	public pattern(): PatternContext {
		return this.getTypedRuleContext(PatternContext, 0) as PatternContext;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterPatternInl) {
	 		listener.enterPatternInl(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitPatternInl) {
	 		listener.exitPatternInl(this);
		}
	}
}
export class PatternVarContext extends PatternContext {
	public _p_15_1!: Token;
	constructor(parser: StellaParser, ctx: PatternContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public StellaIdent(): TerminalNode {
		return this.getToken(StellaParser.StellaIdent, 0);
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterPatternVar) {
	 		listener.enterPatternVar(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitPatternVar) {
	 		listener.exitPatternVar(this);
		}
	}
}
export class PatternSuccContext extends PatternContext {
	public _p_14_3!: PatternContext;
	constructor(parser: StellaParser, ctx: PatternContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_69(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_69, 0);
	}
	public Surrogate_id_SYMB_2(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_2, 0);
	}
	public Surrogate_id_SYMB_3(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_3, 0);
	}
	public pattern(): PatternContext {
		return this.getTypedRuleContext(PatternContext, 0) as PatternContext;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterPatternSucc) {
	 		listener.enterPatternSucc(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitPatternSucc) {
	 		listener.exitPatternSucc(this);
		}
	}
}
export class PatternFalseContext extends PatternContext {
	constructor(parser: StellaParser, ctx: PatternContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_50(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_50, 0);
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterPatternFalse) {
	 		listener.enterPatternFalse(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitPatternFalse) {
	 		listener.exitPatternFalse(this);
		}
	}
}
export class PatternUnitContext extends PatternContext {
	constructor(parser: StellaParser, ctx: PatternContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_77(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_77, 0);
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterPatternUnit) {
	 		listener.enterPatternUnit(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitPatternUnit) {
	 		listener.exitPatternUnit(this);
		}
	}
}
export class PatternCastAsContext extends PatternContext {
	public _p_1_1!: PatternContext;
	public _p_1_4!: TypeContext;
	constructor(parser: StellaParser, ctx: PatternContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_43(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_43, 0);
	}
	public Surrogate_id_SYMB_41(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_41, 0);
	}
	public pattern(): PatternContext {
		return this.getTypedRuleContext(PatternContext, 0) as PatternContext;
	}
	public type_(): TypeContext {
		return this.getTypedRuleContext(TypeContext, 0) as TypeContext;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterPatternCastAs) {
	 		listener.enterPatternCastAs(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitPatternCastAs) {
	 		listener.exitPatternCastAs(this);
		}
	}
}


export class ListPatternContext extends ParserRuleContext {
	constructor(parser?: StellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return StellaParser.RULE_listPattern;
	}
	public copyFrom(ctx: ListPatternContext): void {
		super.copyFrom(ctx);
	}
}
export class ListPattern_PrependFirstContext extends ListPatternContext {
	public _p_3_1!: PatternContext;
	public _p_3_3!: ListPatternContext;
	constructor(parser: StellaParser, ctx: ListPatternContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_0(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_0, 0);
	}
	public pattern(): PatternContext {
		return this.getTypedRuleContext(PatternContext, 0) as PatternContext;
	}
	public listPattern(): ListPatternContext {
		return this.getTypedRuleContext(ListPatternContext, 0) as ListPatternContext;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterListPattern_PrependFirst) {
	 		listener.enterListPattern_PrependFirst(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitListPattern_PrependFirst) {
	 		listener.exitListPattern_PrependFirst(this);
		}
	}
}
export class ListPattern_EmptyContext extends ListPatternContext {
	constructor(parser: StellaParser, ctx: ListPatternContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterListPattern_Empty) {
	 		listener.enterListPattern_Empty(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitListPattern_Empty) {
	 		listener.exitListPattern_Empty(this);
		}
	}
}
export class ListPattern_AppendLastContext extends ListPatternContext {
	public _p_2_1!: PatternContext;
	constructor(parser: StellaParser, ctx: ListPatternContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public pattern(): PatternContext {
		return this.getTypedRuleContext(PatternContext, 0) as PatternContext;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterListPattern_AppendLast) {
	 		listener.enterListPattern_AppendLast(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitListPattern_AppendLast) {
	 		listener.exitListPattern_AppendLast(this);
		}
	}
}


export class LabelledPatternContext extends ParserRuleContext {
	constructor(parser?: StellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return StellaParser.RULE_labelledPattern;
	}
	public copyFrom(ctx: LabelledPatternContext): void {
		super.copyFrom(ctx);
	}
}
export class ALabelledPatternContext extends LabelledPatternContext {
	public _p_1_1!: Token;
	public _p_1_3!: PatternContext;
	constructor(parser: StellaParser, ctx: LabelledPatternContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_8(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_8, 0);
	}
	public StellaIdent(): TerminalNode {
		return this.getToken(StellaParser.StellaIdent, 0);
	}
	public pattern(): PatternContext {
		return this.getTypedRuleContext(PatternContext, 0) as PatternContext;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterALabelledPattern) {
	 		listener.enterALabelledPattern(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitALabelledPattern) {
	 		listener.exitALabelledPattern(this);
		}
	}
}


export class ListLabelledPatternContext extends ParserRuleContext {
	constructor(parser?: StellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return StellaParser.RULE_listLabelledPattern;
	}
	public copyFrom(ctx: ListLabelledPatternContext): void {
		super.copyFrom(ctx);
	}
}
export class ListLabelledPattern_AppendLastContext extends ListLabelledPatternContext {
	public _p_1_1!: LabelledPatternContext;
	constructor(parser: StellaParser, ctx: ListLabelledPatternContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public labelledPattern(): LabelledPatternContext {
		return this.getTypedRuleContext(LabelledPatternContext, 0) as LabelledPatternContext;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterListLabelledPattern_AppendLast) {
	 		listener.enterListLabelledPattern_AppendLast(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitListLabelledPattern_AppendLast) {
	 		listener.exitListLabelledPattern_AppendLast(this);
		}
	}
}
export class ListLabelledPattern_PrependFirstContext extends ListLabelledPatternContext {
	public _p_2_1!: LabelledPatternContext;
	public _p_2_3!: ListLabelledPatternContext;
	constructor(parser: StellaParser, ctx: ListLabelledPatternContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_0(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_0, 0);
	}
	public labelledPattern(): LabelledPatternContext {
		return this.getTypedRuleContext(LabelledPatternContext, 0) as LabelledPatternContext;
	}
	public listLabelledPattern(): ListLabelledPatternContext {
		return this.getTypedRuleContext(ListLabelledPatternContext, 0) as ListLabelledPatternContext;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterListLabelledPattern_PrependFirst) {
	 		listener.enterListLabelledPattern_PrependFirst(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitListLabelledPattern_PrependFirst) {
	 		listener.exitListLabelledPattern_PrependFirst(this);
		}
	}
}


export class BindingContext extends ParserRuleContext {
	constructor(parser?: StellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return StellaParser.RULE_binding;
	}
	public copyFrom(ctx: BindingContext): void {
		super.copyFrom(ctx);
	}
}
export class ABindingContext extends BindingContext {
	public _p_1_1!: Token;
	public _p_1_3!: ExprContext;
	constructor(parser: StellaParser, ctx: BindingContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_8(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_8, 0);
	}
	public StellaIdent(): TerminalNode {
		return this.getToken(StellaParser.StellaIdent, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterABinding) {
	 		listener.enterABinding(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitABinding) {
	 		listener.exitABinding(this);
		}
	}
}


export class ListBindingContext extends ParserRuleContext {
	constructor(parser?: StellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return StellaParser.RULE_listBinding;
	}
	public copyFrom(ctx: ListBindingContext): void {
		super.copyFrom(ctx);
	}
}
export class ListBinding_AppendLastContext extends ListBindingContext {
	public _p_1_1!: BindingContext;
	constructor(parser: StellaParser, ctx: ListBindingContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public binding(): BindingContext {
		return this.getTypedRuleContext(BindingContext, 0) as BindingContext;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterListBinding_AppendLast) {
	 		listener.enterListBinding_AppendLast(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitListBinding_AppendLast) {
	 		listener.exitListBinding_AppendLast(this);
		}
	}
}
export class ListBinding_PrependFirstContext extends ListBindingContext {
	public _p_2_1!: BindingContext;
	public _p_2_3!: ListBindingContext;
	constructor(parser: StellaParser, ctx: ListBindingContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_0(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_0, 0);
	}
	public binding(): BindingContext {
		return this.getTypedRuleContext(BindingContext, 0) as BindingContext;
	}
	public listBinding(): ListBindingContext {
		return this.getTypedRuleContext(ListBindingContext, 0) as ListBindingContext;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterListBinding_PrependFirst) {
	 		listener.enterListBinding_PrependFirst(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitListBinding_PrependFirst) {
	 		listener.exitListBinding_PrependFirst(this);
		}
	}
}


export class ExprContext extends ParserRuleContext {
	constructor(parser?: StellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return StellaParser.RULE_expr;
	}
	public copyFrom(ctx: ExprContext): void {
		super.copyFrom(ctx);
	}
}
export class LetRecContext extends ExprContext {
	public _p_4_2!: ListPatternBindingContext;
	public _p_4_4!: ExprContext;
	constructor(parser: StellaParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_63(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_63, 0);
	}
	public Surrogate_id_SYMB_57(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_57, 0);
	}
	public listPatternBinding(): ListPatternBindingContext {
		return this.getTypedRuleContext(ListPatternBindingContext, 0) as ListPatternBindingContext;
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterLetRec) {
	 		listener.enterLetRec(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitLetRec) {
	 		listener.exitLetRec(this);
		}
	}
}
export class Coercion_Expr_2Context extends ExprContext {
	public _p_2_1!: Expr1Context;
	constructor(parser: StellaParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_1(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_1, 0);
	}
	public expr1(): Expr1Context {
		return this.getTypedRuleContext(Expr1Context, 0) as Expr1Context;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterCoercion_Expr_2) {
	 		listener.enterCoercion_Expr_2(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitCoercion_Expr_2) {
	 		listener.exitCoercion_Expr_2(this);
		}
	}
}
export class LetContext extends ExprContext {
	public _p_3_2!: ListPatternBindingContext;
	public _p_3_4!: ExprContext;
	constructor(parser: StellaParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_62(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_62, 0);
	}
	public Surrogate_id_SYMB_57(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_57, 0);
	}
	public listPatternBinding(): ListPatternBindingContext {
		return this.getTypedRuleContext(ListPatternBindingContext, 0) as ListPatternBindingContext;
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterLet) {
	 		listener.enterLet(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitLet) {
	 		listener.exitLet(this);
		}
	}
}
export class SequenceContext extends ExprContext {
	public _p_1_1!: Expr1Context;
	public _p_1_3!: ExprContext;
	constructor(parser: StellaParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_1(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_1, 0);
	}
	public expr1(): Expr1Context {
		return this.getTypedRuleContext(Expr1Context, 0) as Expr1Context;
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterSequence) {
	 		listener.enterSequence(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitSequence) {
	 		listener.exitSequence(this);
		}
	}
}
export class TypeAbstractionContext extends ExprContext {
	public _p_5_3!: ListStellaIdentContext;
	public _p_5_5!: ExprContext;
	constructor(parser: StellaParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_55(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_55, 0);
	}
	public Surrogate_id_SYMB_6(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_6, 0);
	}
	public Surrogate_id_SYMB_7(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_7, 0);
	}
	public listStellaIdent(): ListStellaIdentContext {
		return this.getTypedRuleContext(ListStellaIdentContext, 0) as ListStellaIdentContext;
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterTypeAbstraction) {
	 		listener.enterTypeAbstraction(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitTypeAbstraction) {
	 		listener.exitTypeAbstraction(this);
		}
	}
}
export class Coercion_Expr_6Context extends ExprContext {
	public _p_6_1!: Expr1Context;
	constructor(parser: StellaParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expr1(): Expr1Context {
		return this.getTypedRuleContext(Expr1Context, 0) as Expr1Context;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterCoercion_Expr_6) {
	 		listener.enterCoercion_Expr_6(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitCoercion_Expr_6) {
	 		listener.exitCoercion_Expr_6(this);
		}
	}
}


export class ListExprContext extends ParserRuleContext {
	constructor(parser?: StellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return StellaParser.RULE_listExpr;
	}
	public copyFrom(ctx: ListExprContext): void {
		super.copyFrom(ctx);
	}
}
export class ListExpr_EmptyContext extends ListExprContext {
	constructor(parser: StellaParser, ctx: ListExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterListExpr_Empty) {
	 		listener.enterListExpr_Empty(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitListExpr_Empty) {
	 		listener.exitListExpr_Empty(this);
		}
	}
}
export class ListExpr_PrependFirstContext extends ListExprContext {
	public _p_3_1!: ExprContext;
	public _p_3_3!: ListExprContext;
	constructor(parser: StellaParser, ctx: ListExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_0(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_0, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public listExpr(): ListExprContext {
		return this.getTypedRuleContext(ListExprContext, 0) as ListExprContext;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterListExpr_PrependFirst) {
	 		listener.enterListExpr_PrependFirst(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitListExpr_PrependFirst) {
	 		listener.exitListExpr_PrependFirst(this);
		}
	}
}
export class ListExpr_AppendLastContext extends ListExprContext {
	public _p_2_1!: ExprContext;
	constructor(parser: StellaParser, ctx: ListExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterListExpr_AppendLast) {
	 		listener.enterListExpr_AppendLast(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitListExpr_AppendLast) {
	 		listener.exitListExpr_AppendLast(this);
		}
	}
}


export class Expr1Context extends ParserRuleContext {
	constructor(parser?: StellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return StellaParser.RULE_expr1;
	}
	public copyFrom(ctx: Expr1Context): void {
		super.copyFrom(ctx);
	}
}
export class Coercion_Expr1_3Context extends Expr1Context {
	public _p_3_1!: Expr2Context;
	constructor(parser: StellaParser, ctx: Expr1Context) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expr2(): Expr2Context {
		return this.getTypedRuleContext(Expr2Context, 0) as Expr2Context;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterCoercion_Expr1_3) {
	 		listener.enterCoercion_Expr1_3(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitCoercion_Expr1_3) {
	 		listener.exitCoercion_Expr1_3(this);
		}
	}
}
export class AssignContext extends Expr1Context {
	public _p_1_1!: Expr2Context;
	public _p_1_3!: Expr1Context;
	constructor(parser: StellaParser, ctx: Expr1Context) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_15(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_15, 0);
	}
	public expr2(): Expr2Context {
		return this.getTypedRuleContext(Expr2Context, 0) as Expr2Context;
	}
	public expr1(): Expr1Context {
		return this.getTypedRuleContext(Expr1Context, 0) as Expr1Context;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterAssign) {
	 		listener.enterAssign(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitAssign) {
	 		listener.exitAssign(this);
		}
	}
}
export class IfContext extends Expr1Context {
	public _p_2_2!: Expr1Context;
	public _p_2_4!: Expr1Context;
	public _p_2_6!: Expr1Context;
	constructor(parser: StellaParser, ctx: Expr1Context) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_56(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_56, 0);
	}
	public Surrogate_id_SYMB_70(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_70, 0);
	}
	public Surrogate_id_SYMB_47(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_47, 0);
	}
	public expr1_list(): Expr1Context[] {
		return this.getTypedRuleContexts(Expr1Context) as Expr1Context[];
	}
	public expr1(i: number): Expr1Context {
		return this.getTypedRuleContext(Expr1Context, i) as Expr1Context;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterIf) {
	 		listener.enterIf(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitIf) {
	 		listener.exitIf(this);
		}
	}
}


export class PatternBindingContext extends ParserRuleContext {
	constructor(parser?: StellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return StellaParser.RULE_patternBinding;
	}
	public copyFrom(ctx: PatternBindingContext): void {
		super.copyFrom(ctx);
	}
}
export class APatternBindingContext extends PatternBindingContext {
	public _p_1_1!: PatternContext;
	public _p_1_3!: ExprContext;
	constructor(parser: StellaParser, ctx: PatternBindingContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_8(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_8, 0);
	}
	public pattern(): PatternContext {
		return this.getTypedRuleContext(PatternContext, 0) as PatternContext;
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterAPatternBinding) {
	 		listener.enterAPatternBinding(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitAPatternBinding) {
	 		listener.exitAPatternBinding(this);
		}
	}
}


export class ListPatternBindingContext extends ParserRuleContext {
	constructor(parser?: StellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return StellaParser.RULE_listPatternBinding;
	}
	public copyFrom(ctx: ListPatternBindingContext): void {
		super.copyFrom(ctx);
	}
}
export class ListPatternBinding_PrependFirstContext extends ListPatternBindingContext {
	public _p_2_1!: PatternBindingContext;
	public _p_2_3!: ListPatternBindingContext;
	constructor(parser: StellaParser, ctx: ListPatternBindingContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_0(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_0, 0);
	}
	public patternBinding(): PatternBindingContext {
		return this.getTypedRuleContext(PatternBindingContext, 0) as PatternBindingContext;
	}
	public listPatternBinding(): ListPatternBindingContext {
		return this.getTypedRuleContext(ListPatternBindingContext, 0) as ListPatternBindingContext;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterListPatternBinding_PrependFirst) {
	 		listener.enterListPatternBinding_PrependFirst(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitListPatternBinding_PrependFirst) {
	 		listener.exitListPatternBinding_PrependFirst(this);
		}
	}
}
export class ListPatternBinding_AppendLastContext extends ListPatternBindingContext {
	public _p_1_1!: PatternBindingContext;
	constructor(parser: StellaParser, ctx: ListPatternBindingContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public patternBinding(): PatternBindingContext {
		return this.getTypedRuleContext(PatternBindingContext, 0) as PatternBindingContext;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterListPatternBinding_AppendLast) {
	 		listener.enterListPatternBinding_AppendLast(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitListPatternBinding_AppendLast) {
	 		listener.exitListPatternBinding_AppendLast(this);
		}
	}
}


export class Expr2Context extends ParserRuleContext {
	constructor(parser?: StellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return StellaParser.RULE_expr2;
	}
	public copyFrom(ctx: Expr2Context): void {
		super.copyFrom(ctx);
	}
}
export class LessThanContext extends Expr2Context {
	public _p_1_1!: Expr3Context;
	public _p_1_3!: Expr3Context;
	constructor(parser: StellaParser, ctx: Expr2Context) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_16(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_16, 0);
	}
	public expr3_list(): Expr3Context[] {
		return this.getTypedRuleContexts(Expr3Context) as Expr3Context[];
	}
	public expr3(i: number): Expr3Context {
		return this.getTypedRuleContext(Expr3Context, i) as Expr3Context;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterLessThan) {
	 		listener.enterLessThan(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitLessThan) {
	 		listener.exitLessThan(this);
		}
	}
}
export class NotEqualContext extends Expr2Context {
	public _p_6_1!: Expr3Context;
	public _p_6_3!: Expr3Context;
	constructor(parser: StellaParser, ctx: Expr2Context) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_21(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_21, 0);
	}
	public expr3_list(): Expr3Context[] {
		return this.getTypedRuleContexts(Expr3Context) as Expr3Context[];
	}
	public expr3(i: number): Expr3Context {
		return this.getTypedRuleContext(Expr3Context, i) as Expr3Context;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterNotEqual) {
	 		listener.enterNotEqual(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitNotEqual) {
	 		listener.exitNotEqual(this);
		}
	}
}
export class LessThanOrEqualContext extends Expr2Context {
	public _p_2_1!: Expr3Context;
	public _p_2_3!: Expr3Context;
	constructor(parser: StellaParser, ctx: Expr2Context) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_17(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_17, 0);
	}
	public expr3_list(): Expr3Context[] {
		return this.getTypedRuleContexts(Expr3Context) as Expr3Context[];
	}
	public expr3(i: number): Expr3Context {
		return this.getTypedRuleContext(Expr3Context, i) as Expr3Context;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterLessThanOrEqual) {
	 		listener.enterLessThanOrEqual(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitLessThanOrEqual) {
	 		listener.exitLessThanOrEqual(this);
		}
	}
}
export class GreaterThanContext extends Expr2Context {
	public _p_3_1!: Expr3Context;
	public _p_3_3!: Expr3Context;
	constructor(parser: StellaParser, ctx: Expr2Context) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_18(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_18, 0);
	}
	public expr3_list(): Expr3Context[] {
		return this.getTypedRuleContexts(Expr3Context) as Expr3Context[];
	}
	public expr3(i: number): Expr3Context {
		return this.getTypedRuleContext(Expr3Context, i) as Expr3Context;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterGreaterThan) {
	 		listener.enterGreaterThan(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitGreaterThan) {
	 		listener.exitGreaterThan(this);
		}
	}
}
export class EqualContext extends Expr2Context {
	public _p_5_1!: Expr3Context;
	public _p_5_3!: Expr3Context;
	constructor(parser: StellaParser, ctx: Expr2Context) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_20(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_20, 0);
	}
	public expr3_list(): Expr3Context[] {
		return this.getTypedRuleContexts(Expr3Context) as Expr3Context[];
	}
	public expr3(i: number): Expr3Context {
		return this.getTypedRuleContext(Expr3Context, i) as Expr3Context;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterEqual) {
	 		listener.enterEqual(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitEqual) {
	 		listener.exitEqual(this);
		}
	}
}
export class GreaterThanOrEqualContext extends Expr2Context {
	public _p_4_1!: Expr3Context;
	public _p_4_3!: Expr3Context;
	constructor(parser: StellaParser, ctx: Expr2Context) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_19(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_19, 0);
	}
	public expr3_list(): Expr3Context[] {
		return this.getTypedRuleContexts(Expr3Context) as Expr3Context[];
	}
	public expr3(i: number): Expr3Context {
		return this.getTypedRuleContext(Expr3Context, i) as Expr3Context;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterGreaterThanOrEqual) {
	 		listener.enterGreaterThanOrEqual(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitGreaterThanOrEqual) {
	 		listener.exitGreaterThanOrEqual(this);
		}
	}
}
export class Coercion_Expr2_7Context extends Expr2Context {
	public _p_7_1!: Expr3Context;
	constructor(parser: StellaParser, ctx: Expr2Context) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expr3(): Expr3Context {
		return this.getTypedRuleContext(Expr3Context, 0) as Expr3Context;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterCoercion_Expr2_7) {
	 		listener.enterCoercion_Expr2_7(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitCoercion_Expr2_7) {
	 		listener.exitCoercion_Expr2_7(this);
		}
	}
}


export class ListExpr2Context extends ParserRuleContext {
	constructor(parser?: StellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return StellaParser.RULE_listExpr2;
	}
	public copyFrom(ctx: ListExpr2Context): void {
		super.copyFrom(ctx);
	}
}
export class ListExpr2_AppendLastContext extends ListExpr2Context {
	public _p_1_1!: Expr2Context;
	constructor(parser: StellaParser, ctx: ListExpr2Context) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_1(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_1, 0);
	}
	public expr2(): Expr2Context {
		return this.getTypedRuleContext(Expr2Context, 0) as Expr2Context;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterListExpr2_AppendLast) {
	 		listener.enterListExpr2_AppendLast(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitListExpr2_AppendLast) {
	 		listener.exitListExpr2_AppendLast(this);
		}
	}
}
export class ListExpr2_PrependFirstContext extends ListExpr2Context {
	public _p_2_1!: Expr2Context;
	public _p_2_3!: ListExpr2Context;
	constructor(parser: StellaParser, ctx: ListExpr2Context) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_1(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_1, 0);
	}
	public expr2(): Expr2Context {
		return this.getTypedRuleContext(Expr2Context, 0) as Expr2Context;
	}
	public listExpr2(): ListExpr2Context {
		return this.getTypedRuleContext(ListExpr2Context, 0) as ListExpr2Context;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterListExpr2_PrependFirst) {
	 		listener.enterListExpr2_PrependFirst(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitListExpr2_PrependFirst) {
	 		listener.exitListExpr2_PrependFirst(this);
		}
	}
}


export class Expr3Context extends ParserRuleContext {
	constructor(parser?: StellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return StellaParser.RULE_expr3;
	}
	public copyFrom(ctx: Expr3Context): void {
		super.copyFrom(ctx);
	}
}
export class VariantContext extends Expr3Context {
	public _p_4_2!: Token;
	public _p_4_3!: ExprDataContext;
	constructor(parser: StellaParser, ctx: Expr3Context) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_13(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_13, 0);
	}
	public Surrogate_id_SYMB_14(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_14, 0);
	}
	public StellaIdent(): TerminalNode {
		return this.getToken(StellaParser.StellaIdent, 0);
	}
	public exprData(): ExprDataContext {
		return this.getTypedRuleContext(ExprDataContext, 0) as ExprDataContext;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterVariant) {
	 		listener.enterVariant(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitVariant) {
	 		listener.exitVariant(this);
		}
	}
}
export class AddContext extends Expr3Context {
	public _p_7_1!: Expr3Context;
	public _p_7_3!: Expr4Context;
	constructor(parser: StellaParser, ctx: Expr3Context) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_22(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_22, 0);
	}
	public expr3(): Expr3Context {
		return this.getTypedRuleContext(Expr3Context, 0) as Expr3Context;
	}
	public expr4(): Expr4Context {
		return this.getTypedRuleContext(Expr4Context, 0) as Expr4Context;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterAdd) {
	 		listener.enterAdd(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitAdd) {
	 		listener.exitAdd(this);
		}
	}
}
export class LogicOrContext extends Expr3Context {
	public _p_9_1!: Expr3Context;
	public _p_9_3!: Expr4Context;
	constructor(parser: StellaParser, ctx: Expr3Context) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_67(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_67, 0);
	}
	public expr3(): Expr3Context {
		return this.getTypedRuleContext(Expr3Context, 0) as Expr3Context;
	}
	public expr4(): Expr4Context {
		return this.getTypedRuleContext(Expr4Context, 0) as Expr4Context;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterLogicOr) {
	 		listener.enterLogicOr(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitLogicOr) {
	 		listener.exitLogicOr(this);
		}
	}
}
export class Coercion_Expr3_10Context extends Expr3Context {
	public _p_10_1!: Expr4Context;
	constructor(parser: StellaParser, ctx: Expr3Context) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expr4(): Expr4Context {
		return this.getTypedRuleContext(Expr4Context, 0) as Expr4Context;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterCoercion_Expr3_10) {
	 		listener.enterCoercion_Expr3_10(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitCoercion_Expr3_10) {
	 		listener.exitCoercion_Expr3_10(this);
		}
	}
}
export class TypeAscContext extends Expr3Context {
	public _p_1_1!: Expr3Context;
	public _p_1_3!: Type2Context;
	constructor(parser: StellaParser, ctx: Expr3Context) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_41(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_41, 0);
	}
	public expr3(): Expr3Context {
		return this.getTypedRuleContext(Expr3Context, 0) as Expr3Context;
	}
	public type2(): Type2Context {
		return this.getTypedRuleContext(Type2Context, 0) as Type2Context;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterTypeAsc) {
	 		listener.enterTypeAsc(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitTypeAsc) {
	 		listener.exitTypeAsc(this);
		}
	}
}
export class SubtractContext extends Expr3Context {
	public _p_8_1!: Expr3Context;
	public _p_8_3!: Expr4Context;
	constructor(parser: StellaParser, ctx: Expr3Context) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_23(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_23, 0);
	}
	public expr3(): Expr3Context {
		return this.getTypedRuleContext(Expr3Context, 0) as Expr3Context;
	}
	public expr4(): Expr4Context {
		return this.getTypedRuleContext(Expr4Context, 0) as Expr4Context;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterSubtract) {
	 		listener.enterSubtract(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitSubtract) {
	 		listener.exitSubtract(this);
		}
	}
}
export class ListContext extends Expr3Context {
	public _p_6_2!: ListExprContext;
	constructor(parser: StellaParser, ctx: Expr3Context) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_6(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_6, 0);
	}
	public Surrogate_id_SYMB_7(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_7, 0);
	}
	public listExpr(): ListExprContext {
		return this.getTypedRuleContext(ListExprContext, 0) as ListExprContext;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterList) {
	 		listener.enterList(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitList) {
	 		listener.exitList(this);
		}
	}
}
export class TypeCastContext extends Expr3Context {
	public _p_2_1!: Expr3Context;
	public _p_2_4!: Type2Context;
	constructor(parser: StellaParser, ctx: Expr3Context) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_43(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_43, 0);
	}
	public Surrogate_id_SYMB_41(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_41, 0);
	}
	public expr3(): Expr3Context {
		return this.getTypedRuleContext(Expr3Context, 0) as Expr3Context;
	}
	public type2(): Type2Context {
		return this.getTypedRuleContext(Type2Context, 0) as Type2Context;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterTypeCast) {
	 		listener.enterTypeCast(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitTypeCast) {
	 		listener.exitTypeCast(this);
		}
	}
}
export class AbstractionContext extends Expr3Context {
	public _p_3_3!: ListParamDeclContext;
	public _p_3_7!: ExprContext;
	constructor(parser: StellaParser, ctx: Expr3Context) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_52(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_52, 0);
	}
	public Surrogate_id_SYMB_2(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_2, 0);
	}
	public Surrogate_id_SYMB_3(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_3, 0);
	}
	public Surrogate_id_SYMB_4(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_4, 0);
	}
	public Surrogate_id_SYMB_68(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_68, 0);
	}
	public Surrogate_id_SYMB_5(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_5, 0);
	}
	public listParamDecl(): ListParamDeclContext {
		return this.getTypedRuleContext(ListParamDeclContext, 0) as ListParamDeclContext;
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterAbstraction) {
	 		listener.enterAbstraction(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitAbstraction) {
	 		listener.exitAbstraction(this);
		}
	}
}
export class MatchContext extends Expr3Context {
	public _p_5_2!: Expr2Context;
	public _p_5_4!: ListMatchCaseContext;
	constructor(parser: StellaParser, ctx: Expr3Context) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_64(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_64, 0);
	}
	public Surrogate_id_SYMB_4(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_4, 0);
	}
	public Surrogate_id_SYMB_5(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_5, 0);
	}
	public expr2(): Expr2Context {
		return this.getTypedRuleContext(Expr2Context, 0) as Expr2Context;
	}
	public listMatchCase(): ListMatchCaseContext {
		return this.getTypedRuleContext(ListMatchCaseContext, 0) as ListMatchCaseContext;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterMatch) {
	 		listener.enterMatch(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitMatch) {
	 		listener.exitMatch(this);
		}
	}
}


export class Expr4Context extends ParserRuleContext {
	constructor(parser?: StellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return StellaParser.RULE_expr4;
	}
	public copyFrom(ctx: Expr4Context): void {
		super.copyFrom(ctx);
	}
}
export class DivideContext extends Expr4Context {
	public _p_2_1!: Expr4Context;
	public _p_2_3!: Expr5Context;
	constructor(parser: StellaParser, ctx: Expr4Context) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_25(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_25, 0);
	}
	public expr4(): Expr4Context {
		return this.getTypedRuleContext(Expr4Context, 0) as Expr4Context;
	}
	public expr5(): Expr5Context {
		return this.getTypedRuleContext(Expr5Context, 0) as Expr5Context;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterDivide) {
	 		listener.enterDivide(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitDivide) {
	 		listener.exitDivide(this);
		}
	}
}
export class MultiplyContext extends Expr4Context {
	public _p_1_1!: Expr4Context;
	public _p_1_3!: Expr5Context;
	constructor(parser: StellaParser, ctx: Expr4Context) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_24(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_24, 0);
	}
	public expr4(): Expr4Context {
		return this.getTypedRuleContext(Expr4Context, 0) as Expr4Context;
	}
	public expr5(): Expr5Context {
		return this.getTypedRuleContext(Expr5Context, 0) as Expr5Context;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterMultiply) {
	 		listener.enterMultiply(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitMultiply) {
	 		listener.exitMultiply(this);
		}
	}
}
export class Coercion_Expr4_4Context extends Expr4Context {
	public _p_4_1!: Expr5Context;
	constructor(parser: StellaParser, ctx: Expr4Context) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expr5(): Expr5Context {
		return this.getTypedRuleContext(Expr5Context, 0) as Expr5Context;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterCoercion_Expr4_4) {
	 		listener.enterCoercion_Expr4_4(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitCoercion_Expr4_4) {
	 		listener.exitCoercion_Expr4_4(this);
		}
	}
}
export class LogicAndContext extends Expr4Context {
	public _p_3_1!: Expr4Context;
	public _p_3_3!: Expr5Context;
	constructor(parser: StellaParser, ctx: Expr4Context) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_40(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_40, 0);
	}
	public expr4(): Expr4Context {
		return this.getTypedRuleContext(Expr4Context, 0) as Expr4Context;
	}
	public expr5(): Expr5Context {
		return this.getTypedRuleContext(Expr5Context, 0) as Expr5Context;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterLogicAnd) {
	 		listener.enterLogicAnd(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitLogicAnd) {
	 		listener.exitLogicAnd(this);
		}
	}
}


export class Expr5Context extends ParserRuleContext {
	constructor(parser?: StellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return StellaParser.RULE_expr5;
	}
	public copyFrom(ctx: Expr5Context): void {
		super.copyFrom(ctx);
	}
}
export class RefContext extends Expr5Context {
	public _p_1_3!: ExprContext;
	constructor(parser: StellaParser, ctx: Expr5Context) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_65(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_65, 0);
	}
	public Surrogate_id_SYMB_2(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_2, 0);
	}
	public Surrogate_id_SYMB_3(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_3, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterRef) {
	 		listener.enterRef(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitRef) {
	 		listener.exitRef(this);
		}
	}
}
export class Coercion_Expr5_3Context extends Expr5Context {
	public _p_3_1!: Expr6Context;
	constructor(parser: StellaParser, ctx: Expr5Context) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expr6(): Expr6Context {
		return this.getTypedRuleContext(Expr6Context, 0) as Expr6Context;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterCoercion_Expr5_3) {
	 		listener.enterCoercion_Expr5_3(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitCoercion_Expr5_3) {
	 		listener.exitCoercion_Expr5_3(this);
		}
	}
}
export class DerefContext extends Expr5Context {
	public _p_2_2!: Expr5Context;
	constructor(parser: StellaParser, ctx: Expr5Context) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_24(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_24, 0);
	}
	public expr5(): Expr5Context {
		return this.getTypedRuleContext(Expr5Context, 0) as Expr5Context;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterDeref) {
	 		listener.enterDeref(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitDeref) {
	 		listener.exitDeref(this);
		}
	}
}


export class Expr6Context extends ParserRuleContext {
	constructor(parser?: StellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return StellaParser.RULE_expr6;
	}
	public copyFrom(ctx: Expr6Context): void {
		super.copyFrom(ctx);
	}
}
export class IsEmptyContext extends Expr6Context {
	public _p_9_3!: ExprContext;
	constructor(parser: StellaParser, ctx: Expr6Context) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_28(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_28, 0);
	}
	public Surrogate_id_SYMB_2(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_2, 0);
	}
	public Surrogate_id_SYMB_3(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_3, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterIsEmpty) {
	 		listener.enterIsEmpty(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitIsEmpty) {
	 		listener.exitIsEmpty(this);
		}
	}
}
export class FoldContext extends Expr6Context {
	public _p_24_3!: TypeContext;
	public _p_24_5!: Expr7Context;
	constructor(parser: StellaParser, ctx: Expr6Context) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_53(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_53, 0);
	}
	public Surrogate_id_SYMB_6(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_6, 0);
	}
	public Surrogate_id_SYMB_7(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_7, 0);
	}
	public type_(): TypeContext {
		return this.getTypedRuleContext(TypeContext, 0) as TypeContext;
	}
	public expr7(): Expr7Context {
		return this.getTypedRuleContext(Expr7Context, 0) as Expr7Context;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterFold) {
	 		listener.enterFold(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitFold) {
	 		listener.exitFold(this);
		}
	}
}
export class PanicContext extends Expr6Context {
	constructor(parser: StellaParser, ctx: Expr6Context) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_30(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_30, 0);
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterPanic) {
	 		listener.enterPanic(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitPanic) {
	 		listener.exitPanic(this);
		}
	}
}
export class IsZeroContext extends Expr6Context {
	public _p_21_3!: ExprContext;
	constructor(parser: StellaParser, ctx: Expr6Context) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_32(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_32, 0);
	}
	public Surrogate_id_SYMB_2(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_2, 0);
	}
	public Surrogate_id_SYMB_3(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_3, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterIsZero) {
	 		listener.enterIsZero(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitIsZero) {
	 		listener.exitIsZero(this);
		}
	}
}
export class SuccContext extends Expr6Context {
	public _p_18_3!: ExprContext;
	constructor(parser: StellaParser, ctx: Expr6Context) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_69(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_69, 0);
	}
	public Surrogate_id_SYMB_2(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_2, 0);
	}
	public Surrogate_id_SYMB_3(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_3, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterSucc) {
	 		listener.enterSucc(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitSucc) {
	 		listener.exitSucc(this);
		}
	}
}
export class InlContext extends Expr6Context {
	public _p_16_3!: ExprContext;
	constructor(parser: StellaParser, ctx: Expr6Context) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_58(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_58, 0);
	}
	public Surrogate_id_SYMB_2(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_2, 0);
	}
	public Surrogate_id_SYMB_3(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_3, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterInl) {
	 		listener.enterInl(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitInl) {
	 		listener.exitInl(this);
		}
	}
}
export class InrContext extends Expr6Context {
	public _p_17_3!: ExprContext;
	constructor(parser: StellaParser, ctx: Expr6Context) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_60(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_60, 0);
	}
	public Surrogate_id_SYMB_2(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_2, 0);
	}
	public Surrogate_id_SYMB_3(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_3, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterInr) {
	 		listener.enterInr(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitInr) {
	 		listener.exitInr(this);
		}
	}
}
export class LogicNotContext extends Expr6Context {
	public _p_19_3!: ExprContext;
	constructor(parser: StellaParser, ctx: Expr6Context) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_66(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_66, 0);
	}
	public Surrogate_id_SYMB_2(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_2, 0);
	}
	public Surrogate_id_SYMB_3(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_3, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterLogicNot) {
	 		listener.enterLogicNot(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitLogicNot) {
	 		listener.exitLogicNot(this);
		}
	}
}
export class DotRecordContext extends Expr6Context {
	public _p_3_1!: Expr6Context;
	public _p_3_3!: Token;
	constructor(parser: StellaParser, ctx: Expr6Context) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_26(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_26, 0);
	}
	public expr6(): Expr6Context {
		return this.getTypedRuleContext(Expr6Context, 0) as Expr6Context;
	}
	public StellaIdent(): TerminalNode {
		return this.getToken(StellaParser.StellaIdent, 0);
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterDotRecord) {
	 		listener.enterDotRecord(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitDotRecord) {
	 		listener.exitDotRecord(this);
		}
	}
}
export class ThrowContext extends Expr6Context {
	public _p_12_3!: ExprContext;
	constructor(parser: StellaParser, ctx: Expr6Context) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_71(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_71, 0);
	}
	public Surrogate_id_SYMB_2(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_2, 0);
	}
	public Surrogate_id_SYMB_3(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_3, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterThrow) {
	 		listener.enterThrow(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitThrow) {
	 		listener.exitThrow(this);
		}
	}
}
export class TailContext extends Expr6Context {
	public _p_10_3!: ExprContext;
	constructor(parser: StellaParser, ctx: Expr6Context) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_29(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_29, 0);
	}
	public Surrogate_id_SYMB_2(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_2, 0);
	}
	public Surrogate_id_SYMB_3(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_3, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterTail) {
	 		listener.enterTail(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitTail) {
	 		listener.exitTail(this);
		}
	}
}
export class RecordContext extends Expr6Context {
	public _p_6_2!: ListBindingContext;
	constructor(parser: StellaParser, ctx: Expr6Context) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_4(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_4, 0);
	}
	public Surrogate_id_SYMB_5(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_5, 0);
	}
	public listBinding(): ListBindingContext {
		return this.getTypedRuleContext(ListBindingContext, 0) as ListBindingContext;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterRecord) {
	 		listener.enterRecord(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitRecord) {
	 		listener.exitRecord(this);
		}
	}
}
export class TypeApplicationContext extends Expr6Context {
	public _p_2_1!: Expr6Context;
	public _p_2_3!: ListTypeContext;
	constructor(parser: StellaParser, ctx: Expr6Context) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_6(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_6, 0);
	}
	public Surrogate_id_SYMB_7(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_7, 0);
	}
	public expr6(): Expr6Context {
		return this.getTypedRuleContext(Expr6Context, 0) as Expr6Context;
	}
	public listType(): ListTypeContext {
		return this.getTypedRuleContext(ListTypeContext, 0) as ListTypeContext;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterTypeApplication) {
	 		listener.enterTypeApplication(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitTypeApplication) {
	 		listener.exitTypeApplication(this);
		}
	}
}
export class TryCatchContext extends Expr6Context {
	public _p_13_3!: ExprContext;
	public _p_13_7!: PatternContext;
	public _p_13_9!: ExprContext;
	constructor(parser: StellaParser, ctx: Expr6Context) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_74(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_74, 0);
	}
	public Surrogate_id_SYMB_4_list(): TerminalNode[] {
	    	return this.getTokens(StellaParser.Surrogate_id_SYMB_4);
	}
	public Surrogate_id_SYMB_4(i: number): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_4, i);
	}
	public Surrogate_id_SYMB_5_list(): TerminalNode[] {
	    	return this.getTokens(StellaParser.Surrogate_id_SYMB_5);
	}
	public Surrogate_id_SYMB_5(i: number): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_5, i);
	}
	public Surrogate_id_SYMB_44(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_44, 0);
	}
	public Surrogate_id_SYMB_11(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_11, 0);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public pattern(): PatternContext {
		return this.getTypedRuleContext(PatternContext, 0) as PatternContext;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterTryCatch) {
	 		listener.enterTryCatch(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitTryCatch) {
	 		listener.exitTryCatch(this);
		}
	}
}
export class HeadContext extends Expr6Context {
	public _p_8_3!: ExprContext;
	constructor(parser: StellaParser, ctx: Expr6Context) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_27(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_27, 0);
	}
	public Surrogate_id_SYMB_2(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_2, 0);
	}
	public Surrogate_id_SYMB_3(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_3, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterHead) {
	 		listener.enterHead(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitHead) {
	 		listener.exitHead(this);
		}
	}
}
export class TryCastAsContext extends Expr6Context {
	public _p_15_3!: ExprContext;
	public _p_15_7!: TypeContext;
	public _p_15_9!: PatternContext;
	public _p_15_11!: ExprContext;
	public _p_15_15!: ExprContext;
	constructor(parser: StellaParser, ctx: Expr6Context) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_74(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_74, 0);
	}
	public Surrogate_id_SYMB_4_list(): TerminalNode[] {
	    	return this.getTokens(StellaParser.Surrogate_id_SYMB_4);
	}
	public Surrogate_id_SYMB_4(i: number): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_4, i);
	}
	public Surrogate_id_SYMB_5_list(): TerminalNode[] {
	    	return this.getTokens(StellaParser.Surrogate_id_SYMB_5);
	}
	public Surrogate_id_SYMB_5(i: number): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_5, i);
	}
	public Surrogate_id_SYMB_43(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_43, 0);
	}
	public Surrogate_id_SYMB_41(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_41, 0);
	}
	public Surrogate_id_SYMB_11(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_11, 0);
	}
	public Surrogate_id_SYMB_79(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_79, 0);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public type_(): TypeContext {
		return this.getTypedRuleContext(TypeContext, 0) as TypeContext;
	}
	public pattern(): PatternContext {
		return this.getTypedRuleContext(PatternContext, 0) as PatternContext;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterTryCastAs) {
	 		listener.enterTryCastAs(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitTryCastAs) {
	 		listener.exitTryCastAs(this);
		}
	}
}
export class TryWithContext extends Expr6Context {
	public _p_14_3!: ExprContext;
	public _p_14_7!: ExprContext;
	constructor(parser: StellaParser, ctx: Expr6Context) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_74(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_74, 0);
	}
	public Surrogate_id_SYMB_4_list(): TerminalNode[] {
	    	return this.getTokens(StellaParser.Surrogate_id_SYMB_4);
	}
	public Surrogate_id_SYMB_4(i: number): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_4, i);
	}
	public Surrogate_id_SYMB_5_list(): TerminalNode[] {
	    	return this.getTokens(StellaParser.Surrogate_id_SYMB_5);
	}
	public Surrogate_id_SYMB_5(i: number): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_5, i);
	}
	public Surrogate_id_SYMB_79(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_79, 0);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterTryWith) {
	 		listener.enterTryWith(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitTryWith) {
	 		listener.exitTryWith(this);
		}
	}
}
export class PredContext extends Expr6Context {
	public _p_20_3!: ExprContext;
	constructor(parser: StellaParser, ctx: Expr6Context) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_31(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_31, 0);
	}
	public Surrogate_id_SYMB_2(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_2, 0);
	}
	public Surrogate_id_SYMB_3(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_3, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterPred) {
	 		listener.enterPred(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitPred) {
	 		listener.exitPred(this);
		}
	}
}
export class NatRecContext extends Expr6Context {
	public _p_23_3!: ExprContext;
	public _p_23_5!: ExprContext;
	public _p_23_7!: ExprContext;
	constructor(parser: StellaParser, ctx: Expr6Context) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_33(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_33, 0);
	}
	public Surrogate_id_SYMB_2(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_2, 0);
	}
	public Surrogate_id_SYMB_0_list(): TerminalNode[] {
	    	return this.getTokens(StellaParser.Surrogate_id_SYMB_0);
	}
	public Surrogate_id_SYMB_0(i: number): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_0, i);
	}
	public Surrogate_id_SYMB_3(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_3, 0);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterNatRec) {
	 		listener.enterNatRec(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitNatRec) {
	 		listener.exitNatRec(this);
		}
	}
}
export class Coercion_Expr6_26Context extends Expr6Context {
	public _p_26_1!: Expr7Context;
	constructor(parser: StellaParser, ctx: Expr6Context) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expr7(): Expr7Context {
		return this.getTypedRuleContext(Expr7Context, 0) as Expr7Context;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterCoercion_Expr6_26) {
	 		listener.enterCoercion_Expr6_26(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitCoercion_Expr6_26) {
	 		listener.exitCoercion_Expr6_26(this);
		}
	}
}
export class UnfoldContext extends Expr6Context {
	public _p_25_3!: TypeContext;
	public _p_25_5!: Expr7Context;
	constructor(parser: StellaParser, ctx: Expr6Context) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_76(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_76, 0);
	}
	public Surrogate_id_SYMB_6(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_6, 0);
	}
	public Surrogate_id_SYMB_7(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_7, 0);
	}
	public type_(): TypeContext {
		return this.getTypedRuleContext(TypeContext, 0) as TypeContext;
	}
	public expr7(): Expr7Context {
		return this.getTypedRuleContext(Expr7Context, 0) as Expr7Context;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterUnfold) {
	 		listener.enterUnfold(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitUnfold) {
	 		listener.exitUnfold(this);
		}
	}
}
export class DotTupleContext extends Expr6Context {
	public _p_4_1!: Expr6Context;
	public _p_4_3!: Token;
	constructor(parser: StellaParser, ctx: Expr6Context) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_26(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_26, 0);
	}
	public expr6(): Expr6Context {
		return this.getTypedRuleContext(Expr6Context, 0) as Expr6Context;
	}
	public INTEGER(): TerminalNode {
		return this.getToken(StellaParser.INTEGER, 0);
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterDotTuple) {
	 		listener.enterDotTuple(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitDotTuple) {
	 		listener.exitDotTuple(this);
		}
	}
}
export class FixContext extends Expr6Context {
	public _p_22_3!: ExprContext;
	constructor(parser: StellaParser, ctx: Expr6Context) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_51(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_51, 0);
	}
	public Surrogate_id_SYMB_2(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_2, 0);
	}
	public Surrogate_id_SYMB_3(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_3, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterFix) {
	 		listener.enterFix(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitFix) {
	 		listener.exitFix(this);
		}
	}
}
export class ApplicationContext extends Expr6Context {
	public _p_1_1!: Expr6Context;
	public _p_1_3!: ListExprContext;
	constructor(parser: StellaParser, ctx: Expr6Context) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_2(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_2, 0);
	}
	public Surrogate_id_SYMB_3(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_3, 0);
	}
	public expr6(): Expr6Context {
		return this.getTypedRuleContext(Expr6Context, 0) as Expr6Context;
	}
	public listExpr(): ListExprContext {
		return this.getTypedRuleContext(ListExprContext, 0) as ListExprContext;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterApplication) {
	 		listener.enterApplication(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitApplication) {
	 		listener.exitApplication(this);
		}
	}
}
export class TupleContext extends Expr6Context {
	public _p_5_2!: ListExprContext;
	constructor(parser: StellaParser, ctx: Expr6Context) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_4(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_4, 0);
	}
	public Surrogate_id_SYMB_5(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_5, 0);
	}
	public listExpr(): ListExprContext {
		return this.getTypedRuleContext(ListExprContext, 0) as ListExprContext;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterTuple) {
	 		listener.enterTuple(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitTuple) {
	 		listener.exitTuple(this);
		}
	}
}
export class ConsListContext extends Expr6Context {
	public _p_7_3!: ExprContext;
	public _p_7_5!: ExprContext;
	constructor(parser: StellaParser, ctx: Expr6Context) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_45(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_45, 0);
	}
	public Surrogate_id_SYMB_2(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_2, 0);
	}
	public Surrogate_id_SYMB_0(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_0, 0);
	}
	public Surrogate_id_SYMB_3(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_3, 0);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterConsList) {
	 		listener.enterConsList(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitConsList) {
	 		listener.exitConsList(this);
		}
	}
}


export class Expr7Context extends ParserRuleContext {
	constructor(parser?: StellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return StellaParser.RULE_expr7;
	}
	public copyFrom(ctx: Expr7Context): void {
		super.copyFrom(ctx);
	}
}
export class ConstTrueContext extends Expr7Context {
	constructor(parser: StellaParser, ctx: Expr7Context) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_73(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_73, 0);
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterConstTrue) {
	 		listener.enterConstTrue(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitConstTrue) {
	 		listener.exitConstTrue(this);
		}
	}
}
export class Coercion_Expr7_7Context extends Expr7Context {
	public _p_7_2!: ExprContext;
	constructor(parser: StellaParser, ctx: Expr7Context) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_2(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_2, 0);
	}
	public Surrogate_id_SYMB_3(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_3, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterCoercion_Expr7_7) {
	 		listener.enterCoercion_Expr7_7(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitCoercion_Expr7_7) {
	 		listener.exitCoercion_Expr7_7(this);
		}
	}
}
export class ConstUnitContext extends Expr7Context {
	constructor(parser: StellaParser, ctx: Expr7Context) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_77(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_77, 0);
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterConstUnit) {
	 		listener.enterConstUnit(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitConstUnit) {
	 		listener.exitConstUnit(this);
		}
	}
}
export class VarContext extends Expr7Context {
	public _p_6_1!: Token;
	constructor(parser: StellaParser, ctx: Expr7Context) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public StellaIdent(): TerminalNode {
		return this.getToken(StellaParser.StellaIdent, 0);
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterVar) {
	 		listener.enterVar(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitVar) {
	 		listener.exitVar(this);
		}
	}
}
export class ConstMemoryContext extends Expr7Context {
	public _p_5_1!: Token;
	constructor(parser: StellaParser, ctx: Expr7Context) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public MemoryAddress(): TerminalNode {
		return this.getToken(StellaParser.MemoryAddress, 0);
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterConstMemory) {
	 		listener.enterConstMemory(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitConstMemory) {
	 		listener.exitConstMemory(this);
		}
	}
}
export class ConstFalseContext extends Expr7Context {
	constructor(parser: StellaParser, ctx: Expr7Context) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_50(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_50, 0);
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterConstFalse) {
	 		listener.enterConstFalse(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitConstFalse) {
	 		listener.exitConstFalse(this);
		}
	}
}
export class ConstIntContext extends Expr7Context {
	public _p_4_1!: Token;
	constructor(parser: StellaParser, ctx: Expr7Context) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public INTEGER(): TerminalNode {
		return this.getToken(StellaParser.INTEGER, 0);
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterConstInt) {
	 		listener.enterConstInt(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitConstInt) {
	 		listener.exitConstInt(this);
		}
	}
}


export class TypeContext extends ParserRuleContext {
	constructor(parser?: StellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return StellaParser.RULE_type;
	}
	public copyFrom(ctx: TypeContext): void {
		super.copyFrom(ctx);
	}
}
export class Coercion_Type_5Context extends TypeContext {
	public _p_5_1!: Type1Context;
	constructor(parser: StellaParser, ctx: TypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public type1(): Type1Context {
		return this.getTypedRuleContext(Type1Context, 0) as Type1Context;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterCoercion_Type_5) {
	 		listener.enterCoercion_Type_5(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitCoercion_Type_5) {
	 		listener.exitCoercion_Type_5(this);
		}
	}
}
export class TypeRecContext extends TypeContext {
	public _p_4_2!: Token;
	public _p_4_4!: TypeContext;
	constructor(parser: StellaParser, ctx: TypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_80(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_80, 0);
	}
	public Surrogate_id_SYMB_26(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_26, 0);
	}
	public StellaIdent(): TerminalNode {
		return this.getToken(StellaParser.StellaIdent, 0);
	}
	public type_(): TypeContext {
		return this.getTypedRuleContext(TypeContext, 0) as TypeContext;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterTypeRec) {
	 		listener.enterTypeRec(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitTypeRec) {
	 		listener.exitTypeRec(this);
		}
	}
}
export class TypeFunContext extends TypeContext {
	public _p_2_3!: ListTypeContext;
	public _p_2_6!: TypeContext;
	constructor(parser: StellaParser, ctx: TypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_52(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_52, 0);
	}
	public Surrogate_id_SYMB_2(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_2, 0);
	}
	public Surrogate_id_SYMB_3(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_3, 0);
	}
	public Surrogate_id_SYMB_10(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_10, 0);
	}
	public listType(): ListTypeContext {
		return this.getTypedRuleContext(ListTypeContext, 0) as ListTypeContext;
	}
	public type_(): TypeContext {
		return this.getTypedRuleContext(TypeContext, 0) as TypeContext;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterTypeFun) {
	 		listener.enterTypeFun(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitTypeFun) {
	 		listener.exitTypeFun(this);
		}
	}
}
export class TypeAutoContext extends TypeContext {
	constructor(parser: StellaParser, ctx: TypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_42(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_42, 0);
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterTypeAuto) {
	 		listener.enterTypeAuto(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitTypeAuto) {
	 		listener.exitTypeAuto(this);
		}
	}
}
export class TypeForAllContext extends TypeContext {
	public _p_3_2!: ListStellaIdentContext;
	public _p_3_4!: TypeContext;
	constructor(parser: StellaParser, ctx: TypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_54(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_54, 0);
	}
	public Surrogate_id_SYMB_26(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_26, 0);
	}
	public listStellaIdent(): ListStellaIdentContext {
		return this.getTypedRuleContext(ListStellaIdentContext, 0) as ListStellaIdentContext;
	}
	public type_(): TypeContext {
		return this.getTypedRuleContext(TypeContext, 0) as TypeContext;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterTypeForAll) {
	 		listener.enterTypeForAll(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitTypeForAll) {
	 		listener.exitTypeForAll(this);
		}
	}
}


export class Type1Context extends ParserRuleContext {
	constructor(parser?: StellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return StellaParser.RULE_type1;
	}
	public copyFrom(ctx: Type1Context): void {
		super.copyFrom(ctx);
	}
}
export class Coercion_Type1_2Context extends Type1Context {
	public _p_2_1!: Type2Context;
	constructor(parser: StellaParser, ctx: Type1Context) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public type2(): Type2Context {
		return this.getTypedRuleContext(Type2Context, 0) as Type2Context;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterCoercion_Type1_2) {
	 		listener.enterCoercion_Type1_2(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitCoercion_Type1_2) {
	 		listener.exitCoercion_Type1_2(this);
		}
	}
}
export class TypeSumContext extends Type1Context {
	public _p_1_1!: Type2Context;
	public _p_1_3!: Type2Context;
	constructor(parser: StellaParser, ctx: Type1Context) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_22(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_22, 0);
	}
	public type2_list(): Type2Context[] {
		return this.getTypedRuleContexts(Type2Context) as Type2Context[];
	}
	public type2(i: number): Type2Context {
		return this.getTypedRuleContext(Type2Context, i) as Type2Context;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterTypeSum) {
	 		listener.enterTypeSum(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitTypeSum) {
	 		listener.exitTypeSum(this);
		}
	}
}


export class Type2Context extends ParserRuleContext {
	constructor(parser?: StellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return StellaParser.RULE_type2;
	}
	public copyFrom(ctx: Type2Context): void {
		super.copyFrom(ctx);
	}
}
export class TypeTupleContext extends Type2Context {
	public _p_1_2!: ListTypeContext;
	constructor(parser: StellaParser, ctx: Type2Context) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_4(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_4, 0);
	}
	public Surrogate_id_SYMB_5(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_5, 0);
	}
	public listType(): ListTypeContext {
		return this.getTypedRuleContext(ListTypeContext, 0) as ListTypeContext;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterTypeTuple) {
	 		listener.enterTypeTuple(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitTypeTuple) {
	 		listener.exitTypeTuple(this);
		}
	}
}
export class TypeVariantContext extends Type2Context {
	public _p_3_2!: ListVariantFieldTypeContext;
	constructor(parser: StellaParser, ctx: Type2Context) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_13(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_13, 0);
	}
	public Surrogate_id_SYMB_14(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_14, 0);
	}
	public listVariantFieldType(): ListVariantFieldTypeContext {
		return this.getTypedRuleContext(ListVariantFieldTypeContext, 0) as ListVariantFieldTypeContext;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterTypeVariant) {
	 		listener.enterTypeVariant(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitTypeVariant) {
	 		listener.exitTypeVariant(this);
		}
	}
}
export class Coercion_Type2_5Context extends Type2Context {
	public _p_5_1!: Type3Context;
	constructor(parser: StellaParser, ctx: Type2Context) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public type3(): Type3Context {
		return this.getTypedRuleContext(Type3Context, 0) as Type3Context;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterCoercion_Type2_5) {
	 		listener.enterCoercion_Type2_5(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitCoercion_Type2_5) {
	 		listener.exitCoercion_Type2_5(this);
		}
	}
}
export class TypeRecordContext extends Type2Context {
	public _p_2_2!: ListRecordFieldTypeContext;
	constructor(parser: StellaParser, ctx: Type2Context) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_4(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_4, 0);
	}
	public Surrogate_id_SYMB_5(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_5, 0);
	}
	public listRecordFieldType(): ListRecordFieldTypeContext {
		return this.getTypedRuleContext(ListRecordFieldTypeContext, 0) as ListRecordFieldTypeContext;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterTypeRecord) {
	 		listener.enterTypeRecord(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitTypeRecord) {
	 		listener.exitTypeRecord(this);
		}
	}
}
export class TypeListContext extends Type2Context {
	public _p_4_2!: TypeContext;
	constructor(parser: StellaParser, ctx: Type2Context) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_6(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_6, 0);
	}
	public Surrogate_id_SYMB_7(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_7, 0);
	}
	public type_(): TypeContext {
		return this.getTypedRuleContext(TypeContext, 0) as TypeContext;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterTypeList) {
	 		listener.enterTypeList(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitTypeList) {
	 		listener.exitTypeList(this);
		}
	}
}


export class Type3Context extends ParserRuleContext {
	constructor(parser?: StellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return StellaParser.RULE_type3;
	}
	public copyFrom(ctx: Type3Context): void {
		super.copyFrom(ctx);
	}
}
export class TypeVarContext extends Type3Context {
	public _p_7_1!: Token;
	constructor(parser: StellaParser, ctx: Type3Context) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public StellaIdent(): TerminalNode {
		return this.getToken(StellaParser.StellaIdent, 0);
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterTypeVar) {
	 		listener.enterTypeVar(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitTypeVar) {
	 		listener.exitTypeVar(this);
		}
	}
}
export class TypeTopContext extends Type3Context {
	constructor(parser: StellaParser, ctx: Type3Context) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_38(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_38, 0);
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterTypeTop) {
	 		listener.enterTypeTop(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitTypeTop) {
	 		listener.exitTypeTop(this);
		}
	}
}
export class TypeUnitContext extends Type3Context {
	constructor(parser: StellaParser, ctx: Type3Context) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_39(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_39, 0);
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterTypeUnit) {
	 		listener.enterTypeUnit(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitTypeUnit) {
	 		listener.exitTypeUnit(this);
		}
	}
}
export class TypeBoolContext extends Type3Context {
	constructor(parser: StellaParser, ctx: Type3Context) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_35(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_35, 0);
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterTypeBool) {
	 		listener.enterTypeBool(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitTypeBool) {
	 		listener.exitTypeBool(this);
		}
	}
}
export class TypeRefContext extends Type3Context {
	public _p_6_2!: Type2Context;
	constructor(parser: StellaParser, ctx: Type3Context) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_34(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_34, 0);
	}
	public type2(): Type2Context {
		return this.getTypedRuleContext(Type2Context, 0) as Type2Context;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterTypeRef) {
	 		listener.enterTypeRef(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitTypeRef) {
	 		listener.exitTypeRef(this);
		}
	}
}
export class TypeNatContext extends Type3Context {
	constructor(parser: StellaParser, ctx: Type3Context) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_37(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_37, 0);
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterTypeNat) {
	 		listener.enterTypeNat(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitTypeNat) {
	 		listener.exitTypeNat(this);
		}
	}
}
export class TypeBottomContext extends Type3Context {
	constructor(parser: StellaParser, ctx: Type3Context) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_36(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_36, 0);
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterTypeBottom) {
	 		listener.enterTypeBottom(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitTypeBottom) {
	 		listener.exitTypeBottom(this);
		}
	}
}
export class Coercion_Type3_8Context extends Type3Context {
	public _p_8_2!: TypeContext;
	constructor(parser: StellaParser, ctx: Type3Context) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_2(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_2, 0);
	}
	public Surrogate_id_SYMB_3(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_3, 0);
	}
	public type_(): TypeContext {
		return this.getTypedRuleContext(TypeContext, 0) as TypeContext;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterCoercion_Type3_8) {
	 		listener.enterCoercion_Type3_8(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitCoercion_Type3_8) {
	 		listener.exitCoercion_Type3_8(this);
		}
	}
}


export class ListTypeContext extends ParserRuleContext {
	constructor(parser?: StellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return StellaParser.RULE_listType;
	}
	public copyFrom(ctx: ListTypeContext): void {
		super.copyFrom(ctx);
	}
}
export class ListType_AppendLastContext extends ListTypeContext {
	public _p_2_1!: TypeContext;
	constructor(parser: StellaParser, ctx: ListTypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public type_(): TypeContext {
		return this.getTypedRuleContext(TypeContext, 0) as TypeContext;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterListType_AppendLast) {
	 		listener.enterListType_AppendLast(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitListType_AppendLast) {
	 		listener.exitListType_AppendLast(this);
		}
	}
}
export class ListType_EmptyContext extends ListTypeContext {
	constructor(parser: StellaParser, ctx: ListTypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterListType_Empty) {
	 		listener.enterListType_Empty(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitListType_Empty) {
	 		listener.exitListType_Empty(this);
		}
	}
}
export class ListType_PrependFirstContext extends ListTypeContext {
	public _p_3_1!: TypeContext;
	public _p_3_3!: ListTypeContext;
	constructor(parser: StellaParser, ctx: ListTypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_0(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_0, 0);
	}
	public type_(): TypeContext {
		return this.getTypedRuleContext(TypeContext, 0) as TypeContext;
	}
	public listType(): ListTypeContext {
		return this.getTypedRuleContext(ListTypeContext, 0) as ListTypeContext;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterListType_PrependFirst) {
	 		listener.enterListType_PrependFirst(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitListType_PrependFirst) {
	 		listener.exitListType_PrependFirst(this);
		}
	}
}


export class VariantFieldTypeContext extends ParserRuleContext {
	constructor(parser?: StellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return StellaParser.RULE_variantFieldType;
	}
	public copyFrom(ctx: VariantFieldTypeContext): void {
		super.copyFrom(ctx);
	}
}
export class AVariantFieldTypeContext extends VariantFieldTypeContext {
	public _p_1_1!: Token;
	public _p_1_2!: OptionalTypingContext;
	constructor(parser: StellaParser, ctx: VariantFieldTypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public StellaIdent(): TerminalNode {
		return this.getToken(StellaParser.StellaIdent, 0);
	}
	public optionalTyping(): OptionalTypingContext {
		return this.getTypedRuleContext(OptionalTypingContext, 0) as OptionalTypingContext;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterAVariantFieldType) {
	 		listener.enterAVariantFieldType(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitAVariantFieldType) {
	 		listener.exitAVariantFieldType(this);
		}
	}
}


export class ListVariantFieldTypeContext extends ParserRuleContext {
	constructor(parser?: StellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return StellaParser.RULE_listVariantFieldType;
	}
	public copyFrom(ctx: ListVariantFieldTypeContext): void {
		super.copyFrom(ctx);
	}
}
export class ListVariantFieldType_EmptyContext extends ListVariantFieldTypeContext {
	constructor(parser: StellaParser, ctx: ListVariantFieldTypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterListVariantFieldType_Empty) {
	 		listener.enterListVariantFieldType_Empty(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitListVariantFieldType_Empty) {
	 		listener.exitListVariantFieldType_Empty(this);
		}
	}
}
export class ListVariantFieldType_AppendLastContext extends ListVariantFieldTypeContext {
	public _p_2_1!: VariantFieldTypeContext;
	constructor(parser: StellaParser, ctx: ListVariantFieldTypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public variantFieldType(): VariantFieldTypeContext {
		return this.getTypedRuleContext(VariantFieldTypeContext, 0) as VariantFieldTypeContext;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterListVariantFieldType_AppendLast) {
	 		listener.enterListVariantFieldType_AppendLast(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitListVariantFieldType_AppendLast) {
	 		listener.exitListVariantFieldType_AppendLast(this);
		}
	}
}
export class ListVariantFieldType_PrependFirstContext extends ListVariantFieldTypeContext {
	public _p_3_1!: VariantFieldTypeContext;
	public _p_3_3!: ListVariantFieldTypeContext;
	constructor(parser: StellaParser, ctx: ListVariantFieldTypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_0(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_0, 0);
	}
	public variantFieldType(): VariantFieldTypeContext {
		return this.getTypedRuleContext(VariantFieldTypeContext, 0) as VariantFieldTypeContext;
	}
	public listVariantFieldType(): ListVariantFieldTypeContext {
		return this.getTypedRuleContext(ListVariantFieldTypeContext, 0) as ListVariantFieldTypeContext;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterListVariantFieldType_PrependFirst) {
	 		listener.enterListVariantFieldType_PrependFirst(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitListVariantFieldType_PrependFirst) {
	 		listener.exitListVariantFieldType_PrependFirst(this);
		}
	}
}


export class RecordFieldTypeContext extends ParserRuleContext {
	constructor(parser?: StellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return StellaParser.RULE_recordFieldType;
	}
	public copyFrom(ctx: RecordFieldTypeContext): void {
		super.copyFrom(ctx);
	}
}
export class ARecordFieldTypeContext extends RecordFieldTypeContext {
	public _p_1_1!: Token;
	public _p_1_3!: TypeContext;
	constructor(parser: StellaParser, ctx: RecordFieldTypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_9(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_9, 0);
	}
	public StellaIdent(): TerminalNode {
		return this.getToken(StellaParser.StellaIdent, 0);
	}
	public type_(): TypeContext {
		return this.getTypedRuleContext(TypeContext, 0) as TypeContext;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterARecordFieldType) {
	 		listener.enterARecordFieldType(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitARecordFieldType) {
	 		listener.exitARecordFieldType(this);
		}
	}
}


export class ListRecordFieldTypeContext extends ParserRuleContext {
	constructor(parser?: StellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return StellaParser.RULE_listRecordFieldType;
	}
	public copyFrom(ctx: ListRecordFieldTypeContext): void {
		super.copyFrom(ctx);
	}
}
export class ListRecordFieldType_PrependFirstContext extends ListRecordFieldTypeContext {
	public _p_2_1!: RecordFieldTypeContext;
	public _p_2_3!: ListRecordFieldTypeContext;
	constructor(parser: StellaParser, ctx: ListRecordFieldTypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_0(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_0, 0);
	}
	public recordFieldType(): RecordFieldTypeContext {
		return this.getTypedRuleContext(RecordFieldTypeContext, 0) as RecordFieldTypeContext;
	}
	public listRecordFieldType(): ListRecordFieldTypeContext {
		return this.getTypedRuleContext(ListRecordFieldTypeContext, 0) as ListRecordFieldTypeContext;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterListRecordFieldType_PrependFirst) {
	 		listener.enterListRecordFieldType_PrependFirst(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitListRecordFieldType_PrependFirst) {
	 		listener.exitListRecordFieldType_PrependFirst(this);
		}
	}
}
export class ListRecordFieldType_AppendLastContext extends ListRecordFieldTypeContext {
	public _p_1_1!: RecordFieldTypeContext;
	constructor(parser: StellaParser, ctx: ListRecordFieldTypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public recordFieldType(): RecordFieldTypeContext {
		return this.getTypedRuleContext(RecordFieldTypeContext, 0) as RecordFieldTypeContext;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterListRecordFieldType_AppendLast) {
	 		listener.enterListRecordFieldType_AppendLast(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitListRecordFieldType_AppendLast) {
	 		listener.exitListRecordFieldType_AppendLast(this);
		}
	}
}


export class TypingContext extends ParserRuleContext {
	constructor(parser?: StellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return StellaParser.RULE_typing;
	}
	public copyFrom(ctx: TypingContext): void {
		super.copyFrom(ctx);
	}
}
export class ATypingContext extends TypingContext {
	public _p_1_1!: ExprContext;
	public _p_1_3!: TypeContext;
	constructor(parser: StellaParser, ctx: TypingContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_9(): TerminalNode {
		return this.getToken(StellaParser.Surrogate_id_SYMB_9, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public type_(): TypeContext {
		return this.getTypedRuleContext(TypeContext, 0) as TypeContext;
	}
	public enterRule(listener: StellaParserListener): void {
	    if(listener.enterATyping) {
	 		listener.enterATyping(this);
		}
	}
	public exitRule(listener: StellaParserListener): void {
	    if(listener.exitATyping) {
	 		listener.exitATyping(this);
		}
	}
}
