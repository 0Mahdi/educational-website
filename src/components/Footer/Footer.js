import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer
      style={{
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        margin: '50px 0', 
        padding: '20px', 
      }}
      className="p-10"
    >
      <div className='footer'>
        <div>
          <span className="footer-title">Permalinks</span>
          <Link to="/" className="link link-hover">Home</Link>
          <Link to="/about" className="link link-hover">About</Link>
          <Link to="/courses" className="link link-hover">Courses</Link>
          <Link to="/contact" className="link link-hover">Contact</Link>
        </div>
        <div>
          <span className="footer-title">Our Services</span>
          <Link to="/" className="link link-hover">Emergency Contact</Link>
          <Link to="/" className="link link-hover">Solving Math</Link>
          <Link to="/" className="link link-hover">24 hours contact</Link>
        </div>
        <div>
          <span className="footer-title">Our Address</span>
          <Link to="/" className="link link-hover">Dhaka - 101010 Mirpur</Link>
        </div>
      </div>
      <div className='text-center mt-32'>
        <p>Copyright © 2023 - All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;