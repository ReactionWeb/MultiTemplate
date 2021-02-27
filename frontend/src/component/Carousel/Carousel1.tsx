import React, { Component } from 'react';
// @ts-ignore
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import img1 from "../../static/images/img2.jpg";
import img2 from "../../static/images/img4.jpg";


//https://brainhubeu.github.io/react-carousel/docs/gettingStarted


const CarouselFirst = () => {
    return (
        <Carousel 
        
        >
        <img src={img1} />
        <img src={img2} />
        <img src={img1} />
      </Carousel>
      )
} 

export default CarouselFirst;