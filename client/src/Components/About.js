import React, { useState } from 'react'
import './about.css'
import { TbBuildingCottage } from "react-icons/tb";

import { NavLink, useParams } from 'react-router-dom'
import { FaPeopleRoof } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";
import { FaGlobe } from "react-icons/fa";
import { FaBalanceScale } from "react-icons/fa";

import a from '../assets/abay-bank.jpg'
import ab from '../assets/Abyssinia-bank.png'
import an from '../assets/anbesa-bank.png'
import b from '../assets/bherawi.jpg'
import bu from '../assets/buna-bank.png'
import e from '../assets/Enat-bank.jpg'
import k from '../assets/keyizen.jpg'
import o from '../assets/oromya-bank.png'
import t from '../assets/tsedey.png'

import './home.css'


import sg from '../assets/police3.jpg'
import history from '../assets/abtu.jpg'

function About() {

  const [fade, setFade] = useState(false);

  const { id } = useParams();
  return (
    <>
      <div className='news-upper' >
        <img src={sg} alt='News Image' />
        <div className='news-la'>
          <NavLink to='/'>Home </NavLink>
          <p>/</p>
          <p>About</p>
        </div>
      </div>
      <div className='history'>

        <img src={history} alt='photo of our employee' className={`fade-image ${fade ? 'fade-out' : 'fade-in'}`}
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

      <div className='up-partner'>
        <h1>Our Partner</h1>
      <div className='our-partnr'>
        <img src={a} alt='' className='part-nr' />
        <img src={ab} alt='' className=' part-nr' />
        <img src={an} alt='' className='part-nr' />
        <img src={b} alt='' className='part-nr' />
        <img src={bu} alt='' className='part-nr' />
        <img src={e} alt='' className='part-nr' />
        <img src={k} alt='' className='part-nr' />
        <img src={o} alt='' className='part-nr' />
        <img src={t} alt='' className='part-nr' />
      </div>
      </div>
    </>)
}

export default About