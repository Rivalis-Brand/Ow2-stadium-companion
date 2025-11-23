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
      round_recommendations: opponentRole === 'damage' ? [
        // VS Damage: Focus on armor and damage mitigation
        {
          round: 1,
          priority_items: ['electrolytes', 'fortified_armor'],
          priority_powers: ['tank_t1_sustain'],
          strategy_tip: 'Stack armor early against burst damage. Barrier Mastery blocks their damage spikes.',
        },
        {
          round: 2,
          priority_items: ['first_aid_kit', 'resilience_core'],
          priority_powers: [],
          strategy_tip: 'Add shields and CC reduction. Damage dealers rely on follow-up CC.',
        },
        {
          round: 3,
          priority_items: ['charged_plating', 'siphon_gloves'],
          priority_powers: ['tank_t3_survival'],
          strategy_tip: 'Damage Sponge mitigates their burst windows. Armor after ult keeps you alive.',
        },
        {
          round: 4,
          priority_items: ['field_rations', 'ability_amp'],
          priority_powers: [],
          strategy_tip: 'Contest objective for passive healing. Amp your protective abilities.',
        },
        {
          round: 5,
          priority_items: ['winning_attitude', 'cooldown_chip'],
          priority_powers: ['tank_t5_armor'],
          strategy_tip: 'Titanium Plating makes you incredibly tanky. Cycle abilities faster.',
        },
        {
          round: 6,
          priority_items: ['ult_accelerator', 'heartbeat_sensor'],
          priority_powers: [],
          strategy_tip: 'Farm ult quickly. Your defensive ult can shut down their damage phase.',
        },
        {
          round: 7,
          priority_items: ['energy_recycle'],
          priority_powers: ['tank_t7_revive'],
          strategy_tip: 'Second Wind gives insurance against their burst combos.',
        },
      ] : opponentRole === 'support' ? [
        // VS Support: Focus on sustained pressure
        {
          round: 1,
          priority_items: ['adrenaline_shot', 'running_shoes'],
          priority_powers: ['tank_t1_utility'],
          strategy_tip: 'Pressure supports with extended CC. Mobility helps you chase healers.',
        },
        {
          round: 2,
          priority_items: ['siphon_gloves', 'cooldown_chip'],
          priority_powers: [],
          strategy_tip: 'Self-sustain and ability spam. Out-sustain their healing with constant pressure.',
        },
        {
          round: 3,
          priority_items: ['shieldbuster', 'ability_amp'],
          priority_powers: ['tank_t3_utility'],
          strategy_tip: 'Zone Controller makes it harder for supports to position safely.',
        },
        {
          round: 4,
          priority_items: ['field_rations', 'first_aid_kit'],
          priority_powers: [],
          strategy_tip: 'Match their healing output with your own sustain on objective.',
        },
        {
          round: 5,
          priority_items: ['fortified_armor', 'charged_plating'],
          priority_powers: ['tank_t5_regen'],
          strategy_tip: 'Battle Regeneration forces them to overheal to keep up.',
        },
        {
          round: 6,
          priority_items: ['ult_accelerator', 'scanner_visor'],
          priority_powers: [],
          strategy_tip: 'Reveal low HP targets. Farm ult to force support defensives.',
        },
        {
          round: 7,
          priority_items: ['energy_recycle'],
          priority_powers: ['tank_t7_ult'],
          strategy_tip: 'Ultimate Fortress lets you dive supports fearlessly.',
        },
      ] : [
        // VS Tank or Default
        {
          round: 1,
          priority_items: ['adrenaline_shot', 'running_shoes'],
          priority_powers: ['tank_t1_sustain'],
          strategy_tip: 'Start with mobility and sustain. Barrier Mastery for shield wars.',
        },
        {
          round: 2,
          priority_items: ['first_aid_kit', 'siphon_gloves'],
          priority_powers: [],
          strategy_tip: 'Build effective health pool with shields and lifesteal.',
        },
        {
          round: 3,
          priority_items: ['fortified_armor', 'resilience_core'],
          priority_powers: ['tank_t3_survival'],
          strategy_tip: 'Armor and CC reduction. Win the tank battle through mitigation.',
        },
        {
          round: 4,
          priority_items: ['cooldown_chip', 'field_rations'],
          priority_powers: [],
          strategy_tip: 'Ability spam advantage. Contest objective for sustain.',
        },
        {
          round: 5,
          priority_items: ['charged_plating', 'ability_amp'],
          priority_powers: ['tank_t5_armor'],
          strategy_tip: 'Titanium Plating for massive armor. Focus on objective control.',
        },
        {
          round: 6,
          priority_items: ['ult_accelerator', 'heartbeat_sensor'],
          priority_powers: [],
          strategy_tip: 'Farm ult - tank ults can turn teamfights.',
        },
        {
          round: 7,
          priority_items: ['energy_recycle'],
          priority_powers: ['tank_t7_revive'],
          strategy_tip: 'Second Wind for clutch survivability in extended fights.',
        },
      ],
    },
    damage: {
      role: 'damage',
      focus: 'Maximum Damage Output + Survivability',
      round_recommendations: opponentRole === 'tank' ? [
        // VS Tank: Shield break and sustained damage
        {
          round: 1,
          priority_items: ['shieldbuster', 'rapid_fire'],
          priority_powers: ['dmg_t1_crit'],
          strategy_tip: 'Shieldbuster essential vs tanks. Stack fire rate for shield pressure.',
        },
        {
          round: 2,
          priority_items: ['penetrator_rounds', 'critical_scope'],
          priority_powers: [],
          strategy_tip: 'Pierce through to backline. Crits help burst through tank health.',
        },
        {
          round: 3,
          priority_items: ['electrolytes', 'winning_attitude'],
          priority_powers: ['dmg_t3_survival'],
          strategy_tip: 'Combat Medic keeps you alive. Tanks have high kill threat.',
        },
        {
          round: 4,
          priority_items: ['ability_amp', 'cooldown_chip'],
          priority_powers: [],
          strategy_tip: 'Ability spam to pressure tank cooldowns and barriers.',
        },
        {
          round: 5,
          priority_items: ['explosive_rounds', 'siphon_gloves'],
          priority_powers: ['dmg_t5_balanced'],
          strategy_tip: 'Tactical Superiority for sustained trades. Splash damage for AoE pressure.',
        },
        {
          round: 6,
          priority_items: ['ult_accelerator', 'first_aid_kit'],
          priority_powers: [],
          strategy_tip: 'Farm ult on tank frontline. Shields for survivability.',
        },
        {
          round: 7,
          priority_items: ['fortified_armor'],
          priority_powers: ['dmg_t7_ult'],
          strategy_tip: 'Extended ult duration maximizes tank shred potential.',
        },
      ] : opponentRole === 'support' ? [
        // VS Support: Burst and pressure
        {
          round: 1,
          priority_items: ['electrolytes', 'critical_scope'],
          priority_powers: ['dmg_t1_crit'],
          strategy_tip: 'Burst supports before they can react. Precision Training for picks.',
        },
        {
          round: 2,
          priority_items: ['rapid_fire', 'scanner_visor'],
          priority_powers: [],
          strategy_tip: 'Track support positioning. High fire rate denies healing windows.',
        },
        {
          round: 3,
          priority_items: ['adrenaline_shot', 'running_shoes'],
          priority_powers: ['dmg_t3_burst'],
          strategy_tip: 'Assassination Protocol for execute pressure. Mobility to chase.',
        },
        {
          round: 4,
          priority_items: ['penetrator_rounds', 'ability_amp'],
          priority_powers: [],
          strategy_tip: 'Pierce through peel. Amp abilities for kill confirm.',
        },
        {
          round: 5,
          priority_items: ['winning_attitude', 'siphon_gloves'],
          priority_powers: ['dmg_t5_damage'],
          strategy_tip: 'Glass Cannon maximizes burst. Lifesteal for sustain.',
        },
        {
          round: 6,
          priority_items: ['ult_accelerator', 'cooldown_chip'],
          priority_powers: [],
          strategy_tip: 'Farm ult quickly. Spam abilities to pressure support cooldowns.',
        },
        {
          round: 7,
          priority_items: ['explosive_rounds'],
          priority_powers: ['dmg_t7_multi'],
          strategy_tip: 'Chain Reaction secures kills on grouped supports.',
        },
      ] : [
        // VS Damage or Default
        {
          round: 1,
          priority_items: ['adrenaline_shot', 'electrolytes'],
          priority_powers: ['dmg_t1_crit'],
          strategy_tip: 'Precision Training for damage duels. Overhealth for early fights.',
        },
        {
          round: 2,
          priority_items: ['critical_scope', 'rapid_fire'],
          priority_powers: [],
          strategy_tip: 'Max damage output. Win the damage race.',
        },
        {
          round: 3,
          priority_items: ['winning_attitude', 'siphon_gloves'],
          priority_powers: ['dmg_t3_survival'],
          strategy_tip: 'Combat Medic crucial for survivability. Lifesteal for trades.',
        },
        {
          round: 4,
          priority_items: ['penetrator_rounds', 'shieldbuster'],
          priority_powers: [],
          strategy_tip: 'Pierce and shield break for multi-target value.',
        },
        {
          round: 5,
          priority_items: ['first_aid_kit', 'fortified_armor'],
          priority_powers: ['dmg_t5_balanced'],
          strategy_tip: 'Tactical Superiority balances offense and defense.',
        },
        {
          round: 6,
          priority_items: ['ult_accelerator', 'ability_amp'],
          priority_powers: [],
          strategy_tip: 'Farm ult fast - can secure team wipes.',
        },
        {
          round: 7,
          priority_items: ['explosive_rounds'],
          priority_powers: ['dmg_t7_multi'],
          strategy_tip: 'Chain Reaction turns you into killing machine.',
        },
      ],
    },
    support: {
      role: 'support',
      focus: 'Best Healing Kit (Not Damage)',
      round_recommendations: opponentRole === 'damage' ? [
        // VS Damage: Defensive healing
        {
          round: 1,
          priority_items: ['medkit_boost', 'electrolytes'],
          priority_powers: ['sup_t1_heal'],
          strategy_tip: 'Enhanced Healing crucial vs burst. Health packs for emergency heals.',
        },
        {
          round: 2,
          priority_items: ['ability_amp', 'cooldown_chip'],
          priority_powers: [],
          strategy_tip: 'Amp heals and spam them. Damage dealers punish long cooldowns.',
        },
        {
          round: 3,
          priority_items: ['first_aid_kit', 'resilience_core'],
          priority_powers: ['sup_t3_efficiency'],
          strategy_tip: 'Resource Management for sustained healing. CC reduction vs CC chains.',
        },
        {
          round: 4,
          priority_items: ['ult_accelerator', 'fortified_armor'],
          priority_powers: [],
          strategy_tip: 'Farm defensive ult. Armor helps survive dive.',
        },
        {
          round: 5,
          priority_items: ['charged_plating', 'field_rations'],
          priority_powers: ['sup_t5_burst'],
          strategy_tip: 'Emergency Response saves critical allies from burst.',
        },
        {
          round: 6,
          priority_items: ['running_shoes', 'heartbeat_sensor'],
          priority_powers: [],
          strategy_tip: 'Mobility to escape divers. Track low HP allies.',
        },
        {
          round: 7,
          priority_items: ['energy_recycle'],
          priority_powers: ['sup_t7_revive'],
          strategy_tip: 'Guardian Angel protects burst targets.',
        },
      ] : opponentRole === 'tank' ? [
        // VS Tank: Sustained healing
        {
          round: 1,
          priority_items: ['medkit_boost', 'ability_amp'],
          priority_powers: ['sup_t1_heal'],
          strategy_tip: 'Enhanced Healing for tank sustain. Amp your heal output.',
        },
        {
          round: 2,
          priority_items: ['cooldown_chip', 'adrenaline_shot'],
          priority_powers: [],
          strategy_tip: 'Constant heal uptime. Tanks need sustained healing.',
        },
        {
          round: 3,
          priority_items: ['ult_accelerator', 'field_rations'],
          priority_powers: ['sup_t3_aoe'],
          strategy_tip: 'Group Therapy for team healing. Objective heals.',
        },
        {
          round: 4,
          priority_items: ['charged_plating', 'first_aid_kit'],
          priority_powers: [],
          strategy_tip: 'Build survivability. Tanks create long fights.',
        },
        {
          round: 5,
          priority_items: ['shieldbuster', 'scanner_visor'],
          priority_powers: ['sup_t5_buff'],
          strategy_tip: 'Combat Medic Field helps team break tanks.',
        },
        {
          round: 6,
          priority_items: ['fortified_armor', 'resilience_core'],
          priority_powers: [],
          strategy_tip: 'Tank CC is dangerous. Build defensive stats.',
        },
        {
          round: 7,
          priority_items: ['energy_recycle'],
          priority_powers: ['sup_t7_ult'],
          strategy_tip: 'Transcendent Care maximizes ultimate healing.',
        },
      ] : [
        // VS Support or Default
        {
          round: 1,
          priority_items: ['medkit_boost', 'running_shoes'],
          priority_powers: ['sup_t1_heal'],
          strategy_tip: 'Enhanced Healing mandatory. Mobility for positioning.',
        },
        {
          round: 2,
          priority_items: ['ability_amp', 'adrenaline_shot'],
          priority_powers: [],
          strategy_tip: 'Ability Power scales healing. Health pack synergy.',
        },
        {
          round: 3,
          priority_items: ['cooldown_chip', 'first_aid_kit'],
          priority_powers: ['sup_t3_aoe'],
          strategy_tip: 'Group Therapy spreads heals. CDR for spam.',
        },
        {
          round: 4,
          priority_items: ['ult_accelerator', 'field_rations'],
          priority_powers: [],
          strategy_tip: 'Farm ult on objective. Support ults win fights.',
        },
        {
          round: 5,
          priority_items: ['charged_plating', 'resilience_core'],
          priority_powers: ['sup_t5_burst'],
          strategy_tip: 'Emergency Response for critical saves.',
        },
        {
          round: 6,
          priority_items: ['fortified_armor', 'heartbeat_sensor'],
          priority_powers: [],
          strategy_tip: 'Survive focus fire. Track low HP allies.',
        },
        {
          round: 7,
          priority_items: ['energy_recycle'],
          priority_powers: ['sup_t7_ult'],
          strategy_tip: 'Transcendent Care maximizes healing output.',
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
