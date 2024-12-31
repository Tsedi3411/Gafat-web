import React from 'react';
import { Card, Row, Col, Button, Image } from 'antd';
import './card.css';

import service1 from '../assets/bb1.jpg';
import service2 from '../assets/patroll.jpg';
import service3 from '../assets/pp3.jpg';
import g1 from '../assets/training.jpg';

import { useNavigate } from 'react-router-dom';

const { Meta } = Card;

function CardList() {
  const navigate = useNavigate();

  const services = [
    {
      id: 1,
      image: service1,
      title: "Guard service",
      description: '',
      link: '/provide',
    },
    {
      id: 2,
      image: service2,
      title: "Mobile Patrol",
      description: '',
      link: '/provide',
    },
    {
      id: 3,
      image: service3,
      title: "Bank Security",
      description: '',
      link: '/provide',
    },
    {
      id: 4,
      image: g1,
      title: "Training",
      description: '',
      link: '/provide',
    },
  ];

  return (
    <div className='card-list'>
      <div className='upper-cl'>
        <h1>Service We Provide</h1>
      </div>
      <div className='loweer-cl'>
        <Row gutter={16}>
          {services.map((card) => (
            <Col
              xs={24}
              sm={12}
              md={12}
              lg={6}
              span={8}
              key={card.id}
            >
              <Card
                hoverable
                style={{ width: 240, height: 300, marginBottom: 16 }}
                cover={
                  <div className="image-container">
                    <Image
                      alt={card.title}
                      src={card.image}
                      style={{ height: 200, width: '100%', objectFit: 'cover' }}
                    />
                  </div>
                }
              >
                <Meta title={card.title} description={card.description} />
                <Button
                  onClick={() => {
                    navigate(`${card.link}`, { state: { id: card.id } });
                    window.scrollTo({ top: 0, behavior: 'instant' });
                  }}
                >
                  Read More
                </Button>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
      <style jsx>{`
        .image-container {
          overflow: hidden;
          height: 200px; /* Ensure the height is consistent */
          transition: transform 0.3s ease;
        }
        .image-container:hover {
          transform: scale(1.2);
        }
      `}</style>
    </div>
  );
}

export default CardList;