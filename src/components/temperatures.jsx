import React from "react";
import carcavelos from "./carcavelos.jpg";
import guincho from "./guincho.jpg";

const Temperature = ({ temperature }) => {
  console.log(temperature);

  return (
    <div>
      <section className="header">
        <h1 className="logo">DuckDive</h1>
        <label className="bMenu">
          <span className="bMenu-top"></span>
          <span className="bMenu-middle"></span>
        </label>
      </section>
      <section className="surfSpots">
        <h3>Popular surf spots</h3>
        <h4 className="SeeAll">See All</h4>
        <div className="card1">
          <img className="images" src={carcavelos} alt="cenas" />
          <div className="icons">
            <i>Cenas</i>
          </div>
        </div>
        <div className="card2">
          <img className="images" src={guincho} alt="cenas" />
          <div className="icons"></div>
        </div>
      </section>
      <h1>Mínima: {temperature.sstMin}</h1>
      <h1>Máxima: {temperature}</h1>
    </div>
  );
};

export default Temperature;
