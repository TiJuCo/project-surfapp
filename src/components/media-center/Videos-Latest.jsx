import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import './Videos.css';
import {surfVideos} from './Videos-Data';
import VideosCards from './Videos-Cards';



function VideosLatest() {

    return (
        <>
            <div>
                <h1>Surf Videos</h1>
                <Swiper 
                    slidesPerView={1}
                    centeredSlides={true}
                    spaceBetween={20}
                    pagination={true} modules={[Pagination]} className="mySwiper2">
                    {surfVideos.filter((info) => info.tag === "videos" && info.index < 6).map((info) => (
                    <SwiperSlide key={surfVideos.index}>
                        <div>{<VideosCards {...info} />} </div>
                    </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            
            
        </>
    )

}

export default VideosLatest;



/* <div className="videos-latest-container">
                {surfVideos.filter((info) => info.tag ==='videos' && info.index < 2).map((info) => <VideosCards {...info} />)} 
            </div> */