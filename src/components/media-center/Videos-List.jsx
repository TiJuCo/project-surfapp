import React from "react";
import "./Videos.css";
import { surfVideos } from "./Videos-Data";
import VideosCards from "./Videos-Cards";


function VideosList() {
    return (
        <div>
            <h1>Media center</h1>
            <div className="videosList-container">
                {surfVideos.filter((videos) => videos.index < 6).map((videos) => (
                    <VideosCards {...videos} />
                )) }
            </div>
        </div>
    )
}

export default VideosList