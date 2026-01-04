
import React from 'react';
import { View } from '../types';

interface NavigationProps {
  currentView: View;
  onViewChange: (view: View) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentView, onViewChange }) => {
  const tabs: { id: View; label: string; icon: string }[] = [
    { id: 'dashboard', label: 'Home', icon: 'home' },
    { id: 'inventory', label: 'Library', icon: 'local_library' },
    { id: 'analytics', label: 'Progress', icon: 'monitoring' },
    { id: 'welcome', label: 'Profile', icon: 'person' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-background-dark/95 backdrop-blur-lg border-t border-white/5 pb-safe">
      <div className="flex h-16 items-center justify-around px-2">
        {tabs.map((tab) => {
          const isActive = currentView === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onViewChange(tab.id)}
              className={`flex flex-1 flex-col items-center justify-center gap-1 transition-all duration-300 ${
                isActive ? 'text-primary active-tab scale-105' : 'text-slate-400 hover:text-white'
              }`}
            >
              <span className={`material-symbols-outlined text-2xl ${isActive ? 'fill-1' : ''}`}>
                {tab.icon}
              </span>
              <span className="text-[10px] font-medium tracking-wide uppercase">{tab.label}</span>
            </button>
          );
        })}
      </div>
      <div className="h-4 w-full"></div>
    </nav>
  );
};

export default Navigation;
