import React, { useContext } from 'react';
import { Container, Row } from 'react-bootstrap';
import { serviceContext } from '../../App';
import Service from '../Service/Service';
import './AllService.css'

const AllService = () => {

    const services = useContext(serviceContext);

    return (
        <div className="all-service">
            <Container>
                <h2 className="section-title">Our Courses</h2>
                <Row>
                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}></Service>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default AllService;