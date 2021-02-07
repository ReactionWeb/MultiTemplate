import React, { Component } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import img1 from "../../static/images/img1.jpg";
import img2 from "../../static/images/img3.jpg";


const CarouselSecond = () => {
    return (
        <AwesomeSlider>
            <div data-src={img1} />
            <div data-src={img2} />
            <div data-src={img1} />
        </AwesomeSlider>
      )
} 

export default CarouselSecond;