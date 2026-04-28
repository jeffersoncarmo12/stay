import { ArrowUpRight } from "lucide-react";
import logoUnicorretor from "@/assets/logo-unicorretor.jpeg";
import logoFiqueAqui from "@/assets/logo-fiqueaqui.png";
import logoStayou from "@/assets/logo-stayou.png";
import logoStaycast from "@/assets/logo-staycast.png";
import logoStayPlus from "@/assets/logo-stayplus.png";

type Brand = {
  name: string;
  category: string;
  description: string;
  logo: string;
  href: string;
  accent: string;
  size?: "lg" | "md";
};

const brands: Brand[] = [
  {
    name: "Stayou",
    category: "Marketplace · Proptech",
    description:
      "O sistema operacional do mercado imobiliário. Marketplace que une corretores, imobiliárias, construtoras e incorporadoras em um único ecossistema de alta performance.",
    logo: logoStayou,
    href: "https://stayou.com.br/",
    accent: "oklch(0.5 0.2 305)",
    size: "lg",
  },
  {
    name: "UniCorretor",
    category: "Educação",
    description:
      "Plataforma educacional que forma corretores com estratégia, previsibilidade e alta performance.",
    logo: logoUnicorretor,
    href: "https://unicorretor.com.br/",
    accent: "oklch(0.68 0.2 40)",
  },
  {
    name: "StayCast",
    category: "Mídia · Podcast",
    description:
      "Podcast que reúne especialistas, investidores e líderes do setor imobiliário.",
    logo: logoStaycast,
    href: "https://www.youtube.com/@staycast",
    accent: "oklch(0.68 0.24 4)",
  },
  {
    name: "Fique Aqui Imóveis",
    category: "Imobiliária Digital",
    description:
      "A startup que coloca o corretor no topo. Mais tecnologia, mais oportunidades, melhor comissão.",
    logo: logoFiqueAqui,
    href: "https://fiqueaquiimoveis.com.br/",
    accent: "oklch(0.6 0.18 145)",
  },
  {
    name: "Stay Plus",
    category: "Mídia · Performance",
    description:
      "Produtora que transforma atenção em vendas — estratégia, conteúdo e tecnologia de marca.",
    logo: logoStayPlus,
    href: "https://stayplus.com.br/",
    accent: "oklch(0.68 0.26 350)",
  },
];

function BrandCard({ brand }: { brand: Brand }) {
  const isLg = brand.size === "lg";
  return (
    <a
      href={brand.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative overflow-hidden rounded-2xl glass ring-soft p-8 md:p-10 transition-all duration-500 hover:-translate-y-1 ${
        isLg ? "md:col-span-2 md:row-span-2" : ""
      }`}
    >
      <div
        className="absolute -top-20 -right-20 h-64 w-64 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-700"
        style={{ background: brand.accent }}
      />
      <div className="relative flex flex-col h-full">
        <div className="flex items-start justify-between mb-8">
          <div className="h-14 w-14 rounded-xl bg-white/5 ring-soft p-2.5 flex items-center justify-center backdrop-blur-sm">
            <img src={brand.logo} alt={brand.name} className="max-h-full max-w-full object-contain" />
          </div>
          <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground group-hover:rotate-12 transition-all" />
        </div>

        <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          {brand.category}
        </span>
        <h3 className={`mt-2 font-semibold tracking-tight ${isLg ? "text-3xl md:text-4xl" : "text-2xl"}`}>
          {brand.name}
        </h3>
        <p className={`mt-3 text-muted-foreground leading-relaxed ${isLg ? "text-base md:text-lg" : "text-sm"}`}>
          {brand.description}
        </p>

        <div className="mt-auto pt-8">
          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground/80 group-hover:text-foreground transition">
            Saiba mais
            <ArrowUpRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </div>
    </a>
  );
}

export function Ecosystem() {
  return (
    <section id="ecossistema" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl mb-16 reveal">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-violet">
            Ecossistema
          </span>
          <h2 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight leading-[1.02]">
            Cinco marcas. <br />
            <span className="text-gradient">Um único ecossistema.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Cada empresa resolve uma camada do mercado — juntas, criam vantagem competitiva exponencial.
          </p>
        </div>

        <div className="grid md:grid-cols-3 auto-rows-fr gap-4 reveal">
          {brands.map((b) => (
            <BrandCard key={b.name} brand={b} />
          ))}
        </div>
      </div>
    </section>
  );
}
