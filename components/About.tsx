
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 text-center">
      <h2 className="text-sm font-bold tracking-[0.2em] text-violet-500 uppercase mb-8">About Me</h2>
      <p className="text-2xl md:text-3xl font-light text-zinc-300 leading-relaxed">
        I am a B.Tech Computer and Communication Engineering student at 
        <span className="text-white font-medium"> Sri Manakula Vinayagar Engineering College</span>. 
        I study core subjects including programming, databases, and software engineering, 
        while building practical skills through hands-on learning.
      </p>
    </div>
  );
};

export default About;
