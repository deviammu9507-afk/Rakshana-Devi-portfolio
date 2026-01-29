
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <h2 className="text-sm font-bold tracking-[0.2em] text-violet-500 uppercase mb-4">Contact</h2>
        <p className="text-zinc-400">Feel free to reach out for collaborations or opportunities.</p>
      </div>

      <div className="max-w-xl mx-auto">
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 gap-6">
            <div>
              <label htmlFor="name" className="block text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">Name</label>
              <input
                type="text"
                id="name"
                className="w-full bg-zinc-950 border border-zinc-800 px-4 py-3 text-white focus:outline-none focus:border-violet-500 transition-colors"
                placeholder="YOUR NAME"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full bg-zinc-950 border border-zinc-800 px-4 py-3 text-white focus:outline-none focus:border-violet-500 transition-colors"
                placeholder="YOUR EMAIL"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">Message</label>
              <textarea
                id="message"
                rows={4}
                className="w-full bg-zinc-950 border border-zinc-800 px-4 py-3 text-white focus:outline-none focus:border-violet-500 transition-colors resize-none"
                placeholder="YOUR MESSAGE"
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-4 bg-violet-600 hover:bg-violet-700 text-white font-bold tracking-widest uppercase transition-all"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
