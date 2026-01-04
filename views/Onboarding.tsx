
import React from 'react';

interface Props {
  onSkip: () => void;
  onNext: () => void;
}

const OnboardingView: React.FC<Props> = ({ onSkip, onNext }) => {
  const steps = [
    { title: 'Read', desc: 'Read daily chapters. Eye-tracking ensures you stay focused.', icon: 'visibility' },
    { title: 'Understand', desc: 'Answer quick questions to defeat monsters.', icon: 'quiz' },
    { title: 'Reward', desc: 'Earn loot and XP to upgrade your Warden.', icon: 'diamond' },
    { title: 'Repeat', desc: 'Build your streak and conquer the Rift.', icon: 'all_inclusive' },
  ];

  return (
    <div className="flex-1 flex flex-col p-8 pt-12">
      <div className="flex justify-end mb-8">
        <button onClick={onSkip} className="text-primary font-black uppercase tracking-widest text-sm">Skip</button>
      </div>

      <h1 className="text-4xl font-black tracking-tight leading-none mb-12">
        How the <span className="text-primary">App</span> Works
      </h1>

      <div className="flex-1 space-y-4 overflow-y-auto no-scrollbar pb-8">
        {steps.map((step, i) => (
          <div key={i} className="flex items-center gap-5 p-5 rounded-3xl bg-surface-dark border border-white/5 transition-all hover:border-primary/40 group">
             <div className="size-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">{step.icon}</span>
             </div>
             <div className="flex flex-col gap-1">
                <h3 className="text-lg font-bold">{step.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
             </div>
          </div>
        ))}
      </div>

      <div className="pt-8 flex flex-col items-center gap-8">
        <div className="flex gap-2">
           <div className="size-2 rounded-full bg-slate-800" />
           <div className="size-2 rounded-full bg-slate-800" />
           <div className="w-6 h-2 rounded-full bg-primary" />
           <div className="size-2 rounded-full bg-slate-800" />
        </div>
        <button 
          onClick={onNext}
          className="w-full bg-primary py-5 rounded-3xl font-black text-xl tracking-widest shadow-[0_0_30px_rgba(147,13,242,0.4)]"
        >
          Enter the Rift
        </button>
      </div>
    </div>
  );
};

export default OnboardingView;
