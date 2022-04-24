import React, {useState} from "react";
import './News-List.css';
import {FaChevronRight} from 'react-icons/fa';

const gradient = "linear-gradient(360deg, rgba(57, 73, 87, 0.9) 0%, rgba(255, 255, 255, 0) 100%)"

function NewsCards(props) {

    const {index, title, date, dateMobile, author, image,} = props;

    
    const [hoverButton, setHoverButton] = useState(false);
    const mouseOverChevron = () => {
        setHoverButton(!hoverButton)
    };
    
    
    return (
        <div className="bg-img" style={{ backgroundImage: `url(${image}) , ${gradient}`}}>
            <div className="news-header">
                <div className="news-cards-row-1"><h1>{title}</h1></div>
                <div className="news-cards-row-2">
                    <p>{dateMobile}</p>
                    <p>{date}</p>
                    <p>Author: {author}</p>
                    <button className="read-more-button" onMouseOver={mouseOverChevron} onMouseLeave={mouseOverChevron}>Read more <FaChevronRight className={hoverButton ? "svg-fill-white" : "null"} /></button>
                </div>
            </div>
        </div>
    )
}

export default NewsCards;