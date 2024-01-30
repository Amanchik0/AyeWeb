import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavbarAya=() => {
    return (
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
              <Container>
                <Navbar.Brand href="#home">
                  <img  src="" alt=""/> logoda

                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className='me-right'>
                  <Nav className="me-auto">
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>

                  </Nav>
                  <Nav>
                    <Nav.Link href="#deets">More deets</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                      Dank memes
                    </Nav.Link>
                  </Nav>
                  </Nav>

                </Navbar.Collapse>
              </Container>
            </Navbar>

        
    );
};

export default NavbarAya;