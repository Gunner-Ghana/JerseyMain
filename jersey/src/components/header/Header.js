import React, { useState } from 'react';
import './header.scss';
import {FaBars,FaTimes,FaCartPlus} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import {logout} from '../../features/User/user';




const Header =()=>{
    
    const [isOpen,setIsOpen]= useState(false);
    const dispatch = useDispatch();
    const history = useHistory();
    const mobileIconNavigation = ()=> setIsOpen(true);
    const handleClick = ()=>{
        console.log("dispatchhhedd")
        dispatch(logout({}))
        history.push('/')
    }
    
        const style ={
          color: '#4F42E2',
          margin: '5px',
          fontSize: '12px'
          
        }
        const stylee ={
            color: '#4F42E2',
            fontSize: '25px'
            
          }
        return (
            
                <header className='real-header'>
                    <nav className='main-header'>
                        <h3 className='logo'>jerseys</h3>
                        <div className='menu-icon' onClick={mobileIconNavigation}>
                            {isOpen ? <FaTimes style={stylee}  />: <FaBars style={stylee} />}
                        </div>
                        <ul className={
                            isOpen ?
                            'nav-menu show-nav': 'nav-menu hide-nav'
                        }>
                            <li className='menu-item'><Link to="/nike">Nike</Link></li>
                            <li className='menu-item' ><Link to="/adidas">Adidas</Link></li>
                            <li className='menu-item'><Link to="/puma">Puma</Link></li>
                        </ul>
                        <div className='cart-icon'>
                            <button onClick={handleClick}>LOGOUT</button>
                        </div>
                    </nav>
                </header>
        );
    
}

export default Header;