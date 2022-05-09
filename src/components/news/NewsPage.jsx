import React from "react";
import "./News.css";
import NewsCards from "./NewsCards";
import "./NewsPage.css";
import GalleryCard from "./Gallery";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { ArrowFullLeft } from "../media/exportMedia";

export function NewsPageCard(props) {
  let param = useParams();

  const { ArticlesData } = props;

  const articlesData2 = [...ArticlesData];
  articlesData2.splice(+param.index, 1);
  console.log(articlesData2);

  while (articlesData2.length > 3) {
    articlesData2.splice(
      Math.floor(Math.random() * articlesData2.length - 1),
      1
    );
  }

  return (
    <div className="container">
      <div className="">
        <Link to={`/news/`}>
          <div className="back">
            <ArrowFullLeft />
            <p>All News</p>
          </div>
        </Link>
      </div>
      {ArticlesData.filter((card) => card.index === +param.index).map(
        (card) => (
          <div className="news-page-container">
            <div className="news-page-header">
              <h1>{card.title}</h1>
              <p>{card.date}</p>
              <p>by {card.author}</p>
            </div>
            <div className="news-page-img">
              <img src={card.image} alt={card.title} />
            </div>
            <div className="text-container">
              <p className="news-page-text">{card.text}</p>
              <div className="news-related">
                {articlesData2.map((info) => (
                  <NewsCards {...info} />
                ))}
              </div>
            </div>
            <div>
              <h3>Gallery</h3>
              <div className="gallery-container">
                {ArticlesData.filter((info) => info.index === card.index).map(
                  (card) => (
                    <GalleryCard {...card} />
                  )
                )}
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
}
