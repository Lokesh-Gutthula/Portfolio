import React from 'react';
import './Project.css';
import restaurant_bootstrap from '/restaurant_bootstrap.png';
import Chatbot_Restaurant from '/Chatbot_Restaurant.png';
import {motion} from 'framer-motion'

const Project = () => {
  return (
    // <div style={{ background-color : "#0a192f"}}>
    
    <motion.div
      // className='skills'
      id="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
    <div style={{ backgroundColor: "#0a192f" }}>


    <div className="container py-5">
      <h2 className="text-center mb-5 text-light">My Projects</h2>
      <div className="row justify-content-center">
        <ProjectCard
          title="Restaurant Website"
          description="A restaurant website with complete details like chefs, ratings and reviews, food items, a form to book a table, and contact details."
          technologies="HTML, CSS, JavaScript, jQuery, Bootstrap"
          image={restaurant_bootstrap}
          link="https://lokesh-gutthula.github.io/Restaurant/"
        />
        <ProjectCard
          title="Fullstack Restaurant Website with Chatbot Integration"
          description="This project helps to order and track food items in the nearest hotels and takes reviews and ratings. The chatbot can order food and also track the food."
          technologies="React, Django, Bootstrap, HTML, CSS, JavaScript, Dialogflow, MySQL, Ngrok"
          image={Chatbot_Restaurant}
          link="https://example.com/project2" 
        />
      </div>
    </div>
    
    </div>
    </motion.div>
  );
};

const ProjectCard = ({ title, description, technologies, image, link }) => {
  return (
    <div className="col-md-6 mb-4">
      <div className="card shadow-sm h-100">
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text"><strong>Technologies used:</strong> {technologies}</p>
          <div className="mt-auto">
            <a href={link} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-visit">Visit</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
