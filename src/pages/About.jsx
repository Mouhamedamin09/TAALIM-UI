import React, { useState } from "react";
import img1 from "../public/Online learning-bro.png";
import img2 from "../public/Course app-pana.png";
import img3 from "../public/Online learning-amico.png";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

export default function About() {
  const [isActive, setIsActive] = useState(false);

  const toggleAccordion = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="About-page">
      <div className="cont-about1" data-aos="fade-up"  data-aos-duration="1500" >
        <img src={img1} width={500} />
        <div className="toRegister">
          <p>
            Welcome to our course site, your ultimate destination for online
            learning. Explore our extensive course catalog, engage with expert
            instructors, and unlock your full potential. Join us today and
            embark on a transformative educational journey.
          </p>
          <Link to="/register" className="pricing-btn" style={{ cursor: "pointer", fontSize: 24 }}>
            Join Now
          </Link>
        </div>
      </div>
      <div className="cont-about2">
        <div className={`contentBX ${isActive ? 'active1' : ''}`} onClick={toggleAccordion}>
          <div className="label" data-aos="fade-right" data-aos-duration="1500" data-aos-once="true">
          Join Taamim Talk for easy online learning
            <div className="content">
              <p>Master new skills effortlessly with Taalim Talk's online courses—convenience and flexibility for seamless learning</p>
            </div>
          </div>
        </div>
        <img src={img2} width={500} data-aos="fade-left" data-aos-duration="1500" data-aos-once="true" />
      </div>
      <div className="cont-about3">
        <img src={img3} width={500} data-aos="fade-right" data-aos-duration="1500" data-aos-once="true" />
        <div className={`contentBX ${isActive ? 'active1' : ''}`} onClick={toggleAccordion}>
          <div className="label" style={{color:"white"}} data-aos="fade-left" data-aos-duration="1500" data-aos-once="true" >
          Embrace easy online learning with Taamim Talk
            <div className="content">
              <p>Master new skills effortlessly with Taalim Talk's online courses—convenience and flexibility for seamless learning</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
