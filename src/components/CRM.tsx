import { motion } from "framer-motion";
import { LineChart, Zap, Eye, BarChart3, Users, TrendingUp } from "lucide-react";

const stats = [
  { n: "+38%", l: "Conversão média" },
  { n: "10×", l: "Mais agilidade operacional" },
  { n: "100%", l: "Operação centralizada" },
  { n: "24/7", l: "Disponível para sua equipe" },
];

const results = [
  {
    icon: TrendingUp,
    tag: "Performance",
    title: "+38% em conversão",
    body: "Equipes que utilizam a Stay aumentam a taxa de conversão em até 38% nos primeiros 90 dias.",
  },
  {
    icon: Zap,
    tag: "Velocidade",
    title: "10× mais agilidade",
    body: "Automatizamos tarefas repetitivas para que seu time foque no que realmente importa: vender.",
  },
  {
    icon: Eye,
    tag: "Gestão",
    title: "Visão 360°",
    body: "Gestores acompanham desempenho, gargalos e oportunidades em tempo real.",
  },
  {
    icon: BarChart3,
    tag: "Inteligência",
    title: "Decisões com dados",
    body: "Pare de operar no achismo. Tenha relatórios e BI prontos para agir com precisão.",
  },
  {
    icon: Users,
    tag: "Cultura",
    title: "Time engajado",
    body: "Gamificação, metas claras e ranking em tempo real mantêm a equipe produtiva e focada.",
  },
  {
    icon: LineChart,
    tag: "Escala",
    title: "Pronto para escalar",
    body: "De 5 a 500 corretores: a plataforma cresce junto com a sua operação.",
  },
];

const phrases = [
  "Seu processo comercial, finalmente organizado.",
  "Mais controle. Mais velocidade. Mais vendas.",
  "Tecnologia que trabalha enquanto você vende.",
  "Transforme operação em máquina de crescimento.",
];

export function CRM() {
  return (
    <section id="crm" className="relative py-32 md:py-48 px-6 md:px-10 overflow-hidden">
      {/* Ambient */}
      <div className="absolute inset-0 grid-pattern opacity-30 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,black,transparent_85%)]" />
      <div
        className="absolute top-20 -right-40 w-[600px] h-[600px] rounded-full opacity-25 animate-drift -z-10"
        style={{
          background: "radial-gradient(circle, oklch(0.55 0.22 290 / 0.5), transparent 60%)",
          filter: "blur(80px)",
        }}
      />

      <div className="relative mx-auto max-w-[1400px]">
        {/* Section header */}
        <div className="grid grid-cols-12 gap-4 md:gap-8 mb-16">
          <div className="col-span-12 md:col-span-2">
            <span className="marker">§ 05 — CRM</span>
          </div>
          <div className="col-span-12 md:col-span-10">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight"
            >
              Venda mais com <span className="italic text-gradient">inteligência</span> <br />
              e <span className="italic text-gold">performance.</span>
            </motion.h2>
          </div>
        </div>

        {/* Hero CTA row */}
        <div className="grid grid-cols-12 gap-4 md:gap-8 mb-24">
          <div className="hidden md:block col-span-2" />
          <div className="col-span-12 md:col-span-7">
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
              CRM, BI e IA conectados em uma única plataforma. A Stay Empresas organiza sua operação,
              automatiza tarefas e aumenta sua taxa de conversão.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="https://business.stayou.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-paper text-ink px-6 py-3 text-sm font-medium hover:gap-3 transition-all"
              >
                Criar minha conta
                <span>→</span>
              </a>
              <a
                href="https://business.stayou.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium hover:bg-white/[0.04] transition"
              >
                Entrar na plataforma
              </a>
            </div>
          </div>
        </div>

        {/* Impact stats */}
        <div className="grid grid-cols-12 gap-4 md:gap-8 border-y border-border py-12 mb-24">
          {stats.map((s, i) => (
            <motion.div
              key={s.l}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="col-span-6 md:col-span-3"
            >
              <div className="font-display text-4xl md:text-6xl text-paper tracking-tight">{s.n}</div>
              <div className="marker mt-2">{s.l}</div>
            </motion.div>
          ))}
        </div>

        {/* About platform — editorial split */}
        <div className="grid grid-cols-12 gap-4 md:gap-8 mb-32">
          <div className="col-span-12 md:col-span-5">
            <span className="marker">Sobre a plataforma</span>
            <h3 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.02] tracking-tight mt-4">
              A plataforma feita para quem <span className="italic text-gradient">vive</span> de vender
              imóveis.
            </h3>
          </div>
          <div className="hidden md:block col-span-1" />
          <div className="col-span-12 md:col-span-6">
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              A Stay Empresas é o sistema operacional das incorporadoras modernas. Unificamos gestão de
              leads, vendas, equipe, financeiro e inteligência artificial em uma única experiência —
              pensada para operações de alta performance.
            </p>
            <ul className="mt-8 space-y-3 border-t border-border pt-6">
              {[
                "Operação 100% conectada — do primeiro clique à comissão",
                "Decisões guiadas por dados em tempo real",
                "Automação que devolve tempo ao corretor",
                "Resultados que aparecem no caixa",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-sm md:text-base text-foreground/80">
                  <span className="font-mono text-[10px] text-violet mt-2">/</span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Results grid */}
        <div className="grid grid-cols-12 gap-4 md:gap-8 mb-20">
          <div className="col-span-12 md:col-span-2">
            <span className="marker">Resultados reais</span>
          </div>
          <div className="col-span-12 md:col-span-10">
            <h3 className="font-display text-4xl md:text-6xl leading-[0.98] tracking-tight">
              Não é promessa. <br />
              <span className="text-foreground/40">É operação rodando.</span>
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6 mb-32">
          {results.map((r, i) => {
            const Icon = r.icon;
            return (
              <motion.article
                key={r.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.9, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="col-span-12 md:col-span-6 lg:col-span-4 group"
              >
                <div className="relative h-full rounded-3xl glass ring-soft p-8 overflow-hidden">
                  <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-violet/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                  <div className="relative">
                    <div className="flex items-center justify-between mb-6">
                      <div className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-white/[0.04] border border-border group-hover:border-violet/40 transition-colors">
                        <Icon className="h-4 w-4 text-foreground/80 group-hover:text-violet transition-colors" />
                      </div>
                      <span className="marker">{r.tag}</span>
                    </div>
                    <h4 className="font-display text-2xl md:text-3xl leading-tight">{r.title}</h4>
                    <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{r.body}</p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Strategic phrases ticker */}
        <div className="border-y border-border py-10 mb-24 overflow-hidden">
          <div className="flex flex-wrap gap-x-10 gap-y-3 justify-center text-center">
            {phrases.map((p) => (
              <span
                key={p}
                className="font-display italic text-lg md:text-2xl text-foreground/70"
              >
                "{p}"
              </span>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl glass ring-soft overflow-hidden"
        >
          <div
            className="absolute -top-32 left-1/3 w-[500px] h-[500px] rounded-full opacity-30 animate-drift"
            style={{
              background: "radial-gradient(circle, oklch(0.78 0.14 85 / 0.5), transparent 60%)",
              filter: "blur(80px)",
            }}
          />
          <div className="relative grid grid-cols-12 gap-4 md:gap-8 p-8 md:p-16 items-center">
            <div className="col-span-12 md:col-span-8">
              <span className="marker">CTA final</span>
              <h3 className="font-display text-3xl md:text-5xl lg:text-6xl leading-[1] tracking-tight mt-4">
                Pronto para transformar sua operação <br />
                em uma <span className="italic text-gold">máquina de vendas?</span>
              </h3>
            </div>
            <div className="col-span-12 md:col-span-4 flex md:justify-end">
              <a
                href="https://wa.me/5511998105952"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-paper text-ink px-7 py-4 text-sm font-medium hover:gap-3 transition-all"
              >
                Quero conhecer a plataforma
                <span>→</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
