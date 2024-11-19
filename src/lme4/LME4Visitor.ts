// Generated from LME4.g4 by ANTLR 4.13.2

import {ParseTreeVisitor} from 'antlr4';


import { FormulaContext } from "./LME4Parser.js";
import { ExpressionContext } from "./LME4Parser.js";
import { TermsContext } from "./LME4Parser.js";
import { OperatorContext } from "./LME4Parser.js";
import { TerminatorContext } from "./LME4Parser.js";
import { TermContext } from "./LME4Parser.js";
import { FixedEffectContext } from "./LME4Parser.js";
import { FunctionContext } from "./LME4Parser.js";
import { FunctionArgsContext } from "./LME4Parser.js";
import { InteractionContext } from "./LME4Parser.js";
import { MultiTermContext } from "./LME4Parser.js";
import { RandomEffectContext } from "./LME4Parser.js";
import { RandomTermContext } from "./LME4Parser.js";
import { RandomSlopeContext } from "./LME4Parser.js";
import { NestedGroupsContext } from "./LME4Parser.js";
import { InterceptContext } from "./LME4Parser.js";
import { NestedTermContext } from "./LME4Parser.js";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `LME4Parser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export default class LME4Visitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `LME4Parser.formula`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFormula?: (ctx: FormulaContext) => Result;
	/**
	 * Visit a parse tree produced by `LME4Parser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `LME4Parser.terms`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTerms?: (ctx: TermsContext) => Result;
	/**
	 * Visit a parse tree produced by `LME4Parser.operator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOperator?: (ctx: OperatorContext) => Result;
	/**
	 * Visit a parse tree produced by `LME4Parser.terminator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTerminator?: (ctx: TerminatorContext) => Result;
	/**
	 * Visit a parse tree produced by `LME4Parser.term`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTerm?: (ctx: TermContext) => Result;
	/**
	 * Visit a parse tree produced by `LME4Parser.fixedEffect`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFixedEffect?: (ctx: FixedEffectContext) => Result;
	/**
	 * Visit a parse tree produced by `LME4Parser.function`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction?: (ctx: FunctionContext) => Result;
	/**
	 * Visit a parse tree produced by `LME4Parser.functionArgs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionArgs?: (ctx: FunctionArgsContext) => Result;
	/**
	 * Visit a parse tree produced by `LME4Parser.interaction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInteraction?: (ctx: InteractionContext) => Result;
	/**
	 * Visit a parse tree produced by `LME4Parser.multiTerm`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiTerm?: (ctx: MultiTermContext) => Result;
	/**
	 * Visit a parse tree produced by `LME4Parser.randomEffect`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRandomEffect?: (ctx: RandomEffectContext) => Result;
	/**
	 * Visit a parse tree produced by `LME4Parser.randomTerm`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRandomTerm?: (ctx: RandomTermContext) => Result;
	/**
	 * Visit a parse tree produced by `LME4Parser.randomSlope`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRandomSlope?: (ctx: RandomSlopeContext) => Result;
	/**
	 * Visit a parse tree produced by `LME4Parser.nestedGroups`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNestedGroups?: (ctx: NestedGroupsContext) => Result;
	/**
	 * Visit a parse tree produced by `LME4Parser.intercept`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntercept?: (ctx: InterceptContext) => Result;
	/**
	 * Visit a parse tree produced by `LME4Parser.nestedTerm`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNestedTerm?: (ctx: NestedTermContext) => Result;
}

