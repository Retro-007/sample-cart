import React from 'react';
import { Navbar as NavbarBS, Nav, Container, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <React.Fragment>
            <NavbarBS sticky='top' className="bg-white shadow-sm mb-3">
                <Container  >
                    <Nav className='me-auto'>
                        <Nav.Link to="/" as={NavLink} >
                            Home
                        </Nav.Link>
                        <Nav.Link to="/about" as={NavLink} >
                            About
                        </Nav.Link>
                        <Nav.Link to="/store" as={NavLink} >
                            Store
                        </Nav.Link>
                    </Nav>
                    <Button variant="outline-secondary " className='position-relative' onClick={() => console.log("Primary")}>
                        <i className="bi bi-cart"></i>
                        <div className='rounded-circle  text-white d-flex justify-content-center align-items-center  bg-success position-absolute top-100 start-100 translate-middle' style={{ fontSize: '0.6em', height: '1.5rem', width: '1.5rem', transform: "translate(25%,25%)" }}>5</div>
                    </Button>
                </Container>
            </NavbarBS>
        </React.Fragment >
    )
}
