
import React, { useState, useEffect } from 'react';
import { View, PlayerStats } from './types';
import Navigation from './components/Navigation';

// Lazy loading views
import WelcomeView from './views/Welcome';
import OnboardingView from './views/Onboarding';
import CalibrationView from './views/Calibration';
import DashboardView from './views/Dashboard';
import InventoryView from './views/Inventory';
import AnalyticsView from './views/Analytics';
import ReadingView from './views/Reading';
import BattleView from './views/Battle';
import LeaderboardView from './views/Leaderboard';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('welcome');
  const [stats, setStats] = useState<PlayerStats>({
    lvl: 5,
    xp: 4520,
    ink: 120,
    gems: 300,
    runes: 5,
    streak: 12
  });

  // Simple state machine for demo
  const navigate = (view: View) => setCurrentView(view);

  const renderView = () => {
    switch (currentView) {
      case 'welcome': return <WelcomeView onEnter={() => navigate('onboarding')} />;
      case 'onboarding': return <OnboardingView onSkip={() => navigate('dashboard')} onNext={() => navigate('calibration')} />;
      case 'calibration': return <CalibrationView onComplete={() => navigate('dashboard')} />;
      case 'dashboard': return <DashboardView stats={stats} onStartReading={() => navigate('reading')} onGoLeaderboard={() => navigate('leaderboard')} />;
      case 'inventory': return <InventoryView stats={stats} />;
      case 'analytics': return <AnalyticsView stats={stats} onGoLeaderboard={() => navigate('leaderboard')} />;
      case 'leaderboard': return <LeaderboardView onBack={() => navigate('dashboard')} />;
      case 'reading': return <ReadingView onComplete={() => navigate('battle')} onBack={() => navigate('dashboard')} />;
      case 'battle': return <BattleView onWin={() => navigate('dashboard')} onBack={() => navigate('dashboard')} />;
      default: return <DashboardView stats={stats} onStartReading={() => navigate('reading')} onGoLeaderboard={() => navigate('leaderboard')} />;
    }
  };

  const showNav = !['welcome', 'onboarding', 'calibration', 'reading', 'battle'].includes(currentView);

  return (
    <div className="min-h-screen max-w-md mx-auto relative bg-background-dark shadow-2xl overflow-x-hidden flex flex-col">
      <main className="flex-1 flex flex-col">
        {renderView()}
      </main>
      {showNav && <Navigation currentView={currentView} onViewChange={navigate} />}
    </div>
  );
};

export default App;
