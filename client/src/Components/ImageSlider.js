import React, { useState, useEffect } from 'react';
import './ImageSlider.css'; // Ensure this path is correct

const ImageSlider = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [animate, setAnimate] = useState(false);

    const nextSlide = () => {
        setAnimate(false); // Reset animation
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setAnimate(true); // Trigger animation
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        setAnimate(false); // Reset animation on index change
        const timer = setTimeout(() => setAnimate(true), 50); // Delay for animation trigger
        return () => clearTimeout(timer);
    }, [currentIndex]);

    return (
        <div className="slider-container">
            <div className="slider">
                <img 
                    src={images[currentIndex].url} 
                    alt={images[currentIndex].alt} 
                    className={`slider-image ${animate ? 'fadeIn' : 'fadeOut'}`}
                />
                <div className={`slider-text ${animate ? 'fadeIn' : ''}`}>
                    <h2>{images[currentIndex].text}</h2>
                </div>
                <div className="button-container">
                    <button className="slider-button button1">Empower  </button>
                    <button className="slider-button button2">get Started</button>
                </div>
            </div>
            <button className="slider-button left" onClick={() => {
                setCurrentIndex((currentIndex - 1 + images.length) % images.length);
                setAnimate(true);
            }}>❮</button>
            <button className="slider-button right" onClick={nextSlide}>❯</button>
            <div className="dot-container">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`dot ${currentIndex === index ? 'active' : ''}`}
                        onClick={() => {
                            setCurrentIndex(index);
                            setAnimate(true);
                        }}
                        aria-label={`View Image ${index + 1}`}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default ImageSlider;