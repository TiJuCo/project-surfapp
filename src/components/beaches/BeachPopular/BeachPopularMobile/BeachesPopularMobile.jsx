import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import "swiper/css/pagination";
import "swiper/css";
import "../../../news/NewsLatestSlider.css";
import { ArticlesData } from "../../../news/NewsData";
import NewsCards from './../../../news/NewsCards';


function BeachesPopularMobile() {
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        {ArticlesData.filter(
          (info) => info.tag === "news" && info.index < 3
        ).map((info) => (
          <SwiperSlide key={ArticlesData.index}>
            <div>{<NewsCards {...info} />} </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default BeachesPopularMobile;
