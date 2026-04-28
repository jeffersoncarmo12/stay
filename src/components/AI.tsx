import { motion } from "framer-motion";
import { Bot, MessageSquare, Filter, Headset } from "lucide-react";

const features = [
  { Icon: MessageSquare, title: "Atendimento automatizado", body: "IA conversacional 24/7 que responde, qualifica e agenda — sem perder o tom da marca." },
  { Icon: Filter, title: "Qualificação inteligente", body: "Lead scoring preditivo que entrega ao corretor apenas oportunidades com intenção real." },
  { Icon: Headset, title: "Estrutura de SDR", body: "Operação híbrida: IA na base do funil, SDRs focados no que importa — fechar." },
];

const phrases = [
  "IA não é tendência. É vantagem competitiva.",
  "Automatize o atendimento. Potencialize suas vendas.",
  "Seu time foca em fechar. Nossa IA cuida do resto.",
];

export function AI() {
  return (
    <section id="ia" className="relative py-32 md:py-48 px-6 md:px-10 overflow-hidden">
      {/* Ambient */}
      <div
        className="absolute -top-32 left-1/4 w-[600px] h-[600px] rounded-full opacity-25 -z-10 animate-drift"
        style={{
          background: "radial-gradient(circle, oklch(0.62 0.22 290 / 0.5), transparent 60%)",
          filter: "blur(80px)",
        }}
      />
      <div className="absolute inset-0 grid-pattern opacity-25 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)] -z-10" />

      <div className="mx-auto max-w-[1400px]">
        {/* Header */}
        <div className="grid grid-cols-12 gap-4 md:gap-8 mb-16 md:mb-24">
          <div className="col-span-12 md:col-span-2">
            <span className="marker">§ — IA & Operação</span>
          </div>
          <div className="col-span-12 md:col-span-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-white/[0.03] px-3 py-1.5 mb-6">
                <Bot className="h-3.5 w-3.5 text-violet" strokeWidth={1.75} />
                <span className="marker !text-foreground/80">Inteligência artificial aplicada</span>
              </div>
              <h2 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[0.98] tracking-tight">
                Soluções em <span className="italic text-gradient">IA</span> para operação <br />
                comercial <span className="italic text-gold">imobiliária.</span>
              </h2>
              <p className="mt-8 text-base md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                Atendimento automatizado, qualificação inteligente e estrutura de SDR focada em performance.
                <span className="block mt-2 text-foreground/80">
                  Ideal para construtoras e incorporadoras que buscam escala real.
                </span>
              </p>
            </motion.div>
          </div>
        </div>

        {/* Feature trio */}
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          {features.map((f, i) => {
            const Icon = f.Icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 1, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`col-span-12 md:col-span-4 ${i === 1 ? "md:mt-12" : i === 2 ? "md:mt-24" : ""}`}
              >
                <div className="group relative h-full rounded-2xl p-7 md:p-8 glass ring-soft overflow-hidden transition-all duration-700 hover:-translate-y-1 hover:bg-white/[0.04]">
                  <div
                    className="absolute -top-24 -right-24 w-48 h-48 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
                    style={{ background: "radial-gradient(circle, oklch(0.62 0.22 290 / 0.45), transparent 70%)", filter: "blur(30px)" }}
                  />
                  <div className="relative">
                    <div className="inline-flex items-center justify-center h-11 w-11 rounded-xl bg-white/[0.04] ring-soft mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                      <Icon className="h-5 w-5 text-violet group-hover:text-gold transition-colors duration-500" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-display text-2xl md:text-3xl leading-tight">{f.title}</h3>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.body}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Pull quote phrase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-12 gap-4 md:gap-8 mt-24 md:mt-32"
        >
          <div className="col-span-12 md:col-span-2">
            <span className="marker">/ princípio</span>
          </div>
          <p className="col-span-12 md:col-span-10 font-display text-3xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
            “Mais leads atendidos. <span className="italic text-gradient">Mais oportunidades</span> convertidas.”
          </p>
        </motion.div>

        {/* Mini phrase ticker */}
        <div className="mt-20 grid grid-cols-12 gap-4 md:gap-6 border-t border-border pt-10">
          {phrases.map((p, i) => (
            <motion.div
              key={p}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="col-span-12 md:col-span-4"
            >
              <div className="flex items-start gap-3">
                <span className="font-mono text-[10px] text-violet mt-1.5">/0{i + 1}</span>
                <p className="font-display text-lg md:text-xl text-foreground/85 leading-snug">{p}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
