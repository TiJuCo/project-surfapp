import React from "react";
import './News.css';
import {ArticlesData} from './NewsData';
import NewsCards from './NewsCards';



function Events() {

    return (
        <>
            <h1>Surf Events</h1>
            <div className="events-latest-container">
                {ArticlesData.filter((info) => info.tag ==='events' && info.index < 2).map((info) => <NewsCards {...info} />)} 
            </div>
        </>
    )

}

export default Events;