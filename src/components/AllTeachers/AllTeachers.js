import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useTeachers from '../../hooks/useTeachers';
import Teacher from '../Teacher/Teacher';
import './AllTeachers.css'

const AllTeachers = () => {

    const [teachers] = useTeachers();

    return (
        <div className="teachers-container">
            <Container>
                <h2 className="section-title">Our Teachers</h2>
                <Row>
                    {
                        teachers.map(teacher => <Teacher
                            key={teacher.id}
                            teacher={teacher}></Teacher>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default AllTeachers;