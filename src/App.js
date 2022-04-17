import "./App.css";
import Temperature from "./components/temperatures";
import React, { useState } from "react";
import axios from "axios";
import data from "./components/data";

function App() {
  const [temperature, setTemperature] = useState([1, 2, 3]);

  const getTemperature = () => {
    axios
      .get(
        "https://api.ipma.pt/open-data/forecast/oceanography/daily/hp-daily-sea-forecast-day0.json"
      )
      .then((response) => response.data)
      .then((data) => {
        setTemperature(data.data);
      });
  };
  return (
    <div className="App">
      <Temperature temperature={temperature} data={data[0]} />
      <button onClick={getTemperature}>Check the weather</button>
    </div>
  );
}

export default App;
