import { Send, MessageCircle, MapPin, User } from "lucide-react";

const items = [
  { icon: Send, label: "Grupo Telegram", href: "https://t.me/", color: "oklch(0.6 0.18 240)" },
  { icon: MessageCircle, label: "Grupo WhatsApp", href: "https://wa.me/5511998105952", color: "oklch(0.65 0.2 145)" },
  { icon: MapPin, label: "Google Maps", href: "https://maps.google.com/?q=Rua+Vergueiro+2045+São+Paulo", color: "oklch(0.65 0.22 25)" },
  { icon: User, label: "CEO & Fundador", href: "#sobre", color: "oklch(0.68 0.24 4)" },
];

export function JoinSection() {
  return (
    <section className="relative py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.3em] text-primary mb-4">
            Junte-se a nós
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Conteúdo exclusivo de <span className="text-gradient">marketing imobiliário</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {items.map((it) => {
            const Icon = it.icon;
            return (
              <a
                key={it.label}
                href={it.href}
                target={it.href.startsWith("#") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="group relative rounded-2xl glass p-6 text-center hover:scale-105 transition-all duration-300"
                style={{ boxShadow: `0 20px 60px -30px ${it.color}` }}
              >
                <div
                  className="mx-auto h-14 w-14 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                  style={{ background: `${it.color.replace(")", " / 0.2)")}`, color: it.color }}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <div className="text-sm font-semibold">{it.label}</div>
                <div className="text-xs text-muted-foreground mt-1">Clique aqui →</div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
