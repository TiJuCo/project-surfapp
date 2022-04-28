import React from "react";
import './BeachCard.css';
import {FaChevronRight} from 'react-icons/fa';
import { sol, swellDuration, swellHeight, wind, location } from "../../media/exportMedia.jsx";

const gradient = "linear-gradient(360deg, rgba(57, 73, 87, 0.9) 0%, rgba(255, 255, 255, 0) 100%)"
 {/*style={{ backgroundImage: `url(${}) , ${gradient}`}} */}

function BeachCard() {

    return (
        <div className="beach-card">
             <div className="beach-card-row-1"> 
                <h2>Praia <br/> de Carcavelos</h2>

                <div>
                    <img src={location} alt="" />
                    <p>Cascais</p>
                </div>
                
            </div>
            <div className="beach-card-row-2">
                <div className="beach-card-row-2-row-1">
                    <div>
                        <img src={sol} alt="" />
                        <p>Data</p>
                    </div>
                    <div>
                        <img src={swellDuration} alt="" />
                        <p>Data</p>
                    </div>
                    <div>
                        <img src={swellHeight} alt="" />
                        <p>Data</p>
                    </div>
                    <div>
                        <img src={wind} alt="" />
                        <p>Data</p>
                    </div>
                </div>
                <div className="beach-card-row-2-row-2">
                    <img src={sol} alt="" />
                    <img src={sol} alt="" />
                    <img src={sol} alt="" />
                    <img src={sol} alt="" />
                    <img src={sol} alt="" />
                    <img src={sol} alt="" />
                    <img src={sol} alt="" />
                    <img src={sol} alt="" />
                </div>
            </div>
        </div>
    )
}

export default BeachCard;