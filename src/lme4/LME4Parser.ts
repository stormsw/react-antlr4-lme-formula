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
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly IDENTIFIER = 14;
	public static readonly NUMBER = 15;
	public static readonly WS = 16;
	public static override readonly EOF = Token.EOF;
	public static readonly RULE_formula = 0;
	public static readonly RULE_expression = 1;
	public static readonly RULE_terms = 2;
	public static readonly RULE_term = 3;
	public static readonly RULE_fixedEffect = 4;
	public static readonly RULE_function = 5;
	public static readonly RULE_functionArgs = 6;
	public static readonly RULE_randomEffect = 7;
	public static readonly RULE_uncorrelatedRandomEffect = 8;
	public static readonly RULE_randomTerms = 9;
	public static readonly RULE_randomTerm = 10;
	public static readonly RULE_groupingFactor = 11;
	public static readonly RULE_interaction = 12;
	public static readonly RULE_intercept = 13;
	public static readonly RULE_offset = 14;
	public static readonly literalNames: (string | null)[] = [ null, "'~'", 
                                                            "'+'", "'('", 
                                                            "')'", "','", 
                                                            "'|'", "'||'", 
                                                            "'/'", "':'", 
                                                            "'1'", "'-1'", 
                                                            "'0'", "'offset'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             "IDENTIFIER", 
                                                             "NUMBER", "WS" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"formula", "expression", "terms", "term", "fixedEffect", "function", "functionArgs", 
		"randomEffect", "uncorrelatedRandomEffect", "randomTerms", "randomTerm", 
		"groupingFactor", "interaction", "intercept", "offset",
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
			this.state = 37;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 0, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 30;
				this.expression();
				this.state = 31;
				this.match(LME4Parser.T__0);
				this.state = 32;
				this.terms();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 34;
				this.match(LME4Parser.T__0);
				this.state = 35;
				this.terms();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 36;
				this.terms();
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
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 39;
			this.match(LME4Parser.IDENTIFIER);
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
			this.state = 41;
			this.term();
			this.state = 46;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===2) {
				{
				{
				this.state = 42;
				this.match(LME4Parser.T__1);
				this.state = 43;
				this.term();
				}
				}
				this.state = 48;
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
	public term(): TermContext {
		let localctx: TermContext = new TermContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, LME4Parser.RULE_term);
		try {
			this.state = 55;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 49;
				this.fixedEffect();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 50;
				this.randomEffect();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 51;
				this.uncorrelatedRandomEffect();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 52;
				this.interaction();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 53;
				this.intercept();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 54;
				this.offset();
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
		this.enterRule(localctx, 8, LME4Parser.RULE_fixedEffect);
		try {
			this.state = 59;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 57;
				this.match(LME4Parser.IDENTIFIER);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 58;
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
		this.enterRule(localctx, 10, LME4Parser.RULE_function);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 61;
			this.match(LME4Parser.IDENTIFIER);
			this.state = 62;
			this.match(LME4Parser.T__2);
			this.state = 63;
			this.functionArgs();
			this.state = 64;
			this.match(LME4Parser.T__3);
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
		this.enterRule(localctx, 12, LME4Parser.RULE_functionArgs);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 66;
			_la = this._input.LA(1);
			if(!(_la===14 || _la===15)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 71;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===5) {
				{
				{
				this.state = 67;
				this.match(LME4Parser.T__4);
				this.state = 68;
				_la = this._input.LA(1);
				if(!(_la===14 || _la===15)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
				}
				this.state = 73;
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
		this.enterRule(localctx, 14, LME4Parser.RULE_randomEffect);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 74;
			this.match(LME4Parser.T__2);
			this.state = 75;
			this.randomTerms();
			this.state = 76;
			this.match(LME4Parser.T__5);
			this.state = 77;
			this.groupingFactor();
			this.state = 78;
			this.match(LME4Parser.T__3);
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
	public uncorrelatedRandomEffect(): UncorrelatedRandomEffectContext {
		let localctx: UncorrelatedRandomEffectContext = new UncorrelatedRandomEffectContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, LME4Parser.RULE_uncorrelatedRandomEffect);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 80;
			this.match(LME4Parser.T__2);
			this.state = 81;
			this.randomTerms();
			this.state = 82;
			this.match(LME4Parser.T__6);
			this.state = 83;
			this.groupingFactor();
			this.state = 84;
			this.match(LME4Parser.T__3);
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
	public randomTerms(): RandomTermsContext {
		let localctx: RandomTermsContext = new RandomTermsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, LME4Parser.RULE_randomTerms);
		let _la: number;
		try {
			this.state = 95;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 10:
			case 11:
			case 12:
			case 14:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 86;
				this.randomTerm();
				this.state = 91;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===2) {
					{
					{
					this.state = 87;
					this.match(LME4Parser.T__1);
					this.state = 88;
					this.randomTerm();
					}
					}
					this.state = 93;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case 6:
			case 7:
				this.enterOuterAlt(localctx, 2);
				// tslint:disable-next-line:no-empty
				{
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
	public randomTerm(): RandomTermContext {
		let localctx: RandomTermContext = new RandomTermContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, LME4Parser.RULE_randomTerm);
		try {
			this.state = 100;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 97;
				this.intercept();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 98;
				this.match(LME4Parser.IDENTIFIER);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 99;
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
	public groupingFactor(): GroupingFactorContext {
		let localctx: GroupingFactorContext = new GroupingFactorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, LME4Parser.RULE_groupingFactor);
		try {
			this.state = 109;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 102;
				this.match(LME4Parser.IDENTIFIER);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 103;
				this.match(LME4Parser.IDENTIFIER);
				this.state = 104;
				this.match(LME4Parser.T__7);
				this.state = 105;
				this.match(LME4Parser.IDENTIFIER);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 106;
				this.match(LME4Parser.IDENTIFIER);
				this.state = 107;
				this.match(LME4Parser.T__8);
				this.state = 108;
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
	public interaction(): InteractionContext {
		let localctx: InteractionContext = new InteractionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, LME4Parser.RULE_interaction);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 111;
			this.fixedEffect();
			this.state = 112;
			this.match(LME4Parser.T__8);
			this.state = 113;
			this.fixedEffect();
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
		this.enterRule(localctx, 26, LME4Parser.RULE_intercept);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 115;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 7168) !== 0))) {
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
	public offset(): OffsetContext {
		let localctx: OffsetContext = new OffsetContext(this, this._ctx, this.state);
		this.enterRule(localctx, 28, LME4Parser.RULE_offset);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 117;
			this.match(LME4Parser.T__12);
			this.state = 118;
			this.match(LME4Parser.T__2);
			this.state = 119;
			this.match(LME4Parser.IDENTIFIER);
			this.state = 120;
			this.match(LME4Parser.T__3);
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

	public static readonly _serializedATN: number[] = [4,1,16,123,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,1,0,1,0,1,0,1,0,1,0,1,0,
	1,0,3,0,38,8,0,1,1,1,1,1,2,1,2,1,2,5,2,45,8,2,10,2,12,2,48,9,2,1,3,1,3,
	1,3,1,3,1,3,1,3,3,3,56,8,3,1,4,1,4,3,4,60,8,4,1,5,1,5,1,5,1,5,1,5,1,6,1,
	6,1,6,5,6,70,8,6,10,6,12,6,73,9,6,1,7,1,7,1,7,1,7,1,7,1,7,1,8,1,8,1,8,1,
	8,1,8,1,8,1,9,1,9,1,9,5,9,90,8,9,10,9,12,9,93,9,9,1,9,3,9,96,8,9,1,10,1,
	10,1,10,3,10,101,8,10,1,11,1,11,1,11,1,11,1,11,1,11,1,11,3,11,110,8,11,
	1,12,1,12,1,12,1,12,1,13,1,13,1,14,1,14,1,14,1,14,1,14,1,14,0,0,15,0,2,
	4,6,8,10,12,14,16,18,20,22,24,26,28,0,2,1,0,14,15,1,0,10,12,123,0,37,1,
	0,0,0,2,39,1,0,0,0,4,41,1,0,0,0,6,55,1,0,0,0,8,59,1,0,0,0,10,61,1,0,0,0,
	12,66,1,0,0,0,14,74,1,0,0,0,16,80,1,0,0,0,18,95,1,0,0,0,20,100,1,0,0,0,
	22,109,1,0,0,0,24,111,1,0,0,0,26,115,1,0,0,0,28,117,1,0,0,0,30,31,3,2,1,
	0,31,32,5,1,0,0,32,33,3,4,2,0,33,38,1,0,0,0,34,35,5,1,0,0,35,38,3,4,2,0,
	36,38,3,4,2,0,37,30,1,0,0,0,37,34,1,0,0,0,37,36,1,0,0,0,38,1,1,0,0,0,39,
	40,5,14,0,0,40,3,1,0,0,0,41,46,3,6,3,0,42,43,5,2,0,0,43,45,3,6,3,0,44,42,
	1,0,0,0,45,48,1,0,0,0,46,44,1,0,0,0,46,47,1,0,0,0,47,5,1,0,0,0,48,46,1,
	0,0,0,49,56,3,8,4,0,50,56,3,14,7,0,51,56,3,16,8,0,52,56,3,24,12,0,53,56,
	3,26,13,0,54,56,3,28,14,0,55,49,1,0,0,0,55,50,1,0,0,0,55,51,1,0,0,0,55,
	52,1,0,0,0,55,53,1,0,0,0,55,54,1,0,0,0,56,7,1,0,0,0,57,60,5,14,0,0,58,60,
	3,10,5,0,59,57,1,0,0,0,59,58,1,0,0,0,60,9,1,0,0,0,61,62,5,14,0,0,62,63,
	5,3,0,0,63,64,3,12,6,0,64,65,5,4,0,0,65,11,1,0,0,0,66,71,7,0,0,0,67,68,
	5,5,0,0,68,70,7,0,0,0,69,67,1,0,0,0,70,73,1,0,0,0,71,69,1,0,0,0,71,72,1,
	0,0,0,72,13,1,0,0,0,73,71,1,0,0,0,74,75,5,3,0,0,75,76,3,18,9,0,76,77,5,
	6,0,0,77,78,3,22,11,0,78,79,5,4,0,0,79,15,1,0,0,0,80,81,5,3,0,0,81,82,3,
	18,9,0,82,83,5,7,0,0,83,84,3,22,11,0,84,85,5,4,0,0,85,17,1,0,0,0,86,91,
	3,20,10,0,87,88,5,2,0,0,88,90,3,20,10,0,89,87,1,0,0,0,90,93,1,0,0,0,91,
	89,1,0,0,0,91,92,1,0,0,0,92,96,1,0,0,0,93,91,1,0,0,0,94,96,1,0,0,0,95,86,
	1,0,0,0,95,94,1,0,0,0,96,19,1,0,0,0,97,101,3,26,13,0,98,101,5,14,0,0,99,
	101,3,10,5,0,100,97,1,0,0,0,100,98,1,0,0,0,100,99,1,0,0,0,101,21,1,0,0,
	0,102,110,5,14,0,0,103,104,5,14,0,0,104,105,5,8,0,0,105,110,5,14,0,0,106,
	107,5,14,0,0,107,108,5,9,0,0,108,110,5,14,0,0,109,102,1,0,0,0,109,103,1,
	0,0,0,109,106,1,0,0,0,110,23,1,0,0,0,111,112,3,8,4,0,112,113,5,9,0,0,113,
	114,3,8,4,0,114,25,1,0,0,0,115,116,7,1,0,0,116,27,1,0,0,0,117,118,5,13,
	0,0,118,119,5,3,0,0,119,120,5,14,0,0,120,121,5,4,0,0,121,29,1,0,0,0,9,37,
	46,55,59,71,91,95,100,109];

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
	public terms(): TermsContext {
		return this.getTypedRuleContext(TermsContext, 0) as TermsContext;
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
	public uncorrelatedRandomEffect(): UncorrelatedRandomEffectContext {
		return this.getTypedRuleContext(UncorrelatedRandomEffectContext, 0) as UncorrelatedRandomEffectContext;
	}
	public interaction(): InteractionContext {
		return this.getTypedRuleContext(InteractionContext, 0) as InteractionContext;
	}
	public intercept(): InterceptContext {
		return this.getTypedRuleContext(InterceptContext, 0) as InterceptContext;
	}
	public offset(): OffsetContext {
		return this.getTypedRuleContext(OffsetContext, 0) as OffsetContext;
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
	public functionArgs(): FunctionArgsContext {
		return this.getTypedRuleContext(FunctionArgsContext, 0) as FunctionArgsContext;
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


export class RandomEffectContext extends ParserRuleContext {
	constructor(parser?: LME4Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public randomTerms(): RandomTermsContext {
		return this.getTypedRuleContext(RandomTermsContext, 0) as RandomTermsContext;
	}
	public groupingFactor(): GroupingFactorContext {
		return this.getTypedRuleContext(GroupingFactorContext, 0) as GroupingFactorContext;
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


export class UncorrelatedRandomEffectContext extends ParserRuleContext {
	constructor(parser?: LME4Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public randomTerms(): RandomTermsContext {
		return this.getTypedRuleContext(RandomTermsContext, 0) as RandomTermsContext;
	}
	public groupingFactor(): GroupingFactorContext {
		return this.getTypedRuleContext(GroupingFactorContext, 0) as GroupingFactorContext;
	}
    public get ruleIndex(): number {
    	return LME4Parser.RULE_uncorrelatedRandomEffect;
	}
	public enterRule(listener: LME4Listener): void {
	    if(listener.enterUncorrelatedRandomEffect) {
	 		listener.enterUncorrelatedRandomEffect(this);
		}
	}
	public exitRule(listener: LME4Listener): void {
	    if(listener.exitUncorrelatedRandomEffect) {
	 		listener.exitUncorrelatedRandomEffect(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LME4Visitor<Result>): Result {
		if (visitor.visitUncorrelatedRandomEffect) {
			return visitor.visitUncorrelatedRandomEffect(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RandomTermsContext extends ParserRuleContext {
	constructor(parser?: LME4Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public randomTerm_list(): RandomTermContext[] {
		return this.getTypedRuleContexts(RandomTermContext) as RandomTermContext[];
	}
	public randomTerm(i: number): RandomTermContext {
		return this.getTypedRuleContext(RandomTermContext, i) as RandomTermContext;
	}
    public get ruleIndex(): number {
    	return LME4Parser.RULE_randomTerms;
	}
	public enterRule(listener: LME4Listener): void {
	    if(listener.enterRandomTerms) {
	 		listener.enterRandomTerms(this);
		}
	}
	public exitRule(listener: LME4Listener): void {
	    if(listener.exitRandomTerms) {
	 		listener.exitRandomTerms(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LME4Visitor<Result>): Result {
		if (visitor.visitRandomTerms) {
			return visitor.visitRandomTerms(this);
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
	public intercept(): InterceptContext {
		return this.getTypedRuleContext(InterceptContext, 0) as InterceptContext;
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(LME4Parser.IDENTIFIER, 0);
	}
	public function_(): FunctionContext {
		return this.getTypedRuleContext(FunctionContext, 0) as FunctionContext;
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


export class GroupingFactorContext extends ParserRuleContext {
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
    public get ruleIndex(): number {
    	return LME4Parser.RULE_groupingFactor;
	}
	public enterRule(listener: LME4Listener): void {
	    if(listener.enterGroupingFactor) {
	 		listener.enterGroupingFactor(this);
		}
	}
	public exitRule(listener: LME4Listener): void {
	    if(listener.exitGroupingFactor) {
	 		listener.exitGroupingFactor(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LME4Visitor<Result>): Result {
		if (visitor.visitGroupingFactor) {
			return visitor.visitGroupingFactor(this);
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
	public fixedEffect_list(): FixedEffectContext[] {
		return this.getTypedRuleContexts(FixedEffectContext) as FixedEffectContext[];
	}
	public fixedEffect(i: number): FixedEffectContext {
		return this.getTypedRuleContext(FixedEffectContext, i) as FixedEffectContext;
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


export class OffsetContext extends ParserRuleContext {
	constructor(parser?: LME4Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(LME4Parser.IDENTIFIER, 0);
	}
    public get ruleIndex(): number {
    	return LME4Parser.RULE_offset;
	}
	public enterRule(listener: LME4Listener): void {
	    if(listener.enterOffset) {
	 		listener.enterOffset(this);
		}
	}
	public exitRule(listener: LME4Listener): void {
	    if(listener.exitOffset) {
	 		listener.exitOffset(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LME4Visitor<Result>): Result {
		if (visitor.visitOffset) {
			return visitor.visitOffset(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
