import React, { useContext, useState } from "react";
import "./BeachPage.css";
import { useParams } from "react-router-dom";
import ApiContext from "../../../contexts/ApiContext";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from "swiper";
import { Virtual } from "swiper";
import { Pagination } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import {
  sol,
  airTemperatureBlue,
  waterTemperature,
  swellDuration,
  swellHeight,
  wind,
  windDirection,
  location,
  facingDirection,
  waveConsistency,
  surfCrowd,
  surfBreak,
  surfingSeason,
  perfectWindDirectionSurf,
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
  arrowFullLeft,
  beginnerMobile,
  intermediateMobile,
  advancedMobile,
  optimalWind,
  optimalSwellHeight,
} from "../../media/exportMedia";

function BeachPage() {
  let params = useParams();

  const {
    seaInfo,
    beachesInfo,
    firstDay,
    secondDay,
    thirdDay,
    fourthDay,
    fifthDay,
    tideInfo,
  } = useContext(ApiContext);

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

  const Days = [firstDay, secondDay, thirdDay, fourthDay, fifthDay];

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

  // AUMENTAR OS VALORES DAS TIDES POR 1 OU 2 METROS // .filter((el, index) => +el.time.substring(8, 10) === day1)
  const firstDayTide = tideInfo
    .filter((beach) => beach.name === params.beachName)
    .map((day) => day[0]);

  const secondDayTide = tideInfo
    .filter((beach) => beach.name === params.beachName)
    .map((day) => day[1]);

  const thirdDayTide = tideInfo
    .filter((beach) => beach.name === params.beachName)
    .map((day) => day[2]);

  const fourthDayTide = tideInfo
    .filter((beach) => beach.name === params.beachName)
    .map((day) => day[3]);

  const fifthDayTide = tideInfo
    .filter((beach) => beach.name === params.beachName)
    .map((day) => day[4]);

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

  console.log(beachDays);
  console.log(tideInfoDays);

  return (
    <div className="container beach-page-container">
      <Link to={`/beaches/`}>
        <div className="back">
          <img src={arrowFullLeft} alt="back" />
          <p>All beaches</p>
        </div>
      </Link>
      {seaInfo
        .filter((page, index) => page.name === params.beachName)
        .map((page) => (
          <div className="beach-page">
            {console.log(page)}
            <div className="beach-page-card-container">
              <div
                className="beach-page-card"
                style={{ backgroundImage: `url(${page.img}), ${gradient} ` }}
              >
                <h1>{page.name}</h1>
                <div>
                  <img src={location} alt="" />
                  <p>{page.county}</p>
                </div>
              </div>
              <div className="beach-page-content">
                {console.log(beachDays)}
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
                    A preia-mar dá-se às{" "}
                    <span className="pageObject">12:43</span>, <br /> a
                    baixa-mar às <span className="pageObject">18:43</span>.
                  </p>
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
                        <p>Excellent</p>
                        <div className="calc-dots">
                          <span class="dot-accent"></span>
                          <span class="dot-accent"></span>
                          <span class="dot-accent"></span>
                          <span class="dot-accent"></span>
                          <span class="dot-accent"></span>
                        </div>
                      </div>
                      <p>
                        Today, {currentDay} {month}
                      </p>
                      <div>
                        <img src={beginnerMobile} alt="" />
                        <img src={intermediateMobile} alt="" />
                        <img src={advancedMobile} alt="" />
                      </div>
                    </div>
                    <div className="desktop">
                      <div>
                        <div>
                          <p>Excellent</p>
                          <div className="calc-dots">
                            <span class="dot-accent"></span>
                            <span class="dot-accent"></span>
                            <span class="dot-accent"></span>
                            <span class="dot-accent"></span>
                            <span class="dot-accent"></span>
                          </div>
                        </div>
                        <div>
                          <img src={optimalWind} alt="" />
                          <img src={optimalSwellHeight} alt="" />
                        </div>
                      </div>
                      <div>
                        <p>Suitable for:</p>
                        <div>
                          <img src={beginnerMobile} alt="" />
                          <img src={intermediateMobile} alt="" />
                          <img src={advancedMobile} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="current-conditions-container">
                  <h3>Current sea conditions</h3>
                  <div className="current-conditions">
                    {console.log(beachDays[0])}
                    {beachDays[0]
                      .filter((beachDay, index) => index === 0)
                      .map((beachHour, index) => (
                        <div> 
                          <div>
                            <img src={sol} alt="" />
                            <p>{parseInt(beachHour.airTemperature.sg)}º</p>
                          </div>
                          <div>
                            <img src={swellDuration} alt="" />
                            <p>
                              {parseFloat(beachHour.swellPeriod.noaa).toFixed(
                                1
                              )}
                              s
                            </p>
                          </div>
                          <div>
                            <img src={swellHeight} alt="" />
                            <p>
                              {parseFloat(beachHour.swellHeight.sg).toFixed(1)}m
                            </p>
                          </div>
                          <div>
                            <img src={wind} alt="" />
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
                    <Swiper pagination={true} className="conditions-swiper-mobile">
                      {beachDays.map((beachDay, index) => (
                        <SwiperSlide key={index}>
                          {console.log(beachDay)}
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

                          <Swiper pagination={true} className="conditions-swiper-mobile">
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
                                        time
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
                                      <img src={airTemperatureBlue} alt="" />
                                      <img src={waterTemperature} alt="" />
                                      <img src={swellDuration} alt="" />
                                      <img src={swellHeight} alt="" />
                                      <img src={wind} alt="" />
                                      <img src={windDirection} alt="" />
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
                    <Swiper pagination={true} navigation={true} modules={[Navigation]} className="conditions-swiper-desktop">
                      {beachDays.map((beachDay, index) => (
                        <SwiperSlide key={index}>
                          {console.log(beachDay)}
                          <div className="day-slide-desktop">
                            <div>
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
                            <div className="hour-slide-desktop">
                              
                              <div className="hour-slide-description-column">
                                
                                <div>
                                    <p>Conditions</p>
                                    <span className="line"></span>
                                </div>
                                <div>
                                  <img src={airTemperatureBlue} alt="" />
                                  <p>Temperature</p>
                                </div>
                                <div>
                                  <img src={waterTemperature} alt="" />
                                  <p>Water temperature</p>
                                </div>
                                <div>
                                  <img src={swellDuration} alt="" />
                                  <p>Swell duration</p>
                                </div>
                                <div>
                                  <img src={swellHeight} alt="" />
                                  <p>Swell height</p>
                                </div>
                                <div>
                                  <img src={wind} alt="" />
                                  <p>Wind speed</p>
                                </div>
                                <div>
                                <img src={windDirection} alt="" />
                                  <p>Temperature</p>
                                </div>
                              </div>
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
                                <div className="hour-slide-column">
                                    
                                    <div>
                                      <div className="hour-slide-column-1">
                                        {console.log(+beachHour.time.substring(11, 13))}
                                        {console.log(time)}
                                        <p>{
                                            +beachHour.time.substring(11, 13) === time
                                              ? "Now"
                                              : beachHour.time.substring(11, 13) +
                                                ":00"
                                              // ? +beachHour.time.substring(11, 13) === time 
                                              // : beachHour.time.substring(11, 13) +
                                              // ":00"
                                            }
                                        </p>
                                        <span className="line"></span>
                                      </div>
                                      <p>
                                        {parseFloat(
                                            beachHour.airTemperature.sg
                                          ).toFixed(1)}
                                      </p>
                                      <p>
                                        {parseFloat(
                                            beachHour.waterTemperature.sg
                                          ).toFixed(1)}
                                      </p>
                                      <p>
                                        {parseFloat(
                                            beachHour.swellDirection.sg
                                          ).toFixed(1)}
                                      </p>
                                      <p>
                                        {parseFloat(
                                            beachHour.swellHeight.sg
                                          ).toFixed(1)}
                                      </p>
                                      <p>
                                        {parseFloat(
                                            beachHour.windSpeed.sg
                                          ).toFixed(1)}
                                      </p>
                                      <p>
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
                <div className="conditions-hour-container">
                  <h3>Tides Forecast</h3>
                  <div className="conditions-hour-hour">
                    <Swiper pagination={true} className="mySwiper">
                      {tideInfoDays.map((tideInfoDay, tideIndex) => (
                        <SwiperSlide key={tideIndex}>
                          {console.log(tideInfoDays)}
                          {console.log(tideInfoDay)}
                          {console.log(tideInfoDay[3])}
                          {/* {console.log(+tideInfoDay.time.substring(8,10))} */}
                          <div className="day-slide">
                            <div>
                              {/* <p>{+tideInfoDay[tideIndex] && +tideInfoDay[tideIndex].time.substring(8,10) === currentDay ? "Today" : +tideInfoDay[tideIndex] && +tideInfoDay[tideIndex].time.substring(8,10) === tomorrow ? "Tomorrow" : month + " " +tideInfoDay[tideIndex] && +tideInfoDay[tideIndex].time.substring(8,10)}</p> */}
                            </div>
                            <div>
                              <span>Next day</span>
                              <FaChevronRight />
                            </div>
                          </div>

                          {/* <Swiper pagination={true} className="mySwiper" >
                                                            {tideInfoDay.map((tideHour, index) => (
                                                                        
                                                                        <SwiperSlide key={index}>
                                                                            
                                                                            <div className="day-slide-hour">
                                                                                <div>
                                                                                    <span>{+tideHour.time.substring(11,13) === time ? "Now" : tideHour.time.substring(11,13) + ":00"}</span>
                                                                                    <span className="line"></span>
                                                                                </div>
                                                                                <div>
                                                                                    <span>Next hour</span>
                                                                                    <FaChevronRight />
                                                                                </div>
                                                                            </div>

                                                                            <div className="day-slide-hour-data">
                                                                                <div>
                                                                                    
                                                                                </div>
                                                                                <div>
                                                                                
                                                                            
                                                                                </div>
                                                                            </div>
                                                                        </SwiperSlide>
                                        
                                                            ))}
                                                        </Swiper> */}
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>
                <div>
                  <div>
                    <h3>Services</h3>
                  </div>
                  <div className="services-container">
                    <div className="services">
                      <div>
                        <img
                          className={
                            page.services && page.services.includes("lifeguard")
                              ? "icon-active"
                              : "icon-not-active"
                          }
                          src={lifeguard}
                          alt="lifeguard"
                        />
                        <p>Lifeguard</p>
                      </div>
                      <div>
                        <img
                          className={
                            page.services && page.services.includes("equipment")
                              ? "icon-active"
                              : "icon-not-active"
                          }
                          src={equipment}
                          alt="equipment"
                        />
                        <p>Equipment</p>
                      </div>
                      <div>
                        <img
                          className={
                            page.services &&
                            page.services.includes("restaurants")
                              ? "icon-active"
                              : "icon-not-active"
                          }
                          src={restaurants}
                          alt=""
                        />
                        <p>Restaurants</p>
                      </div>
                      <div>
                        <img
                          className={
                            page.services && page.services.includes("showers")
                              ? "icon-active"
                              : "icon-not-active"
                          }
                          src={showers}
                          alt=""
                        />
                        <p>Showers</p>
                      </div>
                      <div>
                        <img
                          className={
                            page.services &&
                            page.services.includes("accessibility")
                              ? "icon-active"
                              : "icon-not-active"
                          }
                          src={accessibility}
                          alt=""
                        />
                        <p>Accessibility</p>
                      </div>
                      <div>
                        <img
                          className={
                            page.services &&
                            page.services.includes("transportation")
                              ? "icon-active"
                              : "icon-not-active"
                          }
                          src={transportation}
                          alt=""
                        />
                        <p>Transportation</p>
                      </div>
                      <div>
                        <img
                          className={
                            page.services && page.services.includes("parking")
                              ? "icon-active"
                              : "icon-not-active"
                          }
                          src={parking}
                          alt=""
                        />
                        <p>Parking</p>
                      </div>
                      <div>
                        <img
                          className={
                            page.services &&
                            page.services.includes("freeParking")
                              ? "icon-active"
                              : "icon-not-active"
                          }
                          src={freeParking}
                          alt=""
                        />
                        <p>Free Parking</p>
                      </div>
                      <div>
                        <img
                          className={
                            page.services && page.services.includes("wc")
                              ? "icon-active"
                              : "icon-not-active"
                          }
                          src={wc}
                          alt=""
                        />
                        <p>WC</p>
                      </div>
                      <div>
                        <img
                          className={
                            page.services && page.services.includes("firstAid")
                              ? "icon-active"
                              : "icon-not-active"
                          }
                          src={firstAid}
                          alt=""
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
                    <img src={wind} alt="" />
                    <p>{page.perfectWindDirectionSurf}</p>
                  </div>
                  <div>
                    <p>Wave consistency</p>
                    <img src={sol} alt="" />
                    <p>{page.waveConsistency}</p>
                  </div>
                  <div>
                    <p>Facing direction</p>
                    <img src={sol} alt="" />
                    <p>{page.facingDirection}</p>
                  </div>
                  <div>
                    <p>Break</p>
                    <img src={sol} alt="" />
                    <p>{page.surfBreak}</p>
                  </div>
                  <div>
                    <p>Season</p>
                    <img src={sol} alt="" />
                    <p>{page.surfingSeason}</p>
                  </div>
                  <div>
                    <p>Surf crowd</p>
                    <img src={sol} alt="" />
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
