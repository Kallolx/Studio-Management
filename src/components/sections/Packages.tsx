import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { BorderGlow } from "@/components/common/BorderGlow";
import { GradientButton } from "@/components/common/GradientButton";
import { packages } from "@/data/packages";
import type { Package } from "@/types";
import { ArrowRight, Check, Star } from "lucide-react";
import { Link } from "@tanstack/react-router";

function PackageCard({ pkg }: { pkg: Package }) {
  return (
    <div className="relative h-full pt-4">
      {pkg.popular && (
        <div
          className="absolute top-[5px] left-1/2 -translate-x-1/2 z-10 rounded-full px-3.5 py-0.5 text-[10px] font-bold text-[#f5d59a] shadow-[0_0_12px_rgba(168,85,247,0.35)] flex items-center justify-center gap-1.5 whitespace-nowrap"
          style={{
            border: "1px solid transparent",
            background:
              "linear-gradient(#121114, #121114) padding-box, linear-gradient(to right, #d2a153, #f472b6, #a855f7) border-box",
          }}
        >
          <Star className="h-3 w-3 fill-[#d2a153] text-[#d2a153] shrink-0" />
          <span>Best Value</span>
        </div>
      )}

      <BorderGlow
        className={`w-full h-full transition-all duration-300 ${pkg.popular ? "always-glow" : ""}`}
        backgroundColor={pkg.popular ? "#121114" : "#0d0c0e"}
        borderRadius={12}
        glowRadius={30}
        edgeSensitivity={30}
        glowIntensity={pkg.popular ? 0.55 : 0.25}
        glowColor="40 80 80"
        colors={pkg.popular ? ["#d2a153", "#f472b6", "#a855f7"] : ["#1a191d", "#d2a153", "#1a191d"]}
        animated={pkg.popular}
      >
        <div className="flex flex-col pt-8 pb-6 px-6 h-full w-full">
          {pkg.icon && (
            <div className="relative mx-auto mb-2 flex h-20 w-20 items-center justify-center">
              <div className="absolute inset-2 -z-10 rounded-full bg-gradient-to-tr from-[#d2a153]/35 to-[#a855f7]/25 blur-xl opacity-90" />
              <img
                src={pkg.icon}
                alt={pkg.title}
                className="h-20 w-20 object-contain relative z-10"
              />
            </div>
          )}

          <h3 className="text-2xl font-bold text-white text-center font-serif tracking-tight">
            {pkg.title
              .replace(/\bPackage\b/gi, "")
              .replace(/\s*[–-]\s*/g, " ")
              .replace(/\s+/g, " ")
              .trim()}
          </h3>
          <p className="mt-2 text-xs text-neutral-400 text-center line-clamp-2">
            {pkg.description}
          </p>

          <div
            className="mt-4 text-center text-[#d2a153] font-bold"
            style={{ fontFamily: "'Old Standard TT', 'Times New Roman', serif" }}
          >
            <span className="text-lg align-top mr-0.5 font-medium">৳</span>
            <span className="text-3xl font-extrabold">{pkg.price.replace("৳", "")}</span>
            <span className="text-xs text-neutral-400 ml-1.5 font-normal font-sans">/ Session</span>
          </div>

          <div className="my-5 border-t border-white/10" />

          <ul className="space-y-3.5 text-sm text-neutral-300 flex-1 mb-8">
            {pkg.features.map((f) => (
              <li
                key={f}
                className="flex items-start justify-start gap-3 text-left text-sm font-medium text-neutral-200"
              >
                <Check className="h-4 w-4 shrink-0 text-[#d2a153] mt-0.5" />
                <span>{f}</span>
              </li>
            ))}
          </ul>

          {pkg.popular ? (
            <GradientButton className="w-full">Book Now</GradientButton>
          ) : (
            <a
              href="#contact"
              className="border border-[#d2a153]/50 hover:border-transparent text-[#f5d59a] hover:text-neutral-900 bg-transparent hover:bg-gradient-to-r hover:from-[#f5d59a] hover:to-[#d2a153] transition-all duration-300 rounded-full px-6 py-2.5 text-sm font-semibold inline-flex items-center justify-center gap-2 group cursor-pointer w-full"
            >
              <span>Book Now</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          )}
        </div>
      </BorderGlow>
    </div>
  );
}

export function Packages() {
  return (
    <section id="packages" className="border-t border-white/10 py-20">
      <Container>
        <SectionHeading
          label="Packages"
          title="Simple packages. Powerful results."
          description="Choose a package that fits your project. Custom options available on request."
          align="center"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {packages.slice(0, 4).map((p) => (
            <PackageCard key={p.title} pkg={p} />
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <Link
            to="/pricing"
            className="border border-[#d2a153]/50 hover:border-transparent text-[#f5d59a] hover:text-neutral-900 bg-transparent hover:bg-gradient-to-r hover:from-[#f5d59a] hover:to-[#d2a153] transition-all duration-300 rounded-full px-8 py-3 text-sm font-semibold inline-flex items-center justify-center gap-2 group cursor-pointer shadow-lg"
          >
            <span>See All Packages</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
