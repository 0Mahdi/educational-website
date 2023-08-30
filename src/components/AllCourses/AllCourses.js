import React from 'react';
import Button from 'react-bootstrap/Button';
import { Card, Col } from 'react-bootstrap';

const AllCourses = (props) => {
    const {course_name, course_tittle, img, amount} = props.courses;

    const cardImageStyle = {
        height: '200px',
        objectFit: 'cover',
    };

    return (
        <div>
            <Col>
            <Card>
                <Card.Img variant="top" src={img} style={cardImageStyle}/>
                <Card.Body>
                <Card.Title>{course_name}</Card.Title>
                <Card.Text>
                    {course_tittle}
                </Card.Text>
                </Card.Body>
                <Button variant="outline-success">$ {amount}</Button>
            </Card>
            </Col>
        </div>
    );
};

export default AllCourses;