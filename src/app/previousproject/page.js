'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowLeftCircle, ArrowRightCircle, X } from 'lucide-react';
import Link from 'next/link';

const ImageModal = ({ isOpen, images, initialIndex = 0, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  if (!isOpen) return null;

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/90 z-50 flex flex-col items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative max-w-7xl w-full flex flex-col items-center"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-blue-400 transition-colors z-50"
        >
          <X className="w-8 h-8" />
        </button>

        <div className="relative w-full h-[70vh] flex items-center justify-center mb-4">
          <motion.img
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            src={images[currentIndex]}
            alt={`Image ${currentIndex + 1}`}
            className="max-w-full max-h-full object-contain rounded-lg"
          />
          
          <button
            onClick={handlePrevious}
            className="absolute left-4 text-white hover:text-blue-400 transition-colors"
          >
            <ArrowLeftCircle className="w-10 h-10" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 text-white hover:text-blue-400 transition-colors"
          >
            <ArrowRightCircle className="w-10 h-10" />
          </button>
        </div>

        <div className="flex gap-2 overflow-x-auto max-w-full p-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden 
                ${currentIndex === index ? 'ring-2 ring-blue-400' : 'opacity-50 hover:opacity-75'}`}
            >
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>

        <div className="absolute bottom-4 left-4 text-white text-sm">
          {currentIndex + 1} / {images.length}
        </div>
      </motion.div>
    </motion.div>
  );
};

const PreviousProjectPage = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const projects = [
    {
      title: "SocialGrdn - Capstone Project",
      description: "A platform connecting garden space owners with individuals seeking to grow their own food - think Airbnb for gardens.",
      role: "Role : Business Analyst, Backend Solution Architect, and Full Stack Developer",
      technologies: ["Next.js", "React", "Node.js", "PostgreSQL", "Tailwind CSS", "Google Maps API", "Firebase","MySQL Server", "MySQL Workbench","Stripe", "PWA"],
      keyFeatures: [
        "Interactive Map Interface: Easily discover available garden spaces through an engaging and user-friendly map interface.",
        "Secure User Authentication: Robust security measures ensure safe user login and profile management.",
        "Smart Address Handling: User profiles feature auto-complete and auto-population for seamless address management.",
        "Flexible User Roles: Users can effortlessly switch between roles as renters or landowners.",
        "Comprehensive Property Management: Add, delete, and edit property listings with intuitive controls.",
        "Moderator Tools: Access advanced features like downloadable reports and the ability to block users.",
        "Seamless Booking & Payment: Integrated system for hassle-free booking and secure payment processing."
      ],
      challenges: "Implementing a reliable geolocation-based search system and ensuring secure transactions between users while maintaining a seamless user experience.",
      videoId: "67cCPad7O8w",
      images: [
        "/images/pproject/poster.jpg",
        "/images/pproject/Maps.jpg",
        "/images/pproject/Search.jpg",
        "/images/pproject/Reservation.png"
        
      ],
      liveLink: "https://socialgarden.vercel.app",
      githubLink: "https://github.com/yourusername/socialgarden"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 p-8">
      <div className="max-w-7xl mx-auto mb-12">
        <Link href="/">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </motion.button>
        </Link>
        
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-white mt-8 mb-4"
        >
          Previous Project
        </motion.h1>
      </div>

      <div className="max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="mb-12 bg-slate-800 rounded-lg p-8 border border-blue-500/20"
          >
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-white mb-2">{project.title}</h2>
              <p className="text-lg text-blue-400">{project.role}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <iframe
                  src={`https://www.youtube.com/embed/${project.videoId}`}
                  className="absolute top-0 left-0 w-full h-full"
                  title={project.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* Updated Image Preview */}
              <div 
                className="relative aspect-video rounded-lg overflow-hidden cursor-pointer group"
                onClick={() => setSelectedImageIndex(0)}
              >
                <img
                  src={project.images[0]}
                  alt={`${project.title} - Preview`}
                  className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-sm font-medium">View All Images ({project.images.length})</span>
                </div>
              </div>
            </div>

            <div className="text-gray-300 space-y-6">
              <p className="text-lg">{project.description}</p>
              
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Key Features</h3>
                <ul className="list-disc pl-6 space-y-2">
                  {project.keyFeatures.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Technical Challenges</h3>
                <p>{project.challenges}</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImageIndex !== null && projects.map(project => (
          <ImageModal
            key="modal"
            isOpen={true}
            images={project.images}
            initialIndex={selectedImageIndex}
            onClose={() => setSelectedImageIndex(null)}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default PreviousProjectPage;