import React from 'react';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import AddProducts from '../AddProducts/AddProducts';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageAllOrder from '../ManageAllOrder/ManageAllOrder';


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
                     <Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                     <Nav className="justify-content-end flex-grow-1 pe-3">
                        <Link to="/home">Back to Home</Link>
                        <Link to={`${url}/manageOllOrders`}>ManageAllOrders</Link>
                        <Link to={`${url}/addProduct`}>Add A Product</Link>
                        <Link to={`${url}/makeAdmin`}>Make admin</Link>
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
            <Route exact path={`${path}/manageOllOrders`}>
               <ManageAllOrder></ManageAllOrder>
            </Route>
            <Route exact path={`${path}/makeAdmin`}>
               <MakeAdmin></MakeAdmin>
            </Route>

            <Route path={`${path}/addProduct`}>
               <AddProducts />
            </Route>
         </Switch>
      </div>
   );
};

export default Dashboard;