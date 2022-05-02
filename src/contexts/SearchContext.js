import React, { createContext, useState, useEffect } from "react";

const SearchContext = createContext();

export default SearchContext;

export const SearchContextProvider = ({ children }) => {

    
    const [searchValue, setSearchValue] = useState('');

    

    // useEffect(() => {
    //     handleSearch();
    // }, []);


  return (
    <SearchContext.Provider
      value={{ searchValue, setSearchValue }}
    >
      {children}
    </SearchContext.Provider>
  );
};