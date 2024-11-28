import React from 'react'
import './service.css'
import './about.css'
import ImageSlider from './ImageSlider';


import sg from '../assets/police3.jpg'
import Provide from './Provide '
import { NavLink } from 'react-router-dom'
import Experiance from './Experiance'
import Chatbot from './Chatbot';


function Service() {

  const images = [
    { url: require('../assets/forOp.jpg'), alt: '', text: 'Welcome to Our Company' },
    { url: require('../assets/police2.jpg'), alt: '', text: 'Come and grow together' },
    { url: require('../assets/police3.jpg'), alt: '', text: 'Trust Our Partnership' },
    // Add more images as needed
  ];
  return (<>
   
    <ImageSlider images={images} />
    <Provide />
    <Experiance />
    <Chatbot />

  </>)
}

export default Service  