import React, { useState } from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaPython, FaGit, FaGithub, FaCode } from 'react-icons/fa';
import { SiDjango, SiMysql, SiDialogflow, SiJquery } from 'react-icons/si';
import './Skills.css';
import { motion, AnimatePresence } from 'framer-motion';

import sql_certificate from '/sql_certificate.png';
import python_certificate from '/python_certificate.png';
import python_datastructures_certificate from '/python_datastructures.png';
import python_OOPS_certificate from '/Python_OOPS.png';
import python_certificate_linkedin from '/Python Certificate Linkedin Learning.png';

const Skills = () => {
  const [selectedId, setSelectedId] = useState(null);

    const certificates = [
      { id: 'sql', image: sql_certificate, title: "SQL Certificate", issuer: "Harishankaran K", date: "25-08-2023" },
      { id: 'python-linkedin', image: python_certificate_linkedin, title: "Python Certificate LinkedIn Learning", issuer: "Dan Brodnitz", date: "10-05-2024" },
      { id: 'python-oops', image: python_OOPS_certificate, title: "Python OOPS Certificate", issuer: "Sian Harris", date: "29-06-2024" },
      { id: 'python-datastructures', image: python_datastructures_certificate, title: "Python Datastructures Certificate", issuer: "Charles Severance", date: "29-05-2024" },
      { id: 'python-basic', image: python_certificate, title: "Python Certificate", issuer: "Harishankaran K", date: "26-09-2023" },
    ];
    

  return (
    <div className='skills' id="skills">
      <div className="container py-5">
        <h2 className="text-center my-5">My Skills and Certificates</h2>
        <motion.div
          className='skills-content'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <div className="row justify-content-center">
            <SkillCard icon={<FaReact />} skill="React" />
            <SkillCard icon={<FaHtml5 />} skill="HTML" />
            <SkillCard icon={<FaCss3Alt />} skill="CSS" />
            <SkillCard icon={<FaJs />} skill="JavaScript" />
            <SkillCard icon={<FaPython />} skill="Python" />
            <SkillCard icon={<SiDjango />} skill="Django" />
            <SkillCard icon={<SiMysql />} skill="MySQL" />
            <SkillCard icon={<SiDialogflow />} skill="Dialogflow" />
            <SkillCard icon={<SiJquery />} skill="jQuery" />
            <SkillCard icon={<FaGit />} skill="Git" />
            <SkillCard icon={<FaGithub />} skill="GitHub" />
            <SkillCard icon={<FaCode />} skill="Fullstack Development" />
          </div>
        </motion.div>
        <h3 className="text-center mb-4 py-5">Certificates</h3>
        <div className="row justify-content-center">
          {certificates.map(certificate => (
            <motion.div
              key={certificate.id}
              layoutId={certificate.id}
              onClick={() => setSelectedId(certificate.id)}
              className="col-md-4 col-sm-6 mb-4"
            >
              <CertificateCard
                image={certificate.image}
                title={certificate.title}
                issuer={certificate.issuer}
                date={certificate.date}
              />
            </motion.div>
          ))}
        </div>
        <AnimatePresence>
          {selectedId && (
            <motion.div
              className="certificate-details"
              layoutId={selectedId}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
            >
              {certificates.find(certificate => certificate.id === selectedId) && (
                <CertificateDetail
                  certificate={certificates.find(certificate => certificate.id === selectedId)}
                  onClose={() => setSelectedId(null)}
                />
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const SkillCard = ({ icon, skill }) => (
  <div className="col-md-3 col-sm-6 mb-4">
    <div className="skill-card p-3 text-center">
      <div className="skill-icon mb-3">{icon}</div>
      <h4 className="skill-name">{skill}</h4>
    </div>
  </div>
);

const CertificateCard = ({ image, title, issuer, date }) => (
  <div className="certificate-card p-3 text-center">
    <img src={image} alt={title} className="certificate-img mb-3" />
    <h4 className="certificate-title">{title}</h4>
    <p className="certificate-issuer">{issuer}</p>
    <p className="certificate-date">{date}</p>
  </div>
);

const CertificateDetail = ({ certificate, onClose }) => (
  <div className="certificate-detail p-4 text-center">
    <img src={certificate.image} alt={certificate.title} className="certificate-img mb-3" />
    <h4 className="certificate-title">{certificate.title}</h4>
    <p className="certificate-issuer">{certificate.issuer}</p>
    <p className="certificate-date">{certificate.date}</p>
    <button className="btn btn-secondary mt-3" onClick={onClose}>Close</button>
  </div>
);

export default Skills;
