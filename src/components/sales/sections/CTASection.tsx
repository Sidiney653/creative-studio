import { ArrowRight, CheckCircle2 } from "lucide-react";

export function CTASection() {
  const items = [
    "Reforma Tributária Sem Erros",
    "Bônus 01: Kit de Comunicados Prontos",
    "Bônus 02: Simulador Visual de Preços e Lucros",
    "Bônus 03: SOS Nota Fiscal — Guia de Conferência",
    "Garantia de 7 dias",
  ];

  return (
    <section className="ref-cta">
      <h2>APROVEITE A OFERTA</h2>
      <p className="ref-section-intro">Garanta seu acesso agora</p>
      <p>
        Tenha materiais para entender as mudanças, revisar documentos e analisar pontos importantes
        da adaptação à Reforma Tributária.
      </p>
      <p>Comece sua preparação hoje</p>
      <ul className="ref-checks">
        {items.map((text) => (
          <li key={text}>
            <CheckCircle2 aria-hidden="true" />
            {text}
          </li>
        ))}
      </ul>
      <a className="ref-green-btn" href="#oferta">
        QUERO ADQUIRIR AGORA <ArrowRight aria-hidden="true" />
      </a>
      <small>Compra 100% segura. Seus dados são protegidos no ambiente de pagamento.</small>
    </section>
  );
}
