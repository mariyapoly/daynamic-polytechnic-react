import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './NewsLetter.css'

const NewsLetter = () => {
    return (
        <div className="newsletter-bg">
            <Container>
                <Row className="align-items-center">
                    <Col md="6" xs={12} sm={12}>
                        <div className="section-text">
                            <span>Newsletter</span>
                            <h2>Subscribe to newsletter</h2>
                            <p>Stay in the know on new free e-book</p>
                        </div>
                    </Col>
                    <Col md="6" xs={12} sm={12}>
                        <div className="input-field">
                            <input type="email" placeholder="enter email address" />
                            <button>subscribe</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default NewsLetter;