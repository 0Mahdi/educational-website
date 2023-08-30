import React from 'react';
import img1 from '../../images/slider2.png';
import img2 from '../../images/slider3.png';
import img3 from '../../images/slider4.png';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './ExampleCarouselImage'; // Make sure the path is correct

const About = () => {
    const carouselStyle = {
        margin: '20px', // Add margin
        padding: '20px', // Add padding
      };
  return (
    <div>
      <Carousel style={carouselStyle}>
        <Carousel.Item>
          <ExampleCarouselImage src={img1} text="First slide" />
          <Carousel.Caption className='text-white'>
            <h3>"Exploring Algebraic Equations"</h3>
            <p>"Embark on a journey of discovery as we delve into the intricate world of algebraic equations. Unravel the mysteries hidden within mathematical expressions and equations, and gain a deeper understanding of their applications in various fields."</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage src={img2} text="Second slide" />
          <Carousel.Caption>
            <h3>"Geometry: Unveiling Spatial Relationships"</h3>
            <p>"Step into the realm of geometry and explore the fascinating universe of shapes, angles, and spatial relationships. Navigate through geometric puzzles and challenges that will sharpen your spatial reasoning skills and expand your geometric intuition."</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage src={img3} text="Third slide" />
          <Carousel.Caption className='text-success'>
            <h3>"Diving into Calculus Concepts"</h3>
            <p>
            "Immerse yourself in the realm of calculus, where you'll tackle complex problems and explore the principles of change and motion. From derivatives to integrals, you'll uncover the foundations that underlie everything from physics to engineering."
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default About;

// import React from 'react';
// import img1 from '../../images/slider1.png';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

// const About = () => {
//     return (
//         <div className="d-flex justify-content-around">
//             <Card style={{ width: '18rem'}}>
//             <Card.Img variant="top" src={img1} />
//             <Card.Body>
//                 <Card.Title>Card Title</Card.Title>
//                 <Card.Text>
//                     Some quick example text to build on the card title and make up the
//                     bulk of the card's content.
//                 </Card.Text>
//                 <Button variant="primary">Go somewhere</Button>
//             </Card.Body>
//             </Card>
//             <Card style={{ width: '18rem'}}>
//             <Card.Img variant="top" src={img1} />
//             <Card.Body>
//                 <Card.Title>Card Title</Card.Title>
//                 <Card.Text>
//                     Some quick example text to build on the card title and make up the
//                     bulk of the card's content.
//                 </Card.Text>
//                 <Button variant="primary">Go somewhere</Button>
//             </Card.Body>
//             </Card>
//             <Card style={{ width: '18rem'}}>
//             <Card.Img variant="top" src={img1} />
//             <Card.Body>
//                 <Card.Title>Card Title</Card.Title>
//                 <Card.Text>
//                     Some quick example text to build on the card title and make up the
//                     bulk of the card's content.
//                 </Card.Text>
//                 <Button variant="primary">Go somewhere</Button>
//             </Card.Body>
//             </Card>
//         </div>
//     );
// };

// export default About;
