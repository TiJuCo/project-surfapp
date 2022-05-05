import React, { useContext, useState } from "react";
import './BeachPage.css'
import { useParams } from "react-router-dom";
import ApiContext from "../../../contexts/ApiContext";
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
  } from "../../media/exportMedia";




function BeachPage() {

    let params = useParams();

    
    const { seaInfo, beachesInfo } = useContext(ApiContext);

    const gradient = "linear-gradient(360deg, rgba(57, 73, 87, 0.9) 0%, rgba(255, 255, 255, 0) 100%)";

    const date = new Date();
    const [time] = useState(date.getHours());
   
    return (
        <div className="container beach-page-container">

            {seaInfo.filter((page, index) => page.name === params.beachName).map((page) => ( 

                <div className="beach-page">    
                
                    <div>
                        <img src="" alt="" />
                        <p>All beaches</p>
                    </div>
                    <div className="beach-page-card" style={{ backgroundImage: `url(${page.img}), ${gradient} ` }}>
                        <h1>{page.name}</h1>
                        <div>
                            <img src={location} alt="" />
                            <p>{page.county}</p>
                        </div>
                    </div>
                    <div className="beach-page-content">
                        <p>Today, {time > 12 ? `${time - 12} pm` : `${time} am`}</p>

                        <p className="beach-page-text-report">
                            We register a temperature of <span className="pageObject">{page.airTemperature.sg}º</span>, <span className="pageObject">{page.windSpeed.sg} kts</span> wind from the 

                            <span className="pageObject">{page.windDirection.sg <= 22.5 ? " North " : 
                                page.windDirection.sg > 22.5 &&
                                page.windDirection.sg <= 67.5 ? " North West " :
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
                        <p className="news-page-text">
                            {page.text}
                        </p>
                        <p className="news-page-text">
                            {page.text}
                        </p>
                    </div>
                    <div>
                        <h3>Gallery</h3>
                        
                    </div>              
                </div>
            ))}
        </div>
    )
}

        
export default BeachPage;