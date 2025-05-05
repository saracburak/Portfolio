import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li><a href="#home" className="nav-link"><i className='bx bx-home-alt'></i></a></li>
        <li><a href="#about" className="nav-link"><i className='bx bx-user'></i></a></li>
        <li><a href="#portfolio" className="nav-link"><i className='bx bx-image'></i></a></li>
        <li><a href="#contact" className="nav-link"><i className='bx bx-envelope'></i></a></li>
      </ul>
    </div>
  );
}

export default Sidebar;
