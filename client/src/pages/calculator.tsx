import { useState } from 'react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Zap, Heart, ChevronRight, ChevronLeft, Coins, Hexagon, ShoppingCart, Check, Target, Users, TrendingUp, TrendingDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { HeroGrid } from '@/components/hero-grid';
import { Hero } from '@/data/heroes';
import bgImage from '@assets/generated_images/futuristic_sci-fi_stadium_arena_background_with_hexagonal_patterns_and_blue_lighting..png';
import { 
  ClassRole, 
  getClassBuilds, 
  getAffordableItems, 
  getAffordablePowers,
  tacticalItems,
  TacticalItem,
  TacticalPower
} from '@/data/tactical-builds';

// Round earnings based on game result
const ROUND_EARNINGS = {
  win: 1200,
  loss: 600
};

export default function Home() {
  const [myHero, setMyHero] = useState<Hero | null>(null);
  const [opponentHero, setOpponentHero] = useState<Hero | null>(null);
  const [selectedClass, setSelectedClass] = useState<ClassRole>('tank');
  const [currentRound, setCurrentRound] = useState(1);
  const [credits, setCredits] = useState(3500);
  const [purchasedItems, setPurchasedItems] = useState<Set<string>>(new Set());
  const [purchasedPowers, setPurchasedPowers] = useState<Set<string>>(new Set());
  const [roundPurchases, setRoundPurchases] = useState<Record<number, { items: string[], powers: string[] }>>({});
  const [roundResults, setRoundResults] = useState<Record<number, 'win' | 'loss'>>({});

  const classBuild = getClassBuilds(selectedClass);
  const currentRecommendation = classBuild.round_recommendations.find(r => r.round === currentRound);
  const affordableItems = getAffordableItems(credits);
  const affordablePowers = getAffordablePowers(selectedClass, currentRound, credits);

  const handleNextRound = (result: 'win' | 'loss') => {
    if (currentRound < 7) {
      // Save current round purchases
      const currentRoundItems = Array.from(purchasedItems).filter(id => 
        !(roundPurchases[currentRound]?.items || []).includes(id)
      );
      const currentRoundPowers = Array.from(purchasedPowers).filter(id => 
        !(roundPurchases[currentRound]?.powers || []).includes(id)
      );
      
      setRoundPurchases(prev => ({
        ...prev,
        [currentRound]: {
          items: currentRoundItems,
          powers: currentRoundPowers
        }
      }));
      
      // Record result and add earnings
      setRoundResults(prev => ({
        ...prev,
        [currentRound]: result
      }));
      
      const earnings = result === 'win' ? ROUND_EARNINGS.win : ROUND_EARNINGS.loss;
      setCredits(credits + earnings);
      
      // Move to next round
      setCurrentRound(currentRound + 1);
    }
  };

  const handlePrevRound = () => {
    if (currentRound > 1) {
      setCurrentRound(currentRound - 1);
    }
  };

  const handlePurchaseItem = (itemId: string, price: number) => {
    if (credits >= price && !purchasedItems.has(itemId)) {
      setCredits(credits - price);
      const newSet = new Set(purchasedItems);
      newSet.add(itemId);
      setPurchasedItems(newSet);
    }
  };

  const handlePurchasePower = (powerId: string, price: number) => {
    if (credits >= price && !purchasedPowers.has(powerId)) {
      setCredits(credits - price);
      const newSet = new Set(purchasedPowers);
      newSet.add(powerId);
      setPurchasedPowers(newSet);
    }
  };

  const getRecommendedItems = (): TacticalItem[] => {
    if (!currentRecommendation) return [];
    return currentRecommendation.priority_items
      .map(id => tacticalItems.find(item => item.id === id))
      .filter(Boolean) as TacticalItem[];
  };

  const getRecommendedPowers = (): TacticalPower[] => {
    if (!currentRecommendation) return [];
    return affordablePowers.filter(power => 
      currentRecommendation.priority_powers.includes(power.id)
    );
  };

  const classIcons = {
    tank: Shield,
    damage: Zap,
    support: Heart,
  };

  const classColors = {
    tank: 'text-blue-400',
    damage: 'text-red-400',
    support: 'text-green-400',
  };

  const ClassIcon = classIcons[selectedClass];

  return (
    <div className="min-h-screen bg-background text-foreground font-body overflow-x-hidden relative">
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
        {/* Header */}
        <header className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-border pb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary skew-x-[-10deg] flex items-center justify-center border-2 border-border shadow-lg">
              <Zap className="w-6 h-6 text-primary-foreground skew-x-[10deg]" />
            </div>
            <div>
              <h1 className="text-4xl font-display font-black tracking-tighter italic text-foreground">
                TACTICAL <span className="text-primary">CALCULATOR</span>
              </h1>
              <p className="text-muted-foreground text-sm uppercase tracking-widest font-semibold">
                {myHero ? `${myHero.name} vs ${opponentHero?.name || 'Opponent'}` : 'Select Your Hero'}
              </p>
            </div>
          </div>
          
          {/* Credits Display */}
          <div className="flex items-center gap-2 bg-card border border-border rounded-md px-4 py-2">
            <Coins className="w-5 h-5 text-primary" />
            <div>
              <div className="text-xs text-muted-foreground uppercase">Available Credits</div>
              <div className="text-2xl font-bold text-foreground">{credits}</div>
            </div>
          </div>
        </header>

        {/* Hero Selection */}
        {!myHero && (
          <Card className="mb-8 border-primary/50 bg-gradient-to-r from-primary/5 to-accent/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5 text-primary" />
                Select Your Hero
              </CardTitle>
              <CardDescription>Choose your hero to see matchup-specific build recommendations</CardDescription>
            </CardHeader>
            <CardContent>
              <HeroGrid onHeroSelect={setMyHero} />
            </CardContent>
          </Card>
        )}

        {myHero && !opponentHero && (
          <Card className="mb-8 border-accent/50 bg-gradient-to-r from-accent/5 to-primary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5 text-accent" />
                Select Your Opponent
              </CardTitle>
              <CardDescription>Choose opponent hero for matchup analysis and counter-build recommendations</CardDescription>
            </CardHeader>
            <CardContent>
              <HeroGrid onHeroSelect={setOpponentHero} selectedHero={myHero} />
            </CardContent>
          </Card>
        )}

        {myHero && opponentHero && (
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4 p-4 rounded-lg bg-card border border-primary/30">
            <div className="flex items-center gap-4">
              <div className="text-center">
                <Badge className="mb-2 block">{myHero.name}</Badge>
                <span className="text-xs text-muted-foreground">{myHero.role}</span>
              </div>
              <div className="text-2xl font-bold text-muted-foreground">VS</div>
              <div className="text-center">
                <Badge variant="outline" className="mb-2 block">{opponentHero.name}</Badge>
                <span className="text-xs text-muted-foreground">{opponentHero.role}</span>
              </div>
            </div>
            <Button variant="ghost" size="sm" onClick={() => { setMyHero(null); setOpponentHero(null); }}>
              Change Heroes
            </Button>
          </div>
        )}

        {/* Only show calculator when both heroes are selected */}
        {!myHero || !opponentHero ? null : (
        <>
        {/* Class Tabs */}
        <Tabs value={selectedClass} onValueChange={(val) => setSelectedClass(val as ClassRole)} className="mb-6">
          <TabsList className="grid w-full grid-cols-3 gap-2 bg-card border border-border p-1">
            <TabsTrigger 
              value="tank" 
              className="flex items-center gap-2"
              data-testid="tab-tank"
            >
              <Shield className="w-4 h-4" />
              <span className="font-bold">TANK</span>
            </TabsTrigger>
            <TabsTrigger 
              value="damage" 
              className="flex items-center gap-2"
              data-testid="tab-damage"
            >
              <Zap className="w-4 h-4" />
              <span className="font-bold">DAMAGE</span>
            </TabsTrigger>
            <TabsTrigger 
              value="support" 
              className="flex items-center gap-2"
              data-testid="tab-support"
            >
              <Heart className="w-4 h-4" />
              <span className="font-bold">SUPPORT</span>
            </TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Round Navigation */}
        <div className="mb-6 bg-card border border-border rounded-lg p-4 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="icon"
                onClick={handlePrevRound}
                disabled={currentRound === 1}
                data-testid="button-prev-round"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              
              <div className="flex items-center gap-3">
                <div className="text-center">
                  <div className="text-xs text-muted-foreground uppercase mb-1">Current Round</div>
                  <div className="text-4xl font-display font-bold text-primary">{currentRound}</div>
                </div>
                <div className="text-muted-foreground">/</div>
                <div className="text-2xl font-display text-muted-foreground">7</div>
              </div>

              {currentRound === 7 ? (
                <Button variant="secondary" disabled>
                  Final Round
                </Button>
              ) : null}
            </div>

            {/* Credit Input */}
            <div className="flex items-center gap-2">
              <label className="text-sm text-muted-foreground uppercase">Adjust Credits:</label>
              <Input
                type="number"
                value={credits}
                onChange={(e) => setCredits(Math.max(0, parseInt(e.target.value) || 0))}
                className="w-32"
                data-testid="input-credits"
              />
            </div>
          </div>

          {/* Round Results & Earnings */}
          {currentRound < 7 && (
            <div className="bg-primary/5 border border-primary/20 rounded-md p-4">
              <div className="mb-3">
                <p className="text-sm font-semibold text-foreground mb-2">Complete this round:</p>
                <div className="flex gap-3 flex-wrap">
                  <Button
                    onClick={() => handleNextRound('win')}
                    className="bg-green-600 hover:bg-green-700 flex items-center gap-2"
                    data-testid="button-round-win"
                  >
                    <TrendingUp className="w-4 h-4" />
                    Win (+{ROUND_EARNINGS.win})
                  </Button>
                  <Button
                    onClick={() => handleNextRound('loss')}
                    className="bg-orange-600 hover:bg-orange-700 flex items-center gap-2"
                    data-testid="button-round-loss"
                  >
                    <TrendingDown className="w-4 h-4" />
                    Loss (+{ROUND_EARNINGS.loss})
                  </Button>
                </div>
              </div>
              {roundResults[currentRound] && (
                <p className="text-xs text-muted-foreground">
                  Round {currentRound} result: <span className="font-semibold capitalize">{roundResults[currentRound]}</span>
                </p>
              )}
            </div>
          )}

          {/* Round Progress Indicator */}
          <div className="mt-4 flex gap-1">
            {[1, 2, 3, 4, 5, 6, 7].map((round) => (
              <div
                key={round}
                className={cn(
                  "flex-1 h-2 rounded-sm transition-colors",
                  round <= currentRound ? "bg-primary" : "bg-muted"
                )}
              />
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-12 gap-6">
          {/* Left Column: Build Info */}
          <div className="lg:col-span-5 space-y-6">
            {/* Class Focus Card */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <ClassIcon className={cn("w-8 h-8", classColors[selectedClass])} />
                  <div>
                    <CardTitle className="text-2xl uppercase">{selectedClass} Build</CardTitle>
                    <CardDescription>{classBuild.focus}</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>

            {/* Strategy Tip */}
            {currentRecommendation && (
              <Card className="border-l-4 border-l-primary">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Hexagon className="w-5 h-5 text-primary" />
                    Round {currentRound} Strategy
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {currentRecommendation.strategy_tip}
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Purchased Summary */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <ShoppingCart className="w-5 h-5" />
                  Purchased This Round
                </CardTitle>
                <CardDescription className="flex justify-between items-center">
                  <span>Current round purchases</span>
                  {currentRound > 1 && roundResults[currentRound - 1] && (
                    <Badge className={roundResults[currentRound - 1] === 'win' ? 'bg-green-600' : 'bg-orange-600'}>
                      Last: {roundResults[currentRound - 1] === 'win' ? `Won (+${ROUND_EARNINGS.win})` : `Lost (+${ROUND_EARNINGS.loss})`}
                    </Badge>
                  )}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {purchasedItems.size === 0 && purchasedPowers.size === 0 ? (
                  <p className="text-sm text-muted-foreground">No purchases yet</p>
                ) : (
                  <div className="space-y-3">
                    {Array.from(purchasedItems).map(itemId => {
                      const item = tacticalItems.find(i => i.id === itemId);
                      return item ? (
                        <div key={itemId} className="flex items-center gap-2 text-sm p-2 bg-green-500/5 rounded border border-green-500/20">
                          <Check className="w-4 h-4 text-green-500" />
                          <span>{item.name}</span>
                          <Badge variant="secondary" className="ml-auto">{item.price}</Badge>
                        </div>
                      ) : null;
                    })}
                    {Array.from(purchasedPowers).map(powerId => {
                      const power = affordablePowers.find(p => p.id === powerId);
                      return power ? (
                        <div key={powerId} className="flex items-center gap-2 text-sm p-2 bg-purple-500/5 rounded border border-purple-500/20">
                          <Check className="w-4 h-4 text-purple-500" />
                          <span>{power.name}</span>
                          <Badge variant="secondary" className="ml-auto">{power.price}</Badge>
                        </div>
                      ) : null;
                    })}
                    <div className="pt-2 border-t border-border flex justify-between text-sm font-semibold">
                      <span>Round Total:</span>
                      <span className="text-foreground">
                        {Array.from(purchasedItems).reduce((sum, itemId) => {
                          const item = tacticalItems.find(i => i.id === itemId);
                          return sum + (item?.price || 0);
                        }, 0) + Array.from(purchasedPowers).reduce((sum, powerId) => {
                          const power = affordablePowers.find(p => p.id === powerId);
                          return sum + (power?.price || 0);
                        }, 0)}
                      </span>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Right Column: Recommended Items & Powers */}
          <div className="lg:col-span-7 space-y-6">
            {/* Recommended Powers */}
            {getRecommendedPowers().length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Hexagon className="w-5 h-5 text-purple-400" />
                    Recommended Powers
                  </CardTitle>
                  <CardDescription>
                    Priority abilities for Round {currentRound}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {getRecommendedPowers().map((power) => (
                    <div
                      key={power.id}
                      className={cn(
                        "p-4 rounded-md border transition-colors",
                        purchasedPowers.has(power.id)
                          ? "bg-purple-500/10 border-purple-500/30"
                          : "bg-card border-border hover-elevate"
                      )}
                      data-testid={`power-${power.id}`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-bold text-lg uppercase">{power.name}</h4>
                            {purchasedPowers.has(power.id) && (
                              <Badge variant="secondary" className="text-green-400">
                                <Check className="w-3 h-3 mr-1" />
                                Owned
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">{power.description}</p>
                          <div className="flex items-center gap-2">
                            <Badge variant="outline" className="text-purple-400 border-purple-500/30">
                              Tier {power.unlock_round}
                            </Badge>
                            {power.price > 0 && (
                              <Badge variant="secondary" className="flex items-center gap-1">
                                <Coins className="w-3 h-3" />
                                {power.price}
                              </Badge>
                            )}
                          </div>
                        </div>
                        <Button
                          onClick={() => handlePurchasePower(power.id, power.price)}
                          disabled={credits < power.price || purchasedPowers.has(power.id)}
                          size="sm"
                          data-testid={`button-buy-power-${power.id}`}
                        >
                          {purchasedPowers.has(power.id) ? 'Owned' : power.price === 0 ? 'Free' : 'Buy'}
                        </Button>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            )}

            {/* Recommended Items */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ShoppingCart className="w-5 h-5 text-primary" />
                  Recommended Items
                </CardTitle>
                <CardDescription>
                  Priority purchases for Round {currentRound}
                </CardDescription>
              </CardHeader>
              <CardContent className="grid sm:grid-cols-2 gap-3">
                {getRecommendedItems().map((item) => {
                  const canAfford = credits >= item.price;
                  const isPurchased = purchasedItems.has(item.id);
                  
                  return (
                    <div
                      key={item.id}
                      className={cn(
                        "p-4 rounded-md border transition-colors",
                        isPurchased
                          ? "bg-green-500/10 border-green-500/30"
                          : canAfford
                          ? "bg-card border-border hover-elevate"
                          : "bg-card border-border opacity-50"
                      )}
                      data-testid={`item-${item.id}`}
                    >
                      <div className="space-y-2">
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1 flex-wrap">
                              <Badge
                                variant="outline"
                                className={cn(
                                  "text-xs",
                                  item.category === 'survival' && "text-blue-400 border-blue-500/30",
                                  item.category === 'weapon' && "text-red-400 border-red-500/30",
                                  item.category === 'ability' && "text-purple-400 border-purple-500/30",
                                  item.category === 'utility' && "text-yellow-400 border-yellow-500/30"
                                )}
                              >
                                {item.category}
                              </Badge>
                              {isPurchased && (
                                <Badge variant="secondary" className="text-green-400 text-xs">
                                  <Check className="w-3 h-3 mr-1" />
                                  Owned
                                </Badge>
                              )}
                            </div>
                            <h4 className="font-bold uppercase text-sm mb-1">{item.name}</h4>
                            <p className="text-xs text-muted-foreground leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between gap-2 pt-2 border-t border-border">
                          <Badge variant="secondary" className="flex items-center gap-1">
                            <Coins className="w-3 h-3" />
                            {item.price}
                          </Badge>
                          <Button
                            onClick={() => handlePurchaseItem(item.id, item.price)}
                            disabled={!canAfford || isPurchased}
                            size="sm"
                            data-testid={`button-buy-item-${item.id}`}
                          >
                            {isPurchased ? 'Owned' : canAfford ? 'Buy' : 'Too Expensive'}
                          </Button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* All Affordable Items */}
            {affordableItems.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ShoppingCart className="w-5 h-5" />
                    All Available Items ({affordableItems.length})
                  </CardTitle>
                  <CardDescription>
                    All items you can afford with {credits} credits
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid sm:grid-cols-2 gap-3">
                  {affordableItems
                    .filter(item => !getRecommendedItems().find(r => r.id === item.id))
                    .map((item) => {
                      const isPurchased = purchasedItems.has(item.id);
                      
                      return (
                        <div
                          key={item.id}
                          className={cn(
                            "p-4 rounded-md border transition-colors",
                            isPurchased
                              ? "bg-green-500/10 border-green-500/30"
                              : "bg-card border-border hover-elevate"
                          )}
                          data-testid={`item-all-${item.id}`}
                        >
                          <div className="space-y-2">
                            <div className="flex items-start justify-between gap-2">
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1 flex-wrap">
                                  <Badge
                                    variant="outline"
                                    className={cn(
                                      "text-xs",
                                      item.category === 'survival' && "text-blue-400 border-blue-500/30",
                                      item.category === 'weapon' && "text-red-400 border-red-500/30",
                                      item.category === 'ability' && "text-purple-400 border-purple-500/30",
                                      item.category === 'utility' && "text-yellow-400 border-yellow-500/30"
                                    )}
                                  >
                                    {item.category}
                                  </Badge>
                                  {isPurchased && (
                                    <Badge variant="secondary" className="text-green-400 text-xs">
                                      <Check className="w-3 h-3 mr-1" />
                                      Owned
                                    </Badge>
                                  )}
                                </div>
                                <h4 className="font-bold uppercase text-sm mb-1">{item.name}</h4>
                                <p className="text-xs text-muted-foreground leading-relaxed">
                                  {item.description}
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center justify-between gap-2 pt-2 border-t border-border">
                              <Badge variant="secondary" className="flex items-center gap-1">
                                <Coins className="w-3 h-3" />
                                {item.price}
                              </Badge>
                              <Button
                                onClick={() => handlePurchaseItem(item.id, item.price)}
                                disabled={isPurchased}
                                size="sm"
                                variant="outline"
                                data-testid={`button-buy-item-all-${item.id}`}
                              >
                                {isPurchased ? 'Owned' : 'Buy'}
                              </Button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </CardContent>
              </Card>
            )}
          </div>
        </div>
        </>
        )}
      </div>
    </div>
  );
}
