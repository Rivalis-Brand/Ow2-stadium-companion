import { useState } from 'react';
import { heroes, Role, Hero } from '@/data/heroes';
import { cn } from '@/lib/utils';
import { Shield, Sword, Cross, Search } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroGridProps {
  onSelect: (hero: Hero) => void;
  selectedHeroId?: string;
  label?: string;
}

export function HeroGrid({ onSelect, selectedHeroId, label }: HeroGridProps) {
  const [filter, setFilter] = useState<Role | 'all'>('all');
  const [search, setSearch] = useState('');

  const filteredHeroes = heroes.filter(h => {
    const matchesRole = filter === 'all' || h.role === filter;
    const matchesSearch = h.name.toLowerCase().includes(search.toLowerCase());
    return matchesRole && matchesSearch;
  });

  return (
    <div className="flex flex-col space-y-4 w-full">
      {label && <h2 className="text-xl font-display text-ow-orange uppercase tracking-widest">{label}</h2>}
      
      <div className="flex gap-2 items-center bg-black/20 p-2 rounded-md backdrop-blur-sm border border-white/5">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50" />
          <input
            type="text"
            placeholder="SEARCH HERO..."
            className="w-full bg-transparent border-none focus:ring-0 text-white pl-9 placeholder:text-white/30 font-display uppercase tracking-wide"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        
        <div className="flex gap-1">
          <FilterBtn role="tank" active={filter === 'tank'} onClick={() => setFilter(filter === 'tank' ? 'all' : 'tank')}>
            <Shield className="w-4 h-4" />
          </FilterBtn>
          <FilterBtn role="damage" active={filter === 'damage'} onClick={() => setFilter(filter === 'damage' ? 'all' : 'damage')}>
            <Sword className="w-4 h-4" />
          </FilterBtn>
          <FilterBtn role="support" active={filter === 'support'} onClick={() => setFilter(filter === 'support' ? 'all' : 'support')}>
            <Cross className="w-4 h-4 rotate-45" /> {/* Rotate for support plus icon look */}
          </FilterBtn>
        </div>
      </div>

      <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-2 max-h-[300px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-ow-orange/50 scrollbar-track-transparent">
        {filteredHeroes.map((hero) => (
          <motion.button
            key={hero.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onSelect(hero)}
            className={cn(
              "aspect-[3/4] relative group overflow-hidden rounded-sm transition-all duration-200",
              "border-2",
              selectedHeroId === hero.id 
                ? "border-ow-orange ring-2 ring-ow-orange/50 z-10 scale-105" 
                : "border-white/10 hover:border-white/40 opacity-80 hover:opacity-100"
            )}
          >
            {/* Placeholder for Hero Image - using color block for now */}
            <div 
              className="absolute inset-0 transition-transform group-hover:scale-110"
              style={{ backgroundColor: hero.color }}
            >
              <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-black/80" />
            </div>
            
            {/* Hero Icon/Symbol overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-10 transition-opacity">
               {hero.role === 'tank' && <Shield className="w-8 h-8 text-white" />}
               {hero.role === 'damage' && <Sword className="w-8 h-8 text-white" />}
               {hero.role === 'support' && <Cross className="w-8 h-8 text-white rotate-45" />}
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-1 text-center">
              <span className={cn(
                "text-[10px] font-bold uppercase font-display tracking-wider block truncate leading-tight text-white drop-shadow-md",
                selectedHeroId === hero.id ? "text-ow-orange" : ""
              )}>
                {hero.name}
              </span>
            </div>
            
            {/* Selected Indicator */}
            {selectedHeroId === hero.id && (
              <div className="absolute top-1 right-1 w-2 h-2 bg-ow-orange rounded-full shadow-lg shadow-ow-orange/50" />
            )}
          </motion.button>
        ))}
      </div>
    </div>
  );
}

function FilterBtn({ children, active, onClick, role }: { children: React.ReactNode, active: boolean, onClick: () => void, role: string }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "p-2 rounded-sm transition-all border border-transparent",
        active ? "bg-ow-orange text-white shadow-lg shadow-ow-orange/20" : "bg-white/5 text-white/50 hover:bg-white/10 hover:text-white",
      )}
      title={`Filter by ${role}`}
    >
      {children}
    </button>
  )
}
