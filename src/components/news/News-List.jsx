import React from "react";
import "./News-List.css";
import { ArticlesData } from "./News-Data";
import NewsCards from "./News-Cards";

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
