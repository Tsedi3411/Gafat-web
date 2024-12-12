import React, { useEffect, useRef, useState } from 'react';
import './partners.css';
import './about.css'; // Keep only one import


import pab from '../assets/pab.png';
import pad from '../assets/pad.png';
import pal from '../assets/pal.png';
import pan from '../assets/pan.png';
import pen from '../assets/pen.png';
import pro from '../assets/pro.png';
import pwuc from '../assets/pwuc.png';

import Chatbot from './Chatbot';
import Pimages from './Pimages';
import ProductShow from './ProductShow';

function Partners() {
    const [selectedImage, setSelectedImage] = useState(null);
    const selectedImageRef = useRef(null);

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    const handleOutsideClick = (event) => {
        if (selectedImageRef.current && !selectedImageRef.current.contains(event.target)) {
            setSelectedImage(null);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    const images = [
        { url: require('../assets/forOp.jpg'), alt: '', text: 'Welcome to Our Company' },
        { url: require('../assets/police2.jpg'), alt: '', text: 'Come and grow together' },
        { url: require('../assets/police3.jpg'), alt: '', text: 'Trust Our Partnership' },
        // Add more images as needed
    ];

    return (
        <>
            <ProductShow />
            <div className='partners'>
                <div className='part-1'>
                    <h1>Our Partners</h1>
                    <p>Our best partnerships are not dependent on a more common goal but on a shared path of equality, desire, and no small amount of passion.</p>
                </div>
                <div className='middle-partners'>
                    {selectedImage && (
                        <div className='selected-image' ref={selectedImageRef}>
                            <img src={selectedImage} alt='' />
                        </div>
                    )}
                    <div className='image-container'>
                        <img src={pab} alt='' className='part-mr' onClick={() => handleImageClick(pab)} />
                        <img src={pad} alt='' className='part-mr' onClick={() => handleImageClick(pad)} />
                        <img src={pal} alt='' className='part-mr' onClick={() => handleImageClick(pal)} />
                        <img src={pan} alt='' className='part-mr' onClick={() => handleImageClick(pan)} />
                        <img src={pen} alt='' className='part-mr' onClick={() => handleImageClick(pen)} />
                        <img src={pro} alt='' className='part-mr' onClick={() => handleImageClick(pro)} />
                        <img src={pwuc} alt='' className='part-mr' onClick={() => handleImageClick(pwuc)} />
                    </div>
                </div>
            </div>
            <Pimages />
            <div className='join-us'>
                <p> Join us on this exciting journey where you’ll have the opportunity to shape workplace cultures, drive talent development, and help individuals thrive in their careers.</p>
            </div>
            <Chatbot />
        </>
    );
}

export default Partners;