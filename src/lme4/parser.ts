// Import ANTLR4 runtime and generated parser and lexer
// const antlr4 = require("antlr4");

import antlr4 from "antlr4";
import LME4Lexer from "./LME4Lexer";
import LME4Parser from "./LME4Parser";

class Lme4ErrorListener extends antlr4.error.ErrorListener {
  constructor() {
    super();
    this.errors = [];
  }

  syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
    this.errors.push(`Line ${line}:${column} ${msg}`);
  }
}

/**
 * Parses an LME4 formula and returns the parse tree.
 * @param formula The LME4 formula string to parse.
 * @returns The root node of the parse tree.
 */

function parseFormula(formula: string): antlr4.ParserRuleContext {
  // Create a stream from the formula string
  const inputStream = new antlr4.InputStream(formula);

  // Initialize the lexer and parser
  const lexer = new LME4Lexer(inputStream);
  const tokenStream = new antlr4.CommonTokenStream(lexer);
  const parser = new LME4Parser(tokenStream);

  parser.removeErrorListeners();
  lexer.removeErrorListeners();
  const errorListener = new Lme4ErrorListener();
  lexer.addErrorListener(errorListener);
  parser.addErrorListener(errorListener);
  // Parse the formula starting from the 'formula' rule
  const tree = parser.formula();

  return [tree, errorListener.errors]; // Returns the parse tree
}

// Example usage
// const formula = "x1 + x2 + (1 | group)";
// const parseTree = parseFormula(formula);
// console.log(parseTree.toStringTree(parser.ruleNames)); // Print the parse tree

export { parseFormula };
