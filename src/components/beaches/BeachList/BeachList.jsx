import React, { useContext } from "react";
import "./BeachList.css";
import BeachCard from "../BeachCard/BeachCard";
import ApiContext from "../../../contexts/ApiContext.js";
import SearchContext from "../../../contexts/SearchContext";

function BeachList() {
  const { seaInfo, beachesInfo, setLoading, setSeaInfo } =
    useContext(ApiContext);
  const { searchValue } = useContext(SearchContext);

  seaInfo.forEach((element, index) => {
    element.name = beachesInfo[index].name;
    element.county = beachesInfo[index].county;
    element.img = beachesInfo[index].img;
    element.services = beachesInfo[index].services;
  });

  console.log(searchValue);

  return (
    <div className="container beach-list">
      {seaInfo
        .filter((val) =>
          val.name.toLowerCase().includes(searchValue.toLowerCase())
        )
        .map((val, index) => (
          <BeachCard element={val} index={index} />
        ))}
    </div>
  );
}

export default BeachList;
