import React from 'react';
import { useContext } from 'react';
import { Container, Row } from 'react-bootstrap';
import { serviceContext } from '../../App';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {


    const services = useContext(serviceContext)
    const newServices = services.slice(0, 4);
    return (
        <div>
            <Container>
                <h2>Our Services</h2>
                <Row>
                    {
                        newServices.map(service => <Service
                            key={service.id}
                            service={service}></Service>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Services;