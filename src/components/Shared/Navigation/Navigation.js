import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import logo from '../../../images/logo.PNG';
import userPhoto from '../../../images/userPhoto.png';
import useAuth from '../../hooks/useAuth';
import './Navigation.css';

const Navigation = () => {
   const { user, logOut } = useAuth()
   const history = useHistory()
   const uri = "/home"
   return (
      <>
         <Navbar fixed="top" className="py-0 navbar" bg="dark" collapseOnSelect expand="lg" variant="dark">
            <Container>
               <Navbar.Brand data-aos="flip-right">
                  <Link to="/">
                     <img src={logo} style={{ width: "150px", borderRadius: "10px", height: "55px" }} alt="" />
                  </Link>
               </Navbar.Brand>
               <Navbar.Toggle aria-controls="responsive-navbar-nav" />
               <Navbar.Collapse id="responsive-navbar-nav" >
                  <Nav className="ms-auto align-items-center">
                     <Link to="/home">Home</Link>
                     <Link to="/product">Product</Link>
                     <Link to="/about">About us</Link>
                     {user?.email && <Link to="/dashboard">Dashboard</Link>}
                     {user?.email ? <div>
                        <small className="displayName">{user?.displayName}</small>
                        <small><img style={{ width: "50px", borderRadius: "50%", marginRight: "5px" }} src={user?.photoURL || userPhoto} alt="" /></small>
                        <button onClick={() => logOut(history, uri)} className="btn my-button"><i className="fas fa-sign-out-alt"></i> Log out</button>
                     </div> :
                        <Link to="/login" className="btn my-button"><i className="fas fa-sign-in-alt"></i> Login</Link>}
                  </Nav>
               </Navbar.Collapse>
            </Container>
         </Navbar>
      </>
   );
};

export default Navigation;