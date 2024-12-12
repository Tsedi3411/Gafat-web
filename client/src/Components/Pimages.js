import React, { useRef, useState } from 'react';
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
      <div className='pimagees'>
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

            <SwiperSlide><img className="swiper-image" src={a} alt=''   style={{
            maxWidth: '60%', 
            height: 'auto',  
            borderRadius: '50%', 
            display: 'block',
            margin: '0 auto' 
        }} /></SwiperSlide>
            <SwiperSlide><img className="swiper-image" src={ab} alt='' style={{
            maxWidth: '60%', 
            height: 'auto',  
            borderRadius: '50%', 
            display: 'block',
            margin: '0 auto' 
        }}/></SwiperSlide>
            <SwiperSlide><img className="swiper-image" src={an} alt=''  style={{
            maxWidth: '60%', 
            height: 'auto',  
            borderRadius: '50%', 
            display: 'block',
            margin: '0 auto' 
        }}/></SwiperSlide>
            <SwiperSlide><img className="swiper-image" src={b} alt=''  style={{
            maxWidth: '60%', 
            height: 'auto',  
            borderRadius: '50%', 
            display: 'block',
            margin: '0 auto' 
        }}/></SwiperSlide>
            <SwiperSlide><img className="swiper-image" src={bu} alt=''  style={{
            maxWidth: '60%', 
            height: 'auto',  
            borderRadius: '50%', 
            display: 'block',
            margin: '0 auto' 
        }} /></SwiperSlide>
            <SwiperSlide><img className="swiper-image" src={e} alt=''  style={{
            maxWidth: '60%', 
            height: 'auto',  
            borderRadius: '50%', 
            display: 'block',
            margin: '0 auto' 
        }}/></SwiperSlide>
            <SwiperSlide><img className="swiper-image" src={k} alt=''  style={{
            maxWidth: '60%', 
            height: 'auto',  
            borderRadius: '50%', 
            display: 'block',
            margin: '0 auto' 
        }}/></SwiperSlide>
            <SwiperSlide><img className="swiper-image" src={o} alt=''  style={{
            maxWidth: '60%', 
            height: 'auto',  
            borderRadius: '50%', 
            display: 'block',
            margin: '0 auto' 
        }}/></SwiperSlide>
            <SwiperSlide><img className="swiper-image" src={t} alt=''  style={{
            maxWidth: '60%', 
            height: 'auto',  
            borderRadius: '50%', 
            display: 'block',
            margin: '0 auto' 
        }}/></SwiperSlide>
          </Swiper>
        </div>
        <style jsx>{`
             h1 {
             text-align: center; 
           margin-bottom: 20px; 
                }
          .pimagees{
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
          }
         .swiper-container {
          display: flex;
          flex-direction:row;
          justify-content: center; 
          align-items: center; 
          height:200px;
          padding:90px;
           
        }
          
        .swiper-image {
          max-width:40px
          width: 20px; 
          height: 20px; 
          border-radius: 50%; 
          margin-left:60px
          transition: width 0.3s, height 0.3s;
        }
         .swiper-button-next, .swiper-button-prev {
          color: green; 
        }
           @media (max-width: 768px) {
            .swiper-container {
              height: 150px; 
              padding: 50px; 
            }
            .swiper-image {
              width: 20px; 
              height: 20px; 
              margin-left: 10px; 
            }
          }

          @media (max-width: 480px) {
            .swiper-container {
              height: 120px; 
              padding: 30px; 
            }
            .swiper-image {
              width: 20px; 
              height: 20px; 
            }
          }
      `}</style>
      </div>
    </>
  );
}
