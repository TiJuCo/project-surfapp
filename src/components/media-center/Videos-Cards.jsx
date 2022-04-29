import React from "react";
import ReactPlayer from "react-player";
import { surfVideos } from "./Videos-Data";


const gradient = "linear-gradient(360deg, rgba(57, 73, 87, 0.9) 0%, rgba(255, 255, 255, 0) 100%)";



function VideosCards(props) {

    const {tag, title, video} = props;

    return (
        <div>
             <div>
            <ReactPlayer className="bg-video"
                url={video} />
            </div>
        </div>
    )
}

export default VideosCards