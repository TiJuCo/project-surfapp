import React from "react";
import "./News-List.css";
import { ArticlesData } from "./News-data";
import NewsCards from "./News-cards";

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
