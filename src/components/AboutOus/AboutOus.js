import React from 'react';
import { Breadcrumb, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import About from '../About/About';
import './AboutOus.css'

const AboutOus = () => {
    return (
        <div>
            <div className="section-bg">
                <div className="overlay">
                    <Container>
                        <Row>
                            <div>
                                <h1>About Us</h1>
                                <Breadcrumb>
                                    <NavLink className="link" to="/home">Home</NavLink>
                                    <span className="mx-2">/</span>
                                    <NavLink activeClassName="active" className="link" to="/about">about</NavLink>

                                </Breadcrumb>

                            </div>
                        </Row>
                    </Container>
                </div>
            </div>
            <About></About>
        </div>

    );
};

export default AboutOus;