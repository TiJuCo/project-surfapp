import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import 'swiper/css';
import "./News-Latest-Mobile.css";
import { ArticlesData } from "./News-Data";
import NewsCards from "./News-Cards";


function ImgGallery() {
    return (
      <>
        <Swiper
                slidesPerView={2}
                centeredSlides={true}
                spaceBetween={100}
                pagination={true}
                modules={[Pagination]} className="mySwiper">
                {ArticlesData.filter((info) => info.gallery).map((info) => 
        
          <SwiperSlide key={ArticlesData.gallery}> 
              <div>
                <img src={info.gallery} alt={info.title} />
              </div>
          </SwiperSlide>
          )}
        </Swiper>
      </>
    );
  }


export default ImgGallery

/*slidesPerView={2}
centeredSlides={true}
spaceBetween={100}
pagination={true}*/