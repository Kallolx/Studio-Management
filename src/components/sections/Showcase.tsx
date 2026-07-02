import { useState, useCallback } from "react";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Play, X, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

interface VideoItem {
  id: string;
  title: string;
  type: "YouTube Short" | "Podcast Episode" | "Brand Reel" | "Promo Video";
  url: string;
  embedUrl: string;
  thumbnail: string;
  aspect: "landscape" | "vertical";
}

export function Showcase() {
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", loop: false });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const videos: VideoItem[] = [
    {
      id: "1",
      title: "Behind the Mic with Studio Star Vibe",
      type: "Podcast Episode",
      url: "https://www.youtube.com/watch?v=udGUY-RS7Lc",
      embedUrl: "https://www.youtube.com/embed/udGUY-RS7Lc?autoplay=1",
      thumbnail: "https://img.youtube.com/vi/udGUY-RS7Lc/maxresdefault.jpg",
      aspect: "landscape",
    },
    {
      id: "2",
      title: "Broadcast Quality Audio Setup Demo",
      type: "Promo Video",
      url: "https://www.youtube.com/watch?v=lwYEZ6c7CSk",
      embedUrl: "https://www.youtube.com/embed/lwYEZ6c7CSk?autoplay=1",
      thumbnail: "https://img.youtube.com/vi/lwYEZ6c7CSk/maxresdefault.jpg",
      aspect: "landscape",
    },

    {
      id: "3",
      title: "Summer Commercial Campaign Showcase",
      type: "Brand Reel",
      url: "https://www.youtube.com/watch?v=ZZFDuFSWYHk",
      embedUrl: "https://www.youtube.com/embed/ZZFDuFSWYHk?autoplay=1",
      thumbnail: "https://img.youtube.com/vi/ZZFDuFSWYHk/maxresdefault.jpg",
      aspect: "vertical",
    },

    {
      id: "4",
      title: "Content Creation Tips & Tricks",
      type: "YouTube Short",
      url: "https://www.youtube.com/watch?v=8rkLdxpxP10",
      embedUrl: "https://www.youtube.com/embed/8rkLdxpxP10?autoplay=1",
      thumbnail: "https://img.youtube.com/vi/8rkLdxpxP10/maxresdefault.jpg",
      aspect: "vertical",
    },
  ];

  return (
    <section
      id="showcase"
      className="border-t border-white/5 py-20 bg-gradient-to-b from-[#060506] to-[#0a090d]"
    >
      <Container>
        <SectionHeading
          label="Showcase"
          title="Featured Work & Productions"
          description="Take a look at some of the podcasts, reels, and video productions shot right here in our studio."
          align="center"
        />

        {/* Embla Slider Container */}
        <div className="overflow-hidden mt-10 cursor-grab active:cursor-grabbing" ref={emblaRef}>
          <div className="flex gap-6">
            {videos.map((video) => (
              <div
                key={video.id}
                className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.33%] min-w-0"
              >
                <div className="group relative aspect-video overflow-hidden rounded-xl border border-white/5 bg-neutral-950/60 transition-all duration-300 hover:border-[#d2a153]/30">
                  {/* Thumbnail Image */}
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Clean Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent opacity-85 transition-opacity duration-300 group-hover:opacity-90" />

                  {/* Play Button (glowing icon in the center) */}
                  <button
                    onClick={() => setActiveVideo(video)}
                    className="absolute inset-0 flex items-center justify-center cursor-pointer group/play"
                    aria-label={`Play ${video.title}`}
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-sm transition-all duration-300 group-hover/play:scale-110 group-hover/play:bg-[#d2a153] group-hover/play:text-neutral-950 group-hover/play:border-transparent group-hover/play:shadow-[0_0_15px_rgba(210,161,83,0.4)]">
                      <Play className="h-5 w-5 fill-current translate-x-0.5" />
                    </div>
                  </button>

                  {/* Tag and Title Overlay (Clean, minimal texts) */}
                  <div className="absolute bottom-0 left-0 w-full p-4 pointer-events-none">
                    <span className="text-[9px] font-semibold uppercase tracking-wider text-[#d2a153] bg-black/40 px-2 py-0.5 rounded backdrop-blur-sm">
                      {video.type}
                    </span>
                    <h4 className="text-xs font-bold text-white mt-2 line-clamp-1">
                      {video.title}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Slider Controls below the cards */}
        <div className="flex items-center justify-center gap-3 mt-8">
          <button
            onClick={scrollPrev}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-neutral-400 hover:border-[#d2a153]/50 hover:text-[#d2a153] hover:bg-neutral-900 transition-all cursor-pointer"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={scrollNext}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-neutral-400 hover:border-[#d2a153]/50 hover:text-[#d2a153] hover:bg-neutral-900 transition-all cursor-pointer"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </Container>

      {/* Video Modal / Larger Viewer */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md transition-all duration-300">
          <div className="relative w-full max-w-4xl bg-[#0d0c10] border border-[#d2a153]/25 rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(210,161,83,0.15)] flex flex-col">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-[#0a090d]">
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#d2a153]">
                  {activeVideo.type}
                </span>
                <h4 className="text-sm font-bold text-white mt-0.5 line-clamp-1">
                  {activeVideo.title}
                </h4>
              </div>
              <button
                onClick={() => setActiveVideo(null)}
                className="rounded-full p-1.5 text-neutral-400 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Video Player (always landscape) */}
            <div className="relative w-full aspect-video">
              <iframe
                src={activeVideo.embedUrl}
                title={activeVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 h-full w-full border-0"
              />
            </div>

            {/* Modal Footer / Options */}
            <div className="flex items-center justify-between px-6 py-4 border-t border-white/5 bg-[#0a090d]">
              <p className="text-xs text-neutral-500 font-light">
                Watching inside Studio Star Vibe player
              </p>
              <a
                href={activeVideo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-white/5 px-4 py-2 text-xs font-semibold text-white hover:bg-[#d2a153] hover:text-neutral-950 transition-all cursor-pointer"
              >
                <span>Open in YouTube</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
