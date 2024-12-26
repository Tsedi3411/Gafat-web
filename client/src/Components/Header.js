import React, { useEffect, useState } from 'react';
import './header.css';
import logo from '../assets/logo.jpg';
import { NavLink } from 'react-router-dom';

function Header() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(prevState => !prevState);
  };

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setIsScrolled(scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

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
            <NavLink to='/' onClick={handleScrollToTop}>Home</NavLink>
            <NavLink to='/about' onClick={handleScrollToTop}>About Us</NavLink>
            <NavLink to='/service' onClick={handleScrollToTop}>Our Service</NavLink>
            <NavLink to='/partner' onClick={handleScrollToTop}>Award and Partner</NavLink>
            <NavLink to='/news' onClick={handleScrollToTop}>News and Blogs</NavLink>
          </div>
        </div>
        <div className='right-header'>
          <NavLink to='/contact' onClick={handleScrollToTop}>Contact Us</NavLink>
          <NavLink to='/vacancy' onClick={handleScrollToTop}>Vacancies</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Header;