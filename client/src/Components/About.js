import React, { useState } from 'react'
import './about.css'
import { TbBuildingCottage } from "react-icons/tb";
import { FaFacebook, FaTelegramPlane, FaEnvelope, FaLinkedin } from 'react-icons/fa';
import employee from '../assets/empP.jpg'

import { NavLink, useParams } from 'react-router-dom'
import { FaPeopleRoof } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";
import { FaGlobe } from "react-icons/fa";
import { FaBalanceScale } from "react-icons/fa";

import './home.css'
import history from '../assets/abtu.jpg'
import Chatbot from './Chatbot';
import MySwiper from './Swip';
import { Image } from 'antd';
import Pimages from './Pimages';

function About() {
  const images = [
    { url: require('../assets/forOp.jpg'), alt: 'Welcome to Our Company', text: 'Welcome to Our Company' },
    { url: require('../assets/police2.jpg'), alt: 'We believe in the power of dreams and the relentless pursuit of excellence', text: 'We believe in the power of dreams and the relentless pursuit of excellence' },
    { url: require('../assets/police3.jpg'), alt: 'Our dedicated team is committed to delivering exceptional quality and service.', text: 'Our dedicated team is committed to delivering exceptional quality and service.' },
  ];

  const [fade, setFade] = useState(false);




  return (
    <>
      <MySwiper />
      <div className='history'>
        <h1>About Us </h1>
        <div className='adHis'>
          <Image src={history} alt='photo of our employee' className={`fade-image ${fade ? 'fade-out' : 'fade-in'}`}
            onMouseEnter={() => setFade(true)}
            onMouseLeave={() => setFade(false)} />
          <div className='side-history'>
            <h1>We Have 14 Years Of Experience Of Security & Human Resource</h1>
            <p>There are a number of initiatives in the world that threaten the security of our nations as we move forward. Efforts to
              address these issues and to focus solely on the purpose for which institutions are established should not be left to the
              government or the security forces alone. The largest number of private security services in the world, with the support
              of the government security forces and members of the business community, are doing their part to protect the commercial
              centers from crime and danger.Institutions that provide organized personal protection services in our country have also
              been established and are providing services. Although the sector is relatively inexperienced, there are some limitations
              in operation, organization, human resource development, and logistics. </p>
            <p>Gafat Security and Human Resource Services is an organization set up to serve the country, its citizens and its customers by
              filling in the gaps in the security services sector in our country. It is a company that has been established by the country's
              legal experts and has complied with all legal frameworks.</p>
            <div className='botton-history'><p><TbBuildingCottage /></p> <h3>Our commitment is to maintain your privacy and confidentiality at all times, whilst providing you with the service you require"</h3></div>
          </div>
        </div>
      </div>
      <div className='about'>

        <div className='vision'>
          <div>
            <h1>Our Vision</h1>
            <ul>
              <li>Our vision is to create a workplace where diversity is celebrated,
                collaboration is the norm, and every employee is inspired to reach their highest potential</li>
              <li>To be a leading HR organization recognized for our commitment
                to innovation, excellence, and the empowerment of every employee, shaping a future where talent thrives.</li>
              <li>
                To transform the employee experience by fostering a culture of trust, engagement, and
                continuous improvement, positioning our organization as an employer of choice.
              </li>
              <li>
                We envision a future where every employee feels valued and connected, driving organizational
                success through a culture of inclusivity and shared purpose.
              </li>
              <li>To lead the way in human resources by embracing innovative practices that enhance employee satisfaction,
                drive performance, and build a resilient workforce for the future.</li>
            </ul>

          </div>
        </div>

        <div className='mission'>
          <div>
            <h1>Our Mission</h1>
            <ul>
              <li>Our mission is to attract, develop, and retain top talent by creating a supportive and
                innovative environment where employees can thrive, contribute, and achieve their full potential.</li>
              <li>To empower our workforce through inclusive practices, fostering a culture of collaboration
                and continuous growth, while championing the well-being and development of every employee.</li>
              <li>
                To cultivate a dynamic workplace that values diversity, drives engagement, and inspires excellence,
                ensuring that every employee feels valued and empowered to succeed.
              </li>
              <li>
                We are committed to building a sustainable and inclusive organizational culture that prioritizes
                employee well-being, professional growth, and a sense of belonging for all.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='our-value'>
        <h1>Our Values</h1>
        <p>Peace of mind produces right values, right values produce right thoughts.
          Right thoughts produce right actions.</p>
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
      <div className='meet-employee'>
        <h1>Constal experience meet the team employee's</h1>
        <div className='emp-one'>
          <div className='emp-two' >
            <div className='emp-pics'>
              <Image src={employee} alt='general manager' style={{ height: 250, width: 200 }} />
              <div className='emp-info'>
                <h2>Coroniel Abebe</h2>
                <p>Founder & G/Manager
                  20 Years experice in ... and</p>
                <div className='emp-icons'>
                  <NavLink to='Facebook.com' > <FaFacebook size={20} color="#3b5998" /> </NavLink>
                  <NavLink to='Telegram.com' ><FaTelegramPlane size={20} color="#0088cc" /> </NavLink>
                  <NavLink to='abeeb@gmail.com.com' > <FaEnvelope size={20} color="#ea4335" /> </NavLink>
                  <NavLink to='abebeLinkdin.com' > <FaLinkedin size={20} color="#0077b5" />  </NavLink>
                </div>
              </div>
            </div>
            <div className='emp-pics'>
              <Image src={employee} alt='general manager' style={{ height: 250, width: 200 }} />
              <div className='emp-info'>
                <h2>Coroniel Alemu</h2>
                <p>Founder & G/Manager
                  20 Years experice in ... and</p>
                <div className='emp-icons'>
                  <NavLink to='Facebook.com' ><FaFacebook size={20} color="#3b5998" /></NavLink>
                  <NavLink to='Telegram.com' ><FaTelegramPlane size={20} color="#0088cc" /></NavLink>
                  <NavLink to='abebe@gmail.com' ><FaEnvelope size={20} color="#ea4335" /></NavLink>
                  <NavLink to='linkdin.com' ><FaLinkedin size={20} color="#0077b5" /> </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div className='emp-two'>
            <div className='emp-pics'>
              <Image src={employee} alt='general manager' style={{ height: 250, width: 200 }} />
              <div className='emp-info'>
                <h2>Coroniel Ezra</h2>
                <p>Founder & G/Manager
                  20 Years experice in ... and</p>
                <div className='emp-icons'>
                  <NavLink to='Facebook.com' ><FaFacebook size={20} color="#3b5998" /></NavLink>
                  <NavLink to='Telegram.com' ><FaTelegramPlane size={20} color="#0088cc" /></NavLink>
                  <NavLink to='abebe@gmail.com' ><FaEnvelope size={20} color="#ea4335" /></NavLink>
                  <NavLink to='linkdin.com' ><FaLinkedin size={20} color="#0077b5" /> </NavLink>
                </div>
              </div>
            </div>
            <div className='emp-pics'>
              <Image src={employee} alt='general manager' style={{ height: 250, width: 200 }} />
              <div className='emp-info'>
                <h2>Coroniel kebede</h2>
                <p>Founder & G/Manager
                  20 Years experice in ... and</p>
                <div className='emp-icons'>
                  <NavLink to='Facebook.com' ><FaFacebook size={20} color="#3b5998" /></NavLink>
                  <NavLink to='Telegram.com' ><FaTelegramPlane size={20} color="#0088cc" /></NavLink>
                  <NavLink to='abebe@gmail.com' ><FaEnvelope size={20} color="#ea4335" /></NavLink>
                  <NavLink to='linkdin.com' ><FaLinkedin size={20} color="#0077b5" /> </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Pimages />
      <div className='join-us'>
        <p> Join us on this exciting journey where you’ll have the opportunity to shape workplace cultures, drive talent development, and help individuals thrive in their careers.</p>
      </div>
      <Chatbot />
    </>)
}

export default About