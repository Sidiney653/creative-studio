import { ArrowRight } from "lucide-react";

export function SequenceSection() {
  const steps = [
    [
      "1",
      "ENTENDA",
      "Comece pelo Reforma Tributária Sem Erros para conhecer as mudanças e os principais pontos de atenção.",
    ],
    [
      "2",
      "COMUNIQUE",
      "Use os modelos prontos para alinhar clientes, fornecedores, equipe e diretoria.",
    ],
    [
      "3",
      "ANALISE",
      "Use o Simulador Visual para comparar cenários de preço, custos, tributação, lucro e margem.",
    ],
    [
      "4",
      "CONFIRA",
      "Use o SOS Nota Fiscal como apoio na revisão das informações antes da emissão.",
    ],
  ];

  return (
    <section className="ref-sequence">
      <h2>DO ENTENDIMENTO À ROTINA</h2>
      <p className="ref-section-intro">Materiais para diferentes pontos da preparação</p>
      <div>
        {steps.map(([n, title, text]) => (
          <article key={n}>
            <span>{n}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
      <a className="ref-green-btn" href="#oferta">
        QUERO COMEÇAR MINHA PREPARAÇÃO <ArrowRight aria-hidden="true" />
      </a>
    </section>
  );
}
