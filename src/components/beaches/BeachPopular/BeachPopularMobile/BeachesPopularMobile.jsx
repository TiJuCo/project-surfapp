import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import "swiper/css/pagination";
import "swiper/css";
import "./BeachesPopularMobile.css";
import BeachCard from "../../BeachCard/BeachCard";
import ApiContext from "../../../../contexts/ApiContext.js";


function BeachesPopularMobile() {

  const { seaInfo, beachesInfo } = useContext(ApiContext);

  seaInfo.forEach((element, index) => {
    element.name = beachesInfo[index].name;
    element.county = beachesInfo[index].county;
    element.img = beachesInfo[index].img;
    element.services = beachesInfo[index].services;
  });
    
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        {seaInfo.map((element, index) => (
          <SwiperSlide key={seaInfo.index}>
            <div>{<BeachCard element={element} key={index}/>} </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default BeachesPopularMobile;
