import React, { useEffect, useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import Rating from 'react-rating';
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import userPhoto from '../../../../images/userPhoto.png';



SwiperCore.use([Autoplay]);
const Reviews = () => {

   const [reviews, setReviews] = useState([])
   const [valueButton, setValueButton] = useState("See more")
   const [isShown, setShow] = useState(false);

   const handleMore = () => {
      setShow(true)
      if (isShown) {
         setValueButton("See Less");
      } else {
         setValueButton("See More");
      }
   }

   useEffect(() => {
      fetch("https://fathomless-taiga-77170.herokuapp.com/reviews")
         .then(res => res.json())
         .then(data => setReviews(data))
         .catch(() => {

         })
   }, [])


   return (
      <div data-aos="fade-up" className="my-5 py-5">
         <h2 className="mt-3 text-success">Customer review</h2>
         <hr className="w-25 mx-auto" />
         <Container>
            <Swiper

               autoplay={{ delay: 2000 }}
               disableOnInteraction={false}
               spaceBetween={50}
               slidesPerView={2}
               onSlideChange={() => console.log('slide change')}
               onSwiper={(swiper) => console.log(swiper)}
            >

               {
                  reviews.map(review => <SwiperSlide
                     key={review._id}
                     xm={12} sm={12} lg={6} md={6}
                     className="g-4"

                  >
                     <Card style={{ backgroundColor: 'rgb(12 1 71)', color: '#fff' }} className="p-3">
                        <div className="d-flex align-items-center ms-3">
                           <Card.Img variant="top" style={{ width: '70px', height: "70px", borderRadius: '50%', backgroundColor: '#22174B' }} className="m-0 my-2" src={review?.photoURL || userPhoto} />
                           <div className="ms-3">
                              <Card.Title>
                                 {review?.name}
                              </Card.Title>

                              <Rating style={{ color: 'goldenRod' }}
                                 initialRating={review?.rating}
                                 emptySymbol="far fa-star"
                                 fullSymbol="fas fa-star"
                                 readonly
                              />
                           </div>
                        </div>
                        <Card.Text className="text-start">
                           <small> {!isShown ? review?.comment.slice(0, 100)
                              : review?.comment.slice(0, review?.comment?.length)}...
                              <button onClick={() => handleMore()}>{valueButton}</button>
                           </small>
                        </Card.Text>
                     </Card>

                  </SwiperSlide>)
               }
            </Swiper>
         </Container>
      </div>
   );
};

export default Reviews;