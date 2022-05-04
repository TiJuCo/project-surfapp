import React, { useContext } from "react";
import "./BeachList.css";
import BeachCard from "../BeachCard/BeachCard";
import ApiContext from "../../../contexts/ApiContext.js";
import SearchContext from "../../../contexts/SearchContext";

function BeachList() {
  const { seaInfo, firstDay, beachesInfo, setLoading, setSeaInfo } =
    useContext(ApiContext);
  const { searchValue } = useContext(SearchContext);

  console.log(firstDay);

  return (
    seaInfo && (
      <>
        <div className="container beach-list">
          {seaInfo
            .map((element, index) => element)
            .filter((val) =>
              val.name.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((val, index) => (
              <BeachCard element={val} key={index} />
            ))}
        </div>
      </>
    )
  );
}

export default BeachList;
