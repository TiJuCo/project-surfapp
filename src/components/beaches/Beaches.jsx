import React from "react";
import "../../styles/styles.css";
import "./beaches.css";
import BeachList from "./BeachList/BeachList";
import BeachesPopular from "./BeachPopular/BeachesPopular";
import BeachFilters from "./BeachFilters/BeachFilters";
import BeachesPopularMobile from "./BeachPopular/BeachPopularMobile/BeachesPopularMobile";
import { SearchContextProvider } from "../../contexts/SearchContext";

function Beaches() {
  return (
    <div className="content">
      <div className="section section-1 container">
        <h3>Popular Beaches</h3>
      </div>
      <BeachesPopular />
      <BeachesPopularMobile />

      <div className="section section-search container">
        <h3>Search</h3>
      </div>
      <SearchContextProvider>
        <BeachFilters />
        <BeachList />
      </SearchContextProvider>
    </div>
  );
}

export default Beaches;
