import react, { useState } from "react";
import axios from "axios";
import "./WeatherForescast.css";
import WeatherCard from "./WeatherCard/WeatherCard";
import { CitiesWeatherData } from "./CitiesWeatherData/CitiesWeatherData";

const WeatherForecast = () => {
  const [weatherData, setWeatherData] = useState([1, 2, 3]);

  const getWeatherData = () => {
    CitiesWeatherData.map((element) => {
      axios
        .get(
          `https://api.ipma.pt/open-data/forecast/meteorology/cities/daily/${element.id}.json`
        )
        .then((response) => response.data)
        .then((data) => {
          console.log(data);
          setWeatherData(data.data);
        });
    });
  };
  return (
    <div className="weather-forecast-container">
      <WeatherCard weatherData={weatherData} />
      <button onClick={getWeatherData}>Check the weather</button>
    </div>
  );
};

export default WeatherForecast;
