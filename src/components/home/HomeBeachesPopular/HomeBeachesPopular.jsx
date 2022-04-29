import React, { useContext } from "react";
import "./HomeBeachesPopular.css";
import BeachCard from "../../beaches/BeachCard/BeachCard";
import ApiContext from "../../../contexts/ApiContext.js";

function HomeBeachesPopular() {
  const { seaInfo, beachesInfo, setLoading, setSeaInfo } =
    useContext(ApiContext);

  seaInfo.forEach((element, index) => {
    element.name = beachesInfo[index].name;
    element.county = beachesInfo[index].county;
    element.img = beachesInfo[index].img;
    element.services = beachesInfo[index].services;
  });

  return (
    <div className="container home-beach-list">
      {seaInfo.map((element, index) => (
        <BeachCard element={element} key={index} />
      ))}
    </div>
  );
}

export default HomeBeachesPopular;
