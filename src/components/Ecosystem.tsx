import { motion } from "framer-motion";
import { useState } from "react";
import {
  Store,
  GraduationCap,
  Mic,
  Building2,
  Clapperboard,
  ArrowUpRight,
  Globe,
  Youtube,
  Instagram,
  Briefcase,
  Sparkles,
  PlayCircle,
  Users,
  FileText,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import logoUnicorretor from "@/assets/logo_unicorretor.png";
import logoFiqueAqui from "@/assets/logo-fiqueaqui.png";
import logoStayou from "@/assets/logo-stayou.png";
import logoStaycast from "@/assets/logo-staycast.png";
import logoStayPlus from "@/assets/logo-stayplus.png";

type BrandLink = { label: string; href: string; Icon: LucideIcon };

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
  links: BrandLink[];
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
    links: [
      { label: "Site oficial", href: "https://stayou.com.br/", Icon: Globe },
      { label: "Stayou Business", href: "https://business.stayou.com.br/", Icon: Briefcase },
      { label: "Portal do Agente", href: "https://agente.stayou.com.br/", Icon: Users },
      { label: "CRM", href: "https://stayoucrm.com/landing", Icon: Sparkles },
      { label: "Apresentação", href: "https://stayempresas.com.br/apresentacao-stayou-click/", Icon: FileText },
      { label: "Vídeo institucional", href: "https://www.youtube.com/watch?v=MvQs26_iA4Q", Icon: PlayCircle },
    ],
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
    links: [
      { label: "Site oficial", href: "https://unicorretor.com.br/", Icon: Globe },
      { label: "Corporativo", href: "https://corporativo.unicorretor.com.br/", Icon: Briefcase },
      { label: "Oferta", href: "https://oferta.unicorretor.com.br/", Icon: Sparkles },
      { label: "YouTube", href: "https://www.youtube.com/@unicorretor", Icon: Youtube },
      { label: "Instagram", href: "https://www.instagram.com/unicorretor/", Icon: Instagram },
      { label: "Apresentação", href: "https://stayempresas.com.br/apresentacao-unicorretor/", Icon: FileText },
    ],
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
    links: [
      { label: "YouTube", href: "https://www.youtube.com/@staycast", Icon: Youtube },
      { label: "Instagram", href: "https://www.instagram.com/stay.cast/", Icon: Instagram },
      { label: "Apresentação", href: "https://stayempresas.com.br/apresentacao-stay-cast/", Icon: FileText },
    ],
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
    links: [
      { label: "Site oficial", href: "https://fiqueaquiimoveis.com.br/", Icon: Globe },
      { label: "Vídeo institucional", href: "https://www.youtube.com/watch?v=Dt-nmmoYeRo", Icon: PlayCircle },
      { label: "Instagram", href: "https://www.instagram.com/fiqueaquiimoveis/", Icon: Instagram },
      { label: "Apresentação", href: "https://stayempresas.com.br/apresentacao-fique-aqui-imoveis/", Icon: FileText },
    ],
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
    links: [
      { label: "Site oficial", href: "https://stayplus.com.br/", Icon: Globe },
      { label: "Vídeo institucional", href: "https://www.youtube.com/watch?v=O8K2RbOKTwg", Icon: PlayCircle },
      { label: "Instagram", href: "https://www.instagram.com/stayplusprodutora", Icon: Instagram },
      { label: "Apresentação", href: "https://drive.google.com/file/d/15AYxbqBt5WmEbkYtrLT2qMx1cBKjUlAH/view", Icon: FileText },
    ],
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
            {brands.map((b) => {
              const Icon = b.Icon;
              const isActive = active === b.id;
              return (
                <a
                  key={b.id}
                  href={b.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setActive(b.id)}
                  className="group relative block border-b border-border py-7 md:py-9 cursor-pointer outline-none focus-visible:bg-white/[0.03] active:scale-[0.995] transition-transform"
                  style={{ perspective: "1000px" }}
                >
                  <div className="grid grid-cols-12 gap-4 items-center">
                    <span className="col-span-2 md:col-span-1 font-mono text-xs text-muted-foreground/60">
                      /{b.num}
                    </span>

                    {/* Icon chip with depth + glow on hover */}
                    <div className="col-span-2 md:col-span-1">
                      <div
                        className="relative h-11 w-11 md:h-12 md:w-12 rounded-xl flex items-center justify-center ring-soft transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-0.5 group-active:scale-95"
                        style={{
                          background: isActive
                            ? `linear-gradient(135deg, ${b.accent}, oklch(0.18 0.02 270))`
                            : "oklch(1 0 0 / 0.03)",
                          boxShadow: isActive
                            ? `0 12px 30px -10px ${b.accent}, inset 0 1px 0 oklch(1 0 0 / 0.15)`
                            : "inset 0 0 0 1px oklch(1 0 0 / 0.06)",
                          transform: isActive ? "rotateX(8deg) rotateY(-8deg)" : "none",
                          transformStyle: "preserve-3d",
                        }}
                      >
                        <Icon
                          className={`h-5 w-5 transition-colors duration-500 ${isActive ? "text-paper" : "text-foreground/50 group-hover:text-paper"}`}
                          strokeWidth={1.5}
                        />
                      </div>
                    </div>

                    <div className="col-span-8 md:col-span-6">
                      <h3
                        className={`font-display text-3xl md:text-5xl tracking-tight transition-all duration-500 ${
                          isActive ? "text-paper translate-x-2" : "text-foreground/40 group-hover:text-foreground/70"
                        }`}
                      >
                        {b.name}
                      </h3>
                    </div>
                    <span className="hidden md:block col-span-3 marker">{b.category}</span>
                    <span
                      className={`hidden md:flex col-span-1 items-center justify-end transition-all duration-500 ${
                        isActive ? "text-paper opacity-100 translate-x-0" : "text-paper opacity-30 -translate-x-2"
                      }`}
                    >
                      <ArrowUpRight className="h-5 w-5" strokeWidth={1.5} />
                    </span>
                  </div>
                  {/* underline accent */}
                  <div
                    className="absolute bottom-[-1px] left-0 h-px transition-all duration-700"
                    style={{
                      width: isActive ? "100%" : "0%",
                      background: `linear-gradient(90deg, ${b.accent}, transparent)`,
                    }}
                  />
                </a>
              );
            })}
          </div>

          {/* Sticky visual panel */}
          <div className="col-span-12 md:col-span-5 md:sticky md:top-32 self-start">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-3xl overflow-hidden ring-soft"
            >
              {/* Visual hero */}
              <div className="relative aspect-[5/4]">
                <div
                  className="absolute inset-0"
                  style={{
                    background: `radial-gradient(ellipse at 30% 20%, ${current.accent}, transparent 70%), linear-gradient(160deg, oklch(0.18 0.02 270), oklch(0.13 0.015 270))`,
                  }}
                />
                <div className="absolute inset-0 grid-pattern opacity-40" />
                <div className="absolute inset-8 border border-white/10 rounded-full animate-orbit" />
                <div className="absolute inset-16 border border-white/5 rounded-full" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    key={current.id + "logo"}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="logo-glow"
                  >
                    <img src={current.logo} alt={current.name} className="h-28 w-28 object-contain" />
                  </motion.div>
                </div>
              </div>

              {/* Info + links */}
              <div className="relative p-6 md:p-7 bg-gradient-to-b from-black/40 to-black/70 border-t border-border">
                <span className="marker">{current.category}</span>
                <h4 className="font-display text-2xl md:text-3xl mt-2">{current.name}</h4>
                <p className="mt-2 text-sm text-foreground/70 leading-relaxed">{current.description}</p>

                <div className="mt-5 grid grid-cols-2 gap-2">
                  {current.links.map((l) => {
                    const LIcon = l.Icon;
                    return (
                      <a
                        key={l.href}
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link flex items-center gap-2.5 rounded-xl border border-border bg-white/[0.02] px-3 py-2.5 text-xs text-foreground/80 hover:text-paper hover:bg-white/[0.06] hover:border-white/15 active:scale-[0.97] transition-all"
                      >
                        <span
                          className="flex h-7 w-7 items-center justify-center rounded-lg transition-all duration-500 group-hover/link:scale-110"
                          style={{ background: `${current.accent.replace(")", " / 0.18)")}` }}
                        >
                          <LIcon className="h-3.5 w-3.5" strokeWidth={1.75} />
                        </span>
                        <span className="truncate">{l.label}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
