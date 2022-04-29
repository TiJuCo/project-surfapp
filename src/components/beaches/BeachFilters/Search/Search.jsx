import React, { useState } from 'react';
import "./search.css";

function Search() {

  const [searchValue, setSearchValue] = useState('');


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
