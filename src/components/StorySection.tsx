const steps = [
  {
    n: "01",
    icon: "🌱",
    title: "A Origem da Stayempresas",
    sub: "Como tudo começou",
    body: "Nascemos de uma transformação pessoal profunda. O fundador decidiu priorizar a qualidade de vida e o propósito sobre o sucesso financeiro, criando uma marca que valoriza a realização profissional e familiar.",
  },
  {
    n: "02",
    icon: "🚀",
    title: "A Visão Revolucionária",
    sub: "Nossa diferença",
    body: "Vamos além das práticas tradicionais do mercado imobiliário, proporcionando um verdadeiro senso de realização e prosperidade a clientes e colaboradores, com bem-estar integrado à nossa identidade.",
  },
  {
    n: "03",
    icon: "💪",
    title: "Superando Desafios",
    sub: "Resiliência",
    body: "Nossa trajetória foi marcada por desafios reais. O fundador assumiu múltiplas funções, adaptou estratégias e aprendeu com cada obstáculo — fortalecendo ainda mais a visão da empresa.",
  },
  {
    n: "04",
    icon: "⭐",
    title: "Princípios e Valores",
    sub: "Nossa base",
    body: "Ética, profissionalismo e integridade guiam cada decisão. Buscamos não só o sucesso financeiro, mas uma vida equilibrada e plena para todos os nossos stakeholders.",
  },
  {
    n: "05",
    icon: "👤",
    title: "Quem Nos Representa",
    sub: "Liderança",
    body: "Jefferson, líder apaixonado pelo setor imobiliário e pelos valores cristãos, é a face da Stayempresas. Sua dedicação guia a empresa em direção ao impacto positivo e à inovação no mercado.",
  },
];

export function StorySection() {
  return (
    <section id="sobre" className="relative py-32 px-6">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-20">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.3em] text-primary mb-4">
            Nossa história
          </span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            Transformação pessoal e <br />
            <span className="text-gradient">profissional na Stayempresas</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Uma história de propósito, visão e impacto real no mercado imobiliário.
          </p>
        </div>

        <div className="relative">
          {/* timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent md:-translate-x-px" />

          <div className="space-y-16">
            {steps.map((s, i) => (
              <div
                key={s.n}
                className={`relative md:grid md:grid-cols-2 md:gap-12 items-center ${
                  i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"
                }`}
              >
                <div className={`pl-20 md:pl-0 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"}`}>
                  <div className="text-6xl font-bold font-display text-gradient opacity-60">{s.n}</div>
                  <h3 className="mt-2 text-2xl md:text-3xl font-bold">{s.title}</h3>
                  <p className="mt-1 text-sm text-primary font-medium">{s.sub}</p>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{s.body}</p>
                </div>

                {/* node */}
                <div className="absolute left-8 md:left-1/2 top-2 -translate-x-1/2 h-16 w-16 rounded-full glass flex items-center justify-center text-2xl shadow-glow z-10">
                  {s.icon}
                </div>

                <div className="hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
