
export type Role = 'tank' | 'damage' | 'support';

export interface Hero {
  id: string;
  name: string;
  role: Role;
  image: string; // Using color/placeholder
  color: string;
}

export interface Power {
  name: string;
  description: string;
  tier: number; // 1, 3, 5, 7
}

export interface Item {
  name: string;
  description: string;
  type: 'survival' | 'weapon' | 'ability';
  price?: number;
}

export interface BuildGuide {
  heroId: string;
  opponentId: string;
  summary: string;
  stats: {
    priority: string[];
    avoid: string[];
  };
  powers: Power[];
  items: Item[];
  tips: string[];
}

// STADIUM ROSTER ONLY
export const heroes: Hero[] = [
  // Tanks
  { id: 'dva', name: 'D.Va', role: 'tank', image: '', color: '#ed93c7' },
  { id: 'reinhardt', name: 'Reinhardt', role: 'tank', image: '', color: '#93a0a4' },
  { id: 'zarya', name: 'Zarya', role: 'tank', image: '', color: '#e77eb8' },
  { id: 'orisa', name: 'Orisa', role: 'tank', image: '', color: '#468c43' },
  { id: 'junkerqueen', name: 'Junker Queen', role: 'tank', image: '', color: '#f3ba23' },

  // Damage
  { id: 'soldier76', name: 'Soldier: 76', role: 'damage', image: '', color: '#697794' },
  { id: 'cassidy', name: 'Cassidy', role: 'damage', image: '', color: '#ae5a4c' },
  { id: 'genji', name: 'Genji', role: 'damage', image: '', color: '#97ef43' },
  { id: 'ashe', name: 'Ashe', role: 'damage', image: '', color: '#686969' },
  { id: 'mei', name: 'Mei', role: 'damage', image: '', color: '#6cacd8' },
  { id: 'reaper', name: 'Reaper', role: 'damage', image: '', color: '#7d3e51' },
  // Freja is mentioned but might not have a color/official ID yet, omitting to be safe or adding as generic
  // { id: 'freja', name: 'Freja', role: 'damage', image: '', color: '#ff0000' }, 

  // Support
  { id: 'mercy', name: 'Mercy', role: 'support', image: '', color: '#e7e6d1' },
  { id: 'moira', name: 'Moira', role: 'support', image: '', color: '#803c51' },
  { id: 'lucio', name: 'Lúcio', role: 'support', image: '', color: '#85c952' },
  { id: 'kiriko', name: 'Kiriko', role: 'support', image: '', color: '#d44368' },
  { id: 'juno', name: 'Juno', role: 'support', image: '', color: '#e55d8a' }, // Juno color approx
];

// UNIVERSAL ITEMS
const commonItems: Item[] = [
  { name: 'Charged Plating', description: 'Gain 25 Armor + 10% Ability Power after using Ult.', type: 'survival' },
  { name: 'Winning Attitude', description: '+25 Health, +15% Ult Charge on death.', type: 'survival' },
  { name: 'Electrolytes', description: 'Start round with 100 unrecoverable Overhealth.', type: 'survival' },
  { name: 'Field Rations', description: 'Restore 8 HP/s while on Objective.', type: 'survival' },
  { name: 'Adrenaline Shot', description: '+10 HP, Health Packs give speed boost & overhealth.', type: 'survival' },
  { name: 'Running Shoes', description: '+10 HP, +20% Move Speed out of combat.', type: 'survival' },
  { name: 'Heartbeat Sensor', description: '+5% Speed, reveal low HP enemies.', type: 'survival' },
  { name: 'Siphon Gloves', description: '+25 HP, Melee heals 25 HP.', type: 'survival' },
  { name: 'First Aid Kit', description: '+25 Shields, faster regen.', type: 'survival' },
  { name: 'Shieldbuster', description: '+5% Wpn Power, Fire Rate buff vs Shields/Armor.', type: 'weapon' },
];

// HERO POWERS DATABASE
const heroPowers: Record<string, Power[]> = {
  reinhardt: [
    { name: 'Wilhelmwagen', description: 'While Barrier active: Heal for 15% mitigated dmg + 30% Speed.', tier: 1 },
    { name: 'Barrier Reconstruction', description: 'Hammer/Fire Strike hits restore 10% Barrier HP.', tier: 3 },
    { name: 'Smashing!', description: 'Hammer hits grant Speed & Lifesteal (stacks).', tier: 5 },
    { name: 'Magma Strike', description: 'Fire Strike leaves lava trails.', tier: 7 },
  ],
  dva: [
    { name: 'Ignition Burst', description: 'Boosters leave a trail of lava.', tier: 1 },
    { name: 'Focused Fusion', description: 'Reduce spread by 66%, increase range.', tier: 3 },
    { name: 'Micro-Missile Swarm', description: 'Fire 50% more missiles.', tier: 5 }, // inferred/generic
    { name: 'Nuclear Eject', description: 'Mech explosion radius +50%.', tier: 7 }, // inferred/generic
  ],
  cassidy: [
    { name: 'Improvised Dynamite', description: '+20% AP, +10% CDR, Flashbang radius +50%.', tier: 1 },
    { name: 'Wanted Poster', description: '+25 HP, Deadeye kills give extra Cash.', tier: 3 },
    { name: 'Blackwatch Tech', description: 'Deadeye kills reduce Flashbang CD.', tier: 5 },
    { name: 'High Noon Quickdraw', description: 'Deadeye locks on 30% faster.', tier: 7 }, // inferred
  ],
  ashe: [
    { name: 'Head Honcho', description: 'Unscoped shots buff next Scoped shot damage.', tier: 1 },
    { name: 'Incendiary Blast', description: 'Coach Gun applies Burning.', tier: 3 },
    { name: 'B.O.B. Junior', description: 'Summon Mini-BOB at 50% Ult Cost.', tier: 7 },
    { name: 'Double Barreled', description: 'Coach Gun has 2 charges.', tier: 5 },
  ],
  kiriko: [
    { name: 'Keen Kunai', description: 'Crits reduce CDs by 15% & refund ammo.', tier: 1 },
    { name: 'Triple Threat', description: 'Swift Step throws 2 extra Kunai.', tier: 3 },
    { name: 'Leaf on the Wind', description: 'Healing Ofuda bounces to other allies.', tier: 5 },
    { name: 'Clone Conjuration', description: 'Create a clone after Swift Step.', tier: 7 },
  ],
  // Generics for others based on search descriptions or common sense for the mode
  soldier76: [
    { name: 'Supervisor', description: 'Tactical Visor lasts indefinitely but drains ammo.', tier: 7 },
    { name: 'Double Helix', description: 'Helix Rockets have 2 charges.', tier: 3 },
    { name: 'Sprint Marathon', description: 'Sprint speed increased by 20%.', tier: 1 },
    { name: 'Biotic Field XL', description: 'Biotic Field radius doubled.', tier: 5 },
  ],
  orisa: [
    { name: 'Centripetal Charge', description: 'Ult cost -25%, resets CDs after use.', tier: 1 },
    { name: 'Supercharger', description: 'Drop damage boost totem after Ult.', tier: 7 },
    { name: 'Javelin Spin Reflect', description: 'Spin reflects projectiles.', tier: 3 },
    { name: 'Fortify Speed', description: 'Move 20% faster in Fortify.', tier: 5 },
  ],
};

export const getBuildGuide = (heroId: string, opponentId: string): BuildGuide => {
  const hero = heroes.find(h => h.id === heroId);
  const opponent = heroes.find(h => h.id === opponentId);
  
  if (!hero || !opponent) return {
    heroId: 'unknown',
    opponentId: 'unknown',
    summary: 'Select heroes.',
    stats: { priority: [], avoid: [] },
    powers: [],
    items: [],
    tips: []
  };

  // Determine Logic
  let summary = "";
  let priorityStats = ["Survival", "Ult Charge"];
  let recommendedItems: Item[] = [commonItems[1], commonItems[2]]; // Default survival items
  
  // Get Powers
  let myPowers = heroPowers[heroId] || [
    { name: 'Heroic Strength', description: 'Damage increased by 10%.', tier: 1 },
    { name: 'Tactical cooldown', description: 'Cooldowns reduced by 15%.', tier: 3 },
    { name: 'Vitality Boost', description: 'Max Health +50.', tier: 5 },
    { name: 'Ultimate Power', description: 'Ultimate charges 20% faster.', tier: 7 },
  ];

  // Matchup Logic
  if (opponent.role === 'tank') {
    summary = `Shred ${opponent.name}'s high health pool. Prioritize sustain and armor penetration items.`;
    priorityStats = ["Shield Break", "Sustain", "Mobility"];
    recommendedItems = [
      commonItems.find(i => i.name === 'Shieldbuster')!,
      commonItems.find(i => i.name === 'Siphon Gloves')!,
      commonItems.find(i => i.name === 'Electrolytes')!,
    ].filter(Boolean);
  } else if (opponent.role === 'damage') {
    summary = `Survive ${opponent.name}'s burst. Build for max effective health and pick defensive powers.`;
    recommendedItems = [
      commonItems.find(i => i.name === 'Charged Plating')!,
      commonItems.find(i => i.name === 'First Aid Kit')!,
      commonItems.find(i => i.name === 'Heartbeat Sensor')!,
    ].filter(Boolean);
  } else {
    summary = `Out-sustain ${opponent.name}. Focus on cooldown reduction and consistent damage.`;
    recommendedItems = [
      commonItems.find(i => i.name === 'Running Shoes')!,
      commonItems.find(i => i.name === 'Adrenaline Shot')!,
    ].filter(Boolean);
  }

  // Specific Counter Tips
  const tips = [
    `Use cover to deny ${opponent.name}'s value.`,
    `Control the health packs; they grant buffs with Adrenaline Shot.`,
    `Don't forget to buy Items between rounds!`
  ];

  return {
    heroId,
    opponentId,
    summary,
    stats: {
      priority: priorityStats,
      avoid: ['Glass Cannon (vs Burst)', 'Static Positioning']
    },
    powers: myPowers,
    items: recommendedItems,
    tips
  };
};
