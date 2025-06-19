
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const Resume = () => {
  const resumeUrl = "/lovable-uploads/9ef80573-370f-4685-8fb5-1d342c53bb12.png";
  
  return (
    <section id="resume" className="py-20">
      <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
        Resume
      </h2>
      <motion.div
        className="max-w-4xl mx-auto flex flex-col items-center gap-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-full border border-neutral-700 rounded-lg overflow-hidden shadow-lg bg-neutral-800/50">
          <img 
            src={resumeUrl} 
            alt="Khushbu Upadhyay's Resume" 
            className="w-full h-auto"
          />
        </div>
        <a href={resumeUrl} download="Khushbu_Upadhyay_Resume.pdf">
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white shadow-lg shadow-purple-600/30">
            <Download className="mr-2 h-5 w-5" />
            Download Resume
          </Button>
        </a>
      </motion.div>
    </section>
  );
};

export default Resume;
