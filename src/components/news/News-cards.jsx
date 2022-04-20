import React from "react";
import './News-List.css';
import {FaChevronRight} from 'react-icons/fa';



function NewsCards(props) {

    const {index, title, date, author, image,} = props;
    
    return (
        <div className="bg-img" style={{ backgroundImage: `url(${image})`}}>
            <div className="news-header">
                <div className="news-cards-row-1"><h1>{title}</h1></div>
                <div className="news-cards-row-2">
                    <p>{date}</p>
                    <p>Author: {author}</p>
                    <button className="read-more-button">Read more <FaChevronRight /></button>
                </div>
            </div>
        </div>
    )
}

export default NewsCards;