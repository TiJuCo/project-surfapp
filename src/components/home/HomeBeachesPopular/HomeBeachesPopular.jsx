import React from "react";
import "./HomeBeachesPopular.css";
import BeachCard from '../../beaches/BeachCard/BeachCard';

function HomeBeachesPopular() {
  return (
    <div className="container beach-list">
      
        <BeachCard/>
        <BeachCard/>
      
    </div>
  );
}

export default HomeBeachesPopular;