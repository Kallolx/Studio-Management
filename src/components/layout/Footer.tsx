import { Container } from "@/components/common/Container";
import { Link } from "@tanstack/react-router";
import {
  MapPin,
  Clock,
  Phone,
  Mail,
  ArrowRight,
  Mic,
  Video,
  Camera,
  Scissors,
  Building2,
  Lock,
} from "lucide-react";
import { GradientButton } from "../common/GradientButton";


const StarIcon = () => (
  <img src="/icons/star-2.png" alt="star" className="h-10 w-10 object-contain" />
);

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Packages", href: "/pricing" },
  { label: "Contact", href: "/#contact" },
];

const serviceLinks = [
  { label: "Podcast Production", icon: Mic },
  { label: "Video Recording", icon: Video },
  { label: "Photography", icon: Camera },
  { label: "Video Editing", icon: Scissors },
  { label: "Studio Rental", icon: Building2 },
];

const contactItems = [
  {
    icon: MapPin,
    primary: "Flat 5/B (Level-5), House 53/55,",
    secondary: "Block-B, Niketon Housing Society, Gulshan, Dhaka, Bangladesh",
  },
  {
    icon: Clock,
    primary: "Saturday – Thursday",
    secondary: "10:00 AM – 10:00 PM",
  },
  {
    icon: Phone,
    primary: "+880 1712-345678",
    secondary: "Call or WhatsApp",
    href: "tel:+8801712345678",
  },
  {
    icon: Mail,
    primary: "hello@studiostarvibe.com",
    secondary: "For business inquiries",
    href: "mailto:hello@studiostarvibe.com",
  },
];

const socials = [
  { name: "Instagram", iconPath: "/icons/instagram.svg", href: "https://instagram.com" },
  { name: "YouTube", iconPath: "/icons/youtube.svg", href: "https://youtube.com" },
  { name: "Facebook", iconPath: "/icons/facebook.svg", href: "https://facebook.com" },
  { name: "TikTok", iconPath: "/icons/tik-tok.svg", href: "https://tiktok.com" },
  { name: "WhatsApp", iconPath: "/icons/whatsapp.svg", href: "https://wa.me" },
];

const iconBoxClass =
  "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#d2a153]/10 text-[#d2a153]";

export function Footer() {
  return (
    <footer className="bg-[#06050a] border-t border-white/5">
      {/* CTA Banner */}
      <Container>
        <div className="py-8">
          <div
            className="relative flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl px-6 py-5 overflow-hidden"
            style={{
              background:
                "linear-gradient(#0d0b14, #0d0b14) padding-box, linear-gradient(135deg, #a855f7 0%, #d2a153 50%, #a855f7 100%) border-box",
              border: "1px solid transparent",
            }}
          >
            {/* Subtle bg glow blobs */}
            <div className="absolute -left-10 top-1/2 -translate-y-1/2 h-32 w-32 rounded-full bg-[#a855f7]/10 blur-3xl pointer-events-none" />
            <div className="absolute right-40 top-1/2 -translate-y-1/2 h-24 w-24 rounded-full bg-[#d2a153]/8 blur-2xl pointer-events-none" />

            {/* Left: icon + text */}
            <div className="flex items-center gap-5 relative z-10">
              {/* Sparkle icon box */}
              <div className="flex h-12 w-12 border border-[#d2a153]/20 text-[#d2a153] shrink-0 items-center justify-center rounded-xl">
                <img src="/icons/star.png" alt="star" className="h-6 w-6 object-contain" />
              </div>

              <div>
                <h3 className="text-xl md:text-4xl font-serif font-bold text-white leading-tight">
                  Ready to <em className="not-italic text-[#d2a153]">create with us?</em>
                  <img
                    src="/icons/star-2.png"
                    alt=""
                    className="inline-block ml-0.2 h-6 w-6 object-contain align-top mt-0.2"
                  />
                </h3>
                <p className="text-sm text-neutral-400">
                  Bring your ideas to life with our premium studio experience.
                </p>
              </div>
            </div>

            {/* Right: CTA button */}
            <GradientButton className="relative z-10">Book a Session</GradientButton>
          </div>
        </div>
      </Container>

      {/* Main Footer Grid */}
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-4">
          {/* Col 1: Brand */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="Studio Star Vibe" className="h-12 w-auto object-contain" />
            </div>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Premium podcast, video &amp; content production studio in Dhaka.
            </p>

            {/* Tagline card */}
            <div
              className="flex items-center gap-3 rounded-xl px-4 py-3 border"
              style={{
                border: "1px solid transparent",
                background:
                  "linear-gradient(#0d0c12, #0d0c12) padding-box, linear-gradient(135deg, #d2a153 0%, #a855f7 100%) border-box",
              }}
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#d2a153]/5">
                <img src="/icons/star.png" alt="star" className="h-5 w-5 object-contain" />
              </div>
              <p className="text-xs text-neutral-400 leading-snug">
                Where creativity meets <br />
                professional excellence.
              </p>
              <div className="ml-auto shrink-0">
                <img src="/icons/star-2.png" alt="" className="h-7 w-7 object-contain opacity-80" />
              </div>
            </div>

            <div className="flex items-center gap-2.5 flex-wrap">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-neutral-400 hover:border-[#d2a153]/50 hover:text-[#d2a153] transition-all duration-300 cursor-pointer"
                >
                  <span
                    className="block w-4 h-4 bg-current"
                    style={{
                      maskImage: `url(${s.iconPath})`,
                      maskSize: "contain",
                      maskRepeat: "no-repeat",
                      maskPosition: "center",
                      WebkitMaskImage: `url(${s.iconPath})`,
                      WebkitMaskSize: "contain",
                      WebkitMaskRepeat: "no-repeat",
                      WebkitMaskPosition: "center",
                    }}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-xl font-serif text-[#d2a153] mb-4 tracking-wide">Quick Links</h4>
            {/* Gold underline */}
            <div className="w-8 h-0.5 bg-gradient-to-r from-[#a855f7] to-transparent mb-5" />
            <ul className="space-y-0">
              {quickLinks.map((link, i) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="flex items-center justify-between py-3 text-sm text-neutral-400 hover:text-[#f5d59a] transition-colors duration-200 group"
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="h-3.5 w-3.5 text-neutral-600 group-hover:text-[#d2a153] mr-6 group-hover:translate-x-0.5 transition-all duration-200" />
                  </Link>
                  {i < quickLinks.length - 1 && <div className="h-px bg-white/5" />}
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Our Services */}
          <div>
            <h4 className="text-xl font-serif text-[#d2a153] mb-4 tracking-wide">Our Services</h4>
            <div className="w-8 h-0.5 bg-gradient-to-r from-[#a855f7] to-transparent mb-5" />
            <ul className="space-y-0">
              {serviceLinks.map((svc, i) => (
                <li key={svc.label}>
                  <a
                    href="/#services"
                    className="flex items-center gap-3 py-3 text-sm text-neutral-400 hover:text-[#f5d59a] transition-colors duration-200 group"
                  >
                    <svc.icon className="h-5 w-5 text-[#d2a153]/60 group-hover:text-[#d2a153] transition-colors shrink-0" />
                    <span>{svc.label}</span>
                  </a>
                  {i < serviceLinks.length - 1 && <div className="h-px bg-white/5" />}
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div>
            <h4 className="text-xl font-serif text-[#d2a153] mb-4 tracking-wide">Contact Info</h4>
            <div className="w-8 h-0.5 bg-gradient-to-r from-[#a855f7] to-transparent mb-5" />
            <ul className="space-y-0">
              {contactItems.map((item, i) => {
                const inner = (
                  <div className="flex items-start gap-3 py-3 group">
                    <div className={iconBoxClass}>
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-white leading-snug">
                        {item.primary}
                      </p>
                      <p className="text-[11px] text-neutral-500 mt-0.5 leading-snug">
                        {item.secondary}
                      </p>
                    </div>
                  </div>
                );
                return (
                  <li key={i}>
                    {item.href ? (
                      <a href={item.href} className="block hover:opacity-80 transition-opacity">
                        {inner}
                      </a>
                    ) : (
                      inner
                    )}
                    {i < contactItems.length - 1 && <div className="h-px bg-white/5" />}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Container>

      {/* Divider with center star */}
      <div className="relative flex items-center -mt-4">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/10 to-[#a855f7]/30" />
        <div className="mx-1 flex items-center justify-center h-14 w-14 text-[#a855f7]">
          <StarIcon />
        </div>
        <div className="flex-1 h-px bg-gradient-to-l from-transparent via-white/10 to-[#a855f7]/30" />
      </div>

      {/* Bottom Bar */}
      <Container>
        <div className="flex flex-col sm:flex-row items-center justify-between pb-6 gap-3">
          <div className="items-center text-sm text-neutral-500">
            <span>© {new Date().getFullYear()} Studio Star Vibe. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-2 text-xs text-neutral-500">
            <span>
              Made with ❤️ by{" "}
              <a
                href="https://kallol.me"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#d2a153] hover:underline"
              >
                Kamrul Hasan
              </a>
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
