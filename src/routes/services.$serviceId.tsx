import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BookingCTA } from "@/components/sections/BookingCTA";
import { Container } from "@/components/common/Container";
import { Card } from "@/components/common/Card";
import { BorderGlow } from "@/components/common/BorderGlow";
import { GradientButton } from "@/components/common/GradientButton";
import { services } from "@/data/services";
import { packages, postProductionServices, studioRentalZones } from "@/data/packages";
import { ArrowLeft, ArrowRight, Check, Star } from "lucide-react";
import * as Icons from "lucide-react";

export const Route = createFileRoute("/services/$serviceId")({
  head: ({ params }) => {
    const service = services.find((s) => s.slug === params.serviceId);
    return {
      meta: [
        {
          title: service
            ? `${service.title} — Studio Star Vibe`
            : "Service Details — Studio Star Vibe",
        },
        {
          name: "description",
          content: service ? service.description : "Professional content creation services.",
        },
      ],
    };
  },
  component: ServiceDetailsPage,
});

// Map of all icon components we plan to use dynamically for "What's Included"
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Mic: Icons.Mic,
  Video: Icons.Video,
  Volume2: Icons.Volume2,
  Sliders: Icons.Sliders,
  Clapperboard: Icons.Clapperboard,
  Share2: Icons.Share2,
  FileText: Icons.FileText,
  Camera: Icons.Camera,
  MapPin: Icons.MapPin,
  Paintbrush: Icons.Paintbrush,
  Music: Icons.Music,
  Maximize: Icons.Maximize,
  Lightbulb: Icons.Lightbulb,
  ShieldAlert: Icons.ShieldAlert,
  Tv: Icons.Tv,
  Monitor: Icons.Monitor,
  HardDrive: Icons.HardDrive,
  Calendar: Icons.Calendar,
  Sparkles: Icons.Sparkles,
  Scissors: Icons.Scissors,
  Layers: Icons.Layers,
  Smartphone: Icons.Smartphone,
  Home: Icons.Home,
  Palette: Icons.Palette,
  Wifi: Icons.Wifi,
  UserCheck: Icons.UserCheck,
  Users: Icons.Users,
  ShieldCheck: Icons.ShieldCheck,
  Folder: Icons.Folder,
};

// Reusable unified price card matching landing page packages exactly
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

function ServiceDetailsPage() {
  const { serviceId } = useParams({ from: "/services/$serviceId" });
  const service = services.find((s) => s.slug === serviceId);

  if (!service) {
    return (
      <div className="min-h-screen bg-[#060506] text-white">
        <Navbar />
        <Container className="py-32 text-center">
          <h2 className="text-2xl font-bold font-serif mb-4">Service Not Found</h2>
          <p className="text-neutral-400 mb-8">
            The service page you are looking for does not exist.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[#f5d59a] hover:text-[#d2a153] transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>
        </Container>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#060506] text-white">
      <Navbar />

      <main>
        {/* Shorter Hero Section */}
        <section className="relative overflow-hidden border-b border-neutral-800 bg-neutral-950">
          {/* Background Video with Dark Overlay */}
          <video
            src="/bg.mp4"
            poster="/bg.png"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-black/60" />

          <Container className="relative py-24 md:py-32 flex flex-col items-center text-center">
            {/* Small Logo */}
            <img
              src="/logo.png"
              alt="Studio Star Vibe"
              className="h-16 w-auto object-contain mb-8"
            />

            {/* Back Button */}
            <Link
              to="/"
              className="mb-4 inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-neutral-400 hover:text-white transition-colors cursor-pointer"
            >
              <ArrowLeft className="h-3 w-3" />
              <span>Back to Services</span>
            </Link>

            {/* Service Title */}
            <h1 className="font-serif text-4xl md:text-5xl font-bold leading-tight tracking-tight text-white max-w-2xl">
              {service.title}
            </h1>

            {/* Service Long Description */}
            <p className="mt-6 max-w-2xl text-sm md:text-base leading-relaxed text-white/80 drop-shadow-sm font-light">
              {service.longDescription}
            </p>

            {/* CTA Button */}
            <a
              href="#contact"
              className="mt-8 rounded-full bg-gradient-to-r from-[#f5d59a] to-[#d2a153] px-6 py-2.5 text-sm font-semibold text-neutral-950 hover:brightness-105 active:scale-98 transition-all shadow-lg"
            >
              Book {service.title}
            </a>
          </Container>
        </section>

        {/* What's Included Section */}
        <section className="py-20 bg-[#060506]">
          <Container>
            <div className="text-center mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-[#d2a153]">
                Inclusions
              </span>
              <h2 className="mt-2 font-serif text-3xl font-semibold tracking-normal text-white md:text-4xl">
                What's Included
              </h2>
              <p className="mt-4 text-sm text-neutral-400 max-w-xl mx-auto font-light">
                Every booking comes with full access to our state-of-the-art gear, premium spaces,
                and technical assistances.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {service.includes.map((item, idx) => {
                const IconComponent = iconMap[item.iconName] || Icons.HelpCircle;
                return (
                  <Card
                    key={idx}
                    className="flex gap-4 p-5 border border-white/10 bg-[#0d0c0e] hover:border-[#d2a153]/35 transition-colors duration-300"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-tr from-[#d2a153]/15 to-[#a855f7]/10 border border-[#d2a153]/20 text-[#d2a153]">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <div className="flex flex-col flex-1 min-w-0">
                      <h4 className="text-md font-bold text-white leading-snug">{item.title}</h4>
                      <p className="mt-1.5 text-xs text-neutral-400 leading-relaxed font-light">
                        {item.description}
                      </p>
                    </div>
                  </Card>
                );
              })}
            </div>
          </Container>
        </section>

        {/* Conditionally Render Dedicated Pricing Section */}
        {service.slug === "podcast-production" && (
          <section className="py-20 border-t border-white/5 bg-neutral-950/20">
            <Container>
              <div className="text-center mb-12">
                <span className="text-xs font-bold uppercase tracking-widest text-[#d2a153]">
                  Pricing
                </span>
                <h2 className="mt-2 font-serif text-3xl font-semibold text-white">
                  Podcast Studio Packages
                </h2>
                <p className="mt-4 text-sm text-neutral-400 max-w-xl mx-auto font-light">
                  Choose a package that fits your session length and camera requirements.
                </p>
              </div>

              {/* 3 columns layout to make cards bigger/wider, centering the grid */}
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto justify-center">
                {packages.map((pkg, idx) => (
                  <UnifiedPriceCard
                    key={pkg.title}
                    title={pkg.title}
                    description={pkg.description}
                    price={pkg.price}
                    unit="/ Session"
                    features={pkg.features}
                    iconPath={pkg.icon || `/price/${(idx % 4) + 1}.webp`}
                    popular={pkg.popular}
                  />
                ))}
              </div>
            </Container>
          </section>
        )}

        {service.slug === "studio-rent" && (
          <section className="py-20 border-t border-white/5 bg-neutral-950/20">
            <Container>
              <div className="text-center mb-12">
                <span className="text-xs font-bold uppercase tracking-widest text-[#d2a153]">
                  Pricing
                </span>
                <h2 className="mt-2 font-serif text-3xl font-semibold text-white">
                  Studio Space Rental
                </h2>
                <p className="mt-4 text-sm text-neutral-400 max-w-xl mx-auto font-light">
                  Rent our fully equipped floors for podcasts, video production, or photography.
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
                            iconPath={`/price/${(idx % 4) + 1}.webp`}
                            note={zone.note}
                          />
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </Container>
          </section>
        )}

        {(service.slug === "post-production" || service.slug === "video-editing") && (
          <section className="py-20 border-t border-white/5 bg-neutral-950/20">
            <Container>
              <div className="text-center mb-12">
                <span className="text-xs font-bold uppercase tracking-widest text-[#d2a153]">
                  Pricing
                </span>
                <h2 className="mt-2 font-serif text-3xl font-semibold text-white">
                  Post Production Services
                </h2>
                <p className="mt-4 text-sm text-neutral-400 max-w-xl mx-auto font-light">
                  High-end post production scaling based on duration and feature complexity.
                </p>
              </div>

              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto justify-center">
                {postProductionServices.map((prodService, idx) => {
                  const formattedFeatures = [
                    ...prodService.tiers.map((t) => `${t.duration} — ${t.price}`),
                    ...prodService.includes,
                  ];
                  return (
                    <UnifiedPriceCard
                      key={prodService.title}
                      title={prodService.title}
                      description={prodService.description}
                      price={prodService.startingPrice}
                      isStartingPrice={true}
                      features={formattedFeatures}
                      iconPath={`/price/${(idx % 4) + 1}.webp`}
                    />
                  );
                })}
              </div>
            </Container>
          </section>
        )}

        {/* Booking & Contact Form */}
        <BookingCTA />
      </main>

      <Footer />
    </div>
  );
}
