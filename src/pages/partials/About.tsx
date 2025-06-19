
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from 'framer-motion';

const skills = [
  "C", "C++", "SQL & PLSQL", "PHP", "Python",
  "HTML", "JavaScript", "React", "MERN Stack", "Android Development"
];

const About = () => {
  return (
    <section id="about" className="py-20">
      <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">About Me</h2>
      <motion.div 
        className="max-w-4xl mx-auto text-center text-lg text-neutral-300 mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p>
          Dedicated BCA student with a passion for technology and a drive to excel in the field. Seeking opportunities to leverage both soft and technical skills in a dynamic work environment to contribute effectively and grow professionally.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <Card className="bg-neutral-800/50 border-purple-500/30 h-full shadow-lg hover:shadow-purple-500/20 transition-shadow">
            <CardHeader>
              <CardTitle className="text-neutral-100">Bachelor of Computer Applications (BCA)</CardTitle>
              <CardDescription className="text-neutral-400">Charotar University of Science & Technology (CMPICA)</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-neutral-300">June 2022 - May 2025</p>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <Card className="bg-neutral-800/50 border-purple-500/30 h-full shadow-lg hover:shadow-purple-500/20 transition-shadow">
            <CardHeader>
              <CardTitle className="text-neutral-100">12TH GSEB BOARD (HSC)</CardTitle>
              <CardDescription className="text-neutral-400">Shree C.K.M Kanyavidhyalya, Mundra</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-neutral-300">March 2021 - April 2022</p>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <div>
        <h3 className="text-3xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">Technical Skills</h3>
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill, i) => (
             <motion.div
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
              <Badge variant="outline" className="text-lg px-4 py-2 border-green-500/50 text-green-300 bg-green-500/10 hover:bg-green-500/20 transition-colors">
                {skill}
              </Badge>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
