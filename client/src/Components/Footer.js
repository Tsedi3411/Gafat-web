import React from 'react'
import './footer.css'
import logo from '../assets/logo.jpg'
import e from '../assets/email.png'

import ione from '../assets/f.png'
import itwo from '../assets/email.png'
import ithree from '../assets/Insta.jpg'
import ifour from '../assets/teleg.jpg'
import ifive from '../assets/tweet.jpg'
import isix from '../assets/in.jpg'
import iseven from '../assets/location.jpg'
import { Link, NavLink } from 'react-router-dom'
import Chatbot from './Chatbot'

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
                          <p>Contact Us</p>
                          <div className='hm'>
                            <icon></icon>
                            <p>Ethiopia, Addis Ababa, Kirkos Sub-City, Woreda 4, House No. 374</p>
                          </div>
                          <div className='ph'>
                            <p>0118682211</p>
                            <p>0913152743</p>
                            <p>0911997390</p>
                            <p>0912642890</p>
                            <p>Fax : +251 114-70 68 32</p>
                          </div>
                          <div className='em'>
                             <icon></icon>
                             <p>info@gafatsecurity.com
                             gafatsecure@gmail.com</p>
                          </div>
                           
                    </div>
                    <div className='upf-13'>
                       <h2>Contact</h2>
                        <form action='' method='' > 
                            <input type='text' placeholder='Your Name' />
                            <input type='text' placeholder='Your Email' />
                            <input type='text' placeholder='Your Phone' />
                            <textarea cols={3} rows={10}>Your Message</textarea>
                            <button>Send Message</button>
                        </form>
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
                <div className=' upf-14'>
                          <h2>Subscribe us</h2>
                           <div className='upf-114'>
                            <input type='text'placeholder='Your Email' />
                            <img src={e} alt='Write Your Email'/> 
                            </div>
                        
                    </div>
              {/* <NavLink to='/home' ><button>Get Our Company Profile</button></NavLink> */}
            </div>
            <div className='bottom-footer'>
                  <p>@2024 Allright Reserved By TwoZ Tech</p>
            </div>
        </div>
        
        </>)
}

export default Footer