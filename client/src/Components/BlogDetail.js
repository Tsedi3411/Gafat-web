import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import './newsDetail.css';
import './detail.css'

import im1 from '../assets/hr.jpg';
import im2 from '../assets/plice1.jpg';
import im3 from '../assets/police3.jpg';
import sg from '../assets/forOp.jpg'
import gs from '../assets/police3.jpg'

const Blog = () => {

  const blogs = [
    {
      id: '1',
      image: im1,
      title: 'Gafat Cleaning',
      Description: 'In todays globalized economy, collaboration with international businesses presents unique opportunities for professional growth and development. This initiative aims to provide exceptional candidates the chance to engage with leading foreign companies, enhancing their career prospects and expanding their professional networks.',
      link: '/newsBlog',
    },
    {
      id: '2',
      image: im2,
      title: 'Gafat Hr',
      Description: 'We are excited to announce a new initiative aimed at recruiting experienced professionals to support our esteemed partners across various industries.This program is designed to connect skilled individuals with companies seeking to enhance their workforce with qualified personnel. Our partners are looking for candidates who',
      link: '/newsBlog',
    },
    {
      id: '3',
      image: im3,
      title: 'Gafat Training',
      Description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      link: '/newsBlog',
    },
    {
      id: '4',
      image: sg,
      title: 'Gafat Security',
      Description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      link: '/newsBlog',
    },
  ];

  const { id } = useParams(); 
  const newsBlog = blogs.find(item => item.id === id);

  return (
    <>

<div className='news-upper' >
          <img src={gs} alt='News Image' />
          <div className='news-la'>
          <h2>Your Voice, Our Story.</h2>
            <NavLink to='/newsBlog'> News Blog </NavLink>
            <p>/</p>
            <p>Catagory :{id}</p>
          </div>
        </div>
      <div className=' TNews'>
        <div className='newsD'>
          {newsBlog ? ( // Check if a news item was found
            <div key={newsBlog.id}>
              <img src={newsBlog.image} alt={newsBlog.title} />
              <h1>{newsBlog.title}</h1>
              <p>{newsBlog.Description}</p>
              <NavLink to={newsBlog.link}>Goback</NavLink>
            </div>
          ) : (
            <p>No news found.</p>
          )}
        </div>
        <div className='blog'>
          <h3>Blog Categories</h3>
          {newsBlog ? (
            <>
              <NavLink to={`${newsBlog.link}/${newsBlog.id}`}>Gafat Cleaning</NavLink>
              <NavLink to={`${newsBlog.link}/${newsBlog.id}`}>Gafat Training</NavLink>
              <NavLink to={`${newsBlog.link}/${newsBlog.id}`}>Gafat HR</NavLink>
              <NavLink to={`${newsBlog.link}/${newsBlog.id}`}>Gafat Security</NavLink>
            </>
          ) : (
            <p>No newsBlog</p>
          )}

        </div>
      </div>
    </>
  );
};

export default Blog;

