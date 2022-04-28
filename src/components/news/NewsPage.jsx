import React from "react";
import './News-List.css';
import { ArticlesData } from './News-Data';
import NewsCards from "./News-Cards";




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