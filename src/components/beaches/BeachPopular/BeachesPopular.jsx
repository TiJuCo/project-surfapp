import React, { useContext } from "react";
import "./BeachesPopular.css";
import BeachCard from "../BeachCard/BeachCard";
import ApiContext from "../../../contexts/ApiContext.js";

function BeachesPopular() {
  const { seaInfo } = useContext(ApiContext);

  return (
    <div className="container beach-popular-container">
      {seaInfo.map((element, index) => (
        <BeachCard element={element} key={index} />
      ))}
    </div>
  );
}

export default BeachesPopular;
