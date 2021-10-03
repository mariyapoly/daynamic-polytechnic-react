import React from 'react';
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
    return (
        <div className="hero-section">
            <div className="overlay">
                <Container>
                    <span>DISCOVER RESEARCH</span>
                    <h1>A better learning future starts here</h1>
                    <NavLink className="regular-btn" to="/contact">Get A Quote</NavLink>
                    <NavLink className="regular-btn border-btn" to="/blog">Read More</NavLink>
                </Container>
            </div>
        </div>
    );
};

export default Banner;