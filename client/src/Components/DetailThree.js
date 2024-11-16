import React from 'react'
import im3 from '../assets/police3.jpg'
import { NavLink, useParams } from 'react-router-dom'

function DetailThree() {
  const detailThree=[
    {
      image: im3,
      title: 'Recruiting to our Partners',
      Description: 'lorem',
      link:'/news',
    }
  ]
  // const { id } = useParams();
  return (
    <div className='detail-three'>
       {detailThree.map(item=>( <div>
          <img src={item.image} alt='Detial Three image' />
          <h1>{item.title}</h1>
          <p>{item.Description}</p>
          <NavLink to ={item.link}><button>goback</button></NavLink>
          
          </div>))}
    </div>
  )
}

export default DetailThree