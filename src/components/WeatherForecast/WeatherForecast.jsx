import { useContext } from "react";
import ApiContext from "../../contexts/ApiContext.js";
import "./WeatherForescast.css";
import WeatherCard from "./WeatherCard/WeatherCard";

const WeatherForecast = () => {
  const { weatherInfo, districtInfo } = useContext(ApiContext);

  weatherInfo.forEach((element, index) => {
    element.name = districtInfo[index].name;
  });

  return (
    <div className="weather-forecast-container container">
      {weatherInfo
        .filter(
          (el) =>
            el.name === "Faro" || el.name === "Porto" || el.name === "Lisboa"
        )
        .map((element, index) => (
          <WeatherCard element={element} key={index} />
        ))}
    </div>
  );
};

export default WeatherForecast;
