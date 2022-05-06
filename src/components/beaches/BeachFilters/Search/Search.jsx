import React, { useState, useContext } from 'react';
import "./search.css";
import SearchContext from "../../../../contexts/SearchContext";

function Search(props) {

  const { searchValue, setSearchValue } = useContext(SearchContext);
  
  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="search">
      <input
        value={searchValue}
        type="text"
        placeholder="Type a beach..."
        onChange={handleSearch}
      />
    </div>
  );
}

export default Search;
