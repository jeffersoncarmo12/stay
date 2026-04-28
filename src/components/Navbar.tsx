import { useState, useEffect } from "react";
import logoStay from "@/assets/logo-stay.webp";

const links = [
  { href: "#empresas", label: "Empresas" },
  { href: "#sobre", label: "Sobre" },
  { href: "#contato", label: "Contato" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass py-3" : "py-5 bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <img src={logoStay} alt="Stay Empresas" className="h-7 w-auto" />
          <span className="font-display font-bold text-lg tracking-tight">Empresas</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contato"
          className="hidden md:inline-flex items-center rounded-full px-5 py-2 text-sm font-medium bg-primary text-primary-foreground hover:opacity-90 transition shadow-glow"
        >
          Fale Conosco
        </a>
      </div>
    </header>
  );
}
