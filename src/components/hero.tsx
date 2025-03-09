import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "./ui/button";
import CostCalculator from "./cost-calculator";
import AnimatedSection from "./animated-section";

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-background pt-16 pb-24">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />

      <div className="relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Expert Product Marketing,{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70">
                  On-Demand
                </span>
              </h1>

              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Get fractional product marketing expertise at a fraction of the
                cost. No long-term contracts, no overhead—just results.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button asChild size="lg" className="rounded-md">
                  <Link href="#strategy-session">
                    Get Started
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="glassmorphic"
                  size="lg"
                  className="rounded-md"
                >
                  <Link href="/#how-it-works">How It Works</Link>
                </Button>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center flex-wrap gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary" />
                  <span>No long-term contracts</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary" />
                  <span>Expert product marketers</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary" />
                  <span>Scale up or down anytime</span>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection
              delay={200}
              className="w-full max-w-xl mx-auto lg:mx-0"
            >
              <CostCalculator />
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  );
}
