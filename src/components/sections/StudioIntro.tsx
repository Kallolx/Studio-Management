import { Container } from "@/components/common/Container";

const brands = [
  {
    id: "lionic",
    render: () => (
      <div className="flex items-center gap-2 shrink-0">
        <svg
          className="h-5 w-5 text-[#d2a153] fill-[#d2a153]/10"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
          />
        </svg>
        <div className="flex flex-col leading-none">
          <span className="text-[10px] font-bold tracking-widest text-[#f5d59a] font-serif">
            LIONIC
          </span>
          <span className="text-[6px] tracking-widest text-neutral-500 font-semibold uppercase mt-0.5">
            Multimedia
          </span>
        </div>
      </div>
    ),
  },
  {
    id: "ar-movie",
    render: () => (
      <div className="flex items-center gap-1.5 shrink-0">
        <span className="text-sm font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 font-sans leading-none">
          AR
        </span>
        <div className="flex flex-col leading-none">
          <span className="text-[9px] font-bold tracking-wider text-white">MOVIE</span>
          <span className="text-[6px] tracking-widest text-neutral-500 font-semibold uppercase mt-0.5">
            Network
          </span>
        </div>
      </div>
    ),
  },
  {
    id: "nova",
    render: () => (
      <div className="flex items-center gap-2 shrink-0">
        <span className="text-xs font-bold tracking-widest text-cyan-400 font-mono leading-none">
          NOVA
        </span>
        <div className="flex flex-col leading-none">
          <span className="text-[9px] font-medium tracking-wider text-white">CREATIVE</span>
          <span className="text-[6px] tracking-widest text-neutral-500 font-semibold uppercase mt-0.5">
            Agency
          </span>
        </div>
      </div>
    ),
  },
  {
    id: "nexus",
    render: () => (
      <div className="flex items-center gap-2 shrink-0">
        <svg
          className="h-4.5 w-4.5 text-blue-400 fill-blue-400/10"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
        <div className="flex flex-col leading-none">
          <span className="text-[10px] font-bold tracking-widest text-white">NEXUS</span>
          <span className="text-[6px] tracking-widest text-neutral-500 font-semibold uppercase mt-0.5">
            Media Labs
          </span>
        </div>
      </div>
    ),
  },
  {
    id: "golden-gate",
    render: () => (
      <div className="flex items-center gap-2 shrink-0">
        <span className="text-xs font-semibold text-[#f5d59a] tracking-[0.15em] font-serif leading-none">
          GOLDEN GATE
        </span>
        <div className="flex flex-col leading-none">
          <span className="text-[6px] tracking-widest text-neutral-500 font-semibold uppercase mt-0.5">
            Productions
          </span>
        </div>
      </div>
    ),
  },
];

export function StudioIntro() {
  return (
    <section id="studio" className="py-20 overflow-hidden">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5 w-full">
            <img
              src="/about.jpg"
              alt="Studio Preview"
              className="h-[300px] sm:h-[460px] w-full object-cover rounded-2xl border border-white/10 shadow-lg"
            />
          </div>
          <div className="lg:col-span-7 min-w-0 w-full">
            {/* Custom Pill Badge (Retained per request) */}
            <div className="mb-4 inline-block rounded-full border border-[#d2a153]/30 bg-[#d2a153]/10 px-3 py-1 text-xs uppercase tracking-wide text-[#f5d59a]">
              Built for creators
            </div>

            {/* Main Headings */}
            <h2 className="font-serif text-4xl font-bold tracking-tight text-white md:text-5xl leading-[1]">
              Built for creators.
              <br />
              Designed for{" "}
              <span className="bg-gradient-to-r from-[#f5d59a] to-[#d2a153] bg-clip-text text-transparent">
                impact.
              </span>
            </h2>

            {/* Description Block with Left Gold Border */}
            <div className="mt-6 pl-4 border-l border-[#d2a153] space-y-4">
              <p className="text-sm leading-relaxed text-neutral-300 md:text-base">
                Studio Star Vibe is a{" "}
                <span className="text-[#f5d59a] font-medium">
                  premium multimedia production studio
                </span>{" "}
                located in the heart of Dhaka. With over 10 years of media industry experience, we
                provide world-class podcast recording, video production, photography, editing and
                commercial production solutions.
              </p>
              <p className="text-sm leading-relaxed text-neutral-300 md:text-base">
                We help content creators, artists,{" "}
                <span className="text-[#f5d59a] font-medium">brands and organizations</span> create
                professional content using modern equipment and creative expertise.
              </p>
            </div>

            {/* Stats Cards Grid */}
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {/* Card 1 */}
              <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-[#0d0c0e] p-4 shadow-sm">
                <img
                  src="/icons/star.png"
                  alt="Star experience"
                  className="h-14 w-14 object-contain shrink-0"
                />
                <div className="flex flex-col leading-none">
                  <div className="text-xl font-bold text-white">
                    10<span className="text-[#d2a153] font-medium"> +</span>
                  </div>
                  <div className="text-[9px] text-neutral-400 font-semibold tracking-wide uppercase mt-1">
                    Years Experience
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-[#0d0c0e] p-4 shadow-sm">
                <img
                  src="/icons/reel.png"
                  alt="Sony 4K Setup"
                  className="h-14 w-14 object-contain shrink-0"
                />
                <div className="flex flex-col leading-none">
                  <div className="text-lg font-bold text-white tracking-wide">
                    <span className="font-serif">Sony</span> 4<span className="font-serif">K</span>
                  </div>
                  <div className="text-[9px] text-neutral-400 font-semibold tracking-wide uppercase mt-1">
                    Setup
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-[#0d0c0e] p-4 shadow-sm">
                <img
                  src="/icons/headphone.png"
                  alt="Headphone production"
                  className="h-14 w-14 object-contain shrink-0"
                />
                <div className="flex flex-col leading-none">
                  <div className="font-serif text-lg font-bold text-white tracking-wide">Full</div>
                  <div className="text-[9px] text-neutral-400 font-semibold tracking-wide uppercase mt-1">
                    Production Support
                  </div>
                </div>
              </div>
            </div>

            {/* Partnership Block with Infinite Marquee Loop */}
            <div className="mt-8 flex flex-col items-center rounded-xl border border-white/10 bg-[#0d0c0e]/30 px-5 py-3.5 shadow-sm select-none overflow-hidden sm:flex-row w-full max-w-full">
              <span className="text-[10px] uppercase tracking-wider font-semibold text-neutral-400 shrink-0 mb-3 sm:mb-0">
                In proud partnership with
              </span>
              <div className="hidden h-4 w-px bg-white/10 mx-4 shrink-0 sm:block" />

              {/* Infinite Scrolling Track */}
              <div className="relative w-full min-w-0 overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]">
                <div className="flex items-center gap-12 w-max animate-marquee">
                  {/* Duplicate 1 */}
                  {brands.map((brand) => (
                    <div key={`d1-${brand.id}`}>{brand.render()}</div>
                  ))}
                  {/* Duplicate 2 */}
                  {brands.map((brand) => (
                    <div key={`d2-${brand.id}`}>{brand.render()}</div>
                  ))}
                  {/* Duplicate 3 */}
                  {brands.map((brand) => (
                    <div key={`d3-${brand.id}`}>{brand.render()}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
