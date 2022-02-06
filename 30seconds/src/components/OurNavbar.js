import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Nav, Container, Navbar, NavDropdown, MenuItem,  Tabs, ButtonToolbar, Button, Table, ButtonGroup, Row, Col, Grid, Panel, FormGroup, FormControl} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const OurNavbar = () => {
    return (
        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand href="/">30Seconds</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/record">Interview</Nav.Link>
                    <Nav.Link href="/question">Questions</Nav.Link>
                    <Nav.Link href="/result">Result</Nav.Link>
                    <Nav.Link href="/links">Links</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default OurNavbar;