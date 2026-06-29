import { useState } from "react";
import { Container } from "@/components/common/Container";
import { GradientButton } from "@/components/common/GradientButton";
import { Play, X } from "lucide-react";

export function Hero() {
  const [showMap, setShowMap] = useState(true);

  return (
    <section id="home" className="relative">
      <div className="relative h-[850px] w-full overflow-hidden border-b border-neutral-800 bg-neutral-950">
        {/* Background Video with Image Thumbnail */}
        <video
          src="/bg.mp4"
          poster="/bg.png"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Dark Overlay for Readability */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Hero Content Container */}
        <Container className="relative flex h-full items-center justify-center">
          <div className="flex w-full max-w-3xl flex-col items-center text-center text-white">
            {/* Top Logo */}
            <img src="/logo.png" alt="Studio Star Vibe" className="h-28 w-auto object-contain" />

            {/* Main Heading */}
            <h1 className="font-serif text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl">
              Create. Record.{" "}
              <span className="bg-gradient-to-r from-[#f5d59a] to-[#d2a153] bg-clip-text text-transparent">
                Inspire.
              </span>
            </h1>

            {/* Subtext Description */}
            <p className=" max-w-xl text-md leading-relaxed text-white/80 drop-shadow-md">
              Studio Star Vibe is a premium{" "}
              <span className="font-semibold text-[#f5d59a]">podcast</span>,{" "}
              <span className="font-semibold text-[#f5d59a]">photography</span>,{" "}
              <span className="font-semibold text-[#f5d59a]">video</span> and{" "}
              <span className="font-semibold text-[#f5d59a]">content production</span> studio in
              Gulsan Dhaka helping creators, brands, artists and businesses produce world-class
              content.
            </p>

            {/* Actions / Buttons */}
            <div className="mt-6 flex flex-wrap justify-center items-center gap-4">
              <GradientButton>Book Now</GradientButton>
              <button className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-black/45 hover:bg-black/65 backdrop-blur-sm px-6 py-2.5 text-sm font-semibold text-white transition-all active:scale-98 cursor-pointer shadow-md">
                <span className="flex h-5 w-5 items-center justify-center rounded-full border border-[#d2a153] text-[#d2a153] transition-transform group-hover:scale-105">
                  <Play className="h-2 w-2 fill-[#d2a153] ml-[1px]" />
                </span>
                <span>Watch Studio</span>
              </button>
            </div>

            {/* Studio Features Tags */}
            <div className="mt-6 flex flex-wrap justify-center gap-2 text-xs text-neutral-200">
              <span className="rounded-full border border-white/15 bg-black/30 backdrop-blur-[2px] px-3 py-1 shadow-sm">
                Podcast Recording
              </span>
              <span className="rounded-full border border-white/15 bg-black/30 backdrop-blur-[2px] px-3 py-1 shadow-sm">
                Video Production
              </span>
              <span className="rounded-full border border-white/15 bg-black/30 backdrop-blur-[2px] px-3 py-1 shadow-sm">
                Studio Rental
              </span>
            </div>
          </div>
        </Container>

        {showMap && (
          <div className="absolute bottom-8 right-8 z-20 hidden md:block w-72 h-72 rounded-2xl border border-neutral-800 bg-neutral-900/85 p-2 backdrop-blur-sm shadow-2xl animate-fade-in">
            <button
              onClick={() => setShowMap(false)}
              className="close-btn absolute top-4 right-4 z-30 flex h-7 w-7 items-center justify-center rounded-full bg-black/70 text-white border border-white/15 hover:bg-black/90 hover:scale-105 active:scale-95 transition-all cursor-pointer shadow-md"
              aria-label="Close Map"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="w-full h-full overflow-hidden rounded-xl border border-neutral-800">
              <iframe
                src="https://maps.google.com/maps?q=Gulshan,Dhaka&t=&z=14&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 [filter:invert(90%)_hue-rotate(180deg)_brightness(80%)_contrast(110%)_grayscale(40%)]"
                allowFullScreen
                loading="lazy"
                title="Gulshan, Dhaka Map"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
