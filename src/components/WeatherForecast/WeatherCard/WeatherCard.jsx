import "./WeatherCard.css";
import { useState } from "react";
import { sol, arrowUp, arrowDown } from "../../media/exportMedia.jsx";
import { CitiesWeatherData as weatherObject } from "../CitiesWeatherData/CitiesWeatherData";

const WeatherCard = ({ weatherData }) => {
  const date = new Date();
  const [time] = useState(date.getHours());
  console.log(time);
  return (
    <div className="weather-card">
      <div className="weather-card-header">
        <div className="weather-name-temp">
          <div className="weather-name">
            <p>{weatherObject[3].name}</p>
            <h6>{time > 12 ? `${time - 12} pm` : `${time} am`}</h6>
          </div>
          <div className="weather-temp">
            <h2>{`${parseInt(weatherData[0].tMax)}º`}</h2>
          </div>
        </div>
        <div className="weather-icon">
          <img src={sol} alt="" />
        </div>
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
