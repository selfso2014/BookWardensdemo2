
import React from 'react';
import { PlayerStats } from '../types';

interface Props {
  stats: PlayerStats;
  onGoLeaderboard: () => void;
}

const AnalyticsView: React.FC<Props> = ({ stats, onGoLeaderboard }) => {
  return (
    <div className="flex-1 overflow-y-auto no-scrollbar pb-24">
      <header className="sticky top-0 z-50 bg-background-dark/95 backdrop-blur-md p-6 pt-12 flex items-center justify-between border-b border-white/5">
        <button className="size-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h1 className="text-xl font-black uppercase tracking-widest">Reading Coach</h1>
        <button className="size-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors">
          <span className="material-symbols-outlined">settings</span>
        </button>
      </header>

      <section className="flex flex-col items-center p-8">
        <div className="relative group mb-8">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary via-purple-500 to-blue-500 rounded-full opacity-60 blur-lg animate-pulse" />
          <div className="relative size-32 rounded-full border-4 border-surface-dark overflow-hidden bg-surface-dark">
             <img src="https://picsum.photos/seed/coach/200/200" alt="Coach Avatar" className="w-full h-full object-cover" />
          </div>
          <div className="absolute bottom-2 right-2 size-6 bg-green-500 border-4 border-background-dark rounded-full shadow-lg" />
        </div>

        <div className="relative bg-surface-dark border border-primary/30 p-6 rounded-3xl shadow-2xl text-center max-w-sm">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rotate-45 border-l border-t border-primary/30 bg-surface-dark" />
          <p className="text-sm leading-relaxed text-slate-200">
            "Greetings, Warden! Your <span className="text-primary font-bold">Visual Focus</span> score hit an all-time high of <span className="font-bold">92%</span> today. You're mastering the Rift!"
          </p>
        </div>
      </section>

      <section className="px-5 grid grid-cols-2 gap-4">
        {[
          { label: 'Fluency', val: '145', unit: 'WPM', change: '+12% vs LW', icon: 'speed', color: 'text-primary' },
          { label: 'Accuracy', val: '96', unit: '%', change: 'Top 5%', icon: 'check_circle', color: 'text-blue-400' },
          { label: 'Eye Tracking', val: '8.5', unit: '/ 10', change: 'Steady', icon: 'visibility', color: 'text-purple-400' },
          { label: 'Vocabulary', val: '24', unit: 'New Words', change: 'Gold Mastery', icon: 'auto_stories', color: 'text-amber-400' },
        ].map((s, i) => (
          <div key={i} className="bg-surface-dark border border-white/5 p-4 rounded-3xl shadow-xl flex flex-col gap-1 overflow-hidden relative group">
             <div className="absolute -top-4 -right-4 size-16 bg-white/5 rounded-full flex items-center justify-center transition-transform group-hover:scale-125">
               <span className={`material-symbols-outlined opacity-10 text-4xl`}>{s.icon}</span>
             </div>
             <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">{s.label}</span>
             <div className="flex items-baseline gap-1">
                <span className="text-2xl font-black">{s.val}</span>
                <span className="text-[10px] font-bold text-slate-500 uppercase">{s.unit}</span>
             </div>
             <div className={`text-[10px] font-bold ${s.change.includes('+') || s.change.includes('Top') ? 'text-green-500' : 'text-slate-500'}`}>
                {s.change}
             </div>
          </div>
        ))}
      </section>

      <section className="p-5 mt-4">
        <div className="bg-surface-dark border border-white/5 p-6 rounded-3xl shadow-xl">
           <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="font-black uppercase tracking-widest text-sm">Comprehension Streak</h3>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Last 7 days performance</p>
              </div>
              <button onClick={onGoLeaderboard} className="text-[10px] font-black uppercase text-primary tracking-widest">Details</button>
           </div>
           <div className="flex items-end justify-between h-28 gap-3 px-2">
              {[40, 65, 50, 80, 30, 95, 10].map((h, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-2 group">
                   <div className={`w-full rounded-t-lg transition-all duration-500 ${i === 5 ? 'bg-primary shadow-[0_0_15px_rgba(147,13,242,0.5)]' : 'bg-primary/10 group-hover:bg-primary/30'}`} style={{height: `${h}%`}} />
                   <span className={`text-[8px] font-black uppercase ${i === 5 ? 'text-white' : 'text-slate-600'}`}>MTWTFSS'[i]</span>
                </div>
              ))}
           </div>
        </div>
      </section>

      <section className="px-5 pb-8 space-y-4">
        <div className="flex items-center gap-2">
           <span className="material-symbols-outlined text-primary text-xl">psychology</span>
           <h3 className="text-lg font-black uppercase tracking-widest">Coach's Tips</h3>
        </div>
        <div className="space-y-3">
          <div className="bg-gradient-to-r from-surface-dark to-[#2d1f3a] border border-primary/20 p-5 rounded-3xl shadow-xl flex items-start gap-4 active:scale-[0.98] transition-all cursor-pointer">
             <div className="size-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <span className="material-symbols-outlined">restart_alt</span>
             </div>
             <div className="flex-1">
                <h4 className="font-bold text-white mb-1">Reduce Regression</h4>
                <p className="text-xs text-slate-400 leading-relaxed">Your eyes tracked back 12 times in the last chapter. Use the <span className="text-primary font-bold">Focus Ruler</span>.</p>
             </div>
             <span className="material-symbols-outlined text-slate-600 self-center">chevron_right</span>
          </div>
          <div className="bg-surface-dark border border-white/5 p-5 rounded-3xl shadow-xl flex items-start gap-4 active:scale-[0.98] transition-all cursor-pointer">
             <div className="size-12 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-500 shrink-0">
                <span className="material-symbols-outlined">school</span>
             </div>
             <div className="flex-1">
                <h4 className="font-bold text-white mb-1">New Dungeon Unlocked</h4>
                <p className="text-xs text-slate-400 leading-relaxed">Your vocabulary level qualifies you for the "Cavern of Whispers".</p>
             </div>
             <span className="material-symbols-outlined text-slate-600 self-center">chevron_right</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AnalyticsView;
