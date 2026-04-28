import { CompanyCard, type Company } from "./CompanyCard";
import logoUnicorretor from "@/assets/logo-unicorretor.jpeg";
import logoFiqueAqui from "@/assets/logo-fiqueaqui.png";
import logoStayou from "@/assets/logo-stayou.png";
import logoStaycast from "@/assets/logo-staycast.png";
import logoStayPlus from "@/assets/logo-stayplus.png";

const companies: Company[] = [
  {
    name: "UniCorretor",
    tagline: "Educação imobiliária",
    description:
      "Formando corretores que dominam o jogo imobiliário. A plataforma educacional do ecossistema, criada para formar corretores preparados para atuar com estratégia, previsibilidade e alta performance.",
    logo: logoUnicorretor,
    brandClass: "text-brand-unicorretor",
    brandVar: "--brand-unicorretor",
    site: "https://unicorretor.com.br/",
    youtube: "https://www.youtube.com/@unicorretor",
    instagram: "https://www.instagram.com/unicorretor/",
    presentation: "https://stayempresas.com.br/apresentacao-unicorretor/",
    extraLinks: [
      { label: "Corporativa", href: "https://corporativo.unicorretor.com.br/" },
      { label: "Ofertas", href: "https://oferta.unicorretor.com.br/" },
    ],
  },
  {
    name: "Fique Aqui Imóveis",
    tagline: "Imobiliária do corretor",
    description:
      "A startup que coloca o corretor no topo. Mais tecnologia, mais oportunidades, mais fechamento. Aqui, você vende mais e ganha a melhor comissão do mercado.",
    logo: logoFiqueAqui,
    brandClass: "text-brand-fiqueaqui",
    brandVar: "--brand-fiqueaqui",
    site: "https://fiqueaquiimoveis.com.br/",
    youtube: "https://www.youtube.com/watch?v=Dt-nmmoYeRo",
    instagram: "https://www.instagram.com/fiqueaquiimoveis/",
    presentation: "https://stayempresas.com.br/apresentacao-fique-aqui-imoveis/",
  },
  {
    name: "Stayou",
    tagline: "Marketplace proptech",
    description:
      "Não é apenas um portal de anúncios. Somos o Sistema Operacional do Mercado Imobiliário — uma plataforma proptech de alta performance que une corretores, imobiliárias, construtoras e incorporadoras em um único ecossistema.",
    logo: logoStayou,
    brandClass: "text-brand-stayou",
    brandVar: "--brand-stayou",
    site: "https://stayou.com.br/",
    youtube: "https://www.youtube.com/watch?v=MvQs26_iA4Q",
    presentation: "https://stayempresas.com.br/apresentacao-stayou-click/",
    extraLinks: [
      { label: "Stayou Business", href: "https://business.stayou.com.br/" },
      { label: "Assistente Virtual", href: "https://agente.stayou.com.br/" },
    ],
  },
  {
    name: "StayCast",
    tagline: "Podcast do mercado",
    description:
      "O podcast criado para informar, conectar e transformar o mercado imobiliário. Reúne corretores, investidores, incorporadores e especialistas para compartilhar experiências reais, estratégias e bastidores do setor.",
    logo: logoStaycast,
    brandClass: "text-brand-staycast",
    brandVar: "--brand-staycast",
    youtube: "https://www.youtube.com/@staycast",
    instagram: "https://www.instagram.com/stay.cast/",
    presentation: "https://stayempresas.com.br/apresentacao-stay-cast/",
    site: "https://www.youtube.com/@staycast",
  },
  {
    name: "Stay Plus",
    tagline: "Marketing e mídia",
    description:
      "O ecossistema que transforma atenção em vendas, conectando estratégia, conteúdo e tecnologia para acelerar o crescimento de marcas, corretores e negócios no digital.",
    logo: logoStayPlus,
    brandClass: "text-brand-stayplus",
    brandVar: "--brand-stayplus",
    site: "https://stayplus.com.br/",
    youtube: "https://www.youtube.com/watch?v=O8K2RbOKTwg",
    instagram: "https://www.instagram.com/stayplusprodutora",
    extraLinks: [
      { label: "Apresentação", href: "https://drive.google.com/file/d/15AYxbqBt5WmEbkYtrLT2qMx1cBKjUlAH/view" },
    ],
  },
];

export function CompaniesSection() {
  return (
    <section id="empresas" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.3em] text-primary mb-4">
            Conheça nossa holding
          </span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            As marcas do <span className="text-gradient">ecossistema Stay</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Uma gama diversificada de serviços e produtos de alta qualidade, desenvolvidos por equipes especializadas e comprometidas com a excelência.
          </p>
        </div>

        <div className="space-y-8">
          {companies.map((c, i) => (
            <CompanyCard key={c.name} company={c} reverse={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
