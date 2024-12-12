import React, { useEffect, useRef, useState } from 'react'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import sg from '../assets/forOp.jpg'
import { FaPhone } from 'react-icons/fa'; 
import { FaEnvelope } from 'react-icons/fa';


import { FaPeopleRoof } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";
import { FaGlobe } from "react-icons/fa";
import { FaBalanceScale } from "react-icons/fa";



import './home.css'
import './about.css'


import CardList from './Card';
import { NavLink } from 'react-router-dom';
import Countable from './Countable';
import Chatbot from './Chatbot';
import Pimages from './Pimages';
import MySwiper from './Swip';



function Home() {
  // const {latestNews, setLatestNews} = useContext(NewsContext)


  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing after it becomes visible
        }
      },
      {
        rootMargin: '0px',
        threshold: 0.1, // Trigger when 10% of the component is visible
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);



  return (<>
    <MySwiper />
    <Countable />

    <div className='home'>
      <h1>We have 14 Years of Experience of Security & Human Resource</h1>
      <p>Gafat Security and Human Resources P.L.C established on December 10, 2011.Gafat Security and Human Resource Services is
        an organization set up to serve the country, its citizens and its customers by filling in the gaps in the security services
        sector in our country. It is a company that has been established by the country's legal experts and has complied with all legal
        frameworks.</p>
      <p>The organization was established by military officers who returned to the civil service after serving in various capacities
        in the Ethiopian Defense Forces. The experts set up the organization to serve their country with their advanced military and
        security skills, to support the limited service delivery sector and to create jobs for their citizens and contribute to the
        development of themselves and their country. </p>

      <div className='home-images'>
        <div className='h1'> <FaPeopleRoof size={60} />
          <h2>Team Work</h2>
        </div>
        <div className='h1'> <IoIosPeople size={60} />
          <h2>Mutual Benefit</h2>
        </div>
        <div className='h1'><FaBalanceScale size={60} />
          <h2>Low Abid</h2>
        </div>
        <div className='h1'><FaGlobe size={60} />
          <h2>Our Existance</h2>
        </div>
      </div>
    </div>

    <CardList />

    
    <div className='last-vacancy'>
      <h3>Latest Vacancies</h3>
      <p>Currently we have around <button className='btn1'>5</button>jobsAvailable on different position</p>
      <NavLink to='/vacancy' > <button className='btn2'>VIEW MORE JOBS AND APPLY</button></NavLink>
    </div>
    
    
    <div className='latest-news' >
      <h1>Latest News</h1>
      <div className='upper-news'>
        <img src={sg} alt='News Image' />
        <div className='lower-news'>
          <h3>Forign Opportunity</h3>
          <p>Developing programs to support employees relocating for international roles.</p>
          <NavLink to='/news/detail/4'><button>Read More</button></NavLink>
        </div>
      </div>
    </div>
    
    <div className={`vision-reality ${isVisible ? 'animated' : ''}`} ref={ref}>
      <h3>Lets Turn Your Vision into Reality: Contact Gafat Today </h3>
      <p>Believe in your potential and embrace the challenges that come your way, for every obstacle is an opportunity for growth.</p>
      <div className='upper v-r'>
        <div className='uppp-ott'>
          <h2>Get Employee Managment</h2>
          <p>Say goodbye to paperwork and hello to efficiency!</p>
        </div>
        <div className='uppp-ott'>
          <h2>Effortless Payroll and Compensation</h2>
          <p>Experience peace of mind with automated payroll processing</p>
        </div>
        <div className='uppp-ott'>
          <h2>Dynamic Performance Management</h2>
          <p>Transform your performance reviews into a continuous conversation!</p>
        </div>

      </div>
      <div className='middle-v-r'>
        <p>Ready to transform your HR processes and empower your team</p>
        <div className='mddd-1'>
          <div className='mdd1'>
            <button> <FaPhone size={15} color="rgba(0,128,0,0.7)" style={{ margin: '0 20px'}} />0913152743</button>
            <button><FaPhone size={15} color="rgba(0,128,0,0.7)" style={{ margin: '0 20px' }} />0908333377</button>
          </div>
          <div className='mddd1'>
          <button> <FaEnvelope size={15} color="rgba(0,128,0,0.7)" style={{ margin: '0 20px' }} />info@gafatsecurity.com</button>
            <button>  <FaEnvelope size={15} color="rgba(0,128,0,0.7)" style={{ margin: '0 20px' }} />gafatsecure@gmail.com </button>
          </div>
        </div>
      </div>
      <div className='bottom v-r'>
        <div className='bttt-1'>
          <h2> Join our dynamic team </h2>
          <p>be part of a company that values innovation, collaboration, and growth</p>
        </div>
        <div className='bttt-1'>
          <h2>Don’t wait any longer</h2>
          <p>Contact us today to learn how our innovative HR system can make a difference for your organization.</p>
        </div>
      </div>
    </div>

    <Pimages />
    <Chatbot />
  </>)
}

export default Home