import React from "react";
import { ArticlesData } from "./NewsData";
import "./Gallery.css";

function GalleryCard(card) {
  return (
    <>
      {card.gallery.map((el, index) => {
        return (
          <div className="gallery-container" key={index}>
            <img className="gallery-img" src={el} alt={index}/>
          </div>
        );
      })}
    </>
  );
}

export default GalleryCard;


