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
  beginnerMobile,
  intermediateMobile,
  advancedMobile
} from "../../media/exportMedia.jsx";

const gradient =
  "linear-gradient(360deg, rgba(57, 73, 87, 0.9) 0%, rgba(255, 255, 255, 0) 100%)";

function BeachCard(props) {
  const { element, index } = props;
  const { firstDay, secondDay, thirdDay, fourthDay, fifthDay,  } =
    useContext(ApiContext);
  console.log(firstDay);

  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const date = new Date();
  const [time] = useState(date.getHours());
  const [day] = useState(date.getDate());
  let month = months[date.getMonth()];

  return (
    element && (
      <>
        <div className="beach-card">
          <Link to={`/beaches/${element.name}`}>
            <div
              className="beach-card-row-1"
              style={{ backgroundImage: `url(${element.img}), ${gradient} ` }}
            >
              <h2>{element.name}</h2>
              {console.log(element)}
              <div>
                <div className="calculator-home">
                  <div>
                    {/*{element.filter((beachHour, index) =>
            
                    
                    
                    )}*/}
                        <p>{element}</p>
                        {console.log(element[108].finalRating)}
                        <div className="calc-dots">
                            <span class="dot-accent"></span>
                            <span class="dot-accent"></span>
                            <span class="dot-accent"></span>
                            <span class="dot-accent"></span>
                            <span class="dot-accent"></span>
                        </div> 
                        </div>
                          <p>Today, {day} {month}</p>
                        <div>
                            <img src={beginnerMobile}alt="" />
                            <img src={intermediateMobile}alt="" />
                            <img src={advancedMobile}alt="" />
                        </div>
                </div>
                <div className="location-icon">
                  <img src={location} alt="" />
                  <p>{element.county}</p>
                </div>
              </div>
            </div>
          </Link>
          <div className="beach-card-row-2">
            <div className="beach-card-row-2-row-1">
              <div>
                <img src={sol} alt="" />
                <p>{parseInt(element[0].airTemperature.sg)}º</p>
              </div>
              <div>
                <img src={swellDuration} alt="" />
                <p>{parseFloat(element[0].wavePeriod.noaa).toFixed(1)}s</p>
              </div>
              <div>
                <img src={swellHeight} alt="" />
                <p>{parseFloat(element[0].waveHeight.sg).toFixed(1)}m</p>
              </div>
              <div>
                <img src={wind} alt="" />
                <p>
                  {parseFloat(element[0].windSpeed.sg).toFixed(1)}
                  <span className="kts">kts</span>{" "}
                  <span className="wind-direction-span">
                    {firstDay.convertedWindDirection}
                  </span>
                </p>
              </div>
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
