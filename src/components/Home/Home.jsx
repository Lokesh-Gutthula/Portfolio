
import React from 'react';
import me from '/N190127_me.png';
import Resume from '/Resume.pdf';
import './Home.css';
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaInstagram, FaHackerrank } from 'react-icons/fa';
import { SiLeetcode } from "react-icons/si";

import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div
      id="home"
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <div className=" home-container row align-items-center justify-content-center text-center text-md-start">
          <div className="col-12 col-md-6 mb-4 mb-md-0 ">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 0.2 }}
            >
              Hello, I'm Lokesh Gutthula
            </motion.h1>
            <motion.h3
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 0.4 }}
            >
              And I'm a <span className="text-info">Fullstack Developer</span>
            </motion.h3>
            <p className="fs-5">
              I am a CSE student fluent in HTML, CSS, JavaScript, Django, MySQL, Python, jQuery, and React.
            </p>
            <div className=' text-center'>
            <button className="btn btn-success my-4 px-4  " onClick={() => window.location.href='/Resume.pdf'}>
              Download Resume
            </button>
            </div>
            <div className="social-icons mt-5 text-center">
              <a href="https://github.com" className="me-3"><FaGithub size={30} /></a>
              <a href="https://linkedin.com" className="me-3"><FaLinkedin size={30} /></a>
              <a href="https://leetcode.com" className="me-3"><SiLeetcode size={30} /></a>
              <a href="https://Hackerrank.com" className="me-3"><FaHackerrank size={30} /></a>
              {/* <a href="https://twitter.com" className="me-3"><FaTwitter size={30} /></a> */}
             {/* <a href="https://facebook.com" className="me-3"><FaFacebook size={30} /></a> */}
             {/* <a href="https://instagram.com" className="me-3"><FaInstagram size={30} /></a> */}
           </div>
          </div>
          <div className="col-12 col-md-6 text-center">
            <motion.div
                      
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
                scale: {
                  type: "spring",
                  damping: 5,
                  stiffness: 100,
                  restDelta: 0.001
                }}}
            >
              <img src={me} alt="Profile" />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;

