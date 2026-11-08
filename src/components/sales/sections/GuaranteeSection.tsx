import { ArrowRight, ShieldCheck } from "lucide-react";

export function GuaranteeSection() {
  return (
    <section className="ref-guarantee">
      <div className="ref-guarantee-seal">
        <ShieldCheck aria-hidden="true" />
        <strong>7 DIAS</strong>
        <span>DE GARANTIA</span>
      </div>
      <div>
        <h2>Conheça os materiais com tranquilidade</h2>
        <p>
          Acesse os conteúdos, confira como estão organizados e avalie se atendem ao que você
          procurava.
        </p>
        <p>
          Caso não queira continuar, solicite o reembolso dentro de 7 dias após a compra, conforme
          as condições da plataforma de pagamento.
        </p>
      </div>
      <a className="ref-green-btn" href="#oferta">
        QUERO ACESSAR COM GARANTIA <ArrowRight aria-hidden="true" />
      </a>
    </section>
  );
}
