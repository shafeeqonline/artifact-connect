import React, { Component } from 'react';
import Slider from 'react-slick';
import './carousel.scss';
export default class Carousel extends Component{
	render(){
	    let settings = {
      slidesToShow: 2,
    }
    return (
    	<div className='carousel-container'>
      	<Slider {...settings}>
        	<div><img src='./src/components/Carousel/img1.jpg'/></div>
          <div><img src='./src/components/Carousel/img2.jpg'/></div>
          <div><img src='./src/components/Carousel/img3.jpg'/></div>
          <div><img src='./src/components/Carousel/img1.jpg'/></div>
        </Slider>
      </div>
    );
	}
}