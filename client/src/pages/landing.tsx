import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Zap, Heart, ArrowRight, Coins, Hexagon, ShoppingCart, Trophy, Target, TrendingUp } from 'lucide-react';
import bgImage from '@assets/generated_images/futuristic_sci-fi_stadium_arena_background_with_hexagonal_patterns_and_blue_lighting..png';
import { heroes } from '@/data/heroes';
import { cn } from '@/lib/utils';

export default function Landing() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-background text-foreground font-body overflow-x-hidden relative">
      {/* Hero Background with Real Hero Portraits */}
      <div className="fixed inset-0 z-0">
        <img 
          src={bgImage} 
          alt="Stadium Arena" 
          className="w-full h-full object-cover opacity-30"
        />
        
        {/* Hero Portraits Grid Overlay */}
        <div className="absolute inset-0 grid grid-cols-6 md:grid-cols-8 lg:grid-cols-12 gap-2 p-4 opacity-20">
          {heroes.map((hero, idx) => (
            <div
              key={hero.id}
              className="relative aspect-square rounded-md overflow-hidden"
              style={{
                animationDelay: `${idx * 0.1}s`,
              }}
            >
              <img 
                src={hero.image} 
                alt={hero.name}
                className="w-full h-full object-cover"
                style={{ 
                  filter: 'grayscale(30%) brightness(0.8)',
                }}
              />
              <div 
                className="absolute inset-0 mix-blend-color"
                style={{ backgroundColor: hero.color, opacity: 0.3 }}
              />
            </div>
          ))}
        </div>
        
        {/* Dark wash overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/75 to-black/90" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-8 lg:py-16 max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-16 h-16 bg-primary skew-x-[-10deg] flex items-center justify-center border-2 border-primary/50 shadow-lg shadow-primary/30">
              <Zap className="w-8 h-8 text-primary-foreground skew-x-[10deg]" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-black tracking-tighter italic text-white leading-tight">
            TACTICAL <span className="text-primary">CALCULATOR</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Master your Stadium builds with round-by-round optimization for Tank, Damage, and Support classes
          </p>

          <Button 
            size="lg" 
            className="text-lg px-8 py-6 mt-4"
            onClick={() => setLocation('/calculator')}
            data-testid="button-get-started"
          >
            Get Started <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>

        {/* Class Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <Card className="border-blue-500/30 bg-card/80 backdrop-blur-sm hover-elevate">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center border-2 border-blue-500/50">
                  <Shield className="w-6 h-6 text-blue-400" />
                </div>
                <CardTitle className="text-2xl uppercase">Tank</CardTitle>
              </div>
              <CardDescription className="text-base">
                Maximum Survivability & Utility
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
                  <span>Maximize armor and damage mitigation</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
                  <span>Zone control and crowd control focus</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
                  <span>Frontline protection for your team</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-red-500/30 bg-card/80 backdrop-blur-sm hover-elevate">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center border-2 border-red-500/50">
                  <Zap className="w-6 h-6 text-red-400" />
                </div>
                <CardTitle className="text-2xl uppercase">Damage</CardTitle>
              </div>
              <CardDescription className="text-base">
                Maximum Damage + Survivability
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                  <span>Highest damage output builds</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                  <span>Critical hit and fire rate optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                  <span>Balanced offense and defense</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-green-500/30 bg-card/80 backdrop-blur-sm hover-elevate">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center border-2 border-green-500/50">
                  <Heart className="w-6 h-6 text-green-400" />
                </div>
                <CardTitle className="text-2xl uppercase">Support</CardTitle>
              </div>
              <CardDescription className="text-base">
                Best Healing Kit (Not Damage)
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2 shrink-0" />
                  <span>Enhanced healing output and efficiency</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2 shrink-0" />
                  <span>Area healing and burst healing builds</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2 shrink-0" />
                  <span>Keep your team alive at all costs</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-8 uppercase text-white">
            How It Works
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-md bg-primary/20 flex items-center justify-center">
                    <Trophy className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle>Choose Your Class</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Select Tank, Damage, or Support based on your role. Each class has optimized build paths tailored to their strengths.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-md bg-primary/20 flex items-center justify-center">
                    <Coins className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle>Input Your Credits</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Enter how many credits you earned. The calculator will show you what items and powers you can afford.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-md bg-primary/20 flex items-center justify-center">
                    <Target className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle>Round-by-Round Guidance</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Navigate through rounds 1-7 and get specific recommendations for each phase of the match.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-md bg-primary/20 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle>Optimized Builds</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Get the best items and powers for your class, optimized for maximum effectiveness against opponents.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Features List */}
        <Card className="bg-card/80 backdrop-blur-sm mb-12">
          <CardHeader>
            <CardTitle className="text-2xl text-center uppercase">Key Features</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <Hexagon className="w-5 h-5 text-primary shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold mb-1">Class-Specific Builds</h4>
                  <p className="text-sm text-muted-foreground">
                    Tank focuses on survivability, Damage on output + defense, Support on pure healing
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <ShoppingCart className="w-5 h-5 text-primary shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold mb-1">Smart Purchasing</h4>
                  <p className="text-sm text-muted-foreground">
                    See only items you can afford and track what you've purchased
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Target className="w-5 h-5 text-primary shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold mb-1">Strategic Tips</h4>
                  <p className="text-sm text-muted-foreground">
                    Each round includes strategy tips to guide your decision-making
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-primary shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold mb-1">Offline Access</h4>
                  <p className="text-sm text-muted-foreground">
                    Works completely offline - no internet connection required
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center">
          <div className="inline-block bg-card/80 backdrop-blur-sm border border-border rounded-lg p-8">
            <h3 className="text-2xl md:text-3xl font-display font-bold mb-4 uppercase text-white">
              Ready to Optimize Your Build?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-xl">
              Start making smarter purchasing decisions and dominate the Stadium arena with optimized builds
            </p>
            <Button 
              size="lg"
              className="text-lg px-8 py-6"
              onClick={() => setLocation('/calculator')}
              data-testid="button-start-calculator"
            >
              Launch Calculator <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
