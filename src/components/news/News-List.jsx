import React from "react";
import "./News-List.css";
import { ArticlesData } from "./News-data";
import NewsCards from "./News-cards";

function NewsList() {
  return (
    <div className="newsCard-container">
      {ArticlesData.filter((info) => info.tag === "news").map((info) => (
        <NewsCards {...info} />
      ))}
    </div>
  );
}

export default NewsList;
