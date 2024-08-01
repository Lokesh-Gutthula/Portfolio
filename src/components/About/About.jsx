import React from 'react';
import './About.css';
import { motion } from 'framer-motion';

const About = () => {
  return (
    
    <motion.div
      // className='container about-container'
      id="about"
      initial={{ opacity: 1 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
    <div style={{ backgroundColor: '#0a192f' }} className='py-5'>
    <div className="container about-container">
      <h2 className="text-center mb-4 about-title">About Me</h2>
      <div className="timeline">
        <div className=" mb-4">
          <div className="timeline-content">
            <h3>Education</h3>
            <ul className="list-unstyled">
              <li className="timeline-card">
                <div className="d-flex justify-content-between">
                  <strong>SSC (10th Class)</strong>
                  <span>10.00</span>
                </div>
                <div>SVSR Govt High School</div>
              </li>
              <li className="timeline-card">
                <div className="d-flex justify-content-between">
                  <strong>PUC</strong>
                  <span>9.22</span>
                </div>
                <div>IIIT RGUKT</div>
              </li>
              <li className="timeline-card">
                <div className="d-flex justify-content-between">
                  <strong>B-Tech</strong>
                  <span>8.1</span>
                </div>
                <div>IIIT RGUKT</div>
              </li>
            </ul>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-content">
            <h3>Hobbies</h3>
            <ul className="list-unstyled">
              <li className="timeline-card">Reading Books</li>
              <li className="timeline-card">Traveling</li>
              <li className="timeline-card">Learning new technologies</li>
            </ul>
          </div>
        </div>
      </div>
      </div>
    </div>
    </motion.div>
  );
}

export default About;
