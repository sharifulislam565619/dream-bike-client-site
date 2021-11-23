import React from 'react';
import { Card, CardGroup, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Product.css';


const Product = (props) => {
   const { admin } = useAuth()

   const { _id, img, price, description, name } = props.product
   return (
      <Col data-aos="zoom-in" xl={4} lg={4} md={6} sm={12}>
         <CardGroup>
            <Card className="py-3 data-cart">

               <div data-aos='fade-left' className='card-img'>
                  <Card.Img variant="top" className="mx-auto w-50" src={img} />
               </div>

               <Card.Body data-aos='fade-right'>
                  <Card.Title><h6><strong>{name}</strong></h6></Card.Title>
                  <Card.Title><h6><strong>Price:</strong> $ {price}</h6></Card.Title>
                  <Card.Text>
                     <small> {description.slice(0, 50)}...</small>
                  </Card.Text>
               </Card.Body>
               <div data-aos='fade-left'>
                  {!admin && <Link to={`/order/${_id}`}><button className="btn my-button">Buy now</button></Link>}

               </div>

            </Card>
         </CardGroup>
      </Col>
   );
};

export default Product;