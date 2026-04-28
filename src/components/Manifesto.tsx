import { motion } from "framer-motion";

export function Manifesto() {
  return (
    <section id="manifesto" className="relative py-32 md:py-48 px-6 md:px-10 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30 [mask-image:linear-gradient(to_bottom,transparent,black_30%,black_70%,transparent)]" />

      <div className="relative mx-auto max-w-[1400px]">
        {/* Asymmetric layout — marker far left, content offset right */}
        <div className="grid grid-cols-12 gap-4 md:gap-8 mb-16">
          <div className="col-span-12 md:col-span-2">
            <span className="marker">§ 03 — Manifesto</span>
          </div>
          <div className="col-span-12 md:col-span-7 md:col-start-4">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-3xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-foreground/95"
            >
              Não somos uma <span className="italic text-gradient">imobiliária</span>.
              Somos um <span className="italic text-gold">organismo</span> de tecnologia que
              <span className="text-foreground/40"> respira mercado</span>.
            </motion.p>
          </div>
        </div>

        {/* Three column staggered narrative */}
        <div className="grid grid-cols-12 gap-4 md:gap-8 mt-24">
          {[
            {
              n: "i.",
              t: "Tecnologia primeiro",
              p: "Construímos infraestrutura proprietária. Não dependemos de stacks de terceiros — cada plataforma é nossa.",
              align: "md:col-start-2",
            },
            {
              n: "ii.",
              t: "Mídia como autoridade",
              p: "Conteúdo, podcast e produção de marca que constroem reputação real, não vaidade digital.",
              align: "md:col-start-5 md:mt-24",
            },
            {
              n: "iii.",
              t: "Educação contínua",
              p: "Formação de profissionais de alta performance. Metodologia testada em campo, não em sala.",
              align: "md:col-start-8 md:mt-48",
            },
          ].map((c, i) => (
            <motion.div
              key={c.n}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className={`col-span-12 md:col-span-4 ${c.align}`}
            >
              <span className="font-display italic text-violet text-lg">{c.n}</span>
              <h3 className="font-display text-2xl md:text-3xl mt-3">{c.t}</h3>
              <p className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed">{c.p}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
