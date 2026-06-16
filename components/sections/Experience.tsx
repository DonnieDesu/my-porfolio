'use client';

import { motion } from 'framer-motion';
import SectionContainer from '@/components/SectionContainer';

const Experience = () => {
  const experiences = [
    {
      title: 'Document Care Specialist',
      company: 'Current Role',
      location: 'Cavite, Philippines',
      period: 'Present',
      responsibilities: [
        'Document indexing, encoding, and data processing with high accuracy',
        'Digital archiving and document verification procedures',
        'Quality checking and ensuring data integrity',
        'Handling large volumes of digital records efficiently',
        'Collaboration with team members for data management projects',
      ],
      skills: ['Data Processing', 'Attention to Detail', 'Problem Solving', 'Team Collaboration'],
    },
  ];

  const education = [
    {
      degree: 'Bachelor of Engineering Technology',
      major: 'Computer Engineering Technology',
      school: 'Technological University of the Philippines (TUP)',
      status: 'Completed',
      highlights: ['Engineering fundamentals', 'Computer systems', 'Problem solving methodology'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <SectionContainer
      id="experience"
      title="Experience & Education"
      subtitle="Professional background and academic foundation"
    >
      {/* Experience */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold text-cyan-400 mb-8 flex items-center space-x-2">
          <span className="text-3xl">💼</span>
          <span>Professional Experience</span>
        </h3>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="space-y-6"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-effect p-8 rounded-lg border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-4 flex-col md:flex-row">
                <div>
                  <h4 className="text-2xl font-bold text-white mb-2">{exp.title}</h4>
                  <p className="text-cyan-400 font-semibold">{exp.company}</p>
                </div>
                <div className="text-gray-400 text-sm mt-4 md:mt-0">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="text-lg">📍</span>
                    <span>{exp.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-lg">📅</span>
                    <span>{exp.period}</span>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h5 className="text-sm font-semibold text-gray-300 mb-3">Key Responsibilities:</h5>
                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="text-gray-400 text-sm flex items-start space-x-3">
                      <span className="text-green-400 mt-1">▸</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h5 className="text-sm font-semibold text-gray-300 mb-3">Skills Developed:</h5>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full text-xs bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Education */}
      <div>
        <h3 className="text-2xl font-bold text-green-400 mb-8 flex items-center space-x-2">
          <span className="text-3xl">🎓</span>
          <span>Education</span>
        </h3>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="space-y-6"
        >
          {education.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-effect p-8 rounded-lg border border-green-500/20 hover:border-green-500/50 transition-all duration-300"
            >
              <div className="mb-4">
                <h4 className="text-2xl font-bold text-white mb-2">{edu.degree}</h4>
                <p className="text-green-400 font-semibold mb-1">Major: {edu.major}</p>
                <p className="text-gray-400">{edu.school}</p>
                <p className="text-sm text-gray-500 mt-2">Status: {edu.status}</p>
              </div>
              <div>
                <h5 className="text-sm font-semibold text-gray-300 mb-3">Highlights:</h5>
                <ul className="flex flex-wrap gap-2">
                  {edu.highlights.map((highlight, idx) => (
                    <li key={idx} className="px-3 py-1 rounded-full text-xs bg-green-500/20 text-green-300 border border-green-500/30">
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionContainer>
  );
};

export default Experience;
