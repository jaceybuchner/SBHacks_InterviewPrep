import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';

const OurNavbar = () => {
    return (
        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Home</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#interview">Interview</Nav.Link>
                    <Nav.Link href="#questions">Questions</Nav.Link>
                    <Nav.Link href="#links">Links</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default OurNavbar;