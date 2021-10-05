import React from 'react';
import { Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './Banner.css';

const Banner = () => {

    let history = useHistory();

    const handleClickBtn = () => {
        history.push("/contact")
    }
    const handleMorekBtn = () => {
        history.push("/")
    }

    return (
        // hero section start
        <div className="hero-section">
            <div className="overlay">
                <Container>
                    <span>DISCOVER RESEARCH</span>
                    <h1>A better learning future starts here</h1>
                    <button onClick={handleClickBtn} className="regular-btn">Get A Quote</button>
                    <button onClick={handleMorekBtn} className="regular-btn">Read More</button>

                </Container>
            </div>
        </div>
        // hero section end
    );
};

export default Banner;