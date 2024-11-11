import React, { useMemo, useState } from "react";
import "./styles.css";
const { parseFormula } = require("./lme4/parser");
import FormulaEditor from "./FormulaEditor";
import ExampleGrid from "./ExampleGrid";
import ErrorBoundary from "./ErrorBoundary";
import { lme4_examples } from "./lme4/test";

export default function App() {
  const [currentFormula, setCurrentFormula] = useState("~salmonella_enterica + (1|subject_id)");
  const [parseTree, setParseTree] = useState<any>(null);
  const [errors, setErrors] = useState<string[]>([]);

  // Handle formula updates from FormulaEditor
  const handleFormulaChange = (formula: string) => {
    setCurrentFormula(formula);
    if (!formula.trim()) {
      setParseTree(null);
      setErrors([]);
      return;
    }
    try {
      const [newParseTree, newErrors] = parseFormula(formula);
      setParseTree(newParseTree);
      setErrors(newErrors);
    } catch (error) {
      setErrors([
        `Failed to parse formula: ${error instanceof Error ? error.message : 'Unknown error'}`
      ]);
      setParseTree(null);
    }
  };

  // Process examples
  // Memoize examples processing
  const cardsData = useMemo(() => 
    lme4_examples.map((x) => {
      const [parseTree, errors] = parseFormula(x);
      return {
        formula: x,
        parseTree: parseTree.toStringTree(),
        error: errors,
      };
    }),
    [] // Only compute once
  );

  return (
    <ErrorBoundary>
    <div className="App">
      <h1>LME4 Formula Editor</h1>
      
      {/* Current Formula Editor */}
      <div className="current-formula">
        <h2>Test Formula</h2>
        <FormulaEditor onFormulaChange={handleFormulaChange} initialValue={currentFormula} />
        
        <div className="formula-results">
          <h3>Parse Results:</h3>
          <div className="formula-display">
            <span className="formula-text">{currentFormula}</span>
          </div>
          
          {parseTree && (
            <div className="parse-tree">
              Parse Tree: <pre>{parseTree.toStringTree()}</pre>
            </div>
          )}
          
          {errors && errors.length > 0 && (
            <div className="errors">
              Errors:
              <ul>
                {errors.map((error, index) => (
                  <li key={index} className="error-item">{error}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <hr />
      
      {/* Examples Grid */}
      <h2>Examples</h2>
      <ExampleGrid examples={cardsData} />
    </div>
    </ErrorBoundary>
  );
}
