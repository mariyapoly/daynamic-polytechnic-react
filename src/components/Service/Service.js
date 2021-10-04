import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Service.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const Service = (props) => {

    const { courseName, courseImg, price, courseTitle } = props.service || {};

    return (
        <Col lg={3} md={6} xs={12} sm={12}>
            <Card className="service-card">
                <Card.Img className="service-thumb" variant="top" src={courseImg} />
                <Card.Body>
                    <Card.Title className="service-title">{courseName}</Card.Title>
                    <Card.Text className="service-text">
                        {courseTitle.slice(0, 80)}
                    </Card.Text>
                    <div className="d-flex justify-content-between">
                        <span className="price">$ {price}</span>
                        <FontAwesomeIcon className="wishlist-icon" icon={faHeart} />
                    </div>
                    <div className="d-flex justify-content-between service-date">
                        <span className="border-course">4 Years Course</span>
                        <span className="border-course right-border">7 Semester</span>
                        <span>8 AM - 2 PM Classes</span>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;