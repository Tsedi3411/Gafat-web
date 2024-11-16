import React from 'react'
import './header.css'
import logo from '../assets/logo.jpg'
import { Link, NavLink } from 'react-router-dom'


function Header() {
  return (
    <div className='header'>
      <div className='left-header'>
        <img src={logo} alt='gafat Logo' />
        {/* <p>Gafat Security</p> */}
      </div>
      <div className='middle-header'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About Us</NavLink>
        <NavLink to='/service'>Our Service</NavLink>
        <NavLink to='/partner'>Award and Partner</NavLink>
        <NavLink to='/news'>News</NavLink>
      </div>
      <div className='right-header'>
        <NavLink to='/contact'>Contact Us</NavLink>
        <NavLink to='/vacancy'>Vacancies</NavLink>
      </div>
    </div>
  )
}

export default Header