import React from "react";
import './News-List.css';
import {ArticlesData} from './News-data';
import NewsCards from './News-Cards';



function EventsLatest() {

    return (
        <>
            <h1>Surf Events</h1>
            <div className="events-latest-container">
                {ArticlesData.filter((info) => info.tag ==='events' && info.index < 2).map((info) => <NewsCards {...info} />)} 
            </div>
        </>
    )

}

export default EventsLatest;