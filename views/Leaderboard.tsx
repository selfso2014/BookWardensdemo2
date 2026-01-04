
import React from 'react';

interface Props {
  onBack: () => void;
}

const LeaderboardView: React.FC<Props> = ({ onBack }) => {
  const topThree = [
    { rank: 2, name: 'PageRogue', xp: '14,200', avatar: 'https://picsum.photos/seed/p2/150/150', color: 'border-slate-400' },
    { rank: 1, name: 'WardenOfBooks', xp: '15,400', avatar: 'https://picsum.photos/seed/p1/200/200', color: 'border-yellow-400', main: true },
    { rank: 3, name: 'SirReadALot', xp: '13,850', avatar: 'https://picsum.photos/seed/p3/150/150', color: 'border-amber-600' },
  ];

  const others = [
    { rank: 4, name: 'BookWorm99', xp: '12,400', title: 'Lvl 12 Scholar' },
    { rank: 5, name: 'LexiconHero', xp: '11,200', title: 'Lvl 11 Mage' },
    { rank: 6, name: 'ChapterChaser', xp: '10,850', title: 'Lvl 10 Ranger' },
    { rank: 7, name: 'LoreKeeper', xp: '10,100', title: 'Lvl 9 Bard' },
  ];

  return (
    <div className="flex-1 flex flex-col h-screen overflow-hidden bg-background-dark">
      <header className="p-5 flex items-center justify-between sticky top-0 bg-background-dark/95 backdrop-blur-md z-30">
        <button onClick={onBack} className="size-10 flex items-center justify-center rounded-full hover:bg-white/10">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <div className="text-center">
          <h1 class="text-lg font-black uppercase tracking-widest">World Champions</h1>
          <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]">Season 4: The Rift</span>
        </div>
        <span className="material-symbols-outlined text-primary text-2xl">trophy</span>
      </header>

      <div className="px-5 py-4 shrink-0">
        <div className="flex bg-surface-dark p-1 rounded-2xl border border-white/5">
          <button className="flex-1 py-2 rounded-xl bg-primary text-xs font-black uppercase tracking-widest">Global</button>
          <button className="flex-1 py-2 rounded-xl text-slate-500 text-xs font-black uppercase tracking-widest">Friends</button>
          <button className="flex-1 py-2 rounded-xl text-slate-500 text-xs font-black uppercase tracking-widest">School</button>
        </div>
      </div>

      <main className="flex-1 overflow-y-auto no-scrollbar pb-32">
        <section className="relative px-5 pt-8 pb-12 flex items-end justify-center gap-4">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-64 bg-primary/20 blur-[60px] rounded-full -z-10" />
          {topThree.map((p) => (
            <div key={p.rank} className={`flex flex-col items-center gap-3 w-1/3 ${p.main ? 'z-20 -translate-y-4 scale-110' : 'z-10 opacity-80'}`}>
              <div className="relative">
                {p.rank === 1 && (
                   <span className="material-symbols-outlined text-amber-400 text-3xl absolute -top-8 left-1/2 -translate-x-1/2 fill-1 animate-bounce">crown</span>
                )}
                <div className={`rounded-full border-4 overflow-hidden p-1 ${p.color} bg-background-dark shadow-2xl`}>
                   <img src={p.avatar} alt={p.name} className="w-full h-full rounded-full object-cover" />
                </div>
                <div className={`absolute -bottom-2 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full border border-background-dark font-black text-[10px] shadow-lg ${
                  p.rank === 1 ? 'bg-primary text-white' : 'bg-surface-dark text-slate-400'
                }`}>#{p.rank}</div>
              </div>
              <div className="text-center">
                <p className={`text-xs font-bold truncate w-20 ${p.main ? 'text-white' : 'text-slate-400'}`}>{p.name}</p>
                <p className={`text-[10px] font-black ${p.main ? 'text-primary' : 'text-slate-500'}`}>{p.xp} XP</p>
              </div>
            </div>
          ))}
        </section>

        <div className="space-y-3 px-5">
          {others.map((p) => (
            <div key={p.rank} className="flex items-center justify-between p-4 bg-surface-dark border border-white/5 rounded-2xl shadow-xl">
              <div className="flex items-center gap-4">
                <span className="text-sm font-black text-slate-600 w-4">{p.rank}</span>
                <div className="size-10 rounded-full overflow-hidden border border-white/10">
                  <img src={`https://picsum.photos/seed/p${p.rank}/100/100`} alt={p.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-white">{p.name}</span>
                  <span className="text-[10px] text-slate-500 uppercase font-black">{p.title}</span>
                </div>
              </div>
              <span className="text-sm font-black text-primary">{p.xp} XP</span>
            </div>
          ))}
        </div>
      </main>

      <div className="fixed bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-background-dark via-background-dark/95 to-transparent">
        <div className="bg-primary rounded-2xl p-4 flex items-center justify-between shadow-2xl shadow-primary/40 border border-white/20">
          <div className="flex items-center gap-4">
             <div className="text-center flex flex-col leading-none border-r border-white/20 pr-4">
                <span className="text-[10px] font-black text-white/60 uppercase">Rank</span>
                <span className="text-xl font-black">42</span>
             </div>
             <div className="size-10 rounded-full border-2 border-white/40 overflow-hidden">
                <img src="https://picsum.photos/seed/me/100/100" alt="Me" className="w-full h-full object-cover" />
             </div>
             <div className="flex flex-col">
                <span className="text-sm font-black">You</span>
                <span className="text-[10px] font-bold text-white/70">Lvl 5 Novice</span>
             </div>
          </div>
          <div className="text-right">
             <p className="text-sm font-black">4,520 XP</p>
             <p className="text-[10px] font-bold flex items-center justify-end gap-1 text-white/80">
                <span className="material-symbols-outlined text-[12px]">arrow_upward</span> 12 ranks
             </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardView;
