import React from 'react'
import './provide.css'


import image1 from '../assets/police2.jpg'
import image2 from '../assets/police3.jpg'
import image3 from '../assets/plice1.jpg'
import image4 from '../assets/cleaningS.jpg'


function Provide() {

    // const serviceProvide = [
    //     {
    //         image: image1,
    //         title: 'Security Service',
    //         description: 'Security Service'
    //     },
    //     {
    //         image: image2,
    //         title: 'Human Resources Service',
    //         description: 'Providing Human Resources For Different Professions'
    //     },
    //     {
    //         image: image3,
    //         title: 'Training & Consultancy Service',
    //         description: 'Training & Consultancy HR & Security Service'
    //     }, {
    //         image: image4,
    //         title: 'Hr Managment Service',
    //         description: ' provide opportunity of sending to forign Training, Consultancy HR & Security Service and '
    //     }

    // ]
    return (
        <div className='provide'>
            <div className='upper-provide'>
                <h1>Service We Provide</h1>
                <p>We provide security and HR services to many prestige companies throughout in ethiopia. For all situations,
                    we are able to supply fully trained and licensed professionals who are also trained in health and safety.</p>
            </div>
            {/* <div className='imagess'>
            {serviceProvide.map(service => (
                <div className='lower-provide'>
                    <img src={service.image} alt='' />
                    <h2>{service.title}</h2>
                    <p>{service.description}</p>
                </div>

            ))}
            </div> */}

            <div className='middle-provider'>
                <div className='provide-mid'>
                <div className='proo-midd'>
                    <img src={image1} alt='image 1' />
                    <div className='pro-mi'>
                        <h1>Security Service</h1>
                        <p>provide Security Service for our partners</p>
                    </div>
                    </div>
                    <div></div>
                </div>
                <div className='provide-mid'>
                    <div></div>
                    <div className='proo-midd'>
                    <div className='pro-mi'>
                        <h1>Human Resources Service</h1>
                        <p>Providing Human Resources For Different Professions</p>
                    </div>
                    <img src={image2} alt='' />
                    </div>
                </div>
                <div className='provide-mid'>
                <div className='proo-midd'>
               
                    <img src={image3} alt='' />
                    <div className='pro-mi'>
                        <h1>Training & Consultancy Service</h1>
                        <p>Training & Consultancy HR & Security Service</p>
                    </div>
                    </div>
                    <div></div>
                    
                    </div>
                
                <div className='provide-mid'>  
                <div></div>               
                <div className='proo-midd'>
                    <div className='pro-mi'>
                        <h1>Cleaning Service</h1>
                        <p>provide opportunity of sending to forign Training, Consultancy HR & Security Service and</p>
                    </div>
                    <img src={image4} alt='' />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Provide 