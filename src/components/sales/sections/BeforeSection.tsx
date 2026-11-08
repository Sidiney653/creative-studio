import { ArrowRight, Check } from "lucide-react";

export function BeforeSection() {
  const items = [
    "Conteúdo para entender",
    "Checklists para revisar",
    "Comunicados para usar",
    "Cenários para analisar",
    "Guia para conferir notas fiscais",
  ];

  return (
    <section className="ref-before">
      <h2>PREPARE-SE ANTES QUE OS ERROS VIREM RETRABALHO</h2>
      <p className="ref-section-intro">Tenha referências visuais para consultar no dia a dia</p>
      <p>Em vez de depender apenas de informações espalhadas, reúna em um só lugar:</p>
      <ul>
        {items.map((text) => (
          <li key={text}>
            <Check aria-hidden="true" />
            {text}
          </li>
        ))}
      </ul>
      <a className="ref-green-btn" href="#oferta">
        QUERO TER TUDO ORGANIZADO <ArrowRight aria-hidden="true" />
      </a>
    </section>
  );
}
