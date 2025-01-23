'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, FileText, BarChart2, Briefcase, Target, BarChart, Code, Server, Layers, Layers2, Layers3 } from 'lucide-react';
import Link from 'next/link';

const Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-6">
      <div className="w-full max-w-6xl bg-slate-800/70 backdrop-blur-lg rounded-2xl shadow-xl p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Profile Section */}
        <div className="flex flex-col items-center justify-center">
          <motion.img
            src="/images/main.png"
            alt="Profile Picture"
            className="w-32 h-32 rounded-full mb-4 object-cover"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          <h1 className="text-2xl font-bold text-white">Donald Jans Uy</h1>
          <h2 className="text-lg text-blue-400">Business and System Analyst</h2>
          <h3 className="text-sm text-blue-300 mb-4">Full Stack Developer</h3>

          <div className="flex gap-3 mb-4">
            <motion.a
              href="mailto:donaldjans26@gmail.com"
              whileHover={{ scale: 1.1 }}
              className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full"
            >
              <Mail size={20} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/djansuy"
              whileHover={{ scale: 1.1 }}
              className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full"
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a
              href="/images/Donald_Jans_Uy_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full"
            >
              <FileText size={20} />
            </motion.a>
          </div>
          <div className="flex gap-4 mt-2 w-full">
            <Link href="/previousproject" className="flex-1">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-3 text-center hover:bg-blue-500/20 w-full"
              >
                <h3 className="text-blue-300 flex items-center justify-center gap-2 text-sm">
                  View Projects
                  <Layers3 className="w-4 h-4" />
                </h3>
              </motion.div>
            </Link>

            <Link href="/techstack" className="flex-1">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-3 text-center hover:bg-blue-500/20 w-full"
              >
                <h3 className="text-blue-300 flex items-center justify-center gap-2 text-sm">
                  Tech Stack 
                  <Server className="w-4 h-4" />
                </h3>
              </motion.div>
            </Link>
          </div>
          {/* Rest of the code remains the same */}
        </div>

        {/* Tagline Section */}
        <div className="col-span-2 flex flex-col items-center justify-center text-center md:text-left">
          <p className="text-gray-300 italic text-xl mb-6">
          Bridging the crucial gap between business needs and technical solutions, I bring a unique perspective forged through enterprise experience at Deloitte and Accenture.
          My background combines strategic business analysis with strong technical capabilities developed through full-stack development training at SAIT. 
          I specialize in delivering comprehensive solutions that seamlessly align stakeholder goals with innovative technology implementations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-slate-900/50 p-4 rounded-xl border border-transparent transition-all hover:border-blue-500 hover:scale-105">
              <div className="flex justify-center mb-2">
                <BarChart2 className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-1">Data Analytics</h3>
              <p className="text-gray-400 text-sm">
                Advanced analytical techniques for strategic insights
              </p>
            </div>

            <div className="bg-slate-900/50 p-4 rounded-xl border border-transparent transition-all hover:border-blue-500 hover:scale-105">
              <div className="flex justify-center mb-2">
                <Briefcase className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-1">Business Strategy</h3>
              <p className="text-gray-400 text-sm">
                Transforming complex business challenges into actionable solutions
              </p>
            </div>

            <div className="bg-slate-900/50 p-4 rounded-xl border border-transparent transition-all hover:border-blue-500 hover:scale-105">
              <div className="flex justify-center mb-2">
                <Target className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-1">Process Optimization</h3>
              <p className="text-gray-400 text-sm">
                Streamlining operations for maximum efficiency
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;