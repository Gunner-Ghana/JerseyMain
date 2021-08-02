import React from 'react';
import './clubs.scss';
import Button from '../widgets/Button/button';
import Jcard from '../widgets/JerseyCard/jcard';
const clubs = () => {
    return (
        <div className="club-main">
            <div className="club-main-header">
                <h4 className="club-main-header-title">Clubs.</h4>
                <div className="club-main-header-button">
                    <Button 
                    text="See More"
                    backcolor="#4F42E2"
                    textColor="#fff"/>
                </div>
            </div>
            <div className="club-main-jerseys">
                    <Jcard />               
            </div>
        </div>
    );
};

export default clubs;