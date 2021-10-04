import React from 'react';
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='text-center not-found-bg'>
            <Container>
                <h1>404</h1>
                <h3>Whoops! This Page Does Not Exist</h3>
                <p>We can't seem to find the page that you're looking for, the link you followed might have been broken, it is temporarily unavailable. or it appears the website address you entered was incorrect.</p>
                <NavLink className="regular-btn" to="/">Back To Home</NavLink>
            </Container>
        </div>
    );
};

export default NotFound;