
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section id="home">
          <Hero />
        </section>
        <section id="about" className="py-24 bg-zinc-950/50">
          <About />
        </section>
        <section id="education" className="py-24">
          <Education />
        </section>
        <section id="skills" className="py-24 bg-zinc-950/50">
          <Skills />
        </section>
        <section id="contact" className="py-24">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
