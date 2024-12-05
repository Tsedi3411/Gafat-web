import React, { useEffect, useRef, useState } from 'react';
import './partners.css';
import './about.css'; // Keep only one import
import ImageSlider from './ImageSlider';

import pab from '../assets/pab.png';
import pad from '../assets/pad.png';
import pal from '../assets/pal.png';
import pan from '../assets/pan.png';
import pen from '../assets/pen.png';
import pro from '../assets/pro.png';
import pwuc from '../assets/pwuc.png';

import sg from '../assets/police3.jpg';
import a from '../assets/abay-bank.jpg';
import ab from '../assets/Abyssinia-bank.png';
import an from '../assets/anbesa-bank.png';
import b from '../assets/bherawi.jpg';
import bu from '../assets/buna-bank.png';
import e from '../assets/Enat-bank.jpg';
import k from '../assets/keyizen.jpg';
import o from '../assets/oromya-bank.png';
import t from '../assets/tsedey.png';
import { NavLink } from 'react-router-dom';
import Chatbot from './Chatbot';
import MySwiper from './Swip';

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
             {/* <ImageSlider images={images} /> */}
             <MySwiper />
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
                    <div className='our-partnr'>
                        <img src={a} alt='' className='part-nr' />
                        <img src={ab} alt='' className='part-nr' />
                        <img src={an} alt='' className='part-nr' />
                        <img src={b} alt='' className='part-nr' />
                        <img src={bu} alt='' className='part-nr' />
                        <img src={e} alt='' className='part-nr' />
                        <img src={k} alt='' className='part-nr' />
                        <img src={o} alt='' className='part-nr' />
                        <img src={t} alt='' className='part-nr' />
                    </div>  
            </div>
            <Chatbot />
        </>
    );
}

export default Partners;