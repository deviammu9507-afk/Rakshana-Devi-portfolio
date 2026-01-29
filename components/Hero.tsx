
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 min-h-screen flex items-center pt-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        {/* Left Content */}
        <div className="order-2 lg:order-1 flex flex-col space-y-6">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              Hi, I’m <span className="text-violet-500">Rakshana Devi R</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-zinc-400 font-medium">
              B.Tech Computer and Communication Engineering Student
            </h2>
          </div>
          <p className="text-lg text-zinc-500 max-w-lg">
            Focused on programming, databases, and software engineering. Committed to building clean, efficient, and scalable technology solutions.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#contact"
              className="px-8 py-3 bg-violet-600 hover:bg-violet-700 text-white font-semibold transition-all rounded-sm text-sm tracking-widest uppercase"
            >
              Contact Me
            </a>
            <a
              href="#"
              className="px-8 py-3 border border-zinc-800 hover:border-violet-500 hover:text-violet-400 text-zinc-400 font-semibold transition-all rounded-sm text-sm tracking-widest uppercase"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Right Content */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
          <div className="relative group">
            <div className="absolute -inset-1 bg-violet-500/20 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <img
              src="https://picsum.photos/seed/rakshana/500/600"
              alt="Rakshana Devi R"
              className="relative w-64 h-80 md:w-80 md:h-[450px] object-cover rounded-2xl border-2 border-violet-500/30 shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
