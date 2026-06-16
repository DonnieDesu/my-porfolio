'use client';

import { motion } from 'framer-motion';
import SectionContainer from '@/components/SectionContainer';
import { Mail, Github, Linkedin, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const contactInfo = [
    {
      icon: MapPin,
      label: 'Location',
      value: 'Cavite, Philippines',
      link: '#',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'ramirezdonpiedro@gmail.com',
      link: 'mailto:ramirezdonpiedro@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+63 XXX XXX XXXX',
      link: 'tel:+63XXXXXXXXX',
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      url: 'https://github.com/DonnieDesu',
      color: 'hover:text-cyan-400',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/don-piedro-ramirez-8388363b3',
      color: 'hover:text-cyan-400',
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('loading');

    setTimeout(() => {
      setFormStatus('success');
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1000);
  };

  return (
    <SectionContainer
      id="contact"
      title="Let's Connect"
      subtitle="Interested in opportunities or want to chat about tech? Reach out!"
    >
      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        {/* Contact Info */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
        >
          <h3 className="text-2xl font-bold text-white mb-8">Get In Touch</h3>

          {/* Direct Contact */}
          <div className="space-y-6 mb-8">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.a
                  key={index}
                  variants={itemVariants}
                  href={info.link}
                  className="glass-effect p-4 rounded-lg border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 flex items-start space-x-4 group"
                >
                  <div className="text-cyan-400 group-hover:text-green-400 transition-colors flex-shrink-0">
                    <Icon size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wide">{info.label}</p>
                    <p className="text-white font-semibold group-hover:text-cyan-400 transition-colors">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              );
            })}
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-3 glass-effect rounded-lg border border-cyan-500/20 text-gray-400 ${social.color} transition-colors duration-300`}
                    title={social.label}
                  >
                    <Icon size={24} />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-white mb-8">Send Me a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
              <input
                type="text"
                required
                className="w-full px-4 py-3 bg-secondary/50 border border-cyan-500/20 rounded-lg text-white placeholder-gray-500 focus:border-cyan-500 focus:outline-none transition-colors duration-300"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
              <input
                type="email"
                required
                className="w-full px-4 py-3 bg-secondary/50 border border-cyan-500/20 rounded-lg text-white placeholder-gray-500 focus:border-cyan-500 focus:outline-none transition-colors duration-300"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
              <input
                type="text"
                required
                className="w-full px-4 py-3 bg-secondary/50 border border-cyan-500/20 rounded-lg text-white placeholder-gray-500 focus:border-cyan-500 focus:outline-none transition-colors duration-300"
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
              <textarea
                required
                rows={5}
                className="w-full px-4 py-3 bg-secondary/50 border border-cyan-500/20 rounded-lg text-white placeholder-gray-500 focus:border-cyan-500 focus:outline-none transition-colors duration-300 resize-none"
                placeholder="Your message here..."
              />
            </div>

            <motion.button
              type="submit"
              disabled={formStatus === 'loading'}
              whileHover={{ scale: formStatus === 'loading' ? 1 : 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              {formStatus === 'loading' && (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              )}
              <span>
                {formStatus === 'idle' && 'Send Message'}
                {formStatus === 'loading' && 'Sending...'}
                {formStatus === 'success' && '✓ Message Sent!'}
                {formStatus === 'error' && 'Error Sending'}
              </span>
            </motion.button>
          </form>
        </motion.div>
      </div>
    </SectionContainer>
  );
};

export default Contact;
