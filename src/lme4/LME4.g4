grammar LME4;

formula
    : expression TILDE terms EOF
    | TILDE terms EOF
    | terms EOF
    ;

expression
    : IDENTIFIER
    | NUMBER
    | intercept
    ;

terms
    : term (operator term)*
    ;
operator
    : PLUS
    | STAR
    | MINUS
    | COLON
    | CARET
    ;

terminator
    : EOF
    | operator
    | WS
    ;
term
    : fixedEffect
    | randomEffect
    | interaction
    | intercept
    | nestedTerm
    ;

fixedEffect
    : IDENTIFIER
    | function
    ;

function
    : IDENTIFIER LPAREN functionArgs RPAREN
    ;

functionArgs
    : (IDENTIFIER | NUMBER) (',' (IDENTIFIER | NUMBER))*
    ;

interaction
    : IDENTIFIER COLON IDENTIFIER
    | IDENTIFIER STAR IDENTIFIER
    | LPAREN multiTerm RPAREN (CARET NUMBER)?
    ;

multiTerm
    : term ((PLUS | STAR) term)*
    ;

randomEffect
    : LPAREN randomTerm RPAREN
    ;

randomTerm
    : (intercept | '0') (PLUS randomSlope)? PIPE nestedGroups
    | randomSlope PIPE nestedGroups
    ;

randomSlope
    : IDENTIFIER
    | IDENTIFIER STAR IDENTIFIER
    ;

nestedGroups
    : IDENTIFIER (SLASH IDENTIFIER)*
    | IDENTIFIER (COLON IDENTIFIER)*
    ;

intercept
    : '0'
    | '1'
    | '-1'
    ;

nestedTerm
    : LPAREN terms RPAREN
    ;

// Lexer Rules
PLUS: '+';      // Addition and fixed effect combination
MINUS: '-';     // Used in intercept terms like '-1'
STAR: '*';      // Full interaction (main effects + interaction)
COLON: ':';     // Interaction only (no main effects)
CARET: '^';     // Factorial expansion operator
LPAREN: '(';
RPAREN: ')';
SLASH: '/';     // Nesting operator
TILDE: '~';     // Formula separator
//PIPE: '|';      // Random effects separator
//DPIPE: '||';    // Uncorrelated random effects
PIPE: '|' | '||';
IDENTIFIER: [a-zA-Z_][a-zA-Z_0-9]*;
NUMBER: [0-9]+;
WS: [ \t\r\n]+ -> skip;
