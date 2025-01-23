'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, FileText, BarChart2, Briefcase, Target, Code, Server, Layers3 } from 'lucide-react';
import Link from 'next/link';


const AnimatedBackground = () => (
  <motion.div 
    className="fixed inset-0 z-0"
    animate={{ 
      backgroundPosition: ['100% 50%', '0% 50%'],
      backgroundImage: [
        'linear-gradient(45deg, #0f172a, #1e2a3d, #2c3e50, #2c3e50, #c0c0c0, #344955)',
        'linear-gradient(45deg, #0f172a, #1e2a3d, #2c3e50, #c0c0c0, #344955, #0f172a)',
        'linear-gradient(45deg, #1e2a3d, #2c3e50, #c0c0c0, #344955, #0f172a, #1e2a3d)',
        'linear-gradient(45deg, #2c3e50, #c0c0c0, #344955, #0f172a, #1e2a3d, #2c3e50)'
      ],
      transition: {
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    }}
    style={{
      backgroundSize: '100% 100%',
      backgroundPosition: '0% 50%',
      filter: 'brightness(0.9) contrast(1.1)'
    }}
  />
);

const Page = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };
  

  return (
    <div className="relative min-h-screen flex items-center justify-center p-6">
      <AnimatedBackground />
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative z-10 w-full max-w-6xl bg-slate-800/70 backdrop-blur-lg rounded-2xl shadow-2xl p-8 grid grid-cols-1 md:grid-cols-3 gap-6 overflow-hidden"
      >
        {/* Profile Section */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col items-center justify-center"
        >
          <motion.img
            src="/images/main.png"
            alt="Profile Picture"
            className="w-32 h-32 rounded-full mb-4 object-cover ring-4 ring-blue-500/50 shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.5,
              type: "spring",
              stiffness: 260,
              damping: 20
            }}
          />
          <h1 className="text-4xl font-bold text-white tracking-wider">Donald Jans Uy</h1>
          <h2 className="text-2xl text-blue-400 mt-1 mb-1">Business and System Analyst</h2>
          <h2 className="text-2xl text-blue-400 mt-1 mb-1">Full Stack Developer</h2>

          <div className="flex gap-3 mt-2 mb-2">
            {['mailto:donaldjans26@gmail.com', 'https://linkedin.com/in/djansuy', '/images/Donald_Jans_Uy_Resume.pdf'].map((href, index) => {
              const icons = [Mail, Linkedin, FileText];
              const Icon = icons[index];
              
              return (
                <motion.a
                  key={href}
                  href={href}
                  target={index === 2 ? "_blank" : undefined}
                  rel={index === 2 ? "noopener noreferrer" : undefined}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full shadow-md"
                >
                  <Icon size={20} />
                </motion.a>
              );
            })}
          </div>

          <div className="flex gap-4 mt-2 w-full">
            {[
              { href: "/previousproject", text: "View Project", Icon: Layers3 },
              { href: "/techstack", text: "Tech Stack", Icon: Server }
            ].map(({ href, text, Icon }) => (
              <Link key={href} href={href} className="flex-1">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-3 text-center hover:bg-blue-500/20 w-full shadow-sm"
                >
                  <h3 className="text-blue-300 flex items-center justify-center gap-2 text-sm">
                    {text}
                    <Icon className="w-4 h-4" />
                  </h3>
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Tagline Section */}
        <motion.div 
          variants={itemVariants}
          className="col-span-2 flex flex-col items-center justify-center text-center md:text-left"
        >
          <motion.p 
            className="text-gray-300 text-xl mb-6 leading-relaxed text-justify"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            Bridging the crucial gap between business needs and technical solutions, I bring a unique perspective forged through enterprise experience at Deloitte and Accenture.
            My background combines strategic business analysis with strong technical capabilities developed through full-stack development training at SAIT. 
            I specialize in delivering comprehensive solutions that seamlessly align stakeholder goals with innovative technology implementations.
          </motion.p>

          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            {[
              { 
                Icon: BarChart2, 
                iconColor: "text-blue-400", 
                title: "Data Analytics", 
                description: "Advanced analytical techniques for strategic insights" 
              },
              { 
                Icon: Briefcase, 
                iconColor: "text-green-400", 
                title: "Business Strategy", 
                description: "Transforming complex business challenges into actionable solutions" 
              },
              { 
                Icon: Target, 
                iconColor: "text-purple-400", 
                title: "Process Optimization", 
                description: "Streamlining operations for maximum efficiency" 
              }
            ].map(({ Icon, iconColor, title, description }) => (
              <motion.div 
                key={title}
                variants={itemVariants}
                className="bg-slate-900/50 p-4 rounded-xl border border-transparent transition-all hover:border-blue-500 hover:scale-105 shadow-md"
              >
                <div className="flex justify-center mb-2">
                  <Icon className={`w-6 h-6 ${iconColor}`} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">{title}</h3>
                <p className="text-gray-200 text-sm">{description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Page;