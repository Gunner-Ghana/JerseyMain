import React from 'react';
import {Link} from 'react-router-dom';
import './button.scss';

const button = (props) => {
    const style = {
        backgroundColor: props.backcolor,
        color: props.textColor,
        border: `1px solid ${props.textColor}`
    }
    return (
        
           <Link style = {style} className='button'>{props.text}</Link> 
    );
};

export default button;