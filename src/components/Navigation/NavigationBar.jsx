


import React from 'react';
import { GiClover } from "react-icons/gi";
import './NavigationBar.css';

const NavigationBar = () => {

  const handleNavClick = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top ">
      <div className="container-fluid mx-5">
        <a className="navbar-brand" href="#">
          <GiClover className="me-2" />
           Portfolio
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav ms-auto ">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map(
              (section) => (
                <li className="nav-item" key={section}>
                  <a className="nav-link" href={`#${section.toLowerCase()}`} onClick={() => handleNavClick(section.toLowerCase())}>
                    {section}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;


