import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-dashboard.jpg";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-mesh">
      <div className="absolute inset-0 grid-pattern opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,black,transparent)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="text-center max-w-4xl mx-auto">
          <a
            href="#ecossistema"
            className="inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5 mb-8 text-xs text-muted-foreground hover:text-foreground transition group"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-violet animate-pulse" />
            Holding de tecnologia imobiliária
            <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
          </a>

          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-semibold tracking-[-0.04em] leading-[0.95]">
            O futuro do mercado <br />
            imobiliário <span className="text-gradient">começa aqui.</span>
          </h1>

          <p className="mt-7 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Tecnologia, mídia e educação em um único ecossistema que conecta corretores, imobiliárias e incorporadoras.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#ecossistema"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-semibold hover:bg-foreground/90 transition shadow-soft"
            >
              Conhecer ecossistema
              <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-semibold hover:bg-white/5 transition"
            >
              Falar com especialista
            </a>
          </div>
        </div>

        {/* Dashboard visual */}
        <div className="relative mt-20 md:mt-28 reveal">
          <div className="absolute -inset-x-20 -top-10 -bottom-10 bg-gradient-to-b from-violet/10 via-azure/10 to-transparent blur-3xl opacity-60" />
          <div className="relative rounded-2xl overflow-hidden ring-soft shadow-glow">
            <img
              src={heroImg}
              alt="Dashboard do ecossistema Stay"
              width={1600}
              height={1200}
              className="w-full h-auto"
            />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
