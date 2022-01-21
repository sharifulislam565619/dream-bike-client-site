import React from 'react';
import img from '../../../../images/sharif.png';
import Footer from '../../../Shared/Footer/Footer';
import Navigation from '../../../Shared/Navigation/Navigation';
import './About.css';

const About = () => {
   return (
      <>
         <Navigation></Navigation>
         <div className="container pb-3 my-5 about" id="about">
            <h2 className="pt-4 text-primary">About us</h2>
            <hr />
            <div className="row">
               <div data-aos='zoom-in' className="col-md-5">
                  <img className="img-fluid" src={img} alt="" />
               </div>
               <div data-aos='fade-left' className="col-md-7">
                  <p className="text-start p-3">
                     This is Shariful islam. I'm full stack web developer (MERN). If you want to create a responsive website. I'll create your website as you like. I'm Specialized in Html5, CSS3, Bootstrap, ReactBootstrap, MaterialUi, Tailwind, Javascript, ReactJS, NodeJS, ExpressJS, MongoDB, Firebase Authentication. I would love to work on your projects. If you have any questions do not hesitate to contact me I'll do your work. I work fast and you will get guaranteed quality results.
                  </p>
               </div>
            </div>
         </div>
         <Footer></Footer>
      </>
   );
};

export default About;