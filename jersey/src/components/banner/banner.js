import React from 'react';
import './banner.scss';
import Button from '../widgets/Button/button';
import Slider from '../slider/slider'
const banner = () => {
    return (
        <section className='banner'>
            <div className='banner-left'>
                <h2 className='banner-left-title'>
                    Get Your Favorite Men's and Women's 
                    team jersey for an affordable price on this 
                    platform
                </h2>
                <div className='banner-left-button'>
                    <Button
                    text='See More'
                    backcolor='#fff'
                    textColor='#4F42E2'/>
                </div>
            </div>
            <div className='banner-right'>
                <Slider />
            </div>
        </section>
    );
};

export default banner;