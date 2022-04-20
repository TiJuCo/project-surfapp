import "./WeatherCard.css";
import { sol, arrowUp, arrowDown } from "../../media/exportMedia.jsx";
import { CitiesWeatherData as weatherObject } from "../CitiesWeatherData/CitiesWeatherData";

const WeatherCard = ({ weatherData }) => {
  return (
    <div className="weather-card">
      <div className="weather-card-header">
        <h3>{weatherObject[3].name}</h3>
        <img src={sol} alt="" />
        <h4>{`${parseInt(weatherData[0].tMax)}º`}</h4>
      </div>
      <div className="weather-card-body">
        <div className="temperature-max-min">
          <div className="temperature-max">
            <img src={arrowUp} alt="" />
            <h3>{`${parseInt(weatherData[0].tMax)}º`}</h3>
          </div>
          <div className="temperature-min">
            <img src={arrowDown} alt="" />
            <h3>{`${parseInt(weatherData[0].tMin)}º`}</h3>
          </div>
        </div>
        <div className="weather-day">
          <h5>Today</h5>
          <label className="swiper" />
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
