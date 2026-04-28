import { motion } from "framer-motion";

const clients = [
  { name: "ECON", style: "tracking-[0.25em] font-light" },
  { name: "Plano&Plano", style: "italic font-display tracking-tight" },
  { name: "GNG", sub: "ENGENHARIA", style: "font-bold tracking-tight" },
  { name: "NEO URB", style: "tracking-[0.32em] font-light" },
  { name: "CONX", style: "font-black tracking-tight" },
];

export function Clients() {
  return (
    <section id="clientes" className="relative py-24 md:py-32 px-6 md:px-10 overflow-hidden border-y border-border">
      {/* Subtle ambient */}
      <div
        className="absolute inset-0 opacity-40 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, oklch(0.55 0.22 290 / 0.08), transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-12 gap-4 md:gap-8 mb-14 md:mb-20 items-end">
          <div className="col-span-12 md:col-span-2">
            <span className="marker">§ — Confiança</span>
          </div>
          <div className="col-span-12 md:col-span-7">
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl leading-[1.02] tracking-tight">
              Empresas que <span className="italic text-gradient">confiam</span> no nosso método.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-3">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Operações reais, players relevantes — resultados em campo.
            </p>
          </div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
          }}
          className="grid grid-cols-2 md:grid-cols-5 gap-px bg-border rounded-2xl overflow-hidden ring-soft"
        >
          {clients.map((c) => (
            <motion.div
              key={c.name}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
              }}
              className="group relative bg-background flex flex-col items-center justify-center h-32 md:h-40 px-6 transition-all duration-500 hover:bg-white/[0.025]"
            >
              <span
                className={`text-paper/60 group-hover:text-paper transition-colors duration-500 text-xl md:text-2xl ${c.style}`}
              >
                {c.name}
              </span>
              {c.sub && (
                <span className="mt-1 text-[10px] tracking-[0.3em] text-muted-foreground/70 group-hover:text-muted-foreground transition-colors duration-500">
                  {c.sub}
                </span>
              )}
              <span
                className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-0 group-hover:w-full transition-all duration-700"
                style={{ background: "linear-gradient(90deg, transparent, oklch(0.62 0.22 290), transparent)" }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
