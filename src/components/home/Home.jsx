import React from "react";
import { Link } from "react-router-dom";
import WeatherForecast from "../WeatherForecast/WeatherForecast";
import "../../styles/styles.css";
import "./home.css";


function Home() {
  return (
    <div className="content" style={{ minHeight: `100vh;` }}>
      <div className="section-1 container">
        <h3>Latest News</h3>
        
      </div>
      
      <div className="section-2 container">
        <h3>Weather Forecast</h3>
        <Link to="/beaches">See all</Link>
      </div>
      <WeatherForecast />

      {/* Replace section here */}

      <div className="section-2 container">
        <h3>Weather Forecast</h3>
        <Link to="/beaches">See all</Link>
      </div>
      <WeatherForecast />
    </div>
  );
}

export default Home;
