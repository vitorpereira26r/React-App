import React from 'react';
import './SearchBar.css';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className="search-bar">
        <button className='search-button' type='button'>
            <span className="search-icon">&#128269;</span>
        </button>
      <input
        type="text"
        placeholder="Pesquisar Fruta"
        value={value}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default SearchBar;
