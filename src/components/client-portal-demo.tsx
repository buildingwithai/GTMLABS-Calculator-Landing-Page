import { CheckCircle2, Slack, MessageSquare } from "lucide-react";
import AnimatedSection from "./animated-section";

export default function ClientPortalDemo() {
  return (
    <section className="py-24" style={{ background: "#E9EEFE" }}>
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-[#C5BAFF]/30 rounded-full text-black text-sm font-medium mb-4">
            CLIENT EXPERIENCE
          </div>
          <h2 className="text-4xl font-bold mb-4 text-black">
            Client Portal Interactive Demo
          </h2>
          <p className="text-[#4A4A4A] max-w-2xl mx-auto">
            See how our client portal makes competitive intelligence
            collaboration seamless
          </p>
        </AnimatedSection>

        <div className="max-w-6xl mx-auto bg-white rounded-xl overflow-hidden border border-[#C5BAFF]/30 shadow-lg">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Left column - Features */}
            <div className="p-8 space-y-8">
              <AnimatedSection>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#E8F4E3] flex items-center justify-center shrink-0 text-black">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-black">
                      Task Assignment & Progress Tracking
                    </h3>
                    <p className="text-[#4A4A4A]">
                      Tasks broken down into clear, actionable items with
                      real-time progress updates.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={100}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#FFE8D1] flex items-center justify-center shrink-0 text-black">
                    <Slack className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-black">
                      Real-time Slack Integration
                    </h3>
                    <p className="text-[#4A4A4A]">
                      Communication streamlined directly into your existing
                      channels for seamless updates.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#E9EEFE] flex items-center justify-center shrink-0 text-black">
                    <MessageSquare className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-black">
                      Interactive Annotation Tool
                    </h3>
                    <p className="text-[#4A4A4A]">
                      Highlight, circle, and leave notes directly on
                      deliverables for clear feedback.
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Right column - Portal Demo */}
            <AnimatedSection delay={300} className="bg-[#F2F2F2] p-6">
              <div className="bg-white rounded-xl h-full overflow-hidden border border-[#E8F4E3] shadow-sm p-4">
                <div className="border-b border-[#E8F4E3] pb-4 mb-4">
                  <h4 className="font-semibold text-black mb-1">
                    Current Projects
                  </h4>
                  <p className="text-sm text-[#4A4A4A]">2 active projects</p>
                </div>

                <div className="space-y-4">
                  <div className="bg-[#F2F2F2] rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h5 className="font-medium text-black">
                        Competitor Analysis: TechRival Inc
                      </h5>
                      <span className="text-xs bg-[#E8F4E3] text-black px-2 py-1 rounded-full">
                        In Progress
                      </span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-[#99F67E] flex items-center justify-center text-white text-xs">
                          ✓
                        </div>
                        <span className="text-sm text-[#4A4A4A] line-through">
                          Initial data gathering
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-[#99F67E] flex items-center justify-center text-white text-xs">
                          ✓
                        </div>
                        <span className="text-sm text-[#4A4A4A] line-through">
                          Feature comparison matrix
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full border border-[#4A4A4A] flex items-center justify-center text-white text-xs">
                          &nbsp;
                        </div>
                        <span className="text-sm text-black">
                          Pricing strategy analysis
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#F2F2F2] rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h5 className="font-medium text-black">
                        Battle Cards: Sales Enablement
                      </h5>
                      <span className="text-xs bg-[#FFE8D1] text-[#FF9064] px-2 py-1 rounded-full">
                        Review
                      </span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-[#99F67E] flex items-center justify-center text-white text-xs">
                          ✓
                        </div>
                        <span className="text-sm text-[#4A4A4A] line-through">
                          Competitor positioning
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-[#99F67E] flex items-center justify-center text-white text-xs">
                          ✓
                        </div>
                        <span className="text-sm text-[#4A4A4A] line-through">
                          Key differentiators
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-[#99F67E] flex items-center justify-center text-white text-xs">
                          ✓
                        </div>
                        <span className="text-sm text-[#4A4A4A] line-through">
                          Objection handling
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 text-center">
                    <a
                      href="#strategy-session"
                      className="inline-block px-4 py-2 bg-black text-white rounded-md text-sm font-medium hover:bg-[#99F67E] hover:text-black transition-colors"
                    >
                      View Full Dashboard
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
