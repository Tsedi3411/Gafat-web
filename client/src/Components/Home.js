import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay } from 'swiper';
import 'swiper/swiper-bundle.css';
import { Card, Slider } from 'antd';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import sg from '../assets/forOp.jpg'

import { FaPeopleRoof } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";
import { FaGlobe } from "react-icons/fa";
import { FaBalanceScale } from "react-icons/fa";

import './home.css'
import './about.css'

import a from '../assets/abay-bank.jpg'
import ab from '../assets/Abyssinia-bank.png'
import an from '../assets/anbesa-bank.png'
import b from '../assets/bherawi.jpg'
import bu from '../assets/buna-bank.png'
import e from '../assets/Enat-bank.jpg'
import k from '../assets/keyizen.jpg'
import o from '../assets/oromya-bank.png'
import t from '../assets/tsedey.png'

import ProductShow from './ProductShow';

import CardList from './Card';
import { NavLink } from 'react-router-dom';
import ImageSlider from './Hnews';
import Countable from './Countable';



function Home() {

  // const latestNews=[
  //   {
  //     id:1,
  //     Image:sg,
  //     title:'Title One',
  //     descriptions:' About Title one',
  //     btn:'Read More',
  //     link:'/',
  //   },
  //   {
  //     id:1,
  //     Image:sg,
  //     title:'Title Two',
  //     descriptions:' About Title one',
  //     btn:'Read More',
  //     link:'/',
  //   },
  //   {
  //     id:1,
  //     Image:sg,
  //     title:'Title Three',
  //     descriptions:' About Title one',
  //     btn:'Read More',
  //     link:'/',
  //   },
  // ]
 
  return (<>

    <ProductShow />
    <Countable />

    <div className='home'>
      <h1>We have 12 Years of Experience of Security & Human Resource</h1>
      <p>Gafat Security and Human Resources P.L.C established on December 10, 2011.Gafat Security and Human Resource Services is
        an organization set up to serve the country, its citizens and its customers by filling in the gaps in the security services
        sector in our country. It is a company that has been established by the country's legal experts and has complied with all legal
        frameworks.</p>
      <p>The organization was established by military officers who returned to the civil service after serving in various capacities
        in the Ethiopian Defense Forces. The experts set up the organization to serve their country with their advanced military and
        security skills, to support the limited service delivery sector and to create jobs for their citizens and contribute to the
        development of themselves and their country. </p>

      <div className='home-images'>
        <div className='h1'> <FaPeopleRoof size={60} />
          <h2>Team Work</h2>
        </div>
        <div className='h1'> <IoIosPeople size={60} />
          <h2>Mutual Benefit</h2>
        </div>
        <div className='h1'><FaBalanceScale size={60} />
          <h2>Low Abid</h2>
        </div>
        <div className='h1'><FaGlobe size={60} />
          <h2>Our Existance</h2>
        </div>
      </div>
    </div>
    {/* <ImageSlider/> */}
    <CardList />

      

    <div className='latest-news' >
      <h1>Latest News</h1>
      <div className='upper-news'>
        <img src={sg} alt='News Image' />
        <div className='lower-news'>
         <h3>Forign Opportunity</h3>
          <p>Developing programs to support employees relocating for international roles.</p>
          <NavLink to='/news/forign'><button>Read More</button></NavLink> 
        </div>  
      </div> 
    </div>
    <div className='up-partner'>
        <h1>Our Partner</h1>
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
  </>)
}

export default Home