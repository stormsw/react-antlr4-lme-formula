import React from 'react';
import AutocompleteInput from './AutocompleteInput';

const FormulaEditor: React.FC = () => {
  const knownTerms: string[] = [
    'subject_id',
    'salmonella_enterica',
    'random',
    'fixed',
    'ordered',
    'effects',
    '(1|subject_id)',
    '~',
    '+',
    '|',
  ];

  const handleSelect = (selected: string): void => {
    console.log('Selected term:', selected);
    // Handle the selected term
  };

  return (
    <div>
      <h2>Enter formula:</h2>
      <AutocompleteInput
        suggestions={knownTerms}
        onSelect={handleSelect}
        placeholder="Enter formula terms..."
        initialValue="" />
    </div>
  );
};

export default FormulaEditor;
