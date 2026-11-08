import { ArrowRight, Check } from "lucide-react";
import { AutoCarousel } from "@/components/sales/AutoCarousel";

export function ShowcaseSection({
  gallery,
  bonusSamples,
}: {
  gallery: string[];
  bonusSamples: string[];
}) {
  const examples = [
    "Novos tributos",
    "Erros e pontos de atenção",
    "Comunicados prontos",
    "Preços e custos",
    "Lucro e margem",
    "Dados fiscais",
    "NCM e CFOP",
    "Conferência de documentos",
  ];

  return (
    <section className="ref-showcase">
      <h2>VEJA OS MATERIAIS POR DENTRO</h2>
      <p className="ref-section-intro">Você sabe exatamente o que está recebendo</p>
      <AutoCarousel images={gallery} label="Páginas do produto principal" />
      <AutoCarousel images={bonusSamples} label="Páginas dos bônus" />
      <p>Mostrar exemplos de:</p>
      <ul>
        {examples.map((text) => (
          <li key={text}>
            <Check aria-hidden="true" />
            {text}
          </li>
        ))}
      </ul>
      <a className="ref-green-btn" href="#oferta">
        QUERO GARANTIR MEU ACESSO <ArrowRight aria-hidden="true" />
      </a>
    </section>
  );
}
