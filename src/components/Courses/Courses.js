import React, { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';
import AllCourses from '../AllCourses/AllCourses';

const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('./courses.JSON')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, []);

    return (
        <div className='course-container' style={{ margin: '0 auto', padding: '20px' }}>
            <h2 className="title">All Courses</h2>
            <Row xs={1} md={3} className="g-4">
                {courses.map(course => (
                    <AllCourses key={course._id} courses={course} />
                ))}
            </Row>
        </div>
    );
};

export default Courses;

