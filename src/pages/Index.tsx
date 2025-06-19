
import Hero from "./partials/Hero";
import About from "./partials/About";
import Projects from "./partials/Projects";
import Certificates from "./partials/Certificates";
import Resume from "./partials/Resume";
import Contact from "./partials/Contact";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-neutral-900 text-neutral-100 font-sans overflow-x-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] -z-0" />
      <Navbar />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Hero />
        <About />
        <Projects />
        <Certificates />
        <Resume />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
