import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import  './CSS/OurNavbar.css';


import {Nav, Container, Navbar} from 'react-bootstrap';


const OurNavbar = () => {
    const navStyle = { 
        fontSize: 40,
    };
    const backgroundStyle = {
        fontWeight: 500,
    };
    return (
        <Navbar className = "bg-dark" style={navStyle} 
        bg="dark" 
        variant="dark" 
        expand="xl">
            <Container >
            
                <Navbar.Brand style={{fontWeight: 600, fontSize: 50}}href="/">
                    30S
                </Navbar.Brand>

                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav style={backgroundStyle}className="me-auto">
                        <Nav.Link className = ".text-light" style={{paddingLeft: 50}} href="/interview">Interview</Nav.Link>
                        <Nav.Link style={{paddingLeft: 50}} href="/question">Questions</Nav.Link>
                        <Nav.Link style={{paddingLeft: 50}} href="/links">Job Search</Nav.Link>
                    </Nav>
                </Navbar.Collapse>     
            </Container>
        </Navbar>
    );
}

export default OurNavbar;

