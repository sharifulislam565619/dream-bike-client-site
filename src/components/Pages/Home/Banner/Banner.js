import React from 'react';
import { Carousel } from 'react-bootstrap';
import Typewriter from 'typewriter-effect';
import slider_1 from '../../../../images/slider_1.png';
import slider_2 from '../../../../images/slider_2.png';
import slider_3 from '../../../../images/slider_3.png';
import './Banner.css';

const Banner = () => {
   return (
      <Carousel interval={4000} fade className="banner container">
         <Carousel.Item>

            <img
               className="d-block w-100"
               src={slider_1}
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
               src={slider_2}
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
               src={slider_3}
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