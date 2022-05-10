/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable eqeqeq */
import React, { useContext, useState } from "react";
import "./BeachPage.css";
import { useParams } from "react-router-dom";
import ApiContext from "../../../contexts/ApiContext";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import {
  Sol,
  AirTemperatureBlue,
  WaterTemperature,
  SwellDuration,
  SwellHeight,
  Wind,
  WindDirection,
  Location,
  FacingDirection,
  WaveConsistency,
  BeachCrowd,
  BeachBreak,
  Season,
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
  ArrowFullLeft,
  OptimalWind,
  OptimalSwellHeight,
} from "../../media/exportMedia";

function BeachPage() {
  let params = useParams();

  const { seaInfo, beachesInfo, tideInfo } = useContext(ApiContext);

  seaInfo.forEach((element, index) => {
    element.name = beachesInfo[index].name;
    element.county = beachesInfo[index].county;
    element.img = beachesInfo[index].img;
    element.waveConsistency = beachesInfo[index].waveConsistency;
    element.surfCrowd = beachesInfo[index].surfCrowd;
    element.surfBreak = beachesInfo[index].surfBreak;
    element.surfingSeason = beachesInfo[index].surfingSeason;
    element.perfectWindDirectionSurf =
      beachesInfo[index].perfectWindDirectionSurf;
    element.facingDirection = beachesInfo[index].facingDirection;
    element.services = beachesInfo[index].services;
  });

  const gradient =
    "linear-gradient(360deg, rgba(57, 73, 87, 0.9) 0%, rgba(255, 255, 255, 0) 100%)";

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
  const date = new Date();
  const [time] = useState(date.getHours());
  const [currentDay] = useState(date.getDate());
  const [tomorrow] = useState(date.getDate() + 1);
  const d = new Date();
  let month = months[d.getMonth()];
  const [day1] = useState(date.getDate());
  const [day2] = useState(date.getDate() + 1);
  const [day3] = useState(date.getDate() + 2);
  const [day4] = useState(date.getDate() + 3);
  const [day5] = useState(date.getDate() + 4);
  const currentBeach = beachesInfo.filter(
    (beach) => beach.name === params.beachName
  )[0];
  console.log(currentBeach);

  // AUMENTAR OS VALORES DAS TIDES POR 1 OU 2 METROS // .filter((el, index) => +el.time.substring(8, 10) === day1)
  const firstDayTide = tideInfo
    .filter((beach) => beach.name === params.beachName)
    .map((days, index) =>
      days.filter((day) => +day.time.substring(8, 10) === day1)
    );

  const secondDayTide = tideInfo
    .filter((beach) => beach.name === params.beachName)
    .map((days, index) =>
      days.filter((day) => +day.time.substring(8, 10) === day2)
    );

  const thirdDayTide = tideInfo
    .filter((beach) => beach.name === params.beachName)
    .map((days, index) =>
      days.filter((day) => +day.time.substring(8, 10) === day3)
    );

  const fourthDayTide = tideInfo
    .filter((beach) => beach.name === params.beachName)
    .map((days, index) =>
      days.filter((day) => +day.time.substring(8, 10) === day4)
    );

  const fifthDayTide = tideInfo
    .filter((beach) => beach.name === params.beachName)
    .map((days, index) =>
      days.filter((day) => +day.time.substring(8, 10) === day5)
    );

  const tideInfoDays = [
    ...firstDayTide,
    ...secondDayTide,
    ...thirdDayTide,
    ...fourthDayTide,
    ...fifthDayTide,
  ];

  // map first day -> put tide inside + convertedWindDirection + convertedSwellDirection
  const beachDays1 = seaInfo
    .filter((beach, index) => beach.name === params.beachName)
    .map((hours, index) => hours.filter((hours, index) => index < 24));

  const beachDays2 = seaInfo
    .filter((beach, index) => beach.name === params.beachName)
    .map((hours, index) =>
      hours.filter((hours, index) => index > 23 && index < 48)
    );
  const beachDays3 = seaInfo
    .filter((beach, index) => beach.name === params.beachName)
    .map((hours, index) =>
      hours.filter((hours, index) => index > 47 && index < 72)
    );
  const beachDays4 = seaInfo
    .filter((beach, index) => beach.name === params.beachName)
    .map((hours, index) =>
      hours.filter((hours, index) => index > 71 && index < 96)
    );
  const beachDays5 = seaInfo
    .filter((beach, index) => beach.name === params.beachName)
    .map((hours, index) => hours.filter((hours, index) => index > 95));

  const beachDays = [
    ...beachDays1,
    ...beachDays2,
    ...beachDays3,
    ...beachDays4,
    ...beachDays5,
  ];

  beachDays[0] && beachDays[0].unshift(beachDays[0][time]);
  beachDays[1] && beachDays[1].unshift(beachDays[1][time]);
  beachDays[2] && beachDays[2].unshift(beachDays[2][time]);
  beachDays[3] && beachDays[3].unshift(beachDays[3][time]);
  beachDays[4] && beachDays[4].unshift(beachDays[4][time]);

  console.log(tideInfoDays);
  console.log(beachDays);

  return (
    <div className="container beach-page-container">
      <Link to={`/beaches/`}>
        <div className="back">
          <ArrowFullLeft />
          <p>All beaches</p>
        </div>
      </Link>
      {seaInfo
        .filter((page, index) => page.name === params.beachName)
        .map((page) => (
          <div className="beach-page">
            <div className="beach-page-card-container">
              <div
                className="beach-page-card"
                style={{ backgroundImage: `url(${page.img}), ${gradient} ` }}
              >
                <h1>{page.name}</h1>
                <div>
                  <Location />
                  <p>{page.county}</p>
                </div>
              </div>
              <div className="beach-page-content">
                <div className="beach-page-time">
                  <p className="beach-page-time-text">
                    <span className="accent">Today</span>, {currentDay} {month}{" "}
                    <span class="dot-accent"></span>{" "}
                    {time > 12 ? `${time - 12} pm` : `${time} am`}
                  </p>
                </div>
                <div>
                  {beachDays[0]
                    .filter((beachDay, index) => index === 0)
                    .map((beachHour, index) => (
                      <p className="beach-page-text-report">
                        We register a temperature of{" "}
                        <span className="pageObject">
                          {parseFloat(beachHour.airTemperature.sg).toFixed(1)} º
                        </span>
                        ,{" "}
                        <span className="pageObject">
                          {parseFloat(beachHour.windSpeed.sg).toFixed(1)} kts
                        </span>{" "}
                        wind from the
                        <span className="pageObject">
                          {page[0].windDirection.sg <= 22.5
                            ? " North "
                            : page[0].windDirection.sg > 22.5 &&
                              page[0].windDirection.sg <= 67.5
                            ? " North East "
                            : page[0].windDirection.sg > 67.5 &&
                              page[0].windDirection.sg <= 112.5
                            ? " East "
                            : page[0].windDirection.sg > 112.5 &&
                              page[0].windDirection.sg <= 157.5
                            ? " South East "
                            : page[0].windDirection.sg > 157.5 &&
                              page[0].windDirection.sg <= 202.5
                            ? " South "
                            : page[0].windDirection.sg > 202.5 &&
                              page[0].windDirection.sg <= 247.5
                            ? " South West "
                            : page[0].windDirection.sg > 247.5 &&
                              page[0].windDirection.sg <= 292.5
                            ? " West "
                            : page[0].windDirection.sg > 292.5 &&
                              page[0].windDirection.sg <= 337.5
                            ? " North West "
                            : page[0].windDirection.sg > 337.5 &&
                              page[0].windDirection.sg <= 360
                            ? " North "
                            : "null"}
                        </span>
                        , a wave height of{" "}
                        <span className="pageObject">
                          {beachHour.swellHeight.sg} m
                        </span>
                        , a swell interval of{" "}
                        <span className="pageObject">
                          {parseFloat(beachHour.swellPeriod.noaa).toFixed(1)} s
                        </span>
                        .
                      </p>
                    ))}
                  <p className="beach-page-text-report-tide">
                    High tide happens at{" "}
                    <span className="pageObject">12:43</span>, <br /> Low tide
                    at <span className="pageObject">18:43</span>.
                  </p>
                  <div>
                    <a
                      target="_blank"
                      href={`https://www.google.com/maps/place/${currentBeach.latitude},${currentBeach.longitude}`}
                    >
                      <button className="get-directions">Get directions</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="beach-page-main">
              <div className="beach-page-main-container-1">
                <div>
                  <h3>Quality of conditions</h3>
                  <div className="beach-page-calculator">
                    <div className="mobile">
                      <div>
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
                      </div>
                    </div>
                    <div className="desktop">
                      <div>
                        <div>
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
                                        : beachHour.finalRating ==
                                          "Insufficient"
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
                        </div>
                        <div>
                          <OptimalWind />
                          <OptimalSwellHeight />
                        </div>
                      </div>
                      <div></div>
                    </div>
                  </div>
                </div>
                <div className="current-conditions-container">
                  <h3>Current sea conditions</h3>
                  <div className="current-conditions">
                    {beachDays[0]
                      .filter((beachDay, index) => index === 0)
                      .map((beachHour, index) => (
                        <div>
                          <div>
                            <Sol />
                            <p>{parseInt(beachHour.airTemperature.sg)}º</p>
                          </div>
                          <div>
                            <SwellDuration />
                            <p>
                              {parseFloat(beachHour.swellPeriod.noaa).toFixed(
                                1
                              )}
                              s
                            </p>
                          </div>
                          <div>
                            <SwellHeight />
                            <p>
                              {parseFloat(beachHour.swellHeight.sg).toFixed(1)}m
                            </p>
                          </div>
                          <div>
                            <Wind />
                            <p>
                              {parseFloat(beachHour.windSpeed.sg).toFixed(1)}
                              <span className="kts">kts</span>
                              <span className="pageObject">
                                {beachHour.windDirection.sg <= 22.5
                                  ? " N "
                                  : beachHour.windDirection.sg > 22.5 &&
                                    beachHour.windDirection.sg <= 67.5
                                  ? " NE "
                                  : beachHour.windDirection.sg > 67.5 &&
                                    beachHour.windDirection.sg <= 112.5
                                  ? " E "
                                  : beachHour.windDirection.sg > 112.5 &&
                                    beachHour.windDirection.sg <= 157.5
                                  ? " SE "
                                  : beachHour.windDirection.sg > 157.5 &&
                                    beachHour.windDirection.sg <= 202.5
                                  ? " S "
                                  : beachHour.windDirection.sg > 202.5 &&
                                    beachHour.windDirection.sg <= 247.5
                                  ? " SW "
                                  : beachHour.windDirection.sg > 247.5 &&
                                    beachHour.windDirection.sg <= 292.5
                                  ? " W "
                                  : beachHour.windDirection.sg > 292.5 &&
                                    beachHour.windDirection.sg <= 337.5
                                  ? " NW "
                                  : beachHour.windDirection.sg > 337.5 &&
                                    beachHour.windDirection.sg <= 360
                                  ? " N "
                                  : "null"}
                              </span>
                            </p>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>

              <div className="beach-page-main-container-2">
                <div className="conditions-hour-container">
                  <h3>Sea conditions Forecast</h3>
                  <div className="conditions-hour-mobile">
                    <Swiper
                      pagination={true}
                      className="conditions-swiper-mobile"
                    >
                      {beachDays.map((beachDay, index) => (
                        <SwiperSlide key={index}>
                          <div className="day-slide">
                            <div>
                              <p>
                                {+beachDay[0].time.substring(8, 10) ===
                                currentDay
                                  ? "Today"
                                  : +beachDay[0].time.substring(8, 10) ===
                                    tomorrow
                                  ? "Tomorrow"
                                  : month +
                                    " " +
                                    beachDay[0].time.substring(8, 10)}
                              </p>
                            </div>
                            <div>
                              <span>Next day</span>
                              <FaChevronRight />
                            </div>
                          </div>

                          <Swiper
                            pagination={true}
                            className="conditions-swiper-mobile"
                          >
                            {beachDay
                              .filter(
                                (beachHour, index) =>
                                  index === 0 ||
                                  index === 7 ||
                                  index === 10 ||
                                  index === 13 ||
                                  index === 16 ||
                                  index === 19 ||
                                  index === 22
                              )
                              .map((beachHour, index) => (
                                <SwiperSlide key={index}>
                                  <div className="day-slide-hour">
                                    <div>
                                      <span>
                                        {+beachHour.time.substring(11, 13) ===
                                          time && index === 0
                                          ? "Now"
                                          : beachHour.time.substring(11, 13) +
                                            ":00"}
                                      </span>
                                      <span className="line"></span>
                                    </div>
                                    <div>
                                      <span>Next hour</span>
                                      <FaChevronRight />
                                    </div>
                                  </div>

                                  <div className="day-slide-hour-data">
                                    <div>
                                      <AirTemperatureBlue />
                                      <WaterTemperature />
                                      <SwellDuration />
                                      <SwellHeight />
                                      <Wind />
                                      <WindDirection />
                                    </div>
                                    <div>
                                      <p>
                                        <span>
                                          {parseFloat(
                                            beachHour.airTemperature.sg
                                          ).toFixed(1)}{" "}
                                        </span>{" "}
                                        º
                                      </p>
                                      <p>
                                        <span>
                                          {parseFloat(
                                            beachHour.waterTemperature.sg
                                          ).toFixed(1)}{" "}
                                        </span>{" "}
                                        º
                                      </p>
                                      <p>
                                        <span>
                                          {parseFloat(
                                            beachHour.swellPeriod.sg
                                          ).toFixed(1)}
                                        </span>
                                        s
                                      </p>
                                      <p>
                                        <span>
                                          {parseFloat(
                                            beachHour.swellHeight.sg
                                          ).toFixed(1)}
                                        </span>
                                        m
                                      </p>
                                      <p>
                                        <span>
                                          {parseFloat(
                                            beachHour.windSpeed.sg
                                          ).toFixed(1)}
                                        </span>
                                        kts
                                      </p>
                                      <p>
                                        <span className="">
                                          {beachHour.windDirection.sg <= 22.5
                                            ? " N "
                                            : beachHour.windDirection.sg >
                                                22.5 &&
                                              beachHour.windDirection.sg <= 67.5
                                            ? " NE "
                                            : beachHour.windDirection.sg >
                                                67.5 &&
                                              beachHour.windDirection.sg <=
                                                112.5
                                            ? " E "
                                            : beachHour.windDirection.sg >
                                                112.5 &&
                                              beachHour.windDirection.sg <=
                                                157.5
                                            ? " SE "
                                            : beachHour.windDirection.sg >
                                                157.5 &&
                                              beachHour.windDirection.sg <=
                                                202.5
                                            ? " S "
                                            : beachHour.windDirection.sg >
                                                202.5 &&
                                              beachHour.windDirection.sg <=
                                                247.5
                                            ? " SW "
                                            : beachHour.windDirection.sg >
                                                247.5 &&
                                              beachHour.windDirection.sg <=
                                                292.5
                                            ? " W "
                                            : beachHour.windDirection.sg >
                                                292.5 &&
                                              beachHour.windDirection.sg <=
                                                337.5
                                            ? " NW "
                                            : beachHour.windDirection.sg >
                                                337.5 &&
                                              beachHour.windDirection.sg <= 360
                                            ? " N "
                                            : "null"}
                                        </span>
                                      </p>
                                    </div>
                                  </div>
                                </SwiperSlide>
                              ))}
                          </Swiper>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>
                <div className="conditions-hour-container-desktop">
                  <h3>Sea conditions Forecast</h3>
                  <div className="conditions-hour-desktop">
                    <Swiper
                      pagination={true}
                      navigation={true}
                      modules={[Navigation]}
                      className="conditions-swiper-desktop"
                    >
                      {beachDays.map((beachDay, index) => (
                        <SwiperSlide key={index}>
                          <div className="day-slide-desktop">
                            <div>
                              <div>
                                <p className="day-slide-day">
                                  {+beachDay[0].time.substring(8, 10) ===
                                  currentDay
                                    ? "Today"
                                    : +beachDay[0].time.substring(8, 10) ===
                                      tomorrow
                                    ? "Tomorrow"
                                    : month +
                                      " " +
                                      beachDay[0].time.substring(8, 10)}
                                </p>
                              </div>
                              <div>
                                <span>Next day</span>
                                <FaChevronRight />
                              </div>
                            </div>
                            <div className="hour-slide-desktop">
                              <div className="hour-slide-description-column">
                                <div>
                                  <p>Conditions</p>
                                  <span className="line"></span>
                                </div>
                                <div>
                                  <AirTemperatureBlue />
                                  <p>Temperature</p>
                                </div>
                                <div>
                                  <WaterTemperature />
                                  <p>Water temperature</p>
                                </div>
                                <div>
                                  <SwellDuration />
                                  <p>Swell duration</p>
                                </div>
                                <div>
                                  <SwellHeight />
                                  <p>Swell height</p>
                                </div>
                                <div>
                                  <Wind />
                                  <p>Wind speed</p>
                                </div>
                                <div>
                                  <WindDirection />
                                  <p>Wind direction</p>
                                </div>
                              </div>
                              {beachDay
                                .filter(
                                  (beachHour, index) =>
                                    index === 0 ||
                                    index === 7 ||
                                    index === 10 ||
                                    index === 13 ||
                                    index === 17 ||
                                    index === 19 ||
                                    index === 22
                                )
                                .map((beachHour, index) => (
                                  <div className="hour-slide-column">
                                    <div>
                                      <div className="hour-slide-column-1">
                                        <p>
                                          {+beachHour.time.substring(11, 13) ===
                                            time && index === 0
                                            ? "Now"
                                            : beachHour.time.substring(11, 13) +
                                              ":00"}
                                        </p>
                                        <span className="line"></span>
                                      </div>
                                      <p>
                                        <span className="data-object">
                                          {parseFloat(
                                            beachHour.airTemperature.sg
                                          ).toFixed(1)}
                                        </span>{" "}
                                        º
                                      </p>
                                      <p>
                                        <span className="data-object">
                                          {parseFloat(
                                            beachHour.waterTemperature.sg
                                          ).toFixed(1)}
                                        </span>{" "}
                                        º
                                      </p>
                                      <p>
                                        <span className="data-object">
                                          {parseFloat(
                                            beachHour.swellPeriod.sg
                                          ).toFixed(1)}
                                        </span>{" "}
                                        s
                                      </p>
                                      <p>
                                        <span className="data-object">
                                          {parseFloat(
                                            beachHour.swellHeight.sg
                                          ).toFixed(1)}
                                        </span>{" "}
                                        m
                                      </p>
                                      <p>
                                        <span className="data-object">
                                          {parseFloat(
                                            beachHour.windSpeed.sg
                                          ).toFixed(1)}
                                        </span>{" "}
                                        kts
                                      </p>
                                      <p>
                                        <span className="data-object">
                                          {beachHour.windDirection.sg <= 22.5
                                            ? " N "
                                            : beachHour.windDirection.sg >
                                                22.5 &&
                                              beachHour.windDirection.sg <= 67.5
                                            ? " NE "
                                            : beachHour.windDirection.sg >
                                                67.5 &&
                                              beachHour.windDirection.sg <=
                                                112.5
                                            ? " E "
                                            : beachHour.windDirection.sg >
                                                112.5 &&
                                              beachHour.windDirection.sg <=
                                                157.5
                                            ? " SE "
                                            : beachHour.windDirection.sg >
                                                157.5 &&
                                              beachHour.windDirection.sg <=
                                                202.5
                                            ? " S "
                                            : beachHour.windDirection.sg >
                                                202.5 &&
                                              beachHour.windDirection.sg <=
                                                247.5
                                            ? " SW "
                                            : beachHour.windDirection.sg >
                                                247.5 &&
                                              beachHour.windDirection.sg <=
                                                292.5
                                            ? " W "
                                            : beachHour.windDirection.sg >
                                                292.5 &&
                                              beachHour.windDirection.sg <=
                                                337.5
                                            ? " NW "
                                            : beachHour.windDirection.sg >
                                                337.5 &&
                                              beachHour.windDirection.sg <= 360
                                            ? " N "
                                            : "null"}
                                        </span>
                                      </p>
                                    </div>
                                  </div>
                                ))}
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>
              </div>
              <div className="beach-page-main-container-3">
                {/* <div className="conditions-hour-container">
                  <h3>Tides Forecast</h3>
                  <div className="conditions-hour-hour">
                    <Swiper pagination={true} className="mySwiper">
                      {tideInfoDays.map((tideInfoDay, tideIndex) => (
                        <SwiperSlide key={tideIndex}>
                          <div className="day-slide">
                            {console.log(tideInfoDay)}
                            {console.log(tideInfoDays)}
                            <div>
                              <p>
                                {+tideInfoDay[0].time.substring(8, 10) ===
                                currentDay
                                  ? "Today"
                                  : +tideInfoDay[0].time.substring(8, 10) ===
                                    tomorrow
                                  ? "Tomorrow"
                                  : month +
                                    " " +
                                    +tideInfoDay[0].time.substring(8, 10)}
                              </p>{" "}
                            </div>
                            <div>
                              <span>Next day</span>
                              <FaChevronRight />
                            </div>
                          </div>

                          <Swiper pagination={true} className="mySwiper">
                            {tideInfoDay.map((tideHour, index) => (
                              <SwiperSlide key={index}>
                                <div className="day-slide-hour">
                                  <div>
                                    <span>
                                      {+tideHour.time.substring(11, 13) ===
                                        time && index === 0
                                        ? "Now"
                                        : tideHour.time.substring(11, 13) +
                                          ":00"}
                                    </span>
                                    <span className="line"></span>
                                  </div>
                                  <div>
                                    <span>Next hour</span>
                                    <FaChevronRight />
                                  </div>
                                </div>

                                <div className="day-slide-hour-data">
                                  <div></div>
                                  <div></div>
                                </div>
                              </SwiperSlide>
                            ))}
                          </Swiper>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div> */}
                <div>
                  <div>
                    <h3>Services</h3>
                  </div>
                  <div className="services-container">
                    <div className="services">
                      <div>
                        <Lifeguard
                          className={
                            page.services && page.services.includes("lifeguard")
                              ? "icon-active"
                              : "icon-not-active"
                          }
                        />
                        <p>Lifeguard</p>
                      </div>
                      <div>
                        <Equipment
                          className={
                            page.services && page.services.includes("equipment")
                              ? "icon-active"
                              : "icon-not-active"
                          }
                        />
                        <p>Equipment</p>
                      </div>
                      <div>
                        <Restaurants
                          className={
                            page.services &&
                            page.services.includes("restaurants")
                              ? "icon-active"
                              : "icon-not-active"
                          }
                        />
                        <p>Restaurants</p>
                      </div>
                      <div>
                        <Showers
                          className={
                            page.services && page.services.includes("showers")
                              ? "icon-active"
                              : "icon-not-active"
                          }
                        />
                        <p>Showers</p>
                      </div>
                      <div>
                        <Accessibility
                          className={
                            page.services &&
                            page.services.includes("accessibility")
                              ? "icon-active"
                              : "icon-not-active"
                          }
                        />
                        <p>Accessibility</p>
                      </div>
                      <div>
                        <Transportation
                          className={
                            page.services &&
                            page.services.includes("transportation")
                              ? "icon-active"
                              : "icon-not-active"
                          }
                        />
                        <p>Transportation</p>
                      </div>
                      <div>
                        <Parking
                          className={
                            page.services && page.services.includes("parking")
                              ? "icon-active"
                              : "icon-not-active"
                          }
                        />
                        <p>Parking</p>
                      </div>
                      <div>
                        <FreeParking
                          className={
                            page.services &&
                            page.services.includes("freeParking")
                              ? "icon-active"
                              : "icon-not-active"
                          }
                        />
                        <p>Free Parking</p>
                      </div>
                      <div>
                        <Wc
                          className={
                            page.services && page.services.includes("wc")
                              ? "icon-active"
                              : "icon-not-active"
                          }
                        />
                        <p>WC</p>
                      </div>
                      <div>
                        <FirstAid
                          className={
                            page.services && page.services.includes("firstAid")
                              ? "icon-active"
                              : "icon-not-active"
                          }
                        />
                        <p>First aid</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3>Beach Properties</h3>
              </div>

              <div className="beach-properties-container">
                <div className="beach-properties">
                  <div>
                    <p>Best wind</p>
                    <Wind />
                    <p>{page.perfectWindDirectionSurf}</p>
                  </div>
                  <div>
                    <p>Wave consistency</p>
                    <WaveConsistency />
                    <p>{page.waveConsistency}</p>
                  </div>
                  <div>
                    <p>Facing direction</p>
                    <FacingDirection />
                    <p>{page.facingDirection}</p>
                  </div>
                  <div>
                    <p>Break</p>
                    <BeachBreak />
                    <p>{page.surfBreak}</p>
                  </div>
                  <div>
                    <p>Season</p>
                    <Season />
                    <p>{page.surfingSeason}</p>
                  </div>
                  <div>
                    <p>Surf crowd</p>
                    <BeachCrowd />
                    <p>{page.surfCrowd}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default BeachPage;

/* <Swiper pagination={true} className="mySwiper">
 el = dia  }
{Days.map((el, index) => el && (
    beach = praia 
    el.filter((beach, index) => page.name === beach.name)
    .map((el) => (
        <SwiperSlide key={index}>
            <div className="day-slide">
                <div>
                    {console.log(el)}
                    <p>Today</p> 
                    <span>{day} {month}</span>
                </div>
                <div>
                    <FaChevronRight />
                </div>
            </div>
        </SwiperSlide>
    ))
))}
</Swiper>  */
