import React from "react";
import { Link } from "react-router-dom";
import WeatherForecast from "../WeatherForecast/WeatherForecast";
import "../../styles/styles.css";
import "./home.css";
import NewsLatestSlider from "../news/NewsLatestSlider";
import NewsLatest from "../news/NewsLatest";
import Carousel from "../media-center/Carousel";
import CarouselMobile from "../media-center/CarouselMobile";

import HomeBeachesPopular from "./HomeBeachesPopular/HomeBeachesPopular";

function Home() {
  return (
    <div className="content" style={{ minHeight: `100vh;` }}>
      <div className="section section-1 container">
        <h3>Latest News</h3>
      </div>
      <NewsLatest />
      <NewsLatestSlider />

      <div className="section section-2 container">
        <h3>Popular Beaches</h3>
        <Link to="/beaches">See all</Link>
      </div>
      <HomeBeachesPopular />

      <div className="section section-2 container">
        <h3>Weather Forecast</h3>
      </div>
      <WeatherForecast />

      <div className="section section-2 container">
        <h3>Surf Videos</h3>
      </div>
      <Carousel />
      <CarouselMobile />
    </div>
  );
}

export default Home;
