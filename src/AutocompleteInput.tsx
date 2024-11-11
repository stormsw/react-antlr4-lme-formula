import { debounce } from 'lodash';

import React, { useState, useRef, ChangeEvent, KeyboardEvent, useMemo, useEffect } from 'react';

interface AutocompleteInputProps {
  suggestions: string[];
  onSelect: (value: string) => void;
  placeholder?: string;
  initialValue?: string;
}

interface CursorPosition {
  start: number;
  end: number;
  word: string;
  beforeWord: string;
  afterWord: string;
}

const styles = {
  container: {
    position: 'relative' as const,
    width: '100%',
  },
  input: {
    width: '100%',
    padding: '8px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxSizing: 'border-box' as const,
  },
  suggestionList: {
    position: 'absolute' as const,
    margin: 0,
    padding: 0,
    listStyle: 'none',
    border: '1px solid #ccc',
    borderRadius: '4px',
    backgroundColor: 'white',
    maxHeight: '200px',
    overflowY: 'auto' as const,
    zIndex: 1000,
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  suggestionItem: {
    padding: '8px',
    cursor: 'pointer',
    backgroundColor: 'white',
  },
  suggestionItemHighlighted: {
    backgroundColor: '#f0f0f0',
  },
};

const AutocompleteInput: React.FC<AutocompleteInputProps> = ({
  suggestions,
  onSelect,
  placeholder = 'Type to search...',
  initialValue = '',
}) => {
  const [inputValue, setInputValue] = useState<string>(initialValue);
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  const [highlightedIndex, setHighlightedIndex] = useState<number>(-1);
  const [cursorPosition, setCursorPosition] = useState<CursorPosition>({
    start: 0,
    end: 0,
    word: '',
    beforeWord: '',
    afterWord: '',
  });
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const getCurrentWordAtCursor = (
    value: string,
    cursorPos: number
  ): CursorPosition => {
    const beforeCursor = value.slice(0, cursorPos);
    const afterCursor = value.slice(cursorPos);
    
    const wordsBefore = beforeCursor.split(/[\s~\(\)|+:\/\-*]+/);
    const wordsAfter = afterCursor.split(/[\s~\(\)|+:\/\-*]+/);
    
    const currentWord = wordsBefore[wordsBefore.length - 1] + 
                       wordsAfter[0].match(/^[^\s~\(\)|+:\/\-*]*/)?.[0] || '';
    
    const start = beforeCursor.length - wordsBefore[wordsBefore.length - 1].length;
    const end = start + currentWord.length;
    
    const beforeWord = value.slice(0, start);
    const afterWord = value.slice(end);

    return {
      start,
      end,
      word: currentWord,
      beforeWord,
      afterWord,
    };
  };

  const updateSuggestions = useMemo(
    () => debounce((word: string) => {
      if (word) {
        const filtered = suggestions.filter(suggestion =>
          suggestion.toLowerCase().startsWith(word.toLowerCase())
        );
        setFilteredSuggestions(filtered);
        setShowSuggestions(filtered.length > 0);
      } else {
        setFilteredSuggestions([]);
        setShowSuggestions(false);
      }
    }, 150),
    [suggestions]
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    const cursorPos = e.target.selectionStart || 0;
    setInputValue(value);
    
    const position = getCurrentWordAtCursor(value, cursorPos);
    setCursorPosition(position);
    updateSuggestions(position.word);
    setHighlightedIndex(-1);
  };

  const handleSelect = (suggestion: string): void => {
    const newValue = cursorPosition.beforeWord + 
                    suggestion + 
                    cursorPosition.afterWord;
    
    setInputValue(newValue);
    setShowSuggestions(false);
    setHighlightedIndex(-1);
    onSelect(newValue);

    // Set cursor position after the inserted word
    const newCursorPos = cursorPosition.beforeWord.length + suggestion.length;
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.selectionStart = newCursorPos;
        inputRef.current.selectionEnd = newCursorPos;
        inputRef.current.focus();
      }
    }, 0);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (!showSuggestions) return;

    switch (e.key) {
      case 'Tab':
        e.preventDefault();
        if (highlightedIndex >= 0) {
          handleSelect(filteredSuggestions[highlightedIndex]);
        } else if (filteredSuggestions.length > 0) {
          setHighlightedIndex(0); // Select first suggestion if none selected
        }
        break;      
      case 'ArrowDown':
        e.preventDefault();
        setHighlightedIndex(prev => 
          prev < filteredSuggestions.length - 1 ? prev + 1 : prev
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setHighlightedIndex(prev => (prev > 0 ? prev - 1 : 0));
        break;
      case 'Enter':
        e.preventDefault();
        if (highlightedIndex >= 0) {
          handleSelect(filteredSuggestions[highlightedIndex]);
        }
        break;
      case 'Escape':
        setShowSuggestions(false);
        setHighlightedIndex(-1);
        break;
      default:
        break;
    }
  };

  // Update input when clicking back into it
  const handleFocus = (e: React.FocusEvent<HTMLInputElement>): void => {
    const cursorPos = e.currentTarget.selectionStart || 0;
    const position = getCurrentWordAtCursor(inputValue, cursorPos);
    setCursorPosition(position);
    updateSuggestions(position.word);
  };

  // Handle focus loss (blur)
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>): void => {
    // Delay hiding suggestions to allow clicking on suggestions
    setTimeout(() => {
      setShowSuggestions(false);
      setHighlightedIndex(-1);
      
      // Notify parent component of final value
      onSelect(inputValue);
    }, 200);
  };

  const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
    if (inputRef.current) {
      const cursorPos = inputRef.current.selectionStart || 0;
      const position = getCurrentWordAtCursor(inputValue, cursorPos);
      setCursorPosition(position);
      updateSuggestions(position.word);
    }
  };

  // Handle paste event
  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>): void => {
    // Get pasted content
    const pastedText = e.clipboardData.getData('text');
    
    // Update input value with pasted content
    const newValue = e.currentTarget.value.slice(0, e.currentTarget.selectionStart || 0) +
                    pastedText +
                    e.currentTarget.value.slice(e.currentTarget.selectionEnd || 0);
    
    setInputValue(newValue);
    
    // Get cursor position after paste
    const newCursorPos = (e.currentTarget.selectionStart || 0) + pastedText.length;
    
    // Update suggestions based on word at new cursor position
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.selectionStart = newCursorPos;
        inputRef.current.selectionEnd = newCursorPos;
        
        const position = getCurrentWordAtCursor(newValue, newCursorPos);
        setCursorPosition(position);
        updateSuggestions(position.word);
      }
    }, 0);

    // Notify parent component
    onSelect(newValue);
  };

  // Position suggestions near the current word
  const getSuggestionsStyle = (): React.CSSProperties => {
    if (!inputRef.current) return styles.suggestionList;

    const inputRect = inputRef.current.getBoundingClientRect();
    const lineHeight = parseInt(getComputedStyle(inputRef.current).lineHeight || '20');
    const charWidth = 8; // Approximate character width in pixels

    return {
      ...styles.suggestionList,
      position: 'absolute',
      left: `${cursorPosition.start * charWidth}px`,
      top: `${lineHeight + 5}px`,
      minWidth: '150px',
    };
  };

  // Cleanup
  useEffect(() => {
    return () => {
      updateSuggestions.cancel();
    };
  }, [updateSuggestions]);

  return (
    <div 
      style={styles.container}
      role="combobox"
      aria-expanded={showSuggestions}
      aria-haspopup="listbox"
      aria-owns="suggestions-list"
    >
      <input
        ref={inputRef}
        type="text"
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onClick={handleClick}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onPaste={handlePaste}
        placeholder={placeholder}
        style={styles.input}
        aria-autocomplete="list"
        aria-controls="suggestions-list"
        aria-activedescendant={
          highlightedIndex >= 0 ? `suggestion-${highlightedIndex}` : undefined
        }
      />
      {showSuggestions && (
        <ul 
          id="suggestions-list"
          ref={listRef} 
          style={getSuggestionsStyle()}
          role="listbox"
        >
          {filteredSuggestions.map((suggestion, index) => (
            <li
              id={`suggestion-${index}`}
              key={suggestion}
              onClick={() => handleSelect(suggestion)}
              onMouseEnter={() => setHighlightedIndex(index)}
              role="option"
              aria-selected={index === highlightedIndex}
              style={{
                ...styles.suggestionItem,
                ...(index === highlightedIndex ? styles.suggestionItemHighlighted : {}),
              }}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AutocompleteInput;
