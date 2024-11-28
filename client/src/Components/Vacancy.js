import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import './vacancy.css';
import './about.css';
import gs from '../assets/police3.jpg';
import ImageSlider from './ImageSlider';
import Chatbot from './Chatbot';

const Vacancy = () => {
  const images = [
    { url: require('../assets/forOp.jpg'), alt: '' ,  text: 'Welcome to Our Company'  },
    { url: require('../assets/police2.jpg'), alt: '', text: 'Come and grow together'  },
    { url: require('../assets/police3.jpg'), alt: '', text: 'Trust Our Partnership'  },
    // Add more images as needed
];


  const [searchQuery, setSearchQuery] = useState('');

  const vacancies = [
    {
      id: 1,
      branch: 'New York',
      department: 'Engineering',
      position: 'Software Engineer',
      title: 'Senior Software Engineer',
      vacancyType: 'Full-time',
      employment: 'Permanent',
      minAge: 25,
      maxAge: 35,
      gender: 'Any',
      sector: 'IT',
      experience: '3-5 years',
      vacancy: 2,
      salary: '$80,000 - $100,000',
      deadline: '2024-12-31',
      description: 'We are looking for a skilled software engineer to join our team. We need talented professionals who are quick to learn and eager to grow.',
      link: '/vacancy/detail/1',
    },
    {
      id: 2,
      branch: 'Los Angeles',
      department: 'Marketing',
      position: 'Marketing Specialist',
      title: 'Digital Marketing Specialist',
      vacancyType: 'Part-time',
      employment: 'Contract',
      minAge: 22,
      maxAge: 30,
      gender: 'Any',
      sector: 'Marketing',
      experience: '1-3 years',
      vacancy: 1,
      salary: '$40,000 - $50,000',
      deadline: '2024-11-30',
      description: 'Looking for a creative marketing specialist to enhance our online presence. We need talented professionals who are quick to learn and eager to grow.',
      link: '/vacancy/detail/2',
    },
    {
      id: 3,
      branch: 'Los Angeles',
      department: 'Marketing',
      position: 'Marketing Specialist',
      title: 'Social Media Manager',
      vacancyType: 'Part-time',
      employment: 'Contract',
      minAge: 22,
      maxAge: 30,
      gender: 'Any',
      sector: 'Marketing',
      experience: '1-3 years',
      vacancy: 1,
      salary: '$40,000 - $50,000',
      deadline: '2024-11-30',
      description: 'Looking for a creative social media manager to enhance our online presence.',
      link: '/vacancy/detail/3',
    },
  ];

  // Get the ID from the URL parameters
  const { id } = useParams();

  // Convert the ID to a number and find the corresponding vacancy
  const vacancy = vacancies.find(vacancy => vacancy.id === parseInt(id, 10));

  const handleApplyNow = (vacancy) => {
    alert(`Applying for: ${vacancy.title}`);
  };

  return (
    <>
        <ImageSlider images={images} />

      {/* <div className='news-upper'>
        <img src={gs} alt='News Image' />
        <div className='news-la'>
          <h3>Let's Grow Together</h3>
          <NavLink to='/'>Home </NavLink>
          <p>/</p>
          <NavLink to='/Vacancy'>Vacancies </NavLink>
          <p>/</p>
          <p>Detail</p>
        </div>
      </div> */}
      <h1>Vacancy Details</h1>
      {vacancy ? (
        <div className="vacancy-detail">
          <h2>{vacancy.title}</h2>
          <p><strong>Branch:</strong> {vacancy.branch}</p>
          <p><strong>Department:</strong> {vacancy.department}</p>
          <p><strong>Position:</strong> {vacancy.position}</p>
          <p><strong>Vacancy Type:</strong> {vacancy.vacancyType}</p>
          <p><strong>Employment:</strong> {vacancy.employment}</p>
          <p><strong>Min Age:</strong> {vacancy.minAge} - <strong>Max Age:</strong> {vacancy.maxAge}</p>
          <p><strong>Gender:</strong> {vacancy.gender}</p>
          <p><strong>Sector:</strong> {vacancy.sector}</p>
          <p><strong>Experience:</strong> {vacancy.experience}</p>
          <p><strong>Vacancy:</strong> {vacancy.vacancy}</p>
          <p><strong>Salary:</strong> {vacancy.salary}</p>
          <p><strong>Deadline:</strong> {vacancy.deadline}</p>
          <p><strong>Description:</strong> {vacancy.description}</p>
          <button onClick={() => handleApplyNow(vacancy)} className="apply-button">Apply Now</button>
        </div>
      ) : (
        <p>Vacancy not found.</p>
      )}
      <Chatbot />
    </>
  );
};

export default Vacancy;