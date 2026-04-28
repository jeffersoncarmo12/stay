import { ExternalLink, Globe, Instagram, Youtube, FileText } from "lucide-react";

export type CompanyLink = {
  label: string;
  href: string;
  primary?: boolean;
};

export type Company = {
  name: string;
  tagline: string;
  description: string;
  logo: string;
  brandClass: string; // tailwind text color class for accent
  brandVar: string;   // css var name e.g. --brand-unicorretor
  site?: string;
  instagram?: string;
  youtube?: string;
  presentation?: string;
  extraLinks?: CompanyLink[];
};

export function CompanyCard({ company, reverse }: { company: Company; reverse?: boolean }) {
  const accent = `var(${company.brandVar})`;

  return (
    <article
      className="relative grid md:grid-cols-[280px_1fr] gap-0 rounded-3xl overflow-hidden shadow-elegant glass transition-all duration-500 hover:scale-[1.01] hover:shadow-glow"
      style={{
        boxShadow: `0 0 0 1px oklch(1 0 0 / 0.05), 0 30px 80px -30px ${accent.replace(")", " / 0.4)")}`,
      }}
    >
      {/* Logo panel */}
      <div
        className={`relative flex flex-col items-center justify-center p-10 ${reverse ? "md:order-2" : ""}`}
        style={{
          background: `linear-gradient(135deg, ${accent.replace(")", " / 0.25)")}, ${accent.replace(")", " / 0.05)")})`,
        }}
      >
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at center, ${accent.replace(")", " / 0.4)")}, transparent 70%)`,
          }}
        />
        <img src={company.logo} alt={`${company.name} logo`} className="relative h-28 w-auto object-contain drop-shadow-2xl" />

        <div className="relative mt-6 flex gap-2">
          {company.site && (
            <a href={company.site} target="_blank" rel="noopener noreferrer" aria-label="Site"
               className="h-9 w-9 rounded-full glass flex items-center justify-center hover:bg-white/15 transition">
              <Globe className="h-4 w-4" />
            </a>
          )}
          {company.youtube && (
            <a href={company.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube"
               className="h-9 w-9 rounded-full glass flex items-center justify-center hover:bg-white/15 transition">
              <Youtube className="h-4 w-4" />
            </a>
          )}
          {company.instagram && (
            <a href={company.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"
               className="h-9 w-9 rounded-full glass flex items-center justify-center hover:bg-white/15 transition">
              <Instagram className="h-4 w-4" />
            </a>
          )}
          {company.presentation && (
            <a href={company.presentation} target="_blank" rel="noopener noreferrer" aria-label="Apresentação"
               className="h-9 w-9 rounded-full glass flex items-center justify-center hover:bg-white/15 transition">
              <FileText className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-8 md:p-10 flex flex-col justify-center">
        <h3 className="text-3xl md:text-4xl font-bold font-display" style={{ color: accent }}>
          {company.name}
        </h3>
        <p className="mt-2 text-sm font-medium text-muted-foreground uppercase tracking-wider">
          {company.tagline}
        </p>
        <p className="mt-4 text-base text-foreground/80 leading-relaxed">
          {company.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          {company.site && (
            <a
              href={company.site}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
              style={{ background: accent }}
            >
              Conheça o site oficial
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          )}
          {company.extraLinks?.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition hover:bg-white/10"
              style={{
                background: `${accent.replace(")", " / 0.15)")}`,
                color: accent,
                border: `1px solid ${accent.replace(")", " / 0.3)")}`,
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}
