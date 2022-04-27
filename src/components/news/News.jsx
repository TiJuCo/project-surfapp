import React from "react";
import "./News.css";
import { ArticlesData } from "./NewsData";
import NewsCards from "./NewsCards";

function News() {
  return (
    <div className="news-card-container">
      {ArticlesData.filter((info) => info.tag === "news").map((info) => (
        <NewsCards {...info} />
      ))}
    </div>
  );
}

export default News;