import React from 'react';
import img from '../../../../images/sharif.png';
import Footer from '../../../Shared/Footer/Footer';
import Navigation from '../../../Shared/Navigation/Navigation';
import './About.css';

const About = () => {
   return (
      <>
         <Navigation></Navigation>
         <div className="container pb-3 mt-3 about" id="about">
            <h2 className="pt-4 text-primary">About us</h2>
            <hr />
            <div className="row">
               <div data-aos='zoom-in' className="col-md-5">
                  <img className="img-fluid" src={img} alt="" />
               </div>
               <div data-aos='fade-left' className="col-md-7">
                  <p className="text-start p-3">
                     Founded in 2020 in Amsterdam, dream-bike.com has grown from a small Dutch start-up to one of the world’s leading digital travel companies. Part of buy bike Inc.  dream-bike.com’s mission is to make it easier for everyone to experience the world.

                     By investing in technology that takes the friction out of businesses, dream-bike.com seamlessly connects millions of travelers to memorable experiences, a variety of transportation options, and incredible places to stay – from homes to hotels, and much more. As one of the world’s largest travel marketplaces for both established brands and entrepreneurs of all sizes, dream-bike.com enables properties around the world to reach a global audience and grow their businesses.
                  </p>
               </div>
            </div>
         </div>
         <Footer></Footer>
      </>
   );
};

export default About;