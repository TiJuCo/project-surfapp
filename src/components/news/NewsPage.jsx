import React from "react";
import './News.css';
import { ArticlesData } from './NewsData';
import NewsCards from "./NewsCards";
import './NewsPage.css'
import GalleryCard from './Gallery'
import { useParams } from "react-router-dom";




export function NewsPageCard(props) {
    let param = useParams();
    

    const {index, title, date, author, image, text, gallery, ArticlesData} = props;
   
   

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
               {ArticlesData.filter((card) => card.index === +param.index).map((card) => ( 
                   
                <div className="news-page-container">
                    <div className="news-page-header">
                        <h1>{card.title}</h1>
                        <p>{card.date}</p>
                        <p>by {card.author}</p>
                    </div>
                    <div className="news-page-img" >
                        <img src={card.image} alt={card.title} />
                    </div>
                    <div className="text-container">
                        <p className="news-page-text">
                            {card.text}
                        </p>
                        <div className="news-related">
                            {ArticlesData.filter((info, index) => info.tag === "news" && card.index !== index && info.index < 4).map(
                            (info) => (
                                <NewsCards {...info}/>
                                )
                            )}
                        </div>
                    </div>
                    <div>
                        <h3>Gallery</h3>
                        <div className="gallery-container">
                            {ArticlesData.filter((info) => info.index === card.index).map((card) => <GalleryCard {...card} />
                            )} 
                        </div>
                    </div>
                                
                </div>
                ))}
            </div>
            )
        }

        
        
/*function NewsPage() {
    
    
    return (
        <>
            {ArticlesData.filter((article) => article.tag === 'news' && article.index < 1).map((article) => <NewsPageCard {...article} />)}
        </>
    )
}        

export default NewsPage; */


 /*{ArticlesData.filter((index) => param.index === index)
    .map((index) => (    */

    // ))}


    /*  let ArticlesData2 = ArticlesData

    ArticlesData2.map((el, index) => {
        if (ArticlesData2.length > 3 ) { ArticlesData2.splice(Math.floor(Math.random() * ArticlesData2.length - 1)) }
    })
    console.log(ArticlesData2) */