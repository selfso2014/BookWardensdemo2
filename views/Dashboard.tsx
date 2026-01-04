
import React from 'react';
import { PlayerStats } from '../types';
import { QUESTS } from '../constants';

interface Props {
  stats: PlayerStats;
  onStartReading: () => void;
  onGoLeaderboard: () => void;
}

const DashboardView: React.FC<Props> = ({ stats, onStartReading, onGoLeaderboard }) => {
  return (
    <div className="flex-1 overflow-y-auto no-scrollbar pb-24">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background-dark/90 backdrop-blur-md p-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="size-12 rounded-full border-2 border-primary overflow-hidden">
              <img src="https://picsum.photos/seed/avatar/100/100" alt="Avatar" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-1 -right-1 bg-primary text-[10px] font-bold px-2 py-0.5 rounded-full border border-background-dark text-white shadow-lg">
              Lvl {stats.lvl}
            </div>
          </div>
          <div className="flex flex-col">
            <h2 className="text-white font-bold leading-tight">Warden Alex</h2>
            <div className="w-24 h-1.5 bg-surface-dark rounded-full mt-1 overflow-hidden">
              <div className="h-full bg-gradient-to-r from-primary to-purple-400 w-[65%] rounded-full" />
            </div>
          </div>
        </div>
        <button className="size-10 flex items-center justify-center rounded-full bg-surface-dark border border-white/5 relative">
          <span className="material-symbols-outlined text-text-secondary">notifications</span>
          <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border border-background-dark" />
        </button>
      </header>

      {/* Resource Row */}
      <section className="px-5 py-4">
        <div className="flex gap-3">
          <div className="flex-1 bg-surface-dark border border-white/5 rounded-2xl p-4 flex flex-col items-center gap-1 shadow-xl">
            <span className="material-symbols-outlined text-cyan-400 fill-1 text-xl">opacity</span>
            <span className="text-lg font-bold">{stats.ink}</span>
            <span className="text-[10px] text-text-secondary font-bold uppercase tracking-widest">Ink</span>
          </div>
          <div className="flex-1 bg-surface-dark border border-white/5 rounded-2xl p-4 flex flex-col items-center gap-1 shadow-xl">
            <span className="material-symbols-outlined text-amber-400 fill-1 text-xl">diamond</span>
            <span className="text-lg font-bold">{stats.gems}</span>
            <span className="text-[10px] text-text-secondary font-bold uppercase tracking-widest">Gems</span>
          </div>
          <div className="flex-1 bg-surface-dark border border-white/5 rounded-2xl p-4 flex flex-col items-center gap-1 shadow-xl">
            <span className="material-symbols-outlined text-emerald-400 fill-1 text-xl">change_history</span>
            <span className="text-lg font-bold">{stats.runes}</span>
            <span className="text-[10px] text-text-secondary font-bold uppercase tracking-widest">Runes</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="px-5 py-2">
        <div className="group relative w-full rounded-3xl overflow-hidden shadow-2xl shadow-primary/20 cursor-pointer" onClick={onStartReading}>
          <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{backgroundImage: "url('https://picsum.photos/seed/dungeon/800/600')"}} />
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/60 to-transparent" />
          <div className="relative z-10 p-6 flex flex-col min-h-[260px] justify-between">
            <div className="flex justify-between items-start">
              <div className="bg-red-500/20 border border-red-500/50 backdrop-blur-md px-3 py-1 rounded-lg flex items-center gap-2">
                <span className="size-2 bg-red-500 rounded-full animate-pulse" />
                <span className="text-red-200 text-[10px] font-bold uppercase tracking-widest">Rift Open</span>
              </div>
              <div className="bg-black/40 backdrop-blur-md p-2 rounded-xl border border-white/10">
                <span className="material-symbols-outlined text-primary text-xl">visibility</span>
              </div>
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl font-black text-white leading-none">Daily Dungeon</h2>
              <p className="text-slate-300 text-sm leading-relaxed max-w-[80%]">Stabilize the breach in Chapter 4 and earn 2x XP.</p>
              <button className="w-full mt-4 bg-primary hover:bg-primary-dark py-4 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg transition-all">
                <span className="material-symbols-outlined">auto_stories</span>
                Enter Dungeon
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Streak Section */}
      <section className="px-5 py-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold">Your Streak</h3>
          <button onClick={onGoLeaderboard} className="text-primary text-sm font-bold flex items-center gap-1">
            View Ranking <span className="material-symbols-outlined text-base">chevron_right</span>
          </button>
        </div>
        <div className="bg-surface-dark rounded-2xl border border-white/5 p-5">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-orange-500 fill-1 text-2xl">local_fire_department</span>
              <span className="text-2xl font-black">{stats.streak} Days</span>
            </div>
            <span className="text-slate-500 text-xs font-bold uppercase tracking-widest">Keep it up!</span>
          </div>
          <div className="flex justify-between gap-2">
            {['M','T','W','T','F','S','S'].map((day, i) => {
              const completed = i < 4;
              const isToday = i === 4;
              return (
                <div key={i} className="flex flex-col items-center gap-2">
                  <div className={`size-10 rounded-full flex items-center justify-center border transition-all ${
                    completed ? 'bg-primary/20 border-primary text-primary' : 
                    isToday ? 'bg-white border-white text-primary shadow-lg shadow-white/20 scale-110' :
                    'bg-background-dark/50 border-white/10 text-slate-600'
                  }`}>
                    {completed ? <span className="material-symbols-outlined text-sm">check</span> : <span className="text-xs font-black">{i+1}</span>}
                  </div>
                  <span className={`text-[10px] font-bold ${isToday ? 'text-white' : 'text-slate-500'}`}>{day}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quests */}
      <section className="px-5 pb-8">
        <h3 className="text-lg font-bold mb-4">Active Quests</h3>
        <div className="space-y-3">
          {QUESTS.map((q) => (
            <div key={q.id} className={`flex items-center p-3 bg-surface-dark border border-white/5 rounded-2xl group cursor-pointer transition-all hover:bg-surface-highlight ${q.locked ? 'opacity-60 grayscale' : ''}`}>
              <div className="size-14 rounded-xl overflow-hidden border border-white/10 shrink-0">
                <img src={q.imageUrl} alt={q.title} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 mx-4">
                <h4 className="font-bold text-white group-hover:text-primary transition-colors">{q.title}</h4>
                <p className="text-[10px] text-text-secondary font-bold uppercase mt-1">XP Reward: {q.xp}</p>
                <div className="w-full h-1.5 bg-background-dark rounded-full mt-2 overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{width: `${q.progress}%`}} />
                </div>
              </div>
              <button className="size-10 flex items-center justify-center rounded-full bg-background-dark text-slate-500 hover:text-white transition-colors">
                <span className="material-symbols-outlined">{q.locked ? 'lock' : 'play_arrow'}</span>
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default DashboardView;
