import React, { useContext } from "react";
import "./BeachesPopular.css";
import BeachCard from "../BeachCard/BeachCard";
import ApiContext from "../../../contexts/ApiContext.js";

function BeachesPopular() {
  const { seaInfo, beachesInfo, setLoading, setSeaInfo } =
    useContext(ApiContext);

  seaInfo.forEach((element, index) => {
    element.name = beachesInfo[index].name;
    element.county = beachesInfo[index].county;
    element.img = beachesInfo[index].img;
    element.services = beachesInfo[index].services;
  });

  return (
    <div className="container beach-popular-container">
      {seaInfo
        // .filter(
        //   (el) =>
        //     el.name === "Praia do Cabedelo" ||
        //     el.name === "Praia International" ||
        //     el.name === "Praia de Buarcos" ||
        //     el.name === "Praia da Barra" ||
        //     el.name === "Praia do Moledo"
        // )
        .map((element, index) => (
          <BeachCard element={element} key={index} />
        ))}
    </div>
  );
}

export default BeachesPopular;
