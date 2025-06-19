
import React, { useState, useEffect, Suspense } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import HeroScene from '@/components/3d/HeroScene';

const roles = ["MERN Stack Developer", "Frontend Developer", "Graphics Designer"];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000); // Change role every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center relative overflow-hidden">
       <div className="absolute inset-0 z-0 opacity-40 md:opacity-50">
        <Suspense fallback={<div className="w-full h-full bg-transparent" />}>
          <HeroScene />
        </Suspense>
      </div>
      <div className="relative z-10">
        <motion.h2 
          className="text-3xl md:text-4xl font-medium text-neutral-300 flex items-center justify-center gap-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi There! <motion.span className="inline-block" animate={{ rotate: [0, 20, 0, 20, 0]}} transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}>👋</motion.span>
        </motion.h2>
        <motion.h1 
          className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-2 uppercase"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          I'm Khushbu Upadhyay
        </motion.h1>
        
        <div className="text-2xl md:text-4xl mt-4 h-12 text-purple-400 font-semibold">
          <motion.span
            key={roleIndex}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="inline-block"
          >
            {roles[roleIndex]}
          </motion.span>
        </div>
        <motion.div 
          className="flex justify-center space-x-6 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a href="https://github.com/khushbu2307" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-purple-400 transition-colors">
            <Github size={32} />
          </a>
          <a href="http://www.linkedin.com/in/khushbu-upadhyay-345126272" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-purple-400 transition-colors">
            <Linkedin size={32} />
          </a>
          <a href="mailto:khushbu230705@gmail.com" className="text-neutral-400 hover:text-purple-400 transition-colors">
            <Mail size={32} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
