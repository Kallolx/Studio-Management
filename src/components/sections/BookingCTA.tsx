import { useState, type FormEvent } from "react";
import { Container } from "@/components/common/Container";
import { BorderGlow } from "@/components/common/BorderGlow";
import {
  MapPin,
  Clock,
  Phone,
  Mail,
  ArrowRight,
  Lock,
  Send,
} from "lucide-react";
import { GradientButton } from "../common/GradientButton";


export function BookingCTA() {
  const [messageVal, setMessageVal] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log("Booking request:", data);
    setSubmitted(true);
  }

  const inputClass =
    "w-full rounded-xl border border-white/10 bg-[#0d0c0e]/80 px-4 py-3 text-sm text-white placeholder:text-neutral-500 focus:border-[#d2a153] focus:ring-1 focus:ring-[#d2a153] focus:outline-none transition-all duration-300 [color-scheme:dark]";

  const socials = [
    { name: "Instagram", iconPath: "/icons/instagram.svg", href: "https://instagram.com" },
    { name: "YouTube", iconPath: "/icons/youtube.svg", href: "https://youtube.com" },
    { name: "Facebook", iconPath: "/icons/facebook.svg", href: "https://facebook.com" },
    { name: "TikTok", iconPath: "/icons/tik-tok.svg", href: "https://tiktok.com" },
    { name: "WhatsApp", iconPath: "/icons/whatsapp.svg", href: "https://wa.me" },
  ];

  return (
    <section id="contact" className="border-t border-white/5 py-16 bg-transparent relative">
      <Container>
        <div className="grid gap-8 lg:grid-cols-12 items-stretch max-w-6xl mx-auto pb-12">
          {/* Left Column: Text & Contact Info */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="space-y-3 mb-6">
              <div className="mb-3 inline-block rounded-full border border-[#d2a153]/30 bg-[#d2a153]/10 px-3 py-1 text-xs uppercase tracking-wide text-[#f5d59a]">
                Get In Touch
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-normal text-white leading-tight">
                Let's create{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f5d59a] to-[#d2a153] font-serif italic">
                  together
                </span>
              </h2>
              <p className="text-base text-neutral-400">
                Have a project in mind? We'd love to hear from you.
              </p>
            </div>

            {/* Info Cards Stack — fills remaining height */}
            <div className="flex-1 flex flex-col gap-3">
              {/* Studio Location */}
              <div className="flex items-center justify-between p-3.5 rounded-xl border border-[#d2a153]/10 hover:border-[#d2a153]/30 cursor-pointer transition-all duration-300 group cursor-default">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#d2a153]/10 text-[#d2a153]">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="text-[10px] text-neutral-500 font-semibold uppercase tracking-wider block">
                      Studio Location
                    </span>
                    <span className="text-sm font-semibold text-white block">Gulshan, Dhaka</span>
                    <span className="text-[11px] text-neutral-400 font-light block">
                      Dhaka 1212, Bangladesh
                    </span>
                  </div>
                </div>
                <ArrowRight className="h-5 w-5 text-[#d2a153]/60 group-hover:text-[#d2a153] group-hover:translate-x-1 transition-all duration-300" />
              </div>

              {/* Business Hours */}
              <div className="flex items-center justify-between p-3.5 rounded-xl border border-[#d2a153]/10 hover:border-[#d2a153]/30 cursor-pointer transition-all duration-300 group cursor-default">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#d2a153]/10 text-[#d2a153]">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="text-[10px] text-neutral-500 font-semibold uppercase tracking-wider block">
                      Business Hours
                    </span>
                    <span className="text-sm font-semibold text-white block">
                      Sat – Thu, 10:00 AM – 10:00 PM
                    </span>
                    <span className="text-[11px] text-neutral-400 font-light block">
                      We're open all week
                    </span>
                  </div>
                </div>
                <ArrowRight className="h-5 w-5 text-[#d2a153]/60 group-hover:text-[#d2a153] group-hover:translate-x-1 transition-all duration-300" />
              </div>

              {/* Call / Book */}
              <a
                href="tel:+8801331049821"
                className="flex items-center justify-between p-3.5 rounded-xl border border-[#d2a153]/10 hover:border-[#d2a153]/30 cursor-pointer transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#d2a153]/10 text-[#d2a153]">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="text-[10px] text-neutral-500 font-semibold uppercase tracking-wider block">
                      Call / Book
                    </span>
                    <span className="text-sm font-semibold text-white block">+880 1331-049821</span>
                    <span className="text-[11px] text-neutral-400 font-light block">
                      Call or WhatsApp
                    </span>
                  </div>
                </div>
                <ArrowRight className="h-5 w-5 text-[#d2a153]/60 group-hover:text-[#d2a153] group-hover:translate-x-1 transition-all duration-300" />
              </a>

              {/* Email Us */}
              <a
                href="mailto:hello@studiostarvibe.com"
                className="flex items-center justify-between p-3.5 rounded-xl border border-[#d2a153]/10 hover:border-[#d2a153]/30 cursor-pointer transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#d2a153]/10 text-[#d2a153]">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="text-[10px] text-neutral-500 font-semibold uppercase tracking-wider block">
                      Email Us
                    </span>
                    <span className="text-sm font-semibold text-white block">
                      help@studiostarvibe.com
                    </span>
                    <span className="text-[11px] text-neutral-400 font-light block">
                      For business inquiries
                    </span>
                  </div>
                </div>
                <ArrowRight className="h-5 w-5 text-[#d2a153]/60 group-hover:text-[#d2a153] group-hover:translate-x-1 transition-all duration-300" />
              </a>
            </div>

            {/* Socials Connection — pinned to bottom */}
            <div className="pt-3 mt-3">
              <span className="text-[10px] text-neutral-500 font-semibold uppercase tracking-widest block mb-3 text-center">
                Connect With Us
              </span>
              <div className="flex flex-wrap items-center justify-center gap-2.5">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d2a153]/30 bg-transparent text-[#d2a153] hover:bg-[#d2a153] hover:text-neutral-950 hover:border-transparent transition-all duration-300 cursor-pointer"
                  >
                    <span
                      className="block w-4 h-4 bg-current"
                      style={{
                        maskImage: `url(${social.iconPath})`,
                        maskSize: "contain",
                        maskRepeat: "no-repeat",
                        maskPosition: "center",
                        WebkitMaskImage: `url(${social.iconPath})`,
                        WebkitMaskSize: "contain",
                        WebkitMaskRepeat: "no-repeat",
                        WebkitMaskPosition: "center",
                      }}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form Box wrapped in BorderGlow */}
          <div className="lg:col-span-7 w-full flex flex-col">
            <BorderGlow
              className="always-glow w-full h-full"
              backgroundColor="#0d0c0e"
              borderRadius={16}
              glowRadius={30}
              edgeSensitivity={30}
              glowIntensity={0.55}
              glowColor="40 80 80"
              colors={["#d2a153", "#f472b6", "#a855f7"]}
              animated={true}
            >
              <div className="p-6 md:p-8 flex flex-col h-full w-full">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center text-center py-20 space-y-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#d2a153]/15 text-[#d2a153] border border-[#d2a153]/25 shadow-lg">
                      <Send className="h-8 w-8 -rotate-12" />
                    </div>
                    <h3 className="font-serif text-2xl font-semibold text-white">Message Sent!</h3>
                    <p className="text-sm text-neutral-400 max-w-sm">
                      Thank you for booking a session. Our production crew will contact you within
                      the next 24 hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-4 text-xs font-semibold uppercase tracking-wider text-[#f5d59a] hover:text-[#d2a153] transition-colors underline cursor-pointer"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <>
                    {/* Header inside the form card */}
                    <div className="flex items-center gap-4 mb-8">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#d2a153]/10 text-[#d2a153]">
                        <Send className="h-6 w-6 -rotate-12" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#f5d59a] font-serif leading-tight">
                          Book a Session
                        </h3>
                        <p className="text-xs text-neutral-400 mt-0.5 font-light">
                          Tell us about your project.
                        </p>
                      </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      {/* Name & Contact Info Row */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <input
                          name="name"
                          type="text"
                          placeholder="Your Name"
                          className={inputClass}
                          required
                        />
                        <input
                          name="contact"
                          type="text"
                          placeholder="Phone / Email"
                          className={inputClass}
                          required
                        />
                      </div>

                      {/* Dropdown service needed */}
                      <div className="relative">
                        <select
                          name="service"
                          className={`${inputClass} appearance-none cursor-pointer pr-10`}
                          required
                          defaultValue=""
                        >
                          <option value="" disabled className="text-neutral-500">
                            Service Needed
                          </option>
                          <option>Podcast Production</option>
                          <option>Singer Performance</option>
                          <option>Post Production</option>
                          <option>Studio Rental</option>
                          <option>Other Production</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#d2a153]">
                          <svg
                            className="fill-current h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                          </svg>
                        </div>
                      </div>

                      {/* Date & Time Row */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <input name="date" type="date" className={inputClass} required />
                        <input name="time" type="time" className={inputClass} required />
                      </div>

                      {/* Message Field */}
                      <div className="relative">
                        <textarea
                          name="message"
                          placeholder="Tell us more about your project..."
                          rows={4}
                          maxLength={500}
                          className={`${inputClass} resize-none pb-8`}
                          value={messageVal}
                          onChange={(e) => setMessageVal(e.target.value)}
                        />
                        <span className="absolute bottom-2.5 right-3.5 text-[10px] text-neutral-500 font-sans">
                          {messageVal.length} / 500
                        </span>
                      </div>

                      {/* Submit button */}
                      <GradientButton
                        className="w-full bg-gradient-to-r from-[#f5d59a] to-[#d2a153] hover:from-[#d2a153] hover:to-[#f5d59a] text-neutral-900 font-bold py-3.5 px-6 rounded-xl hover:shadow-[0_0_20px_rgba(210,161,83,0.35)] transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer border-0"
                      >
                        Send Message
                      </GradientButton>

                      {/* Privacy details */}
                      <div className="flex items-center justify-center gap-1.5 text-xs text-neutral-500 pt-2">
                        <Lock className="h-3.5 w-3.5 shrink-0" />
                        <span>Your information is safe with us.</span>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </BorderGlow>
          </div>
        </div>
      </Container>
    </section>
  );
}
