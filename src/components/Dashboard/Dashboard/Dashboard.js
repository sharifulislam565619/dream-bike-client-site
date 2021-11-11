/* import React from 'react';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import NotFound from '../../Pages/Home/NotFound/NotFound';
import AddProducts from '../AddProducts/AddProducts';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageAllOrder from '../ManageAllOrder/ManageAllOrder';
import MyOrders from '../MyOrders/MyOrders';
import Payment from '../Payment/Payment';
import Review from '../Review/Review';
import './Dashboard.css';
import ManageProducts from './MangeProducts/ManageProducts';


const Dashboard = () => {
   let { path, url } = useRouteMatch();

   return (
      <div>

         <Navbar bg="dark" variant="dark" expand={false}>
            <Container fluid>
               <Navbar.Toggle aria-controls="offcanvasNavbar" />
               <Navbar.Offcanvas
                  id="offcanvasNavbar"
                  aria-labelledby="offcanvasNavbarLabel"
                  placement="start"
                  style={{ width: "250px" }}
               >
                  <Offcanvas.Header closeButton>
                     <Offcanvas.Title id="offcanvasNavbarLabel">Dashboard</Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                     <Nav className="justify-content-end flex-grow-1 pe-3">
                        <Link to="/home">Back to Home</Link>
                        <Link to={`${url}/myOrders`}>MyOrders</Link>
                        <Link to={`${url}/manageOllOrders`}>ManageAllOrders</Link>
                        <Link to={`${url}/addProduct`}>Add A Product</Link>
                        <Link to={`${url}/makeAdmin`}>Make admin</Link>
                        <Link to={`${url}/payment`}>Payment</Link>
                        <Link to={`${url}/review`}>Review</Link>
                        <Link to={`${url}/manageProducts`}>ManageProducts</Link>
                        <button>LogOut</button>
                     </Nav>

                  </Offcanvas.Body>
               </Navbar.Offcanvas>
               <Navbar.Brand className="mx-auto">  <h3 >Dashboard</h3></Navbar.Brand>

            </Container>
         </Navbar>
         <Switch>
            <Route exact path={path}>
               <ManageAllOrder></ManageAllOrder>
            </Route>
            <Route exact path={`${path}/myOrders`}>
               <MyOrders></MyOrders>
            </Route>
            <Route exact path={`${path}/manageOllOrders`}>
               <ManageAllOrder></ManageAllOrder>
            </Route>
            <Route exact path={`${path}/makeAdmin`}>
               <MakeAdmin></MakeAdmin>
            </Route>

            <Route path={`${path}/addProduct`}>
               <AddProducts />
            </Route>
            <Route path={`${path}/payment`}>
               <Payment />
            </Route>
            <Route path={`${path}/review`}>
               <Review />
            </Route>
            <Route path={`${path}/manageProducts`}>
               <ManageProducts />
            </Route>
            <Route exact path={path / "*"}>
               <NotFound />
            </Route>
         </Switch>
      </div>
   );
};

export default Dashboard;
 */


import { useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import NotFound from '../../Pages/Home/NotFound/NotFound';
import AddProducts from '../AddProducts/AddProducts';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageAllOrder from '../ManageAllOrder/ManageAllOrder';
import MyOrders from '../MyOrders/MyOrders';
import Payment from '../Payment/Payment';
import Review from '../Review/Review';
import './Dashboard.css';
import ManageProducts from './MangeProducts/ManageProducts';



const Dashboard = () => {
   let { path, url } = useRouteMatch();
   const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
   return (
      <>
         <Navbar className="py-0 navbar" bg="dark" collapseOnSelect expand="lg" variant="dark">
            <>
               <Navbar.Brand >

                  <button className="btn btn-light bg-dark toggle_btn ms-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                     <span className="navbar-toggler-icon" data-bs-target="#offcanvasExample" ></span>
                  </button>
                  <h5 className="text ps-5">Dashboard</h5>

               </Navbar.Brand>
               <Navbar.Collapse id="responsive-navbar-nav" >
                  <Nav className="ms-auto">

                  </Nav>
               </Navbar.Collapse>
            </>
         </Navbar>



         <div className="offcanvas offcanvas-start bg-dark text-white sidebar-nav" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
            <div className="offcanvas-header">


            </div>
            <div className="offcanvas-body ">
               <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Link to="/home">Back to Home</Link>
                  <Link to={`${url}/myOrders`}>MyOrders</Link>
                  <Link to={`${url}/manageOllOrders`}>ManageAllOrders</Link>
                  <Link to={`${url}/addProduct`}>Add A Product</Link>
                  <Link to={`${url}/makeAdmin`}>Make admin</Link>
                  <Link to={`${url}/payment`}>Payment</Link>
                  <Link to={`${url}/review`}>Review</Link>
                  <Link to={`${url}/manageProducts`}>ManageProducts</Link>
                  <button>LogOut</button>
               </Nav>





            </div>
         </div>
         <div className="main">
            <Switch>
               <Route exact path={path}>
                  <ManageAllOrder></ManageAllOrder>
               </Route>
               <Route exact path={`${path}/myOrders`}>
                  <MyOrders></MyOrders>
               </Route>
               <Route exact path={`${path}/manageOllOrders`}>
                  <ManageAllOrder></ManageAllOrder>
               </Route>
               <Route exact path={`${path}/makeAdmin`}>
                  <MakeAdmin></MakeAdmin>
               </Route>

               <Route path={`${path}/addProduct`}>
                  <AddProducts />
               </Route>
               <Route path={`${path}/payment`}>
                  <Payment />
               </Route>
               <Route path={`${path}/review`}>
                  <Review />
               </Route>
               <Route path={`${path}/manageProducts`}>
                  <ManageProducts />
               </Route>
               <Route exact path={path / "*"}>
                  <NotFound />
               </Route>
            </Switch>
         </div>
      </>
   );
};

export default Dashboard;