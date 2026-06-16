'use client';

import { motion } from 'framer-motion';
import SectionContainer from '@/components/SectionContainer';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Document Management System',
      description: 'A comprehensive web-based system for organizing, indexing, and searching digital documents efficiently. Features advanced filtering, categorization, and archive capabilities.',
      tech: ['Python', 'HTML', 'CSS', 'JavaScript', 'Database'],
      status: 'Completed',
      icon: '📁',
      link: '#',
      github: '#',
    },
    {
      title: 'Employee Records Database',
      description: 'A secure system for storing and managing employee information with role-based access control. Implements data encryption and comprehensive audit logging.',
      tech: ['Python', 'SQL', 'Security', 'Backend'],
      status: 'Completed',
      icon: '👥',
      link: '#',
      github: '#',
    },
    {
      title: 'IT Support Ticket System',
      description: 'A platform that allows users to submit and track technical support requests. Features real-time notifications, priority management, and automated workflows.',
      tech: ['Python', 'Web Technologies', 'Backend', 'Frontend'],
      status: 'Completed',
      icon: '🎫',
      link: '#',
      github: '#',
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <SectionContainer
      id="projects"
      title="Featured Projects"
      subtitle="Practical applications demonstrating technical skills and problem-solving abilities"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -10 }}
            className="glass-effect rounded-lg border border-cyan-500/20 overflow-hidden hover:border-cyan-500/50 transition-all duration-300 group flex flex-col h-full"
          >
            {/* Project Header */}
            <div className="h-32 bg-gradient-to-br from-cyan-500/20 to-green-500/20 flex items-center justify-center group-hover:from-cyan-500/30 group-hover:to-green-500/30 transition-all duration-300">
              <span className="text-6xl">{project.icon}</span>
            </div>

            {/* Project Content */}
            <div className="p-6 flex-1 flex flex-col">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <span className="text-xs px-2 py-1 rounded-full bg-green-500/20 text-green-400 border border-green-500/30">
                  {project.status}
                </span>
              </div>

              <p className="text-gray-400 text-sm mb-4 flex-1">{project.description}</p>

              {/* Technologies */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex gap-3 pt-4 border-t border-cyan-500/20">
                <motion.a
                  href={project.link}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 px-4 py-2 rounded bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 text-sm font-semibold hover:bg-cyan-500/30 transition-colors flex items-center justify-center space-x-2"
                >
                  <ExternalLink size={16} />
                  <span>View</span>
                </motion.a>
                <motion.a
                  href={project.github}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 px-4 py-2 rounded bg-green-500/20 text-green-400 border border-green-500/30 text-sm font-semibold hover:bg-green-500/30 transition-colors flex items-center justify-center space-x-2"
                >
                  <Github size={16} />
                  <span>Code</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionContainer>
  );
};

export default Projects;
