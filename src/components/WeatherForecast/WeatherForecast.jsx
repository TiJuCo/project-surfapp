import { useContext } from "react";
import ApiContext from "../../contexts/ApiContext.js";
import "./WeatherForescast.css";
import WeatherCard from "./WeatherCard/WeatherCard";

const WeatherForecast = () => {
  const { weatherInfo } = useContext(ApiContext);
  // console.log(weatherInfo);
  return (
    <div className="weather-forecast-container container">
      {weatherInfo.map((element, index) => (
        <WeatherCard element={element} key={index} />
      ))}
    </div>
  );
};

export default WeatherForecast;

// .filter(
//   (x) =>
//     x.latitude === "41.1580" ||
//     x.latitude === "40.2081" ||
//     x.latitude === "37.0146"
// )
