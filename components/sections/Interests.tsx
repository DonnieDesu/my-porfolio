'use client';

import { motion } from 'framer-motion';
import SectionContainer from '@/components/SectionContainer';
import { Sparkles } from 'lucide-react';

const Interests = () => {
  const interestCategories = [
    {
      title: 'Technology & Innovation',
      icon: '⚡',
      interests: ['Artificial Intelligence', 'Machine Learning', 'Cloud Computing', 'Web Technologies'],
    },
    {
      title: 'Cybersecurity',
      icon: '🔐',
      interests: ['Network Security', 'Ethical Hacking', 'Digital Forensics', 'Threat Analysis'],
    },
    {
      title: 'Software Development',
      icon: '💻',
      interests: ['Web Development', 'Backend Systems', 'API Design', 'System Architecture'],
    },
    {
      title: 'Emerging Tech',
      icon: '🧠',
      interests: ['Brain-Computer Interfaces', 'Neuroscience Technology', 'Full-Dive VR Research', 'Quantum Computing'],
    },
    {
      title: 'Hobbies & Passions',
      icon: '🎮',
      interests: ['Gaming & Esports', 'Anime & Manga', 'Motorcycles', 'Automotive Technology'],
    },
    {
      title: 'Coding Projects',
      icon: '🛠️',
      interests: ['Open Source', 'Tool Development', 'Automation Scripts', 'Data Analysis'],
    },
  ];

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
      id="interests"
      title="Interests & Passions"
      subtitle="What drives my innovation and continuous learning"
      className="bg-secondary/20"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {interestCategories.map((category, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -10 }}
            className="glass-effect p-6 rounded-lg border border-cyan-500/20 hover:border-green-500/50 transition-all duration-300 group"
          >
            <div className="mb-4">
              <span className="text-5xl block mb-3 group-hover:scale-110 transition-transform">
                {category.icon}
              </span>
              <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                {category.title}
              </h3>
            </div>
            <div className="space-y-2">
              {category.interests.map((interest, idx) => (
                <div key={idx} className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-green-400" />
                  <span className="text-gray-300 text-sm">{interest}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Why These Interests Matter */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-16 glass-effect p-8 rounded-lg border border-green-500/30"
      >
        <div className="flex items-center space-x-3 mb-6">
          <Sparkles className="text-green-400" size={28} />
          <h3 className="text-2xl font-bold text-green-400">Why These Matter</h3>
        </div>
        <p className="text-gray-300 leading-relaxed">
          My diverse interests in technology, cybersecurity, and emerging innovations drive my continuous learning and creativity. The intersection of software development and security fascinates me—building secure systems that protect data while innovating for the future. My passion for cutting-edge technologies like AI and neuroscience keeps me intellectually engaged, while gaming and automotive interests demonstrate my ability to understand complex systems and user experiences. These diverse perspectives make me a well-rounded professional capable of understanding business needs, user requirements, and technical challenges.
        </p>
      </motion.div>
    </SectionContainer>
  );
};

export default Interests;
