import { motion } from "framer-motion";

export function CTA() {
  return (
    <section className="relative py-32 md:py-48 px-6 md:px-10 overflow-hidden">
      <div className="mx-auto max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          {/* Floating orb */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-40 animate-drift -z-10"
            style={{
              background: "radial-gradient(circle, oklch(0.55 0.22 290 / 0.5), transparent 60%)",
              filter: "blur(60px)",
            }}
          />

          <div className="grid grid-cols-12 gap-4 md:gap-8 items-end">
            <div className="col-span-12 md:col-span-2">
              <span className="marker">§ 06 — Convite</span>
            </div>
            <h2 className="col-span-12 md:col-span-10 font-display text-5xl md:text-8xl lg:text-9xl leading-[0.92] tracking-[-0.03em]">
              Entre no <br />
              <span className="italic text-gradient">ecossistema</span> que <br />
              está transformando <br />
              o <span className="text-gold italic">mercado.</span>
            </h2>
          </div>

          <div className="grid grid-cols-12 gap-4 md:gap-8 mt-16">
            <div className="hidden md:block col-span-5" />
            <div className="col-span-12 md:col-span-7 flex flex-wrap items-center gap-4">
              <a
                href="https://wa.me/5511998105952"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-paper text-ink px-7 py-4 text-sm font-medium hover:gap-3 transition-all"
              >
                Quero fazer parte
                <span>→</span>
              </a>
              <a
                href="#contato"
                className="group inline-flex items-center gap-2 rounded-full border border-border px-7 py-4 text-sm font-medium hover:bg-white/[0.04] transition"
              >
                Falar com especialista
              </a>
              <span className="marker md:ml-auto">SP / Paraíso · 2026</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
