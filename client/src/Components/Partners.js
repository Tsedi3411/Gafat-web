import React from 'react'
import './partners.css'
import './about.css'
import './about.css'


import sg from '../assets/police3.jpg'
import a from '../assets/abay-bank.jpg'
import ab from '../assets/Abyssinia-bank.png'
import an from '../assets/anbesa-bank.png'
import b from '../assets/bherawi.jpg'
import bu from '../assets/buna-bank.png'
import e from '../assets/Enat-bank.jpg'
import k from '../assets/keyizen.jpg'
import o from '../assets/oromya-bank.png'
import t from '../assets/tsedey.png'
import { NavLink } from 'react-router-dom'


function Partners() {
  return (

    <>
     <div className='news-upper' >
        <img src={sg} alt='News Image' />
        <div className='news-la'>
          <NavLink to='/'>Home </NavLink>
          <p>/</p>
          <p>Award and Partners</p>
        </div>
      </div>
    <div className='partners'>
        <div className='part-1'>
             <h1>Our Partners</h1>
             <p>Our best partnerships are not dependent on a more common goal but on a shared path of equality, desire, and no small amount of passion.</p>
        </div>
        <div className='our-partnr'>
        <img src={a} alt='' className='part-nr' />
        <img src={ab} alt='' className=' part-nr' />
        <img src={an} alt='' className='part-nr' />
        <img src={b} alt='' className='part-nr' />
        <img src={bu} alt='' className='part-nr' />
        <img src={e} alt='' className='part-nr' />
        <img src={k} alt='' className='part-nr' />
        <img src={o} alt='' className='part-nr' />
        <img src={t} alt='' className='part-nr' />
      </div>
    </div>
    
    </> )
}

export default Partners