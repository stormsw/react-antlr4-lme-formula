grammar LME4;

formula
    : expression '~' terms
    | '~' terms
    | terms
    ;

expression
    : IDENTIFIER
    ;

terms
    : term ('+' term)*
    ;

term
    : fixedEffect
    | randomEffect
    | uncorrelatedRandomEffect
    | interaction
    | intercept
    | offset
    ;

fixedEffect
    : IDENTIFIER
    | function
    ;

function
    : IDENTIFIER '(' functionArgs ')'
    ;

functionArgs
    : (IDENTIFIER | NUMBER) (',' (IDENTIFIER | NUMBER))*
    ;

randomEffect
    : '(' randomTerms '|' groupingFactor ')'
    ;

uncorrelatedRandomEffect
    : '(' randomTerms '||' groupingFactor ')'
    ;

randomTerms
    : randomTerm ('+' randomTerm)*
    | /* empty */
    ;

randomTerm
    : intercept
    | IDENTIFIER
    | function
    ;

groupingFactor
    : IDENTIFIER
    | IDENTIFIER '/' IDENTIFIER
    | IDENTIFIER ':' IDENTIFIER
    ;

interaction
    : fixedEffect ':' fixedEffect
    ;

intercept
    : '1'
    | '-1'
    | '0'
    ;

offset
    : 'offset' '(' IDENTIFIER ')'
    ;

IDENTIFIER
    : [a-zA-Z_][a-zA-Z_0-9]*
    ;

NUMBER
    : '-'? [0-9]+ ('.' [0-9]+)?
    ;

WS
    : [ \t\r\n]+ -> skip
    ;
