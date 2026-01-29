
import React from 'react';

const Education: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-sm font-bold tracking-[0.2em] text-violet-500 uppercase mb-12 text-center">Education</h2>
      
      <div className="max-w-2xl mx-auto">
        <div className="relative pl-8 border-l border-zinc-800">
          <div className="absolute -left-1.5 top-0 w-3 h-3 bg-violet-600 rounded-full border border-black"></div>
          <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-lg hover:border-violet-500/50 transition-colors">
            <div className="text-violet-400 text-xs font-bold tracking-widest uppercase mb-2">2022 — 2026 (Present)</div>
            <h3 className="text-xl font-bold text-white mb-2">B.Tech – Computer and Communication Engineering</h3>
            <p className="text-zinc-400">Sri Manakula Vinayagar Engineering College</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
