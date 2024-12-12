import React from 'react'
import './news.css'
import './detail.css'
import './about.css'
import gs from '../assets/police3.jpg'
import fg from '../assets/forOp.jpg'

import im1 from '../assets/hr.jpg'
import im2 from '../assets/plice1.jpg'
import im3 from '../assets/police3.jpg'
import { NavLink, useParams } from 'react-router-dom'

function NewsBlog() {

  const neews = [
    {
      id: '1',
      image: im1,
      title: 'Give special oportunity to work with forign companies',
      Description: 'Experience the richness of working within a multicultural team that celebrates diversity',
      link: '/newsBlog/detail/1',
    },
    {
      id: '2',
      image: im2,
      title: 'Recruiting Experianced Employees to our Partners',
      Description: 'This program is designed to connect skilled individuals with companies seeking to enhance their workforce',
      link: '/newsBlog/detail/2',
    },
    {
      id: '3',
      image: im3,
      title: 'Get an Award from Federal managment center',
      Description: 'specific awards offered by the Federal Management Center',
      link: '/newsBlog/detail/3',
    },
    {
      id:'4',
      image: fg,
      title: 'get forign oportunity',
      Description: 'specific awards offered by the Federal Management Center',
      link: '/newsBlog/detail/3',
    },
  ]
  return (
    <>
      <div className='news'>
        <div className='news-upper' >
          <img src={gs} alt='News Image' />
          <div className='news-la'>
          <h2>Your Voice, Our Story.</h2>
            <NavLink to='/'>Home </NavLink>
            <p>/</p>
            <p>News</p>
          </div>
        </div>
        <div className='haey'>
          <h1>News</h1>
          <p>In 2024, Human Resources departments are embracing innovative strategies to enhance workplace culture and employee engagement.</p>
        </div>
        <div className='latest-news'>
          {neews.map((item) => (
            <div className='neews'>

              <img src={item.image} alt='' />
              <h2>{item.title}</h2>
              <p>{item.Description}</p>
              <NavLink to={item.link}><button>Read More</button></NavLink>

            </div>
          ))}
        </div>
      </div>
    </>)
}

export default NewsBlog