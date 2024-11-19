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
	public static readonly EOF = Token.EOF;

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
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
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", ];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "PLUS", "MINUS", "STAR", "COLON", "CARET", 
		"LPAREN", "RPAREN", "SLASH", "TILDE", "PIPE", "IDENTIFIER", "NUMBER", 
		"WS",
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

	public static readonly _serializedATN: number[] = [4,0,17,86,6,-1,2,0,7,
	0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,
	9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,
	1,0,1,0,1,1,1,1,1,2,1,2,1,3,1,3,1,3,1,4,1,4,1,5,1,5,1,6,1,6,1,7,1,7,1,8,
	1,8,1,9,1,9,1,10,1,10,1,11,1,11,1,12,1,12,1,13,1,13,1,13,3,13,66,8,13,1,
	14,1,14,5,14,70,8,14,10,14,12,14,73,9,14,1,15,4,15,76,8,15,11,15,12,15,
	77,1,16,4,16,81,8,16,11,16,12,16,82,1,16,1,16,0,0,17,1,1,3,2,5,3,7,4,9,
	5,11,6,13,7,15,8,17,9,19,10,21,11,23,12,25,13,27,14,29,15,31,16,33,17,1,
	0,4,3,0,65,90,95,95,97,122,4,0,48,57,65,90,95,95,97,122,1,0,48,57,3,0,9,
	10,13,13,32,32,89,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,
	0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,
	0,21,1,0,0,0,0,23,1,0,0,0,0,25,1,0,0,0,0,27,1,0,0,0,0,29,1,0,0,0,0,31,1,
	0,0,0,0,33,1,0,0,0,1,35,1,0,0,0,3,37,1,0,0,0,5,39,1,0,0,0,7,41,1,0,0,0,
	9,44,1,0,0,0,11,46,1,0,0,0,13,48,1,0,0,0,15,50,1,0,0,0,17,52,1,0,0,0,19,
	54,1,0,0,0,21,56,1,0,0,0,23,58,1,0,0,0,25,60,1,0,0,0,27,65,1,0,0,0,29,67,
	1,0,0,0,31,75,1,0,0,0,33,80,1,0,0,0,35,36,5,44,0,0,36,2,1,0,0,0,37,38,5,
	48,0,0,38,4,1,0,0,0,39,40,5,49,0,0,40,6,1,0,0,0,41,42,5,45,0,0,42,43,5,
	49,0,0,43,8,1,0,0,0,44,45,5,43,0,0,45,10,1,0,0,0,46,47,5,45,0,0,47,12,1,
	0,0,0,48,49,5,42,0,0,49,14,1,0,0,0,50,51,5,58,0,0,51,16,1,0,0,0,52,53,5,
	94,0,0,53,18,1,0,0,0,54,55,5,40,0,0,55,20,1,0,0,0,56,57,5,41,0,0,57,22,
	1,0,0,0,58,59,5,47,0,0,59,24,1,0,0,0,60,61,5,126,0,0,61,26,1,0,0,0,62,66,
	5,124,0,0,63,64,5,124,0,0,64,66,5,124,0,0,65,62,1,0,0,0,65,63,1,0,0,0,66,
	28,1,0,0,0,67,71,7,0,0,0,68,70,7,1,0,0,69,68,1,0,0,0,70,73,1,0,0,0,71,69,
	1,0,0,0,71,72,1,0,0,0,72,30,1,0,0,0,73,71,1,0,0,0,74,76,7,2,0,0,75,74,1,
	0,0,0,76,77,1,0,0,0,77,75,1,0,0,0,77,78,1,0,0,0,78,32,1,0,0,0,79,81,7,3,
	0,0,80,79,1,0,0,0,81,82,1,0,0,0,82,80,1,0,0,0,82,83,1,0,0,0,83,84,1,0,0,
	0,84,85,6,16,0,0,85,34,1,0,0,0,5,0,65,71,77,82,1,6,0,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!LME4Lexer.__ATN) {
			LME4Lexer.__ATN = new ATNDeserializer().deserialize(LME4Lexer._serializedATN);
		}

		return LME4Lexer.__ATN;
	}


	static DecisionsToDFA = LME4Lexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}