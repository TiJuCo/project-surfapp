import React, { useState } from 'react';
import './Carousel.css';
import { carouselImages } from './CarouselData';
import {FaChevronLeft} from 'react-icons/fa';
import {FaChevronRight} from 'react-icons/fa';

function Carousel() {

    const [currImage, setCurrImage] = useState(0);

  return (
    <div className='carouselNews'>
        <div 
            className='carouselInner'
            style={{ backgroundImage: `url(${carouselImages[currImage].image})` }} 
         >
           <div className='left' 
                onClick={() => {
                    currImage > 0 && setCurrImage(currImage - 1);
                } }
            >
               <FaChevronLeft />
            </div> 
           <div className='center'>
              <h1><span>{carouselImages[currImage].title} </span></h1> 
              <h4><span>{carouselImages[currImage].date}</span></h4>
              <h5><span>by {carouselImages[currImage].author}</span></h5>
              </div> 
           <div className='right'
                onClick={() => {
                    currImage < carouselImages.length - 1 && setCurrImage(currImage + 1);
                    } }
            >
               <FaChevronRight />
            </div> 
        </div>
    </div>
  )
}

export default Carousel