import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import aboutThumb from '../../images/about.png';
import './About.css'

const About = () => {
    return (
        <div className="about-area">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <div className="about-thumb">
                            <img src={aboutThumb} alt="about-thumb" />
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="section-text">
                            <span>about us</span>
                            <h2>Education in continuing a proud tradition.</h2>
                            <p>We are one of the largest, most diverse polytechnic institute in the BD with over 90,000 students in BD.

                                Daynamic Polytechnic Institute
                                was established by John Smith in 1920 for the public benefit and it is recognized globally. Throughout our great history, Daynamic has offered access to a wide range of academic opportunities. As a world leader in higher education, the Institute has pioneered change in the sector.</p>

                            <NavLink className="regular-btn" to="/about">read more</NavLink>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;