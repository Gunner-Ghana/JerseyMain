import React from 'react';
import './other.scss';
import Button from '../widgets/Button/button';
import Others from '../Othcard/othercard';
const otherKits = () => {
    return (
        <div className="other-main">
            <div className="other-main-header">
                <h4 className="other-main-header-title">Others.</h4>
                <div className="other-main-header-button">
                    <Button 
                    text="See More"
                    backcolor="#4F42E2"
                    textColor="#fff"/>
                </div>
            </div>
            <div className="other-main-jerseys">
                    <Others />               
            </div>
        </div>
    );
};

export default otherKits;