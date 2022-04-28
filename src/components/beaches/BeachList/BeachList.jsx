import React, { useContext } from "react";
import "./BeachList.css";
import BeachCard from "../BeachCard/BeachCard";
import ApiContext from "../../../contexts/ApiContext.js";

function BeachList() {
  const { seaInfo, beachesInfo, setLoading } = useContext(ApiContext);

  seaInfo.forEach((element, index) => {
    element.name = beachesInfo[index].name;
    element.county = beachesInfo[index].county;
    element.img = beachesInfo[index].img;
    element.services = beachesInfo[index].services;
  });

  console.log(seaInfo, beachesInfo);

  return (
    <div className="container beach-list">
      {seaInfo.map((element, index) => (
        <BeachCard element={element} key={index} />
      ))}
    </div>
  );
}

export default BeachList;

// <BeachCard />
// <BeachCard />
// <BeachCard />
// <BeachCard />
// <BeachCard />
// <BeachCard />
// <BeachCard />
// <BeachCard />
