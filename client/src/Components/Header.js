import React, { useState } from 'react';
import './header.css';
import logo from '../assets/logo.jpg';
import { NavLink } from 'react-router-dom';

function Header() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(prevState => !prevState);
  };

  return (
    <div className='header'>
      <div className='left-header'>
        <img src={logo} alt='Gafat Logo' />
      </div>
      <div className='middle-header'>
        <div className='toggle-icon' onClick={toggleMenu}>
          &#9776; 
        </div>
        <div className={`nav-links ${isMenuVisible ? 'show' : ''}`}>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/about'>About Us</NavLink>
          <NavLink to='/service'>Our Service</NavLink>
          <NavLink to='/partner'>Award and Partner</NavLink>
          <NavLink to='/news'>News and Blogs</NavLink>
        </div>
        </div>
      <div className='right-header'>
        <NavLink to='/contact'>Contact Us</NavLink>
        <NavLink to='/vacancy'>Vacancies</NavLink>
      </div>
      
    </div>
  );
}

export default Header;