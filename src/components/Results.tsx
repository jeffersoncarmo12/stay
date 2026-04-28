const stats = [
  { n: "10k+", l: "Profissionais impactados" },
  { n: "5M+", l: "Alcance mensal de mídia" },
  { n: "+R$ 1Bi", l: "Em potencial de vendas" },
  { n: "500+", l: "Episódios e conteúdos" },
];

const testimonials = [
  {
    quote:
      "Entrar para o ecossistema mudou minha forma de operar. Tecnologia, formação e mídia em um lugar só — isso não existia.",
    name: "Corretor parceiro",
    role: "São Paulo · SP",
  },
  {
    quote:
      "A integração entre as marcas é o que diferencia. Não é uma plataforma, é um sistema operacional completo.",
    name: "Imobiliária parceira",
    role: "Capital",
  },
  {
    quote:
      "Estratégia, conteúdo e performance no nível das melhores startups que conheço. Premium de verdade.",
    name: "Incorporadora",
    role: "Sudeste",
  },
];

export function Results() {
  return (
    <section id="resultados" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-20 reveal">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-violet">
            Resultados
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight">
            Números que <span className="text-gradient">comprovam</span>.
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden ring-soft mb-16 reveal">
          {stats.map((s) => (
            <div key={s.l} className="bg-background p-8 md:p-10 text-center">
              <div className="text-4xl md:text-5xl font-display font-semibold text-gradient">
                {s.n}
              </div>
              <div className="mt-2 text-xs md:text-sm text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <figure
              key={i}
              className="reveal rounded-2xl glass ring-soft p-7 flex flex-col"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <svg className="h-6 w-6 text-violet mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9.5 7C5.91 7 3 9.91 3 13.5V20h6.5v-6.5H6c0-1.93 1.57-3.5 3.5-3.5V7zm11 0c-3.59 0-6.5 2.91-6.5 6.5V20h6.5v-6.5H17c0-1.93 1.57-3.5 3.5-3.5V7z" />
              </svg>
              <blockquote className="text-base text-foreground/90 leading-relaxed flex-1">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 pt-4 border-t border-border">
                <div className="text-sm font-medium">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
