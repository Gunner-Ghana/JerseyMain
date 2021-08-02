import React from 'react';
import './card.scss';
import Button from '../../../components/widgets/Button/button';

const card = (props) => {
   const check = props.info;
   const style = {
       border: `1px solid ${props.color}`
   }
   const rendercard = (props)=>{
       return check ? 
       <div className="card-main" style={style}>
            <img className="card-main-image" alt="jersey" src={`/images/${props.path}`} />
            <p className="card-main-title">{props.name}-{props.kitType} {props.year}</p>
            <p className="card-main-title-sec">{props.price}</p>
            <div className="card-main-button">
                <Button
                text="Buy"
                backcolor="#4F42E2"
                textColor="#fff"/>
            </div>
            
        </div>
        : null;
   }
    return (
      
        <div >
            {rendercard(props.info)}
        </div>
      
    );
};

export default card;