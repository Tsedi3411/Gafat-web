import React from 'react'
import './experiance.css'

import a from '../assets/police2.jpg'
import b from '../assets/police3.jpg'
import c from '../assets/plice1.jpg'

function Experiance() {
  return (
    <div className='experiance'>
        <div className='upper-exp'>
          <h1>We have 12 Years of Experience of Security & Human Resource</h1>
          <p>Gafat Security and Human Resources P.L.C established on December 10, 2011.Gafat Security and Human Resource Services 
            is an organization set up to serve the country, its citizens and its customers by filling in the gaps in the security 
            services sector in our country. It is a company that has been established by the country's legal experts and has complied 
            with all legal frameworks.</p>
            <p>The organization was established by military officers who returned to the civil service after serving in various capacities 
                in the Ethiopian Defense Forces. The experts set up the organization to serve their country with their advanced military and
                 security skills, to support the limited service delivery sector and to create jobs for their citizens and contribute to the
                  development of themselves and their country.</p>
        </div>
        <div className='lower-exp'>
             <div className='lower-one'>
                <img src={a} alt='' />
                <p>Teamwork For Success</p>
             </div>
             <div className='lower-one'>
             <img src={b} alt='' />
              <p>Principles For Mutual Benefit</p>
             </div>
             <div className='lower-one'>
             <img src={c} alt='' />
              <p>We Are Law Abiding
              </p>
             </div>
             <div className='lower-one'>
             <img src={c} alt='' />
              <p>Our Existence Is Our Human Resources
                   </p>
             </div>
        </div>
    </div>
  )
}

export default Experiance