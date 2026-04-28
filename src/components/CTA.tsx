import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="relative py-32 px-6">
      <div className="mx-auto max-w-5xl">
        <div className="relative reveal rounded-3xl overflow-hidden ring-soft glass-strong p-12 md:p-20 text-center">
          <div className="absolute inset-0 bg-mesh opacity-80" />
          <div className="absolute inset-0 grid-pattern opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />

          <div className="relative">
            <h2 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05] max-w-3xl mx-auto">
              Entre para o ecossistema que está <span className="text-gradient">transformando o mercado</span>.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
              Tecnologia, mídia e educação trabalhando como uma só máquina — para você crescer.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="https://wa.me/5511998105952"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-7 py-3.5 text-sm font-semibold hover:bg-foreground/90 transition shadow-soft"
              >
                Quero fazer parte
                <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="#contato"
                className="inline-flex items-center gap-2 rounded-full glass px-7 py-3.5 text-sm font-semibold hover:bg-white/5 transition"
              >
                Falar com especialista
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
