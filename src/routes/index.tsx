import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { StudioIntro } from "@/components/sections/StudioIntro";
import { Services } from "@/components/sections/Services";
import { Showcase } from "@/components/sections/Showcase";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Packages } from "@/components/sections/Packages";
import { BookingCTA } from "@/components/sections/BookingCTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Studio Star Vibe — Premium Podcast & Production Studio in Gulshan, Dhaka" },
      {
        name: "description",
        content:
          "Premium podcast, video and content production studio in Gulshan, Dhaka. Book recording, video production, and studio rental sessions.",
      },
      { property: "og:title", content: "Studio Star Vibe — Premium Podcast & Production Studio" },
      {
        property: "og:description",
        content: "Professional podcast, video and content production space in Gulshan, Dhaka.",
      },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  return (
    <div className="min-h-screen bg-[#060506] text-white">
      <Navbar />
      <main>
        <Hero />
        <StudioIntro />
        <Services />
        <WhyChooseUs />
        <Packages />
        <Showcase />
        <BookingCTA />
      </main>
      <Footer />
    </div>
  );
}
