import { navLinks } from "@/data/navLinks";
import { GradientButton } from "@/components/common/GradientButton";
import { Link, useLocation } from "@tanstack/react-router";

export function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-4 px-4 md:px-6">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-black/30 backdrop-blur-sm px-6 py-3 shadow-sm">
        {isHome ? (
          <a href="#home" className="flex items-center">
            <img src="/logo.png" alt="Studio Star Vibe" className="h-12 w-auto object-contain" />
          </a>
        ) : (
          <Link to="/" className="flex items-center">
            <img src="/logo.png" alt="Studio Star Vibe" className="h-12 w-auto object-contain" />
          </Link>
        )}

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const hash = link.href.replace("#", "");
            return (
              <li key={link.href}>
                {isHome ? (
                  <a
                    href={link.href}
                    className="text-md text-neutral-200 hover:text-[#d2a153] cursor-pointer"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    to="/"
                    hash={hash}
                    className="text-md text-neutral-200 hover:text-neutral-100/10 cursor-pointer"
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>

        {isHome ? (
          <a href="#contact">
            <GradientButton>Book Now</GradientButton>
          </a>
        ) : (
          <Link to="/" hash="contact">
            <GradientButton>Book Now</GradientButton>
          </Link>
        )}
      </nav>
    </header>
  );
}
