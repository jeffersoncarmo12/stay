import { motion } from "framer-motion";

const principles = [
  { n: "α", title: "Tecnologia própria", body: "Stack proprietária. Cada produto é construído internamente, ponta a ponta." },
  { n: "β", title: "Geração de leads", body: "Funis de aquisição que entregam volume e qualidade — não vaidade de tráfego." },
  { n: "γ", title: "Autoridade real", body: "Mídia, conteúdo e podcast que constroem reputação durável no setor." },
  { n: "δ", title: "Escola de mercado", body: "Formação contínua de profissionais com metodologia validada em campo." },
  { n: "ε", title: "Escala composta", body: "Operação e processos para crescer sem perder margem nem qualidade." },
];

export function Method() {
  return (
    <section id="diferenciais" className="relative py-32 md:py-48 px-6 md:px-10 overflow-hidden">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-12 gap-4 md:gap-8 mb-20">
          <div className="col-span-12 md:col-span-2">
            <span className="marker">§ 04 — Método</span>
          </div>
          <div className="col-span-12 md:col-span-10">
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight">
              Cinco <span className="italic text-gradient">vetores</span>. <br />
              <span className="text-foreground/40">Um único método.</span>
            </h2>
          </div>
        </div>

        {/* Greek-letter principles in a measured grid */}
        <div className="border-t border-border">
          {principles.map((p, i) => (
            <motion.div
              key={p.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="group grid grid-cols-12 gap-4 md:gap-8 py-10 md:py-12 border-b border-border hover:bg-white/[0.02] transition-colors"
            >
              <div className="col-span-2 md:col-span-1">
                <span className="font-display italic text-3xl md:text-5xl text-violet group-hover:text-gold transition-colors duration-700">
                  {p.n}
                </span>
              </div>
              <div className="col-span-10 md:col-span-5">
                <h3 className="font-display text-2xl md:text-4xl">{p.title}</h3>
              </div>
              <div className="hidden md:block col-span-1" />
              <div className="col-span-12 md:col-span-5">
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-md">
                  {p.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
