import { Phone, Mail, MapPin } from "lucide-react";
import logoStay from "@/assets/logo-stay.webp";

export function Footer() {
  return (
    <footer id="contato" className="relative border-t border-border/50 mt-20">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logoStay} alt="Stay" className="h-8 w-auto" />
              <span className="font-display font-bold text-lg">Empresas</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Holding de inovação e soluções para o mercado imobiliário brasileiro.
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider mb-4 text-primary">
              Contato
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <a href="tel:+5511998105952" className="hover:text-primary transition">(11) 99810-5952</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <a href="mailto:atendimento@fiqueaquiimoveis.com.br" className="hover:text-primary transition break-all">
                  atendimento@fiqueaquiimoveis.com.br
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider mb-4 text-primary">
              Endereço
            </h4>
            <div className="flex items-start gap-3 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
              <p>
                Rua Vergueiro, 2045 — Sala 1401<br />
                Paraíso — São Paulo<br />
                CEP 04101-000
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>Stay Holding — © 2026 Todos os direitos reservados.</p>
          <p>Feito com <span className="text-primary">♥</span> pela StayPlus</p>
        </div>
      </div>
    </footer>
  );
}
