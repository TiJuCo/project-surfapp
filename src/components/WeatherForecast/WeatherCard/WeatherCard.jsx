import "./WeatherCard.css";
import { useState } from "react";
import { sol, arrowUp, arrowDown } from "../../media/exportMedia.jsx";

const WeatherCard = (props) => {
  const { name, tMin, tMax } = props;
  const date = new Date();
  const [time] = useState(date.getHours());

  return (
    <div className="weather-card">
      <div className="weather-card-header">
        <div className="weather-name-temp">
          <div className="weather-name">
            <p>{name}</p>
            <h6>{time > 12 ? `${time - 12} pm` : `${time} am`}</h6>
          </div>
          <div className="weather-temp">
            <h2>{`${parseInt(tMax)}º`}</h2>
          </div>
        </div>
        <div className="weather-icon">
          <img src={sol} alt="" />
        </div>
      </div>
      <div className="weather-card-body">
        <div className="temperature-max-min">
          <div className="temperature">
            <img src={arrowUp} alt="" />
            <p>{`${parseInt(tMax)}º`}</p>
          </div>
          <div className="temperature">
            <img src={arrowDown} alt="" />
            <p>{`${parseInt(tMin)}º`}</p>
          </div>
        </div>
        <div className="weather-day">
          <h5>Today</h5>
          <label className="days" />
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
