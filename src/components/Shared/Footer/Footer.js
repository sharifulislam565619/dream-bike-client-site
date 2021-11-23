import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';


const Footer = () => {
   return (
      <div className="footer py-3">
         <div data-aos='fade-right' className="social_icon my-2">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-linkedin"></i>
            <i className="fab fa-pinterest"></i>
         </div>
         <div >
            <Link to="/">Privacy Policy</Link>
            <Link to="/">Terms & Conditions</Link>
            <Link to="/">Privacy Policy</Link>
            <Link to="/">Contact Us</Link>
         </div>
         <div data-aos='zoom-in'>
            <h6 className="mt-3"><small>&copy; 2021 By Shariful islam</small></h6>
         </div>

      </div>
   );
};

export default Footer;