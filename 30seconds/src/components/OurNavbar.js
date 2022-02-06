import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import  './OurNavbar.css';

import {Nav, Container, Navbar, NavDropdown, MenuItem,  Tabs, ButtonToolbar, Button, Table, ButtonGroup, Row, Col, Grid, Panel, FormGroup, FormControl} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const OurNavbar = () => {
    const navStyle = { 
        fontSize: 40,
    };
    const backgroundStyle = {
        fontWeight: 500,
    };
    return (
        
        <Navbar class = "bg-dark" style={navStyle} 
        bg="dark" 
        variant="dark" 
        expand="lg">
            <Container >

                <Navbar.Brand style={{fontWeight: 600, fontSize: 50}}href="/">Home</Navbar.Brand>

                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav style={backgroundStyle}className="me-auto">
                        <Nav.Link class = ".text-light" style={{paddingLeft: 50}} href="/interview">Interview</Nav.Link>
                        <Nav.Link style={{paddingLeft: 50}} href="/question">Questions</Nav.Link>
                        <Nav.Link style={{paddingLeft: 50}} href="/links">Links</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            
                
            </Container>
        </Navbar>
     
    );
}

export default OurNavbar;