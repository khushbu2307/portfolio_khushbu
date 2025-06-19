
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { motion } from 'framer-motion';

const certificates = [
  { imgSrc: "/lovable-uploads/7c1454f7-60e6-4d77-8c58-1019fc03c7cd.png", title: "Core JAVA Bootcamp" },
  { imgSrc: "/lovable-uploads/e126c4ae-7efe-491d-95c2-a776b00ec906.png", title: "Core Java + DSA" },
  { imgSrc: "/lovable-uploads/1acb4f2e-492a-4c22-94fd-5e83f23c8b70.png", title: "Learn JavaScript" },
  { imgSrc: "/lovable-uploads/c76bb938-41dc-489c-9a21-3cb0ff386c6c.png", title: "ReactJs Course" },
  { imgSrc: "/lovable-uploads/251b3fbd-f0ef-4df9-a32a-a431ac58d455.png", title: "Business Fundamentals" },
  { imgSrc: "/lovable-uploads/7a22843d-0273-4977-ad7b-2994288b087d.png", title: "Web Design using WordPress" },
  { imgSrc: "/lovable-uploads/07bcb023-1aa4-42fb-9340-7b131f895f80.png", title: "Data Structures in C" },
  { imgSrc: "/lovable-uploads/8cceaba8-59a3-462b-af52-be9d96f3889e.png", title: "Stunning UI/UX Designs" },
];

const Certificates = () => {
  return (
    <section id="certificates" className="py-20">
      <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">Certificates</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, boxShadow: "0px 15px 25px -10px rgba(167, 139, 250, 0.3)" }}
          >
            <Card className="bg-neutral-800/50 border-purple-500/30 overflow-hidden shadow-lg">
              <CardContent className="p-0">
                <img src={cert.imgSrc} alt={cert.title} className="w-full h-auto object-cover aspect-[4/3]" />
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
