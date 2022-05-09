import React from "react";
import { ArticlesData } from "./NewsData";
import "./Gallery.css";

function GalleryCard(card) {
  return (
    <>
      {card.gallery.map((el, index) => {
        return (
          <div className="" key={index}>
            <img className="gallery-img" src={el} alt={index} />
          </div>
        );
      })}
    </>
  );
}

export default GalleryCard;


