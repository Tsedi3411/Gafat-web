import React, { useState } from 'react';

import im11 from '../assets/logo.jpg'
import im22 from '../assets/gafatS.jpg'
import im33 from '../assets/in.jpg'

import './ImageSlider.css'; // Make sure to create this CSS file

const images = [
    {
        image1:im11,
        image2:im22,
        image3:im33,
    }    
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slider">
      <button onClick={prevImage} className="slider-button">Previous</button>
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="slider-image" />
      <button onClick={nextImage} className="slider-button">Next</button>
    </div>
  );
};

export default Slider;