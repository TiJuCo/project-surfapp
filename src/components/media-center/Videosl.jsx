import React from "react";
import {surfVideos} from './Videos-Data'
import VideosCards from "./Videos-Cards";
import './Videos.css'


    function Videos() {

        return (
            <>
                <h1>Surf Videos</h1>
                <div className="videos-latest-container">
                    {surfVideos.filter((info) => info.tag ==='videos' && info.index < 2).map((info) => <VideosCards {...info} />)} 
                </div>
            </>
        )
    
    }
    
    export default Videos;

