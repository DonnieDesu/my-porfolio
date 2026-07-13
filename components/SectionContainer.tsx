'use client';

import { motion } from 'framer-motion';
import React from 'react';

interface SectionContainerProps {
  id?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

const SectionContainer = ({
  id,
  title,
  subtitle,
  children,
  className = '',
}: SectionContainerProps) => {
  return (
    <section
      id={id}
      className={`py-20 md:py-32 relative overflow-hidden ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="section-title text-center">{title}</h2>
            {subtitle && (
              <p className="text-center text-gray-400 text-lg max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
};

export default SectionContainer;
