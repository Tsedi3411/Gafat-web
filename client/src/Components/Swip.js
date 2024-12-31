import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import pic1 from '../assets/s1.jpg';
import pic2 from '../assets/n1.jpg';
import pic3 from '../assets/b1.jpg';
import pic4 from '../assets/ss2.jpg';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './swipe.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

export default function MySwiper() {

    // const [slides, setSlides] = useState([]);

    // useEffect(() => {
    //     const fetchSlides = async () => {
    //         try {
    //             const response = await axios.get('YOUR_API_ENDPOINT'); // Replace with your API endpoint
    //             setSlides(response.data); // Assuming the response is an array of slide objects
    //         } catch (error) {
    //             console.error("Error fetching slides:", error);
    //         }
    //     };

    //     fetchSlides();
    // }, []);
    return (
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 4500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            speed={1000}
            loop={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
            style={{ height: '650px' }} 
        >
            {/* slides */}
            {[
                {
                    img: pic1,
                    text: "Gafat HR services drive innovation by attracting diverse talent.",
                },
                {
                    img: pic2,
                    text: "Streamline your hiring process with our innovative recruitment tools.",
                },
                {
                    img: pic3,
                    text: "Gafat HR services are crucial in guiding organizations through challenges and opportunities.",
                },
                {
                    img: pic4,
                    text: "On the security front, we’ve upgraded our surveillance technology.",
                }
            ].map((slide, index) => (
                <SwiperSlide key={index} style={{ color: 'white' }}>
                    <div className ='First-slider'>
                        <img
                            src={slide.img}
                            alt={`Slide ${index + 1}`}
                            style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                        <p 
                            className="text-animation" 
                            style={{ position: 'relative', animationDelay: `${index * 0.3}s` }} 
                        >
                            {slide.text}
                        </p>                   
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}