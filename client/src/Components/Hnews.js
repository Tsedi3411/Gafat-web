import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import im1 from '../assets/hr.jpg'
 import im2 from '../assets/plice1.jpg'
import im3 from '../assets/police3.jpg'

// Sample image URLs


const slides = [
      {
        id:1,
        image: im1,
        title: 'Give special oportunity to work with forign companies',
        description: 'lorem',
        // link:'/DetailO',
      },
      {
        id:2,
        image: im1,
        title: 'Give special oportunity to work with forign companies',
        description: 'lorem',
        // link:'/DetailO',
      },
      {
        id:2,
        image: im2,
        title: 'Recruiting to our Partners',
        description: 'lorem',
        // link:'/DetailT',
      },
      {
        id:4,
        image: im3,
        title: 'Get an Award from Federal managment center',
        description: 'lorem',
        // link:'/DetailTh',
      },
    ]

    const ImageSlider = () => {
        const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
        };
      
        return (
          <div style={{ padding: '20px' }}>
            <h2>Image Slider with Titles and Descriptions</h2>
            <Slider {...settings}>
              {slides.map((slide) => (
                <div key={slide.id} style={{ textAlign: 'center' }}>
                  <img
                    src={slide.image}
                    alt={slide.title}
                    // style={{ width: '100%', height: 'auto', marginBottom: '10px' }}
                  />
                  <h3>{slide.title}</h3>
                  <p>{slide.description}</p>
                </div>
              ))}
            </Slider>
          </div>
        );
      };
      

export default ImageSlider;