import React, { useEffect, useState } from 'react';
import { Card, CardGroup, Col, Container, Row, Spinner } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';



const MyOrders = () => {
   const { user } = useAuth()
   const [orders, setOrders] = useState([])
   const [deleted, setDeleted] = useState(true)
   const [isLoading, setIsLoading] = useState(true)


   useEffect(() => {
      fetch(`http://localhost:5000/myOrders/${user?.email}`)
         .then(res => res.json())
         .then(data => {

            setOrders(data)
            setIsLoading(false)

         });
   }, [deleted]);


   const handleDelete = (id) => {
      setDeleted(true)
      const proceed = window.confirm("Are you sure delete this Order ??")
      if (proceed) {
         fetch(`http://localhost:5000/deleteOrder/${id}`, {
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
            })
      }
   }



   return (
      <div>

         <h2 className="text-success">Your total order is : {orders.length}</h2>

         {
            isLoading && <Spinner className="fs-3" animation="border" variant="black" />
         }

         <Container>
            <Row className="g-4">
               {
                  orders.map((order, index) => <Col xl={4} lg={4} md={6} sm={12}
                     key={order._id}
                  >
                     <CardGroup>
                        <Card className="py-3 data-cart">
                           <div className="ms-auto"><button >Order {order?.status}</button></div>
                           <Card.Img variant="top" className="mx-auto w-50" src={order?.img} />

                           <Card.Body>
                              <Card.Title><h6><strong>{order?.orderName}</strong></h6></Card.Title>
                              <Card.Title><h6>Price: $ {order?.price}</h6></Card.Title>

                           </Card.Body>

                           <td><button onClick={() => handleDelete(order?._id)} className="btn btn-danger">Order Cancel</button></td>

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