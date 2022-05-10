/* eslint-disable array-callback-return */
import React, { useContext } from "react";
import "./HomeBeachesPopular.css";
import BeachCard from "../../beaches/BeachCard/BeachCard";
import ApiContext from "../../../contexts/ApiContext.js";

function HomeBeachesPopular() {
  const { seaInfo, beachesInfo } = useContext(ApiContext);

  seaInfo.map((element, index) => {
    element.name = beachesInfo[index].name;
    element.county = beachesInfo[index].county;
    element.img = beachesInfo[index].img;
    element.services = beachesInfo[index].services;
  });

  return (
    <div className="container home-beaches-popular">
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

export default HomeBeachesPopular;
