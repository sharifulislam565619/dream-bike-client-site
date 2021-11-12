import React from 'react';
import { Card, CardGroup, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Product.css';


const Product = (props) => {

   const { _id, img, price, description, name } = props.product
   return (
      <Col xl={4} lg={4} md={6} sm={12}>
         <CardGroup>
            <Card className="py-3 data-cart">

               <Card.Img variant="top" className="mx-auto w-50" src={img} />

               <Card.Body>
                  <Card.Title><h6><strong>{name}</strong></h6></Card.Title>
                  <Card.Title><h6>Price: $ {price}</h6></Card.Title>
                  <Card.Text>
                     <small> {description.slice(0, 50)}...</small>
                  </Card.Text>
               </Card.Body>
               <Link to={`/order/${_id}`}><button className="btn my-button">Order now</button></Link>


            </Card>
         </CardGroup>
      </Col>
   );
};

export default Product;