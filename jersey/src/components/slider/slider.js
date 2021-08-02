import React from 'react';
import Slider from 'react-slick';
import './slider.scss';

const slider = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000
      };
    return (
        <Slider {...settings}>
            <div className='single-image'>
                <img src='/images/england.jpg' alt='jersey'/>
            </div>
            <div className='single-image' >
                <img src='/images/arg.jpg' alt='jersey'/>
            </div>
            <div className='single-image'>
                <img src='/images/mancity.jpg' alt='jersey'/>
            </div>
        </Slider>
    );
};

export default slider;