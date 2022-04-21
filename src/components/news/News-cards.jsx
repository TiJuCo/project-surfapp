import React from "react";
import './News-List.css';
import {FaChevronRight} from 'react-icons/fa';

const gradient = "linear-gradient(360deg, rgba(57, 73, 87, 0.9) 0%, rgba(255, 255, 255, 0) 100%)"

function NewsCards(props) {

    const {index, title, date, author, image,} = props;
    
    return (
        <div className="bg-img" style={{ backgroundImage: `url(${image}) , ${gradient}`}}>
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