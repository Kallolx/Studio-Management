import { Container } from "@/components/common/Container";
import { navLinks } from "@/data/navLinks";
import { services } from "@/data/services";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#060506] py-12">
      <Container>
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <img
              src="/logo.png"
              alt="Studio Star Vibe"
              className="h-8 w-auto object-contain mb-3"
            />
            <p className="mt-3 text-sm text-neutral-400">
              Premium podcast and production studio in Gulshan, Dhaka.
            </p>
          </div>

          <div>
            <div className="mb-3 text-sm font-semibold text-white">Quick Links</div>
            <ul className="space-y-2 text-sm text-neutral-400">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="hover:text-white transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="mb-3 text-sm font-semibold text-white">Services</div>
            <ul className="space-y-2 text-sm text-neutral-400">
              {services.slice(0, 5).map((s) => (
                <li key={s.title}>
                  <a href="#services" className="hover:text-white transition-colors">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="mb-3 text-sm font-semibold text-white">Contact</div>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li>Gulshan, Dhaka</li>
              <li>+880 ___ ___ ____</li>
              <li>hello@studiostarvibe.com</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-neutral-500">
          © {new Date().getFullYear()} Studio Star Vibe. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
