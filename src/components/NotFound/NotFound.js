import React from 'react';
import { Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {

    const history = useHistory()

    const handleBackBtn = () => {
        history.push("/")
    }

    return (
        // not found start
        <div className='text-center not-found-bg'>
            <Container>
                <h1>404</h1>
                <h3>Whoops! This Page Does Not Exist</h3>
                <p>We can't seem to find the page that you're looking for, the link you followed might have been broken, it is temporarily unavailable. or it appears the website address you entered was incorrect.</p>
                <button onClick={handleBackBtn} className="regular-btn" >Back To Home</button>
            </Container>
        </div>
        // not found end
    );
};

export default NotFound;