import { Check, Calendar } from "lucide-react";
import AnimatedSection from "./animated-section";

export default function StrategySession() {
  const benefits = [
    "Cancel anytime - no long-term contracts",
    "Scale hours up or down as needed",
    "Expert-level talent, ready to start now",
    "Save 40-60% compared to alternatives",
  ];

  return (
    <section id="strategy-session" className="py-24 bg-background relative">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background opacity-70" />

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Transform Your Product Marketing?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get expert product marketing without the overhead. Start with a
            no-obligation discovery call.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div className="max-w-6xl mx-auto bg-card rounded-xl shadow-lg border border-border/50 overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Left column - Content */}
              <div className="p-8 md:p-10 space-y-6">
                <div>
                  <h3 className="text-3xl font-bold mb-3">Let's Chat</h3>
                  <p className="text-muted-foreground">
                    Book a 30-minute coffee chat to discuss your product
                    marketing needs.
                  </p>
                </div>

                <div className="space-y-4 pt-2">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3 group">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-0.5 group-hover:bg-primary/30 transition-all duration-300">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="group-hover:text-primary transition-colors">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary border-2 border-primary/20">
                      <Calendar className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Jovanny Tovar</h4>
                      <p className="text-sm text-muted-foreground">
                        Fractional Product Marketing Manager
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Get hands-on, personalized product marketing support from an
                    experienced professional who understands your industry
                    challenges.
                  </p>
                </div>
              </div>

              {/* Right column - Calendar */}
              <div className="bg-background/50 p-4 rounded-r-xl overflow-hidden">
                <div className="bg-card rounded-xl h-full overflow-hidden border border-border/30 shadow-sm">
                  <iframe
                    src="https://zcal.co/i/mbIVKLmm?embed=1&embedType=iframe"
                    loading="lazy"
                    style={{
                      border: "none",
                      width: "100%",
                      height: "600px",
                      minHeight: "544px",
                      borderRadius: "0.75rem",
                    }}
                    id="zcal-invite"
                    title="Schedule a strategy session"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
