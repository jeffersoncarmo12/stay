import { Instagram, Youtube, Send, MessageCircle } from "lucide-react";

const cols = [
  {
    title: "Ecossistema",
    links: [
      { label: "Stayou", href: "https://stayou.com.br/" },
      { label: "UniCorretor", href: "https://unicorretor.com.br/" },
      { label: "Fique Aqui Imóveis", href: "https://fiqueaquiimoveis.com.br/" },
      { label: "StayCast", href: "https://www.youtube.com/@staycast" },
      { label: "Stay Plus", href: "https://stayplus.com.br/" },
    ],
  },
  {
    title: "Holding",
    links: [
      { label: "Manifesto", href: "#manifesto" },
      { label: "Método", href: "#diferenciais" },
      { label: "Campo", href: "#campo" },
      { label: "Convite", href: "#contato" },
    ],
  },
];

export function Footer() {
  return (
    <footer id="contato" className="relative border-t border-border pt-24 pb-10 px-6 md:px-10 overflow-hidden">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-12 gap-6 md:gap-8 mb-20">
          <div className="col-span-12 md:col-span-5">
            <a href="#top" className="flex items-baseline gap-3">
              <span className="font-display text-4xl italic text-paper">Stay</span>
              <span className="marker">Empresas · Holding</span>
            </a>
            <p className="mt-6 text-sm text-muted-foreground leading-relaxed max-w-sm">
              Ecossistema de tecnologia, mídia e educação para o mercado imobiliário brasileiro.
            </p>
            <div className="mt-8 flex gap-2">
              {[
                { Icon: Instagram, href: "https://www.instagram.com/stayplusprodutora" },
                { Icon: Youtube, href: "https://www.youtube.com/@staycast" },
                { Icon: Send, href: "https://t.me/" },
                { Icon: MessageCircle, href: "https://wa.me/5511998105952" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full border border-border flex items-center justify-center hover:bg-white/[0.04] hover:border-paper/30 transition"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title} className="col-span-6 md:col-span-2">
              <h4 className="marker mb-5">{c.title}</h4>
              <ul className="space-y-3">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      target={l.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="text-sm text-foreground/80 hover:text-paper transition"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="col-span-12 md:col-span-3">
            <h4 className="marker mb-5">Contato</h4>
            <ul className="space-y-3 text-sm text-foreground/80">
              <li>
                <a href="tel:+5511998105952" className="hover:text-paper transition">(11) 99810-5952</a>
              </li>
              <li>
                <a href="mailto:atendimento@fiqueaquiimoveis.com.br" className="hover:text-paper transition break-all">
                  atendimento@fiqueaquiimoveis.com.br
                </a>
              </li>
              <li className="text-muted-foreground pt-2">
                Rua Vergueiro, 2045 — Sala 1401<br />Paraíso · São Paulo · 04101-000
              </li>
            </ul>
          </div>
        </div>

        {/* Giant signature */}
        <div className="relative">
          <div className="hairline mb-10" />
          <h2 className="font-display italic text-[28vw] md:text-[18rem] leading-[0.8] tracking-[-0.05em] text-foreground/[0.06] select-none pointer-events-none">
            Stay
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground border-t border-border pt-6 mt-2">
          <p>Stay Holding · MMXXVI · Todos os direitos reservados.</p>
          <p>Composto e produzido por <span className="text-paper">Stay Plus</span></p>
        </div>
      </div>
    </footer>
  );
}
