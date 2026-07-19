import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { BorderGlow } from "@/components/common/BorderGlow";
import { GradientButton } from "@/components/common/GradientButton";
import { packages, studioRentalZones } from "@/data/packages";
import { ArrowRight, Check, Star } from "lucide-react";
import { Link } from "@tanstack/react-router";

interface CardProps {
  title: string;
  description: string;
  price: string;
  unit?: string;
  features: string[];
  iconPath: string;
  popular?: boolean;
  note?: string;
}

function PackageCard({ pkg }: { pkg: CardProps }) {
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
          {pkg.iconPath && (
            <div className="relative mx-auto mb-2 flex h-20 w-20 items-center justify-center">
              <div className="absolute inset-2 -z-10 rounded-full bg-gradient-to-tr from-[#d2a153]/35 to-[#a855f7]/25 blur-xl opacity-90" />
              <img
                src={pkg.iconPath}
                alt={pkg.title}
                className="h-20 w-20 object-contain relative z-10"
              />
            </div>
          )}

          <h3 className="text-xl font-bold text-white text-center font-serif tracking-tight leading-tight">
            {pkg.title
              .replace(/\bPackage\b/gi, "")
              .replace(/\s*[–-]\s*/g, " ")
              .replace(/\s+/g, " ")
              .trim()}
          </h3>
          <p className="mt-2 text-xs text-neutral-400 text-center line-clamp-2 min-h-[2rem]">
            {pkg.description}
          </p>

          <div
            className="mt-4 text-center text-[#d2a153] font-bold"
            style={{ fontFamily: "'Old Standard TT', 'Times New Roman', serif" }}
          >
            <span className="text-lg align-top mr-0.5 font-medium">৳</span>
            <span className="text-3xl font-extrabold">{pkg.price.replace("৳", "")}</span>
            <span className="text-xs text-neutral-400 ml-1.5 font-normal font-sans">{pkg.unit || "/ Session"}</span>
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

          {pkg.note && (
            <p className="mt-4 text-[10px] text-neutral-500 text-center leading-relaxed font-light">
              {pkg.note}
            </p>
          )}
        </div>
      </BorderGlow>
    </div>
  );
}

export function Packages() {
  return (
    <section id="packages" className="border-t border-white/10 py-20 bg-neutral-950/20">
      <Container className="space-y-24">
        {/* Main Section Heading */}
        <SectionHeading
          label="Pricing Plans"
          title="Simple packages. Powerful results."
          description="Choose a package that fits your project. Custom options available on request."
          align="center"
        />

        {/* Category 1: Podcast Studio Packages */}
        <div className="space-y-10">
          <div className="text-center border-b border-white/5 pb-5">
            <h3 className="font-serif text-3xl font-semibold text-[#f5d59a]">
              Podcast Studio Packages
            </h3>
            <p className="mt-2 text-sm text-neutral-400 max-w-md mx-auto">
              Full-service audio and video podcast recordings inside our acoustically optimized floor.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 justify-center">
            {packages.map((pkg, idx) => (
              <PackageCard
                key={pkg.title}
                pkg={{
                  title: pkg.title,
                  description: pkg.description,
                  price: pkg.price,
                  unit: "/ Session",
                  features: pkg.features,
                  iconPath: pkg.icon || `/price/${(idx % 4) + 1}.webp`,
                  popular: pkg.popular,
                }}
              />
            ))}
          </div>
        </div>

        {/* Category 2: Studio Rental Zones */}
        <div className="space-y-16">
          <div className="text-center border-b border-white/5 pb-5">
            <h3 className="font-serif text-3xl font-semibold text-[#f5d59a]">
              Studio Space Rental Tiers
            </h3>
            <p className="mt-2 text-sm text-neutral-400 max-w-md mx-auto">
              Rent our professional studio floors. Ideal for podcasts, video content, photoshoots, and fashion sets.
            </p>
          </div>

          {studioRentalZones.map((zone) => (
            <div key={zone.title} className="space-y-8">
              <div className="text-center lg:text-left flex flex-col lg:flex-row lg:items-end justify-between border-b border-white/5 pb-4">
                <div>
                  <div className="flex items-center justify-center lg:justify-start gap-3">
                    <h4 className="font-serif text-2xl font-semibold text-white">
                      {zone.title}
                    </h4>
                    <span className="rounded-full bg-[#d2a153]/15 text-[#d2a153] border border-[#d2a153]/25 px-2.5 py-0.5 text-xs font-bold font-sans">
                      {zone.size}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-neutral-400 font-light">
                    {zone.description}
                  </p>
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 justify-center">
                {zone.tiers.map((tier, idx) => {
                  const unitSuffix =
                    idx === 0
                      ? "/ Hour"
                      : idx === 1
                        ? "/ 2 Hours"
                        : idx === 2
                          ? "/ 6 Hours"
                          : "/ 10 Hours";
                  return (
                    <PackageCard
                      key={tier.name}
                      pkg={{
                        title: tier.name,
                        description: "Clean professional studio floor space.",
                        price: tier.price,
                        unit: unitSuffix,
                        features: tier.features,
                        iconPath: `/price/${(idx % 4) + 1}.webp`,
                        note: zone.note,
                      }}
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Global Redirect Button */}
        <div className="flex justify-center pt-4">
          <Link
            to="/pricing"
            className="border border-[#d2a153]/50 hover:border-transparent text-[#f5d59a] hover:text-neutral-900 bg-transparent hover:bg-gradient-to-r hover:from-[#f5d59a] hover:to-[#d2a153] transition-all duration-300 rounded-full px-8 py-3 text-sm font-semibold inline-flex items-center justify-center gap-2 group cursor-pointer shadow-lg"
          >
            <span>See Detailed Pricing Sheet</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
