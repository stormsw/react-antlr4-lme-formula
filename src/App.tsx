import "./styles.css";
const { parseFormula } = require("./lme4/parser");
import { lme4_examples } from "./lme4/test";
import ExampleGrid from "./ExampleGrid";
import FormulaEditor from "./FormulaEditor";

const formula = "~salmonella_enterica + (1|subject_id )";
const [parseTree, errors] = parseFormula(formula);

console.log(parseTree.toStringTree());
console.log(errors);

const cardsData = lme4_examples.map((x) => {
  let [parseTree, errors] = parseFormula(x);
  return {
    formula: x,
    parseTree: parseTree.toStringTree(),
    error: errors,
  };
});

export default function App() {
  return (
    <div className="App">
      <h1>LME4 Examples</h1>
      <div>
        Formula: <span>{formula}</span>
        <div>{parseTree.toStringTree()}</div>
        <div>{errors}</div>
        <hr />
        <div>Formula Editor</div>
        <FormulaEditor />
        <hr />
        <div>Examples</div>
        <ExampleGrid examples={cardsData} />
      </div>
    </div>
  );
}
