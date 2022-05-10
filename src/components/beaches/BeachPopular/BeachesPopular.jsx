import React, { useContext } from "react";
import "./BeachesPopular.css";
import BeachCard from "../BeachCard/BeachCard";
import ApiContext from "../../../contexts/ApiContext.js";

function BeachesPopular() {
  const { seaInfo } = useContext(ApiContext);

  return (
    <div className="container beach-popular-container">
      {seaInfo
        .filter(
          (element) =>
            element.name === "Praia Grande" ||
            element.name === "Praia dos Supertubos" ||
            element.name === "Praia do Amado" ||
            element.name === "Praia da Cresmina" ||
            element.name === "Foz do Lizandro" ||
            element.name === "Costa da Caparica"
        )
        .map((element, index) => (
          <BeachCard element={element} key={index} />
        ))}
    </div>
  );
}

export default BeachesPopular;
