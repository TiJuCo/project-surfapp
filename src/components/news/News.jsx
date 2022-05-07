import React from "react";
import "./News.css";
import { ArticlesData } from "./NewsData";
import NewsCards from "./NewsCards";
import NewsLatestSlider from "./NewsLatestSlider"

function News() {
  return (

    <div className="content">

        <div className="section section-1 container">
          <h3>Popular News</h3>
        </div>
        <div className="news-card-container container">
          {ArticlesData.filter((info) => info.tag === "news").map((info) => (
            <NewsCards {...info} />
          ))}
        </div>
        <NewsLatestSlider/>

        <div className="section section-1 container">
          <h3>All News</h3>
        </div>
        <div className="news-list-container container">
          {ArticlesData.filter((info) => info.tag === "news").map((info) => (
            <NewsCards {...info} />
          ))}
        </div>
    </div>
  );
}

export default News;