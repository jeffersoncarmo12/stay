import { motion } from "framer-motion";
import { useState } from "react";
import { Store, GraduationCap, Mic, Building2, Clapperboard, ArrowUpRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import logoUnicorretor from "@/assets/logo-unicorretor.jpeg";
import logoFiqueAqui from "@/assets/logo-fiqueaqui.png";
import logoStayou from "@/assets/logo-stayou.png";
import logoStaycast from "@/assets/logo-staycast.png";
import logoStayPlus from "@/assets/logo-stayplus.png";

type Brand = {
  id: string;
  name: string;
  category: string;
  description: string;
  logo: string;
  href: string;
  accent: string;
  num: string;
  Icon: LucideIcon;
};

const brands: Brand[] = [
  {
    id: "stayou",
    name: "Stayou",
    category: "Marketplace · Proptech",
    description: "Sistema operacional do mercado. Une corretores, imobiliárias e incorporadoras em um único ambiente.",
    logo: logoStayou,
    href: "https://stayou.com.br/",
    accent: "oklch(0.55 0.22 305)",
    num: "01",
    Icon: Store,
  },
  {
    id: "unicorretor",
    name: "UniCorretor",
    category: "Educação",
    description: "Plataforma educacional que forma corretores com estratégia, previsibilidade e alta performance.",
    logo: logoUnicorretor,
    href: "https://unicorretor.com.br/",
    accent: "oklch(0.7 0.2 40)",
    num: "02",
    Icon: GraduationCap,
  },
  {
    id: "staycast",
    name: "StayCast",
    category: "Mídia · Podcast",
    description: "Podcast que reúne especialistas, investidores e líderes do setor imobiliário.",
    logo: logoStaycast,
    href: "https://www.youtube.com/@staycast",
    accent: "oklch(0.7 0.24 4)",
    num: "03",
    Icon: Mic,
  },
  {
    id: "fiqueaqui",
    name: "Fique Aqui",
    category: "Imobiliária Digital",
    description: "A startup que coloca o corretor no topo. Tecnologia, oportunidades e a melhor comissão do mercado.",
    logo: logoFiqueAqui,
    href: "https://fiqueaquiimoveis.com.br/",
    accent: "oklch(0.65 0.18 145)",
    num: "04",
    Icon: Building2,
  },
  {
    id: "stayplus",
    name: "Stay Plus",
    category: "Mídia · Performance",
    description: "Produtora que transforma atenção em vendas — estratégia, conteúdo e tecnologia de marca.",
    logo: logoStayPlus,
    href: "https://stayplus.com.br/",
    accent: "oklch(0.7 0.26 350)",
    num: "05",
    Icon: Clapperboard,
  },
];

export function Ecosystem() {
  const [active, setActive] = useState<string>(brands[0].id);
  const current = brands.find((b) => b.id === active)!;

  return (
    <section id="ecossistema" className="relative py-32 md:py-48 px-6 md:px-10 overflow-hidden">
      <div className="mx-auto max-w-[1400px]">
        {/* Header asymmetric */}
        <div className="grid grid-cols-12 gap-4 md:gap-8 mb-20">
          <div className="col-span-12 md:col-span-2">
            <span className="marker">§ 02 — Ecossistema</span>
          </div>
          <div className="col-span-12 md:col-span-7">
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight">
              Cinco marcas. <br />
              <span className="italic text-gradient">Um organismo</span> só.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-3 md:flex md:items-end">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Passe pelos índices ao lado. Cada marca opera em uma camada. Juntas, criam vantagem composta.
            </p>
          </div>
        </div>

        {/* Interactive showcase — list + visual */}
        <div className="grid grid-cols-12 gap-4 md:gap-8">
          {/* Index list */}
          <div className="col-span-12 md:col-span-7 border-t border-border">
            {brands.map((b) => (
              <div
                key={b.id}
                onMouseEnter={() => setActive(b.id)}
                className="group relative border-b border-border py-8 md:py-10 cursor-pointer transition-colors"
              >
                <a
                  href={b.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid grid-cols-12 gap-4 items-baseline"
                >
                  <span className="col-span-2 md:col-span-1 font-mono text-xs text-muted-foreground/60 pt-2">
                    /{b.num}
                  </span>
                  <div className="col-span-10 md:col-span-7">
                    <h3
                      className={`font-display text-4xl md:text-6xl tracking-tight transition-all duration-500 ${
                        active === b.id ? "text-paper translate-x-2" : "text-foreground/40"
                      }`}
                    >
                      {b.name}
                    </h3>
                  </div>
                  <span className="hidden md:block col-span-3 marker">{b.category}</span>
                  <span
                    className={`hidden md:flex col-span-1 items-center justify-end text-xl transition-all duration-500 ${
                      active === b.id ? "text-paper opacity-100 translate-x-0" : "text-paper opacity-30 -translate-x-2"
                    }`}
                  >
                    →
                  </span>
                </a>
                {/* underline accent */}
                <div
                  className={`absolute bottom-[-1px] left-0 h-px transition-all duration-700`}
                  style={{
                    width: active === b.id ? "100%" : "0%",
                    background: b.accent,
                  }}
                />
              </div>
            ))}
          </div>

          {/* Sticky visual panel */}
          <div className="col-span-12 md:col-span-5 md:sticky md:top-32 self-start">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[4/5] rounded-3xl overflow-hidden ring-soft"
            >
              {/* Color field */}
              <div
                className="absolute inset-0"
                style={{
                  background: `radial-gradient(ellipse at 30% 20%, ${current.accent}, transparent 70%), linear-gradient(160deg, oklch(0.18 0.02 270), oklch(0.13 0.015 270))`,
                }}
              />
              <div className="absolute inset-0 grid-pattern opacity-40" />

              {/* Orbital ring */}
              <div className="absolute inset-12 border border-white/10 rounded-full animate-orbit" />
              <div className="absolute inset-20 border border-white/5 rounded-full" />

              {/* Logo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  key={current.id + "logo"}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="logo-glow"
                >
                  <img src={current.logo} alt={current.name} className="h-32 w-32 object-contain" />
                </motion.div>
              </div>

              {/* Footer info */}
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 bg-gradient-to-t from-black/60 to-transparent">
                <span className="marker">{current.category}</span>
                <h4 className="font-display text-2xl md:text-3xl mt-2">{current.name}</h4>
                <p className="mt-2 text-sm text-foreground/70 leading-relaxed">{current.description}</p>
                <a
                  href={current.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 mt-4 text-sm font-medium hover:gap-2.5 transition-all"
                >
                  Visitar site →
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
