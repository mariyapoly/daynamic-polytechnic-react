import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        // navbar start
        <Navbar className="nav-bar" expand="lg">
            <Container>
                <NavLink className="logo" to="/">Daynamic <span>Polytechnic Institute</span></NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto nav-items">
                        <NavLink activeClassName="active" className="link" to="/home">Home</NavLink>
                        <NavLink activeClassName="active" className="link" to="/about">About Us</NavLink>
                        <NavLink activeClassName="active" className="link" to="/course">Courses</NavLink>
                        <NavLink activeClassName="active" className="link" to="/teacher">Teachers</NavLink>
                        <NavLink activeClassName="active" className="link" to="/contact">Contact</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        // navbar end
    );
};

export default Header;