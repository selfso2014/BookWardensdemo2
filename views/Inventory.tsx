
import React from 'react';
import { PlayerStats } from '../types';
import { RESOURCES } from '../constants';

interface Props {
  stats: PlayerStats;
}

const InventoryView: React.FC<Props> = ({ stats }) => {
  return (
    <div className="flex-1 overflow-y-auto no-scrollbar pb-24">
      <header className="sticky top-0 z-50 bg-background-dark/95 backdrop-blur-md p-6 pt-12 text-center border-b border-white/5">
        <h1 className="text-2xl font-black uppercase tracking-widest">Inventory</h1>
        <p className="text-text-secondary text-sm mt-1">Your magical resources & currencies</p>
      </header>

      <section className="px-5 py-8">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-surface-dark p-5 rounded-3xl border border-primary/20 flex flex-col items-center gap-2 shadow-2xl">
            <div className="flex items-center gap-2 text-primary font-black uppercase tracking-widest text-[10px]">
              <span className="material-symbols-outlined text-sm">inventory_2</span>
              Total Items
            </div>
            <span className="text-2xl font-black">1,604</span>
          </div>
          <div className="bg-surface-dark p-5 rounded-3xl border border-primary/20 flex flex-col items-center gap-2 shadow-2xl">
            <div className="flex items-center gap-2 text-primary font-black uppercase tracking-widest text-[10px]">
              <span className="material-symbols-outlined text-sm">verified</span>
              Warden Level
            </div>
            <span className="text-2xl font-black">Lvl {stats.lvl}</span>
          </div>
        </div>
      </section>

      <main className="px-5 space-y-6 pb-8">
        {RESOURCES.map((res, i) => (
          <div key={i} className="group relative bg-surface-dark border border-white/5 rounded-3xl overflow-hidden shadow-2xl transition-all hover:scale-[1.02]">
            <div className="h-40 overflow-hidden relative">
              <img src={res.imageUrl} alt={res.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full flex items-center gap-2">
                <span className={`material-symbols-outlined text-sm ${res.rarity === 'Legendary' ? 'text-amber-400 fill-1' : 'text-white'}`}>
                  {res.icon}
                </span>
                <span className="text-[10px] font-black uppercase tracking-widest">{res.rarity}</span>
              </div>
            </div>
            <div className="p-6 pt-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-black">{res.name}</h3>
                <span className="bg-primary/20 text-primary text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-lg border border-primary/30">
                  {res.type}
                </span>
              </div>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-3xl font-black text-primary">{res.amount}</span>
                <span className="text-sm font-bold text-slate-500 uppercase">{res.unit}</span>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed line-clamp-2">
                {res.description}
              </p>
              <div className="mt-6 flex justify-end">
                <button className="bg-primary hover:bg-primary-dark active:scale-[0.98] transition-all px-6 py-2.5 rounded-2xl font-bold flex items-center gap-2 shadow-lg shadow-primary/20">
                   <span className="material-symbols-outlined text-sm">{res.name.includes('Ink') ? 'add' : res.name.includes('Rune') ? 'arrow_forward' : 'storefront'}</span>
                   {res.actionLabel}
                </button>
              </div>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default InventoryView;
