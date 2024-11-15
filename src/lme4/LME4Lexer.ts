// Generated from LME4.g4 by ANTLR 4.13.2
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols
import {
	ATN,
	ATNDeserializer,
	CharStream,
	DecisionState, DFA,
	Lexer,
	LexerATNSimulator,
	RuleContext,
	PredictionContextCache,
	Token
} from "antlr4";
export default class LME4Lexer extends Lexer {
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
	public static readonly EOF = Token.EOF;

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
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
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", ];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
		"T__9", "T__10", "T__11", "T__12", "IDENTIFIER", "NUMBER", "WS",
	];


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(this, LME4Lexer._ATN, LME4Lexer.DecisionsToDFA, new PredictionContextCache());
	}

	public get grammarFileName(): string { return "LME4.g4"; }

	public get literalNames(): (string | null)[] { return LME4Lexer.literalNames; }
	public get symbolicNames(): (string | null)[] { return LME4Lexer.symbolicNames; }
	public get ruleNames(): string[] { return LME4Lexer.ruleNames; }

	public get serializedATN(): number[] { return LME4Lexer._serializedATN; }

	public get channelNames(): string[] { return LME4Lexer.channelNames; }

	public get modeNames(): string[] { return LME4Lexer.modeNames; }

	public static readonly _serializedATN: number[] = [4,0,16,96,6,-1,2,0,7,
	0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,
	9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,1,0,1,0,1,
	1,1,1,1,2,1,2,1,3,1,3,1,4,1,4,1,5,1,5,1,6,1,6,1,6,1,7,1,7,1,8,1,8,1,9,1,
	9,1,10,1,10,1,10,1,11,1,11,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,13,1,13,
	5,13,69,8,13,10,13,12,13,72,9,13,1,14,3,14,75,8,14,1,14,4,14,78,8,14,11,
	14,12,14,79,1,14,1,14,4,14,84,8,14,11,14,12,14,85,3,14,88,8,14,1,15,4,15,
	91,8,15,11,15,12,15,92,1,15,1,15,0,0,16,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,
	8,17,9,19,10,21,11,23,12,25,13,27,14,29,15,31,16,1,0,4,3,0,65,90,95,95,
	97,122,4,0,48,57,65,90,95,95,97,122,1,0,48,57,3,0,9,10,13,13,32,32,101,
	0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,
	0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,
	1,0,0,0,0,25,1,0,0,0,0,27,1,0,0,0,0,29,1,0,0,0,0,31,1,0,0,0,1,33,1,0,0,
	0,3,35,1,0,0,0,5,37,1,0,0,0,7,39,1,0,0,0,9,41,1,0,0,0,11,43,1,0,0,0,13,
	45,1,0,0,0,15,48,1,0,0,0,17,50,1,0,0,0,19,52,1,0,0,0,21,54,1,0,0,0,23,57,
	1,0,0,0,25,59,1,0,0,0,27,66,1,0,0,0,29,74,1,0,0,0,31,90,1,0,0,0,33,34,5,
	126,0,0,34,2,1,0,0,0,35,36,5,43,0,0,36,4,1,0,0,0,37,38,5,40,0,0,38,6,1,
	0,0,0,39,40,5,41,0,0,40,8,1,0,0,0,41,42,5,44,0,0,42,10,1,0,0,0,43,44,5,
	124,0,0,44,12,1,0,0,0,45,46,5,124,0,0,46,47,5,124,0,0,47,14,1,0,0,0,48,
	49,5,47,0,0,49,16,1,0,0,0,50,51,5,58,0,0,51,18,1,0,0,0,52,53,5,49,0,0,53,
	20,1,0,0,0,54,55,5,45,0,0,55,56,5,49,0,0,56,22,1,0,0,0,57,58,5,48,0,0,58,
	24,1,0,0,0,59,60,5,111,0,0,60,61,5,102,0,0,61,62,5,102,0,0,62,63,5,115,
	0,0,63,64,5,101,0,0,64,65,5,116,0,0,65,26,1,0,0,0,66,70,7,0,0,0,67,69,7,
	1,0,0,68,67,1,0,0,0,69,72,1,0,0,0,70,68,1,0,0,0,70,71,1,0,0,0,71,28,1,0,
	0,0,72,70,1,0,0,0,73,75,5,45,0,0,74,73,1,0,0,0,74,75,1,0,0,0,75,77,1,0,
	0,0,76,78,7,2,0,0,77,76,1,0,0,0,78,79,1,0,0,0,79,77,1,0,0,0,79,80,1,0,0,
	0,80,87,1,0,0,0,81,83,5,46,0,0,82,84,7,2,0,0,83,82,1,0,0,0,84,85,1,0,0,
	0,85,83,1,0,0,0,85,86,1,0,0,0,86,88,1,0,0,0,87,81,1,0,0,0,87,88,1,0,0,0,
	88,30,1,0,0,0,89,91,7,3,0,0,90,89,1,0,0,0,91,92,1,0,0,0,92,90,1,0,0,0,92,
	93,1,0,0,0,93,94,1,0,0,0,94,95,6,15,0,0,95,32,1,0,0,0,7,0,70,74,79,85,87,
	92,1,6,0,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!LME4Lexer.__ATN) {
			LME4Lexer.__ATN = new ATNDeserializer().deserialize(LME4Lexer._serializedATN);
		}

		return LME4Lexer.__ATN;
	}


	static DecisionsToDFA = LME4Lexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}