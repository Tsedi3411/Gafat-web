import React from 'react'
import './contact.css'
import { NavLink } from 'react-router-dom'

function Contact() {
    return (
        <div className='contact'>
            <form action='' method=''>
                <input type='text' placeholder='Your Name' />
                <input type='text' placeholder='Your Email' />
                <input type='text' placeholder='Your Phone' />
                <textarea cols={3} rows={10}>Your Message</textarea>
                <NavLink to='/'><button>Send Message</button></NavLink>     
            </form>
        </div>
    )
}

export default Contact
