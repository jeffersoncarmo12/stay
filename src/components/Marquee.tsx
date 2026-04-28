import logoUnicorretor from "@/assets/logo_unicorretor.png";
import logoFiqueAqui from "@/assets/logo-fiqueaqui.png";
import logoStayou from "@/assets/logo-stayou.png";
import logoStaycast from "@/assets/logo-staycast.png";
import logoStayPlus from "@/assets/logo-stayplus.png";

const items = ["Stayou", "UniCorretor", "StayCast", "Fique Aqui", "Stay Plus"];
const logos = [logoStayou, logoUnicorretor, logoStaycast, logoFiqueAqui, logoStayPlus];

export function Marquee() {
  const sequence = [...items, ...items, ...items];
  const logoSeq = [...logos, ...logos, ...logos];

  return (
    <section aria-label="As marcas" className="relative py-12 border-y border-border overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap will-change-transform">
        {sequence.map((name, i) => (
          <div key={i} className="flex items-center gap-6 mx-10 shrink-0">
            <div className="h-10 w-10 rounded-full bg-white/10 ring-soft p-1.5 flex items-center justify-center backdrop-blur-sm">
              <img src={logoSeq[i]} alt="" className="max-h-full max-w-full object-contain logo-mono" />
            </div>
            <span className="font-display text-3xl md:text-4xl text-paper/50 italic">{name}</span>
            <span className="text-paper/20 text-2xl">✦</span>
          </div>
        ))}
      </div>
    </section>
  );
}
