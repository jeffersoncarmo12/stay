import { motion } from "framer-motion";

const audiences = [
  {
    label: "Para corretores",
    quote: "Tecnologia, leads, formação e mídia para se tornar referência no seu mercado.",
    points: ["Plataforma proptech", "Educação certificada", "Comunidade ativa"],
  },
  {
    label: "Para imobiliárias",
    quote: "Operação digital, gestão de equipe e funis prontos para escalar.",
    points: ["CRM integrado", "Gestão de leads", "Treinamento de time"],
  },
  {
    label: "Para incorporadoras",
    quote: "Distribuição em escala, mídia performática e dados de mercado em tempo real.",
    points: ["Marketplace nacional", "Mídia performance", "Inteligência de mercado"],
  },
];

const stats = [
  { n: "05+", l: "Empresas integradas" },
  { n: "+70.000", l: "Profissionais na base" },
  { n: "2026", l: "Crescimento acelerado" },
];

export function Field() {
  return (
    <section id="campo" className="relative py-32 md:py-48 px-6 md:px-10 overflow-hidden">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-12 gap-4 md:gap-8 mb-20">
          <div className="col-span-12 md:col-span-2">
            <span className="marker">§ 05 — Campo</span>
          </div>
          <div className="col-span-12 md:col-span-10">
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight">
              Construído para quem <br />
              <span className="italic text-gradient">move</span> o mercado.
            </h2>
          </div>
        </div>

        {/* Three audience pillars — staircase composition */}
        <div className="grid grid-cols-12 gap-6 md:gap-8 mb-32">
          {audiences.map((a, i) => (
            <motion.article
              key={a.label}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className={`col-span-12 md:col-span-4 group ${
                i === 1 ? "md:mt-12" : i === 2 ? "md:mt-24" : ""
              }`}
            >
              <div className="relative rounded-3xl glass ring-soft overflow-hidden">
                <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-violet/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                <div className="relative p-8 md:p-10">
                  <span className="marker">{a.label}</span>
                  <p className="font-display text-2xl md:text-3xl mt-4 leading-tight">"{a.quote}"</p>
                  <ul className="mt-8 space-y-2.5 pt-6 border-t border-border">
                    {a.points.map((p) => (
                      <li key={p} className="flex items-center gap-3 text-sm text-muted-foreground">
                        <span className="font-mono text-[10px] text-violet">/</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Stats — large numbers, editorial */}
        <div className="grid grid-cols-12 gap-4 md:gap-8 border-t border-border pt-16">
          <div className="col-span-12 md:col-span-3">
            <span className="marker">Resultados em campo</span>
            <p className="mt-3 text-foreground/60 text-sm leading-relaxed">
              Dados consolidados do ecossistema Stay em 2026.
            </p>
          </div>
          {stats.map((s, i) => (
            <motion.div
              key={s.l}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="col-span-6 md:col-span-3"
            >
              <div className="font-display text-4xl md:text-6xl lg:text-7xl text-paper tracking-tight">{s.n}</div>
              <div className="marker mt-2">{s.l}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
