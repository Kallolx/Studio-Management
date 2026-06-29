import { navLinks } from "@/data/navLinks";
import { GradientButton } from "@/components/common/GradientButton";

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-4 px-4 md:px-6">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-black/30 backdrop-blur-sm px-6 py-3 shadow-sm">
        <a href="#home" className="flex items-center">
          <img src="/logo.png" alt="Studio Star Vibe" className="h-12 w-auto object-contain" />
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-md text-neutral-200 hover:text-neutral-100/10">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <GradientButton>Book Now</GradientButton>
      </nav>
    </header>
  );
}
