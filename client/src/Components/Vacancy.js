import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import './vacancy.css';
import './about.css';
import Chatbot from './Chatbot';
import MySwiper from './Swip';
import axios from 'axios';

const Vacancy = () => {
  const images = [
    { url: require('../assets/forOp.jpg'), alt: '' ,  text: 'Welcome to Our Company'  },
    { url: require('../assets/police2.jpg'), alt: '', text: 'Come and grow together'  },
    { url: require('../assets/police3.jpg'), alt: '', text: 'Trust Our Partnership'  },
    // Add more images as needed
];


  const [vacancy, setVacancy] = useState(null); 
  const { id } = useParams();
 

  
    useEffect(() => {
      const fetchVacancy = async () => {
        try {
          const response = await axios.get(`http://5.75.167.208:8080/vacancy/detail?id=${id}`);
          console.log('Vacancy Response:', response.data);
          setVacancy(response.data.vacancy);
        } catch (error) {
          console.error('Error fetching vacancy:', error);
        }
      };
  
      fetchVacancy();
    }, [id]);
  



  const handleApplyNow = (vacancy) => {
    alert(`Applying for: ${vacancy.title}`);
  };

  return (
    <>
       <MySwiper />

      <h1>Vacancy Details</h1>
      {vacancy ? (
        <div className="vacancy-detail">
          <h2>{vacancy.title}</h2>
          <p><strong>VacancyID:</strong> {vacancy.IDNO}</p>
          <p><strong>Branch:</strong> {vacancy.branchName}</p>
          <p><strong>Department:</strong> {vacancy.departmentName}</p>
          <p><strong>Position:</strong> {vacancy.positionName}</p>
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
         <NavLink to='/applicant'><button >Apply Now</button></NavLink>
        </div>
      ) : (
        <p>Vacancy not found.</p>
      )}
      <Chatbot />
    </>
  );
};

export default Vacancy;