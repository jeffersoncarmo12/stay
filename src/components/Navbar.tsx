import { useState, useEffect } from "react";
import logoStay from "@/assets/logo-stay.webp";

const links = [
  { href: "#ecossistema", label: "Ecossistema" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#para-quem", label: "Para quem" },
  { href: "#resultados", label: "Resultados" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2.5" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div
          className={`flex items-center justify-between rounded-full px-5 py-2.5 transition-all duration-500 ${
            scrolled ? "glass-strong shadow-soft" : ""
          }`}
        >
          <a href="#top" className="flex items-center gap-2.5">
            <img src={logoStay} alt="Stay" className="h-6 w-auto" />
            <span className="font-display font-semibold text-[15px] tracking-tight">Empresas</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[13px] text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#contato"
              className="hidden sm:inline-flex items-center rounded-full px-4 py-2 text-[13px] font-medium text-foreground/80 hover:text-foreground transition"
            >
              Falar com especialista
            </a>
            <a
              href="#ecossistema"
              className="inline-flex items-center rounded-full bg-foreground text-background px-4 py-2 text-[13px] font-semibold hover:bg-foreground/90 transition"
            >
              Conhecer ecossistema
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
