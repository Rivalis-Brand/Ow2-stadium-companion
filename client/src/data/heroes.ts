
import reinhardtImg from '@assets/stock_images/overwatch_2_hero_cha_577fa04d.jpg';
import dvaImg from '@assets/stock_images/overwatch_2_hero_cha_93b64510.jpg';
import zaryaImg from '@assets/stock_images/overwatch_2_hero_cha_57d33715.jpg';
import orisaImg from '@assets/stock_images/overwatch_2_hero_cha_524a53b5.jpg';
import sigmaImg from '@assets/stock_images/overwatch_2_hero_cha_3773a4cf.jpg';
import hazardImg from '@assets/stock_images/overwatch_2_hero_cha_ee7b8454.jpg';
import genjiImg from '@assets/stock_images/overwatch_2_hero_cha_d1d68111.jpg';
import soldier76Img from '@assets/stock_images/overwatch_2_hero_cha_f9b98320.jpg';
import cassidyImg from '@assets/stock_images/overwatch_2_hero_cha_a9f56596.jpg';
import asheImg from '@assets/stock_images/overwatch_2_hero_cha_06e77eb9.jpg';
import meiImg from '@assets/stock_images/overwatch_character__5a70e2b8.jpg';
import reaperImg from '@assets/stock_images/overwatch_character__613b21e3.jpg';
import junkratImg from '@assets/stock_images/overwatch_character__ecd0bf62.jpg';
import frejaImg from '@assets/stock_images/overwatch_character__05ec89d8.jpg';
import pharahImg from '@assets/stock_images/overwatch_character__9dfb2364.jpg';
import mercyImg from '@assets/stock_images/overwatch_character__11ee7ed6.jpg';
import moiraImg from '@assets/stock_images/overwatch_character__8c765267.jpg';
import lucioImg from '@assets/stock_images/overwatch_character__ba81d687.jpg';
import kirikoImg from '@assets/stock_images/overwatch_character__3a56ed0e.jpg';
import junoImg from '@assets/stock_images/overwatch_character__d5caed41.jpg';
import anaImg from '@assets/stock_images/overwatch_2_game_cha_cf07e691.jpg';
import zenyattaImg from '@assets/stock_images/overwatch_2_game_cha_e63bad04.jpg';
import junkerQueenImg from '@assets/stock_images/overwatch_2_game_cha_c740d9af.jpg';

export type Role = 'tank' | 'damage' | 'support';

export interface Hero {
  id: string;
  name: string;
  role: Role;
  image: string;
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

// STADIUM ROSTER SEASON 19 (23 HEROES)
export const heroes: Hero[] = [
  // Tanks (6)
  { id: 'reinhardt', name: 'Reinhardt', role: 'tank', image: reinhardtImg, color: '#93a0a4' },
  { id: 'dva', name: 'D.Va', role: 'tank', image: dvaImg, color: '#ed93c7' },
  { id: 'zarya', name: 'Zarya', role: 'tank', image: zaryaImg, color: '#e77eb8' },
  { id: 'orisa', name: 'Orisa', role: 'tank', image: orisaImg, color: '#468c43' },
  { id: 'sigma', name: 'Sigma', role: 'tank', image: sigmaImg, color: '#93a0a4' },
  { id: 'hazard', name: 'Hazard', role: 'tank', image: hazardImg, color: '#b33c00' }, 
  
  // Damage (9)
  { id: 'genji', name: 'Genji', role: 'damage', image: genjiImg, color: '#97ef43' },
  { id: 'soldier76', name: 'Soldier: 76', role: 'damage', image: soldier76Img, color: '#697794' },
  { id: 'cassidy', name: 'Cassidy', role: 'damage', image: cassidyImg, color: '#ae5a4c' },
  { id: 'ashe', name: 'Ashe', role: 'damage', image: asheImg, color: '#686969' },
  { id: 'mei', name: 'Mei', role: 'damage', image: meiImg, color: '#6cacd8' },
  { id: 'reaper', name: 'Reaper', role: 'damage', image: reaperImg, color: '#7d3e51' },
  { id: 'junkrat', name: 'Junkrat', role: 'damage', image: junkratImg, color: '#ecbd53' },
  { id: 'freja', name: 'Freja', role: 'damage', image: frejaImg, color: '#d14434' },
  { id: 'pharah', name: 'Pharah', role: 'damage', image: pharahImg, color: '#3e7dca' }, 

  // Support (7)
  { id: 'mercy', name: 'Mercy', role: 'support', image: mercyImg, color: '#e7e6d1' },
  { id: 'moira', name: 'Moira', role: 'support', image: moiraImg, color: '#803c51' },
  { id: 'lucio', name: 'Lúcio', role: 'support', image: lucioImg, color: '#85c952' },
  { id: 'kiriko', name: 'Kiriko', role: 'support', image: kirikoImg, color: '#d44368' },
  { id: 'juno', name: 'Juno', role: 'support', image: junoImg, color: '#e55d8a' }, 
  { id: 'ana', name: 'Ana', role: 'support', image: anaImg, color: '#718ab3' }, 
  { id: 'zenyatta', name: 'Zenyatta', role: 'support', image: zenyattaImg, color: '#ede582' }, 
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
  genji: [
    { name: 'Sacred Shuriken', description: 'Throw 2 additional shurikens per attack.', tier: 1 },
    { name: 'Cybernetic Speed', description: 'Hits grant +2% Attack Speed (stacks 15x).', tier: 3 },
    { name: 'Dragon\'s Breath', description: 'Blade fires piercing projectiles.', tier: 5 },
    { name: 'Hanamura Healing', description: 'Crits/Dash grant 25% Overhealth.', tier: 7 },
  ],
  hazard: [
    { name: 'Adrenaline Rush', description: 'Spike Guard hits reduce Leap cooldown by 0.1s.', tier: 1 },
    { name: 'Piercing Spike', description: 'Violent Leap shoots projectile ignoring enemies.', tier: 3 },
    { name: 'Off The Wall', description: 'Jagged Wall is 35% larger + 60 dmg knockback.', tier: 5 },
    { name: 'Back to Square One', description: 'Ult resets all cooldowns + 25% CDR.', tier: 7 },
  ],
  pharah: [
    { name: 'Triple Volley', description: 'After ability, next shot fires 3 rockets (40% dmg each).', tier: 1 },
    { name: 'Heat Seekers', description: 'Rockets lock onto enemies after Jet Dash.', tier: 3 },
    { name: 'Recursion Battery', description: 'Mini-rockets gain 25% Ability Lifesteal.', tier: 5 },
    { name: 'Blitz Barrage', description: 'Fire mini-Barrage after Jet Dash.', tier: 7 },
  ],
  reinhardt: [
    { name: 'Wilhelmwagen', description: 'While Barrier active: Heal for 15% mitigated dmg + 30% Speed.', tier: 1 },
    { name: 'Shield Stampede', description: 'Charge knockback +50%, auto-deploys barrier.', tier: 3 },
    { name: 'Smashing!', description: 'Hammer hits grant Speed & Lifesteal (stacks).', tier: 5 },
    { name: 'Magma Strike', description: 'Fire Strike leaves lava trails.', tier: 7 },
  ],
  dva: [
    { name: 'Ignition Burst', description: 'Boosters leave a trail of lava.', tier: 1 },
    { name: 'Focused Fusion', description: 'Reduce spread by 66%, increase range.', tier: 3 },
    { name: 'Bomb Voyage', description: 'Can fly while casting Self-Destruct.', tier: 5 },
    { name: 'Nuclear Eject', description: 'Mech explosion radius +50%.', tier: 7 },
  ],
  sigma: [
    { name: 'Kinetic Overflow', description: 'Kinetic Grasp range +50%.', tier: 1 },
    { name: 'Gravitic Flux Field', description: 'Flux slows enemies after slam.', tier: 3 },
    { name: 'Accretion Mass', description: 'Rock deals +50 damage and larger AOE.', tier: 5 },
    { name: 'Unbound Physics', description: 'Fly indefinitely during Ult.', tier: 7 },
  ],
  orisa: [
    { name: 'Centripetal Charge', description: 'Ult cost -25%, resets CDs after use.', tier: 1 },
    { name: 'Supercharger', description: 'Drop damage boost totem after Ult.', tier: 7 },
    { name: 'Javelin Spin Reflect', description: 'Spin reflects projectiles.', tier: 3 },
    { name: 'Fortify Speed', description: 'Move 20% faster in Fortify.', tier: 5 },
  ],
  zarya: [
    { name: 'Particle Accelerator', description: 'Beam range increased by 30%.', tier: 1 },
    { name: 'Reactive Barrier', description: 'Bubbles reflect 20% damage.', tier: 3 },
    { name: 'Graviton Surge', description: 'Ult pulls enemies from further away.', tier: 5 },
    { name: 'Maximum Charge', description: 'Decay rate reduced by 50%.', tier: 7 },
  ],
  
  // DAMAGE
  soldier76: [
    { name: 'Sprint Marathon', description: 'Sprint speed increased by 20%.', tier: 1 },
    { name: 'Double Helix', description: 'Helix Rockets have 2 charges.', tier: 3 },
    { name: 'Continuous Fire', description: '+0.5% primary fire power per shot.', tier: 5 },
    { name: 'Super Visor', description: 'Brief Ult activation after Helix Rocket.', tier: 7 },
  ],
  cassidy: [
    { name: 'Improvised Dynamite', description: '+20% AP, +10% CDR, Flashbang radius +50%.', tier: 1 },
    { name: 'Wanted Poster', description: '+25 HP, Deadeye kills give extra Cash.', tier: 3 },
    { name: 'Blackwatch Tech', description: 'Deadeye kills reduce Flashbang CD.', tier: 5 },
    { name: 'Quick Draw', description: 'Deadeye locks on 30% faster.', tier: 7 },
  ],
  ashe: [
    { name: 'Head Honcho', description: 'Unscoped shots buff next Scoped shot damage.', tier: 1 },
    { name: 'Incendiary Blast', description: 'Coach Gun applies Burning.', tier: 3 },
    { name: 'Incendiary Rounds', description: 'Scoped hits on same target deal +30 dmg.', tier: 5 },
    { name: 'B.O.B. Junior', description: 'Summon Mini-BOB at 50% Ult Cost.', tier: 7 },
  ],
  mei: [
    { name: 'Permafrost', description: 'Increase max health by 50% of ability power.', tier: 1 },
    { name: 'Slowball', description: 'Secondary fire shoots snowball (40% slow on crit).', tier: 3 },
    { name: 'Coulder', description: 'Cryo-Freeze becomes rolling iceball.', tier: 5 },
    { name: 'Blizznado', description: 'Heal 5% life/sec inside Blizzard.', tier: 7 },
  ],
  reaper: [
    { name: 'Soul Eater', description: 'Soul globes heal for 50% more.', tier: 1 },
    { name: 'Wraith Speed', description: 'Wraith form move speed +30%.', tier: 3 },
    { name: 'Shadow Step Instant', description: 'Shadow step cast time reduced by 50%.', tier: 5 },
    { name: 'Death Blossom Life', description: 'Gain 50% lifesteal during Ult.', tier: 7 },
  ],
  junkrat: [
    { name: 'Total Mayhem', description: 'Drop grenades on ability use.', tier: 1 },
    { name: 'Trap Master', description: 'Trap arms instantly and has more HP.', tier: 3 },
    { name: 'Mine Jumper', description: 'Mines launch you further.', tier: 5 },
    { name: 'RIP-Tire Speed', description: 'Tire moves 30% faster.', tier: 7 },
  ],
  freja: [
    { name: 'Viking Strength', description: 'Melee damage increased by 50%.', tier: 1 },
    { name: 'Runic Shield', description: 'Gain shield on ability hit.', tier: 3 },
    { name: 'Thunder Strike', description: 'Primary fire chains lightning.', tier: 5 },
    { name: 'Valhalla Call', description: 'Ult revives fallen ally.', tier: 7 },
  ],

  // SUPPORT
  kiriko: [
    { name: 'Keen Kunai', description: 'Crits reduce CDs by 15% & refund ammo.', tier: 1 },
    { name: 'Triple Threat', description: 'Swift Step throws 2 extra Kunai.', tier: 3 },
    { name: 'Leaf on the Wind', description: 'Healing Ofuda bounces to other allies.', tier: 5 },
    { name: 'Clone Conjuration', description: 'Create a clone after Swift Step.', tier: 7 },
  ],
  ana: [
    { name: 'Biotic Grenade XL', description: 'Grenade radius +50%.', tier: 1 },
    { name: 'Sleep Dart CD', description: 'Sleep dart CD reduced by 3s.', tier: 3 },
    { name: 'Nano Boost Heal', description: 'Nano instantly heals target to full.', tier: 5 },
    { name: 'Our Turn', description: 'Nano Boost affects allies in AOE.', tier: 7 },
  ],
  mercy: [
    { name: 'Guardian Angel Speed', description: 'GA speed increased by 30%.', tier: 1 },
    { name: 'Damage Boost +', description: 'Damage boost increased to 35%.', tier: 3 },
    { name: 'Resurrect Shield', description: 'Gain invulnerability while reviving.', tier: 5 },
    { name: 'Valkyrie Infinite', description: 'Valkyrie duration extended by kills.', tier: 7 },
  ],
  moira: [
    { name: 'Biotic Orb CD', description: 'Orb cooldown reduced by 2s.', tier: 1 },
    { name: 'Fade Cleanse', description: 'Fade cleanses allies passed through.', tier: 3 },
    { name: 'Triple Biotic Orbs', description: 'Launch 3 orbs instead of 1.', tier: 5 },
    { name: 'Coalescence Width', description: 'Beam width increased by 50%.', tier: 7 },
  ],
  lucio: [
    { name: 'Wall Ride Speed', description: 'Wall ride speed boost +20%.', tier: 1 },
    { name: 'Boop Distance', description: 'Soundwave knockback +50%.', tier: 3 },
    { name: 'Amp It Up Duration', description: 'Amp lasts 1s longer.', tier: 5 },
    { name: 'Sound Barrier Shield', description: 'Beat grants 20% more shields.', tier: 7 },
  ],
  juno: [
    { name: 'Glide Boost', description: 'Glide speed increased.', tier: 1 },
    { name: 'Pulsar Destroyer', description: 'Auto-lock abilities.', tier: 3 },
    { name: 'Centripetal Charge', description: 'Ult cost -25%.', tier: 5 },
    { name: 'Supercharger', description: 'Ult drops damage totem.', tier: 7 },
  ],
  zenyatta: [
    { name: 'Harmony Orb Heal', description: 'Orb heals 10% more.', tier: 1 },
    { name: 'Discord Orb Range', description: 'Discord range increased.', tier: 3 },
    { name: 'Volley Charge', description: 'Charge volley faster.', tier: 5 },
    { name: 'Transcendence Move', description: 'Move faster during Ult.', tier: 7 },
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
