import React from 'react'
import './news.css'
import sg from '../assets/news.jpg'
import './detail.css'
import './about.css'
import gs from '../assets/police3.jpg'

import im1 from '../assets/hr.jpg'
import im2 from '../assets/plice1.jpg'
import im3 from '../assets/police3.jpg'
import { NavLink, useParams } from 'react-router-dom'

function News() {

  const neews = [
    {
      image: im1,
      title: 'Give special oportunity to work with forign companies',
      Description: 'lorem',
      link: '/news/detailO',
    },
    {
      image: im2,
      title: 'Recruiting Experianced Employees to our Partners',
      Description: 'lorem',
      link: '/news/detailT',
    },
    {
      image: im3,
      title: 'Get an Award from Federal managment center',
      Description: 'lorem',
      link: '/news/detailTH',
    },
  ]

  const { id } = useParams()

  return (
    <>
    <div className='news'>
    <div className='news-upper' >
        <img src={gs} alt='News Image' />
        <div className='news-la'>
          <NavLink to='/about'>News </NavLink>
          <p>/</p>
          <p>About</p>
        </div>
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

export default News