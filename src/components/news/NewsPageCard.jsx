import React, { useState, useEffect } from "react";
import "./News.css";
import { ArticlesData } from "./NewsData";
import NewsCards from "./NewsCards";
import "./NewsPage.css";
import GalleryCard from "./Gallery";
import { useParams } from "react-router-dom";

export function NewsPageCard(props) {
  let param = useParams();

  const [randomNews, setRandomNews] = useState([]);

  const { index } = props;

const getrandom = () => {
    let newsRelated = [];
    let arr = [];
    while (arr.length < 3) {
      let random = Math.floor(Math.random() * 8) + 1;
      if (arr.indexOf(random) === -1) 
      arr.push(random)
    }
    ArticlesData.map((article) =>
      arr.map((newsNumber) => {
        if (article.index === newsNumber) {
            newsRelated.push(article);
        }
      })
    );
    setRandomNews(newsRelated)
    console.log(newsRelated)
  };

  const displayRandomNews =  randomNews.map((news) => <NewsCards {...news} />)      


  useEffect(() => {
    setRandomNews([])
    getrandom();
  }, [param]);

  return (
    <div className="container">
      <div className="">
        <span>
          News / <span>{index}</span>
        </span>
        <div>
          <img src="" alt="" />
          <p>All news</p>
        </div>
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
               {displayRandomNews}
              </div>
            </div>
            <div>
              <h3>Gallery</h3>
              <div className="gallery-container">
                {<GalleryCard {...card} />}
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
}
