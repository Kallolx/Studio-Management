import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BookingCTA } from "@/components/sections/BookingCTA";
import { Container } from "@/components/common/Container";
import { BorderGlow } from "@/components/common/BorderGlow";
import { GradientButton } from "@/components/common/GradientButton";
import {
  packages,
  singerPackages,
  postProductionServices,
  studioRentalZones,
} from "@/data/packages";
import { ArrowLeft, ArrowRight, Check, Star } from "lucide-react";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing & Packages — Studio Star Vibe" },
      {
        name: "description",
        content:
          "Transparent packages for Podcast Production, Singer Performance, Post Production, and Studio Rentals in Dhaka.",
      },
    ],
  }),
  component: PricingPage,
});

// A unified premium card component matching the exact landing page design
function UnifiedPriceCard({
  title,
  description,
  price,
  unit,
  features,
  iconPath,
  popular,
  note,
  isStartingPrice = false,
}: {
  title: string;
  description: string;
  price: string;
  unit?: string;
  features: string[];
  iconPath: string;
  popular?: boolean;
  note?: string;
  isStartingPrice?: boolean;
}) {
  return (
    <div className="relative h-full pt-4">
      {popular && (
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
        className={`w-full h-full transition-all duration-300 ${popular ? "always-glow" : ""}`}
        backgroundColor={popular ? "#121114" : "#0d0c0e"}
        borderRadius={12}
        glowRadius={30}
        edgeSensitivity={30}
        glowIntensity={popular ? 0.55 : 0.25}
        glowColor="40 80 80"
        colors={popular ? ["#d2a153", "#f472b6", "#a855f7"] : ["#1a191d", "#d2a153", "#1a191d"]}
        animated={popular}
      >
        <div className="flex flex-col pt-8 pb-6 px-6 h-full w-full">
          {iconPath && (
            <div className="relative mx-auto mb-2 flex h-20 w-20 items-center justify-center">
              <div className="absolute inset-2 -z-10 rounded-full bg-gradient-to-tr from-[#d2a153]/35 to-[#a855f7]/25 blur-xl opacity-90" />
              <img src={iconPath} alt={title} className="h-20 w-20 object-contain relative z-10" />
            </div>
          )}

          <h3 className="text-xl md:text-2xl font-bold text-white text-center font-serif tracking-tight leading-tight mb-2">
            {title
              .replace(/\bPackage\b/gi, "")
              .replace(/\s*[–-]\s*/g, " ")
              .replace(/\s+/g, " ")
              .trim()}
          </h3>
          {description && (
            <p className="text-xs text-neutral-400 text-center line-clamp-2 font-light">
              {description}
            </p>
          )}

          {isStartingPrice ? (
            <div className="mt-4 flex items-center justify-center gap-3">
              <span className="text-[10px] text-neutral-500 font-semibold uppercase tracking-wider">
                Starting From
              </span>
              <span
                className="text-[#d2a153] font-bold"
                style={{ fontFamily: "'Old Standard TT', 'Times New Roman', serif" }}
              >
                <span className="text-lg align-top mr-0.5 font-medium">৳</span>
                <span className="text-3xl font-extrabold">
                  {price.replace("৳", "").replace("BDT", "").trim()}
                </span>
              </span>
            </div>
          ) : (
            <div
              className="mt-4 text-center text-[#d2a153] font-bold"
              style={{ fontFamily: "'Old Standard TT', 'Times New Roman', serif" }}
            >
              <span className="text-lg align-top mr-0.5 font-medium">৳</span>
              <span className="text-3xl font-extrabold">
                {price.replace("৳", "").replace("BDT", "").trim()}
              </span>
              {unit && (
                <span className="text-xs text-neutral-400 ml-1.5 font-normal font-sans">
                  {unit}
                </span>
              )}
            </div>
          )}

          <div className="my-5 border-t border-white/10" />

          <ul className="space-y-3.5 text-sm text-neutral-300 flex-1 mb-8">
            {features.map((f) => (
              <li
                key={f}
                className="flex items-start justify-start gap-3 text-left text-sm font-medium text-neutral-200"
              >
                <Check className="h-4 w-4 shrink-0 text-[#d2a153] mt-0.5" />
                <span>{f}</span>
              </li>
            ))}
          </ul>

          {note && (
            <p className="text-[10px] text-neutral-500 mb-6 italic leading-relaxed text-center">
              * {note}
            </p>
          )}

          {popular ? (
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

function PricingPage() {
  const [activeTab, setActiveTab] = useState<"podcast" | "singer" | "post" | "rental">("podcast");

  return (
    <div className="min-h-screen bg-[#060506] text-white">
      <Navbar />

      <main>
        {/* Tab Selection Header */}
        <section className="pt-32 bg-transparent">
          <Container className="flex justify-center">
            <div className="flex flex-wrap items-center justify-center gap-2 rounded-full border border-white/10 bg-[#0d0c0e]/80 p-1.5 shadow-lg max-w-full">
              <button
                onClick={() => setActiveTab("podcast")}
                className={`rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                  activeTab === "podcast"
                    ? "bg-gradient-to-r from-[#f5d59a] to-[#d2a153] text-neutral-950 font-bold"
                    : "text-neutral-400 hover:text-white hover:bg-white/5"
                }`}
              >
                Podcast Studio
              </button>
              <button
                onClick={() => setActiveTab("singer")}
                className={`rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                  activeTab === "singer"
                    ? "bg-gradient-to-r from-[#f5d59a] to-[#d2a153] text-neutral-950 font-bold"
                    : "text-neutral-400 hover:text-white hover:bg-white/5"
                }`}
              >
                Singer Performance
              </button>
              <button
                onClick={() => setActiveTab("post")}
                className={`rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                  activeTab === "post"
                    ? "bg-gradient-to-r from-[#f5d59a] to-[#d2a153] text-neutral-950 font-bold"
                    : "text-neutral-400 hover:text-white hover:bg-white/5"
                }`}
              >
                Post Production
              </button>
              <button
                onClick={() => setActiveTab("rental")}
                className={`rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                  activeTab === "rental"
                    ? "bg-gradient-to-r from-[#f5d59a] to-[#d2a153] text-neutral-950 font-bold"
                    : "text-neutral-400 hover:text-white hover:bg-white/5"
                }`}
              >
                Studio Rental
              </button>
            </div>
          </Container>
        </section>

        {/* Dynamic Pricing Content Grid */}
        <section className="py-10">
          <Container>
            {activeTab === "podcast" && (
              <div>
                <div className="text-center mb-6">
                  <h2 className="font-serif text-3xl font-semibold text-white">
                    Podcast Studio Packages
                  </h2>
                  <p className="mt-2 text-sm text-neutral-400 max-w-md mx-auto">
                    Full-service audio and video podcast recordings inside our acoustically
                    optimized floor.
                  </p>
                </div>

                {/* 3-column layout to make cards bigger/wider, centering the grid items */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto justify-center">
                  {packages.map((pkg, idx) => (
                    <UnifiedPriceCard
                      key={pkg.title}
                      title={pkg.title}
                      description={pkg.description}
                      price={pkg.price}
                      unit="/ Session"
                      features={pkg.features}
                      iconPath={pkg.icon || `/price/${(idx % 4) + 1}.png`}
                      popular={pkg.popular}
                    />
                  ))}
                </div>
              </div>
            )}

            {activeTab === "singer" && (
              <div>
                <div className="text-center mb-12">
                  <h2 className="font-serif text-3xl font-semibold text-white">
                    Singer Performance Packages
                  </h2>
                  <p className="mt-2 text-sm text-neutral-400 max-w-md mx-auto">
                    Optimized production spaces set up for solo vocals, musical content, and music
                    video formats.
                  </p>
                </div>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto justify-center">
                  {singerPackages.map((pkg, idx) => (
                    <UnifiedPriceCard
                      key={pkg.title}
                      title={pkg.title}
                      description=""
                      price={pkg.price}
                      unit={idx === 0 ? "/ Hour" : idx === 1 ? "/ 2 Hours" : "/ 10 Hours"}
                      features={pkg.features}
                      iconPath={pkg.icon || `/price/${(idx % 4) + 1}.png`}
                      note={pkg.note}
                    />
                  ))}
                </div>
              </div>
            )}

            {activeTab === "post" && (
              <div>
                <div className="text-center mb-12">
                  <h2 className="font-serif text-3xl font-semibold text-white">
                    Post Production Services
                  </h2>
                  <p className="mt-2 text-sm text-neutral-400 max-w-md mx-auto">
                    Full-scale video and audio editing, motion graphics, and delivery formats for
                    creators and productions.
                  </p>
                </div>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto justify-center">
                  {postProductionServices.map((service, idx) => {
                    // Restructure editing tiers into features checklist items
                    const formattedFeatures = [
                      ...service.tiers.map((t) => `${t.duration} — ${t.price}`),
                      ...service.includes,
                    ];
                    return (
                      <UnifiedPriceCard
                        key={service.title}
                        title={service.title}
                        description={service.description}
                        price={service.startingPrice}
                        isStartingPrice={true}
                        features={formattedFeatures}
                        iconPath={`/price/${(idx % 4) + 1}.png`}
                      />
                    );
                  })}
                </div>
              </div>
            )}

            {activeTab === "rental" && (
              <div>
                <div className="text-center mb-12">
                  <h2 className="font-serif text-3xl font-semibold text-white">
                    Studio Space Rental
                  </h2>
                  <p className="mt-2 text-sm text-neutral-400 max-w-md mx-auto">
                    Rent our professional studio floors. Ideal for podcasts, video content,
                    photoshoots, and fashion sets.
                  </p>
                </div>

                <div className="space-y-20 max-w-6xl mx-auto">
                  {studioRentalZones.map((zone) => (
                    <div key={zone.title} className="space-y-8">
                      <div className="text-center md:text-left border-b border-white/10 pb-4 flex flex-col md:flex-row md:items-end justify-between">
                        <div>
                          <div className="flex items-center justify-center md:justify-start gap-3">
                            <h3 className="font-serif text-2xl font-semibold text-white">
                              {zone.title}
                            </h3>
                            <span className="rounded-full bg-[#d2a153]/15 text-[#d2a153] border border-[#d2a153]/25 px-2.5 py-0.5 text-xs font-bold font-sans">
                              {zone.size}
                            </span>
                          </div>
                          <p className="mt-2 text-sm text-neutral-400 font-light">
                            {zone.description}
                          </p>
                        </div>
                      </div>

                      {/* 4 columns layout since there are 4 packages per zone, making each card wider */}
                      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center">
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
                            <UnifiedPriceCard
                              key={tier.name}
                              title={tier.name}
                              description="Clean professional studio floor space."
                              price={tier.price}
                              unit={unitSuffix}
                              features={tier.features}
                              iconPath={`/price/${(idx % 4) + 1}.png`}
                              note={zone.note}
                            />
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </Container>
        </section>
        {/* Contact Form */}
        <BookingCTA />
      </main>

      <Footer />
    </div>
  );
}
