import { ArrowRight } from "lucide-react";
import { AutoCarousel } from "@/components/sales/AutoCarousel";

export function GallerySection({ images, label }: { images: string[]; label: string }) {
  return (
    <section className="ref-gallery">
      <h2>VEJA POR DENTRO DO SEU MATERIAL</h2>
      <p className="ref-section-intro">Um guia visual para entender o que muda na prática</p>
      <p>
        Veja páginas reais do <strong>Reforma Tributária Sem Erros</strong>.
      </p>
      <AutoCarousel images={images} label={label} />
      <p>
        Novos tributos, cronograma, erros fiscais, cadastros, documentos, sistemas e processos
        organizados visualmente.
      </p>
      <a className="ref-green-btn" href="#oferta">
        QUERO COMEÇAR MINHA PREPARAÇÃO <ArrowRight aria-hidden="true" />
      </a>
    </section>
  );
}
