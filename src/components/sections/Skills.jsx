import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

const SkillCard = ({ title, skills, delay }) => (
  <motion.div
    className="bg-gray-800 rounded-xl p-6 shadow-lg"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    whileHover={{ y: -5 }}
  >
    <h3 className="text-xl font-semibold text-primary mb-4">{title}</h3>
    <div className="space-y-3">
      {skills.map((skill, index) => (
        <motion.div
          key={skill.title}
          className="flex items-center gap-3"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: delay + index * 0.1 }}
        >
          <FaCheckCircle className="text-primary text-lg" />
          <div>
            <h4 className="text-white font-medium">{skill.title}</h4>
            <p className="text-gray-400 text-sm">{skill.level}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { title: "JavaScript", level: "Intermediate" },
        { title: "React JS", level: "Intermediate" }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { title: "Java/C#", level: "Experienced" },
        { title: ".Net", level: "Intermediate" },
        { title: "SQL Server", level: "Intermediate" },
        { title: "Git", level: "Intermediate" }
      ]
    },
    {
      title: "Development Tools",
      skills: [
        { title: "Eclipse/STS", level: "Experienced" },
        { title: "Visual Studio", level: "Intermediate" },
        { title: "VS Code", level: "Intermediate" }
      ]
    }
  ];

  return (
    <motion.section
      id="skills"
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
          Explore My
        </motion.p>
        
        <motion.h2
          className="text-4xl font-bold text-white text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={category.title}
              title={category.title}
              skills={category.skills}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
