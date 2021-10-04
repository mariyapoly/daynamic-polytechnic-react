import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <Navbar className="nav-bar" expand="lg">
            <Container>
                <NavLink className="logo" to="/">Daynamic <span>Polytechnic Institute</span></NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto nav-items">
                        <NavLink className="link" to="/home">Home</NavLink>
                        <NavLink className="link" to="/about">About Us</NavLink>
                        <NavLink className="link" to="/service">Service</NavLink>
                        <NavLink className="link" to="/contact">Contact</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;