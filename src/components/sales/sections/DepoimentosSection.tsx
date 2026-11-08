import { ArrowRight } from "lucide-react";
import { AutoCarousel } from "@/components/sales/AutoCarousel";

export function DepoimentosSection({ depoimentos }: { depoimentos: string[] }) {
  return (
    <section className="ref-depoimentos">
      <h2>QUEM JÁ ESTÁ UTILIZANDO OS MATERIAIS</h2>
      <p className="ref-section-intro">Veja a experiência de quem adquiriu</p>
      <AutoCarousel images={depoimentos} label="Depoimentos de clientes" />
      <a className="ref-green-btn" href="#oferta">
        QUERO GARANTIR MEU ACESSO <ArrowRight aria-hidden="true" />
      </a>
    </section>
  );
}
