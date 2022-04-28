import React, { useState } from 'react';
import './Carousel.css';
import { surfVideos } from './Videos-Data';
import {FaChevronLeft} from 'react-icons/fa';
import {FaChevronRight} from 'react-icons/fa';
import ReactPlayer from 'react-player';
import VideosCards from './Videos-Cards';

function Carousel(props) {

    const [currImage, setCurrImage] = useState(0);
    const {tag, title, video} = props;

  return (
    <div className='carouselNews'>
        <div 
            className='carouselInner'
            style={{ backgroundImage: <VideosCards /> }} 
         >
           <div className='left' 
                onClick={() => {
                    currImage > 0 && setCurrImage(currImage - 1);
                } }
            >
               <FaChevronLeft />
            </div> 
           <div className='center'></div> 
           <div className='right'
                onClick={() => {
                    currImage < surfVideos.length - 1 && setCurrImage(currImage + 1);
                    } }
            >
               <FaChevronRight />
            </div> 
        </div>
    </div>
  )
}

export default Carousel