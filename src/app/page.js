'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const Page = () => {
  const [hoveredSection, setHoveredSection] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center">
      <div className="container mx-auto px-8 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-slate-800 rounded-2xl shadow-2xl p-12 space-y-8"
        >
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold text-white mb-4">Donald Jans Uy</h1>
            <h2 className="text-2xl text-blue-400">Full-Stack Developer & Enterprise Solutions Architect</h2>
          </div>

          {/* About Section */}
          <div className="text-center text-gray-300 text-lg leading-relaxed mb-8 space-y-4">
            <p>
              Bridging the crucial gap between business needs and technical solutions. With a strong foundation in business analysis 
              and customer-facing roles at industry leaders like Deloitte and Accenture, I provide a unique perspective on technical integration, 
              ensuring seamless alignment between stakeholder goals and technology solutions.
            </p>
            <p className="text-blue-300">
              Recently enhanced my expertise with full-stack development education at SAIT, 
              combining enterprise-level business with strong technical capabilities to deliver 
              comprehensive solutions that truly align with business objectives.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col md:flex-row justify-center gap-6 mb-8">
            <a 
              href="mailto:donaldjans26@gmail.com" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg flex items-center justify-center gap-3 transition-colors"
            >
              <Mail size={20} />
              Contact Me
            </a>
            <a 
              href="https://www.linkedin.com/in/djansuy" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-4 rounded-lg flex items-center justify-center gap-3 transition-colors"
            >
              <Linkedin size={20} />
              LinkedIn Profile
            </a>
          </div>

          {/* Navigation Buttons */}
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/techstack">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-blue-400 p-[2px] rounded-xl"
              >
                <div className="bg-slate-900 rounded-xl px-6 py-8 text-center">
                  <h3 className="text-2xl font-bold text-blue-400 flex items-center justify-center gap-3">
                    Technical Expertise 
                    <ArrowRight className="w-5 h-5" />
                  </h3>
                </div>
              </motion.div>
            </Link>

            <Link href="/previousproject">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-blue-400 p-[2px] rounded-xl"
              >
                <div className="bg-slate-900 rounded-xl px-6 py-8 text-center">
                  <h3 className="text-2xl font-bold text-blue-400 flex items-center justify-center gap-3">
                    Previous Projects
                    <ArrowRight className="w-5 h-5" />
                  </h3>
                </div>
              </motion.div>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Page;