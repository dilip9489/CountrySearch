import React from 'react';
import '../SearchBar/SearchBar.css'

function SearchBar({ onSearch }) {
  return (
    <div className='inp'>
      <input
        type="text"
        placeholder="Search for countries..."
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
