import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import fg from '../assets/forOp.jpg';
import './vac.css'
import './news.css'
import Chatbot from './Chatbot';
import MySwiper from './Swip';


function Vac() {
  const vacancies = [
    {
      id: 1,
      branch:'New York',
      department:'Engineering',
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
      description:'We are looking for a skilled software engineer to join our team.',
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
      description:'Looking for a creative marketing specialist to enhance our online presence.',
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

  const [selectedPosition, setSelectedPosition] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedSector, setSelectedSector] = useState('');

  // Get unique positions, departments, and sectors for the dropdowns
  const positions = [...new Set(vacancies.map(v => v.position))];
  const departments = [...new Set(vacancies.map(v => v.department))];
  const sectors = [...new Set(vacancies.map(v => v.sector))];

  // Filter vacancies based on selected options
  const filteredVacancies = vacancies.filter(vacancy => {
    return (
      (selectedPosition ? vacancy.position === selectedPosition : true) &&
      (selectedDepartment ? vacancy.department === selectedDepartment : true) &&
      (selectedSector ? vacancy.sector === selectedSector : true)
    );
  });


  const images = [
    { url: require('../assets/forOp.jpg'), alt: '', text: 'Welcome to Our Company' },
    { url: require('../assets/police2.jpg'), alt: '', text: 'Come and grow together' },
    { url: require('../assets/police3.jpg'), alt: '', text: 'Trust Our Partnership' },
    // Add more images as needed
  ];

  return (<> 
 <MySwiper />


    <div className='Vac'>
      <div className='filter-container'>
        <select value={selectedPosition} onChange={(e) => setSelectedPosition(e.target.value)}>
          <option value="">Select Position</option>
          {positions.map((position, index) => (
            <option key={index} value={position}>{position}</option>
          ))}
        </select>

        <select value={selectedDepartment} onChange={(e) => setSelectedDepartment(e.target.value)}>
          <option value="">Select Department</option>
          {departments.map((department, index) => (
            <option key={index} value={department}>{department}</option>
          ))}
        </select>

        <select value={selectedSector} onChange={(e) => setSelectedSector(e.target.value)}>
          <option value="">Select Sector</option>
          {sectors.map((sector, index) => (
            <option key={index} value={sector}>{sector}</option>
          ))}
        </select>
      </div>

      <div className='minimized-vac'>
        <h2>Latest Vacancies</h2>
        {filteredVacancies.map((item) => (
          <div className='vac minimized' key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <NavLink to={item.link}>
              <button>Read More</button>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
    <Chatbot />
  </>);
}

export default Vac;