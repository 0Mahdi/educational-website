import React, { useState, useEffect } from 'react';
import img from '../../images/banner3.jpg';
import './Home.css';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { Row } from 'react-bootstrap';
import AllCourses from '../AllCourses/AllCourses';

const Home = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('./courses.JSON')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, []); // Empty dependency array to fetch data once

    // Filter courses with amount higher than 400
    const bestCourses = courses.filter(course => parseInt(course.amount) > 400);

    return (
        <div className="home-container" style={{ padding:'20px' }}>
            <Card className="bg-dark text-white">
                <Card.Img src={img} alt="Card image" />
                <Card.ImgOverlay>
                    <h2><Badge>Mathematics: Your Gateway to Success !!</Badge></h2>
                    <br/>
                    <h5>
                        
                    </h5>
                    <br/>
                    <h6>"Solving Problems, Unlocking Potential."</h6>
                    <Button variant="outline-secondary">Let's Get Started</Button>
                </Card.ImgOverlay>
            </Card>

            
            <div className="mt-5">
                <h3 className="title">Best Courses</h3>
                <Row xs={1} md={2} className="g-4">
                    {/* Map and render bestCourses */}
                    {bestCourses.map(course => (
                        <AllCourses key={course._id} courses={course} />
                    ))}
                </Row>
            </div>
        </div>
    );
};

export default Home;
