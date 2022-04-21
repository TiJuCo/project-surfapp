import React from "react";
import "./News-grid.css";
import { ArticlesData } from "./News-data";
import CreateCards from "./News-cards";

function CreateNewsGrid() {
  return (
    <div className="newsCard-container">
      {ArticlesData.filter((info) => info.tag === "news").map((info) => (
        <CreateCards {...info} />
      ))}
    </div>
  );
}

export default CreateNewsGrid;
