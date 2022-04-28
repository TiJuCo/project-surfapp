import React from "react";
import { Link } from "react-router-dom";
import "../../styles/styles.css";
import BeachList from '../beaches/BeachesList/BeachList';
import BeachesPopular from "./BeachesPopular/BeachesPopular";

function Beaches() {
  return (
    <div className="content" style={{ minHeight: `100vh;` }}>
      <div className="section section-1 container">
        <h3>Popular Beaches</h3>
      </div>
      <BeachesPopular />
      
      <div className="section section-2 container">
        <h3>Search</h3>
      </div>
      <BeachList />
    </div>
  );
}

export default Beaches;