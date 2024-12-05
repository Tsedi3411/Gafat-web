import React from 'react';
import { NavLink } from 'react-router-dom';
import './news.css';
import gs from '../assets/police3.jpg';
import fg from '../assets/forOp.jpg';
import im1 from '../assets/hr.jpg';
import im2 from '../assets/plice1.jpg';
import im3 from '../assets/police3.jpg';
import ImageSlider from './ImageSlider';
import Chatbot from './Chatbot';
import MySwiper from './Swip';


function News() {


  const neews = [
    {
      id: '1',
      image: im1,
      title: 'Give special opportunity to work with foreign companies',
      Description: 'Experience the richness of working within a multicultural team that celebrates diversity',
      link: '/news/detail/1',
    },
    {
      id: '2',
      image: im2,
      title: 'Recruiting Experienced Employees to our Partners',
      Description: 'This program is designed to connect skilled individuals with companies seeking to enhance their workforce',
      link: '/news/detail/2',
    },
    {
      id: '3',
      image: im3,
      title: 'Get an Award from Federal Management Center',
      Description: 'Specific awards offered by the Federal Management Center',
      link: '/news/detail/3',
    },
    {
      id: '4',
      image: fg,
      title: 'Get Foreign Opportunity',
      Description: 'Specific awards offered by the Federal Management Center',
      link: '/news/detail/4',
    },
  ];

  const images = [
    { url: require('../assets/forOp.jpg'), alt: '', text: 'Welcome to Our Company' },
    { url: require('../assets/police2.jpg'), alt: '', text: 'Come and grow together' },
    { url: require('../assets/police3.jpg'), alt: '', text: 'Trust Our Partnership' },
    // Add more images as needed
  ];

  return (
    <>
      
       <MySwiper/>
      
        {/* <div className='news-upper'>
          <img src={gs} alt='News Image' />
          <div className='news-la'>
            <h2>Your Voice, Our Story.</h2>
            <NavLink to='/'>Home </NavLink>
            <p>/</p>
            <p>News</p>
          </div>
        </div> */}


        <div className='news-container'>
          <div className='main-news'>
            <h1>News</h1>
            <p>In 2024, Human Resources departments are embracing innovative strategies to enhance workplace culture and employee engagement.</p>
            <div className='latest-news'>
              {neews.map((item) => (
                <div className='neews' key={item.id}>
                  <img src={item.image} alt='' />
                  <h2>{item.title}</h2>
                  <p>{item.Description}</p>
                  <NavLink to={item.link}><button>Read More  <span>&#187;</span></button></NavLink>
                </div>
              ))}
            </div>
          </div>

          {/* Minimized duplicate news section */}
          <div className='minimized-news'>
            <h1>News Highlights</h1>
            {neews.map((item) => (
              <div className='neews minimized' key={item.id}>
                <img src={item.image} alt='' />
                <h2>{item.title}</h2>
                <NavLink to={item.link}><button>Read More</button></NavLink>
              </div>
            ))}
          </div>
        </div>
    <Chatbot />
    </>
  );
}

export default News;