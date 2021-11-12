import React from 'react';
import { Carousel } from 'react-bootstrap';
import Typewriter from 'typewriter-effect';
import bg from '../../../../images/bg1.jpg';
import bg3 from '../../../../images/bg2.jpg';
import './Banner.css';

const Banner = () => {
   return (
      <Carousel fade className="banner">
         <Carousel.Item>
            <img
               className="d-block w-100"
               src='https://i.ibb.co/MMSLXyh/racing-hero.jpg'
               alt="First slide"
            />
            <Carousel.Caption>
               <Typewriter
                  options={{
                     strings: `Buy the bike of your dreams`,
                     autoStart: true,
                     loop: true,
                  }}
               />

            </Carousel.Caption>
         </Carousel.Item>
         <Carousel.Item>
            <img
               className="d-block w-100"
               src={bg}
               alt="Second slide"
            />

            <Carousel.Caption>
               <Typewriter
                  options={{
                     strings: `Buy the bike of your dreams`,
                     autoStart: true,
                     loop: true,
                  }}
               />
            </Carousel.Caption>
         </Carousel.Item>
         <Carousel.Item>
            <img
               className="d-block w-100"
               src={bg3}
               alt="Third slide"
            />

            <Carousel.Caption>
               <Typewriter
                  options={{
                     strings: `Buy the bike of your dreams`,
                     autoStart: true,
                     loop: true,
                  }}
               />
            </Carousel.Caption>
         </Carousel.Item>
      </Carousel>
   );
};

export default Banner;