import React from 'react';
import { useContext } from 'react';
import { Container, Row } from 'react-bootstrap';
import { serviceContext } from '../../App';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    // set use context
    const services = useContext(serviceContext)
    const newServices = services.slice(0, 4);

    return (
        // service area start
        <div className="service-area">
            <Container>
                <h2 className="section-title">Our Courses</h2>
                <Row>
                    {
                        newServices.map(service => <Service
                            key={service.id}
                            service={service}>
                        </Service>)
                    }
                </Row>
            </Container>
        </div>
        // service area start
    );
};

export default Services;