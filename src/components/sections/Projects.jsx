import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ title, description, technologies, githubLink, liveLink, image, delay }) => (
  <motion.div
    className="bg-gray-800 rounded-xl overflow-hidden shadow-lg"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    whileHover={{ y: -5 }}
  >
    <div className="relative overflow-hidden group h-48">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
    
    <div className="p-6 space-y-4">
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
      
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span 
            key={index} 
            className="px-3 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
      
      <div className="flex gap-4 pt-2">
        {githubLink && (
          <motion.a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <FaGithub className="text-lg" />
            <span>Code</span>
          </motion.a>
        )}
        {liveLink && (
          <motion.a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <FaExternalLinkAlt className="text-lg" />
            <span>Live Demo</span>
          </motion.a>
        )}
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "Modern portfolio website built with React and Framer Motion, featuring smooth animations and responsive design.",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      githubLink: "https://github.com/subhankarpriyaranjan/Portfoli_Maintainace",
      image: "./assets/portfolio-preview.png",
    },
    {
      title: "E-commerce Platform",
      description: "Full-stack e-commerce platform with user authentication, product management, and payment integration.",
      technologies: ["C#", ".NET", "SQL Server", "React"],
      githubLink: "https://github.com/yourusername/ecommerce",
      image: "./assets/ecommerce-preview.png",
    },
    // Add more projects as needed
  ];

  return (
    <motion.section
      id="projects"
      className="min-h-screen bg-gray-900 py-20 px-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.p
          className="text-primary text-center font-medium mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Browse My Recent
        </motion.p>
        
        <motion.h2
          className="text-4xl font-bold text-white text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Personal Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
