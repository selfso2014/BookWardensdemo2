
import React, { useState, useEffect } from 'react';

interface Props {
  onComplete: () => void;
  onBack: () => void;
}

const ReadingView: React.FC<Props> = ({ onComplete, onBack }) => {
  const [progress, setProgress] = useState(45);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => Math.min(prev + 0.1, 100));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex-1 flex flex-col h-screen overflow-hidden">
      <header className="p-5 flex items-center justify-between bg-background-dark">
        <div className="flex flex-col">
          <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-1">Dungeon Level 5</span>
          <h1 className="text-lg font-bold leading-tight">Chapter 4: The Whispering Library</h1>
        </div>
        <button onClick={onBack} className="size-10 flex items-center justify-center rounded-full bg-surface-dark">
          <span className="material-symbols-outlined">pause_circle</span>
        </button>
      </header>

      <div className="px-5 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2 bg-primary/10 border border-primary/20 pl-2 pr-4 py-1.5 rounded-full">
          <span className="size-2 bg-primary rounded-full animate-ping" />
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-primary text-sm">visibility</span>
            <span className="text-primary text-[10px] font-bold uppercase tracking-widest">Tracking Active</span>
          </div>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="material-symbols-outlined text-yellow-500 text-xl fill-1">bolt</span>
          <span className="text-xs font-bold text-slate-400">12 Day Streak</span>
        </div>
      </div>

      <main className="flex-1 overflow-y-auto no-scrollbar relative p-6 pt-8">
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-surface-dark">
          <div className="w-full bg-primary shadow-[0_0_15px_#930df2] rounded-b-full transition-all duration-500" style={{height: `${progress}%`}} />
        </div>

        <div className="pl-6 space-y-8 max-w-2xl">
          <p className="text-slate-500 text-xl leading-relaxed transition-all duration-1000">
            The warden stepped carefully over the ancient stones. Shadows danced along the walls as the torch flickered in the damp draft. The smell of old parchment and decay was thick in the air.
          </p>

          <div className="relative py-4">
             <div className="absolute -left-6 top-4 bottom-4 w-1 bg-primary rounded-full shadow-[0_0_10px_#930df2]" />
             <p className="text-white text-2xl font-medium leading-relaxed">
              The air hummed with a strange energy, a low vibration that seemed to seep into his very bones. 
              <span className="bg-primary/20 rounded px-1.5 py-1 box-decoration-clone glow-text ml-2">
                He knew the Rift was close.
              </span> 
              The compass in his pocket was spinning wildly, no longer pointing north, but towards the darkness ahead.
             </p>
          </div>

          <p className="text-slate-600 blur-[0.5px] text-xl leading-relaxed">
            "Keep close," he whispered to his companion, though he wasn't sure if the silence of the library would swallow his words entirely. Books, larger than men, lined the shelves that stretched up into an infinite void.
          </p>

          <div className="my-12 p-8 rounded-3xl bg-primary/5 border border-primary/20 flex flex-col items-center justify-center gap-6 text-center">
            <div className="size-16 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-4xl">psychology</span>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Comprehension Checkpoint</h3>
              <p className="text-sm text-slate-400">Stabilize the local rift by defeating the Syntax Specter.</p>
            </div>
            <button 
              onClick={onComplete}
              className="bg-primary hover:bg-primary-dark px-10 py-4 rounded-2xl font-bold shadow-xl shadow-primary/20"
            >
              Enter Boss Battle
            </button>
          </div>

          <p className="text-slate-700 blur-[2px] text-xl leading-relaxed">
            He drew his sword, the metal singing as it left the scabbard. The light from his torch reflected off the blade, revealing runes that began to glow with a soft purple hue.
          </p>
        </div>
      </main>

      <div className="p-5 pb-10 bg-background-dark/95 backdrop-blur-md">
        <div className="bg-surface-dark border border-white/5 p-4 rounded-2xl shadow-2xl flex items-center gap-4">
           <div className="size-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-3xl">auto_stories</span>
           </div>
           <div className="flex-1">
              <div className="flex justify-between items-end mb-2">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">XP Progress</span>
                <span className="text-xs font-black text-primary">+450 XP</span>
              </div>
              <div className="h-2 w-full bg-background-dark rounded-full overflow-hidden">
                <div className="h-full bg-primary animate-shimmer" style={{width: '65%'}} />
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default ReadingView;
