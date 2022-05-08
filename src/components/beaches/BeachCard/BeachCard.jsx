import React, { useContext, useState } from "react";
import ApiContext from "../../../contexts/ApiContext.js";
import "./BeachCard.css";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  sol,
  swellDuration,
  swellHeight,
  wind,
  location,
  lifeguard,
  equipment,
  firstAid,
  parking,
  freeParking,
  restaurants,
  showers,
  transportation,
  wc,
  accessibility,
} from "../../media/exportMedia.jsx";

const gradient =
  "linear-gradient(360deg, rgba(57, 73, 87, 0.9) 0%, rgba(255, 255, 255, 0) 100%)";

function BeachCard(props) {
  const { element, index } = props;
  const { firstDay, secondDay, thirdDay, fourthDay, fifthDay, seaInfo } = useContext(ApiContext);

  const date = new Date();
  const [time] = useState(date.getHours());

  let convertedWindDirection = "";
  const resolveWindDirection = () => {
    if (element[0].windDirection.sg <= 22.5) {
      convertedWindDirection = "N";
    } else if (
      element[0].windDirection.sg > 22.5 &&
      element[0].windDirection.sg <= 67.5
    ) {
      convertedWindDirection = "NE";
    } else if (
      element[0].windDirection.sg > 67.5 &&
      element[0].windDirection.sg <= 112.5
    ) {
      convertedWindDirection = "E";
    } else if (
      element[0].windDirection.sg > 112.5 &&
      element[0].windDirection.sg <= 157.5
    ) {
      convertedWindDirection = "SE";
    } else if (
      element[0].windDirection.sg > 157.5 &&
      element[0].windDirection.sg <= 202.5
    ) {
      convertedWindDirection = "S";
    } else if (
      element[0].windDirection.sg > 202.5 &&
      element[0].windDirection.sg <= 247.5
    ) {
      convertedWindDirection = "SW";
    } else if (
      element[0].windDirection.sg > 247.5 &&
      element[0].windDirection.sg <= 292.5
    ) {
      convertedWindDirection = "W";
    } else if (
      element[0].windDirection.sg > 292.5 &&
      element[0].windDirection.sg <= 337.5
    ) {
      return (convertedWindDirection = "NW");
    } else if (
      element[0].windDirection.sg > 337.5 &&
      element[0].windDirection.sg <= 360
    ) {
      convertedWindDirection = "N";
    } else {
    }
  };
  resolveWindDirection();

  // map first day -> put tide inside + convertedWindDirection + convertedSwellDirection
  const beachDays1 = seaInfo.filter((beach, index) => beach.name === element.name).map((hours, index) => hours.filter((hours, index) => index < 24));
  const beachDays2 = seaInfo.filter((beach, index) => beach.name === element.name).map((hours, index) => hours.filter((hours, index) => index > 23 && index < 48));
  const beachDays3 = seaInfo.filter((beach, index) => beach.name === element.name).map((hours, index) => hours.filter((hours, index) => index > 47 && index < 72))
  const beachDays4 = seaInfo.filter((beach, index) => beach.name === element.name).map((hours, index) => hours.filter((hours, index) => index > 71 && index < 96))
  const beachDays5 = seaInfo.filter((beach, index) => beach.name === element.name).map((hours, index) => hours.filter((hours, index) => index > 95))


  const beachDays = [...beachDays1, ...beachDays2, ...beachDays3, ...beachDays4, ...beachDays5]; 
  
 

  return (
    element && (
      <>
      
        <div className="beach-card">
          <Link to={`/beaches/${element.name}`}>
            {console.log(element.name)}
            {console.log(seaInfo)}
            <div
              className="beach-card-row-1"
              style={{ backgroundImage: `url(${element.img}), ${gradient} ` }}
            >
              <h2>{element.name}</h2>

              <div>
                <img src={location} alt="" />
                <p>{element.county}</p>
              </div>
            </div>
            
          </Link>
          <div className="beach-card-row-2">
            {console.log(beachDays)}
            <div >
            {beachDays[0].filter((beachDay, index) => index === time).map((beachHour, index) => (
              <div className="beach-card-row-2-row-1">
                
                <div>
                  <img src={sol} alt="" />
                  <p>{parseInt(beachHour.airTemperature.sg)}º</p>
                </div>
                <div>
                  <img src={swellDuration} alt="" />
                  <p>{parseFloat(beachHour.wavePeriod.noaa).toFixed(1)}s</p>
                </div>
                <div>
                  <img src={swellHeight} alt="" />
                  <p>{parseFloat(beachHour.waveHeight.sg).toFixed(1)}m</p>
                </div>
                <div>
                  <img src={wind} alt="" />
                  <p>
                    {parseFloat(beachHour.windSpeed.sg).toFixed(1)}<span className="kts">kts</span> <span className="wind-direction-span">{convertedWindDirection}</span>
                  </p>
                </div>
              </div>
              ))}
            </div>
            <div className="beach-card-row-2-row-2">
              <img
                className={
                  element.services && element.services.includes("lifeguard")
                    ? "icon-active"
                    : "icon-not-active"
                }
                src={lifeguard}
                alt="lifeguard"
              />
              <img
                className={
                  element.services && element.services.includes("equipment")
                    ? "icon-active"
                    : "icon-not-active"
                }
                src={equipment}
                alt="equipment"
              />
              <img
                className={
                  element.services && element.services.includes("restaurants")
                    ? "icon-active"
                    : "icon-not-active"
                }
                src={restaurants}
                alt=""
              />
              <img
                className={
                  element.services && element.services.includes("showers")
                    ? "icon-active"
                    : "icon-not-active"
                }
                src={showers}
                alt=""
              />
              <img
                className={
                  element.services && element.services.includes("accessibility")
                    ? "icon-active"
                    : "icon-not-active"
                }
                src={accessibility}
                alt=""
              />
              <img
                className={
                  element.services &&
                  element.services.includes("transportation")
                    ? "icon-active"
                    : "icon-not-active"
                }
                src={transportation}
                alt=""
              />
              <img
                className={
                  element.services && element.services.includes("parking")
                    ? "icon-active"
                    : "icon-not-active"
                }
                src={parking}
                alt=""
              />
              <img
                className={
                  element.services && element.services.includes("freeParking")
                    ? "icon-active"
                    : "icon-not-active"
                }
                src={freeParking}
                alt=""
              />
              <img
                className={
                  element.services && element.services.includes("wc")
                    ? "icon-active"
                    : "icon-not-active"
                }
                src={wc}
                alt=""
              />
              <img
                className={
                  element.services && element.services.includes("firstAid")
                    ? "icon-active"
                    : "icon-not-active"
                }
                src={firstAid}
                alt=""
              />
            </div>
          </div>
        </div>

        
      </>
    )
  );
}

export default BeachCard;
