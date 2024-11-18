import React from 'react'
import im1 from '../assets/hr.jpg'
import './detail.css'

import {Button } from 'antd'

import { NavLink, useParams } from 'react-router-dom'

function DetailOne() {
  const detailOne = [
    {
      image: im1,
      title: 'Give special oportunity to work with forign companies',
      Description: 'lorem',
      link: '/news/detailO',
    },
  ]
  const { id } = useParams();

  return (<>
    <div className='D-one'>
      <div className='upper-d'>
        <div className='nnn'>
          <h1>News :{id} </h1>
          <div className='nnn-l'>
        <NavLink to='/news'>News / </NavLink>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='news/detailO'>Detail</NavLink>
        </div>
        </div>
       
      </div>
      <div className='detail-One'>
        {detailOne.map(item => (<div className='inside'>
          <img src={item.image} alt='First Detail Image' />
          <h1>{item.title}</h1>
          <p>{item.Description}</p>
          <NavLink to={item.link}>
            <button> Read More</button>
            </NavLink>
        </div>
        ))}
        <div className='blog'>
          <h3>Blog Categories</h3>
          <NavLink to='cleaning'>Gafat Cleaning</NavLink>
          <NavLink to='cleaning'>Gafat Training</NavLink>
          <NavLink to='cleaning'>Gafat HR</NavLink>
          <NavLink to='cleaning'>Gafat Security</NavLink>
        </div>
      </div>
    </div>
  </>)
}

export default DetailOne