import React, { useContext, useState } from "react";
import './BeachPage.css'
import { useParams } from "react-router-dom";
import ApiContext from "../../../contexts/ApiContext";
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import "swiper/css/pagination";
import "swiper/css";
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
    arrowFullLeft,
    beginnerMobile,
    intermediateMobile,
    advancedMobile,
  } from "../../media/exportMedia";




function BeachPage() {

    let params = useParams();
    
    const { seaInfo, beachesInfo, firstDay, secondDay, thirdDay, fourthDay, fifthDay } = useContext(ApiContext);

    seaInfo.forEach((element, index) => {
        element.name = beachesInfo[index].name;
        element.county = beachesInfo[index].county;
        element.img = beachesInfo[index].img;
        element.services = beachesInfo[index].services;
    });

    const gradient = "linear-gradient(360deg, rgba(57, 73, 87, 0.9) 0%, rgba(255, 255, 255, 0) 100%)";

    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const date = new Date();
    const [time] = useState(date.getHours());
    const [day] = useState(date.getDate());
    const [dateMonth] = useState(date.getDay());
    
    const d = new Date();
    let month = months[d.getMonth()];
   
    return (
        <div className="container beach-page-container">

            {seaInfo.filter((page, index) => page.name === params.beachName).map((page) => ( 

                <div className="beach-page">    
                    <Link to={`/beaches/`}>
                        <div className="back">
                            <img src={arrowFullLeft} alt="back" />
                            <p>All beaches</p>
                        </div>
                    </Link>
                    <div className="beach-page-card" style={{ backgroundImage: `url(${page.img}), ${gradient} ` }}>
                        <h1>{page.name}</h1>
                        <div>
                            <img src={location} alt="" />
                            <p>{page.county}</p>
                        </div>
                    </div>
                    <div className="beach-page-content">
                        <div className="beach-page-time">
                            <p className="beach-page-time-text"><span className="accent">Today</span>, {day} {month} <span class="dot-accent"></span> {time > 12 ? `${time - 12} pm` : `${time} am`}</p>
                        </div>

                        <p className="beach-page-text-report">
                            We register a temperature of <span className="pageObject">{page.airTemperature.sg}º</span>, <span className="pageObject">{page.windSpeed.sg} kts</span> wind from the 

                            <span className="pageObject">{page.windDirection.sg <= 22.5 ? " North " : 
                                page.windDirection.sg > 22.5 &&
                                page.windDirection.sg <= 67.5 ? " North East " :
                                page.windDirection.sg > 67.5 &&
                                page.windDirection.sg <= 112.5 ? " East " :
                                page.windDirection.sg > 112.5 &&
                                page.windDirection.sg <= 157.5 ? " South East " :
                                page.windDirection.sg > 157.5 &&
                                page.windDirection.sg <= 202.5 ? " South " :
                                page.windDirection.sg > 202.5 &&
                                page.windDirection.sg <= 247.5 ? " South West " :
                                page.windDirection.sg > 247.5 &&
                                page.windDirection.sg <= 292.5 ? " West " :
                                page.windDirection.sg > 292.5 &&
                                page.windDirection.sg <= 337.5 ? " North West " :
                                page.windDirection.sg > 337.5 &&
                                page.windDirection.sg <= 360 ? " North " : "null"  
                            }</span>
                            , a wave height of  <span className="pageObject">{page.waveHeight.sg} m</span>, a swell interval of <span className="pageObject">{page.wavePeriod.noaa} kts</span>.
                        </p>

                        <p className="beach-page-text-report-tide">
                            A preia-mar dá-se às <span className="pageObject">12:43</span>, <br/> a baixa-mar às <span className="pageObject">18:43</span>. 
                        </p>
                    </div>
                    <div className="beach-page-calculator">
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
                        <p>Today, {day} {month}</p>
                        <div>
                            <img src={beginnerMobile}alt="" />
                            <img src={intermediateMobile}alt="" />
                            <img src={advancedMobile}alt="" />
                        </div>
                          
                        
                        
                    </div>   
                    <div className="current-conditions-container">
                        <h3>Current conditions</h3>
                        <div className="current-conditions">
                            <div>
                                <img src={sol} alt="" />
                                <p>{parseInt(page.airTemperature.sg)}º</p>
                            </div>
                            <div>
                                <img src={swellDuration} alt="" />
                                <p>{parseFloat(page.wavePeriod.noaa).toFixed(1)}s</p>
                            </div>
                            <div>
                                <img src={swellHeight} alt="" />
                                <p>{parseFloat(page.waveHeight.sg).toFixed(1)}m</p>
                            </div>
                            <div>
                                <img src={wind} alt="" />
                                <p>
                                {parseFloat(page.windSpeed.sg).toFixed(1)}<span className="kts">kts</span> 
                                <span className="pageObject">{page.windDirection.sg <= 22.5 ? " N " : 
                                page.windDirection.sg > 22.5 &&
                                page.windDirection.sg <= 67.5 ? " NE " :
                                page.windDirection.sg > 67.5 &&
                                page.windDirection.sg <= 112.5 ? " E " :
                                page.windDirection.sg > 112.5 &&
                                page.windDirection.sg <= 157.5 ? " SE " :
                                page.windDirection.sg > 157.5 &&
                                page.windDirection.sg <= 202.5 ? " S " :
                                page.windDirection.sg > 202.5 &&
                                page.windDirection.sg <= 247.5 ? " SW " :
                                page.windDirection.sg > 247.5 &&
                                page.windDirection.sg <= 292.5 ? " W " :
                                page.windDirection.sg > 292.5 &&
                                page.windDirection.sg <= 337.5 ? " NW " :
                                page.windDirection.sg > 337.5 &&
                                page.windDirection.sg <= 360 ? " N " : "null"  
                            }</span>
                                </p>
                            </div>
                        </div>
                    </div>              
                    <div className="conditions-hour-container">
                        <h3>Current conditions</h3>
                        <div className="conditions-hour">
                            {/* <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                                {firstDay.map((element, index) => (
                                    <SwiperSlide key={index}>
                                        <div>
                                            Today 
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper> */}
                        </div>
                    </div>              
                </div>
            ))}
        </div>
    )
}

        
export default BeachPage;