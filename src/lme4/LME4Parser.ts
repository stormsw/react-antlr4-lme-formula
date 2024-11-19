// Generated from LME4.g4 by ANTLR 4.13.2
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
import LME4Listener from "./LME4Listener.js";
import LME4Visitor from "./LME4Visitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class LME4Parser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly PLUS = 5;
	public static readonly MINUS = 6;
	public static readonly STAR = 7;
	public static readonly COLON = 8;
	public static readonly CARET = 9;
	public static readonly LPAREN = 10;
	public static readonly RPAREN = 11;
	public static readonly SLASH = 12;
	public static readonly TILDE = 13;
	public static readonly PIPE = 14;
	public static readonly IDENTIFIER = 15;
	public static readonly NUMBER = 16;
	public static readonly WS = 17;
	public static override readonly EOF = Token.EOF;
	public static readonly RULE_formula = 0;
	public static readonly RULE_expression = 1;
	public static readonly RULE_terms = 2;
	public static readonly RULE_operator = 3;
	public static readonly RULE_terminator = 4;
	public static readonly RULE_term = 5;
	public static readonly RULE_fixedEffect = 6;
	public static readonly RULE_function = 7;
	public static readonly RULE_functionArgs = 8;
	public static readonly RULE_interaction = 9;
	public static readonly RULE_multiTerm = 10;
	public static readonly RULE_randomEffect = 11;
	public static readonly RULE_randomTerm = 12;
	public static readonly RULE_randomSlope = 13;
	public static readonly RULE_nestedGroups = 14;
	public static readonly RULE_intercept = 15;
	public static readonly RULE_nestedTerm = 16;
	public static readonly literalNames: (string | null)[] = [ null, "','", 
                                                            "'0'", "'1'", 
                                                            "'-1'", "'+'", 
                                                            "'-'", "'*'", 
                                                            "':'", "'^'", 
                                                            "'('", "')'", 
                                                            "'/'", "'~'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, null, 
                                                             null, null, 
                                                             null, "PLUS", 
                                                             "MINUS", "STAR", 
                                                             "COLON", "CARET", 
                                                             "LPAREN", "RPAREN", 
                                                             "SLASH", "TILDE", 
                                                             "PIPE", "IDENTIFIER", 
                                                             "NUMBER", "WS" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"formula", "expression", "terms", "operator", "terminator", "term", "fixedEffect", 
		"function", "functionArgs", "interaction", "multiTerm", "randomEffect", 
		"randomTerm", "randomSlope", "nestedGroups", "intercept", "nestedTerm",
	];
	public get grammarFileName(): string { return "LME4.g4"; }
	public get literalNames(): (string | null)[] { return LME4Parser.literalNames; }
	public get symbolicNames(): (string | null)[] { return LME4Parser.symbolicNames; }
	public get ruleNames(): string[] { return LME4Parser.ruleNames; }
	public get serializedATN(): number[] { return LME4Parser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, LME4Parser._ATN, LME4Parser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public formula(): FormulaContext {
		let localctx: FormulaContext = new FormulaContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, LME4Parser.RULE_formula);
		try {
			this.state = 46;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 0, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 34;
				this.expression();
				this.state = 35;
				this.match(LME4Parser.TILDE);
				this.state = 36;
				this.terms();
				this.state = 37;
				this.match(LME4Parser.EOF);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 39;
				this.match(LME4Parser.TILDE);
				this.state = 40;
				this.terms();
				this.state = 41;
				this.match(LME4Parser.EOF);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 43;
				this.terms();
				this.state = 44;
				this.match(LME4Parser.EOF);
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
	public expression(): ExpressionContext {
		let localctx: ExpressionContext = new ExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, LME4Parser.RULE_expression);
		try {
			this.state = 51;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 15:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 48;
				this.match(LME4Parser.IDENTIFIER);
				}
				break;
			case 16:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 49;
				this.match(LME4Parser.NUMBER);
				}
				break;
			case 2:
			case 3:
			case 4:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 50;
				this.intercept();
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
	public terms(): TermsContext {
		let localctx: TermsContext = new TermsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, LME4Parser.RULE_terms);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 53;
			this.term();
			this.state = 59;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 992) !== 0)) {
				{
				{
				this.state = 54;
				this.operator();
				this.state = 55;
				this.term();
				}
				}
				this.state = 61;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
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
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public operator(): OperatorContext {
		let localctx: OperatorContext = new OperatorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, LME4Parser.RULE_operator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 62;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 992) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
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
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public terminator(): TerminatorContext {
		let localctx: TerminatorContext = new TerminatorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, LME4Parser.RULE_terminator);
		try {
			this.state = 67;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case -1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 64;
				this.match(LME4Parser.EOF);
				}
				break;
			case 5:
			case 6:
			case 7:
			case 8:
			case 9:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 65;
				this.operator();
				}
				break;
			case 17:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 66;
				this.match(LME4Parser.WS);
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
	public term(): TermContext {
		let localctx: TermContext = new TermContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, LME4Parser.RULE_term);
		try {
			this.state = 74;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 69;
				this.fixedEffect();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 70;
				this.randomEffect();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 71;
				this.interaction();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 72;
				this.intercept();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 73;
				this.nestedTerm();
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
	public fixedEffect(): FixedEffectContext {
		let localctx: FixedEffectContext = new FixedEffectContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, LME4Parser.RULE_fixedEffect);
		try {
			this.state = 78;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 76;
				this.match(LME4Parser.IDENTIFIER);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 77;
				this.function_();
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
	public function_(): FunctionContext {
		let localctx: FunctionContext = new FunctionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, LME4Parser.RULE_function);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 80;
			this.match(LME4Parser.IDENTIFIER);
			this.state = 81;
			this.match(LME4Parser.LPAREN);
			this.state = 82;
			this.functionArgs();
			this.state = 83;
			this.match(LME4Parser.RPAREN);
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
	public functionArgs(): FunctionArgsContext {
		let localctx: FunctionArgsContext = new FunctionArgsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, LME4Parser.RULE_functionArgs);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 85;
			_la = this._input.LA(1);
			if(!(_la===15 || _la===16)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 90;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===1) {
				{
				{
				this.state = 86;
				this.match(LME4Parser.T__0);
				this.state = 87;
				_la = this._input.LA(1);
				if(!(_la===15 || _la===16)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
				}
				this.state = 92;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
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
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public interaction(): InteractionContext {
		let localctx: InteractionContext = new InteractionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, LME4Parser.RULE_interaction);
		try {
			this.state = 106;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 93;
				this.match(LME4Parser.IDENTIFIER);
				this.state = 94;
				this.match(LME4Parser.COLON);
				this.state = 95;
				this.match(LME4Parser.IDENTIFIER);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 96;
				this.match(LME4Parser.IDENTIFIER);
				this.state = 97;
				this.match(LME4Parser.STAR);
				this.state = 98;
				this.match(LME4Parser.IDENTIFIER);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 99;
				this.match(LME4Parser.LPAREN);
				this.state = 100;
				this.multiTerm();
				this.state = 101;
				this.match(LME4Parser.RPAREN);
				this.state = 104;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 7, this._ctx) ) {
				case 1:
					{
					this.state = 102;
					this.match(LME4Parser.CARET);
					this.state = 103;
					this.match(LME4Parser.NUMBER);
					}
					break;
				}
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
	public multiTerm(): MultiTermContext {
		let localctx: MultiTermContext = new MultiTermContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, LME4Parser.RULE_multiTerm);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 108;
			this.term();
			this.state = 113;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===5 || _la===7) {
				{
				{
				this.state = 109;
				_la = this._input.LA(1);
				if(!(_la===5 || _la===7)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 110;
				this.term();
				}
				}
				this.state = 115;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
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
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public randomEffect(): RandomEffectContext {
		let localctx: RandomEffectContext = new RandomEffectContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, LME4Parser.RULE_randomEffect);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 116;
			this.match(LME4Parser.LPAREN);
			this.state = 117;
			this.randomTerm();
			this.state = 118;
			this.match(LME4Parser.RPAREN);
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
	public randomTerm(): RandomTermContext {
		let localctx: RandomTermContext = new RandomTermContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, LME4Parser.RULE_randomTerm);
		let _la: number;
		try {
			this.state = 134;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 2:
			case 3:
			case 4:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 122;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 10, this._ctx) ) {
				case 1:
					{
					this.state = 120;
					this.intercept();
					}
					break;
				case 2:
					{
					this.state = 121;
					this.match(LME4Parser.T__1);
					}
					break;
				}
				this.state = 126;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===5) {
					{
					this.state = 124;
					this.match(LME4Parser.PLUS);
					this.state = 125;
					this.randomSlope();
					}
				}

				this.state = 128;
				this.match(LME4Parser.PIPE);
				this.state = 129;
				this.nestedGroups();
				}
				break;
			case 15:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 130;
				this.randomSlope();
				this.state = 131;
				this.match(LME4Parser.PIPE);
				this.state = 132;
				this.nestedGroups();
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
	public randomSlope(): RandomSlopeContext {
		let localctx: RandomSlopeContext = new RandomSlopeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 26, LME4Parser.RULE_randomSlope);
		try {
			this.state = 140;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 13, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 136;
				this.match(LME4Parser.IDENTIFIER);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 137;
				this.match(LME4Parser.IDENTIFIER);
				this.state = 138;
				this.match(LME4Parser.STAR);
				this.state = 139;
				this.match(LME4Parser.IDENTIFIER);
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
	public nestedGroups(): NestedGroupsContext {
		let localctx: NestedGroupsContext = new NestedGroupsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 28, LME4Parser.RULE_nestedGroups);
		let _la: number;
		try {
			this.state = 158;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 16, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 142;
				this.match(LME4Parser.IDENTIFIER);
				this.state = 147;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===12) {
					{
					{
					this.state = 143;
					this.match(LME4Parser.SLASH);
					this.state = 144;
					this.match(LME4Parser.IDENTIFIER);
					}
					}
					this.state = 149;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 150;
				this.match(LME4Parser.IDENTIFIER);
				this.state = 155;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===8) {
					{
					{
					this.state = 151;
					this.match(LME4Parser.COLON);
					this.state = 152;
					this.match(LME4Parser.IDENTIFIER);
					}
					}
					this.state = 157;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
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
	public intercept(): InterceptContext {
		let localctx: InterceptContext = new InterceptContext(this, this._ctx, this.state);
		this.enterRule(localctx, 30, LME4Parser.RULE_intercept);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 160;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 28) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
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
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public nestedTerm(): NestedTermContext {
		let localctx: NestedTermContext = new NestedTermContext(this, this._ctx, this.state);
		this.enterRule(localctx, 32, LME4Parser.RULE_nestedTerm);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 162;
			this.match(LME4Parser.LPAREN);
			this.state = 163;
			this.terms();
			this.state = 164;
			this.match(LME4Parser.RPAREN);
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

	public static readonly _serializedATN: number[] = [4,1,17,167,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,1,0,
	1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,3,0,47,8,0,1,1,1,1,1,1,3,1,
	52,8,1,1,2,1,2,1,2,1,2,5,2,58,8,2,10,2,12,2,61,9,2,1,3,1,3,1,4,1,4,1,4,
	3,4,68,8,4,1,5,1,5,1,5,1,5,1,5,3,5,75,8,5,1,6,1,6,3,6,79,8,6,1,7,1,7,1,
	7,1,7,1,7,1,8,1,8,1,8,5,8,89,8,8,10,8,12,8,92,9,8,1,9,1,9,1,9,1,9,1,9,1,
	9,1,9,1,9,1,9,1,9,1,9,3,9,105,8,9,3,9,107,8,9,1,10,1,10,1,10,5,10,112,8,
	10,10,10,12,10,115,9,10,1,11,1,11,1,11,1,11,1,12,1,12,3,12,123,8,12,1,12,
	1,12,3,12,127,8,12,1,12,1,12,1,12,1,12,1,12,1,12,3,12,135,8,12,1,13,1,13,
	1,13,1,13,3,13,141,8,13,1,14,1,14,1,14,5,14,146,8,14,10,14,12,14,149,9,
	14,1,14,1,14,1,14,5,14,154,8,14,10,14,12,14,157,9,14,3,14,159,8,14,1,15,
	1,15,1,16,1,16,1,16,1,16,1,16,0,0,17,0,2,4,6,8,10,12,14,16,18,20,22,24,
	26,28,30,32,0,4,1,0,5,9,1,0,15,16,2,0,5,5,7,7,1,0,2,4,173,0,46,1,0,0,0,
	2,51,1,0,0,0,4,53,1,0,0,0,6,62,1,0,0,0,8,67,1,0,0,0,10,74,1,0,0,0,12,78,
	1,0,0,0,14,80,1,0,0,0,16,85,1,0,0,0,18,106,1,0,0,0,20,108,1,0,0,0,22,116,
	1,0,0,0,24,134,1,0,0,0,26,140,1,0,0,0,28,158,1,0,0,0,30,160,1,0,0,0,32,
	162,1,0,0,0,34,35,3,2,1,0,35,36,5,13,0,0,36,37,3,4,2,0,37,38,5,0,0,1,38,
	47,1,0,0,0,39,40,5,13,0,0,40,41,3,4,2,0,41,42,5,0,0,1,42,47,1,0,0,0,43,
	44,3,4,2,0,44,45,5,0,0,1,45,47,1,0,0,0,46,34,1,0,0,0,46,39,1,0,0,0,46,43,
	1,0,0,0,47,1,1,0,0,0,48,52,5,15,0,0,49,52,5,16,0,0,50,52,3,30,15,0,51,48,
	1,0,0,0,51,49,1,0,0,0,51,50,1,0,0,0,52,3,1,0,0,0,53,59,3,10,5,0,54,55,3,
	6,3,0,55,56,3,10,5,0,56,58,1,0,0,0,57,54,1,0,0,0,58,61,1,0,0,0,59,57,1,
	0,0,0,59,60,1,0,0,0,60,5,1,0,0,0,61,59,1,0,0,0,62,63,7,0,0,0,63,7,1,0,0,
	0,64,68,5,0,0,1,65,68,3,6,3,0,66,68,5,17,0,0,67,64,1,0,0,0,67,65,1,0,0,
	0,67,66,1,0,0,0,68,9,1,0,0,0,69,75,3,12,6,0,70,75,3,22,11,0,71,75,3,18,
	9,0,72,75,3,30,15,0,73,75,3,32,16,0,74,69,1,0,0,0,74,70,1,0,0,0,74,71,1,
	0,0,0,74,72,1,0,0,0,74,73,1,0,0,0,75,11,1,0,0,0,76,79,5,15,0,0,77,79,3,
	14,7,0,78,76,1,0,0,0,78,77,1,0,0,0,79,13,1,0,0,0,80,81,5,15,0,0,81,82,5,
	10,0,0,82,83,3,16,8,0,83,84,5,11,0,0,84,15,1,0,0,0,85,90,7,1,0,0,86,87,
	5,1,0,0,87,89,7,1,0,0,88,86,1,0,0,0,89,92,1,0,0,0,90,88,1,0,0,0,90,91,1,
	0,0,0,91,17,1,0,0,0,92,90,1,0,0,0,93,94,5,15,0,0,94,95,5,8,0,0,95,107,5,
	15,0,0,96,97,5,15,0,0,97,98,5,7,0,0,98,107,5,15,0,0,99,100,5,10,0,0,100,
	101,3,20,10,0,101,104,5,11,0,0,102,103,5,9,0,0,103,105,5,16,0,0,104,102,
	1,0,0,0,104,105,1,0,0,0,105,107,1,0,0,0,106,93,1,0,0,0,106,96,1,0,0,0,106,
	99,1,0,0,0,107,19,1,0,0,0,108,113,3,10,5,0,109,110,7,2,0,0,110,112,3,10,
	5,0,111,109,1,0,0,0,112,115,1,0,0,0,113,111,1,0,0,0,113,114,1,0,0,0,114,
	21,1,0,0,0,115,113,1,0,0,0,116,117,5,10,0,0,117,118,3,24,12,0,118,119,5,
	11,0,0,119,23,1,0,0,0,120,123,3,30,15,0,121,123,5,2,0,0,122,120,1,0,0,0,
	122,121,1,0,0,0,123,126,1,0,0,0,124,125,5,5,0,0,125,127,3,26,13,0,126,124,
	1,0,0,0,126,127,1,0,0,0,127,128,1,0,0,0,128,129,5,14,0,0,129,135,3,28,14,
	0,130,131,3,26,13,0,131,132,5,14,0,0,132,133,3,28,14,0,133,135,1,0,0,0,
	134,122,1,0,0,0,134,130,1,0,0,0,135,25,1,0,0,0,136,141,5,15,0,0,137,138,
	5,15,0,0,138,139,5,7,0,0,139,141,5,15,0,0,140,136,1,0,0,0,140,137,1,0,0,
	0,141,27,1,0,0,0,142,147,5,15,0,0,143,144,5,12,0,0,144,146,5,15,0,0,145,
	143,1,0,0,0,146,149,1,0,0,0,147,145,1,0,0,0,147,148,1,0,0,0,148,159,1,0,
	0,0,149,147,1,0,0,0,150,155,5,15,0,0,151,152,5,8,0,0,152,154,5,15,0,0,153,
	151,1,0,0,0,154,157,1,0,0,0,155,153,1,0,0,0,155,156,1,0,0,0,156,159,1,0,
	0,0,157,155,1,0,0,0,158,142,1,0,0,0,158,150,1,0,0,0,159,29,1,0,0,0,160,
	161,7,3,0,0,161,31,1,0,0,0,162,163,5,10,0,0,163,164,3,4,2,0,164,165,5,11,
	0,0,165,33,1,0,0,0,17,46,51,59,67,74,78,90,104,106,113,122,126,134,140,
	147,155,158];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!LME4Parser.__ATN) {
			LME4Parser.__ATN = new ATNDeserializer().deserialize(LME4Parser._serializedATN);
		}

		return LME4Parser.__ATN;
	}


	static DecisionsToDFA = LME4Parser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class FormulaContext extends ParserRuleContext {
	constructor(parser?: LME4Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public TILDE(): TerminalNode {
		return this.getToken(LME4Parser.TILDE, 0);
	}
	public terms(): TermsContext {
		return this.getTypedRuleContext(TermsContext, 0) as TermsContext;
	}
	public EOF(): TerminalNode {
		return this.getToken(LME4Parser.EOF, 0);
	}
    public get ruleIndex(): number {
    	return LME4Parser.RULE_formula;
	}
	public enterRule(listener: LME4Listener): void {
	    if(listener.enterFormula) {
	 		listener.enterFormula(this);
		}
	}
	public exitRule(listener: LME4Listener): void {
	    if(listener.exitFormula) {
	 		listener.exitFormula(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LME4Visitor<Result>): Result {
		if (visitor.visitFormula) {
			return visitor.visitFormula(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	constructor(parser?: LME4Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(LME4Parser.IDENTIFIER, 0);
	}
	public NUMBER(): TerminalNode {
		return this.getToken(LME4Parser.NUMBER, 0);
	}
	public intercept(): InterceptContext {
		return this.getTypedRuleContext(InterceptContext, 0) as InterceptContext;
	}
    public get ruleIndex(): number {
    	return LME4Parser.RULE_expression;
	}
	public enterRule(listener: LME4Listener): void {
	    if(listener.enterExpression) {
	 		listener.enterExpression(this);
		}
	}
	public exitRule(listener: LME4Listener): void {
	    if(listener.exitExpression) {
	 		listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LME4Visitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TermsContext extends ParserRuleContext {
	constructor(parser?: LME4Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public term_list(): TermContext[] {
		return this.getTypedRuleContexts(TermContext) as TermContext[];
	}
	public term(i: number): TermContext {
		return this.getTypedRuleContext(TermContext, i) as TermContext;
	}
	public operator_list(): OperatorContext[] {
		return this.getTypedRuleContexts(OperatorContext) as OperatorContext[];
	}
	public operator(i: number): OperatorContext {
		return this.getTypedRuleContext(OperatorContext, i) as OperatorContext;
	}
    public get ruleIndex(): number {
    	return LME4Parser.RULE_terms;
	}
	public enterRule(listener: LME4Listener): void {
	    if(listener.enterTerms) {
	 		listener.enterTerms(this);
		}
	}
	public exitRule(listener: LME4Listener): void {
	    if(listener.exitTerms) {
	 		listener.exitTerms(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LME4Visitor<Result>): Result {
		if (visitor.visitTerms) {
			return visitor.visitTerms(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OperatorContext extends ParserRuleContext {
	constructor(parser?: LME4Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public PLUS(): TerminalNode {
		return this.getToken(LME4Parser.PLUS, 0);
	}
	public STAR(): TerminalNode {
		return this.getToken(LME4Parser.STAR, 0);
	}
	public MINUS(): TerminalNode {
		return this.getToken(LME4Parser.MINUS, 0);
	}
	public COLON(): TerminalNode {
		return this.getToken(LME4Parser.COLON, 0);
	}
	public CARET(): TerminalNode {
		return this.getToken(LME4Parser.CARET, 0);
	}
    public get ruleIndex(): number {
    	return LME4Parser.RULE_operator;
	}
	public enterRule(listener: LME4Listener): void {
	    if(listener.enterOperator) {
	 		listener.enterOperator(this);
		}
	}
	public exitRule(listener: LME4Listener): void {
	    if(listener.exitOperator) {
	 		listener.exitOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LME4Visitor<Result>): Result {
		if (visitor.visitOperator) {
			return visitor.visitOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TerminatorContext extends ParserRuleContext {
	constructor(parser?: LME4Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EOF(): TerminalNode {
		return this.getToken(LME4Parser.EOF, 0);
	}
	public operator(): OperatorContext {
		return this.getTypedRuleContext(OperatorContext, 0) as OperatorContext;
	}
	public WS(): TerminalNode {
		return this.getToken(LME4Parser.WS, 0);
	}
    public get ruleIndex(): number {
    	return LME4Parser.RULE_terminator;
	}
	public enterRule(listener: LME4Listener): void {
	    if(listener.enterTerminator) {
	 		listener.enterTerminator(this);
		}
	}
	public exitRule(listener: LME4Listener): void {
	    if(listener.exitTerminator) {
	 		listener.exitTerminator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LME4Visitor<Result>): Result {
		if (visitor.visitTerminator) {
			return visitor.visitTerminator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TermContext extends ParserRuleContext {
	constructor(parser?: LME4Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public fixedEffect(): FixedEffectContext {
		return this.getTypedRuleContext(FixedEffectContext, 0) as FixedEffectContext;
	}
	public randomEffect(): RandomEffectContext {
		return this.getTypedRuleContext(RandomEffectContext, 0) as RandomEffectContext;
	}
	public interaction(): InteractionContext {
		return this.getTypedRuleContext(InteractionContext, 0) as InteractionContext;
	}
	public intercept(): InterceptContext {
		return this.getTypedRuleContext(InterceptContext, 0) as InterceptContext;
	}
	public nestedTerm(): NestedTermContext {
		return this.getTypedRuleContext(NestedTermContext, 0) as NestedTermContext;
	}
    public get ruleIndex(): number {
    	return LME4Parser.RULE_term;
	}
	public enterRule(listener: LME4Listener): void {
	    if(listener.enterTerm) {
	 		listener.enterTerm(this);
		}
	}
	public exitRule(listener: LME4Listener): void {
	    if(listener.exitTerm) {
	 		listener.exitTerm(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LME4Visitor<Result>): Result {
		if (visitor.visitTerm) {
			return visitor.visitTerm(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FixedEffectContext extends ParserRuleContext {
	constructor(parser?: LME4Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(LME4Parser.IDENTIFIER, 0);
	}
	public function_(): FunctionContext {
		return this.getTypedRuleContext(FunctionContext, 0) as FunctionContext;
	}
    public get ruleIndex(): number {
    	return LME4Parser.RULE_fixedEffect;
	}
	public enterRule(listener: LME4Listener): void {
	    if(listener.enterFixedEffect) {
	 		listener.enterFixedEffect(this);
		}
	}
	public exitRule(listener: LME4Listener): void {
	    if(listener.exitFixedEffect) {
	 		listener.exitFixedEffect(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LME4Visitor<Result>): Result {
		if (visitor.visitFixedEffect) {
			return visitor.visitFixedEffect(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionContext extends ParserRuleContext {
	constructor(parser?: LME4Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(LME4Parser.IDENTIFIER, 0);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(LME4Parser.LPAREN, 0);
	}
	public functionArgs(): FunctionArgsContext {
		return this.getTypedRuleContext(FunctionArgsContext, 0) as FunctionArgsContext;
	}
	public RPAREN(): TerminalNode {
		return this.getToken(LME4Parser.RPAREN, 0);
	}
    public get ruleIndex(): number {
    	return LME4Parser.RULE_function;
	}
	public enterRule(listener: LME4Listener): void {
	    if(listener.enterFunction) {
	 		listener.enterFunction(this);
		}
	}
	public exitRule(listener: LME4Listener): void {
	    if(listener.exitFunction) {
	 		listener.exitFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LME4Visitor<Result>): Result {
		if (visitor.visitFunction) {
			return visitor.visitFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionArgsContext extends ParserRuleContext {
	constructor(parser?: LME4Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IDENTIFIER_list(): TerminalNode[] {
	    	return this.getTokens(LME4Parser.IDENTIFIER);
	}
	public IDENTIFIER(i: number): TerminalNode {
		return this.getToken(LME4Parser.IDENTIFIER, i);
	}
	public NUMBER_list(): TerminalNode[] {
	    	return this.getTokens(LME4Parser.NUMBER);
	}
	public NUMBER(i: number): TerminalNode {
		return this.getToken(LME4Parser.NUMBER, i);
	}
    public get ruleIndex(): number {
    	return LME4Parser.RULE_functionArgs;
	}
	public enterRule(listener: LME4Listener): void {
	    if(listener.enterFunctionArgs) {
	 		listener.enterFunctionArgs(this);
		}
	}
	public exitRule(listener: LME4Listener): void {
	    if(listener.exitFunctionArgs) {
	 		listener.exitFunctionArgs(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LME4Visitor<Result>): Result {
		if (visitor.visitFunctionArgs) {
			return visitor.visitFunctionArgs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InteractionContext extends ParserRuleContext {
	constructor(parser?: LME4Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IDENTIFIER_list(): TerminalNode[] {
	    	return this.getTokens(LME4Parser.IDENTIFIER);
	}
	public IDENTIFIER(i: number): TerminalNode {
		return this.getToken(LME4Parser.IDENTIFIER, i);
	}
	public COLON(): TerminalNode {
		return this.getToken(LME4Parser.COLON, 0);
	}
	public STAR(): TerminalNode {
		return this.getToken(LME4Parser.STAR, 0);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(LME4Parser.LPAREN, 0);
	}
	public multiTerm(): MultiTermContext {
		return this.getTypedRuleContext(MultiTermContext, 0) as MultiTermContext;
	}
	public RPAREN(): TerminalNode {
		return this.getToken(LME4Parser.RPAREN, 0);
	}
	public CARET(): TerminalNode {
		return this.getToken(LME4Parser.CARET, 0);
	}
	public NUMBER(): TerminalNode {
		return this.getToken(LME4Parser.NUMBER, 0);
	}
    public get ruleIndex(): number {
    	return LME4Parser.RULE_interaction;
	}
	public enterRule(listener: LME4Listener): void {
	    if(listener.enterInteraction) {
	 		listener.enterInteraction(this);
		}
	}
	public exitRule(listener: LME4Listener): void {
	    if(listener.exitInteraction) {
	 		listener.exitInteraction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LME4Visitor<Result>): Result {
		if (visitor.visitInteraction) {
			return visitor.visitInteraction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MultiTermContext extends ParserRuleContext {
	constructor(parser?: LME4Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public term_list(): TermContext[] {
		return this.getTypedRuleContexts(TermContext) as TermContext[];
	}
	public term(i: number): TermContext {
		return this.getTypedRuleContext(TermContext, i) as TermContext;
	}
	public PLUS_list(): TerminalNode[] {
	    	return this.getTokens(LME4Parser.PLUS);
	}
	public PLUS(i: number): TerminalNode {
		return this.getToken(LME4Parser.PLUS, i);
	}
	public STAR_list(): TerminalNode[] {
	    	return this.getTokens(LME4Parser.STAR);
	}
	public STAR(i: number): TerminalNode {
		return this.getToken(LME4Parser.STAR, i);
	}
    public get ruleIndex(): number {
    	return LME4Parser.RULE_multiTerm;
	}
	public enterRule(listener: LME4Listener): void {
	    if(listener.enterMultiTerm) {
	 		listener.enterMultiTerm(this);
		}
	}
	public exitRule(listener: LME4Listener): void {
	    if(listener.exitMultiTerm) {
	 		listener.exitMultiTerm(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LME4Visitor<Result>): Result {
		if (visitor.visitMultiTerm) {
			return visitor.visitMultiTerm(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RandomEffectContext extends ParserRuleContext {
	constructor(parser?: LME4Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LPAREN(): TerminalNode {
		return this.getToken(LME4Parser.LPAREN, 0);
	}
	public randomTerm(): RandomTermContext {
		return this.getTypedRuleContext(RandomTermContext, 0) as RandomTermContext;
	}
	public RPAREN(): TerminalNode {
		return this.getToken(LME4Parser.RPAREN, 0);
	}
    public get ruleIndex(): number {
    	return LME4Parser.RULE_randomEffect;
	}
	public enterRule(listener: LME4Listener): void {
	    if(listener.enterRandomEffect) {
	 		listener.enterRandomEffect(this);
		}
	}
	public exitRule(listener: LME4Listener): void {
	    if(listener.exitRandomEffect) {
	 		listener.exitRandomEffect(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LME4Visitor<Result>): Result {
		if (visitor.visitRandomEffect) {
			return visitor.visitRandomEffect(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RandomTermContext extends ParserRuleContext {
	constructor(parser?: LME4Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public PIPE(): TerminalNode {
		return this.getToken(LME4Parser.PIPE, 0);
	}
	public nestedGroups(): NestedGroupsContext {
		return this.getTypedRuleContext(NestedGroupsContext, 0) as NestedGroupsContext;
	}
	public intercept(): InterceptContext {
		return this.getTypedRuleContext(InterceptContext, 0) as InterceptContext;
	}
	public PLUS(): TerminalNode {
		return this.getToken(LME4Parser.PLUS, 0);
	}
	public randomSlope(): RandomSlopeContext {
		return this.getTypedRuleContext(RandomSlopeContext, 0) as RandomSlopeContext;
	}
    public get ruleIndex(): number {
    	return LME4Parser.RULE_randomTerm;
	}
	public enterRule(listener: LME4Listener): void {
	    if(listener.enterRandomTerm) {
	 		listener.enterRandomTerm(this);
		}
	}
	public exitRule(listener: LME4Listener): void {
	    if(listener.exitRandomTerm) {
	 		listener.exitRandomTerm(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LME4Visitor<Result>): Result {
		if (visitor.visitRandomTerm) {
			return visitor.visitRandomTerm(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RandomSlopeContext extends ParserRuleContext {
	constructor(parser?: LME4Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IDENTIFIER_list(): TerminalNode[] {
	    	return this.getTokens(LME4Parser.IDENTIFIER);
	}
	public IDENTIFIER(i: number): TerminalNode {
		return this.getToken(LME4Parser.IDENTIFIER, i);
	}
	public STAR(): TerminalNode {
		return this.getToken(LME4Parser.STAR, 0);
	}
    public get ruleIndex(): number {
    	return LME4Parser.RULE_randomSlope;
	}
	public enterRule(listener: LME4Listener): void {
	    if(listener.enterRandomSlope) {
	 		listener.enterRandomSlope(this);
		}
	}
	public exitRule(listener: LME4Listener): void {
	    if(listener.exitRandomSlope) {
	 		listener.exitRandomSlope(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LME4Visitor<Result>): Result {
		if (visitor.visitRandomSlope) {
			return visitor.visitRandomSlope(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NestedGroupsContext extends ParserRuleContext {
	constructor(parser?: LME4Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IDENTIFIER_list(): TerminalNode[] {
	    	return this.getTokens(LME4Parser.IDENTIFIER);
	}
	public IDENTIFIER(i: number): TerminalNode {
		return this.getToken(LME4Parser.IDENTIFIER, i);
	}
	public SLASH_list(): TerminalNode[] {
	    	return this.getTokens(LME4Parser.SLASH);
	}
	public SLASH(i: number): TerminalNode {
		return this.getToken(LME4Parser.SLASH, i);
	}
	public COLON_list(): TerminalNode[] {
	    	return this.getTokens(LME4Parser.COLON);
	}
	public COLON(i: number): TerminalNode {
		return this.getToken(LME4Parser.COLON, i);
	}
    public get ruleIndex(): number {
    	return LME4Parser.RULE_nestedGroups;
	}
	public enterRule(listener: LME4Listener): void {
	    if(listener.enterNestedGroups) {
	 		listener.enterNestedGroups(this);
		}
	}
	public exitRule(listener: LME4Listener): void {
	    if(listener.exitNestedGroups) {
	 		listener.exitNestedGroups(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LME4Visitor<Result>): Result {
		if (visitor.visitNestedGroups) {
			return visitor.visitNestedGroups(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterceptContext extends ParserRuleContext {
	constructor(parser?: LME4Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return LME4Parser.RULE_intercept;
	}
	public enterRule(listener: LME4Listener): void {
	    if(listener.enterIntercept) {
	 		listener.enterIntercept(this);
		}
	}
	public exitRule(listener: LME4Listener): void {
	    if(listener.exitIntercept) {
	 		listener.exitIntercept(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LME4Visitor<Result>): Result {
		if (visitor.visitIntercept) {
			return visitor.visitIntercept(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NestedTermContext extends ParserRuleContext {
	constructor(parser?: LME4Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LPAREN(): TerminalNode {
		return this.getToken(LME4Parser.LPAREN, 0);
	}
	public terms(): TermsContext {
		return this.getTypedRuleContext(TermsContext, 0) as TermsContext;
	}
	public RPAREN(): TerminalNode {
		return this.getToken(LME4Parser.RPAREN, 0);
	}
    public get ruleIndex(): number {
    	return LME4Parser.RULE_nestedTerm;
	}
	public enterRule(listener: LME4Listener): void {
	    if(listener.enterNestedTerm) {
	 		listener.enterNestedTerm(this);
		}
	}
	public exitRule(listener: LME4Listener): void {
	    if(listener.exitNestedTerm) {
	 		listener.exitNestedTerm(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LME4Visitor<Result>): Result {
		if (visitor.visitNestedTerm) {
			return visitor.visitNestedTerm(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
