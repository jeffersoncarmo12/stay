import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "#ecossistema", label: "Ecossistema", num: "02" },
  { href: "#manifesto", label: "Manifesto", num: "03" },
  { href: "#diferenciais", label: "Método", num: "04" },
  { href: "#campo", label: "Campo", num: "05" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    const tick = () => {
      const d = new Date();
      setTime(
        d.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit", timeZone: "America/Sao_Paulo" }) + " · SP"
      );
    };
    tick();
    const id = setInterval(tick, 30000);
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearInterval(id);
    };
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <AnimatePresence>
        {scrolled && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 backdrop-blur-xl bg-background/60 border-b border-border"
          />
        )}
      </AnimatePresence>

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10 py-5 flex items-center justify-between">
        <a href="#top" className="group flex items-baseline gap-3">
          <span className="font-display text-2xl tracking-tight italic text-paper">Stay</span>
          <span className="marker hidden sm:inline">Empresas</span>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group flex items-center gap-1.5 px-3 py-1.5 rounded-full hover:bg-white/[0.04] transition"
            >
              <span className="font-mono text-[10px] text-muted-foreground/60">{l.num}</span>
              <span className="text-[13px] text-foreground/80 group-hover:text-foreground transition">
                {l.label}
              </span>
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <span className="hidden md:inline marker">{time}</span>
          <a
            href="#contato"
            className="group relative inline-flex items-center gap-2 rounded-full bg-paper text-ink px-4 py-2 text-[13px] font-medium overflow-hidden"
          >
            <span className="relative z-10">Falar com a Stay</span>
            <span className="relative z-10 inline-block transition-transform group-hover:translate-x-0.5">→</span>
          </a>
        </div>
      </div>
    </header>
  );
}
