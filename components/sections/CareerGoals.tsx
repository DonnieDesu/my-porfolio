'use client';

import { motion } from 'framer-motion';
import SectionContainer from '@/components/SectionContainer';
import { CheckCircle2 } from 'lucide-react';

const CareerGoals = () => {
  const timeline = [
    {
      phase: 'Current',
      timeline: 'Now',
      goals: [
        'Build comprehensive software development skills',
        'Gain professional IT support experience',
        'Complete foundational cybersecurity training',
        'Develop 5+ portfolio projects',
      ],
      color: 'cyan',
    },
    {
      phase: 'Short-Term',
      timeline: '6-12 Months',
      goals: [
        'Land an IT Support or Junior Developer role',
        'Complete CompTIA A+ certification',
        'Build experience with cloud platforms',
        'Contribute to open-source projects',
      ],
      color: 'green',
    },
    {
      phase: 'Mid-Term',
      timeline: '1-2 Years',
      goals: [
        'Transition into cybersecurity specialization',
        'Pursue Security+ certification',
        'Build advanced security lab projects',
        'Specialize in SOC operations',
      ],
      color: 'cyan',
    },
    {
      phase: 'Long-Term',
      timeline: '2+ Years',
      goals: [
        'Become a Cybersecurity Analyst / SOC Analyst',
        'Pursue CEH certification',
        'Work on AI and cybersecurity technologies',
        'Lead security operations team',
      ],
      color: 'green',
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

  const getColorClasses = (color: string) => {
    if (color === 'cyan') {
      return {
        border: 'border-cyan-500/30 hover:border-cyan-500/50',
        bg: 'bg-cyan-500/10',
        text: 'text-cyan-400',
        icon: 'text-cyan-400',
      };
    }
    return {
      border: 'border-green-500/30 hover:border-green-500/50',
      bg: 'bg-green-500/10',
      text: 'text-green-400',
      icon: 'text-green-400',
    };
  };

  return (
    <SectionContainer
      id="goals"
      title="Career Goals & Timeline"
      subtitle="Clear roadmap for professional growth and development"
    >
      {/* Timeline */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        className="relative"
      >
        {/* Vertical line */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-green-500 transform -translate-x-1/2" />

        {/* Timeline items */}
        <div className="space-y-12 md:space-y-0">
          {timeline.map((item, index) => {
            const isLeft = index % 2 === 0;
            const colors = getColorClasses(item.color);

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`md:flex ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
              >
                {/* Content */}
                <div className="flex-1">
                  <div className={`glass-effect p-8 rounded-lg border ${colors.border} transition-all duration-300 hover:shadow-lg`}>
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className={`text-2xl font-bold ${colors.text}`}>{item.phase}</h3>
                      <span className={`text-sm px-3 py-1 rounded-full ${colors.bg} ${colors.text}`}>
                        {item.timeline}
                      </span>
                    </div>
                    <ul className="space-y-3 mt-4">
                      {item.goals.map((goal, idx) => (
                        <li key={idx} className="flex items-start space-x-3 text-gray-300">
                          <CheckCircle2 size={20} className={colors.icon} />
                          <span>{goal}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="hidden md:flex justify-center">
                  <div className={`w-6 h-6 rounded-full ${colors.bg} border-2 ${colors.text}`} />
                </div>

                {/* Spacer */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Key Milestones */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-16 grid md:grid-cols-2 gap-8"
      >
        <div className="glass-effect p-8 rounded-lg border border-cyan-500/30">
          <h4 className="text-xl font-bold text-cyan-400 mb-4 flex items-center space-x-2">
            <span>🎯</span>
            <span>Immediate Focus</span>
          </h4>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li className="flex items-start space-x-3">
              <span className="text-cyan-400 mt-1">▸</span>
              <span>Secure entry-level position in IT or development</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-cyan-400 mt-1">▸</span>
              <span>Develop practical experience with production systems</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-cyan-400 mt-1">▸</span>
              <span>Obtain industry-recognized certifications</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-cyan-400 mt-1">▸</span>
              <span>Build professional network in tech industry</span>
            </li>
          </ul>
        </div>

        <div className="glass-effect p-8 rounded-lg border border-green-500/30">
          <h4 className="text-xl font-bold text-green-400 mb-4 flex items-center space-x-2">
            <span>🚀</span>
            <span>Long-Term Vision</span>
          </h4>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li className="flex items-start space-x-3">
              <span className="text-green-400 mt-1">▸</span>
              <span>Lead security operations or development team</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-green-400 mt-1">▸</span>
              <span>Specialize in AI-powered security solutions</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-green-400 mt-1">▸</span>
              <span>Contribute to open-source security tools</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-green-400 mt-1">▸</span>
              <span>Mentor junior developers and security professionals</span>
            </li>
          </ul>
        </div>
      </motion.div>
    </SectionContainer>
  );
};

export default CareerGoals;
