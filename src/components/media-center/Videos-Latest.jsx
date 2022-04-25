import React from "react";
import './Videos.css';
import {surfVideos} from './News-Data';
import VideosCards from './Videos-Cards';



function VideosLatest() {

    return (
        <>
            <div>
                <h1>Surf Videos</h1>
            </div>
            
            <div className="videos-latest-container">
                {surfVideos.filter((info) => info.tag ==='videos' && info.index < 2).map((info) => <VideosCards {...info} />)} 
            </div>
        </>
    )

}

export default VideosLatest;