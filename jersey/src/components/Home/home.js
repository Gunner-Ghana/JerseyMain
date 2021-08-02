import React from 'react';
import Banner from '../banner/banner';
import Clubs from '../clubs/clubs';
import Inter from '../inter/inter'
import Other from '../others/other';

const home = () => {
    return (
        <div>
            <Banner />
            <Clubs />
            <Inter />
            <Other />
        </div>
    );
};

export default home;