import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import  './OurNavbar.css';

import {Nav, Container, Navbar, NavDropdown, MenuItem,  Tabs, ButtonToolbar, Button, Table, ButtonGroup, Row, Col, Grid, Panel, FormGroup, FormControl} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const OurNavbar = () => {
    const navStyle = {
        paddingBottom: 10, 
        paddingTop: 10, 
        fontSize: 35,
    };
    const backgroundStyle = {
        fontWeight: 500,
    };
    return (
        
        <Navbar style={navStyle} 
        bg="navbackground" 
        variant="light" 
        expand="lg">
            <Container>

                <Navbar.Brand style={{fontWeight: 600, fontSize: 50}}href="/">
                        30Seconds
                </Navbar.Brand>

                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav style={backgroundStyle}className="me-auto">
                        <Nav.Link href="/interview">Interview</Nav.Link>
                        <Nav.Link href="/question">Questions</Nav.Link>
                        <Nav.Link href="/links">Links</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            
                
            </Container>
        </Navbar>
     
    );
}

export default OurNavbar;