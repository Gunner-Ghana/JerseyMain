import React from 'react';
import './inter.scss';
import Button from '../widgets/Button/button';
import National from '../Intcard/int';
const inter = () => {
    return (
        <div className="inter-main">
            <div className="inter-main-header">
                <h4 className="inter-main-header-title">Internationals.</h4>
                <div className="inter-main-header-button">
                    <Button 
                    text="See More"
                    backcolor="#4F42E2"
                    textColor="#fff"/>
                </div>
            </div>
            <div className="inter-main-jerseys">
                    <National />               
            </div>
        </div>
    );
};

export default inter;