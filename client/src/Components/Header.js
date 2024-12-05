import React, { useEffect, useState } from 'react';
import './header.css';
import logo from '../assets/logo.jpg';
import { NavLink } from 'react-router-dom';

function Header() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(prevState => !prevState);
  };

  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`header-scroll ${isScrolled ? 'scrolled' : ''}`}>
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
    </div>
  );
}

export default Header;