import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../images/logo.PNG';

const Navigation = () => {
   return (
      <>
         <Navbar className="py-0" bg="primary" collapseOnSelect expand="lg" variant="dark">
            <Container>
               <Navbar.Brand href="#home">
                  <img src={logo} style={{ width: "150px", borderRadius: "10px", height: "55px" }} alt="" />
               </Navbar.Brand>
               <Navbar.Toggle aria-controls="responsive-navbar-nav" />
               <Navbar.Collapse id="responsive-navbar-nav" >
                  <Nav className="ms-auto">
                     <Nav.Link href="#home">Home</Nav.Link>
                     <Nav.Link href="#features">Features</Nav.Link>
                     <Nav.Link href="#pricing">Pricing</Nav.Link>
                  </Nav>
               </Navbar.Collapse>
            </Container>
         </Navbar>
      </>
   );
};

export default Navigation;