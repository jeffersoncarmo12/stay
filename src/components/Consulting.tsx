import { motion } from "framer-motion";
import { TrendingUp, Handshake, Target, Crown, Users2 } from "lucide-react";

const pillars = [
  { icon: TrendingUp, title: "Estratégias de vendas imobiliárias", body: "Funis e operações construídos para conversão real, não vaidade." },
  { icon: Handshake, title: "Parcerias comerciais estruturadas", body: "Acordos com corretoras, redes e canais que multiplicam alcance." },
  { icon: Target, title: "Geração de demanda qualificada", body: "Mídia e dados orientados a leads com intenção de compra." },
  { icon: Crown, title: "Posicionamento e autoridade de marca", body: "Construção de narrativa, mídia e percepção premium no mercado." },
  { icon: Users2, title: "Estruturação de times comerciais", body: "Recrutamento, treinamento e governança de equipes de alta performance." },
];

export function Consulting() {
  return (
    <section id="consultoria" className="relative py-32 md:py-48 px-6 md:px-10 overflow-hidden">
      {/* Premium ambient */}
      <div
        className="absolute -top-40 right-0 w-[700px] h-[700px] rounded-full opacity-25 -z-10 animate-drift"
        style={{
          background: "radial-gradient(circle, oklch(0.62 0.18 240 / 0.5), transparent 60%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute -bottom-40 -left-20 w-[600px] h-[600px] rounded-full opacity-20 -z-10"
        style={{
          background: "radial-gradient(circle, oklch(0.82 0.13 88 / 0.4), transparent 60%)",
          filter: "blur(80px)",
        }}
      />

      <div className="mx-auto max-w-[1400px]">
        {/* Header */}
        <div className="grid grid-cols-12 gap-4 md:gap-8 mb-16 md:mb-24">
          <div className="col-span-12 md:col-span-2">
            <span className="marker">§ — Consultoria</span>
          </div>
          <div className="col-span-12 md:col-span-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[0.98] tracking-tight">
                Consultoria estratégica para <br />
                <span className="italic text-gradient">construtoras</span> e{" "}
                <span className="italic text-gold">incorporadoras.</span>
              </h2>
              <p className="mt-8 text-base md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                Aumentamos suas vendas em até{" "}
                <span className="text-paper font-medium">30% a 40%</span> com métodos validados de mercado.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Pillars — asymmetric staggered grid */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 md:gap-6">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            // Staircase composition + asymmetric spans
            const layout = [
              "col-span-2 md:col-span-2",
              "col-span-2 md:col-span-2 md:mt-12",
              "col-span-2 md:col-span-2 md:mt-24",
              "col-span-2 md:col-span-3 md:col-start-2 md:mt-6",
              "col-span-2 md:col-span-3 md:mt-16",
            ];
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 1, delay: i * 0.09, ease: [0.16, 1, 0.3, 1] }}
                className={layout[i]}
              >
                <div className="group relative h-full rounded-2xl p-7 md:p-8 glass ring-soft overflow-hidden transition-all duration-700 hover:-translate-y-1 hover:bg-white/[0.04]">
                  {/* corner glow */}
                  <div
                    className="absolute -top-20 -right-20 w-44 h-44 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
                    style={{ background: "radial-gradient(circle, oklch(0.55 0.22 290 / 0.45), transparent 70%)", filter: "blur(30px)" }}
                  />
                  <div className="relative">
                    <div className="inline-flex items-center justify-center h-11 w-11 rounded-xl bg-white/[0.04] ring-soft mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                      <Icon className="h-5 w-5 text-violet group-hover:text-gold transition-colors duration-500" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-display text-xl md:text-2xl leading-tight">{p.title}</h3>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.body}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Differential pull-quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-12 gap-4 md:gap-8 mt-24 md:mt-32 items-center"
        >
          <div className="col-span-12 md:col-span-2">
            <span className="marker">/ diferencial</span>
          </div>
          <div className="col-span-12 md:col-span-7">
            <p className="font-display text-3xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
              Não é teoria. É <span className="italic text-gradient">prática validada</span> com grandes players do mercado.
            </p>
          </div>
          <div className="col-span-12 md:col-span-3">
            <a
              href="https://wa.me/5511998105952?text=Quero%20uma%20consultoria%20estrat%C3%A9gica"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-paper text-ink px-6 py-3.5 text-sm font-medium hover:gap-3 transition-all"
            >
              Agendar diagnóstico
              <span>→</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
