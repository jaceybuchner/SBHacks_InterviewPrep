import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Nav, Container, Navbar, NavDropdown, MenuItem,  Tabs, ButtonToolbar, Button, Table, ButtonGroup, Row, Col, Grid, Panel, FormGroup, FormControl} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const OurNavbar = () => {
    return (
        
        <Navbar style={{paddingBottom: 10, paddingTop:10, fontSize: 35}} bg="primary" variant="dark">
            <Container>
                <Navbar.Brand  style={{fontSize: 35}}href="/">30Seconds</Navbar.Brand>
                <Nav style={{paddingLeft: 100}}className="me-auto">
                    <Nav.Link href="/interview">Interview</Nav.Link>
                    <Nav.Link href="/question">Questions</Nav.Link>
                    <Nav.Link href="/links">Links</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
     
    );
}

export default OurNavbar;