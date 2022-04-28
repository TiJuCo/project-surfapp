import React from "react";
import "./BeachesPopular.css";
import BeachCard from '../BeachCard/BeachCard';

function BeachesPopular() {

  
  return (
    <div className="container beach-popular-container">
      
      <BeachCard />
      <BeachCard />
      <BeachCard />
      <BeachCard />
      <BeachCard />

    </div>
  );
}

export default BeachesPopular