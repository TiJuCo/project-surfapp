import React from "react";
import "./News.css";
import { ArticlesData } from "./NewsData";
import NewsCards from "./NewsCards";


function NewsLatest() {
  return (
    <div className="news-latest-container">
      {ArticlesData.filter((info) => info.tag === "news" && info.index < 3).map(
        (info) => (
            <NewsCards {...info} />
        )
      )}
    </div>
  );
}

export default NewsLatest;