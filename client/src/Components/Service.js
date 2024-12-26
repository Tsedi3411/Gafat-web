import React from 'react'
import './service.css'
import './about.css'




import Provide from './Provide '

import Experiance from './Experiance'
import Chatbot from './Chatbot';
import MySwiper from './Swip';
import SwipeService from './SwipeService'



function Service() {

  const images = [
    { url: require('../assets/forOp.jpg'), alt: '', text: 'Welcome to Our Company' },
    { url: require('../assets/police2.jpg'), alt: '', text: 'Come and grow together' },
    { url: require('../assets/police3.jpg'), alt: '', text: 'Trust Our Partnership' },
    // Add more images as needed
  ];
  return (<>
   <SwipeService/>
    <Provide />
    <Experiance />
    <Chatbot />

  </>)
}

export default Service  