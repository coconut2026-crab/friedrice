import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Lock, Shield, Zap, Eye, Github, ArrowRight } from "lucide-react";
import mangaLock from "@/assets/manga-lock.png";
import mangaEncrypt from "@/assets/manga-encrypt.png";
import mangaShield from "@/assets/manga-shield.png";

const Landing = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      {/* Cyber grid background */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-accent/5 to-transparent" />
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 blur-[120px] rounded-full" />
        <div className="relative max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
          {/* Manga hero mascot */}
          <img src={mangaLock} alt="Cipher mascot" width={120} height={120} className="mx-auto mb-4 drop-shadow-[0_0_20px_hsl(8,90%,55%,0.4)]" />
          <p className="text-xs sm:text-sm font-heading tracking-[0.4em] text-accent mb-4 uppercase">
            🍜 Fresh from the digital kitchen
          </p>
          <h1 className="text-7xl sm:text-9xl font-heading text-glow text-primary tracking-widest mb-3">
            CIPHER
          </h1>
          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6" />
          <p className="text-lg sm:text-xl text-muted-foreground font-body font-light max-w-lg mx-auto mb-2 leading-relaxed">
            Keep your images safe & private — right in your browser.
            No uploads. No accounts. Just you and your secret recipe.
          </p>
          <p className="text-sm text-accent/70 font-body tracking-wider mb-8">
            Fast as instant noodles. Secure as a vault.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link to="/app">
              <Button size="lg" className="neon-glow font-heading text-lg tracking-wider gap-2 px-8">
                Start Encrypting <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="lg" className="font-heading text-lg tracking-wider gap-2 border-primary/30 hover:border-primary/60">
                <Github className="w-5 h-5" /> Source
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Intro speech bubble */}
      <section className="max-w-3xl mx-auto px-6 -mt-6 mb-10 relative">
        <div className="relative bg-primary/10 border border-primary/25 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
          {/* Speech bubble tail */}
          <div className="absolute -top-3 left-12 w-6 h-6 bg-primary/10 border-l border-t border-primary/25 rotate-45" />
          <div className="flex items-start gap-4">
            <img src={mangaLock} alt="" width={56} height={56} className="shrink-0 mt-1 hidden sm:block" />
            <div>
              <p className="text-xs font-heading tracking-[0.3em] text-accent mb-2 uppercase">🐱 Hey there, adventurer!</p>
              <p className="text-sm sm:text-base text-foreground/90 font-body leading-relaxed mb-2">
                <span className="text-primary font-semibold">✨ The Quest:</span> Got pictures you want to keep just for you?
                A secret sketch, a surprise gift photo, or your ultimate ramen recipe? We've got your back!
              </p>
              <p className="text-sm sm:text-base text-foreground/90 font-body leading-relaxed mb-2">
                <span className="text-accent font-semibold">🔮 The Magic:</span> CIPHER turns your images into scrambled mystery data that nobody can read — except you and your password. It all happens right here, instantly, like a spell cast in your browser!
              </p>
              <p className="text-sm sm:text-base text-foreground/90 font-body leading-relaxed">
                <span className="text-primary font-semibold">🎉 The Best Part:</span> No accounts, no uploads, no worries. Your images never leave your device. It's free, open source, and as easy as ordering your favorite bowl of ramen. Drop, lock, done!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Neon divider */}
      <div className="max-w-xs mx-auto h-px bg-gradient-to-r from-transparent via-accent to-transparent" />

      {/* Features with manga illustrations */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <p className="text-xs font-heading tracking-[0.5em] text-center text-muted-foreground mb-2">
          — WHAT'S ON THE MENU —
        </p>
        <h2 className="text-3xl sm:text-4xl font-heading text-center text-accent text-glow-accent tracking-widest mb-14">
          Premium Ingredients
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <FeatureCard
            icon={<Shield className="w-7 h-7 text-primary" />}
            title="Top-Shelf Protection"
            description="Your images are wrapped in the same powerful encryption used by banks and security pros worldwide. Think of it as a titanium lockbox for your photos."
            manga={mangaShield}
          />
          <FeatureCard
            icon={<Lock className="w-7 h-7 text-primary" />}
            title="Your Password, Your Key"
            description="We turn your password into an incredibly strong digital key through 100,000 rounds of processing. It's like tempering steel — the more you fold it, the stronger it gets."
            manga={mangaLock}
          />
          <FeatureCard
            icon={<Zap className="w-7 h-7 text-accent" />}
            title="Built-In Power"
            description="No extra downloads or sketchy plugins needed. CIPHER runs on your browser's own secure engine — fast, reliable, and already on your device."
            manga={mangaEncrypt}
          />
          <FeatureCard
            icon={<Eye className="w-7 h-7 text-accent" />}
            title="Truly Private"
            description="Your images stay on your device the entire time. Nothing is sent anywhere. When you close the tab, it vanishes — like steam from a fresh bowl of ramen."
            manga={mangaShield}
          />
        </div>
      </section>

      {/* Neon divider */}
      <div className="max-w-xs mx-auto h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

      {/* How it works */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs font-heading tracking-[0.5em] text-muted-foreground mb-2">
            — THREE EASY STEPS —
          </p>
          <h2 className="text-3xl sm:text-4xl font-heading text-accent text-glow-accent tracking-widest mb-12">
            Simple as 1-2-3
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            <Step num="01" title="Drop It In" text="Drag your image into the bowl — or click to pick from your files." emoji="📸" />
            <Step num="02" title="Season It" text="Add your secret password. CIPHER does the rest in milliseconds." emoji="🔐" />
            <Step num="03" title="Serve It Up" text="Download your encrypted file. Only your password can open it again." emoji="📦" />
          </div>
        </div>
      </section>

      {/* Neon divider */}
      <div className="max-w-xs mx-auto h-px bg-gradient-to-r from-transparent via-accent to-transparent" />

      {/* Demo section */}
      <section className="py-20">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <img src={mangaEncrypt} alt="Try it out" loading="lazy" width={100} height={100} className="mx-auto mb-6 opacity-80" />
          <h2 className="text-2xl sm:text-3xl font-heading text-foreground tracking-widest mb-3">
            Curious? Try it now!
          </h2>
          <p className="text-muted-foreground font-body text-sm mb-6 tracking-wide max-w-md mx-auto">
            Use the built-in sample image to see encryption in action — no files needed. Watch your image turn into scrambled data before your eyes!
          </p>
          <Link to="/app">
            <Button size="lg" className="neon-glow font-heading text-lg tracking-widest px-10 gap-2">
              Try Sample Demo <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Neon divider */}
      <div className="max-w-xs mx-auto h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="text-4xl mb-4">🍜</p>
          <h2 className="text-2xl sm:text-3xl font-heading text-foreground tracking-widest mb-3">
            Ready to protect your images?
          </h2>
          <p className="text-muted-foreground font-body text-sm mb-8 tracking-wide">
            Open source · MIT License · Free forever · Made with ❤️
          </p>
          <Link to="/app">
            <Button size="lg" className="neon-glow font-heading text-xl tracking-widest px-12 py-6 gap-2">
              Let's Go <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer glow */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="text-center py-6">
        <p className="text-xs text-muted-foreground font-body tracking-wider">
          🐱 CIPHER © {new Date().getFullYear()} — Cooked with love, served with encryption. Itadakimasu! 🍜
        </p>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description, manga }: { icon: React.ReactNode; title: string; description: string; manga?: string }) => (
  <div className="bg-card/50 border border-border rounded-lg p-6 hover:border-primary/40 transition-all duration-300 hover:bg-card/80 backdrop-blur-sm group relative overflow-hidden">
    {manga && (
      <img src={manga} alt="" loading="lazy" width={80} height={80} className="absolute -right-2 -bottom-2 opacity-10 group-hover:opacity-25 transition-opacity duration-500 pointer-events-none" />
    )}
    <div className="relative">
      <div className="mb-3 group-hover:scale-110 transition-transform duration-300">{icon}</div>
      <h3 className="text-xl font-heading tracking-wider text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground font-body font-light leading-relaxed">{description}</p>
    </div>
  </div>
);

const Step = ({ num, title, text, emoji }: { num: string; title: string; text: string; emoji: string }) => (
  <div className="group">
    <span className="text-2xl mb-2 block">{emoji}</span>
    <span className="text-5xl font-heading text-primary text-glow group-hover:text-accent transition-colors duration-300">{num}</span>
    <h3 className="text-lg font-heading tracking-wider text-foreground mt-2 mb-1">{title}</h3>
    <p className="text-sm text-muted-foreground font-body font-light">{text}</p>
  </div>
);

export default Landing;
