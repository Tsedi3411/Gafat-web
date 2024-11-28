import React, { useEffect, useState } from 'react';
import './ImageSlider.css'; // Import CSS file
import './background.css'

const Background = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        '../assets/forOp.jpg', // Replace with your image paths
        '../assets/cleaningS.jpg',
        '../assets/cS.jpg'
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, [images.length]);

    return (
        <div className="slider">
            <div className="slides">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="slide"
                        style={{
                            backgroundImage: `url(${image})`,
                            opacity: currentIndex === index ? 1 : 0,
                            transition: 'opacity 1s ease-in-out'
                        }}
                    />
                ))}
            </div>
            <div className="text">
                <h1>Your Centered Text Here</h1>
                <p>Some description or additional text.</p>
            </div>
        </div>
    );
};

export default Background;