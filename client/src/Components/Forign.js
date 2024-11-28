
import React from 'react'
import './detail.css'
import './about.css'

import gs from '../assets/police3.jpg'
import sg from '../assets/forOp.jpg'
import { NavLink, useParams } from 'react-router-dom'

function Forign() {

    const detailOne = [
        {
            image: sg,
            title: 'Forign Oportunity',
            Description: 'lorem',
            link: '/forign',
        },
    ]
    
    


    return (
        <div className='D-one'>
            <div className='news-upper' >
                <img src={gs} alt='News Image' />
                <div className='news-la'>
                    <NavLink to='/news'>News </NavLink>
                    <p>/</p>
                    <p>Forign Opportunity</p>
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
    )
}

export default Forign