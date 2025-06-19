
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: "Doorstep CarWash Booking (MERN)",
    description: "It included 3 modules: Customer, Carwasher, Admin.",
    link: "#"
  },
  {
    title: "Whiteboard (MERN stack)",
    description: "A collaborative whiteboard application built with the MERN stack for real-time drawing and sharing.",
    link: "https://whiteboard.kavaiyatech.com/"
  },
  {
    title: "Graphics Website",
    description: "A graphics design portfolio website showcasing various designs, built with HTML, CSS, and JavaScript.",
    link: "https://apnagraphics.vercel.app"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="h-full"
          >
            <Card className="bg-neutral-800/50 border-purple-500/30 h-full shadow-lg hover:shadow-purple-500/20 transition-all duration-300 flex flex-col group">
              <CardHeader>
                <CardTitle className="text-neutral-100">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-neutral-400">{project.description}</CardDescription>
              </CardContent>
              <div className="p-6 pt-0">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className={project.link === '#' ? 'pointer-events-none' : ''}>
                  <Button variant="outline" className="text-purple-400 border-purple-400/50 hover:text-purple-300 hover:bg-purple-500/10 w-full justify-center group-hover:border-purple-300" disabled={project.link === '#'}>
                    {project.link === '#' ? 'Link not available' : 'View Project'}
                    {project.link !== '#' && <ArrowUpRight className="ml-2 h-4 w-4 transform transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />}
                  </Button>
                </a>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
