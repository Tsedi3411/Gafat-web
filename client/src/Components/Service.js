import React from 'react'
import './service.css'
import './about.css'


import sg from '../assets/police3.jpg'
import Provide from './Provide '
import { NavLink } from 'react-router-dom'
import Experiance from './Experiance'


function Service() {
  return (<>
  <div className='news-upper' >
        <img src={sg} alt='News Image' />
        <div className='news-la'>
          <NavLink to='/'>Home </NavLink>
          <p>/</p>
          <p>Our Service</p>
        </div>
      </div>
<Provide />
<Experiance/>
    </>)
}

export default Service  