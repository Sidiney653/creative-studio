import { ArrowRight, CheckCircle2 } from "lucide-react";

const checkoutUrl =
  "https://checkout.wiven.com.br/checkout/cmvy9ira100k001og5qkt8tcv?offer=SFC56YZ";

const heroChecks = [
  "Novos tributos e transição",
  "Cadastros e classificação fiscal",
  "Documentos fiscais e sistemas",
  "Créditos, preços e contratos",
  "Processos, equipe e controles",
  "3 bônus para complementar sua preparação",
];

export function HeroSection() {
  return (
    <section className="ref-hero">
      <div className="ref-brand">GUIA PRÁTICO · REFORMA TRIBUTÁRIA</div>
      <h1 className="ref-hero-title">
        Reforma Tributária<br />Sem Erros
      </h1>
      <h2 className="ref-hero-subtitle">
        Entenda as mudanças, identifique pontos de atenção e organize a preparação da sua empresa
        para a nova rotina tributária.
      </h2>
      <div className="ref-product-showcase ref-product-showcase--single">
        <img
          className="ref-main-cover"
          src="/assets/mockup-principal.png"
          alt="Mockup do Reforma Tributária Sem Erros"
          fetchPriority="high"
        />
      </div>
      <h3>
        Pare de depender de informações soltas. Tenha um material visual e prático para entender o
        que muda e o que precisa ser revisado.
      </h3>
      <ul className="ref-checks">
        {heroChecks.map((text) => (
          <li key={text}>
            <CheckCircle2 aria-hidden="true" />
            {text}
          </li>
        ))}
      </ul>
      <a className="ref-green-btn" href="#oferta">
        QUERO GARANTIR MEU ACESSO <ArrowRight aria-hidden="true" />
      </a>
      <small>
        Material educacional e informativo para estudar, revisar e organizar a adaptação da empresa.
      </small>
    </section>
  );
}
