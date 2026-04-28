import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroImg from "@/assets/hero-dashboard.jpg";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const imgY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } } };
  const item = {
    hidden: { opacity: 0, y: 28 },
    show: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as const } },
  };

  return (
    <section ref={ref} id="top" className="relative min-h-[100svh] pt-32 md:pt-40 pb-20 overflow-hidden bg-cosmic">
      {/* Animated mesh + grid */}
      <div className="absolute inset-0 grid-pattern opacity-50 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,black,transparent_85%)]" />
      <motion.div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full opacity-30 animate-drift"
        style={{
          background: "radial-gradient(circle, oklch(0.55 0.22 290 / 0.6), transparent 60%)",
          filter: "blur(80px)",
        }}
      />

      <motion.div style={{ y, opacity }} className="relative mx-auto max-w-[1400px] px-6 md:px-10">
        {/* Top meta row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-between mb-16 md:mb-24"
        >
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-violet animate-pulse" />
            <span className="marker">Vol. 01 · Ecossistema</span>
          </div>
          <span className="marker hidden md:inline">Capítulo 01 / Origem</span>
        </motion.div>

        {/* Editorial headline grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="grid grid-cols-12 gap-x-4 md:gap-x-8"
        >
          <motion.span variants={item} className="col-span-12 md:col-span-2 marker mt-3 md:mt-6">
            (n.) holding
          </motion.span>

          <h1 className="col-span-12 md:col-span-10 font-display text-[18vw] md:text-[11vw] lg:text-[9.5rem] leading-[0.86] tracking-[-0.04em]">
            <motion.span variants={item} className="block">
              O futuro do
            </motion.span>
            <motion.span variants={item} className="block">
              <span className="italic text-gradient">mercado</span>{" "}
              <span className="text-foreground/90">imobiliário</span>
            </motion.span>
            <motion.span variants={item} className="block">
              <span className="text-foreground/40">começa</span>{" "}
              <span className="italic text-gold">aqui.</span>
            </motion.span>
          </h1>
        </motion.div>

        {/* Bottom row */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="grid grid-cols-12 gap-4 md:gap-8 mt-20 md:mt-28"
        >
          <motion.div variants={item} className="col-span-12 md:col-span-5">
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-md">
              Cinco marcas em um único organismo. Tecnologia, mídia e educação que transformam corretores, imobiliárias e incorporadoras.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a
                href="#ecossistema"
                className="group inline-flex items-center gap-2 rounded-full bg-paper text-ink px-6 py-3 text-sm font-medium hover:gap-3 transition-all"
              >
                Conhecer ecossistema
                <span>→</span>
              </a>
              <a
                href="#contato"
                className="text-sm text-muted-foreground hover:text-foreground transition px-4 py-3"
              >
                Falar com especialista
              </a>
            </div>
          </motion.div>

          <div className="hidden md:block col-span-1" />

          <motion.div variants={item} className="col-span-12 md:col-span-6">
            <div className="hairline mb-6" />
            <div className="grid grid-cols-3 gap-6">
              {[
                { n: "05", l: "Marcas conectadas" },
                { n: "10K+", l: "Profissionais ativos" },
                { n: "MMXXVI", l: "Ciclo atual" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-3xl md:text-5xl text-paper">{s.n}</div>
                  <div className="marker mt-2">{s.l}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Floating dashboard with parallax */}
      <motion.div
        style={{ y: imgY }}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative mx-auto max-w-[1200px] px-6 md:px-10 mt-24 md:mt-32"
      >
        <div className="absolute -inset-x-10 -top-10 -bottom-10 bg-gradient-to-b from-violet/10 to-transparent blur-3xl opacity-50" />
        <div className="relative rounded-3xl overflow-hidden ring-soft">
          <img src={heroImg} alt="" width={1600} height={1200} className="w-full h-auto" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
