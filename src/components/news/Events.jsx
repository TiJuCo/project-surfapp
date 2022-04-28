import React from "react";
import './News-List.css';
import {ArticlesData} from './News-Data';
import NewsCards from './News-Cards';
import VideosCards from "../media-center/Videos-Cards";
import { surfVideos } from "../media-center/Videos-Data";



function EventsLatest() {

    return (
        <>
            <h1>Surf Events</h1>
            <div className="events-latest-container">
                {surfVideos.filter((info) => info.tag ==='videos' && info.index < 2).map((info) => <VideosCards {...info} />)} 
            </div>
        </>
    )

}

export default EventsLatest;