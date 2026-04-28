import logoStay from "@/assets/logo-stay.webp";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-gradient">
      {/* floating orbs */}
      <div className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-primary/20 blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-brand-stayou/20 blur-3xl animate-pulse-glow" style={{ animationDelay: "2s" }} />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center pt-24">
        <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 mb-8 text-xs font-medium text-muted-foreground">
          <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
          Holding de inovação imobiliária
        </div>

        <img src={logoStay} alt="Stay" className="h-16 md:h-20 mx-auto mb-6 animate-float" />

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.95]">
          Ecossistema de <br />
          <span className="text-gradient">inovação imobiliária</span>
        </h1>

        <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Uma holding de marcas que conecta tecnologia, educação e performance para transformar o mercado imobiliário brasileiro.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#empresas"
            className="inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-semibold bg-primary text-primary-foreground hover:opacity-90 transition shadow-glow"
          >
            Conheça nossas empresas
          </a>
          <a
            href="#sobre"
            className="inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-semibold glass hover:bg-white/10 transition"
          >
            Nossa história →
          </a>
        </div>

        <div className="mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          {[
            { n: "5+", l: "Empresas" },
            { n: "10k+", l: "Corretores" },
            { n: "100%", l: "Foco no mercado" },
          ].map((s) => (
            <div key={s.l} className="text-center">
              <div className="text-3xl md:text-4xl font-bold font-display text-gradient">{s.n}</div>
              <div className="text-xs md:text-sm text-muted-foreground mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
