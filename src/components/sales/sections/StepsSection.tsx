import { ArrowRight, Download, ListChecks, BookOpen, FileCheck2 } from "lucide-react";

export function StepsSection() {
  const steps = [
    {
      Icon: Download,
      title: "01 — PAGAMENTO APROVADO",
      text: "Após a confirmação do pagamento, siga as instruções enviadas pela plataforma.",
    },
    {
      Icon: ListChecks,
      title: "02 — ACESSE OS MATERIAIS",
      text: "Você recebe o guia principal e os três bônus desta oferta.",
    },
    {
      Icon: BookOpen,
      title: "03 — COMECE PELO GUIA PRINCIPAL",
      text: "Entenda os principais pontos da Reforma e as áreas que exigem atenção.",
    },
    {
      Icon: FileCheck2,
      title: "04 — USE OS BÔNUS",
      text: "Consulte os comunicados, analise cenários de preços e confira informações fiscais sempre que precisar.",
    },
  ];

  return (
    <section className="ref-steps">
      <h2>COMO VOCÊ RECEBE</h2>
      <p className="ref-section-intro">Acesso digital após a confirmação da compra</p>
      <div>
        {steps.map(({ Icon, title, text }) => (
          <article key={title}>
            <Icon className="ref-step-svg" aria-hidden="true" />
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
      <a className="ref-green-btn" href="#oferta">
        QUERO GARANTIR MEU ACESSO <ArrowRight aria-hidden="true" />
      </a>
    </section>
  );
}
