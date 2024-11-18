import React from 'react';
import { NavLink, useParams } from 'react-router-dom';

import im1 from '../assets/hr.jpg';
import im2 from '../assets/plice1.jpg';
import im3 from '../assets/police3.jpg';

const Newsdetail = () => {
  const neews = [
    {
      id: '1',
      image: im1,
      title: 'Give special opportunity to work with foreign companies',
      Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      link: '/news/detail/1',
    },
    {
      id: '2',
      image: im2,
      title: 'Recruiting Experienced Employees to our Partners',
      Description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      link: '/news/detail/2',
    },
    {
      id: '3',
      image: im3,
      title: 'Get an Award from Federal management center',
      Description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      link: '/news/detail/3',
    },
  ];

  const { id } = useParams(); // Get the ID from the URL parameters
  const newsItem = neews.find(item => item.id === id); // Find the news item by ID

  return (
    <>
      <div>News Detail for ID: {id}</div>
      <div className='newsD'>
        {newsItem ? ( // Check if a news item was found
          <div key={newsItem.id}>
            <img src={newsItem.image} alt={newsItem.title} />
            <h1>{newsItem.title}</h1>
            <p>{newsItem.Description}</p>
            <NavLink to={newsItem.link}>Read more</NavLink>
          </div>
        ) : (
          <p>No news found.</p>
        )}
      </div>
    </>
  );
};

export default Newsdetail;

