import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.PNG';
import useAuth from '../../hooks/useAuth';
import './Navigation.css';

const Navigation = () => {
   const { user, logOut } = useAuth()
   return (
      <>
         <Navbar className="py-0 navbar" bg="primary" collapseOnSelect expand="lg" variant="dark">
            <Container>
               <Navbar.Brand >
                  <Link to="/">
                     <img src={logo} style={{ width: "150px", borderRadius: "10px", height: "55px" }} alt="" />
                  </Link>
               </Navbar.Brand>
               <Navbar.Toggle aria-controls="responsive-navbar-nav" />
               <Navbar.Collapse id="responsive-navbar-nav" >
                  <Nav className="ms-auto">
                     <Link to="/home">Home</Link>
                     <Link to="/product">Product</Link>
                     {user?.email && <Link to="/dashboard">Dashboard</Link>}
                     {user?.email ? <div>
                        <small className="displayName">{user?.displayName}</small>
                        <button onClick={logOut} className="btn my-button">Logout</button>
                     </div> :
                        <Link to="/login">Login</Link>}
                  </Nav>
               </Navbar.Collapse>
            </Container>
         </Navbar>
      </>
   );
};

export default Navigation;