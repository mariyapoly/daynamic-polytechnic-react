
import { Container, Row } from 'react-bootstrap';
import useTeachers from '../../hooks/useTeachers';
import Teacher from '../Teacher/Teacher';
import './Teachers.css'

const Teachers = () => {
    // set useTeachers for accept data
    const [teachers] = useTeachers();
    const newTeacher = teachers.slice(0, 4);

    return (
        // teacher container start
        <div className="teacher-container">
            <Container>
                <h2 className="section-title">Our Teachers</h2>
                <Row>
                    {
                        newTeacher.map(teacher => <Teacher
                            key={teacher.id}
                            teacher={teacher}></Teacher>)
                    }
                </Row>
            </Container>
        </div>
        // teacher container end
    );
};

export default Teachers;