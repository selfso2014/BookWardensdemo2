
export type View = 
  | 'welcome' 
  | 'onboarding' 
  | 'calibration' 
  | 'dashboard' 
  | 'inventory' 
  | 'analytics' 
  | 'leaderboard' 
  | 'reading' 
  | 'battle';

export interface Resource {
  name: string;
  amount: string;
  unit: string;
  type: 'Resource' | 'Key Item' | 'Currency';
  rarity: 'Common' | 'Rare' | 'Legendary';
  description: string;
  imageUrl: string;
  actionLabel: string;
  icon: string;
}

export interface Quest {
  id: string;
  title: string;
  progress: number;
  total: number;
  xp: number;
  imageUrl: string;
  locked?: boolean;
}

export interface PlayerStats {
  lvl: number;
  xp: number;
  ink: number;
  gems: number;
  runes: number;
  streak: number;
}
