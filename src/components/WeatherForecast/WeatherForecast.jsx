import "./WeatherForescast.css";
import WeatherCard from "./WeatherCard/WeatherCard";
import { CitiesWeatherData } from "./CitiesWeatherData/CitiesWeatherData";

const WeatherForecast = () => {
  return (
    <div className="weather-forecast-container">
      {CitiesWeatherData.map((element, index) => (
        <WeatherCard {...element} key={index} />
      ))}
    </div>
  );
};

export default WeatherForecast;
