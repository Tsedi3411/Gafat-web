import React, { useState } from 'react';
import service1 from '../assets/plice1.jpg';
import service2 from '../assets/police2.jpg';
import service3 from '../assets/police3.jpg';
import './news.css';
import './newsDetail.css';
import './provide.css';
import { NavLink } from 'react-router-dom';

function Provide() {
    const [selectedService, setSelectedService] = useState(null);

    const services = [
        {
            id: 1,
            image: service1,
            title: "Guard",
            content: 'Static',
            description: {
                title: "Guard Services",
                brif: 'We tailor our guard services to meet the specific needs of each client, whether for static security, mobile patrols, or event security. Whether for residential complexes, commercial establishments, or special events, our trained security guards ensure a safe and secure environment.',
                image: service1,
                features: [
                    'Professional static guard services for various events.',
                    'Trained to handle any situation with expertise.',
                    'Available 24/7 for your security needs.',
                    'available around the clock, providing continuous protection ',
                    'manage entry points, verifying identities and controlling access to restricted areas to prevent unauthorized entry'
                ],
                contactInformation: {
                    desc: 'Our Guard Service offers professional security personnel dedicated to protecting your assets, ensuring safety, and providing peace of mind. Whether for residential properties, commercial establishments, or special events, our trained security guards are equipped to handle various situations with vigilance and professionalism.',
                    phone: '123-456-7890',
                    email: 'guards@example.com'
                }
            },
        },
        {
            id: 2,
            image: service2,
            title: "Mobile Patrol",
            content: 'Patrol',
            description: {
                title: "Mobile Patrol Services",
                brif: 'Our trained security personnel conduct frequent patrols of designated areas, providing a visible presence that deters potential threats. We work with clients to develop tailored patrol routes and schedules that meet specific security requirements and address unique vulnerabilities.',
                image: service2,
                features: [
                    'Mobile patrol services across larger areas.',
                    'Regular checks and quick response to incidents.',
                    'Enhanced visibility deters potential threats.',
                    'Patrol officers utilize technology to document their activities and report incidents in real time',
                    'Can integrated with existing surveillance systems for enhanced monitoring'
                ],
                contactInformation: {
                    desc: 'Our Mobile Patrol Service provides proactive security solutions that ensure the safety and security of your premises through regular, scheduled, and random patrols. Ideal for commercial properties, residential areas, and special events, our mobile patrols are designed to deter crime and respond swiftly to incidents.',
                    phone: '234-567-8901',
                    email: 'patrol@example.com'
                }
            }
        },
        {
            id: 3,
            image: service3,
            title: "Mining Security",
            content: 'Security',
            description: {
                title: "Mining Security Solutions",
                brif: 'We Provide Mining Security Service is specifically designed to address the unique security challenges faced by mining operations. With a focus on protecting personnel, equipment, and assets, our experienced security team provides comprehensive solutions tailored to the mining industry',
                image: service3,
                features: [
                    'Specialized security solutions for mining operations.',
                    'Risk assessments and tailored security plans.',
                    'Continuous monitoring for safety compliance.',
                    'trained in emergency response protocols specific to mining operations',
                    'Strict access control measures are implemented to ensure only authorized personnel ',
                    'Detailed reports on security activities and incidents are provided'
                ],
                contactInformation: {
                    desc: 'Our Mining Security Service is specifically designed to address the unique challenges and risks associated with mining operations. With a focus on safeguarding personnel, equipment, and assets, our experienced security professionals implement comprehensive security measures tailored to the mining industry.',
                    phone: '345-678-9012',
                    email: 'mining@example.com'
                }
            }
        },
        {
            id: 4,
            image: service3,
            title: "Training",
            content: 'Advanced Security',
            description: {
                title: "Training Programs",
                brif: 'All sensitive information is encrypted both in transit and at rest, ensuring that unauthorized users cannot access or read data. We have a robust incident response strategy in place, ready to address any potential security breaches swiftly and effectively',
                image: service3,
                features: [
                    'Comprehensive training programs for security personnel.',
                    'Focus on emergency response and conflict resolution.',
                    'Regular updates on best practices and regulations.'
                ],
                contactInformation: {
                    desc: 'Our Advanced Security Service provides cutting-edge solutions designed to protect your assets, personnel, and property through the integration of technology, expert personnel, and tailored security strategies. This service is ideal for businesses and organizations seeking comprehensive security measures that adapt to evolving threats.',
                    phone: '456-789-0123',
                    email: 'training@example.com'
                }
            }
        },
        {
            id: 5,
            image: service3,
            title: "Event Security",
            content: 'Security',
            description: {
                title: "Event Security Services",
                brif: 'Our HR Security Services are specifically designed to address the unique challenges faced by organizations in managing human resources securely. With a focus on safeguarding personnel data, ensuring compliance, and protecting sensitive information, our experienced HR professionals',
                image: service3,
                features: [
                    'Dedicated security for events of all sizes.',
                    'Coordination with event organizers for seamless execution.',
                    'Crowd management and emergency response planning.'
                ],
                contactInformation: {
                    desc: 'Our Event Security Service is designed to provide comprehensive security solutions for events of all sizes, ensuring the safety of attendees, staff, and assets. From corporate gatherings and concerts to festivals and private parties, our experienced security team is dedicated to creating a secure and enjoyable environment for all participants.',
                    phone: '567-890-1234',
                    email: 'eventsecurity@example.com'
                }
            }
        },
        {
            id: 6,
            image: service3,
            title: "VIP Protection",
            content: 'Protection',
            description: {
                title: "VIP Protection Services",
                brif: 'protection services are specifically designed to address the unique challenges faced by organizations in safeguarding their most valuable assets—people and information. With a dedicated focus on enhancing workplace safety and security,',
                image: service3,
                features: [
                    'Personalized security solutions for VIPs.',
                    'Discrete and professional security measures.',
                    'Risk assessment and route planning.'
                ],
                contactInformation: {
                    desc: 'Our VIP Protection Service offers elite security solutions tailored to safeguard high-profile individuals, including celebrities, executives, and dignitaries. With a focus on discretion, professionalism, and comprehensive planning, our experienced security personnel provide the highest level of protection, ensuring safety in any environment.',
                    phone: '678-901-2345',
                    email: 'vipprotection@example.com'
                }
            }
        },
        {
            id: 7,
            image: service3,
            title: "CCTV Monitoring",
            content: 'Monitoring',
            description: {
                title: "CCTV Monitoring Services",
                brif: 'CCTV monitoring services are specifically designed to enhance security for organizations across various industries. With a focus on safeguarding personnel, assets, and property, our experienced security team utilizes state-of-the-art technology to deliver real-time surveillance solutions.',
                image: service3,
                features: [
                    'State-of-the-art CCTV monitoring services.',
                    '24/7 surveillance with real-time alerts.',
                    'Detailed reporting and incident analysis.'
                ],
                contactInformation: {
                    desc: 'Our CCTV Monitoring Service provides advanced surveillance solutions designed to enhance security and protect your property, assets, and personnel. Utilizing state-of-the-art technology, we offer 24/7 monitoring and real-time alerts to ensure a proactive approach to security management.',
                    phone: '789-012-3456',
                    email: 'cctv@example.com'
                }
            }
        },
        {
            id: 8,
            image: service3,
            title: "Cleaning Services",
            content: 'Cleaning',
            description: {
                title: "Cleaning Services",
                brif: 'Tailored cleaning schedules based on client needs, whether for regular maintenance or one-time deep cleaning. Our Cleaning Services aim to create clean, safe, and inviting environments, enhancing overall well-being and productivity',
                image: service3,
                features: [
                    'Professional cleaning services to maintain a safe environment.',
                    'Regular and deep cleaning tailored to your needs.',
                    'Use of eco-friendly products and methods.',
                    'deep cleaning, carpet cleaning, window washing, and more',
                    'Options for daily, weekly, or monthly services '
                ],
                contactInformation: {
                    desc: 'Our Cleaning Service delivers professional and comprehensive cleaning solutions tailored to meet the needs of residential, commercial, and industrial clients. With a commitment to quality and customer satisfaction, we ensure that your spaces are clean, safe, and inviting.',
                    phone: '890-123-4567',
                    email: 'cleaning@example.com'
                }
            }
        },
    ];

    const handleReadMore = (service) => {
        setSelectedService(service);
    };

    return (
        <div className='TNews'>
            <div className='minimized-news'>
                <h2>Services We Provide</h2>
                {services.map((item) => (
                    <div className='news minimized' key={item.id}>
                        {/* <img src={item.image} alt={item.title} /> */}
                        <div className='contentes'>
                            <h3>{item.title}</h3>
                            <NavLink onClick={() => handleReadMore(item)}>{item.content}</NavLink>
                        </div>
                    </div>
                ))}
            </div>

            <div className='newsD'>
                {selectedService ? (
                    <div key={selectedService.id}>
                        <div className='upper-ppp'>
                            {/* <h1>{selectedService.title}</h1> */}
                            <img src={selectedService.image} alt={selectedService.title} />
                        </div>

                        <div className='lower-ppp' >
                            <h1>{selectedService.description.title}</h1>
                            <p>{selectedService.description.brif}</p>
                            <div className='im-info'>
                                <div>
                                    <h2>Why Choose Us</h2>
                                    <ul>
                                        {selectedService.description.features.map((feature, index) => (
                                            <li key={index}>{feature}</li>
                                        ))}

                                    </ul>
                                </div>
                                <img src={selectedService.description.image} alt={selectedService.description.title} />
                            </div>
                            <h2>Contact Us</h2>
                            <p>{selectedService.description.contactInformation.desc}</p>
                            <p>Phone: {selectedService.description.contactInformation.phone}</p>
                            <p className='em'>Email: <a href={`mailto:${selectedService.description.contactInformation.email}`}>{selectedService.description.contactInformation.email}</a></p>
                        </div>
                        {/* Additional Overview */}
                        <h2>Overview</h2>
                        <p>Our services ensure top-notch security solutions tailored to your needs:</p>
                        <ul>
                            <li>Comprehensive risk assessments</li>
                            <li>24/7 monitoring and support</li>
                            <li>Customized security plans</li>
                        </ul>
                    </div>
                ) : (
                    <>
                        <h1>Service We Provide</h1>
                        <h3>Recruitment and Talent Acquisition</h3>
                        <p>We specialize in identifying, attracting, and onboarding top talent. Our recruitment strategies are tailored to match candidates with the specific needs of your organization, ensuring a seamless fit for both the employee and employer.</p>
                        <h3>Employee Training and Development</h3>
                        <p>We believe in the continuous growth of your workforce. Our training programs are designed to enhance employee skills, foster leadership, and promote professional development, resulting in a more competent and motivated team.</p>
                        <h3>Performance Management</h3>
                        <p>Our performance management solutions help you set clear expectations, provide constructive feedback, and conduct regular evaluations. We assist organizations in creating a culture of accountability and recognition, driving employee engagement and productivity.</p>
                    </>
                )}
            </div>
        </div>
    );
}

export default Provide;