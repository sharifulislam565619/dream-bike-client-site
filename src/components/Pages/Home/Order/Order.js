import { React, useEffect, useState } from 'react';
import { Button, Card, Col, Container, Modal, Row, Spinner } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../../Shared/Footer/Footer';
import Navigation from '../../../Shared/Navigation/Navigation';
import './Order.css';


const Order = () => {
   const { id } = useParams()
   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);

   const [product, setProduct] = useState({})
   const [isLoading, setIsLoading] = useState(true)
   const { user } = useAuth()


   const { register, handleSubmit, reset, formState: { errors } } = useForm();
   const onSubmit = data => {

      data.email = user?.email;
      data.status = "pending...";
      data.img = product?.img;
      data.orderName = product?.name;
      data.price = product?.price;
      data.order_id = id;

      fetch("https://fathomless-taiga-77170.herokuapp.com/order", {
         method: "POST",
         headers: { "content-type": "application/json" },
         body: JSON.stringify(data),
      })
         .then((res) => res.json())
         .then((result) => {
            if (result.acknowledged) {
               setShow(true)
               reset()
            }
         });
   };



   useEffect(() => {
      fetch(`https://fathomless-taiga-77170.herokuapp.com/product/${id}`)
         .then(res => res.json())
         .then(data => {
            setProduct(data)
            setIsLoading(false)

         })
         .catch((error) => {
            console.log(error.message)
         })
   }, [])

   return (
      <div>
         {
            show && <div>

               <Modal className="modal-open" show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                     <Modal.Title>Dream bike says</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>Congratulation your order is proceed !!</Modal.Body>
                  <Modal.Footer>
                     <Button variant="secondary" onClick={handleClose}>
                        Ok
                     </Button>
                  </Modal.Footer>
               </Modal>
            </div>
         }
         <Navigation />
         <Container className='mt-5'>
            <Row xs={1} md={2} className="g-4">


               <Col data-aos='fade-right'>
                  {
                     isLoading && <Spinner className="mt-5 fs-3" animation="border" variant="black" />
                  }
                  <Card>
                     <Card.Img variant="top" className='w-75 m-3 mx-auto' src={product?.img} />
                     <Card.Body>
                        <Card.Title>{product?.name}</Card.Title>
                        <Card.Title>Price: ${product?.price}</Card.Title>
                        <Card.Text className="text-start">
                           {product?.description}
                        </Card.Text>
                     </Card.Body>
                  </Card>
               </Col>

               <form data-aos='fade-left' className="mt-5 place-order-form" onSubmit={handleSubmit(onSubmit)}>

                  <input required placeholder="Your name" defaultValue={user?.displayName} {...register("name", { required: true })} />
                  <input required type="text" placeholder="Your email" defaultValue={user?.email} {...register("emailAddress")} />
                  <input required placeholder="Your phone" type="number" {...register("phone",)} />
                  <textarea
                     {...register("address", { required: true })}
                     placeholder="Address" />
                  <input type="submit" className="btn my-button" value="Order Submit" />

                  <Link to="/home">	<button className="btn btn-outline-dark">back to home page</button></Link>
               </form>



            </Row>

         </Container>


         <Footer></Footer>
      </div>
   );
};

export default Order;