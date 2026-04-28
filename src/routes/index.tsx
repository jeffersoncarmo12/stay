import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Manifesto } from "@/components/Manifesto";
import { Ecosystem } from "@/components/Ecosystem";
import { Method } from "@/components/Method";
import { Field } from "@/components/Field";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Stay Empresas — Ecossistema de tecnologia para o mercado imobiliário" },
      {
        name: "description",
        content:
          "Holding de tecnologia, mídia e educação que conecta corretores, imobiliárias e incorporadoras. Stayou, UniCorretor, StayCast, Fique Aqui Imóveis e Stay Plus.",
      },
      { property: "og:title", content: "Stay Empresas — O futuro do mercado imobiliário começa aqui" },
      { property: "og:description", content: "Tecnologia, mídia e educação em um único organismo." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Marquee />
      <Manifesto />
      <Ecosystem />
      <Method />
      <Field />
      <CTA />
      <Footer />
    </main>
  );
}
