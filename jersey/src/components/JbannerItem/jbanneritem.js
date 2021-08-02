import React from 'react';
import './jbanneritem.scss';
import Button from '../widgets/Button/button';

const jbanneritem = (props) => {
    return (
        <div className="jbanner-item">
           <img className="jbanner-item-image" src={`/images/${props.imgurl}`} alt="jersery" /> 
           <p className="jbanner-item-info">{props.info} </p>
           <p className="jbanner-item-price">$12</p>
           <div className="jbanner-item-buy">
           <Button 
                    text="Buy Now"
                    backcolor="#4F42E2"
                    textColor="#fff"/>  
           </div>
           <div className="jbanner-item-add">
           <Button 
                    text="Add to Cart"
                    backcolor="#4F42E2"
                    textColor="#fff"/>
           </div>
        </div>
    );
};

export default jbanneritem;