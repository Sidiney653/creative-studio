import { ChevronDown } from "lucide-react";

const faqs = [
  [
    "O que está incluído?",
    "Você recebe o **Reforma Tributária Sem Erros** e três bônus: **Kit de Comunicados Prontos da Reforma Tributária**, **Simulador Visual de Preços e Lucros** e **SOS Nota Fiscal — Guia de Conferência**.",
  ],
  [
    "Preciso ser contador para utilizar?",
    "Não. O conteúdo foi organizado de forma visual e didática. Porém, decisões tributárias específicas devem ser avaliadas com base na legislação vigente e, quando necessário, com apoio profissional.",
  ],
  ["Vou receber algum produto físico?", "Não. Os materiais são digitais."],
  [
    "O produto principal fala sobre IBS e CBS?",
    "Sim. O guia apresenta os novos tributos e outros pontos importantes da transição tributária.",
  ],
  [
    "O material aborda erros e riscos na adaptação?",
    "Sim. O produto principal apresenta orientações sobre cadastros, classificações, documentos, sistemas, créditos e processos.",
  ],
  [
    "Os três bônus estão incluídos?",
    "Sim. Os três materiais apresentados nesta oferta estão incluídos.",
  ],
  [
    "O Simulador calcula automaticamente?",
    "Não. Ele é um guia visual de simulação para ajudar você a organizar os dados e comparar cenários.",
  ],
  [
    "O SOS Nota Fiscal ajuda na conferência?",
    "Sim. Ele apresenta pontos de atenção para revisar informações de documentos fiscais antes da emissão.",
  ],
  [
    "O material substitui um contador ou advogado?",
    "Não. Os materiais têm finalidade educacional e informativa e não substituem análise técnica, contábil, fiscal ou jurídica.",
  ],
  ["O pagamento é mensal?", "Não. A compra é feita em pagamento único."],
  [
    "Como funciona a garantia?",
    "Você tem 7 dias para acessar e avaliar os materiais, conforme as regras da plataforma de pagamento.",
  ],
];

export function FAQSection() {
  return (
    <section className="ref-faq">
      <h2>PERGUNTAS FREQUENTES</h2>
      <div>
        {faqs.map(([question, answer]) => (
          <details key={question}>
            <summary>
              {question}
              <ChevronDown aria-hidden="true" />
            </summary>
            <p>{answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
