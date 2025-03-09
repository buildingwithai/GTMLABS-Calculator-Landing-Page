import {
  CheckCircle2,
  MessageSquare,
  Calendar,
  Zap,
  Users,
} from "lucide-react";
import AnimatedSection from "./animated-section";
import Image from "next/image";

export default function HowItWorks() {
  const steps = [
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Schedule a Consultation",
      description:
        "We'll discuss your needs and goals to determine the right level of support.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Meet Your Expert",
      description:
        "Get matched with a seasoned product marketing expert who understands your industry.",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Customize Your Plan",
      description:
        "Choose your weekly hours and service focus areas, from messaging to go-to-market.",
    },
    {
      icon: <CheckCircle2 className="h-6 w-6" />,
      title: "Begin Collaboration",
      description:
        "Your expert seamlessly integrates with your team and starts delivering immediate value.",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
          <div className="lg:w-1/2">
            <AnimatedSection>
              <div className="inline-block px-4 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
                THE PROCESS
              </div>
              <h2 className="text-4xl font-bold mb-4">How It Works</h2>
              <p className="text-muted-foreground mb-10">
                Our streamlined process gets you the product marketing support
                you need without unnecessary complexity.
              </p>

              <div className="space-y-8">
                {steps.map((step, index) => (
                  <AnimatedSection
                    key={index}
                    delay={index * 100}
                    className="flex items-start gap-4"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                      {step.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={200} className="lg:w-1/2">
            <div className="bg-card rounded-xl overflow-hidden border border-border/40 shadow-lg p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Calendar className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold">Client Portal</h4>
                  <p className="text-sm text-muted-foreground">
                    Track hours and projects
                  </p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Weekly hours used</span>
                    <span className="text-primary">16/20</span>
                  </div>
                  <div className="w-full bg-background rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full"
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                </div>

                <div className="flex justify-between">
                  <span className="text-sm">Active projects</span>
                  <span>2</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-sm">Next meeting</span>
                  <span>Tomorrow, 2:00 PM</span>
                </div>
              </div>

              <div className="py-3 px-4 bg-background/50 rounded-lg flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                    <Users className="h-3.5 w-3.5" />
                  </div>
                  <span className="text-sm">Pause service</span>
                </div>
                <div className="w-10 h-5 bg-background rounded-full relative">
                  <div className="absolute right-0.5 top-0.5 w-4 h-4 rounded-full bg-muted-foreground/30"></div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-primary/10 rounded-lg p-4 text-center">
                  <div className="text-primary hover:text-primary/80 transition-colors text-sm mb-1">
                    Documents
                  </div>
                  <div className="text-2xl font-bold">12</div>
                </div>
                <div className="bg-primary/10 rounded-lg p-4 text-center">
                  <div className="text-primary hover:text-primary/80 transition-colors text-sm mb-1">
                    Hours saved
                  </div>
                  <div className="text-2xl font-bold">128</div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
