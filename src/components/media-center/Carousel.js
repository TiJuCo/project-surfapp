import React, { useState } from 'react';
import './Carousel.css';
import { surfVideos } from './Videos-Data';
import {FaChevronLeft} from 'react-icons/fa';
import {FaChevronRight} from 'react-icons/fa';
import ReactPlayer from 'react-player';
import VideosCards from './Videos-Cards';

function Carousel(props) {

    const [currVideo, setCurrVideo] = useState(0);
    const {tag, title, video} = props;

  return (
    <div className='carouselNews'>
        <div 
            className='carouselInner'
          //  style={{ background: `url(${surfVideos[currVideo].video})` }} 
         >
           
           <div className='left' 
                onClick={() => {
                    currVideo > 0 && setCurrVideo(currVideo - 1);
                } }
            >
               <FaChevronLeft />
            </div> 
           <div className='center'></div> 
           <div className='right'
                onClick={() => {
                    currVideo < surfVideos.length - 1 && setCurrVideo(currVideo + 1);
                    } }
            >
               <FaChevronRight />
            </div> 
            <video src={`url(${surfVideos[currVideo].video})`}></video>
        </div>
    </div>
  )
}

export default Carousel