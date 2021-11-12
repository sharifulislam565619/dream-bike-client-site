import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Rating from 'react-rating';

const Reviews = () => {
   const [reviews, setReviews] = useState([])
   console.log(reviews);

   useEffect(() => {
      fetch("http://localhost:5000/reviews")
         .then(res => res.json())
         .then(data => setReviews(data))
   }, [])

   return (
      <div className="my-5">
         <h2 className="mt-3 text-success">Customer review</h2>
         <hr className="w-25 mx-auto" />
         <Container>
            <Row spacing={4}>
               {
                  reviews.map(review => <Col
                     key={review._id}
                     xm={12} sm={12} lg={6} md={6}
                     className="g-4"

                  >
                     <Card className="p-3">
                        <div className="d-flex align-items-center ms-3">
                           <Card.Img variant="top" style={{ width: '70px', height: "70px", borderRadius: '50%' }} className="m-0 my-2" src={review?.photoURL} />
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
                           <small> {review?.comment.slice(0, 250)}...</small>
                        </Card.Text>
                     </Card>

                  </Col>)
               }
            </Row>
         </Container>
      </div>
   );
};

export default Reviews;