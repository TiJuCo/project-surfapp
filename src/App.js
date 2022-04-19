import "./App.css";
import Temperature from "./components/temperatures";
import React, { useState } from "react";
import axios from "axios";
import data from "./components/data";

function App() {
  const getTemperature = () => {
    const lat = 38.6782248145406;
    const lng = -9.338068004467669;
    const params = [
      "windSpeed",
      "waterTemperature",
      "seaLevel",
      "currentDirection",
      "gust",
      "humidity",
      "precipitation",
      "swellPeriod",
      "secondarySwellPeriod",
      "wavePeriod",
      "windWavePeriod",
      "windDirection",
    ];

    axios
      .get(
        `https://api.stormglass.io/v2/tide/extremes/point?lat=${lat}&lng=${lng}&start=2019-03-15&end=2019-03-15`,
        {
          headers: {
            Authorization:
              "f71f766c-b4e5-11ec-b2a7-0242ac130002-f71f76e4-b4e5-11ec-b2a7-0242ac130002",
          },
        }
      )
      .then((response) => response)
      .then((jsonData) => {
        console.log(jsonData);
      });
  };
  return (
    <div className="App">
      {/* <Temperature temperature={temperature} data={data[0]} /> */}
      <button onClick={getTemperature}>Check the weather</button>
    </div>
  );
}

export default App;
