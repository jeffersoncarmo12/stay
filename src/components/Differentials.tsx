import { Cpu, Megaphone, GraduationCap, Zap, TrendingUp } from "lucide-react";

const items = [
  {
    icon: Cpu,
    title: "Tecnologia própria",
    desc: "Plataformas proprietárias construídas para escala — não dependemos de stacks de terceiros.",
  },
  {
    icon: Zap,
    title: "Geração de leads",
    desc: "Funis de aquisição que entregam volume e qualidade para corretores e incorporadoras.",
  },
  {
    icon: Megaphone,
    title: "Autoridade com mídia",
    desc: "Conteúdo, podcast e produção de marca que constroem reputação real no setor.",
  },
  {
    icon: GraduationCap,
    title: "Educação contínua",
    desc: "Formação de corretores de alta performance com metodologia testada em campo.",
  },
  {
    icon: TrendingUp,
    title: "Escalabilidade",
    desc: "Infraestrutura, processos e operação para crescer sem perder margem.",
  },
];

export function Differentials() {
  return (
    <section id="diferenciais" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid md:grid-cols-[1fr_1.6fr] gap-16 items-start">
          <div className="reveal md:sticky md:top-32">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-violet">
              Diferenciais
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight leading-[1.05]">
              O que nos torna <span className="text-gradient">diferentes</span>.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Cinco vantagens estruturais que transformam a operação de quem entra no ecossistema.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-3">
            {items.map((it, i) => {
              const Icon = it.icon;
              return (
                <div
                  key={it.title}
                  className="reveal group rounded-2xl glass ring-soft p-6 hover:bg-white/[0.04] transition-all duration-500"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <div className="h-10 w-10 rounded-lg bg-violet/15 text-violet flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display font-semibold text-lg">{it.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
