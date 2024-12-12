import React, { useEffect, useRef, useState } from 'react';
import { FaUserTie, FaUsers, FaHandsHelping, FaBriefcase } from 'react-icons/fa';
import './amount.css'

import { BiAbacus } from "react-icons/bi";
import { BiUserCheck } from "react-icons/bi";
import { BsBank } from "react-icons/bs";
import { BsFillBarChartLineFill } from "react-icons/bs";

// Scrollable count component
const ScrollAmount = ({ targetValue, description, Icon }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCount();
            observer.unobserve(ref.current); // Stop observing after animation
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% is in view
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const animateCount = () => {
    const duration = 2000; 
    const start = 0;
    const end = targetValue;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

  return (
    <div ref={ref} style={{ margin: '100px 0', textAlign: 'center', fontSize: '2em' }}>
      <Icon size={48} />
      <div>{count}+</div>
      <div style={{ fontSize: '1em', color: '#666' }}>{description}</div>
    </div>
  );
};

// Main App component
const Countable = () => {
  return (
    <div className='amount'>
      <h1>Our Achievements</h1>
      <div className='am11'> {/* Spacer for scrolling */}

        <ScrollAmount
          targetValue={14}
          description="Years of Experience"
          Icon={BiAbacus}
        />
        <ScrollAmount
          targetValue={100}
          description="Our Partners"
          Icon={BsBank}
        />
        <ScrollAmount
          targetValue={10000}
          description="Our Employees"
          Icon={BiUserCheck}
        />
        <ScrollAmount
          targetValue={102}
          description="Our Staffs"
          Icon={BsFillBarChartLineFill}
        />
      </div>
    </div>
  );
};

export default Countable;