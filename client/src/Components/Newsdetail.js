import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import './newsDetail.css';
// import './detail.css';
import ImageSlider from './ImageSlider';


import im1 from '../assets/hr.jpg';
import im2 from '../assets/plice1.jpg';
import im3 from '../assets/police3.jpg';
import sg from '../assets/forOp.jpg';
import gs from '../assets/police3.jpg';
import fg from '../assets/forOp.jpg'; 
import Chatbot from './Chatbot';

const Newsdetail = () => {

  const images = [
    { url: require('../assets/forOp.jpg'), alt: '', text: 'Welcome to Our Company' },
    { url: require('../assets/police2.jpg'), alt: '', text: 'Come and grow together' },
    { url: require('../assets/police3.jpg'), alt: '', text: 'Trust Our Partnership' },
    // Add more images as needed
  ];
  const neews = [
    {
      id: '1',
      image: im1,
      title: 'Give special opportunity to work with foreign companies',
      Description: 'In today\'s globalized economy, collaboration with international businesses presents unique opportunities for professional growth and development. This initiative aims to provide exceptional candidates the chance to engage with leading foreign companies, enhancing their career prospects and expanding their professional networks.',
      link: '/news',
    },
    {
      id: '2',
      image: im2,
      title: 'Recruiting Experienced Employees to our Partners',
      Description: 'We are excited to announce a new initiative aimed at recruiting experienced professionals to support our esteemed partners across various industries. This program is designed to connect skilled individuals with companies seeking to enhance their workforce with qualified personnel.',
      link: '/news',
    },
    {
      id: '3',
      image: im3,
      title: 'Get an Award from Federal management center',
      Description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      link: '/news',
    },
    {
      id: '4',
      image: sg,
      title: 'Foreign Opportunity',
      Description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      link: '/news',
    },
  ];

  const neeews = [
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

  const { id } = useParams(); // Get the ID from the URL parameters
  const newsItem = neews.find(item => item.id === id); // Find the news item by ID

 

  return (
    <>

<ImageSlider images={images} />
      {/* <div className='news-upper'>
        <img src={gs} alt='News Image' />
        <div className='news-la'>
          <h2>Your Voice, Our Story.</h2>
          <NavLink to='/news'> News </NavLink>
          <p>/</p>
          <p>Detail: {id}</p>
        </div>
      </div> */}
      <div className='TNews'>
        <div className='newsD'>
          {newsItem ? (
            <div key={newsItem.id}>
              <img src={newsItem.image} alt={newsItem.title} />
              <h1>{newsItem.title}</h1>
              <p>{newsItem.Description}</p>
              <NavLink to={newsItem.link}>Go back</NavLink>
            </div>
          ) : (
            <p>No news found.</p>
          )}
        </div>

        {/* Minimized news section */}
        <div className='minimized-news'>
          <h2>Latest News</h2>
          {neeews.map((item) => (
            <div className='neews minimized' key={item.id}>
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              <NavLink to={item.link}><button>Read More</button></NavLink>
            </div>
          ))}
        </div>
      </div>
      <Chatbot />
    </>

  );
};

export default Newsdetail;