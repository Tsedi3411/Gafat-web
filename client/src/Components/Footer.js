import React from 'react'
import './footer.css'
import logo from '../assets/logo.jpg'
import e from '../assets/email.png'
import im11 from '../assets/forOp.jpg'
import im21 from '../assets/forOp.jpg'
import im31 from '../assets/forOp.jpg'
import im41 from '../assets/forOp.jpg'

import { FaPhone } from 'react-icons/fa';
import { FaEnvelope, FaAddressBook } from 'react-icons/fa';

import ione from '../assets/f.png'
import itwo from '../assets/email.png'
import ithree from '../assets/Insta.jpg'
import ifour from '../assets/teleg.jpg'
import ifive from '../assets/tweet.jpg'
import isix from '../assets/in.jpg'
import iseven from '../assets/location.jpg'
import { Link, NavLink } from 'react-router-dom'
import { Image } from 'antd'

function Footer() {
  return (<>
    <div className='footer'>
      <div className='upper-footer'>
        <div className='upf-1'>
          <div className='upf-11'>
            <img src={logo} alt='' />
            <p>Gafat Security And Human Resource undertakes every shape, form and complexity of security operation.
              Our expertise allows us to design, implement and then maintain highly professional and effective manned
              security strategies. We provide security services to many prestige companies and individuals. Our commitment
              is to maintain your privacy and confidentiality at all times, while providing you with the service you require.</p>
          </div>
          <div className='upf-12'>
            <h3> <FaAddressBook size={20} color="green" style={{ margin: '0 20px' }} />Contact Us</h3>
            <div className='hm'>
              <p>Ethiopia, Addis Ababa, Kirkos Sub-City, Woreda 4, House No. 374</p>
            </div>
            <div className='ph'>
              <FaPhone size={16} color="green" style={{ margin: '0 20px' }} />
              <div>
                <p> 0118682211</p>
                <p>0913152743</p>
                <p>0911997390</p>
                <p>0912642890</p>
                <p> infoFax : +251 114-70 68 32</p>
              </div>

            </div>
            <div className='em'>
              <icon></icon>
              <FaEnvelope size={20} color="green" style={{ margin: '0 20px' }} />
              <div>
                <p> info@gafatsecurity.com </p>
                <p>gafatsecure@gmail.com</p>
              </div>
            </div>

          </div>
          <div className='upf-13'>
            <h2>Recent Photos</h2>
            <div className='up-1333'>
              <Image width={100} height={100} src={im11} alt='first pic' />
              <Image width={100} height={100} src={im21} alt='second pic' />
              <Image width={100} height={100} src={im31} alt='forth pic' />
            </div>
            <div className='up-1333'>
              <Image width={100} height={100} src={im41} alt='fifth pic' />
              <Image width={100} height={100} src={im31} alt='forth pic' />
              <Image width={100} height={100} src={im41} alt='fifth pic' />
            </div>
            {/* <form action='' method='' >
              <input type='text' placeholder='Your Name' />
              <input type='text' placeholder='Your Email' />
              <input type='text' placeholder='Your Phone' />
              <textarea cols={3} rows={10}>Your Message</textarea>
              <button>Send Message</button>
            </form> */}

          </div>

        </div>
      </div>
      <div className='middle-footer'>
        <div className='footer-icons'>
          <NavLink to='/facebook.com' className="navlink"> <img src={ione} alt='facebook' /></NavLink>
          <Link to='/email.com' className="navlink"> <img src={itwo} alt='email' /></Link>
          <Link to='/Instagram.com' className="navlink"><img src={ithree} alt='Instagram' /></Link>
          <NavLink to='/Telegram.com' className="navlink"> <img src={ifour} alt='Telegram' /> </NavLink>
          <NavLink to='/tweeter.com' className="navlink"> <img src={ifive} alt='Tweeter' /> </NavLink>
          <NavLink to='/LinkdIn.com' className="navlink"> <img src={isix} alt='LInkdin' /> </NavLink>
          <NavLink to='/Gafat.location.com' className="navlink"> <img src={iseven} alt='Location' /> </NavLink>
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>

        {/* <NavLink to='/home' ><button>Get Our Company Profile</button></NavLink> */}
      </div>
      <div className='bottom-footer'>
        <p>@2024 Allright Reserved By TwoZ Tech</p>
      </div>
    </div>

  </>)
}

export default Footer