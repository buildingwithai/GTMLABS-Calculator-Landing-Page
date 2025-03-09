import { Zap, MessageSquare, Clock } from "lucide-react";
import BenefitCard from "./benefit-card";
import AnimatedSection from "./animated-section";

export default function BenefitsSection() {
  const benefits = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Faster Launches",
      description:
        "Accelerate your product launches with expert messaging, positioning, and go-to-market strategies that resonate with your target audience.",
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Expert Messaging",
      description:
        "Craft compelling product narratives and value propositions that clearly communicate your unique benefits and drive customer engagement.",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Flexible Plans",
      description:
        "Scale your product marketing resources up or down as needed, paying only for the hours you use with no long-term commitments.",
    },
  ];

  return (
    <section id="benefits" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Why Choose Fractional Product Marketing
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get all the benefits of expert product marketing without the
            overhead of a full-time hire
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <BenefitCard
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
