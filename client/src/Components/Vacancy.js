
import React from 'react';
import { NavLink } from 'react-router-dom';
import './about.css'
import gs from '../assets/police3.jpg'

const Vacancy = () => {
  const vacancies = [
    {
      title: 'Software Engineer',
      requirements: [
        'Bachelor’s degree in Computer Science',
        '2+ years of experience',
        'Proficient in JavaScript, React',
      ],
      description: 'We are looking for a Software Engineer to join our team.',
    },
    {
      title: 'Product Manager',
      requirements: [
        'Bachelor’s degree in Business or related field',
        '5+ years of product management experience',
        'Strong analytical and problem-solving skills',
      ],
      description: 'Join us as a Product Manager and lead our product initiatives.',
    },
    {
      title: 'UX/UI Designer',
      requirements: [
        'Degree in Design or related field',
        '3+ years of experience in UX/UI design',
        'Proficient with design tools like Sketch, Figma',
      ],
      description: 'Looking for a creative UX/UI Designer to enhance user experience.',
    },
  ];

  const handleApply = () => {
    alert('You have applied for the position!');
  };

  return (
    <>
     <div className='news-upper' >
        <img src={gs} alt='News Image' />
        <div className='news-la'>
          <NavLink to='/'>Home </NavLink>
          <p>/</p>
          <p>Vacancy</p>
        </div>
      </div>
    <div style={styles.vacancyContainer}>
      {vacancies.map((vacancy, index) => (
        <div key={index} style={styles.card}>
          <h2 style={styles.title}>{vacancy.title}</h2>
          <h4 style={styles.requirementsTitle}>Requirements:</h4>
          <ul style={styles.requirementsList}>
            {vacancy.requirements.map((req, idx) => (
              <li key={idx} style={styles.requirementItem}>{req}</li>
            ))}
          </ul>
          <p style={styles.description}>{vacancy.description}</p>
          <button style={styles.button} onClick={handleApply}>
            Apply Now
          </button>
        </div>
      ))}
    </div>
    </> );
};

const styles = {
  vacancyContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap', // Allows wrapping on smaller screens
    justifyContent: 'space-around', // Adjusts spacing between cards
    padding: '16px',
  },
  card: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    margin: '16px',
    maxWidth: '300px', // Adjust max width as necessary
    backgroundColor: '#f9f9f9',
    flex: '1 1 auto', // Allows cards to grow and shrink
  },
  title: {
    marginBottom: '8px',
  },
  requirementsTitle: {
    marginTop: '16px',
  },
  requirementsList: {
    listStyleType: 'none',
    padding: '0',
  },
  requirementItem: {
    margin: '4px 0',
  },
  description: {
    marginTop: '16px',
    marginBottom: '16px',
  },
  button: {
    padding: '10px 15px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default Vacancy;