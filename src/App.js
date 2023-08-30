import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Headers from './components/Headers/Headers';
import './App.css';
import About from './components/About/About';
import Home from './components/Home/Home';
import Courses from './components/Courses/Courses';
import Contact from './components/Contact/Contact';
import NotFound from './components/NotFound/NotFound'
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <Headers />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="courses" element={<Courses />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;