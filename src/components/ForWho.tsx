import { UserRound, Building2, Landmark } from "lucide-react";

const audiences = [
  {
    icon: UserRound,
    title: "Corretores",
    desc: "Tecnologia, leads, formação e mídia para se tornar referência no seu mercado.",
    points: ["Plataforma proptech", "Educação certificada", "Comunidade ativa"],
  },
  {
    icon: Building2,
    title: "Imobiliárias",
    desc: "Operação digital, gestão de equipe e funis de aquisição prontos para escalar.",
    points: ["CRM integrado", "Gestão de leads", "Treinamento de time"],
  },
  {
    icon: Landmark,
    title: "Incorporadoras",
    desc: "Distribuição em escala, mídia performática e inteligência de mercado em tempo real.",
    points: ["Marketplace nacional", "Mídia de performance", "Dados de mercado"],
  },
];

export function ForWho() {
  return (
    <section id="para-quem" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-violet">
            Para quem é
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight">
            Construído para <span className="text-gradient">quem move o mercado</span>.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {audiences.map((a, i) => {
            const Icon = a.icon;
            return (
              <div
                key={a.title}
                className="reveal group relative rounded-2xl glass ring-soft p-8 overflow-hidden hover:-translate-y-1 transition-all duration-500"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-violet/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-violet/30 to-azure/20 flex items-center justify-center mb-6">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-2xl font-display font-semibold">{a.title}</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{a.desc}</p>
                  <ul className="mt-6 space-y-2 pt-6 border-t border-border">
                    {a.points.map((p) => (
                      <li key={p} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                        <span className="h-1 w-1 rounded-full bg-violet" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
