import React from 'react';
import { Breadcrumb, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import AllTeachers from '../AllTeachers/AllTeachers';
import NewsLetter from '../NewsLetter/NewsLetter';

const OurTeachers = () => {
    return (
        <div>
            <div className="section-bg">
                <div className="overlay">
                    <Container>
                        <Row>
                            <div>
                                <h1>our teachers</h1>
                                <Breadcrumb>
                                    <NavLink className="link" to="/home">Home</NavLink>
                                    <span className="mx-2">/</span>
                                    <NavLink activeClassName="active" className="link" to="/teacher">Teachers</NavLink>
                                </Breadcrumb>
                            </div>
                        </Row>
                    </Container>
                </div>
            </div>
            <AllTeachers></AllTeachers>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default OurTeachers;