import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone } from 'react-icons/fa';

const ContactItem = ({ icon, title, value, link, delay }) => (
  <motion.div
    className="bg-gray-800 rounded-xl p-6 flex items-start gap-4 shadow-lg"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    whileHover={{ y: -5 }}
  >
    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary text-2xl">
      {icon}
    </div>
    <div>
      <h3 className="text-lg font-semibold text-white mb-1">{title}</h3>
      {link ? (
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-primary transition-colors duration-300"
        >
          {value}
        </a>
      ) : (
        <p className="text-gray-400">{value}</p>
      )}
    </div>
  </motion.div>
);

const Contact = () => {
  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "subhankarpriyaranjan@gmail.com",
      link: "mailto:subhankarpriyaranjan@gmail.com"
    },
    {
      icon: <FaLinkedin />,
      title: "LinkedIn",
      value: "Subhankar Priyaranjan Rout",
      link: "https://www.linkedin.com/in/subhankar-priyaranjan-rout-606a211a2"
    },
    {
      icon: <FaGithub />,
      title: "GitHub",
      value: "subhankarpriyaranjan",
      link: "https://github.com/subhankarpriyaranjan"
    },
    {
      icon: <FaPhone />,
      title: "Phone",
      value: "+91 XXXXXXXXXX",
      link: null
    }
  ];

  return (
    <motion.section
      id="contact"
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
          Get in Touch
        </motion.p>
        
        <motion.h2
          className="text-4xl font-bold text-white text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Contact Me
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {contactInfo.map((item, index) => (
            <ContactItem
              key={item.title}
              {...item}
              delay={index * 0.2}
            />
          ))}
        </div>
        
        <motion.form
          className="max-w-2xl mx-auto bg-gray-800 rounded-xl p-8 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-primary text-white"
                placeholder="John Doe"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-primary text-white"
                placeholder="john@example.com"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                rows="5"
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-primary text-white resize-none"
                placeholder="Type your message here..."
                required
              ></textarea>
            </div>
            
            <motion.button
              type="submit"
              className="w-full bg-primary text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
            </motion.button>
          </div>
        </motion.form>
      </div>
    </motion.section>
  );
};

export default Contact;
