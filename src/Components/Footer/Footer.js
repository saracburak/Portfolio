import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/buraksaraç/" target="_blank" rel="noopener noreferrer" className="social-link">
          <i className="bx bxl-linkedin"></i>
          <span>LinkedIn</span>
        </a>
        <a href="https://github.com/saracburak" target="_blank" rel="noopener noreferrer" className="social-link">
          <i className="bx bxl-github"></i>
          <span>GitHub</span>
        </a>
      </div>
      <br />
      <p>©2024 Portfolio sitesi. Tüm hakları saklıdır.</p>
    </footer>
  );
}

export default Footer;
