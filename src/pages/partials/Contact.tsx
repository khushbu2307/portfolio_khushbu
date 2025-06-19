
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-20 text-center border-t border-neutral-700/50">
      <h2 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">Get In Touch</h2>
      <motion.p 
        className="text-lg text-neutral-300 mb-8 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        I'm currently looking for new opportunities and collaborations. My inbox is always open, so feel free to reach out!
      </motion.p>
      <motion.div 
        className="flex justify-center space-x-8 mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <a href="https://github.com/khushbu2307" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-purple-400 transition-colors">
          <Github size={40} />
        </a>
        <a href="http://www.linkedin.com/in/khushbu-upadhyay-345126272" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-purple-400 transition-colors">
          <Linkedin size={40} />
        </a>
        <a href="mailto:khushbu230705@gmail.com" className="text-neutral-400 hover:text-purple-400 transition-colors">
          <Mail size={40} />
        </a>
      </motion.div>
      <footer className="mt-12 text-neutral-500">
        <p>&copy; {new Date().getFullYear()} Khushbu Upadhyay. All Rights Reserved.</p>
      </footer>
    </section>
  );
};

export default Contact;
