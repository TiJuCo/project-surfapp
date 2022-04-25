import React from "react";
import './News-List.css';
import {FaChevronRight} from 'react-icons/fa';
import NewsPage from "./News-Page";
import { ArticlesData } from "./News-Data";
import { Link, useParams } from "react-router-dom";

const gradient = "linear-gradient(360deg, rgba(57, 73, 87, 0.9) 0%, rgba(255, 255, 255, 0) 100%)";




function NewsCards(props) {

    const {index, title, date, author, image,} = props;
    const [newsPage] = useParams()
    
    return (
        <div className="bg-img" style={{ backgroundImage: `url(${image}) , ${gradient}`}}>
            <div className="news-header">
                <div className="news-cards-row-1"><h1>{title}</h1></div>
                <div className="news-cards-row-2">
                    <p>{date}</p>
                    <p>Author: {author}</p>
                    <button className="read-more-button">
                        <Link to={`/news/${newsPage}`}>
                        Read more <FaChevronRight /></Link></button>
                </div>
            </div>
        </div>
    )
}

export default NewsCards;