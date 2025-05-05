import React, { useEffect } from 'react';
import './Content.css';
import ScrollReveal from 'scrollreveal';
import Home from '../Home/Home';
import About from '../About/About';
import Project from '../Project/Project';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

function Content() {
  useEffect(() => {
    ScrollReveal().reveal('.content', {
      reset: false,
      duration: 1000,
      distance: '50px',
      easing: 'ease-in-out',
    });
  }, []); 

  return (
    <div className="content">
      <Home />
      <About />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default Content;
