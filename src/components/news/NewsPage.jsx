import React from "react";
import './News.css';
import { ArticlesData } from './NewsData';
import NewsCards from "./NewsCards";
import './NewsPage.css'
import GalleryCard from './Gallery'
import { useParams } from "react-router-dom";




export function NewsPageCard(props) {
    let param = useParams();
    

    const {index, title, date, author, image, text, gallery} = props;


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
                {ArticlesData.filter((index) => param.index === index)
                .map((index) => (
                <div className="news-page-container">
                    <div className="news-page-header">
                        <h1>{title}</h1>
                        <p>{date}</p>
                        <p>by {author}</p>
                    </div>
                    <div className="news-page-img" >
                        <img src={image} alt={title} />
                    </div>
                    <div className="text-container">
                        <p className="news-page-text">
                            {text}
                        </p>
                        <div className="news-related">{ArticlesData.filter((info, index) => info.tag === "news" && index > 0 && index < 4).map(
                            (info) => (
                                <NewsCards {...info}/>
                                )
                            )}
                        </div>
                    </div>
                    <div>
                        <h3>Gallery</h3>
                        <div className="gallery-container">
                            {ArticlesData.filter((info) => info.index < 3).map((info) => <GalleryCard {...info} />
                            )} 
                        </div>
                    </div>
                                
                </div>
                ))}
            </div>
            )
        }

        
        
function NewsPage() {
    
    
    return (
        <>
            {ArticlesData.filter((article) => article.tag === 'news' && article.index < 1).map((article) => <NewsPageCard {...article} />)}
        </>
    )
}        

export default NewsPage;