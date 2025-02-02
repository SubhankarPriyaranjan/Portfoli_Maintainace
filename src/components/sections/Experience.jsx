import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendar, FaMapMarkerAlt } from 'react-icons/fa';

const TimelineItem = ({ role, company, duration, location, description, skills, delay }) => (
  <motion.div
    className="relative pl-8 sm:pl-32 py-6 group"
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
  >
    {/* Timeline line */}
    <div className="absolute left-0 sm:left-12 h-full w-[2px] bg-gray-700 group-last:h-6" />
    
    {/* Timeline dot */}
    <motion.div
      className="absolute left-[-8px] sm:left-[44px] w-4 h-4 rounded-full bg-primary"
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: delay + 0.2 }}
    >
      <div className="absolute w-12 h-12 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-primary/30 scale-0 animate-ping" />
    </motion.div>
    
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-gray-800/70 transition-colors duration-300">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4">
        <div>
          <h3 className="text-xl font-semibold text-white flex items-center gap-2">
            <FaBriefcase className="text-primary" />
            {role}
          </h3>
          <p className="text-primary font-medium">{company}</p>
        </div>
        <div className="flex flex-col items-start sm:items-end text-sm text-gray-400 mt-2 sm:mt-0">
          <p className="flex items-center gap-2">
            <FaCalendar className="text-primary" />
            {duration}
          </p>
          <p className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-primary" />
            {location}
          </p>
        </div>
      </div>
      
      <p className="text-gray-300 mb-4 leading-relaxed">{description}</p>
      
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

const Experience = () => {
  const experiences = [
    {
      role: "Backend Developer",
      company: "Smaket Solutions pvt. ltd",
      duration: "2023 - Present",
      location: "Bhubaneswar, India",
      description: "Working on backend development using C# and .NET, implementing RESTful APIs, and managing SQL Server databases. Contributing to the development of scalable microservices architecture.",
      skills: ["C#", ".NET", "SQL Server", "RESTful APIs", "Microservices"]
    },
    {
      role: "Java Developer",
      company: "Previous Company",
      duration: "2022 - 2023",
      location: "Bhubaneswar, India",
      description: "Developed and maintained Java-based applications, worked with Spring Boot framework, and implemented database solutions using MySQL.",
      skills: ["Java", "Spring Boot", "MySQL", "REST APIs", "Git"]
    },
    // Add more experiences as needed
  ];

  return (
    <motion.section
      id="experience"
      className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-20 px-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          My Professional Journey
        </motion.p>
        
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Work Experience
        </motion.h2>

        <div className="mt-12">
          {experiences.map((experience, index) => (
            <TimelineItem
              key={index}
              {...experience}
              delay={0.3 + index * 0.2}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;
