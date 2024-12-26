import React, { useEffect, useState } from 'react';
import './news.css';
import './newsDetail.css';
import './provide.css';
import { NavLink, useLocation, useParams } from 'react-router-dom';


import service1 from '../assets/plice1.jpg';
import service3 from '../assets/police3.jpg';
import cl from '../assets/cS.jpg';
import pat from '../assets/pat.jpg'
import training from '../assets/training.jpg'
import vip from '../assets/vip.jpg'
import min from '../assets/min.jpg'
import cctv from '../assets/cctv.jpg'
import eve from '../assets/eve.jpg'

import event from '../assets/event.jpg'
import cctvv from '../assets/cctvv.jpg'
import mine from '../assets/mining.jpg'
import g1 from '../assets/sguard.jpg'
import g2 from '../assets/Sserv.png'
import g3 from '../assets/straining.jpg'
import g4 from '../assets/patroll.jpg'
import clean from '../assets/clll.jpg'
import vp from '../assets/vipp.jpg'

import hos1 from '../assets/ss1.jpg'
import hos2 from '../assets/ss2.jpg'

import axios from 'axios';
import { Image } from 'antd';


function Provide() {
    const location = useLocation();
    const services = [
        {
            id: 1,
            image: service3,
            title: "Guard Security",
            content: 'Static',
            description: {
                title: "Guard Services",
                brif: 'We tailor our guard services to meet the specific needs of each client, whether for static security, mobile patrols, or event security. Whether for residential complexes, commercial establishments, or special events, our trained security guards ensure a safe and secure environment.',
                image: g1,
                link: '/provide/1',
                features: [
                    'Professional static guard services for various events.',
                    'Trained to handle any situation with expertise.',
                    'Available 24/7 for your security needs.',
                    'Manage entry points, verifying identities and controlling access to restricted areas to prevent unauthorized entry.'
                ],
                contactInformation: {
                    desc: 'Our Guard Service offers professional security personnel dedicated to protecting your assets, ensuring safety, and providing peace of mind.',
                    phone: '+251-913-152-743',
                    email: 'guards@example.com'
                }
            },
        },
        {
            id: 2,
            image: pat,
            title: "Mobile Patrols",
            content: 'Patrol',
            link: '/provide/2',
            description: {
                title: "Mobile Patrol Services",
                brif: 'Our trained security personnel conduct frequent patrols of designated areas, providing a visible presence that deters potential threats.Patrols cover large areas, ensuring thorough monitoring of all premises, including parking lots, entrances, and vulnerable spots.',
                image: g4,
                features: [
                    'Mobile patrol services across larger areas.',
                    'Regular checks and quick response to incidents.',
                    'Enhanced visibility deters potential threats.',
                    'We provide customized patrol plans tailored to your specific needs and site requirements, ensuring optimal security',
                    'We provide regular reporting with detailed logs of patrol activities, incidents, and observations to keep you informed.',
                    'We provide community engagement, building relationships that foster a safer environment through our visible presence.'
                ],
                contactInformation: {
                    desc: 'Our Mobile Patrol Service provides proactive security solutions that ensure the safety and security of your premises.',
                    phone: '+251-908-333-377',
                    email: 'patrol@example.com'
                }
            }
        },
        {
            id: 3,
            image: min,
            title: "Bank Security",
            content: 'Security',
            link: '/provide/3',
            description: {
                title: "Mining Security Solutions",
                brif: 'We Provide Mining Security Service specifically designed to address the unique security challenges faced by mining operations.',
                image: mine,
                features: [
                    'Specialized security solutions for mining operations.',
                    'Risk assessments and tailored security plans.',
                    'Continuous monitoring for safety compliance.'
                ],
                contactInformation: {
                    desc: 'Our Mining Security Service is specifically designed to address the unique challenges and risks associated with mining operations.',
                    phone: '+251-913-152-743',
                    email: 'mining@example.com'
                }
            }
        },

        {
            id: 4,
            image: training,
            title: "Training",
            content: 'Advanced Security',
            link: '/provide/4',
            description: {
                title: "Training Programs",
                brif: 'All sensitive information is encrypted both in transit and at rest, ensuring that unauthorized users cannot access or read data. We have a robust incident response strategy in place, ready to address any potential security breaches swiftly and effectively',
                image: g3,
                features: [
                    'Comprehensive training programs for security personnel.',
                    'Focus on emergency response and conflict resolution.',
                    'Regular updates on best practices and regulations.'
                ],
                contactInformation: {
                    desc: 'Our Advanced Security Service provides cutting-edge solutions designed to protect your assets, personnel, and property through the integration of technology, expert personnel, and tailored security strategies. This service is ideal for businesses and organizations seeking comprehensive security measures that adapt to evolving threats.',
                    phone: '+251-913-152-743',
                    email: 'training@example.com'
                }
            }
        },
        {
            id: 5,
            image: eve,
            title: "Event Security",
            link: '/provide/5',
            content: 'Security',
            description: {
                title: "Event Security Services",
                brif: 'Our HR Security Services are specifically designed to address the unique challenges faced by organizations in managing human resources securely. With a focus on safeguarding personnel data, ensuring compliance, and protecting sensitive information, our experienced HR professionals',
                image: event,
                features: [
                    'Dedicated security for events of all sizes.',
                    'Coordination with event organizers for seamless execution.',
                    'Crowd management and emergency response planning.'
                ],
                contactInformation: {
                    desc: 'Our Event Security Service is designed to provide comprehensive security solutions for events of all sizes, ensuring the safety of attendees, staff, and assets. From corporate gatherings and concerts to festivals and private parties, our experienced security team is dedicated to creating a secure and enjoyable environment for all participants.',
                    phone: '+251-913-152-743',
                    email: 'eventsecurity@example.com'
                }
            }
        },
        {
            id: 6,
            image: vip,
            title: "VIP Protection",
            link: '/provide/6',
            content: 'Protection',
            description: {
                title: "VIP Protection Services",
                brif: 'protection services are specifically designed to address the unique challenges faced by organizations in safeguarding their most valuable assets—people and information. With a dedicated focus on enhancing workplace safety and security,',
                image: vp,
                features: [
                    'Personalized security solutions for VIPs.',
                    'Discrete and professional security measures.',
                    'Risk assessment and route planning.'
                ],
                contactInformation: {
                    desc: 'Our VIP Protection Service offers elite security solutions tailored to safeguard high-profile individuals, including celebrities, executives, and dignitaries. With a focus on discretion, professionalism, and comprehensive planning, our experienced security personnel provide the highest level of protection, ensuring safety in any environment.',
                    phone: '+251-913-152-743',
                    email: 'vipprotection@example.com'
                }
            }
        },
        {
            id: 7,
            image: cctv,
            title: "CCTV Monitoring",
            link: '/provide/7',
            content: 'Monitoring',
            description: {
                title: "CCTV Monitoring Services",
                brif: 'CCTV monitoring services are specifically designed to enhance security for organizations across various industries. With a focus on safeguarding personnel, assets, and property, our experienced security team utilizes state-of-the-art technology to deliver real-time surveillance solutions.',
                image: cctvv,
                features: [
                    'State-of-the-art CCTV monitoring services.',
                    '24/7 surveillance with real-time alerts.',
                    'Detailed reporting and incident analysis.'
                ],
                contactInformation: {
                    desc: 'Our CCTV Monitoring Service provides advanced surveillance solutions designed to enhance security and protect your property, assets, and personnel. Utilizing state-of-the-art technology, we offer 24/7 monitoring and real-time alerts to ensure a proactive approach to security management.',
                    phone: '+251-913-152-743',
                    email: 'cctv@example.com'
                }
            }
        },
        {
            id: 8,
            image: hos1,
            title: "Hospital Security",
            link: '/provide/8',
            content: 'security',
            description: {
                title: "Cleaning Services",
                brif: 'Tailored cleaning schedules based on client needs, whether for regular maintenance or one-time deep cleaning. Our Cleaning Services aim to create clean, safe, and inviting environments, enhancing overall well-being and productivity',
                image: hos2,
                features: [
                    'Professional cleaning services to maintain a safe environment.',
                    'Regular and deep cleaning tailored to your needs.',
                    'Use of eco-friendly products and methods.',
                    'deep cleaning, carpet cleaning, window washing, and more',
                    'Options for daily, weekly, or monthly services '
                ],
                contactInformation: {
                    desc: 'Our Cleaning Service delivers professional and comprehensive cleaning solutions tailored to meet the needs of residential, commercial, and industrial clients. With a commitment to quality and customer satisfaction, we ensure that your spaces are clean, safe, and inviting.',
                    phone: '+251-913-152-743',
                    email: 'cleaning@example.com'
                }
            }
        },
        {
            id: 9,
            image: cl,
            title: "Cleaning Services",
            link: '/provide/8',
            content: 'Cleaning',
            description: {
                title: "Cleaning Services",
                brif: 'Tailored cleaning schedules based on client needs, whether for regular maintenance or one-time deep cleaning. Our Cleaning Services aim to create clean, safe, and inviting environments, enhancing overall well-being and productivity',
                image: clean,
                features: [
                    'Professional cleaning services to maintain a safe environment.',
                    'Regular and deep cleaning tailored to your needs.',
                    'Use of eco-friendly products and methods.',
                    'deep cleaning, carpet cleaning, window washing, and more',
                    'Options for daily, weekly, or monthly services '
                ],
                contactInformation: {
                    desc: 'Our Cleaning Service delivers professional and comprehensive cleaning solutions tailored to meet the needs of residential, commercial, and industrial clients. With a commitment to quality and customer satisfaction, we ensure that your spaces are clean, safe, and inviting.',
                    phone: '+251-913-152-743',
                    email: 'cleaning@example.com'
                }
            }
        },

    ];





    // const [services, setServices] = useState([]);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);

    // useEffect(() => {
    //     const fetchServices = async () => {
    //       try {
    //         const response = await axios.get('http://192.168.8.30:5000/api/posts/services');
    //         setServices(response.data); 
    //       } catch (err) {
    //         setError(err.message);
    //       } finally {
    //         setLoading(false); 
    //       }
    //     };
    
    //     fetchServices();
    //   }, []);

    const { id } = location.state || {}
    console.log(id)

    const [selectedService, setSelectedService] = useState(id?id:1);

    

    const handleReadMore = (service) => {
        console.log(service)
        setSelectedService(service);
    };

    return (
        <>

            <div className='TNews'>
                <h1>Our Services</h1>
                <div className='tserv'>
                    <div className='minimized-service'>
                        <h2>Services We Provide</h2>
                        {services.map(item => (
                            <div className='news minimized' key={item.id}>
                                <div className='contentes'>
                                    <h3>{item.title}</h3>
                                    <NavLink onClick={() => handleReadMore(item.id)}>{item.content}</NavLink>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className='newsD'>
                        <div>
                            {services.filter(d=>selectedService===d.id).map((d)=>
                                <div key={d.id}>
                                    <div className='upper-ppp'>
                                        <img src={d.image} alt={d.title} 
                                        />
                                    </div>

                                    <div className='lower-ppp'>
                                        <h1>{d.description.title}</h1>
                                        <p>{d.description.brif}</p>
                                        <div className='im-info'>
                                            <div>
                                                <h2>Why Choose Us</h2>
                                                <ul>
                                                    {d.description.features.map((feature, index) => (
                                                        <li key={index}>{feature}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <Image src={d.description.image} alt={d.description.title} 
                                            style={{width:350, height:400 }}/>
                                        </div>
                                        <h2>Contact Us</h2>
                                        <p>{d.description.contactInformation.desc}</p>
                                        <p>Phone: {d.description.contactInformation.phone}</p>
                                        <p className='em'>Email: <a href={`mailto:${d.description.contactInformation.email}`}>{d.description.contactInformation.email}</a></p>
                                    </div>
                                    <h2>Overview</h2>
                                    <p>Our services ensure top-notch security solutions tailored to your needs:</p>
                                    <ul>
                                        <li>Comprehensive risk assessments</li>
                                        <li>24/7 monitoring and support</li>
                                        <li>Customized security plans</li>
                                    </ul>
                                </div>
                            )}
                                <>
                                    <h1>Service We Provide</h1>
                                    <h3>Recruitment and Talent Acquisition</h3>
                                    <p>We specialize in identifying, attracting, and onboarding top talent.</p>
                                </>
                        </div>
                    </div>
                </div>
            </div>
        </>);
}

export default Provide;