import React from 'react';
import './Home.css';

function Home() {
  return (
    <section id="home" className="section">
      <h1>Merhaba, Ben Muhammed Burak Saraç</h1>
      <p>Jr Frontend Developer & Data Scientist</p>
      <p>Portföy siteme hoş geldiniz.</p>
      <a href="/Cv.pdf" className="cta"  download>Cv İndir</a>
    </section>
  );
}

export default Home;
