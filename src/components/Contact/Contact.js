import React from 'react';
import { Breadcrumb, Container, Row } from 'react-bootstrap';

import { NavLink } from 'react-router-dom';
import ContactField from '../ContactField/ContactField';

const Contact = () => {
    return (
        <div>
            <div className="section-bg">
                <div className="overlay">
                    <Container>
                        <Row>
                            <div>
                                <h1>Contact Us</h1>
                                <Breadcrumb>
                                    <NavLink className="link" to="/home">Home</NavLink>
                                    <span className="mx-2">/</span>
                                    <NavLink activeClassName="active" className="link" to="/contact">contact</NavLink>
                                </Breadcrumb>
                            </div>
                        </Row>
                    </Container>
                </div>
            </div>
            <ContactField></ContactField>
        </div>
    );
};

export default Contact;