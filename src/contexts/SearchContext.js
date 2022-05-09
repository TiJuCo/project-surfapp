import React, { createContext, useState } from "react";

const SearchContext = createContext();

export default SearchContext;

export const SearchContextProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState("");
  const [filteredBeach, setFilteredBeach] = useState("");

  return (
    <SearchContext.Provider
      value={{ searchValue, setSearchValue, filteredBeach, setFilteredBeach }}
    >
      {children}
    </SearchContext.Provider>
  );
};
