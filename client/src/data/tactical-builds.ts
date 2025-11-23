export type ClassRole = 'tank' | 'damage' | 'support';

export interface TacticalItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'weapon' | 'survival' | 'ability' | 'utility';
  rarity: 'common' | 'rare' | 'epic';
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
  // ========== SURVIVAL ITEMS ==========
  // Common Tier (1000)
  { id: 'adrenaline_shot', name: 'Adrenaline Shot', description: 'Health packs grant 20% move speed for 5s and 50 overhealth', price: 1000, category: 'survival', rarity: 'common' },
  { id: 'electrolytes', name: 'Electrolytes', description: 'At round start, gain 100 unrecoverable overhealth', price: 1000, category: 'survival', rarity: 'common' },
  { id: 'field_rations', name: 'Field Rations', description: 'While on objective, restore 8 HP every 1 second', price: 1000, category: 'survival', rarity: 'common' },
  { id: 'running_shoes', name: 'Running Shoes', description: 'At round start and respawn, gain 20% move speed for 10s out of combat', price: 1000, category: 'survival', rarity: 'common' },
  
  // Common Tier (1500)
  { id: 'armored_vest', name: 'Armored Vest', description: 'Grants 25 armor', price: 1500, category: 'survival', rarity: 'common' },
  { id: 'first_aid_kit', name: 'First Aid Kit', description: '+25 shields, reduce shield regen time by 33%', price: 1500, category: 'survival', rarity: 'common' },
  { id: 'heartbeat_sensor', name: 'Heartbeat Sensor', description: 'Enemies below 30% HP are revealed to you', price: 1500, category: 'survival', rarity: 'common' },
  { id: 'siphon_gloves', name: 'Siphon Gloves', description: 'Quick melee damage heals for 25 HP', price: 1500, category: 'survival', rarity: 'common' },
  
  // Rare Tier (3750)
  { id: 'reinforced_titanium', name: 'Reinforced Titanium', description: 'While shields present, take 10% reduced ability damage', price: 3750, category: 'survival', rarity: 'rare' },
  
  // Rare Tier (4000)
  { id: 'cushioned_padding', name: 'Cushioned Padding', description: '+25 shields, -40% negative effect duration, restore 10% max HP when stunned/slept', price: 4000, category: 'survival', rarity: 'rare' },
  { id: 'ironclad_exhaust_ports', name: 'Ironclad Exhaust Ports', description: '-5% cooldown. Using ability grants 25 overhealth for 3s', price: 4000, category: 'survival', rarity: 'rare' },
  { id: 'vishkar_condenser', name: 'Vishkar Condenser', description: '+25 shields, convert 100 health into shields', price: 4000, category: 'survival', rarity: 'rare' },
  { id: 'vital_e_tee', name: 'Vital-e-tee', description: 'Convert 100 health into armor', price: 4000, category: 'survival', rarity: 'rare' },
  
  // Rare Tier (4500)
  { id: 'crusader_hydraulics', name: 'Crusader Hydraulics', description: '+25 armor, take 10% reduced weapon damage while armored', price: 4500, category: 'survival', rarity: 'rare' },
  { id: 'iron_eyes', name: 'Iron Eyes', description: '+25 shields, take 15% reduced critical hit damage', price: 4500, category: 'survival', rarity: 'rare' },
  
  // Rare Tier (5000)
  { id: 'meka_z_series', name: 'Meka Z-Series', description: '+8% to health, armor, and shields', price: 5000, category: 'survival', rarity: 'rare' },
  
  // Epic Tier (9000)
  { id: 'geneticist_vial', name: 'Geneticist\'s Vial', description: 'First time you would die, revive with 200 HP after 3s', price: 9000, category: 'survival', rarity: 'epic' },
  
  // Epic Tier (9500)
  { id: 'bloodbound', name: 'Bloodbound', description: '+50 HP, last enemy to damage you is revealed. Deal 10% more damage to them', price: 9500, category: 'survival', rarity: 'epic' },
  { id: 'divine_intervention', name: 'Divine Intervention', description: '+50 shields, taking 100+ damage restores 15% of damage and shields regen', price: 9500, category: 'survival', rarity: 'epic' },
  { id: 'gloomgauntlet', name: 'Gloomgauntlet', description: '+50 armor, +15% melee damage, melee grants 10% move speed and 5% max HP regen', price: 9500, category: 'survival', rarity: 'epic' },
  
  // Epic Tier (10000)
  { id: 'martian_mender', name: 'Martian Mender', description: '+25 HP, -10% cooldown, restore 3% max HP every 1s', price: 10000, category: 'survival', rarity: 'epic' },
  { id: 'phantasmic_flux', name: 'Phantasmic Flux', description: '+10% weapon power, +10% ability power, +15% lifesteal. At full HP, lifesteal grants up to 100 overhealth', price: 10000, category: 'survival', rarity: 'epic' },
  { id: 'rustung_von_wilhelm', name: 'Rustung Von Wilhelm', description: '+15% health/armor/shields, below 30% HP gain 10% damage reduction', price: 10000, category: 'survival', rarity: 'epic' },
  { id: 'vanadium_injection', name: 'Vanadium Injection', description: 'At 100% ult charge: +50 HP, +10% weapon/ability power, +10% attack speed, -10% cooldown, +10% move speed', price: 10000, category: 'survival', rarity: 'epic' },
  
  // Epic Tier (11000)
  { id: 'nebula_conduit', name: 'Nebula Conduit', description: '+50 HP, +10% weapon power, prevent 15% incoming damage over 3s', price: 11000, category: 'survival', rarity: 'epic' },
  { id: 'ogundimu_reduction_field', name: 'Ogundimu Reduction Field', description: '+50 armor, taking damage grants 0.5% damage reduction for 1s (stacks 20x)', price: 11000, category: 'survival', rarity: 'epic' },
  
  // ========== WEAPON ITEMS ==========
  // Common Tier (1000)
  { id: 'compensator', name: 'Compensator', description: '+5% weapon power', price: 1000, category: 'weapon', rarity: 'common' },
  { id: 'plasma_converter', name: 'Plasma Converter', description: '+10% weapon lifesteal', price: 1000, category: 'weapon', rarity: 'common' },
  { id: 'weapon_grease', name: 'Weapon Grease', description: '+5% attack speed', price: 1000, category: 'weapon', rarity: 'common' },
  
  // Common Tier (1500)
  { id: 'ammo_reserves', name: 'Ammo Reserves', description: '+20% max ammo', price: 1500, category: 'weapon', rarity: 'common' },
  { id: 'frenzy_amplifier', name: 'Frenzy Amplifier', description: 'Eliminations grant +10% attack speed and +15% move speed for 3s', price: 1500, category: 'weapon', rarity: 'common' },
  
  // Rare Tier (3750)
  { id: 'aftermarket_firing_pin', name: 'Aftermarket Firing Pin', description: '+10% attack speed, +5% move speed', price: 3750, category: 'weapon', rarity: 'rare' },
  
  // Rare Tier (4000)
  { id: 'advanced_nanobiotics', name: 'Advanced Nanobiotics', description: 'After healing an ally, gain 10% attack speed for 3s', price: 4000, category: 'weapon', rarity: 'rare' },
  { id: 'shieldbuster', name: 'Shieldbuster', description: 'After dealing damage to shields/armor, gain 15% attack speed for 1s', price: 4000, category: 'weapon', rarity: 'rare' },
  { id: 'stockpile', name: 'Stockpile', description: '+5% attack speed, +25% max ammo', price: 4000, category: 'weapon', rarity: 'rare' },
  
  // Rare Tier (4500)
  { id: 'technoleech', name: 'Technoleech', description: '+5% weapon power, +10% weapon lifesteal', price: 4500, category: 'weapon', rarity: 'rare' },
  
  // Rare Tier (5000)
  { id: 'icy_coolant', name: 'Icy Coolant', description: '+10% weapon power, -5% cooldown reduction', price: 5000, category: 'weapon', rarity: 'rare' },
  
  // Rare Tier (5500)
  { id: 'talon_modification_module', name: 'Talon Modification Module', description: '+15% weapon power', price: 5500, category: 'weapon', rarity: 'rare' },
  
  // Epic Tier (9000)
  { id: 'codebreaker', name: 'Codebreaker', description: '+15% weapon power, ignore 50% of armor\'s damage reduction', price: 9000, category: 'weapon', rarity: 'epic' },
  
  // Epic Tier (9500)
  { id: 'salvaged_slugs', name: 'Salvaged Slugs', description: '+10% attack speed, +25% damage to barriers, 40% chance to restore 1 ammo', price: 9500, category: 'weapon', rarity: 'epic' },
  { id: 'volskaya_ordnance', name: 'Volskaya Ordnance', description: '+10% attack speed, deal 3% more damage per 100 max HP target has vs you (up to 15%)', price: 9500, category: 'weapon', rarity: 'epic' },
  
  // Epic Tier (10000)
  { id: 'commanders_clip', name: 'Commander\'s Clip', description: '+10% attack speed, +40% max ammo, ability restores 10% max ammo', price: 10000, category: 'weapon', rarity: 'epic' },
  { id: 'weapon_jammer', name: 'Weapon Jammer', description: '+25 armor, +10% weapon power, weapon damage negates 10% enemy attack speed', price: 10000, category: 'weapon', rarity: 'epic' },
  
  // Epic Tier (11000)
  { id: 'amaris_antidote', name: 'Amari\'s Antidote', description: '+25 HP, +15% weapon power, increased healing while healing low HP targets', price: 11000, category: 'weapon', rarity: 'epic' },
  { id: 'booster_jets', name: 'Booster Jets', description: '+20% attack speed, using ability grants +20% move speed for 2s', price: 11000, category: 'weapon', rarity: 'epic' },
  { id: 'el_sa_ka_suppressor', name: 'El-Sa\'Ka Suppressor', description: '+10% weapon power, critical hits apply 30% healing reduction for 2s', price: 11000, category: 'weapon', rarity: 'epic' },
  { id: 'hardlight_accelerator', name: 'Hardlight Accelerator', description: '+10% weapon power, -10% cooldown, ability grants +5% weapon power for 3s (stacks 3x)', price: 11000, category: 'weapon', rarity: 'epic' },
  
  // Epic Tier (13000)
  { id: 'the_closer', name: 'The Closer', description: '+20% weapon power, +10% critical damage, critical hits reveal target for 3s', price: 13000, category: 'weapon', rarity: 'epic' },
  
  // Epic Tier (13500)
  { id: 'eye_of_the_spider', name: 'Eye of the Spider', description: 'Deal 10% increased damage to enemies below 30% HP', price: 13500, category: 'weapon', rarity: 'epic' },
  
  // ========== ABILITY ITEMS ==========
  // Common Tier (1000)
  { id: 'charged_plating', name: 'Charged Plating', description: 'After spending ult, gain 25 armor and 10% ability power for round', price: 1000, category: 'ability', rarity: 'common' },
  { id: 'power_playbook', name: 'Power Playbook', description: '+10% ability power', price: 1000, category: 'ability', rarity: 'common' },
  { id: 'shady_spectacles', name: 'Shady Spectacles', description: '+10% ability lifesteal', price: 1000, category: 'ability', rarity: 'common' },
  
  // Common Tier (1500)
  { id: 'winning_attitude', name: 'Winning Attitude', description: '+25 HP, on death gain 15% ult charge', price: 1500, category: 'ability', rarity: 'common' },
  
  // Rare Tier (3750)
  { id: 'custom_stock', name: 'Custom Stock', description: '+5% weapon power, +10% ability power', price: 3750, category: 'ability', rarity: 'rare' },
  
  // Rare Tier (4000)
  { id: 'biolight_overflow', name: 'Biolight Overflow', description: '+25 HP, +5% ability power, on ult grant nearby allies 50 overhealth', price: 4000, category: 'ability', rarity: 'rare' },
  { id: 'energized_bracers', name: 'Energized Bracers', description: '+10% ability power, +10% ability lifesteal', price: 4000, category: 'ability', rarity: 'rare' },
  { id: 'junker_whatchamajig', name: 'Junker Whatchamajig', description: '+25% starting ult charge', price: 4000, category: 'ability', rarity: 'rare' },
  { id: 'wrist_wraps', name: 'Wrist Wraps', description: '+5% ability power, +10% attack speed', price: 4000, category: 'ability', rarity: 'rare' },
  
  // Rare Tier (5000)
  { id: 'multi_tool', name: 'Multi-Tool', description: '+5% ability power, -10% cooldown reduction', price: 5000, category: 'ability', rarity: 'rare' },
  
  // Rare Tier (5500)
  { id: 'nano_cola', name: 'Nano Cola', description: '+20% ability power', price: 5500, category: 'ability', rarity: 'rare' },
  
  // Epic Tier (9500)
  { id: 'three_tap_tommygun', name: 'Three-Tap Tommygun', description: '+10% ability power, +10% attack speed, ability grants 3% max HP weapon damage bonus', price: 9500, category: 'ability', rarity: 'epic' },
  
  // Epic Tier (10000)
  { id: 'biotech_maximizer', name: 'Biotech Maximizer', description: '+25 HP, +10% ability power, healing ability reduces cooldown by 5% per ally healed', price: 10000, category: 'ability', rarity: 'epic' },
  { id: 'catalytic_crystal', name: 'Catalytic Crystal', description: '+15% ability power, ability damage/healing grants 20% more ult charge', price: 10000, category: 'ability', rarity: 'epic' },
  { id: 'lumerico_fusion_drive', name: 'Lumerico Fusion Drive', description: '+50 armor, +15% ability power, ability restores 50 shields over 2s', price: 10000, category: 'ability', rarity: 'epic' },
  { id: 'superflexor', name: 'Superflexor', description: '+25 HP, +10% weapon power, weapon/healing grants +5% ability power for 3s (stacks 5x)', price: 10000, category: 'ability', rarity: 'epic' },
  
  // Epic Tier (10500)
  { id: 'cybervenom', name: 'Cybervenom', description: '+10% ability power, -5% cooldown, ability damage applies 30% healing reduction for 2s', price: 10500, category: 'ability', rarity: 'epic' },
  
  // Epic Tier (11000)
  { id: 'iridescent_iris', name: 'Iridescent Iris', description: '+20% ability power, -10% cooldown, after ult gain 100 overhealth for 3s', price: 11000, category: 'ability', rarity: 'epic' },
  { id: 'liquid_nitrogen', name: 'Liquid Nitrogen', description: '+25 HP, +10% ability power, ability damage slows enemy move speed by 20% for 3s', price: 11000, category: 'ability', rarity: 'epic' },
  { id: 'mark_of_the_kitsune', name: 'Mark of the Kitsune', description: '+10% ability power, ability grants next weapon damage/healing 25 bonus damage/healing', price: 11000, category: 'ability', rarity: 'epic' },
  
  // Epic Tier (13500)
  { id: 'champions_kit', name: 'Champion\'s Kit', description: '+40% ability power', price: 13500, category: 'ability', rarity: 'epic' },
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
          strategy_tip: 'Start with mobility and sustain. Barrier Mastery maximizes your shield value.',
        },
        {
          round: 2,
          priority_items: ['first_aid_kit', 'siphon_gloves'],
          priority_powers: [],
          strategy_tip: 'Build effective HP with shields and self-healing.',
        },
        {
          round: 3,
          priority_items: ['armored_vest', 'heartbeat_sensor'],
          priority_powers: ['tank_t3_survival'],
          strategy_tip: 'Add armor and awareness. Damage Sponge provides mitigation.',
        },
        {
          round: 4,
          priority_items: ['ironclad_exhaust_ports', 'field_rations'],
          priority_powers: [],
          strategy_tip: 'Spam abilities for survival. Contest objectives for passive healing.',
        },
        {
          round: 5,
          priority_items: ['charged_plating', 'nano_cola'],
          priority_powers: ['tank_t5_armor'],
          strategy_tip: 'Titanium Plating gives massive armor. Ult upgrades your defense.',
        },
        {
          round: 6,
          priority_items: ['junker_whatchamajig', 'cushioned_padding'],
          priority_powers: [],
          strategy_tip: 'Farm ult faster. CC resistance helps survive focus.',
        },
        {
          round: 7,
          priority_items: ['vanadium_injection'],
          priority_powers: ['tank_t7_revive'],
          strategy_tip: 'Second Wind for clutch survival. Massive power spike at full ult charge.',
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
          strategy_tip: 'Precision Training for duels. Overhealth for early fights.',
        },
        {
          round: 2,
          priority_items: ['compensator', 'weapon_grease'],
          priority_powers: [],
          strategy_tip: 'Stack weapon power and attack speed for damage.',
        },
        {
          round: 3,
          priority_items: ['winning_attitude', 'siphon_gloves'],
          priority_powers: ['dmg_t3_survival'],
          strategy_tip: 'Combat Medic keeps you alive. Lifesteal for trades.',
        },
        {
          round: 4,
          priority_items: ['aftermarket_firing_pin', 'power_playbook'],
          priority_powers: [],
          strategy_tip: 'Balanced offense and ability power. Consistent damage output.',
        },
        {
          round: 5,
          priority_items: ['first_aid_kit', 'talon_modification_module'],
          priority_powers: ['dmg_t5_balanced'],
          strategy_tip: 'Tactical Superiority balances offense/defense. Add survivability.',
        },
        {
          round: 6,
          priority_items: ['junker_whatchamajig', 'energized_bracers'],
          priority_powers: [],
          strategy_tip: 'Farm ult quickly. Extra ability power scales your damage.',
        },
        {
          round: 7,
          priority_items: ['champions_kit'],
          priority_powers: ['dmg_t7_multi'],
          strategy_tip: 'Chain Reaction with massive ability power for kills.',
        },
      ],
    },
    support: {
      role: 'support',
      focus: 'Best Healing Kit (Not Damage)',
      round_recommendations: [
        {
          round: 1,
          priority_items: ['adrenaline_shot', 'running_shoes'],
          priority_powers: ['sup_t1_heal'],
          strategy_tip: 'Enhanced Healing mandatory. Mobility to reach teammates.',
        },
        {
          round: 2,
          priority_items: ['power_playbook', 'shady_spectacles'],
          priority_powers: [],
          strategy_tip: 'Ability power and lifesteal scale your healing.',
        },
        {
          round: 3,
          priority_items: ['winning_attitude', 'first_aid_kit'],
          priority_powers: ['sup_t3_aoe'],
          strategy_tip: 'Group Therapy spreads heals to team. Health for survival.',
        },
        {
          round: 4,
          priority_items: ['junker_whatchamajig', 'field_rations'],
          priority_powers: [],
          strategy_tip: 'Farm ult on objectives. Support ults win teamfights.',
        },
        {
          round: 5,
          priority_items: ['charged_plating', 'cushioned_padding'],
          priority_powers: ['sup_t5_burst'],
          strategy_tip: 'Emergency Response saves critical allies.',
        },
        {
          round: 6,
          priority_items: ['armored_vest', 'heartbeat_sensor'],
          priority_powers: [],
          strategy_tip: 'Survive focus fire. Track low HP allies.',
        },
        {
          round: 7,
          priority_items: ['champions_kit'],
          priority_powers: ['sup_t7_ult'],
          strategy_tip: 'Transcendent Care maximizes ultimate healing output.',
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
