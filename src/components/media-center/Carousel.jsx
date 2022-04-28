import React, { useState } from 'react';
import './Carousel.css';
import './../../styles/styles.css'
import { surfVideos } from './Videos-Data';
import {FaChevronLeft} from 'react-icons/fa';
import {FaChevronRight} from 'react-icons/fa';
import ReactPlayer from 'react-player';
import VideosCards from './Videos-Cards';
import { Autoplay } from 'swiper';

function Carousel(props) {

    const [currVideo, setCurrVideo] = useState(0);
    const {tag, title, video} = props;

  return (
    <div className='carouselVideo container'>
        <div 
            className='carouselInner'
          //  style={{ background: `url(${surfVideos[currVideo].video})` }} 
         >
            <div className='carousel-content-container'>
                <ReactPlayer className='react-player-duckdive' url={surfVideos[currVideo].video} muted={true} loop={true} playing={true}/>
                {/* <video src={surfVideos[currVideo].video} autoPlay muted autoPlay="autoplay" preLoad="auto" loop></video> */}
                <div className='carousel-content'>
                    <div>
                      <h2>Nulla porttitor massa id neque aliquam vestibulum. Est pellentesque elit ullamcorper dignissim cras.</h2>
                      <p>Surfer: Miguel Dias</p>
                    </div>
                    <div>
                      <div className='left' 
                            onClick={() => {
                                currVideo > 0 && setCurrVideo(currVideo - 1);
                            } }
                        >
                          <FaChevronLeft />
                      </div> 
                      <div className='center'>
                      
                      </div> 
                      <div className='right'
                            onClick={() => {
                                currVideo < surfVideos.length - 1 && setCurrVideo(currVideo + 1);
                                } }
                        >
                          <FaChevronRight />
                      </div> 
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Carousel