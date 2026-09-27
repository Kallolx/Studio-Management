import { Container } from "@/components/common/Container";

// Partner logos from /public/brand
const brandLogos = [
  "AA-Series.webp",
  "AR-Movie-Netowark-logo-ar.webp",
  "Bangla-Melodies.webp",
  "Beat-Haven-Png.webp",
  "Drama-Hungama-(Logo).webp",
  "EXtra-Filmaniac.webp",
  "Finova.webp",
  "Islamic-Bhuban.webp",
  "KINGSS.webp",
  "LIONIC-HOLYY.webp",
  "LMG-logo.webp",
  "Lionic-Folk-Station-PNG-(1).webp",
  "Lionic-Magic-PNG.webp",
  "Lionic-Music.webp",
  "Lionic-Studio.webp",
  "Lionic-classic-PNG.webp",
  "Lofi-JPG-2.webp",
  "Logo-01-Final.webp",
  "Logoo.webp",
  "Niye-NEN-45.webp",
  "PMC.webp",
  "PNG.webp",
  "Porane-Baula-logo-Borderless.webp",
  "STREAMO-DIGITAL-MUSIC.webp",
  "Showbiz24net.webp",
  "SoulTale-Bangla.webp",
  "Star-Vabe-PNG.webp",
  "The-Dramatic.webp",
  "Track-Vision.webp",
  "islamic-somoy.webp",
];

export function StudioIntro() {
  return (
    <section id="studio" className="py-20 overflow-hidden">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5 w-full">
            <img
              src="/about.webp"
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
                  src="/icons/star.webp"
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
                  src="/icons/reel.webp"
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
                  src="/icons/headphone.webp"
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
          </div>
        </div>
      </Container>

      {/* Partnership Block with Infinite Marquee Loop (full width) */}
      <div className="mt-16 w-full select-none">
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_8%,white_92%,transparent)]">
          <div
            className="flex w-max items-center animate-marquee"
            style={{ animationDuration: "80s" }}
          >
            {[0, 1].map((dup) =>
              brandLogos.map((file) => (
                <div
                  key={`${dup}-${file}`}
                  className="flex h-20 w-40 shrink-0 items-center justify-center px-6 sm:h-24 sm:w-48"
                  aria-hidden={dup === 1}
                >
                  <img
                    src={`/brand/${encodeURIComponent(file)}`}
                    alt={dup === 0 ? file.replace(/\.webp$/, "").replace(/[-_]/g, " ") : ""}
                    loading="lazy"
                    className="max-h-full max-w-full object-contain opacity-80 transition-opacity hover:opacity-100"
                  />
                </div>
              )),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
