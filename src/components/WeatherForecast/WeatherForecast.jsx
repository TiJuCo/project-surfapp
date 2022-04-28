import { useContext } from "react";
import ApiContext from "../../contexts/ApiContext.js";
import "./WeatherForescast.css";
import WeatherCard from "./WeatherCard/WeatherCard";

const WeatherForecast = () => {
  const { weatherInfo } = useContext(ApiContext);
  const { districtInfo } = useContext(ApiContext);

  weatherInfo.map((element, index) => {
    index > 9
      ? weatherInfo.splice(index, 1)
      : (element.name = districtInfo[index].name);
  });
  console.log(weatherInfo);
  return (
    <div className="weather-forecast-container container">
      {weatherInfo
        .filter(
          (el, index) =>
            el.name === "Faro" || el.name === "Porto" || el.name === "Lisboa"
        )
        .map((element, index) => (
          <WeatherCard element={element} key={index} />
        ))}
    </div>
  );
};

export default WeatherForecast;
