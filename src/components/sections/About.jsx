import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaCode } from 'react-icons/fa';

const StatCard = ({ icon: Icon, title, value, delay }) => (
  <motion.div
    className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center text-center"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    whileHover={{ y: -5, backgroundColor: 'rgba(31, 41, 55, 0.7)' }}
  >
    <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mb-4">
      <Icon className="text-2xl text-primary" />
    </div>
    <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
    <p className="text-gray-400">{value}</p>
  </motion.div>
);

const About = () => {
  const stats = [
    {
      icon: FaBriefcase,
      title: "Experience",
      value: "2+ Years",
    },
    {
      icon: FaGraduationCap,
      title: "Education",
      value: "MCA, B.Sc",
    },
    {
      icon: FaCode,
      title: "Projects",
      value: "10+ Completed",
    },
  ];

  return (
    <motion.section
      id="about"
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
          Get To Know More
        </motion.p>
        
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="relative w-full max-w-md mx-auto aspect-square">
              <motion.img
                src="./assets/DSC_6745.png"
                alt="Profile picture"
                className="rounded-2xl object-cover w-full h-full shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary/20 to-transparent" />
            </div>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <StatCard key={stat.title} {...stat} delay={0.5 + index * 0.1} />
              ))}
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 space-y-4">
              <p className="text-gray-300 leading-relaxed">
                I am currently making the transition from a Java Developer role to a C#/.NET Developer position. 
                My background includes backend development experience with C#, .NET, and SQL Server at{' '}
                <a
                  href="https://www.smaket.ai/"
                  className="text-primary hover:text-blue-400 transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Smaket Solutions pvt. ltd
                </a>.
              </p>
              <p className="text-gray-300 leading-relaxed">
                My skills include a solid understanding of Java Core, Spring Boot, JavaScript, and React. 
                I'm passionate about creating efficient, scalable solutions and continuously learning new technologies.
              </p>
            </div>

            <motion.button
              className="btn-primary flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact').scrollIntoView()}
            >
              Let's Connect
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
