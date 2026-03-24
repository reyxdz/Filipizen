import { useState } from 'react';
import './SearchBar.css';

interface SearchBarProps {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
}

function SearchBar({ placeholder = 'Search...', value, onChange }: SearchBarProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={`search-bar ${isFocused ? 'search-bar--focused' : ''}`}>
      <svg
        className="search-bar__icon"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.35-4.35" />
      </svg>
      <input
        type="text"
        className="search-bar__input"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        id="search-partner-lgu"
      />
      {value && (
        <button
          className="search-bar__clear"
          onClick={() => onChange('')}
          aria-label="Clear search"
          type="button"
        >
          ✕
        </button>
      )}
    </div>
  );
}

export default SearchBar;
