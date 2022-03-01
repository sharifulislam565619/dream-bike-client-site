import React, { useEffect, useState } from 'react';
import { Card, CardGroup, Col, Container, Row, Spinner } from 'react-bootstrap';
import swal from 'sweetalert';
import useAuth from '../../hooks/useAuth';
import './MyOrders.css';



const MyOrders = () => {
   const { user } = useAuth()
   const [orders, setOrders] = useState([])
   const [deleted, setDeleted] = useState(true)
   const [isLoading, setIsLoading] = useState(true)

   const handleDelete = (id) => {
      setDeleted(true)
      swal({
         title: "Are you sure?",
         text: "Once deleted, you will not be able to recover this imaginary file!",
         icon: "warning",
         buttons: true,
         dangerMode: true,
      })
         .then((willDelete) => {
            if (willDelete) {
               fetch(`https://fathomless-taiga-77170.herokuapp.com/deleteOrder/${id}`, {
                  method: 'DELETE',
                  headers: {
                     "content-type": "application/json"
                  },
                  body: JSON.stringify(),
               })
                  .then(res => res.json())
                  .then(result => {
                     if (result.deletedCount > 0) {
                        setDeleted(false)

                     }
                  }).catch((e) => {

                  })
               swal("Poof! Your imaginary file has been deleted!", {
                  icon: "success",
               });
            } else {
               swal("Your imaginary file is safe!");
            }
         });
   }

   useEffect(() => {
      fetch(`https://fathomless-taiga-77170.herokuapp.com/myOrders/${user?.email}`)
         .then(res => res.json())
         .then(data => {

            setOrders(data)
            setIsLoading(false)

         })
         .catch((e) => {

         })
         ;
   }, [deleted]);


   return (
      <div className="mb-5">

         <h2 className="text-success my-4">Your total order is : {orders?.length}</h2>

         {
            isLoading && <Spinner className="fs-3" animation="border" variant="black" />
         }

         <Container>
            <Row className="g-4">
               {
                  orders?.map((order, index) => <Col xl={4} lg={4} md={6} sm={12}
                     key={order._id}
                  >
                     <CardGroup>
                        <Card className="py-3 order-card data-cart">
                           <div className="ms-auto"><button style={{ background: "#7a946482", border: "none" }} >Order {order?.status}</button></div>
                           <Card.Img variant="top" className="mx-auto w-50" src={order?.img} />

                           <Card.Body>
                              <Card.Title><h6><strong>{order?.orderName}</strong></h6></Card.Title>
                              <Card.Title><h6>Price: $ {order?.price}</h6></Card.Title>

                           </Card.Body>

                           <td><button onClick={() => handleDelete(order?._id)} className="btn btn-danger">Cancel Order</button></td>

                        </Card>

                     </CardGroup>



                  </Col>)
               }
            </Row>
         </Container>

      </div>
   );
};

export default MyOrders;