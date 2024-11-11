import React, { useEffect, useMemo } from 'react';
import AutocompleteInput from './AutocompleteInput';
import { debounce } from 'lodash';
interface FormulaEditorProps {
  onFormulaChange: (formula: string) => void;
  initialValue?: string;
}
/**
 * FormulaEditor component that provides autocomplete functionality
 * for LME4 formula syntax.
 * 
 * @param onFormulaChange - Callback function called when formula changes
 * @param initialValue - Initial formula value
 */
const FormulaEditor: React.FC<FormulaEditorProps> = ({
  onFormulaChange,
  initialValue = ""
}) => {
  const knownTerms: string[] = [
    '(1|subject_id)',
    '+',
    '|',
    '~',
    'effects',
    'fixed',
    'group',
    'offset',
    'ordered',
    'random',
    'salmonella_enterica',
    'subject_id',
  ];
  // Create debounced version of formula change handler
  const debouncedFormulaChange = useMemo(
    () => debounce((formula: string) => {
      onFormulaChange(formula);
    }, 300),
    [onFormulaChange]
  );
  
  const handleSelect = (formula: string): void => {
    console.log('Selected term:', formula);
    // Handle the selected term
    debouncedFormulaChange(formula);
  };

  // Cleanup
  useEffect(() => {
    return () => {
      debouncedFormulaChange.cancel();
    };
  }, [debouncedFormulaChange]);
  
  return (
    <div className="formula-editor">
      <AutocompleteInput
        suggestions={knownTerms}
        onSelect={handleSelect}
        placeholder="Enter formula terms..."
        initialValue={initialValue}
      />
    </div>
  );
};

export default FormulaEditor;
