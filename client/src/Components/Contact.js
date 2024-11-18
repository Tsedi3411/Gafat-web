import React from 'react'
import './contact.css'
import './about.css'
import gs from '../assets/police3.jpg'


import { NavLink } from 'react-router-dom'
import MapComponent from './MapComponenet'
import ContactForm from './ContactForm'

function Contact() {
    return (<>
    <div className='news-upper' >
        <img src={gs} alt='News Image' />
        <div className='news-la'>
          <NavLink to='/'>Home </NavLink>
          <p>/</p>
          <p>Contuct Us</p>
        </div>
      </div>
        {/* <div className='contact'>
          <MapComponent/>
            <form action='' method=''>
                <input type='text' placeholder='Your Name' />
                <input type='text' placeholder='Your Email' />
                <input type='text' placeholder='Your Phone' />
                <textarea cols={3} rows={10}> Your Message </textarea>
                <NavLink to='/'><button>Send Message</button></NavLink>     
            </form>
        </div> */}
        <ContactForm />
        </> )
}

export default Contact
