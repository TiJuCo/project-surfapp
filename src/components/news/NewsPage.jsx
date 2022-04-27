import React from "react";
import './News.css';
import { ArticlesData } from './NewsData';
import NewsCards from "./NewsCards";




function NewsPageCard(props) {

    const {index, title, date, author, image, text, gallery} = props;

        return (
            <div>
                <div className="newsPage-header">
                    <h1>{title}</h1>
                    <p>{date}</p>
                    <p>{author}</p>
                </div>
                <div>
                    <img className="newsPageImg" src={image} alt={title} />
                </div>
                <div>
                    {text}
                </div>
            </div>
            )
        }

        
        
function NewsPage() {
    
    
    return (
        <>
            {ArticlesData.filter((article) => article.tag === 'news').map((article) => <NewsPageCard {...article} />)}
        </>
    )
}        

export default NewsPage;