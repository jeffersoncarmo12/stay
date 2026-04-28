import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { CompaniesSection } from "@/components/CompaniesSection";
import { StorySection } from "@/components/StorySection";
import { JoinSection } from "@/components/JoinSection";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Stay Empresas — Ecossistema de inovação imobiliária" },
      {
        name: "description",
        content:
          "Holding Stay Empresas: UniCorretor, Fique Aqui Imóveis, Stayou, StayCast e Stay Plus. Tecnologia, educação e performance para o mercado imobiliário.",
      },
      { property: "og:title", content: "Stay Empresas — Ecossistema de inovação imobiliária" },
      { property: "og:description", content: "Holding de marcas que conecta tecnologia, educação e performance para transformar o mercado imobiliário." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <CompaniesSection />
      <StorySection />
      <JoinSection />
      <Footer />
    </main>
  );
}
