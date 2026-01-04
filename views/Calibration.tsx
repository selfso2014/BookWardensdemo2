
import React, { useState, useEffect } from 'react';

interface Props {
  onComplete: () => void;
}

const CalibrationView: React.FC<Props> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 1;
      });
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex-1 flex flex-col p-8 pt-12">
      <div className="flex justify-between items-center mb-12">
        <button className="size-10 flex items-center justify-center rounded-full hover:bg-white/10">
          <span className="material-symbols-outlined">close</span>
        </button>
        <h2 className="text-lg font-black uppercase tracking-widest">Calibration</h2>
        <div className="size-10" />
      </div>

      <div className="text-center space-y-4 mb-12">
        <h1 className="text-3xl font-black leading-none">Prepare Your Gaze</h1>
        <p className="text-sm text-slate-400">Center your face in the frame. Follow the purple light to unlock the dungeon.</p>
      </div>

      <div className="relative w-full aspect-[4/5] bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/5 mb-12">
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/40 via-transparent to-blue-900/40" />
        <div className="absolute inset-0 flex items-center justify-center">
           <div className="size-64 rounded-full border-2 border-dashed border-white/20 animate-pulse-slow" />
           <div className="absolute inset-0 flex items-center justify-center p-12">
              <div className="w-full h-full border-2 border-primary/40 rounded-[20%] relative">
                 <div className="absolute top-0 left-0 size-8 border-t-4 border-l-4 border-primary rounded-tl-2xl" />
                 <div className="absolute top-0 right-0 size-8 border-t-4 border-r-4 border-primary rounded-tr-2xl" />
                 <div className="absolute bottom-0 left-0 size-8 border-b-4 border-l-4 border-primary rounded-bl-2xl" />
                 <div className="absolute bottom-0 right-0 size-8 border-b-4 border-r-4 border-primary rounded-br-2xl" />
              </div>
           </div>
        </div>

        <div className="absolute top-1/4 left-1/4 animate-bounce">
          <div className="size-6 bg-primary rounded-full shadow-[0_0_20px_#930df2] animate-pulse" />
        </div>

        <div className="absolute bottom-8 left-0 right-0 flex justify-center">
           <div className="bg-black/60 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/10 flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-sm animate-spin">sync</span>
              <span className="text-xs font-bold text-white uppercase tracking-widest">Tracking Gaze...</span>
           </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm font-bold uppercase tracking-widest text-slate-500">Progress</span>
          <span className="text-primary font-black">{progress}%</span>
        </div>
        <div className="h-3 w-full bg-surface-dark rounded-full overflow-hidden">
          <div className="h-full bg-primary rounded-full shadow-[0_0_15px_#930df2] transition-all duration-300" style={{width: `${progress}%`}} />
        </div>
        <p className="text-[10px] text-center text-slate-500 font-bold uppercase tracking-[0.2em] pt-2">
           Keep your head steady for better accuracy
        </p>
      </div>

      <div className="mt-auto pt-8">
        <button 
          disabled={progress < 100}
          onClick={onComplete}
          className={`w-full py-5 rounded-3xl font-black text-xl tracking-widest transition-all ${
            progress === 100 
              ? 'bg-primary text-white shadow-[0_0_30px_rgba(147,13,242,0.4)] active:scale-[0.98]' 
              : 'bg-surface-dark text-slate-700 cursor-not-allowed border border-white/5'
          }`}
        >
          {progress === 100 ? 'Enter Book Dungeon' : 'Calibrating...'}
        </button>
      </div>
    </div>
  );
};

export default CalibrationView;
