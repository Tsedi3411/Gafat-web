import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


import a from '../assets/abay-bank.jpg';
import ab from '../assets/Abyssinia-bank.png';
import an from '../assets/anbesa-bank.jpg';
import b from '../assets/bherawi.jpg';
import bu from '../assets/buna_logo.png';
import e from '../assets/Enat_Banklogo.png';
import k from '../assets/keyizen.jpg';
import o from '../assets/oromya-bank.png';
import t from '../assets/tsedey.png';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './pimages.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Pimages() {
  return (
    <>
    <h1>Our Partners</h1>
    <div className="swiper-container">
      <Swiper
       slidesPerView={4}
        spaceBetween={30}
        loop={true} 
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{

          clickable: true,
        }}
        navigation={true}
        speed={800}
        modules={[Autoplay, Pagination, Navigation]}
        className="Swiper"
      >
       
        <SwiperSlide><img className="swiper-image"  src={a} alt='' /></SwiperSlide>
        <SwiperSlide><img className="swiper-image"  src={ab} alt='' /></SwiperSlide>
        <SwiperSlide><img className="swiper-image"  src={an} alt='' /></SwiperSlide>
        <SwiperSlide><img className="swiper-image"  src={b} alt='' /></SwiperSlide>
        <SwiperSlide><img className="swiper-image"  src={bu} alt='' /></SwiperSlide>
        <SwiperSlide><img  className="swiper-image" src={e} alt='' /></SwiperSlide>
        <SwiperSlide><img className="swiper-image"  src={k} alt='' /></SwiperSlide>
        <SwiperSlide><img  className="swiper-image"  src={o} alt='' /></SwiperSlide>
        <SwiperSlide><img className="swiper-image"  src={t} alt='' /></SwiperSlide>
      </Swiper>
      </div>
      <style jsx>{`
             h1 {
          text-align: center; /* Center the heading */
          margin-bottom: 20px; /* Space below the heading */
        }
         .swiper-container {
          display: flex;
          flex-direction:row;
          justify-content: center; /* Center horizontally */
          align-items: center; /* Center vertically */
          height:200px;
        //   width:78%;
          padding:90px;
           box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
        }
        .swiper-image {
          width: 70px; 
          height: 70px; 
          border-radius: 50%; 
         margin-left:60px
        }
         .swiper-button-next, .swiper-button-prev {
          color: green; 
        }
      `}</style>
    </>
  );
}
