import React from "react";
import {surfVideos} from './Videos-Data'
import VideosCards from "./Videos-Cards";
import './Videos.css'


    function Videos() {

        return (
            <>
                <h1>Surf Events</h1>
                <div className="videos-container">
                    {surfVideos.filter((info) => info.tag ==='videos' && info.index < 2).map((info) => <VideosCards {...info} />)} 
                </div>
            </>
        )
    
    }
    
    export default Videos;

