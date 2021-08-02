import React from 'react';
import './footer.scss';
import Button from '../widgets/Button/button';
import {FaFacebook,FaTwitter,FaInstagram} from 'react-icons/fa';

const footer = () => {
    const style = {
        fontSize: "25px"
    }
    return (
        <div className="main-footer">
          <div className="main-footer-content">
              <div className="main-footer-content-left">
                  <h4 className="main-footer-content-left-header">We have something for you</h4>
                  <p className="main-footer-content-left-info">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                   Placerat ultrices sodales malesuada faucibus diam, mattis in.
                    Et imperdiet risus eleifend dolor, tincidunt viverra nulla in aliquam.
                   Convallis tortor nunc vulputate neque vel. Feugiat id orci, consequat phasellus vitae.
                  </p>
                  <input type="text" className="main-footer-content-left-input" placeholder="Your Email"/>
                  <div className="main-footer-content-left-button">
                  <Button 
                    text="Subscribe"
                    backcolor="#fff"
                    textColor="#4F42E2"/>
                  </div>
              </div>
              <div className="main-footer-content-right">
                  <h4 className="main-footer-content-right-header">About the store</h4>
                  <p className="main-footer-content-right-info">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Habitant vel malesuada tristique id laoreet egestas.
                   Massa tortor eleifend porttitor ultrices venenatis proin dictumst consequat.
                  </p>
                  <div className="main-footer-content-right-icons">
                      <FaFacebook style={style}/>
                      <FaTwitter style={style}/>
                      <FaInstagram style={style}/>
                  </div>
              </div>
          </div>
          <div className="main-footer-copyright">
            <span>&copy; Jonathan Asiamah 2021</span>
          </div>
        </div>
    );
};

export default footer;