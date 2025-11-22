import { useState } from 'react';
import { HeroGrid } from '@/components/hero-grid';
import { Hero, getBuildGuide } from '@/data/heroes';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Zap, Crosshair, ChevronRight, Search, Coins, Hexagon } from 'lucide-react';
import bgImage from '@assets/generated_images/futuristic_sci-fi_stadium_arena_background_with_hexagonal_patterns_and_blue_lighting..png';

export default function Home() {
  const [myHero, setMyHero] = useState<Hero | null>(null);
  const [opponentHero, setOpponentHero] = useState<Hero | null>(null);

  const buildGuide = (myHero && opponentHero) ? getBuildGuide(myHero.id, opponentHero.id) : null;

  return (
    <div className="min-h-screen bg-background text-white font-body overflow-x-hidden relative">
      {/* Background Asset */}
      <div className="fixed inset-0 z-0">
        <img 
          src={bgImage} 
          alt="Stadium Background" 
          className="w-full h-full object-cover opacity-30 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background/95" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
      </div>

      <div className="relative z-10 container mx-auto p-4 lg:p-8 max-w-7xl">
        <header className="mb-8 flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-ow-orange skew-x-[-10deg] flex items-center justify-center border-2 border-white/20 shadow-lg shadow-ow-orange/20">
              <Zap className="w-6 h-6 text-white skew-x-[10deg]" />
            </div>
            <div>
              <h1 className="text-4xl font-display font-black tracking-tighter italic text-white">
                STADIUM <span className="text-ow-orange">COMPANION</span>
              </h1>
              <p className="text-white/50 text-sm uppercase tracking-widest font-semibold">Overwatch 2 Game Mode Tool</p>
            </div>
          </div>
          <div className="hidden md:block text-right">
             <div className="text-xs text-ow-orange font-mono uppercase">v2.1.0 // SEASON 17</div>
             <div className="text-xs text-white/30 font-mono">LIVE DATA</div>
          </div>
        </header>

        <main className="grid lg:grid-cols-12 gap-8">
          {/* Left Column: Selection */}
          <div className="lg:col-span-5 space-y-8">
            <section className="bg-black/40 backdrop-blur-md p-6 rounded-lg border border-white/10 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-ow-orange/50 group-hover:bg-ow-orange transition-colors" />
              <HeroGrid 
                label="SELECT YOUR HERO" 
                onSelect={setMyHero} 
                selectedHeroId={myHero?.id} 
              />
            </section>

            <section className="bg-black/40 backdrop-blur-md p-6 rounded-lg border border-white/10 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-red-500/50 group-hover:bg-red-500 transition-colors" />
              <HeroGrid 
                label="SELECT OPPONENT" 
                onSelect={setOpponentHero} 
                selectedHeroId={opponentHero?.id} 
              />
            </section>
          </div>

          {/* Right Column: Analysis */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              {buildGuide ? (
                <motion.div
                  key={`${myHero?.id}-${opponentHero?.id}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  {/* Header Card */}
                  <div className="bg-linear-to-r from-ow-blue/90 to-black/80 p-1 rounded-lg shadow-2xl border border-white/10">
                    <div className="bg-black/40 p-6 flex items-center justify-between relative overflow-hidden">
                       {/* Background stylistic elements */}
                       <div className="absolute -right-10 -top-10 w-40 h-40 bg-ow-orange/20 rounded-full blur-3xl" />
                       
                       <div className="flex items-center gap-6 z-10">
                          <div className="text-center">
                             <div className="text-sm text-white/50 uppercase tracking-widest mb-1">Playing As</div>
                             <div className="text-3xl font-display font-bold text-ow-orange uppercase italic">{myHero?.name}</div>
                          </div>
                          <div className="text-white/20">
                            <ChevronRight className="w-8 h-8" />
                          </div>
                          <div className="text-center">
                             <div className="text-sm text-white/50 uppercase tracking-widest mb-1">Versus</div>
                             <div className="text-3xl font-display font-bold text-red-500 uppercase italic">{opponentHero?.name}</div>
                          </div>
                       </div>
                    </div>
                  </div>

                  {/* Main Stats Grid */}
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Strategy Card */}
                    <div className="bg-black/60 backdrop-blur-md border-t-4 border-ow-orange p-6 rounded-b-lg shadow-lg">
                       <div className="flex items-center gap-2 mb-4 text-ow-orange">
                          <Crosshair className="w-5 h-5" />
                          <h3 className="font-display text-xl font-bold uppercase">Matchup Strategy</h3>
                       </div>
                       <p className="text-lg text-white/90 leading-relaxed font-light">
                         "{buildGuide.summary}"
                       </p>
                       
                       <div className="mt-6 space-y-3">
                          {buildGuide.tips.map((tip, i) => (
                            <div key={i} className="flex gap-3 items-start bg-white/5 p-3 rounded-sm border-l-2 border-white/20">
                              <div className="w-1.5 h-1.5 rounded-full bg-ow-orange mt-2 shrink-0" />
                              <span className="text-sm text-white/80">{tip}</span>
                            </div>
                          ))}
                       </div>
                    </div>

                    {/* Stats Priority */}
                    <div className="bg-black/60 backdrop-blur-md border-t-4 border-blue-500 p-6 rounded-b-lg shadow-lg">
                        <div className="flex items-center gap-2 mb-4 text-blue-400">
                          <Zap className="w-5 h-5" />
                          <h3 className="font-display text-xl font-bold uppercase">Stat Priority</h3>
                       </div>
                       
                       <div className="space-y-4">
                          <div>
                            <div className="text-xs uppercase text-green-400 font-bold mb-2 tracking-wider flex items-center gap-1">
                              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" /> Prioritize
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {buildGuide.stats.priority.map(stat => (
                                <span key={stat} className="px-3 py-1 bg-green-500/20 text-green-300 text-sm font-bold rounded-sm border border-green-500/30 uppercase">
                                  {stat}
                                </span>
                              ))}
                            </div>
                          </div>
                          
                          <div className="h-px bg-white/10" />

                          <div>
                            <div className="text-xs uppercase text-red-400 font-bold mb-2 tracking-wider flex items-center gap-1">
                              <span className="w-2 h-2 bg-red-400 rounded-full" /> Avoid
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {buildGuide.stats.avoid.map(stat => (
                                <span key={stat} className="px-3 py-1 bg-red-500/10 text-red-300 text-sm font-medium rounded-sm border border-red-500/20 uppercase decoration-dashed">
                                  {stat}
                                </span>
                              ))}
                            </div>
                          </div>
                       </div>
                    </div>
                  </div>

                  {/* ITEMS SHOP */}
                  <div className="bg-black/60 backdrop-blur-md p-6 rounded-lg border border-white/10 shadow-lg">
                    <div className="flex items-center gap-2 mb-6 text-green-400">
                        <Coins className="w-5 h-5" />
                        <h3 className="font-display text-xl font-bold uppercase">Recommended Items</h3>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {buildGuide.items.map((item, i) => (
                        <div 
                          key={i}
                          className="relative p-4 rounded-sm border bg-white/5 border-white/10 hover:border-green-400/50 transition-colors group"
                        >
                          <div className="flex justify-between items-start">
                            <div>
                              <div className="flex items-center gap-3 mb-1">
                                <span className={cn(
                                  "text-[10px] font-mono font-bold px-1.5 py-0.5 rounded-sm border uppercase",
                                  item.type === 'survival' ? "text-blue-300 border-blue-500/30 bg-blue-500/10" :
                                  item.type === 'weapon' ? "text-red-300 border-red-500/30 bg-red-500/10" :
                                  "text-yellow-300 border-yellow-500/30 bg-yellow-500/10"
                                )}>
                                  {item.type}
                                </span>
                                <h4 className="font-display font-bold text-lg uppercase text-white group-hover:text-green-400 transition-colors">
                                  {item.name}
                                </h4>
                              </div>
                              <p className="text-sm text-white/60 font-light max-w-md">{item.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* POWERS / TALENTS */}
                  <div className="bg-black/60 backdrop-blur-md p-6 rounded-lg border border-white/10 shadow-lg">
                    <div className="flex items-center gap-2 mb-6 text-purple-400">
                        <Hexagon className="w-5 h-5" />
                        <h3 className="font-display text-xl font-bold uppercase">Power Progression</h3>
                    </div>
                    
                    <div className="space-y-4">
                      {buildGuide.powers.map((power, i) => (
                        <div 
                          key={i}
                          className="relative p-4 rounded-sm border bg-linear-to-r from-purple-500/10 to-transparent border-purple-500/30 flex gap-4 items-center"
                        >
                          <div className="flex-shrink-0 w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center border border-purple-500/50 font-display font-bold text-purple-300 text-xl">
                            {power.tier}
                          </div>
                          
                          <div>
                             <h4 className="font-display font-bold text-lg uppercase text-white">
                               {power.name}
                             </h4>
                             <p className="text-sm text-white/70 font-light">{power.description}</p>
                          </div>
                          
                          <div className="ml-auto text-xs font-mono text-purple-300/50 uppercase tracking-widest">
                            Round {power.tier}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </motion.div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center p-12 bg-black/20 border border-white/5 rounded-lg backdrop-blur-sm min-h-[500px]">
                   <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mb-6 animate-pulse">
                      <Search className="w-10 h-10 text-white/20" />
                   </div>
                   <h3 className="text-2xl font-display font-bold text-white/40 uppercase mb-2">Awaiting Selection</h3>
                   <p className="text-white/30 max-w-md">Select your hero and your opponent from the grid to generate a matchup analysis and build guide.</p>
                </div>
              )}
            </AnimatePresence>
          </div>
        </main>
      </div>
    </div>
  );
}
