'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Database, 
  Code, 
  Cloud, 
  LineChart, 
  GitBranch,
  Home,
  Star,
  Trophy,
  Zap,
  ArrowRight,
  ShieldCheck,
  PenTool,
  Network
} from 'lucide-react';
import Link from 'next/link';

const TechStack = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [hoveredLevel, setHoveredLevel] = useState(null);

  const skillTree = [
        {
          title: "Frontend & Backend",
          icon: <Code className="w-8 h-8" />,
          skills: ["Python", "JavaScript", "React", "Node.js", "REST APIs"],
          color: "from-indigo-500 to-blue-500",
          animation: "pulse",
          description: "Crafting elegant solutions through code mastery and architectural innovation",
          projects: ["Full-stack Web Applications", "API Integration Systems", "Custom Development Tools"]
        },
        {
          title: "Cloud & Integration",
          icon: <Cloud className="w-8 h-8" />,
          skills: ["AWS RDS", "SAP Cloud Integration Gateway", "SAP Ariba Procurement", "POSTMAN"],
          color: "from-sky-500 to-cyan-400",
          animation: "pulse",
          description: "Orchestrating cloud infrastructure and ensuring seamless integrations",
          projects: ["Cloud Migration Projects", "Hybrid Cloud Solutions", "Infrastructure Optimization"]
        },
        {
          title: "Data Management",
          icon: <Database className="w-8 h-8" />,
          skills: ["SQL", "Power BI", "Firebase", "MySQL Workbench"],
          color: "from-teal-500 to-emerald-400",
          animation: "pulse",
          description: "Transforming raw data into actionable business intelligence",
          projects: ["Business Intelligence Dashboards", "Data Integration Pipelines", "Analytics Solutions"]
        },
        {
          title: "Project Management",
          icon: <GitBranch className="w-8 h-8" />,
          skills: ["JIRA", "Agile", "Project Management"],
          color: "from-blue-500 to-violet-400",
          animation: "pulse",
          description: "Leading teams through efficient project delivery and collaboration",
          projects: ["Agile Transformation", "Process Optimization", "Team Leadership"]
        },
        {
          title: "Design & Modeling",
          icon: <PenTool className="w-8 h-8" />,
          skills: ["Figma", "Lucid Chart", "Software Idea Modeler", "Visio"],
          color: "from-purple-500 to-pink-500",
          animation: "pulse",
          description: "Creating intuitive designs and comprehensive system models",
          projects: ["UI/UX Design", "System Architecture Diagrams", "Process Flow Modeling"]
        },
        {
          title: "Quality Assurance",
          icon: <ShieldCheck className="w-8 h-8" />,
          skills: ["Performance Testing", "Black Box Testing", "White Box Testing", "Static Testing", "User Acceptance Training", "System Acceptance Training"],
          color: "from-green-500 to-emerald-400",
          animation: "pulse",
          description: "Ensuring software quality through comprehensive testing methodologies",
          projects: ["Performance Testing", "System Testing", "User Acceptance Testing"]
        }
  ];

  const animations = {
    float: {
      y: [0, -10, 0],
      transition: { duration: 2, repeat: Infinity }
    },
    pulse: {
      scale: [1, 1.1, 1],
      transition: { duration: 1.5, repeat: Infinity }
    },
    swing: {
      rotate: [-10, 10, -10],
      transition: { duration: 1.5, repeat: Infinity }
    },
    bounce: {
      y: [0, -5, 0],
      transition: { duration: 0.5, repeat: Infinity }
    }
  };

  const IntegrationBackground = () => {
    const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

    useEffect(() => {
      const updateWindowSize = () => {
        setWindowSize({ 
          width: window.innerWidth, 
          height: window.innerHeight 
        });
      };

      updateWindowSize();
      window.addEventListener('resize', updateWindowSize);
      return () => window.removeEventListener('resize', updateWindowSize);
    }, []);

    return (
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`line-${i}`}
            className="absolute h-px bg-gradient-to-r from-blue-400/30 via-indigo-400/30 to-transparent"
            style={{
              width: '100%',
              top: `${(i + 1) * 12}%`,
              left: i % 2 === 0 ? '-100%' : '100%'
            }}
            animate={{
              x: i % 2 === 0 ? ['100%', '-100%'] : ['-100%', '100%']
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}

        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`node-${i}`}
            className="absolute"
            initial={{
              x: windowSize.width ? Math.random() * windowSize.width : 0,
              y: windowSize.height ? Math.random() * windowSize.height : 0,
            }}
            animate={{
              x: windowSize.width ? Math.random() * windowSize.width : 0,
              y: windowSize.height ? Math.random() * windowSize.height : 0,
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear"
            }}
          >
            <motion.div
              className="relative"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Network className="w-8 h-8 text-indigo-400/40" />
              <div className="absolute w-32 h-32 -top-16 -left-16">
                <motion.div
                  className="w-full h-full border-2 border-indigo-400/20 rounded-full"
                  animate={{ scale: [0, 1.5], opacity: [0.5, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeOut"
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4 relative overflow-hidden">
      <IntegrationBackground />

      <Link href="/">
        <motion.button
          whileHover={{ scale: 1.1, rotate: 360 }}
          whileTap={{ scale: 0.9 }}
          className="fixed top-8 left-8 bg-indigo-600 p-4 rounded-full text-white shadow-lg shadow-indigo-500/30"
        >
          <Home className="w-6 h-6" />
        </motion.button>
      </Link>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-8xl mx-auto"
      >
        <motion.div 
          className="text-center mb-16"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
        >
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500 mb-4">
            Skills and Expertise
          </h1>
          <div className="flex items-center justify-center gap-2">
            <Trophy className="w-6 h-6 text-amber-400" />
            <p className="text-indigo-600 dark:text-indigo-400 text-xl">Tap on the cards to reveal the stack!</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
          {skillTree.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.5 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedSkill(selectedSkill === index ? null : index)}
              className="relative"
            >
              <div className={`bg-gradient-to-br ${skill.color} p-[2px] rounded-2xl cursor-pointer shadow-lg`}>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl h-full">
                  <motion.div 
                    animate={animations[skill.animation]}
                    className="flex flex-col items-center gap-4"
                  >
                    <div className="relative">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 rounded-full"
                      />
                      <div className="text-indigo-600 dark:text-indigo-400">
                        {skill.icon}
                      </div>
                    </div>
                    <h2 className="text-xl font-bold text-gray-800 dark:text-white">{skill.title}</h2>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {selectedSkill !== null && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="relative mt-8 p-8 rounded-3xl bg-white dark:bg-gray-800 shadow-xl max-w-6xl mx-auto"
            >
              <motion.div
                className="absolute inset-0 rounded-3xl opacity-10"
                style={{
                  background: `linear-gradient(120deg, ${skillTree[selectedSkill].color.split(' ')[1]} 0%, transparent 70%)`
                }}
              />
              
              <div className="relative z-10">
                <motion.h3 
                  initial={{ x: -20 }}
                  animate={{ x: 0 }}
                  className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500"
                >
                  {skillTree[selectedSkill].title} Expertise
                </motion.h3>

                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-gray-600 dark:text-gray-300 text-lg mb-8"
                >
                  {skillTree[selectedSkill].description}
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                  >
                    <h4 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-4">Core Skills</h4>
                    <div className="space-y-3">
                      {skillTree[selectedSkill].skills.map((skill, idx) => (
                        <motion.div
                          key={skill}
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-center gap-2"
                        >
                          <ArrowRight className="w-4 h-4 text-blue-500 dark:text-blue-400" />
                          <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                  >
                    <h4 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4">Featured Projects</h4>
                    <div className="space-y-3">
                      {skillTree[selectedSkill].projects.map((project, idx) => (
                        <motion.div
                          key={project}
                          initial={{ x: 20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-center gap-2"
                        >
                          <Zap className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />
                          <span className="text-gray-700 dark:text-gray-300">{project}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default TechStack;