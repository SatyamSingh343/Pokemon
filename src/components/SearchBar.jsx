import { useState } from 'react';
import '../styles/SearchBar.css';

function SearchBar({ onSearch }) {
  const [searchInput, setSearchInput] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchInput(value);
    onSearch(value);
  };

  const handleClear = () => {
    setSearchInput('');
    onSearch('');
  };

  return (
    <div className="search-bar">
      <div className="search-input-container">
        <input
          type="text"
          placeholder="Search Pokémon by name..."
          value={searchInput}
          onChange={handleInputChange}
          className="search-input"
          aria-label="Search Pokémon"
        />
        {searchInput && (
          <button 
            onClick={handleClear}
            className="clear-button"
            aria-label="Clear search"
          >
            ×
          </button>
        )}
      </div>
    </div>
  );
}

export default SearchBar;