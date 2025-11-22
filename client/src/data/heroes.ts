
export type Role = 'tank' | 'damage' | 'support';

export interface Hero {
  id: string;
  name: string;
  role: Role;
  image: string; // In a real app, this would be a URL. For now, we'll use a color or placeholder.
  color: string;
}

export interface BuildGuide {
  heroId: string;
  opponentId: string;
  summary: string;
  stats: {
    priority: string[]; // e.g. ["Speed", "Cooldown Reduction"]
    avoid: string[];
  };
  talents: {
    name: string;
    description: string;
    tier: 1 | 2 | 3;
    recommended: boolean;
  }[];
  tips: string[];
}

export const heroes: Hero[] = [
  // Tanks
  { id: 'dva', name: 'D.Va', role: 'tank', image: '', color: '#ed93c7' },
  { id: 'doomfist', name: 'Doomfist', role: 'tank', image: '', color: '#812d25' },
  { id: 'junkerqueen', name: 'Junker Queen', role: 'tank', image: '', color: '#f3ba23' },
  { id: 'orisa', name: 'Orisa', role: 'tank', image: '', color: '#468c43' },
  { id: 'ramattra', name: 'Ramattra', role: 'tank', image: '', color: '#694599' },
  { id: 'reinhardt', name: 'Reinhardt', role: 'tank', image: '', color: '#93a0a4' },
  { id: 'roadhog', name: 'Roadhog', role: 'tank', image: '', color: '#b68c52' },
  { id: 'sigma', name: 'Sigma', role: 'tank', image: '', color: '#90a3a8' },
  { id: 'winston', name: 'Winston', role: 'tank', image: '', color: '#a2a6bf' },
  { id: 'zarya', name: 'Zarya', role: 'tank', image: '', color: '#e77eb8' },

  // Damage
  { id: 'ashe', name: 'Ashe', role: 'damage', image: '', color: '#686969' },
  { id: 'bastion', name: 'Bastion', role: 'damage', image: '', color: '#7c8f7b' },
  { id: 'cassidy', name: 'Cassidy', role: 'damage', image: '', color: '#ae5a4c' },
  { id: 'echo', name: 'Echo', role: 'damage', image: '', color: '#89c8ff' },
  { id: 'genji', name: 'Genji', role: 'damage', image: '', color: '#97ef43' },
  { id: 'hanzo', name: 'Hanzo', role: 'damage', image: '', color: '#b9b48a' },
  { id: 'junkrat', name: 'Junkrat', role: 'damage', image: '', color: '#ecbd53' },
  { id: 'mei', name: 'Mei', role: 'damage', image: '', color: '#6cacd8' },
  { id: 'pharah', name: 'Pharah', role: 'damage', image: '', color: '#3e7dca' },
  { id: 'reaper', name: 'Reaper', role: 'damage', image: '', color: '#7d3e51' },
  { id: 'sojourn', name: 'Sojourn', role: 'damage', image: '', color: '#d64e42' },
  { id: 'soldier76', name: 'Soldier: 76', role: 'damage', image: '', color: '#697794' },
  { id: 'sombra', name: 'Sombra', role: 'damage', image: '', color: '#7359ba' },
  { id: 'symmetra', name: 'Symmetra', role: 'damage', image: '', color: '#8ebccc' },
  { id: 'torbjorn', name: 'Torbjörn', role: 'damage', image: '', color: '#c0726e' },
  { id: 'tracer', name: 'Tracer', role: 'damage', image: '', color: '#d79342' },
  { id: 'widowmaker', name: 'Widowmaker', role: 'damage', image: '', color: '#9e6aa8' },

  // Support
  { id: 'ana', name: 'Ana', role: 'support', image: '', color: '#718ab3' },
  { id: 'baptiste', name: 'Baptiste', role: 'support', image: '', color: '#5dbcd5' },
  { id: 'brigitte', name: 'Brigitte', role: 'support', image: '', color: '#be736e' },
  { id: 'kiriko', name: 'Kiriko', role: 'support', image: '', color: '#d44368' },
  { id: 'lucio', name: 'Lúcio', role: 'support', image: '', color: '#85c952' },
  { id: 'mercy', name: 'Mercy', role: 'support', image: '', color: '#e7e6d1' },
  { id: 'moira', name: 'Moira', role: 'support', image: '', color: '#803c51' },
  { id: 'zenyatta', name: 'Zenyatta', role: 'support', image: '', color: '#ede582' },
];

// Helper to generate mock guides
export const getBuildGuide = (heroId: string, opponentId: string): BuildGuide => {
  const hero = heroes.find(h => h.id === heroId);
  const opponent = heroes.find(h => h.id === opponentId);
  
  if (!hero || !opponent) return {
    heroId: 'unknown',
    opponentId: 'unknown',
    summary: 'Select heroes to see the guide.',
    stats: { priority: [], avoid: [] },
    talents: [],
    tips: []
  };

  // Simple mock logic for demo purposes
  const isTankVsTank = hero.role === 'tank' && opponent.role === 'tank';
  const isSupportVsDamage = hero.role === 'support' && opponent.role === 'damage';
  
  let summary = `Against ${opponent.name}, you need to play smart.`;
  let priority = ['Health', 'Cooldowns'];
  let tips = [`Keep your distance from ${opponent.name}.`, 'Use cover effectively.'];

  if (opponent.role === 'tank') {
    summary = `${opponent.name} has high health. Focus on sustained damage and survival.`;
    priority = ['Armor Penetration', 'Sustain', 'Mobility'];
    tips.push('Don\'t trade blows unless you have advantage.');
  } else if (opponent.role === 'damage') {
    summary = `${opponent.name} deals high burst damage. Prioritize mitigation and positioning.`;
    priority = ['Damage Mitigation', 'Health', 'Crowd Control'];
    tips.push('Watch out for their cooldowns.');
  }

  return {
    heroId,
    opponentId,
    summary,
    stats: {
      priority,
      avoid: ['Glass Cannon builds', 'Stationary playstyle']
    },
    talents: [
      { name: 'Kinetic Plating', description: 'Reduces incoming damage by 15% for 3s after using an ability.', tier: 1, recommended: true },
      { name: 'Adrenaline Rush', description: 'Move 20% faster when below 50% health.', tier: 1, recommended: false },
      { name: 'Shatter Rounds', description: 'Deal 25% more damage to shields and armor.', tier: 2, recommended: opponent.role === 'tank' },
      { name: 'Emergency Shield', description: 'Gain a 200hp shield when taking fatal damage. (120s CD)', tier: 3, recommended: true },
    ],
    tips
  };
};
