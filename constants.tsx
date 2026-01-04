
import { Resource, Quest } from './types';

export const RESOURCES: Resource[] = [
  {
    name: 'Magical Ink',
    amount: '1,240',
    unit: 'ml',
    type: 'Resource',
    rarity: 'Common',
    description: 'Essential for writing spells. Earned by tracking reading time and completing chapters.',
    imageUrl: 'https://picsum.photos/seed/ink/400/300',
    actionLabel: 'Get More',
    icon: 'water_drop'
  },
  {
    name: 'Ancient Runes',
    amount: '14',
    unit: 'Runes',
    type: 'Key Item',
    rarity: 'Rare',
    description: 'Powerful stones that unlock new Book Dungeons. Can be found in daily chests.',
    imageUrl: 'https://picsum.photos/seed/rune/400/300',
    actionLabel: 'Use',
    icon: 'change_history'
  },
  {
    name: 'Void Gems',
    amount: '350',
    unit: 'Gems',
    type: 'Currency',
    rarity: 'Legendary',
    description: 'Premium currency for rare avatars. A reward for perfect comprehension streaks.',
    imageUrl: 'https://picsum.photos/seed/gems/400/300',
    actionLabel: 'Shop',
    icon: 'diamond'
  }
];

export const QUESTS: Quest[] = [
  {
    id: '1',
    title: 'The Lost Chapter',
    progress: 50,
    total: 100,
    xp: 100,
    imageUrl: 'https://picsum.photos/seed/q1/100/100'
  },
  {
    id: '2',
    title: 'Vocabulary Hunt',
    progress: 20,
    total: 100,
    xp: 150,
    imageUrl: 'https://picsum.photos/seed/q2/100/100',
    locked: true
  }
];
