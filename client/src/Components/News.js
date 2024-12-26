import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './news.css';
import fg from '../assets/forOp.jpg';
import im1 from '../assets/hr.jpg';
import im2 from '../assets/plice1.jpg';
import im3 from '../assets/police3.jpg';
import Chatbot from './Chatbot';
import MySwiper from './Swip';
import axios from 'axios';
import SwiperNews from './SwiperNews';


function News() {
  const location = useLocation();


  // const neews = [
  //   {
  //     id: '1',
  //     image: im1,
  //     title: 'Give special opportunity to work with foreign companies',
  //     Description: 'Experience the richness of working within a multicultural team that celebrates diversity',
  //     link: '/news/detail/1',
  //   },
  //   {
  //     id: '2',
  //     image: im2,
  //     title: 'Recruiting Experienced Employees to our Partners',
  //     Description: 'This program is designed to connect skilled individuals with companies seeking to enhance their workforce',
  //     link: '/news/detail/2',
  //   },
  //   {
  //     id: '3',
  //     image: im3,
  //     title: 'Get an Award from Federal Management Center',
  //     Description: 'Specific awards offered by the Federal Management Center',
  //     link: '/news/detail/3',
  //   },
  //   {
  //     id: '4',
  //     image: fg,
  //     title: 'Get Foreign Opportunity',
  //     Description: 'Specific awards offered by the Federal Management Center',
  //     link: '/news/detail/4',
  //   },
  // ];


  
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      const fetchNews = async () => {
          try {
              const response = await axios.get('http://5.75.167.208:7070/news/blog');
              // Check if response.data is an array before setting state
              if (Array.isArray(response.data)) {
                  setNews(response.data);
              } else {
                  setNews([]); // Set to empty array if data is not an array
              }
          } catch (err) {
              setError(err.message);
          } finally {
              setLoading(false);
          }
      };

      fetchNews();
  }, []);


  return (
    <>
      
       <SwiperNews/>
       
        <div className='news-container'>
          <div className='main-news'>
            <h1>News</h1>
            <p>In 2024, Human Resources departments are embracing innovative strategies to enhance workplace culture and employee engagement.</p>
            <div className='latest-news'>
              {news.map((item) => (
                <div className='neews' key={item.id}>
                  <img src={`http://192.168.20.108:5000/uploads/${item.image}`} alt='' />
                  <h2>{item.title}</h2>
                  <p>{item.description.length > 100 
                                ? `${item.description.substring(0, 100)}...` 
                                : item.description}</p>
                  <NavLink to={item.link}><button>Read More  <span>&#187;</span></button></NavLink>
                </div>
              ))}
            </div>
          </div>

          {/* Minimized duplicate news section */}
          <div className='minimized-news'>
            <h1>News Highlights</h1>
            {news.map((item) => (
              <div className='neews minimized' key={item.id}>
                <img src={`http://192.168.20.108:5000/uploads/${item.image}`} alt='' />
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