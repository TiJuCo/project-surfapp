import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import "swiper/css/pagination";
import 'swiper/css';
import "./News-Latest-Mobile.css";
import { ArticlesData } from "./News-data";
import NewsCards from "./News-Cards";


function NewsSlider() {
    return (
      <>
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        {ArticlesData.filter((info) => info.tag ==='news' && info.index < 3).map((info) => 
        
          <SwiperSlide key={ArticlesData.index}> 
              <div>{<NewsCards{...info} />} </div>
          </SwiperSlide>
          )}
        </Swiper>
      </>
    );
  }
  
  export default NewsSlider