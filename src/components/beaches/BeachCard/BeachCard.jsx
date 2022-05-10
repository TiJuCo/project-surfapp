/* eslint-disable eqeqeq */
import React, { useContext, useState } from "react";
import ApiContext from "../../../contexts/ApiContext.js";
import "./BeachCard.css";
import { Link } from "react-router-dom";
import {
  Sol,
  SwellDuration,
  SwellHeight,
  Wind,
  Location,
  Lifeguard,
  Equipment,
  FirstAid,
  Parking,
  FreeParking,
  Restaurants,
  Showers,
  Transportation,
  Wc,
  Accessibility,
} from "../../media/exportMedia";

const gradient =
  "linear-gradient(360deg, rgba(57, 73, 87, 0.9) 0%, rgba(255, 255, 255, 0) 100%)";

function BeachCard(props) {
  const { element } = props;
  const { seaInfo } = useContext(ApiContext);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const d = new Date();
  let month = months[d.getMonth()];
  const date = new Date();
  const [currentDay] = useState(date.getDate());
  //const [time] = useState(date.getHours());
  const time = 12;

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
  const beachDays1 = seaInfo
    .filter((beach, index) => beach.name === element.name)
    .map((hours, index) => hours.filter((hours, index) => index < 24));
  const beachDays2 = seaInfo
    .filter((beach, index) => beach.name === element.name)
    .map((hours, index) =>
      hours.filter((hours, index) => index > 23 && index < 48)
    );
  const beachDays3 = seaInfo
    .filter((beach, index) => beach.name === element.name)
    .map((hours, index) =>
      hours.filter((hours, index) => index > 47 && index < 72)
    );
  const beachDays4 = seaInfo
    .filter((beach, index) => beach.name === element.name)
    .map((hours, index) =>
      hours.filter((hours, index) => index > 71 && index < 96)
    );
  const beachDays5 = seaInfo
    .filter((beach, index) => beach.name === element.name)
    .map((hours, index) => hours.filter((hours, index) => index > 95));

  const beachDays = [
    ...beachDays1,
    ...beachDays2,
    ...beachDays3,
    ...beachDays4,
    ...beachDays5,
  ];

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

              <div className="calculator-container-desktop">
                {beachDays[0]
                  .filter((beachDay, index) => index === time)
                  .map((beachHour, index) => (
                    <div
                      className={
                        beachHour.finalRating == "Excellent"
                          ? "excellent-filter , calculator-home"
                          : beachHour.finalRating == "Very Good"
                          ? "very-good-filter , calculator-home"
                          : beachHour.finalRating == "Good"
                          ? "good-filter , calculator-home"
                          : beachHour.finalRating == "Insufficient"
                          ? "insufficient-filter , calculator-home"
                          : beachHour.finalRating == "Poor"
                          ? "poor-filter , calculator-home"
                          : "calculator-home"
                      }
                    >
                      <div>
                        <p>{beachHour.finalRating}</p>
                        <div
                          className={
                            beachHour.finalRating == "Excellent"
                              ? "excellent-dot"
                              : beachHour.finalRating == "Very good"
                              ? "very-good-dot"
                              : beachHour.finalRating == "Good"
                              ? "good-dot"
                              : beachHour.finalRating == "Insufficient"
                              ? "insufficient-dot"
                              : beachHour.finalRating == "Poor"
                              ? "poor-dot"
                              : "calc-dots"
                          }
                        >
                          <span class="dot-accent"></span>
                          <span class="dot-accent"></span>
                          <span class="dot-accent"></span>
                          <span class="dot-accent"></span>
                          <span class="dot-accent"></span>
                        </div>
                      </div>

                      {/* <div>
                              <img src={beginnerMobile}alt="" />
                              <img src={intermediateMobile}alt="" />
                              <img src={advancedMobile}alt="" />
                          </div> */}
                      <p>
                        Today, {currentDay} {month}
                      </p>
                    </div>
                  ))}
                <div className="location-icon">
                  <Location />
                  <p>{element.county}</p>
                </div>
              </div>
            </div>
          </Link>
          <div className="beach-card-row-2">
            <div>
              {beachDays[0]
                .filter((beachDay, index) => index === time)
                .map((beachHour, index) => (
                  <div className="beach-card-row-2-row-1">
                    <div>
                      <Sol />
                      <p>{parseInt(beachHour.airTemperature.sg)}º</p>
                    </div>
                    <div>
                      <SwellDuration />
                      <p>
                        {parseFloat(beachHour.swellPeriod.noaa).toFixed(1)}s
                      </p>
                    </div>
                    <div>
                      <SwellHeight />
                      <p>{parseFloat(beachHour.swellHeight.sg).toFixed(1)}m</p>
                    </div>
                    <div>
                      <Wind />
                      <p>
                        {parseFloat(beachHour.windSpeed.sg).toFixed(1)}
                        <span className="kts">kts</span>{" "}
                        <span className="wind-direction-span">
                          {convertedWindDirection}
                        </span>
                      </p>
                    </div>
                  </div>
                ))}
            </div>
            <div className="beach-card-row-2-row-2">
              <Lifeguard
                className={
                  element.services && element.services.includes("lifeguard")
                    ? "icon-active"
                    : "icon-not-active"
                }
              />
              <Equipment
                className={
                  element.services && element.services.includes("equipment")
                    ? "icon-active"
                    : "icon-not-active"
                }
              />
              <Restaurants
                className={
                  element.services && element.services.includes("restaurants")
                    ? "icon-active"
                    : "icon-not-active"
                }
              />
              <Showers
                className={
                  element.services && element.services.includes("showers")
                    ? "icon-active"
                    : "icon-not-active"
                }
              />
              <Accessibility
                className={
                  element.services && element.services.includes("accessibility")
                    ? "icon-active"
                    : "icon-not-active"
                }
              />
              <Transportation
                className={
                  element.services &&
                  element.services.includes("transportation")
                    ? "icon-active"
                    : "icon-not-active"
                }
              />
              <Parking
                className={
                  element.services && element.services.includes("parking")
                    ? "icon-active"
                    : "icon-not-active"
                }
              />
              <FreeParking
                className={
                  element.services && element.services.includes("freeParking")
                    ? "icon-active"
                    : "icon-not-active"
                }
              />
              <Wc
                className={
                  element.services && element.services.includes("wc")
                    ? "icon-active"
                    : "icon-not-active"
                }
              />
              <FirstAid
                className={
                  element.services && element.services.includes("firstAid")
                    ? "icon-active"
                    : "icon-not-active"
                }
              />
            </div>
          </div>
          <div className="calculator-home-mobile">
            {beachDays[0]
              .filter((beachDay, index) => index === time)
              .map((beachHour, index) => (
                <div>
                  <div>
                    <p>{beachHour.finalRating}</p>
                    <div
                      className={
                        beachHour.finalRating == "Excellent"
                          ? "excellent-dot"
                          : beachHour.finalRating == "Very good"
                          ? "very-good-dot"
                          : beachHour.finalRating == "Good"
                          ? "good-dot"
                          : beachHour.finalRating == "Insufficient"
                          ? "insufficient-dot"
                          : beachHour.finalRating == "Poor"
                          ? "poor-dot"
                          : "calc-dots"
                      }
                    >
                      <span class="dot-accent"></span>
                      <span class="dot-accent"></span>
                      <span class="dot-accent"></span>
                      <span class="dot-accent"></span>
                      <span class="dot-accent"></span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </>
    )
  );
}

export default BeachCard;
