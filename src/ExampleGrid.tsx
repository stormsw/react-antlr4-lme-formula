import React from "react";
import "./ExampleGrid.css";

// Define the shape of each example object
interface Example {
  formula: string;
  parseTree: string;
  error: string;
}

// Define the component's props interface
interface ExampleGridProps {
  examples: Example[];
}

const ExampleGrid: React.FC<ExampleGridProps> = ({ examples }) => {
  return (
    <div className="grid-container">
      {examples.map((example, index) => (
        <div className="card" key={index}>
          <div className="formula">{example.formula}</div>
          <div className="parsedata">{example.parseTree}</div>
          <div className="error">{example.error}</div>
        </div>
      ))}
    </div>
  );
};

export default ExampleGrid;
