export type ClassRole = 'tank' | 'damage' | 'support';

export interface TacticalItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'weapon' | 'survival' | 'ability' | 'utility';
  stat_bonuses?: string[];
}

export interface TacticalPower {
  id: string;
  name: string;
  description: string;
  unlock_round: number;
  price: number;
}

export interface RoundRecommendation {
  round: number;
  priority_items: string[];
  priority_powers: string[];
  strategy_tip: string;
}

export interface ClassBuild {
  role: ClassRole;
  focus: string;
  round_recommendations: RoundRecommendation[];
}

export const tacticalItems: TacticalItem[] = [
  // Survival Items
  { id: 'charged_plating', name: 'Charged Plating', description: 'Gain 25 Armor + 10% Ability Power after using Ultimate', price: 800, category: 'survival', stat_bonuses: ['+25 Armor', '+10% Ability Power'] },
  { id: 'winning_attitude', name: 'Winning Attitude', description: '+25 Health, +15% Ultimate Charge on death', price: 600, category: 'survival', stat_bonuses: ['+25 Health', '+15% Ult Charge'] },
  { id: 'electrolytes', name: 'Electrolytes', description: 'Start round with 100 unrecoverable Overhealth', price: 500, category: 'survival', stat_bonuses: ['+100 Overhealth'] },
  { id: 'field_rations', name: 'Field Rations', description: 'Restore 8 HP/s while on Objective', price: 700, category: 'survival', stat_bonuses: ['+8 HP/s on Objective'] },
  { id: 'adrenaline_shot', name: 'Adrenaline Shot', description: '+10 HP, Health Packs give speed boost & overhealth', price: 450, category: 'survival', stat_bonuses: ['+10 HP', 'Health Pack Buff'] },
  { id: 'running_shoes', name: 'Running Shoes', description: '+10 HP, +20% Move Speed out of combat', price: 500, category: 'survival', stat_bonuses: ['+10 HP', '+20% Speed'] },
  { id: 'heartbeat_sensor', name: 'Heartbeat Sensor', description: '+5% Speed, reveal low HP enemies', price: 650, category: 'utility', stat_bonuses: ['+5% Speed', 'Enemy Reveal'] },
  { id: 'siphon_gloves', name: 'Siphon Gloves', description: '+25 HP, Melee heals 25 HP', price: 550, category: 'survival', stat_bonuses: ['+25 HP', 'Melee Lifesteal'] },
  { id: 'first_aid_kit', name: 'First Aid Kit', description: '+25 Shields, faster shield regeneration', price: 600, category: 'survival', stat_bonuses: ['+25 Shields', 'Faster Regen'] },
  { id: 'fortified_armor', name: 'Fortified Armor', description: '+50 Armor, reduce incoming damage by 5%', price: 1000, category: 'survival', stat_bonuses: ['+50 Armor', '-5% Damage Taken'] },
  
  // Weapon Items
  { id: 'shieldbuster', name: 'Shieldbuster', description: '+5% Weapon Power, Fire Rate buff vs Shields/Armor', price: 700, category: 'weapon', stat_bonuses: ['+5% Weapon Power', 'Anti-Shield'] },
  { id: 'critical_scope', name: 'Critical Scope', description: '+15% Critical Hit Damage', price: 850, category: 'weapon', stat_bonuses: ['+15% Crit Damage'] },
  { id: 'penetrator_rounds', name: 'Penetrator Rounds', description: 'Shots pierce through one additional target', price: 900, category: 'weapon', stat_bonuses: ['Pierce +1 Target'] },
  { id: 'rapid_fire', name: 'Rapid Fire Mod', description: '+10% Fire Rate, -5% Reload Time', price: 750, category: 'weapon', stat_bonuses: ['+10% Fire Rate', '-5% Reload'] },
  { id: 'explosive_rounds', name: 'Explosive Rounds', description: 'Primary fire deals splash damage', price: 1100, category: 'weapon', stat_bonuses: ['Splash Damage'] },
  
  // Ability Items
  { id: 'cooldown_chip', name: 'Cooldown Chip', description: 'Reduce all ability cooldowns by 10%', price: 800, category: 'ability', stat_bonuses: ['-10% Cooldowns'] },
  { id: 'ability_amp', name: 'Ability Amplifier', description: '+15% Ability Power', price: 900, category: 'ability', stat_bonuses: ['+15% Ability Power'] },
  { id: 'ult_accelerator', name: 'Ult Accelerator', description: 'Ultimate charges 20% faster', price: 1000, category: 'ability', stat_bonuses: ['+20% Ult Charge'] },
  { id: 'energy_recycle', name: 'Energy Recycler', description: 'Kills reduce cooldowns by 2 seconds', price: 850, category: 'ability', stat_bonuses: ['Kill CDR 2s'] },
  
  // Utility Items
  { id: 'scanner_visor', name: 'Scanner Visor', description: 'Reveal enemies through walls for 3s after damage', price: 700, category: 'utility', stat_bonuses: ['Wallhack on Hit'] },
  { id: 'medkit_boost', name: 'Medkit Booster', description: 'Health packs restore 50% more HP', price: 500, category: 'utility', stat_bonuses: ['+50% Health Pack'] },
  { id: 'resilience_core', name: 'Resilience Core', description: 'Reduce stun and slow duration by 30%', price: 750, category: 'utility', stat_bonuses: ['-30% CC Duration'] },
];

export const tacticalPowers: Record<ClassRole, TacticalPower[]> = {
  tank: [
    { id: 'tank_t1_sustain', name: 'Barrier Mastery', description: 'Shield abilities block 20% more damage', unlock_round: 1, price: 0 },
    { id: 'tank_t1_utility', name: 'Crowd Control Expert', description: 'CC abilities last 25% longer', unlock_round: 1, price: 0 },
    { id: 'tank_t3_survival', name: 'Damage Sponge', description: 'Gain 15% damage reduction for 4s after using ability', unlock_round: 3, price: 400 },
    { id: 'tank_t3_utility', name: 'Zone Controller', description: 'Area denial abilities are 30% larger', unlock_round: 3, price: 400 },
    { id: 'tank_t5_armor', name: 'Titanium Plating', description: 'Gain 100 permanent armor', unlock_round: 5, price: 800 },
    { id: 'tank_t5_regen', name: 'Battle Regeneration', description: 'Heal 2% max HP per second in combat', unlock_round: 5, price: 800 },
    { id: 'tank_t7_ult', name: 'Ultimate Fortress', description: 'Take 50% less damage during Ultimate', unlock_round: 7, price: 1200 },
    { id: 'tank_t7_revive', name: 'Second Wind', description: 'Survive lethal damage once per round, heal to 30%', unlock_round: 7, price: 1200 },
  ],
  damage: [
    { id: 'dmg_t1_crit', name: 'Precision Training', description: '+10% Critical Hit Chance', unlock_round: 1, price: 0 },
    { id: 'dmg_t1_reload', name: 'Rapid Loader', description: '-20% Reload Time', unlock_round: 1, price: 0 },
    { id: 'dmg_t3_burst', name: 'Assassination Protocol', description: 'Deal 25% more damage to targets below 40% HP', unlock_round: 3, price: 400 },
    { id: 'dmg_t3_survival', name: 'Combat Medic', description: 'Kills grant 50 HP', unlock_round: 3, price: 400 },
    { id: 'dmg_t5_damage', name: 'Glass Cannon', description: '+20% Damage dealt, +15% Damage taken', unlock_round: 5, price: 800 },
    { id: 'dmg_t5_balanced', name: 'Tactical Superiority', description: '+10% Damage, +50 HP, +5% Speed', unlock_round: 5, price: 800 },
    { id: 'dmg_t7_ult', name: 'Killing Spree', description: 'Ultimate lasts 50% longer or kills extend duration', unlock_round: 7, price: 1200 },
    { id: 'dmg_t7_multi', name: 'Chain Reaction', description: 'Kills create explosion dealing 100 damage', unlock_round: 7, price: 1200 },
  ],
  support: [
    { id: 'sup_t1_heal', name: 'Enhanced Healing', description: '+20% Healing Output', unlock_round: 1, price: 0 },
    { id: 'sup_t1_range', name: 'Extended Reach', description: 'Healing abilities have +30% range', unlock_round: 1, price: 0 },
    { id: 'sup_t3_efficiency', name: 'Resource Management', description: 'Healing costs 15% less resources', unlock_round: 3, price: 400 },
    { id: 'sup_t3_aoe', name: 'Group Therapy', description: 'Single-target heals also heal nearby allies for 30%', unlock_round: 3, price: 400 },
    { id: 'sup_t5_burst', name: 'Emergency Response', description: 'Healing on targets below 30% HP is doubled', unlock_round: 5, price: 800 },
    { id: 'sup_t5_buff', name: 'Combat Medic Field', description: 'Healed allies gain 10% damage boost for 3s', unlock_round: 5, price: 800 },
    { id: 'sup_t7_ult', name: 'Transcendent Care', description: 'Ultimate heals 50% more and lasts longer', unlock_round: 7, price: 1200 },
    { id: 'sup_t7_revive', name: 'Guardian Angel', description: 'Allies you heal get 20% damage reduction for 5s', unlock_round: 7, price: 1200 },
  ],
};

export const getClassBuilds = (role: ClassRole, opponentRole?: ClassRole): ClassBuild => {
  const baseBuilds: Record<ClassRole, ClassBuild> = {
    tank: {
      role: 'tank',
      focus: 'Maximum Survivability & Utility',
      round_recommendations: [
        {
          round: 1,
          priority_items: ['adrenaline_shot', 'running_shoes'],
          priority_powers: ['tank_t1_sustain'],
          strategy_tip: 'Start with mobility and sustain. Take Barrier Mastery to maximize shield value.',
        },
        {
          round: 2,
          priority_items: ['first_aid_kit', 'siphon_gloves'],
          priority_powers: [],
          strategy_tip: 'Build up your effective health pool with shields and self-healing.',
        },
        {
          round: 3,
          priority_items: ['fortified_armor', 'resilience_core'],
          priority_powers: ['tank_t3_survival'],
          strategy_tip: 'Add armor and CC reduction. Damage Sponge provides crucial damage mitigation.',
        },
        {
          round: 4,
          priority_items: ['cooldown_chip', 'field_rations'],
          priority_powers: [],
          strategy_tip: 'Reduce cooldowns to use your protective abilities more often.',
        },
        {
          round: 5,
          priority_items: ['charged_plating', 'ability_amp'],
          priority_powers: ['tank_t5_armor'],
          strategy_tip: 'Titanium Plating gives massive armor boost. Focus on objective control.',
        },
        {
          round: 6,
          priority_items: ['ult_accelerator', 'heartbeat_sensor'],
          priority_powers: [],
          strategy_tip: 'Accelerate ultimate charge - your ult can turn teamfights.',
        },
        {
          round: 7,
          priority_items: ['energy_recycle'],
          priority_powers: ['tank_t7_revive'],
          strategy_tip: 'Second Wind gives you a second life. Play aggressively to zone enemies.',
        },
      ],
    },
    damage: {
      role: 'damage',
      focus: 'Maximum Damage Output + Survivability',
      round_recommendations: [
        {
          round: 1,
          priority_items: ['adrenaline_shot', 'electrolytes'],
          priority_powers: ['dmg_t1_crit'],
          strategy_tip: 'Precision Training boosts your damage. Start with overhealth for early fights.',
        },
        {
          round: 2,
          priority_items: ['critical_scope', 'rapid_fire'],
          priority_powers: [],
          strategy_tip: 'Maximize damage with crit and fire rate upgrades.',
        },
        {
          round: 3,
          priority_items: ['winning_attitude', 'siphon_gloves'],
          priority_powers: ['dmg_t3_survival'],
          strategy_tip: 'Combat Medic keeps you alive. Add health and lifesteal for sustainability.',
        },
        {
          round: 4,
          priority_items: ['penetrator_rounds', 'shieldbuster'],
          priority_powers: [],
          strategy_tip: 'Pierce through enemies and break shields for multi-target value.',
        },
        {
          round: 5,
          priority_items: ['first_aid_kit', 'fortified_armor'],
          priority_powers: ['dmg_t5_balanced'],
          strategy_tip: 'Tactical Superiority balances offense and defense. Add armor for survivability.',
        },
        {
          round: 6,
          priority_items: ['ult_accelerator', 'ability_amp'],
          priority_powers: [],
          strategy_tip: 'Farm ultimate quickly - it can secure team wipes.',
        },
        {
          round: 7,
          priority_items: ['explosive_rounds'],
          priority_powers: ['dmg_t7_multi'],
          strategy_tip: 'Chain Reaction turns you into a killing machine. Secure kills for explosions.',
        },
      ],
    },
    support: {
      role: 'support',
      focus: 'Best Healing Kit (Not Damage)',
      round_recommendations: [
        {
          round: 1,
          priority_items: ['medkit_boost', 'running_shoes'],
          priority_powers: ['sup_t1_heal'],
          strategy_tip: 'Enhanced Healing is mandatory. Boost health packs for emergency recovery.',
        },
        {
          round: 2,
          priority_items: ['ability_amp', 'adrenaline_shot'],
          priority_powers: [],
          strategy_tip: 'Ability Power scales your healing. Mobility helps you reach teammates.',
        },
        {
          round: 3,
          priority_items: ['cooldown_chip', 'first_aid_kit'],
          priority_powers: ['sup_t3_aoe'],
          strategy_tip: 'Group Therapy spreads heals to the team. CDR lets you heal more often.',
        },
        {
          round: 4,
          priority_items: ['ult_accelerator', 'field_rations'],
          priority_powers: [],
          strategy_tip: 'Farm ultimate charge fast - support ults win fights. Stay on objective.',
        },
        {
          round: 5,
          priority_items: ['charged_plating', 'resilience_core'],
          priority_powers: ['sup_t5_burst'],
          strategy_tip: 'Emergency Response saves critical allies. Add survivability to stay alive.',
        },
        {
          round: 6,
          priority_items: ['fortified_armor', 'heartbeat_sensor'],
          priority_powers: [],
          strategy_tip: 'Build armor to survive enemy focus. Reveal low HP allies to prioritize healing.',
        },
        {
          round: 7,
          priority_items: ['energy_recycle'],
          priority_powers: ['sup_t7_ult'],
          strategy_tip: 'Transcendent Care maximizes your ultimate healing. Keep your team alive.',
        },
      ],
    },
  };

  return baseBuilds[role];
};

export const getAffordableItems = (credits: number): TacticalItem[] => {
  return tacticalItems.filter(item => item.price <= credits);
};

export const getAffordablePowers = (role: ClassRole, round: number, credits: number): TacticalPower[] => {
  const powers = tacticalPowers[role];
  return powers.filter(power => power.unlock_round <= round && power.price <= credits);
};
