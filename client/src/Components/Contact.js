import React from 'react'
import './contact.css'
import './about.css'
import 'font-awesome/css/font-awesome.min.css'; // Import Font Awesome


import { Link, NavLink } from 'react-router-dom'
import ContactForm from './ContactForm'
import Chatbot from './Chatbot';
import LocationMap from './LocationMap';
import MySwiper from './Swip';

function Contact() {
  const images = [
    { url: require('../assets/forOp.jpg'), alt: '', text: 'Welcome to Our Company' },
    { url: require('../assets/police2.jpg'), alt: '', text: 'Come and grow together' },
    { url: require('../assets/police3.jpg'), alt: '', text: 'Trust Our Partnership' },
    // Add more images as needed
  ];
  return (<>

    <MySwiper />

    <div className='contactss'>
      <div className='cont-upper'>
        <i className="fa fa-map-marker"></i>
        <h3>ADDRESS</h3>
        <ol>
          <li>Ethiopia, Addis Ababa, Kirkos Sub-City, Woreda 4, House No. 374</li>
        </ol>
      </div>
      <div className='cont-upper'>
        <i className="fa fa-phone"></i>
        <h3>FOR SHARE INFORMATION</h3>
        <ul className='info-list'>
          <li><Link to='+251-927-889-723'>+251-913-152-743</Link></li>
          <li><Link to='+251-961-749-765'>+251-908-333-377</Link></li>
        
        </ul>
        <h3>FOR General INFORMATION</h3>
        <ul className='info-list'>
        <li><Link to='+251-927-889-723'>+251-913-152-743</Link></li>
        <li><Link to='+251-961-749-765'>+251-908-333-377</Link></li>
        </ul>
      </div>
      <div className=' cont-upper'>
        <i className="fa fa-envelope"></i>
        <h3>EMAIL</h3>
        <ul className='info-list'>
          <li><p>Managment:</p> <Link to='abebe@gmail.com'>gafatsecure@gmail.com</Link></li>
          <li><p>Sales:</p> <Link to='alemu@gmail.com'>alemu@gmail.com</Link></li>
          <li><p>Support:</p> <Link to='kidan@gmail.com'>kidan@gmail.com</Link></li>
        </ul>
      </div>
    </div>
    <ContactForm />
    <LocationMap />
    <Chatbot />
  </>)
}

export default Contact
