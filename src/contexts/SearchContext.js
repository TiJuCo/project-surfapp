import React, { createContext, useState, useEffect } from "react";

const SearchContext = createContext();

export default SearchContext;

export const SearchContextProvider = ({ children }) => {

    
    const [searchValue, setSearchValue] = useState('');

    const handleSearch = (e) => {
    setSearchValue(e.target.value);
    };


  return (
    <SearchContext.Provider
      value={{ searchValue, setSearchValue, handleSearch }}
    >
      {children}
    </SearchContext.Provider>
  );
};