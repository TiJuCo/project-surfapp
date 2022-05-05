import React, { useContext } from "react";
import "./BeachFilters.css";
import Search from "./Search/Search";
import DropDownFilter from "./DropDownFilter";


function BeachFilters() {

  return (
    <div className="container filters-container">
      <Search/>
      <DropDownFilter />
    </div>
  );
}

export default BeachFilters;
