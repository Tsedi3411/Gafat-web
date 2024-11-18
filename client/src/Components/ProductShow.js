import React, { useEffect, useState } from "react";
import styles from "./productshow.module.css";
import opal1 from "../assets/plice1.jpg";
import opal2 from "../assets/home1.jpg";
import opal3 from "../assets/service.jpg";
import opal4 from "../assets/news.jpg";
import opal5 from '../assets/contact.jpg';

import { NavLink } from "react-router-dom";

const ProductShow = () => {
  const [isVisible, setIsVisible] = useState(false);

  const [selectedItem,setSelectedItem]=useState(1)

  // useEffect(() => {
  //   setIsVisible(true);
  // }, [selectedItem]);

  useEffect(() => {
    setIsVisible(false);
    const interval = setInterval(() => {
      setSelectedItem((prevItem) => (prevItem === 5 ? 1 : prevItem + 1));
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setIsVisible(true);
    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, 7000);
    return () => clearTimeout(timeout);
  }, [selectedItem]);

  const minerals = [
    {
      id: 1,
      name: 'We Are Your Partners in Security & Human Resource.',
      img:opal1,
      description: 'We assess your specific vulnerabilities and create tailored security strategies to mitigate risks effectively, ',
      btn:'About us',
      link:'/about',
    },
    {
      id: 2,
      name: 'Gafat used in best HR Technology Solution.',
      img:opal2,
      description: 'Recognizing innovative software solutions that improve human resource processes, Enhance workplace satisfaction through targeted engagement initiatives, surveys, and recognition programs.',
      btn:'Our Awards',
      link:'/partner',
    },
    {
      id: 3,
      name: 'we specialize in delivering integrated HR and security solutions',
      img:opal3,
      description: 'Streamline your hiring process with our innovative recruitment tools, ensuring you attract and retain top talent.',
      btn:'Our Service',
      link:'/service',
    },
    {
      id: 4,
      name: 'Stay informed with the latest news.',
      img:opal4,
      description: 'Soft sulfate mineral used in construction an mineral used in cement productiond as a fertilizer.',
      btn:'Latest News',
      link:'/news',
    },
    {
      id: 5,
      name: 'You have questions our dedicated team is ready to assist you.',
      img:opal5,
      description: 'On the security front, we’ve upgraded our surveillance technology and expanded our training programs for security personnel.',
      btn:'Contact us',
      link:'/contact',
    },
  ];

  const products=[
    {id:1,rol:'01'},
    {id:2,rol:'02'},
    {id:3,rol:'03'},
    {id:4,rol:'04'},
    {id:5,rol:'05'},
]
  return (
    <div className={styles.box}>
      <div className={styles.cont}>
      <div className={styles.slider}>
        <div className={styles.lines}>{products.map(l=><span key={l.id} style={{background:selectedItem >= l.id?'rgb(164,136,46)':'transparent'}} className={styles.line}></span>)}</div>
        {/* <div className={styles.nums}>{products.map(l=><span key={l.id} style={{background:selectedItem===l.id?'rgb(164,136,46)':'transparent',color:selectedItem===l.id?'white':'rgb(164,136,46)'}}  className={styles.rolnum}>{l.rol}</span>)}</div> */}
        <div className={styles.nums}>{products.map(l=><span key={l.id} style={{background:selectedItem===l.id?'rgb(164,136,46)':'transparent',color:selectedItem===l.id?'white':'rgb(164,136,46)'}} onClick={()=>setSelectedItem(l.id)} className={styles.rolnum}>{l.rol}</span>)}</div>
      </div>
      <div className={styles.contentbox}>
      <div className={styles.content}>
        <span className={isVisible ? styles.title:styles.hiddentitle}>{minerals.find((mineral) => mineral.id === selectedItem).name}</span>
        <span className={isVisible ? styles.description : styles.hiddendes}>{minerals.find((mineral) => mineral.id === selectedItem).description}</span>
        <div className={styles.orderbtnbox}>
          <NavLink className={isVisible ? styles.orderbtn:styles.hiddenorderbtn} to={minerals.find((mineral) => mineral.id === selectedItem).link}>{minerals.find((mineral) => mineral.id === selectedItem).btn}</NavLink>
        </div>
      </div>
      <div className={styles.imgs}><img className={isVisible ? styles.showimg:styles.hideimg} src={minerals.find((mineral) => mineral.id === selectedItem).img} alt="mineral"/></div>
      </div>
    </div>
    </div>
  );
};

export default ProductShow;
