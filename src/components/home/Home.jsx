import React from "react";
import NewsLatest from "../news/News-Latest";
import { Link } from "react-router-dom";
import WeatherForecast from "../WeatherForecast/WeatherForecast";
import "../../styles/styles.css";
import "./home.css";
import NewsSlider from "../news/News-Latest-Mobile";
import HomeBeachesPopular from "./HomeBeachesPopular/HomeBeachesPopular";

function Home() {
  return (
    <div className="content" style={{ minHeight: `100vh;` }}>
      <div className="section section-1 container">
        <h3>Latest News</h3>
        <Link to="/news">See all</Link>
      </div>
      <NewsLatest />
      <NewsSlider />
      <div className="section section-2 container">
        <h3>Popular Beaches</h3>
        <Link to="/beaches">See all</Link>
      </div>
      <HomeBeachesPopular />
      
      
      <div className="section section-2 container">
        <h3>Weather Forecast</h3>
        <Link to="/beaches">See all</Link>
      </div>
      <WeatherForecast />
    </div>
  );
}

export default Home;
