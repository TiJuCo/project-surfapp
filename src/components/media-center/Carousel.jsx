import React, { useState } from "react";
import "./Carousel.css";
import "./../../styles/styles.css";
import { surfVideos } from "./Videos-Data";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import ReactPlayer from "react-player";

function Carousel(props) {
  const [currVideo, setCurrVideo] = useState(0);

  return (
    <div className="carouselVideo">
      <div
        className="carouselInner container"
        //  style={{ background: `url(${surfVideos[currVideo].video})` }}
      >
        <div className="carousel-content-container">
          <ReactPlayer
            className="react-player-duckdive"
            url={surfVideos[currVideo].video}
            muted={true}
            loop={true}
            playing={true}
          />
          {/* <video src={surfVideos[currVideo].video} autoPlay muted autoPlay="autoplay" preLoad="auto" loop></video> */}
          <div className="carousel-content">
            <div className="carousel-content-1">
              <h2>{surfVideos[currVideo].title}</h2>
            </div>
            <div className="carousel-content-2">
              <button
                className="button-left"
                onClick={() => {
                  currVideo > 0 && setCurrVideo(currVideo - 1);
                }}
              >
                <FaChevronLeft className="chevron" />
              </button>

              <button
                className="button-right"
                onClick={() => {
                  currVideo < surfVideos.length - 1 &&
                    setCurrVideo(currVideo + 1);
                }}
              >
                <FaChevronRight className="chevron" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
