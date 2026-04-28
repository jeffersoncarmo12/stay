import { Instagram, Youtube, Send, MessageCircle, MapPin, Mail, Phone } from "lucide-react";
import logoStay from "@/assets/logo-stay.webp";

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
    title: "Institucional",
    links: [
      { label: "Sobre", href: "#about" },
      { label: "Diferenciais", href: "#diferenciais" },
      { label: "Para quem", href: "#para-quem" },
      { label: "Resultados", href: "#resultados" },
    ],
  },
];

export function Footer() {
  return (
    <footer id="contato" className="relative border-t border-border mt-10">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] gap-12">
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <img src={logoStay} alt="Stay" className="h-7 w-auto" />
              <span className="font-display font-semibold text-lg">Empresas</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Holding de tecnologia, mídia e educação para o mercado imobiliário brasileiro.
            </p>
            <div className="mt-6 flex gap-2">
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
                  className="h-9 w-9 rounded-full glass flex items-center justify-center hover:bg-white/10 transition"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground mb-5">
                {c.title}
              </h4>
              <ul className="space-y-3">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      target={l.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-foreground transition"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground mb-5">
              Contato
            </h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2.5">
                <Phone className="h-3.5 w-3.5" />
                <a href="tel:+5511998105952" className="hover:text-foreground transition">(11) 99810-5952</a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="h-3.5 w-3.5 mt-0.5" />
                <a href="mailto:atendimento@fiqueaquiimoveis.com.br" className="hover:text-foreground transition break-all">
                  atendimento@fiqueaquiimoveis.com.br
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="h-3.5 w-3.5 mt-0.5" />
                <span>Rua Vergueiro, 2045 — Sala 1401<br />Paraíso · São Paulo · 04101-000</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>Stay Holding · © 2026 Todos os direitos reservados.</p>
          <p>Feito com <span className="text-violet">♥</span> pela Stay Plus</p>
        </div>
      </div>
    </footer>
  );
}
