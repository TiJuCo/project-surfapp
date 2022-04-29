import React from "react";
import "./BeachFilters.css";

function BeachFilters() {

  const [searchValue, setSearchValue] = React.useState('');


  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };


  return (
    <div className="container filters-container">
      <input
        value={searchValue}
        type="text"
        placeholder="Type a beach..."
        onChange={handleSearch}
      />
    </div>
  );
}

export default BeachFilters;
