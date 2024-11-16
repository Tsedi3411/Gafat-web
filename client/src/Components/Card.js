import React from 'react'
import { Card, Row, Col } from 'antd';
import './card.css'

import image1 from '../assets/police2.jpg'
import image2 from '../assets/police3.jpg'
import image3 from '../assets/training.jpg'
import image4 from '../assets/cS.jpg'

const { Meta } = Card;
function CardList() {
    const slides = [
        {
          image: image1,
          title: 'Security Service',
          description: 'Trained security guards monitor premises, control access, and respond to incidents.',
        },
        {
          image: image2,
          title: 'Human Resources Service',
          description: 'Establishing systems for evaluating employee performance, including feedback.',
        },
        {
          image: image3,
          title: 'Training & Consultancy HR & Security Service',
          description: 'Providing personal protection for individuals at risk due to their occupation or public profile.',
        },
          {
            image: image4,
            title: 'Cleaning Service',
            description: ': Routine cleaning tasks such as dusting, vacuuming, mopping, and bathroom sanitation.',
          },
      ];
  return (
    <div className='card-list'>
        <div className='upper-cl'>
        <h1>Service We Provide</h1>
        </div>
        <div className='loweer-cl'>
    <Row gutter={16}>
    {slides.map((card) => ( <div className='colsr'>
      <Col span={8} key={card.id}>
        <Card
          hoverable
          style={{ width: 240}}
          cover={<img alt={card.title} src={card.image} />}
        >   
        <Meta title={card.title} description={card.description} />
        </Card>
      </Col>
      </div> ))}
  </Row>
  </div>
  </div>)
}

export default CardList