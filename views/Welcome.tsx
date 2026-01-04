
import React from 'react';

interface Props {
  onEnter: () => void;
}

const WelcomeView: React.FC<Props> = ({ onEnter }) => {
  return (
    <div className="flex-1 flex flex-col items-center justify-between p-8 pt-16">
      <div className="flex items-center gap-2">
        <div className="bg-primary/20 p-2 rounded-xl border border-primary/30">
          <span className="material-symbols-outlined text-primary text-2xl">auto_stories</span>
        </div>
        <h2 className="text-sm font-bold tracking-widest uppercase text-primary/80">Book Wardens</h2>
      </div>

      <div className="w-full relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-primary/40 border border-primary/20">
        <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent z-10" />
        <img 
          src="https://picsum.photos/seed/warden-hero/800/1000" 
          alt="Magical Book Portal" 
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-1000"
        />
        <div className="absolute top-4 right-4 z-20 bg-background-dark/80 backdrop-blur-md border border-primary/30 py-1.5 px-4 rounded-full flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-sm">visibility</span>
          <span className="text-[10px] font-bold text-white tracking-widest uppercase">Eye-Tracking Ready</span>
        </div>
      </div>

      <div className="text-center space-y-4 max-w-xs">
        <h1 className="text-4xl font-black tracking-tight leading-none bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-100 to-primary/80">
          Welcome to the Rift
        </h1>
        <p className="text-slate-400 text-sm font-light leading-relaxed">
          Turn chapters into levels. Your reading speed is your weapon.
        </p>
      </div>

      <div className="w-full space-y-4 pt-8">
        <button 
          onClick={onEnter}
          className="group relative w-full flex items-center justify-center bg-primary hover:bg-primary-dark active:scale-[0.98] transition-all rounded-2xl h-16 shadow-[0_0_30px_rgba(147,13,242,0.4)] overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
          <span className="material-symbols-outlined mr-3 text-white/90">swords</span>
          <span className="font-bold text-xl tracking-wide text-white">Enter the Rift</span>
        </button>
        <button className="w-full text-sm font-medium text-purple-300 hover:text-white transition-colors">
          Already a Warden? <span className="underline decoration-primary underline-offset-4 font-bold">Log In</span>
        </button>
      </div>
    </div>
  );
};

export default WelcomeView;
