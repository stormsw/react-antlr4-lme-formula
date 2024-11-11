// Generated from LME4.g4 by ANTLR 4.13.2

import {ParseTreeListener} from "antlr4";


import { FormulaContext } from "./LME4Parser.js";
import { ExpressionContext } from "./LME4Parser.js";
import { TermsContext } from "./LME4Parser.js";
import { TermContext } from "./LME4Parser.js";
import { FixedEffectContext } from "./LME4Parser.js";
import { FunctionContext } from "./LME4Parser.js";
import { FunctionArgsContext } from "./LME4Parser.js";
import { RandomEffectContext } from "./LME4Parser.js";
import { UncorrelatedRandomEffectContext } from "./LME4Parser.js";
import { RandomTermsContext } from "./LME4Parser.js";
import { RandomTermContext } from "./LME4Parser.js";
import { GroupingFactorContext } from "./LME4Parser.js";
import { InteractionContext } from "./LME4Parser.js";
import { InterceptContext } from "./LME4Parser.js";
import { OffsetContext } from "./LME4Parser.js";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `LME4Parser`.
 */
export default class LME4Listener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `LME4Parser.formula`.
	 * @param ctx the parse tree
	 */
	enterFormula?: (ctx: FormulaContext) => void;
	/**
	 * Exit a parse tree produced by `LME4Parser.formula`.
	 * @param ctx the parse tree
	 */
	exitFormula?: (ctx: FormulaContext) => void;
	/**
	 * Enter a parse tree produced by `LME4Parser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `LME4Parser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `LME4Parser.terms`.
	 * @param ctx the parse tree
	 */
	enterTerms?: (ctx: TermsContext) => void;
	/**
	 * Exit a parse tree produced by `LME4Parser.terms`.
	 * @param ctx the parse tree
	 */
	exitTerms?: (ctx: TermsContext) => void;
	/**
	 * Enter a parse tree produced by `LME4Parser.term`.
	 * @param ctx the parse tree
	 */
	enterTerm?: (ctx: TermContext) => void;
	/**
	 * Exit a parse tree produced by `LME4Parser.term`.
	 * @param ctx the parse tree
	 */
	exitTerm?: (ctx: TermContext) => void;
	/**
	 * Enter a parse tree produced by `LME4Parser.fixedEffect`.
	 * @param ctx the parse tree
	 */
	enterFixedEffect?: (ctx: FixedEffectContext) => void;
	/**
	 * Exit a parse tree produced by `LME4Parser.fixedEffect`.
	 * @param ctx the parse tree
	 */
	exitFixedEffect?: (ctx: FixedEffectContext) => void;
	/**
	 * Enter a parse tree produced by `LME4Parser.function`.
	 * @param ctx the parse tree
	 */
	enterFunction?: (ctx: FunctionContext) => void;
	/**
	 * Exit a parse tree produced by `LME4Parser.function`.
	 * @param ctx the parse tree
	 */
	exitFunction?: (ctx: FunctionContext) => void;
	/**
	 * Enter a parse tree produced by `LME4Parser.functionArgs`.
	 * @param ctx the parse tree
	 */
	enterFunctionArgs?: (ctx: FunctionArgsContext) => void;
	/**
	 * Exit a parse tree produced by `LME4Parser.functionArgs`.
	 * @param ctx the parse tree
	 */
	exitFunctionArgs?: (ctx: FunctionArgsContext) => void;
	/**
	 * Enter a parse tree produced by `LME4Parser.randomEffect`.
	 * @param ctx the parse tree
	 */
	enterRandomEffect?: (ctx: RandomEffectContext) => void;
	/**
	 * Exit a parse tree produced by `LME4Parser.randomEffect`.
	 * @param ctx the parse tree
	 */
	exitRandomEffect?: (ctx: RandomEffectContext) => void;
	/**
	 * Enter a parse tree produced by `LME4Parser.uncorrelatedRandomEffect`.
	 * @param ctx the parse tree
	 */
	enterUncorrelatedRandomEffect?: (ctx: UncorrelatedRandomEffectContext) => void;
	/**
	 * Exit a parse tree produced by `LME4Parser.uncorrelatedRandomEffect`.
	 * @param ctx the parse tree
	 */
	exitUncorrelatedRandomEffect?: (ctx: UncorrelatedRandomEffectContext) => void;
	/**
	 * Enter a parse tree produced by `LME4Parser.randomTerms`.
	 * @param ctx the parse tree
	 */
	enterRandomTerms?: (ctx: RandomTermsContext) => void;
	/**
	 * Exit a parse tree produced by `LME4Parser.randomTerms`.
	 * @param ctx the parse tree
	 */
	exitRandomTerms?: (ctx: RandomTermsContext) => void;
	/**
	 * Enter a parse tree produced by `LME4Parser.randomTerm`.
	 * @param ctx the parse tree
	 */
	enterRandomTerm?: (ctx: RandomTermContext) => void;
	/**
	 * Exit a parse tree produced by `LME4Parser.randomTerm`.
	 * @param ctx the parse tree
	 */
	exitRandomTerm?: (ctx: RandomTermContext) => void;
	/**
	 * Enter a parse tree produced by `LME4Parser.groupingFactor`.
	 * @param ctx the parse tree
	 */
	enterGroupingFactor?: (ctx: GroupingFactorContext) => void;
	/**
	 * Exit a parse tree produced by `LME4Parser.groupingFactor`.
	 * @param ctx the parse tree
	 */
	exitGroupingFactor?: (ctx: GroupingFactorContext) => void;
	/**
	 * Enter a parse tree produced by `LME4Parser.interaction`.
	 * @param ctx the parse tree
	 */
	enterInteraction?: (ctx: InteractionContext) => void;
	/**
	 * Exit a parse tree produced by `LME4Parser.interaction`.
	 * @param ctx the parse tree
	 */
	exitInteraction?: (ctx: InteractionContext) => void;
	/**
	 * Enter a parse tree produced by `LME4Parser.intercept`.
	 * @param ctx the parse tree
	 */
	enterIntercept?: (ctx: InterceptContext) => void;
	/**
	 * Exit a parse tree produced by `LME4Parser.intercept`.
	 * @param ctx the parse tree
	 */
	exitIntercept?: (ctx: InterceptContext) => void;
	/**
	 * Enter a parse tree produced by `LME4Parser.offset`.
	 * @param ctx the parse tree
	 */
	enterOffset?: (ctx: OffsetContext) => void;
	/**
	 * Exit a parse tree produced by `LME4Parser.offset`.
	 * @param ctx the parse tree
	 */
	exitOffset?: (ctx: OffsetContext) => void;
}

