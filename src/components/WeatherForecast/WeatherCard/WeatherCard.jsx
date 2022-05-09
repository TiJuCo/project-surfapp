import "./WeatherCard.css";
import { useState, useContext } from "react";
import ApiContext from "../../../contexts/ApiContext.js";
import { Sol, ArrowUp, ArrowDown } from "../../media/exportMedia";

const WeatherCard = (props) => {
  const { element, index } = props;
  const { openWeatherInfo } = useContext(ApiContext);
  const date = new Date();
  const [time] = useState(date.getHours());

  return (
    <div key={index} className="weather-card">
      <div className="weather-card-header">
        <div className="weather-name-temp">
          <div className="weather-name">
            <p>{element.name}</p>
            <h6>
              {time === 0
                ? `${time + 12} am`
                : time > 12
                ? `${time - 12} pm`
                : `${time} am`}
            </h6>
          </div>
          <div className="weather-temp">
            <h2>
              {openWeatherInfo &&
                openWeatherInfo
                  .filter((el) => el.name.includes(element.name))
                  .map((el) => Math.round(el.main.temp * 10) / 10)}
            </h2>
          </div>
        </div>
        <div className="weather-icon">
          <Sol />
        </div>
      </div>
      <div className="weather-card-body">
        <div className="temperature-max-min">
          <div className="temperature">
            <ArrowUp />
            <p>{element.tMax}</p>
          </div>
          <div className="temperature">
            <ArrowDown />
            <p>{element.tMin}</p>
          </div>
        </div>
        {/* <div className="weather-day">
          <h5>Today</h5>
          <label className="days" />
        </div> */}
      </div>
    </div>
  );
};

export default WeatherCard;
