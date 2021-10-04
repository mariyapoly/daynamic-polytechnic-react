import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return (
        // footer start
        <div className="footer">
            <Container>
                <Row className="footer-border">
                    <Col md={4} xs={12} sm={12}>
                        <div>
                            <NavLink className="logo" to="/">Daynamic <span>Polytechnic Institute</span></NavLink>
                            <ul className="address">
                                <li>+163 123 7884</li>
                                <li>daynamic@website.com</li>
                            </ul>
                            <ul className="social-icon d-flex">
                                <li className="facebook">
                                    <FontAwesomeIcon className="icon" icon={faFacebookF} />
                                </li>
                                <li className="twitter"><FontAwesomeIcon className="icon " icon={faTwitter} /></li>
                                <li className="instagram"><FontAwesomeIcon className="icon " icon={faInstagram} /></li>
                                <li className="linkedin"><FontAwesomeIcon className="icon " icon={faLinkedinIn} /></li>


                            </ul>
                        </div>
                    </Col>
                    <Col md={3} xs={12} sm={12}>
                        <h3>Explore</h3>
                        <ul>
                            <li>
                                <NavLink className="link" to="/about">About Us</NavLink>
                            </li>
                            <li><NavLink className="link" to="/">Success Story</NavLink></li>
                            <li><NavLink className="link" to="/">Careers</NavLink></li>
                            <li><NavLink className="link" to="/service">Courses</NavLink></li>
                            <li><NavLink className="link" to="/contact">Contact Us</NavLink></li>
                        </ul>
                    </Col>
                    <Col md={2} xs={12} sm={12}>
                        <h3>Courses</h3>
                        <ul>
                            <li>
                                <NavLink className="link" to="/service">All Courses</NavLink>
                            </li>
                            <li><NavLink className="link" to="/service">Architecture</NavLink></li>
                            <li><NavLink className="link" to="/service">Civil</NavLink></li>
                            <li><NavLink className="link" to="/service">Computer</NavLink></li>
                            <li><NavLink className="link" to="/service">Electronics</NavLink></li>
                        </ul>
                    </Col>
                    <Col md={3} xs={12} sm={12}>
                        <h3>Support</h3>
                        <ul>
                            <li>
                                <NavLink className="link" to="/">Help Center</NavLink>
                            </li>
                            <li><NavLink className="link" to="/">System Requirements</NavLink></li>
                            <li><NavLink className="link" to="/">Register Activation Key</NavLink></li>
                            <li><NavLink className="link" to="/">Site Feedback</NavLink></li>
                            <li><NavLink className="link" to="/">Documentation</NavLink></li>
                        </ul>
                    </Col>
                </Row>
                <p className="copyright">Copyright &copy; 2021 Daynamic Polytechnic Institute. </p>
            </Container>
        </div>
        // footer end
    );
};

export default Footer;