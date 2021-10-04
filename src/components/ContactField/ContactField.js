import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import './ContactField.css'
import { Col, Container, Row } from 'react-bootstrap';

const ContactField = () => {
    return (
        <div className="contact-bg">
            <Container>
                <Row>
                    <Col md={4}>
                        <div>
                            <h3>Get in touch</h3>
                            <p>Looking for help? Fill the form and start a new adventure.</p>
                            <div className="phone">
                                <h5>Phone</h5>
                                <div className="d-flex align-items-center">
                                    <FontAwesomeIcon className="phone-icon" icon={faPhoneAlt} />
                                    <p className="m-0">(+642) 245 356 432 <br />
                                        (+420) 336 476 328</p>
                                </div>
                            </div>
                            <div>
                                <h5>Support</h5>
                                <div className="d-flex align-items-center">
                                    <FontAwesomeIcon className="email-icon" icon={faEnvelope} />
                                    <p className="m-0">bisy@support.com <br />
                                        help@education.com</p>
                                </div>
                            </div>

                        </div>
                    </Col>
                    <Col md={8}>
                        <div className="contact-form">
                            <h4>Let’s Connect</h4>
                            <input className="me-4" type="text" placeholder="first name" />
                            <input type="text" placeholder="last name" />
                            <input className="me-4" type="email" placeholder="email address" />
                            <input type="text" placeholder="phone number" />
                            <input className="w-100" type="text" placeholder="subject" />
                            <textarea className="w-100" placeholder="how can we help you"></textarea>
                            <button className="regular-btn">send message</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ContactField;