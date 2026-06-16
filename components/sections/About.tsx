'use client';

import { motion } from 'framer-motion';
import SectionContainer from '@/components/SectionContainer';
import { Code, Target, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Technical Foundation',
      description: 'Strong foundation in programming with Python and web technologies. Experienced in document management systems and data processing.',
    },
    {
      icon: Target,
      title: 'Career Focus',
      description: 'Transitioning into IT and cybersecurity with clear goals. Seeking opportunities to grow as a software developer and security professional.',
    },
    {
      icon: Zap,
      title: 'Problem Solver',
      description: 'Detail-oriented with strong analytical skills. Fast learner comfortable working independently and collaborating in teams.',
    },
  ];

  return (
    <SectionContainer
      id="about"
      title="About Me"
      subtitle="Computer Engineering Technology graduate passionate about IT and cybersecurity"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        {/* Left side - Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm <span className="text-cyan-400 font-semibold">Don Piedro F. Ramirez</span>, a Computer Engineering Technology graduate from the Technological University of the Philippines with a passion for building secure, scalable technology solutions.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Currently working as a <span className="text-green-400 font-semibold">Document Care Specialist</span>, where I've developed expertise in data processing, digital archiving, and quality management. This experience has given me valuable insights into working with large datasets, attention to detail, and maintaining data integrity.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              My career trajectory is focused on transitioning into IT and cybersecurity. I'm particularly interested in network security, security operations centers (SOC), and ethical hacking. I'm committed to continuous learning and building a portfolio of projects that demonstrate my capabilities.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm comfortable working independently and collaborating in teams. I love solving complex problems and staying updated with the latest technologies.
            </p>
          </div>
        </motion.div>

        {/* Right side - Highlights */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-effect p-6 rounded-lg border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 card-hover"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-cyan-400 flex-shrink-0">
                    <Icon size={28} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{highlight.title}</h3>
                    <p className="text-gray-400 text-sm">{highlight.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
        {[
          { number: '3+', label: 'Years Learning Dev' },
          { number: '10+', label: 'Projects Built' },
          { number: '100%', label: 'Commitment' },
          { number: '∞', label: 'Passion for Learning' },
        ].map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="text-center"
          >
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
              {stat.number}
            </div>
            <p className="text-gray-400 text-sm">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default About;
