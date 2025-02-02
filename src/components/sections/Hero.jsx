import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Hero = () => {
  return (
    <motion.section 
      id="profile"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-8 px-4 py-16 bg-gradient-to-b from-gray-900 to-gray-800"
    >
      <motion.div 
        className="w-full md:w-1/2 flex justify-center"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        <motion.img 
          src="./assets/DSC_Suite.png" 
          alt="Subhankar picture"
          className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-xl border-4 border-primary"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
        <motion.p 
          className="text-primary font-medium text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Hello, I'm
        </motion.p>
        
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Subhankar Priyaranjan Rout
        </motion.h1>

        <motion.p 
          className="text-xl md:text-2xl text-gray-300 mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Backend Developer
        </motion.p>

        <motion.p 
          className="text-primary font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          At
        </motion.p>

        <motion.a
          href="https://www.smaket.ai/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl text-primary hover:text-blue-400 transition-colors duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          Smaket Solutions pvt. ltd
        </motion.a>

        <motion.div 
          className="flex gap-4 justify-center md:justify-start mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <motion.button
            onClick={() => window.open('./assets/Experience.pdf')}
            className="px-6 py-3 bg-primary text-white rounded-full hover:bg-blue-600 transition-colors duration-300 flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Working Status
          </motion.button>
          
          <motion.button
            onClick={() => location.href='./#contact'}
            className="px-6 py-3 bg-transparent border-2 border-primary text-primary rounded-full hover:bg-primary hover:text-white transition-colors duration-300 flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Info
          </motion.button>
        </motion.div>

        <motion.div 
          className="flex gap-6 justify-center md:justify-start mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <motion.a
            href="https://www.linkedin.com/in/subhankar-priyaranjan-rout-606a211a2"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-gray-400 hover:text-primary transition-colors duration-300"
            whileHover={{ scale: 1.2 }}
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="https://github.com/subhankarpriyaranjan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-gray-400 hover:text-primary transition-colors duration-300"
            whileHover={{ scale: 1.2 }}
          >
            <FaGithub />
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
