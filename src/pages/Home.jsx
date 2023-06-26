import React from "react";
import { Link } from "react-router-dom";
import note from '../public/img-hero.png';
import img from '../public/Knowledge-pana.png'


export default function Home() {


    
  return (
    <>
      <div className="container-home">
        <h1 className="Phrase" data-aos="fade-up"
     data-aos-anchor-placement="top-center"
     data-aos-duration="1500">Elevate your learning journey with us!</h1>
        <h1 className="under-Phrase"  data-aos="fade-up"
     data-aos-anchor-placement="top-center"
     data-aos-duration="1500"
     data-aos-delay="300">Discover a diverse array of online courses, tailored to expand your knowledge and skills, empowering you to thrive in an ever-evolving world. Explore and excel with us today!</h1>
        <Link className="pricing-btn" to="/pricing">Get Started &#128218;</Link>
        <img className="note" src={note} alt="Note" />
      </div>
      <section className="about" >
		<div className="container-imgages"  data-aos="fade-right" data-aos-duration="1500" >
			<img src={img} alt="" className="about1" />
		</div>
		<div className="contain-text" data-aos="fade-left" data-aos-duration="1500" >
			<h1>About <span>TAALIM</span></h1>
			<h5><span>Non-profit</span> site</h5>
			<p>
            Introducing TAALIM, the cutting-edge course website that redefines online learning. With its sleek design and user-friendly interface, TAALIM offers a seamless and intuitive experience for learners of all ages. From academic support to professional development, TAALIM features a diverse range of courses tailored to individual needs. Explore math, science, humanities, languages, and more in its vast library of interactive lessons, multimedia content, and immersive virtual environments. Collaborate and connect with instructors and fellow learners through integrated discussion forums and real-time messaging features. With personalized learning paths and adaptive assessments, TAALIM ensures that students grasp concepts at their own pace. Accessible on mobile devices, TAALIM allows learners to engage anytime, anywhere. Embrace the future of education with TAALIM and unlock your full potential on a lifelong journey of learning and growth.</p>
		</div>
	</section>
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>Explore our diverse courses designed to empower learners and unlock their full potential.</p>
        </div>
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: info@taalim.com</p>
          <p>Phone: +1 123 456 7890</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <ul className="social-links">
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} TAALIM. All rights reserved.</p>
      </div>
    </footer>
    </>
  );
}
