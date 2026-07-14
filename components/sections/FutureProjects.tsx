'use client';

import { motion } from 'framer-motion';
import SectionContainer from '../components/SectionContainer';
import { Zap, Eye } from 'lucide-react';

const FutureProjects = () => {
  const futureProjects = [
    {
      title: 'Personal AI Assistant',
      description: 'An AI assistant that runs locally on a personal computer, focused on productivity, automation, and conversational interaction.',
      status: 'In Progress',
      icon: '🤖',
      tech: ['Python', 'AI/ML', 'NLP', 'Automation'],
    },
    {
      title: 'Cybersecurity Home Lab',
      description: 'A personal environment for learning networking, system security, monitoring, and incident response in a controlled setting.',
      status: 'Planning',
      icon: '🔬',
      tech: ['Linux', 'Networking', 'Security', 'Virtual Machines'],
    },
    {
      title: 'SOC Analyst Dashboard',
      description: 'A dashboard for monitoring security events, alerts, and suspicious activities with real-time threat analysis.',
      status: 'Planning',
      icon: '📊',
      tech: ['SIEM', 'Monitoring', 'Analytics', 'Security'],
    },
    {
      title: 'Network Monitoring Tool',
      description: 'A tool for tracking network activity and visualizing traffic patterns with deep packet inspection capabilities.',
      status: 'Planning',
      icon: '🌐',
      tech: ['Networking', 'Python', 'Data Visualization', 'Wireshark'],
    },
    {
      title: 'AI-Powered Security Assistant',
      description: 'A future project combining artificial intelligence with cybersecurity analysis for threat detection and response.',
      status: 'Concept',
      icon: '🛡️',
      tech: ['AI/ML', 'Cybersecurity', 'Python', 'Advanced Analytics'],
    },
    {
      title: 'Web Security Analyzer',
      description: 'An automated tool for analyzing websites for security vulnerabilities and generating comprehensive reports.',
      status: 'Planning',
      icon: '🔍',
      tech: ['Web Security', 'Python', 'Automation', 'Reporting'],
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'In Progress':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'Planning':
        return 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30';
      case 'Concept':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <SectionContainer
      id="learning"
      title="Currently Learning & Future Projects"
      subtitle="Ambitious ideas to expand skills and contribute to the tech community"
      className="bg-secondary/20"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {futureProjects.map((project, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="glass-effect p-6 rounded-lg border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 flex flex-col"
          >
            <div className="mb-4 flex items-start justify-between">
              <span className="text-4xl">{project.icon}</span>
              <span className={`text-xs px-2 py-1 rounded-full border ${getStatusColor(project.status)}`}>
                {project.status}
              </span>
            </div>

            <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
            <p className="text-gray-400 text-sm mb-4 flex-1">{project.description}</p>

            <div>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2 py-1 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Learning Resources */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-16 glass-effect p-8 rounded-lg border border-green-500/20"
      >
        <div className="flex items-center space-x-3 mb-6">
          <Zap className="text-green-400" size={28} />
          <h3 className="text-2xl font-bold text-green-400">Learning Resources & Platforms</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-white mb-3 flex items-center space-x-2">
              <Eye size={18} className="text-cyan-400" />
              <span>Active Learning</span>
            </h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>• TryHackMe - Interactive cybersecurity labs</li>
              <li>• Coursera - Professional development courses</li>
              <li>• Cisco NetAcad - Networking fundamentals</li>
              <li>• HackTheBox - Advanced security challenges</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3 flex items-center space-x-2">
              <Zap size={18} className="text-green-400" />
              <span>Target Certifications</span>
            </h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>• CompTIA A+</li>
              <li>• Certified Ethical Hacker (CEH)</li>
              <li>• CompTIA Security+</li>
              <li>• Microsoft Azure Fundamentals</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </SectionContainer>
  );
};

export default FutureProjects;
