import React from 'react';
import { Col } from 'react-bootstrap';
import './Teacher.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Teacher = (props) => {

    const { name, img } = props.teacher || {};

    return (
        <Col md={4} lg={3} xs={12} sm={12}>
            <div className="single-teacher">
                <img src={img} alt="" />
                <h4 className="teacher-name">{name}</h4>
                <div className="social">
                    <ul className="social-hover">
                        <li>
                            <FontAwesomeIcon className="icon" icon={faFacebookF} />
                        </li>
                        <li><FontAwesomeIcon className="icon " icon={faTwitter} /></li>
                        <li><FontAwesomeIcon className="icon " icon={faInstagram} /></li>
                        <li><FontAwesomeIcon className="icon " icon={faLinkedinIn} /></li>


                    </ul>
                </div>
            </div>
        </Col>
    );
};

export default Teacher;