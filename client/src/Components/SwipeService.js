import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import pic0 from '../assets/s11.jpg';
import pic1 from '../assets/ss1.jpg';
import pic2 from '../assets/service.jpg';
import pic3 from '../assets/t3.jpg';
import pic4 from '../assets/t4.jpg';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './swipe.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function SwipeService() {
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
            style={{ height: '600px' }} 
        >
            {[
                //   {
                //     img: pic0,
                //     text: "Gafat HR services promote innovation by drawing in a variety of talented individuals.",
                // },
                {
                    img: pic1,
                    text: "Through the attraction of diverse talent, Gafat HR services empower innovation.",
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