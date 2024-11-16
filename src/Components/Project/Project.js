import React from 'react';
import './Project.css';

import flutterImage1 from '../../Assets/images/flutter.png';
import websiteImage1 from '../../Assets/images/website.png';
import websiteImage2 from '../../Assets/images/website2.png';
import flutterImage2 from '../../Assets/images/flutter2.png';

function Project() {
  return (
    <section id="portfolio" className="section">
      <h2>Projelerim</h2>
      <div className="portfolio-grid">
        <a href="https://github.com/saracburak/hastane-randevu-sistemi-flutter" className="project-card" target="_blank" rel="noopener noreferrer">
          <img src={flutterImage1} alt="Proje 1" />
          <div className="card-content">
            <h3>Hastane Randevu Sistemi Flutter</h3>
          </div>
        </a>
        <a href="https://saracburak.github.io/burgerwebsite/" className="project-card" target="_blank" rel="noopener noreferrer">
          <img src={websiteImage1} alt="Proje 2" />
          <div className="card-content">
            <h3>Burger Restaurant Website</h3>
          </div>
        </a>
        <a href="https://hastanerandevusistemi.netlify.app" className="project-card" target="_blank" rel="noopener noreferrer">
          <img src={websiteImage2} alt="Proje 3" />
          <div className="card-content">
            <h3>Hastane Randevu Sistemi React</h3>
          </div>
        </a>
        <a href="https://github.com/saracburak/Urun-siparis-etme" className="project-card" target="_blank" rel="noopener noreferrer">
          <img src={flutterImage2} alt="Proje 4" />
          <div className="card-content">
            <h3>Ürün Sipariş Etme Flutter</h3>
          </div>
        </a>
        <a href="https://teknogencfrontend.netlify.app" className="project-card" target="_blank" rel="noopener noreferrer">
          <img src={websiteImage2} alt="Proje 5" />
          <div className="card-content">
            <h3>Teknogenç Projesi Website</h3>
          </div>
        </a>
        <a href="https://github.com/saracburak/Tekno-genc-flutter" className="project-card" target="_blank" rel="noopener noreferrer">
          <img src={flutterImage2} alt="Proje 6" />
          <div className="card-content">
            <h3>Teknogenç Projesi Flutter</h3>
          </div>
        </a>
      </div>
    </section>
  );
}

export default Project;
