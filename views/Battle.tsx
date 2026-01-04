
import React, { useState } from 'react';

interface Props {
  onWin: () => void;
  onBack: () => void;
}

const BattleView: React.FC<Props> = ({ onWin, onBack }) => {
  const [selected, setSelected] = useState<number | null>(null);

  const options = [
    { text: "To protect the village from the approaching storm.", correct: false },
    { text: "She knew the Rift was close and felt its energy.", correct: true },
    { text: "The map explicitly told her to stay focused.", correct: false }
  ];

  return (
    <div className="flex-1 flex flex-col h-screen overflow-hidden">
      <header className="p-5 flex items-center justify-between">
        <button onClick={onBack} className="size-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <div className="flex flex-col items-center">
          <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-1">Level 5 Boss</span>
          <h1 className="text-lg font-bold">The Syntax Specter</h1>
        </div>
        <button className="size-10 flex items-center justify-center text-primary">
          <span className="material-symbols-outlined">pause</span>
        </button>
      </header>

      <div className="px-5 pb-4">
        <div className="flex justify-between items-end mb-2">
          <span className="text-[10px] font-bold text-slate-500 uppercase">Battle Timer</span>
          <span className="text-xs font-bold text-primary">00:45</span>
        </div>
        <div className="h-2 w-full bg-surface-dark rounded-full overflow-hidden">
          <div className="h-full bg-primary rounded-full transition-all duration-1000" style={{width: '65%'}} />
        </div>
      </div>

      <main className="flex-1 overflow-y-auto no-scrollbar p-5 flex flex-col gap-6">
        <div className="relative w-full aspect-video rounded-3xl overflow-hidden border border-white/5 shadow-2xl">
          <img src="https://picsum.photos/seed/boss/800/450" alt="Boss" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent" />
          <div className="absolute top-4 right-4 animate-pulse">
            <span className="material-symbols-outlined text-primary text-4xl drop-shadow-[0_0_10px_#930df2]">bolt</span>
          </div>
          <div className="absolute bottom-6 left-6 right-6">
            <div className="flex justify-between items-center mb-1">
              <h2 className="text-xl font-black">The Syntax Specter</h2>
              <span className="bg-red-500/20 text-red-300 border border-red-500/50 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-widest">Boss Level</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-surface-dark p-4 rounded-2xl border border-white/5 flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-bold text-text-secondary uppercase">Player HP</span>
              <span className="material-symbols-outlined text-green-400 text-sm fill-1">favorite</span>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-black">100</span>
              <span className="text-xs text-slate-500">/ 100</span>
            </div>
            <div className="h-1.5 w-full bg-background-dark rounded-full overflow-hidden">
              <div className="h-full bg-green-500 w-full" />
            </div>
          </div>
          <div className="bg-surface-dark p-4 rounded-2xl border border-white/5 flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-bold text-text-secondary uppercase">Boss HP</span>
              <span className="material-symbols-outlined text-red-500 text-sm fill-1">skull</span>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-black">500</span>
              <span className="text-xs text-slate-500">/ 500</span>
            </div>
            <div className="h-1.5 w-full bg-background-dark rounded-full overflow-hidden">
              <div className="h-full bg-red-500 w-full" />
            </div>
          </div>
        </div>

        <div className="flex-1 bg-surface-dark rounded-3xl p-6 shadow-2xl border border-white/5 flex flex-col gap-6">
          <div className="flex justify-between items-start">
            <div className="flex flex-col gap-1">
              <span className="text-primary text-[10px] font-bold uppercase tracking-widest">Comprehension Check</span>
              <h3 className="text-xl font-bold leading-snug">According to the passage, why did the protagonist feel the Rift was close?</h3>
            </div>
            <span className="material-symbols-outlined text-text-secondary">visibility</span>
          </div>

          <div className="space-y-3">
            {options.map((opt, i) => (
              <button 
                key={i}
                onClick={() => {
                  setSelected(i);
                  if (opt.correct) setTimeout(onWin, 1500);
                }}
                className={`w-full text-left p-5 rounded-2xl border transition-all flex items-start gap-4 active:scale-[0.98] ${
                  selected === i 
                    ? (opt.correct ? 'bg-green-500/10 border-green-500 text-green-200' : 'bg-red-500/10 border-red-500 text-red-200') 
                    : 'bg-background-dark border-white/5 hover:border-primary/50'
                }`}
              >
                <div className={`size-6 rounded-full border shrink-0 flex items-center justify-center text-[10px] font-black mt-0.5 ${
                  selected === i ? 'bg-current text-background-dark' : 'border-slate-600 text-slate-600'
                }`}>
                  {String.fromCharCode(65 + i)}
                </div>
                <span className="text-sm font-medium leading-relaxed">{opt.text}</span>
              </button>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default BattleView;
