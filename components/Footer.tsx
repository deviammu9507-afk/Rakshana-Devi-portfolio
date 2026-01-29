
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 border-t border-zinc-900 bg-black">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-zinc-600 text-sm tracking-widest uppercase">
          © {currentYear} Rakshana Devi R | Portfolio
        </p>
      </div>
    </footer>
  );
};

export default Footer;
