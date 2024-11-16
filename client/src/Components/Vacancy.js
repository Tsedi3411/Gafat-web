import React from 'react'
import { Card, Row, Col } from 'antd';
import './vacancy.css'
import './about.css'
import './card.css'


import gs from '../assets/police3.jpg'
import { NavLink } from 'react-router-dom'

function Vacancy() {
    const vacancies = [
        {
            title: 'Security',
            requirment: '2 years of experiance in security',
            amount: '10',
            description: 'We are seeking for experianced Security guard for our company as a night shift for keeping our assets from the uncessasary losses , if you ara passinate about the job please apply to the link below ',
        },
        {
            title: 'Sales',
            requirment: '1 month of experiance',
            amount: '2',
            description: 'We are seeking a dynamic and results-driven Sales Recruiter With a commitment to excellence and a passion for growth, we are looking for talented individuals to join our team.',
        },
        {
            title: 'Software Developer',
            requirment: '3 years of technical experiance',
            amount: '4',
            description: 'who can develop the company website and other applications which are applicable for use With a commitment to excellence and a passion for growth, we are looking for talented individuals to join our team.',
        },
    ]
    return (<>

        <div className='news-upper' >
            <img src={gs} alt='News Image' />
            <div className='news-la'>
                <NavLink to='/'>Home </NavLink>
                <p>/</p>
                <p>Vacancy</p>
            </div>
        </div>
        <div className='vacancy'>
            <div className='upper-vacancy'>
                <h1>Vacancy</h1>
                <p>We are a dynamic and innovative organization dedicated to providing exceptional products
                    and services to our customers. With a commitment to excellence and a passion for growth.</p> 
            </div> 

            
             <div className='lower-v'>
                {vacancies.map((job => (
                    <div className='lower-vacancy'>
                        <h2>{job.title}</h2>
                        <p>Requirment: {job.requirment}</p>
                        <p>Amount: {job.amount}</p>
                        <p>Description: {job.description}</p>
                    </div>
                )
                ))}
            </div> 


        </div>
    </>)
}

export default Vacancy

