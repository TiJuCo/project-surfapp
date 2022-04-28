import React from "react";
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel,CarouselProps } from "react-responsive-carousel";
import {surfVideos} from './Videos-Data'
import VideosCards from "./Videos-Cards";
import './VideoCarousel.css'

function VideoCarousel() {

    return (
        <div className="carousel-container">
            <Carousel>
                    {surfVideos.filter((info) => info.tag === "videos" && info.index < 6).map((info) => (
                        
                            <div>{<VideosCards {...info} />} </div>
                        
                        ))}
            </Carousel>
        </div>
    )
}

export default VideoCarousel