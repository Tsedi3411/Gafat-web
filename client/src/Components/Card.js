import React from 'react'
import { Card, Row, Col, Button } from 'antd';
import './card.css'

import service1 from '../assets/plice1.jpg';
import service2 from '../assets/patroll.jpg';
import service3 from '../assets/police3.jpg';

import g1 from '../assets/training.jpg'
import g2 from '../assets/Sserv.png'
import g3 from '../assets/straining.jpg'
// import clean from '../assets/ssss.jpg'

// import image1 from '../assets/police2.jpg'
// import image2 from '../assets/police3.jpg'
// import image3 from '../assets/training.jpg'
// import image4 from '../assets/cS.jpg'
import { useNavigate } from 'react-router-dom';


const { Meta } = Card;
function CardList() {
  const navigate = useNavigate()

  const services = [
    {
      id: 1,
      image: service1,
      title: "Guard",
      content: 'Static',
      description: '',
      link: '/provide',
    },
    {
      id: 2,
      image: service2,
      title: "Mobile Patrol",
      content: 'Patrol',
      link: '/provide',
      description: ''
    },
    {
      id: 3,
      image: service3,
      title: "Mining Security",
      content: 'Security',
      link: '/provide',
      description: ''
    },

    {
      id: 4,
      image: g1,
      title: "Training",
      content: 'Advanced Security',
      link: '/provide',
      description: ''
    }

  ];

  return (
    <div className='card-list'>
      <div className='upper-cl'>
        <h1>Service We Provide</h1>
      </div>
      <div className='loweer-cl' >
        <Row gutter={16}>
          {services.map((card) => (<div className='colsr'>
            <Col span={8} key={card.id}>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt={card.title} src={card.image} />}
              >
                <Meta title={card.title} description={card.description} />
                <Button onClick={() => {
                  navigate(`${card.link}`, { state: { id: card.id } }); window.scrollTo({
                    top: 0,
                    behavior: 'instant', // Use 'auto' for an instant scroll without animation
                  });
                }}>Read More</Button>
              </Card>
            </Col>
          </div>))}
        </Row>
      </div>
    </div>)
}

export default CardList