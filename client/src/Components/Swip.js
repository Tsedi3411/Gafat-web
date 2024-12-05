import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import pic1 from '../assets/cS.jpg';
import pic2 from '../assets/forOp.jpg';
import pic3 from '../assets/service.jpg';
import pic4 from '../assets/ssss.jpg';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { NavLink } from 'react-router-dom';

export default function MySwiper() {
    return (
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 3500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            speed={800} // Set the transition speed to 800ms
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
        >
            {[
                {
                    img: pic1,
                    text: "HR services empower individuals and organizations to reach their full potential.",
                },
                {
                    img: pic2,
                    text: "Building meaningful connections between employees and leadership is at the heart of HR.",
                },
                {
                    img: pic3,
                    text: "HR services are crucial in guiding organizations through challenges and opportunities.",
                },
                {
                    img: pic4,
                    text: "HR services drive innovation by attracting diverse talent and cultivating an environment where creativity thrives.",
                }
            ].map((slide, index) => (
                <SwiperSlide key={index} style={{ color: 'white' }}>
                    <div className='First-slider'>
                        <img
                            src={slide.img}
                            alt={`Slide ${index + 1}`}
                            style={{ position: 'absolute', width: '100%', height: '700px', objectFit: 'cover' }}
                        />
                        <p 
                            className="text-animation" 
                            style={{position: 'relative', animationDelay: `${index * 0.3}s` }} 
                        >
                            {slide.text}
                        </p>
                    
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}