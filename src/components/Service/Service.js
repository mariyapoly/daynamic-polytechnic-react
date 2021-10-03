import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Service.css'

const Service = (props) => {

    const { courseName, courseImg, price, courseTitle } = props.service || {};

    return (
        <Col md={3}>
            <Card>
                <Card.Img className="service-thumb" variant="top" src={courseImg} />
                <Card.Body>
                    <Card.Title>{courseName}</Card.Title>
                    <Card.Text>
                        {courseTitle}
                    </Card.Text>
                    <div>
                        <span>{price}</span>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;