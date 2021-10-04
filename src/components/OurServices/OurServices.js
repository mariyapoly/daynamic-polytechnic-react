import React from 'react';
import { Breadcrumb, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import AllService from '../AllService/AllService';
import NewsLetter from '../NewsLetter/NewsLetter';

const OurServices = () => {
    return (
        <div>
            {/* bread crumb start */}
            <div className="section-bg">
                <div className="overlay">
                    <Container>
                        <Row>
                            <div>
                                <h1>Our Courses</h1>
                                <Breadcrumb>
                                    <NavLink className="link" to="/home">Home</NavLink>
                                    <span className="mx-2">/</span>
                                    <NavLink activeClassName="active" className="link" to="/service">Courses</NavLink>
                                </Breadcrumb>
                            </div>
                        </Row>
                    </Container>
                </div>
            </div>
            {/* bread crumb end */}
            <AllService></AllService>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default OurServices;