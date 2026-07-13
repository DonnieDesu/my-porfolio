'use client';

import { motion } from 'framer-motion';
import SectionContainer from '@/components/SectionContainer';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Programming Languages',
      skills: [
        { name: 'Python', level: 80 },
        { name: 'HTML/CSS', level: 85 },
        { name: 'JavaScript', level: 60 },
      ],
    },
    {
      category: 'IT & Systems',
      skills: [
        { name: 'Troubleshooting', level: 75 },
        { name: 'Computer Hardware', level: 70 },
        { name: 'Software Installation', level: 80 },
        { name: 'Technical Support', level: 75 },
      ],
    },
    {
      category: 'Data & Documentation',
      skills: [
        { name: 'Data Processing', level: 85 },
        { name: 'Data Entry', level: 90 },
        { name: 'Microsoft Office', level: 85 },
        { name: 'Document Management', level: 80 },
      ],
    },
    {
      category: 'Cybersecurity & Learning',
      skills: [
        { name: 'Cybersecurity Fundamentals', level: 70 },
        { name: 'Network Security', level: 65 },
        { name: 'Ethical Hacking Concepts', level: 60 },
        { name: 'Digital Forensics', level: 55 },
      ],
    },
    {
      category: 'Tools & Platforms',
      skills: [
        { name: 'Git & GitHub', level: 75 },
        { name: 'Linux', level: 60 },
        { name: 'Wireshark', level: 65 },
        { name: 'Virtual Machines', level: 70 },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <SectionContainer
      id="skills"
      title="Skills & Expertise"
      subtitle="Technical proficiencies and professional capabilities"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        className="grid md:grid-cols-2 gap-8"
      >
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={categoryIndex}
            variants={itemVariants}
            className="glass-effect p-8 rounded-lg border border-cyan-500/20"
          >
            <h3 className="text-xl font-bold text-cyan-400 mb-6">{category.category}</h3>
            <div className="space-y-5">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300 font-medium">{skill.name}</span>
                    <span className="text-cyan-400 text-sm">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2.5 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                      className="h-full bg-gradient-to-r from-cyan-500 to-green-500 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Certifications & Learning Paths */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-16 grid md:grid-cols-3 gap-6"
      >
        <div className="glass-effect p-6 rounded-lg border border-green-500/20 text-center">
          <div className="text-4xl mb-3">🎓</div>
          <h3 className="text-lg font-semibold text-green-400 mb-2">Currently Learning</h3>
          <p className="text-gray-400 text-sm">Advanced cybersecurity, cloud technologies, and modern web frameworks</p>
        </div>
        <div className="glass-effect p-6 rounded-lg border border-cyan-500/20 text-center">
          <div className="text-4xl mb-3">🔑</div>
          <h3 className="text-lg font-semibold text-cyan-400 mb-2">Platforms</h3>
          <p className="text-gray-400 text-sm">TryHackMe, Coursera, Cisco NetAcad, HackTheBox</p>
        </div>
        <div className="glass-effect p-6 rounded-lg border border-green-500/20 text-center">
          <div className="text-4xl mb-3">🚀</div>
          <h3 className="text-lg font-semibold text-green-400 mb-2">Goals</h3>
          <p className="text-gray-400 text-sm">CEH, Security+, and Azure Fundamentals certifications</p>
        </div>
      </motion.div>
    </SectionContainer>
  );
};

export default Skills;
