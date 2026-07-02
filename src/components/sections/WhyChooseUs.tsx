import { Container } from "@/components/common/Container";
import { Check, ArrowRight } from "lucide-react";

export function WhyChooseUs() {
  return (
    <section className="py-24 border-t border-white/5 bg-gradient-to-b from-transparent to-[#0d0c0e]/30">
      <Container>
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading and Info */}
          <div className="lg:w-5/12 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#d2a153]">
              The Star Vibe Difference
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold leading-tight text-white">
              Why Choose Studio Star Vibe?
            </h2>
            <p className="text-sm text-neutral-400 leading-relaxed font-light">
              We provide creators, brands, and artists with a world-class production ecosystem. From
              top-tier cinema gear to post-production support, we ensure your media stands out with
              absolute perfection.
            </p>
          </div>

          {/* Right Column: Borderless Grid of Reasons */}
          <div className="lg:w-7/12 w-full">
            <div className="grid gap-y-6 gap-x-8 sm:grid-cols-2">
              {[
                "10+ Years of Media Experience",
                "Professional Podcast & Video Studio",
                "Sony 4K Cinema Cameras",
                "Broadcast-Quality Rode Audio System",
                "Creative & Technical Production Team",
                "Professional Lighting Setup",
                "Air Conditioned Studio",
                "Makeup & Changing Room",
                "Post Production Services",
                "Social Media Content Expertise",
                "Film & Commercial Production Support",
              ].map((reason, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3.5 group cursor-default transition-all duration-300"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#d2a153]/10 border border-[#d2a153]/25 text-[#d2a153] mt-0.5 group-hover:bg-[#d2a153] group-hover:text-neutral-900 group-hover:scale-105 transition-all duration-300">
                    <Check className="h-3 w-3 stroke-[3]" />
                  </span>
                  <span className="text-sm font-medium text-neutral-300 group-hover:text-white transition-colors duration-300 leading-snug">
                    {reason}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
