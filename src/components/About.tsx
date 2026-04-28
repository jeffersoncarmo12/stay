export function About() {
  return (
    <section className="relative py-32 px-6">
      <div className="mx-auto max-w-5xl">
        <div className="grid md:grid-cols-[1fr_1.4fr] gap-12 md:gap-20 items-start reveal">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-violet">
              A Holding
            </span>
            <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight leading-[1.05]">
              Não somos uma imobiliária. Somos uma <span className="text-gradient">empresa de tecnologia</span>.
            </h2>
          </div>
          <div className="space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed">
            <p>
              A <span className="text-foreground font-medium">Stay Empresas</span> é uma holding que reúne marcas complementares para resolver, ponta a ponta, os desafios do mercado imobiliário brasileiro.
            </p>
            <p>
              Construímos infraestrutura digital, conteúdo estratégico e formação contínua — para que corretores, imobiliárias e incorporadoras operem em um patamar global de performance.
            </p>
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border">
              {[
                { n: "5", l: "Empresas" },
                { n: "10k+", l: "Profissionais" },
                { n: "2026", l: "Próximo ciclo" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="text-2xl md:text-3xl font-semibold font-display text-foreground">{s.n}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
