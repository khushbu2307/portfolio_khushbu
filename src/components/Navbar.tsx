
import React from 'react';
import { User, Briefcase, Award, FileText, Mail } from 'lucide-react';

const Navbar = () => {
  const navItems = [
    { name: 'About', icon: <User size={18} /> },
    { name: 'Projects', icon: <Briefcase size={18} /> },
    { name: 'Certificates', icon: <Award size={18} /> },
    { name: 'Resume', icon: <FileText size={18} /> },
    { name: 'Contact', icon: <Mail size={18} /> }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id.toLowerCase());
    if (element) {
      // Offset by the navbar height
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
         top: offsetPosition,
         behavior: "smooth"
      });
    } else if (id === 'hero') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-neutral-900/50 backdrop-blur-sm border-b border-neutral-700/50">
      <nav className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 py-4">
        <div className="text-2xl font-bold cursor-pointer hover:text-purple-400 transition-colors" onClick={() => scrollToSection('hero')}>
          Khushbu
        </div>
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <button 
              key={item.name} 
              onClick={() => scrollToSection(item.name)}
              className="flex items-center gap-2 text-lg text-neutral-300 hover:text-purple-400 transition-colors duration-300"
            >
              {item.icon}
              {item.name}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
