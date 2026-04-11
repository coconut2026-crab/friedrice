import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Lock, Shield, Zap, Eye, Github, ArrowRight } from "lucide-react";

const Landing = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="relative max-w-4xl mx-auto px-6 pt-20 pb-16 text-center">
          <h1 className="text-6xl sm:text-8xl font-heading text-glow text-primary tracking-widest mb-2">
            CIPHER
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground font-body font-light max-w-xl mx-auto mb-4">
            Military-grade image encryption that runs entirely in your browser.
            No servers. No uploads. No trace.
          </p>
          <div className="flex items-center justify-center gap-4 mt-8">
            <Link to="/app">
              <Button size="lg" className="neon-glow font-heading text-lg tracking-wider gap-2">
                Launch App <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="lg" className="font-heading text-lg tracking-wider gap-2">
                <Github className="w-5 h-5" /> GitHub
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl sm:text-4xl font-heading text-center text-accent text-glow-accent tracking-widest mb-12">
          Zero-Trust Architecture
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <FeatureCard
            icon={<Shield className="w-8 h-8 text-primary" />}
            title="AES-256-GCM"
            description="The same encryption standard trusted by governments and financial institutions worldwide. Your images are locked with authenticated encryption that detects any tampering."
          />
          <FeatureCard
            icon={<Lock className="w-8 h-8 text-primary" />}
            title="PBKDF2 Key Derivation"
            description="100,000 iterations of SHA-256 hashing transform your password into an unbreakable cryptographic key. Brute-force attacks become computationally infeasible."
          />
          <FeatureCard
            icon={<Zap className="w-8 h-8 text-accent" />}
            title="Web Crypto API"
            description="No third-party crypto libraries. CIPHER leverages your browser's native cryptographic engine — hardware-accelerated, audited, and battle-tested."
          />
          <FeatureCard
            icon={<Eye className="w-8 h-8 text-accent" />}
            title="True Client-Side"
            description="Your images never leave your device. No network requests, no server processing, no logs. When you close the tab, it's gone — like it never happened."
          />
        </div>
      </section>

      {/* How it works */}
      <section className="border-t border-border">
        <div className="max-w-3xl mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-heading text-accent text-glow-accent tracking-widest mb-10">
            How It Works
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <Step num="01" title="Drop" text="Drag your image into the app or click to browse." />
            <Step num="02" title="Lock" text="Set a password. CIPHER derives a 256-bit key and encrypts." />
            <Step num="03" title="Export" text="Download the .enc file. Only the password can unlock it." />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border">
        <div className="max-w-2xl mx-auto px-6 py-16 text-center">
          <p className="text-muted-foreground font-body text-sm mb-6 tracking-wide uppercase">
            Open source · MIT License · Free forever
          </p>
          <Link to="/app">
            <Button size="lg" className="neon-glow font-heading text-xl tracking-widest px-12 py-6 gap-2">
              Encrypt Now <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/40 transition-colors">
    <div className="mb-3">{icon}</div>
    <h3 className="text-xl font-heading tracking-wider text-foreground mb-2">{title}</h3>
    <p className="text-sm text-muted-foreground font-body font-light leading-relaxed">{description}</p>
  </div>
);

const Step = ({ num, title, text }: { num: string; title: string; text: string }) => (
  <div>
    <span className="text-4xl font-heading text-primary text-glow">{num}</span>
    <h3 className="text-lg font-heading tracking-wider text-foreground mt-2 mb-1">{title}</h3>
    <p className="text-sm text-muted-foreground font-body font-light">{text}</p>
  </div>
);

export default Landing;
