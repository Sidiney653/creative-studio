import { createFileRoute } from "@tanstack/react-router";
import { AutoCarousel } from "@/components/sales/AutoCarousel";
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronDown,
  Download,
  FileCheck2,
  ListChecks,
  ShieldCheck,
  TriangleAlert,
} from "lucide-react";

export const Route = createFileRoute("/")({ component: SalesPage });
const checkoutUrl =
  "https://checkout.wiven.com.br/checkout/cmvy9ira100k001og5qkt8tcv?offer=SFC56YZ";
const mockup = "/assets/mockup-principal.png";
const asset = (name: string) => `/assets/produto/${name}.webp`;
const cover = asset("principal-01");
const gallery = Array.from(
  { length: 19 },
  (_, i) => `/assets/carrossel/pagina-${String(i + 1).padStart(2, "0")}.webp`,
);
const depoimentos = Object.values(
  import.meta.glob<{ url: string }>("@/assets/depoimentos/*.asset.json", {
    eager: true,
    import: "default",
  }),
).map((a) => a.url);
const bonusSamples = [
  ...["bonus1-01", "bonus1-03", "bonus1-06"].map(asset),
  "/assets/produto/bonus2-capa-simulador.png",
  "/assets/produto/bonus3-capa-sos.png",
];
const bonuses = [
  {
    title: "Kit de Comunicados Prontos da Reforma Tributária",
    tag: "BÔNUS #1 · 20 PÁGINAS",
    cover: asset("bonus1-01"),
    description:
      "30 mensagens profissionais editáveis para apoiar a comunicação durante a adaptação.",
    extra:
      "Tenha modelos para comunicar mudanças e solicitar informações sem precisar começar cada mensagem do zero.",
    items: [
      "Comunicação com clientes",
      "Solicitação de informações",
      "Atualizações de sistemas e ERP",
      "Comunicação sobre a transição",
      "Mensagens para fornecedores",
      "Orientações para equipe fiscal e financeira",
      "Comunicados para diretoria",
      "Avisos sobre rotinas",
      "Confirmações e pendências",
      "Checklist de envio e acompanhamento",
    ],
  },
  {
    title: "Simulador Visual de Preços e Lucros",
    tag: "BÔNUS #2 · 10 PÁGINAS",
    cover: "/assets/produto/bonus2-capa-simulador.png",
    description: "Avalie como custos e tributação podem impactar preço, lucro e margem.",
    extra: "Um guia visual para analisar cenários antes de tomar decisões sobre preços.",
    items: [
      "Preço de venda",
      "Custos fixos e variáveis",
      "Impacto da tributação",
      "Cálculo do lucro",
      "Cálculo da margem",
      "Cenário atual",
      "Reajuste de preço",
      "Comparação entre cenários",
      "Pontos de atenção antes de decidir",
    ],
  },
  {
    title: "SOS Nota Fiscal — Guia de Conferência",
    tag: "BÔNUS #3",
    cover: "/assets/produto/bonus3-capa-sos.png",
    description: "Revise informações importantes antes de emitir documentos fiscais.",
    extra:
      "Um guia visual para ajudar na conferência de informações e reduzir erros de preenchimento e inconsistências.",
    items: [
      "Dados do emitente",
      "Dados do destinatário",
      "Produto ou serviço",
      "NCM e classificação",
      "CFOP",
      "Tributação da operação",
      "Valores e totais",
      "Transporte e frete",
      "XML e DANFE",
      "Autorização e rejeições",
      "Cancelamento e correções",
      "IBS e CBS na transição",
      "Informações adicionais",
      "Chave de acesso e protocolo",
      "Tributos e retenções",
      "Arquivamento de XML",
      "Fluxo interno de aprovação",
    ],
  },
];
const topics = [
  "IBS, CBS e Imposto Seletivo",
  "Cronograma de transição",
  "Impactos para empresas",
  "Principais erros a evitar",
  "Plano de preparação",
  "Checklists de adequação",
  "Classificação fiscal",
  "Documentos fiscais",
  "Parametrização de sistemas e ERP",
  "Créditos e documentação",
  "Revisão de preços e contratos",
  "Treinamento da equipe",
  "Plano de ação 30, 60 e 90 dias",
  "Governança tributária",
  "Produtos, serviços e fornecedores",
  "Evidências e documentos",
  "Fluxo de caixa",
  "Auditoria interna",
  "Matriz de responsabilidades",
  "Integração entre áreas",
  "Monitoramento e melhoria contínua",
];
const heroChecks = [
  "Novos tributos e transição",
  "Cadastros e classificação fiscal",
  "Documentos fiscais e sistemas",
  "Créditos, preços e contratos",
  "Processos, equipe e controles",
  "3 bônus para complementar sua preparação",
];
const ideal = [
  [
    "Entender a Reforma sem começar por textos extensos",
    "Conteúdo visual para compreender os principais conceitos antes de aprofundar cada tema.",
  ],
  [
    "Saber o que revisar na empresa",
    "Use os checklists e orientações para identificar pontos que merecem atenção.",
  ],
  [
    "Organizar processos internos",
    "Cadastros, documentos, sistemas, responsáveis e rotinas em uma sequência mais clara.",
  ],
  [
    "Conferir documentos com mais atenção",
    "Tenha uma referência visual para revisar informações importantes antes da emissão.",
  ],
  [
    "Avaliar preços e margens",
    "Use cenários para visualizar como custos e tributação podem impactar o resultado.",
  ],
  [
    "Consultar sempre que precisar",
    "Materiais digitais para acessar pelo celular, tablet ou computador.",
  ],
];
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
  ["Os três bônus estão incluídos?", "Sim. Os três materiais apresentados nesta oferta estão incluídos."],
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

function SalesPage() {
  return (
    <main className="ref-page">
      <div className="ref-top">⚡ AS REGRAS JÁ MUDARAM · PREPARE-SE AGORA</div>
      <section className="ref-hero">
        <div className="ref-brand">GUIA PRÁTICO · REFORMA TRIBUTÁRIA</div>
        <h1>Reforma Tributária Sem Erros</h1>
        <h2>
          Entenda as mudanças, identifique pontos de atenção e organize a preparação da sua empresa
          para a nova rotina tributária.
        </h2>
        <div className="ref-product-showcase ref-product-showcase--single">
          <img
            className="ref-main-cover"
            src={mockup}
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
          Material educacional e informativo para estudar, revisar e organizar a adaptação da
          empresa.
        </small>
      </section>

      <section className="ref-gallery">
        <h2>VEJA POR DENTRO DO SEU MATERIAL</h2>
        <p className="ref-section-intro">Um guia visual para entender o que muda na prática</p>
        <p>
          Veja páginas reais do <strong>Reforma Tributária Sem Erros</strong>.
        </p>
        <AutoCarousel images={gallery} label="Páginas reais do produto" />
        <p>
          Novos tributos, cronograma, erros fiscais, cadastros, documentos, sistemas e processos
          organizados visualmente.
        </p>
        <a className="ref-green-btn" href="#oferta">
          QUERO COMEÇAR MINHA PREPARAÇÃO <ArrowRight aria-hidden="true" />
        </a>
      </section>

      <section className="ref-features">
        <h2>DA MUDANÇA NA LEI À ROTINA DA EMPRESA</h2>
        <p className="ref-section-intro">Saiba onde sua empresa precisa prestar atenção</p>
        <p>
          A Reforma Tributária não muda apenas nomes de tributos. Ela também exige atenção aos
          processos internos.
        </p>
        <div className="ref-feature-grid">
          {[
            {
              Icon: BookOpen,
              title: "Entenda os novos tributos",
              text: "Visualize IBS, CBS, Imposto Seletivo e a lógica geral da transição.",
            },
            {
              Icon: ListChecks,
              title: "Revise cadastros e classificações",
              text: "Identifique pontos de atenção em CNAE, NCM, NBS, produtos, serviços e fornecedores.",
            },
            {
              Icon: CalendarDays,
              title: "Prepare documentos e sistemas",
              text: "Revise emissão fiscal, ERP, integrações, parametrizações e rotinas de conferência.",
            },
            {
              Icon: TriangleAlert,
              title: "Organize créditos e controles",
              text: "Tenha pontos de revisão para documentação, créditos, evidências e conciliações.",
            },
            {
              Icon: ShieldCheck,
              title: "Prepare sua equipe",
              text: "Defina responsáveis, organize treinamentos e mantenha as áreas alinhadas.",
            },
          ].map(({ Icon, title, text }) => (
            <article key={title}>
              <Icon className="ref-feature-svg" aria-hidden="true" />
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
        <a className="ref-green-btn" href="#oferta">
          QUERO ME PREPARAR COM MAIS CLAREZA <ArrowRight aria-hidden="true" />
        </a>
      </section>

      <section className="ref-blue-callout">
        <h2>NÃO ESPERE O ERRO APARECER PARA COMEÇAR A SE ORGANIZAR</h2>
        <p className="ref-section-intro">Antecipe os principais pontos de atenção</p>
        <p>
          Durante a adaptação, erros de cadastro, classificação, documento ou sistema podem gerar
          retrabalho e problemas operacionais.
        </p>
        <p>O material ajuda você a revisar pontos como:</p>
        <ul>
          {[
            "Cadastros desatualizados",
            "Classificação fiscal incorreta",
            "Documentos incompletos",
            "Sistemas sem parametrização",
            "Créditos sem validação",
            "Preços sem reavaliação",
            "Contratos sem revisão",
            "Equipe sem alinhamento",
          ].map((text) => (
            <li key={text}>{text}</li>
          ))}
        </ul>
        <a className="ref-green-btn" href="#oferta">
          QUERO REDUZIR O IMPROVISO <ArrowRight aria-hidden="true" />
        </a>
      </section>

      <section className="ref-ideal">
        <h2>ESTE MATERIAL É PARA VOCÊ QUE DESEJA</h2>
        <div className="ref-ideal-grid">
          {ideal.map(([title, text]) => (
            <article key={title}>
              <CheckCircle2 aria-hidden="true" />
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
        <a className="ref-green-btn" href="#oferta">
          QUERO TER ESSES MATERIAIS À MÃO <ArrowRight aria-hidden="true" />
        </a>
      </section>

      <section className="ref-receive">
        <h2>TUDO O QUE VOCÊ VAI RECEBER</h2>
        <div className="ref-access-tag">PRODUTO PRINCIPAL · 50 PÁGINAS</div>
        <div className="ref-receive-card">
          <h3>REFORMA TRIBUTÁRIA SEM ERROS</h3>
          <p>
            Guia prático para entender as mudanças, evitar falhas fiscais e preparar sua empresa
          </p>
          <img
            className="ref-real-cover"
            src={cover}
            alt="Capa real do produto principal"
            loading="lazy"
          />
          <p>
            Um material visual que transforma os principais pontos da adaptação tributária em
            orientações práticas e fáceis de consultar.
          </p>
          <p>Você vai encontrar:</p>
          <ul>
            {topics.map((text) => (
              <li key={text}>
                <Check aria-hidden="true" />
                {text}
              </li>
            ))}
          </ul>
          <a className="ref-green-btn" href="#oferta">
            QUERO MEU REFORMA TRIBUTÁRIA SEM ERROS <ArrowRight aria-hidden="true" />
          </a>
        </div>
        <h2 className="ref-more-title">E VOCÊ TAMBÉM RECEBE</h2>
        <h3>3 BÔNUS PARA COMPLEMENTAR SUA PREPARAÇÃO</h3>
        <div className="ref-bonus-label">🎁 3 BÔNUS INCLUÍDOS</div>
        <div className="ref-bonus-grid">
          {bonuses.map((bonus) => (
            <article key={bonus.title}>
              <div className="ref-bonus-number">{bonus.tag}</div>
              <img src={bonus.cover} alt={`Capa: ${bonus.title}`} loading="lazy" />
              <h3>{bonus.title}</h3>
              <p>{bonus.description}</p>
              {bonus.extra && <p>{bonus.extra}</p>}
              <ul>
                {bonus.items.map((text) => (
                  <li key={text}>
                    <Check aria-hidden="true" />
                    {text}
                  </li>
                ))}
              </ul>
              <span>INCLUÍDO</span>
            </article>
          ))}
        </div>
      </section>

      <section className="ref-pricing" id="oferta">
        <div className="ref-last-chance">⚡ TUDO EM UM ÚNICO ACESSO</div>
        <h2>ENTENDA. CONFIRA. ANALISE.</h2>
        <div className="ref-price-grid">
          <article className="ref-price-card ref-complete">
            <div className="ref-best">PRODUTO PRINCIPAL + 3 BÔNUS</div>
            <h3>SUA OFERTA COMPLETA</h3>
            <img
              className="ref-offer-mockup"
              src={mockup}
              alt="Mockup do pacote Reforma Tributária Sem Erros"
              loading="lazy"
            />
            <b className="ref-4x">
              Reforma Tributária Sem Erros + Kit de Comunicados Prontos + Simulador Visual de Preços
              e Lucros + SOS Nota Fiscal
            </b>
            <ul>
              <li>
                <Check aria-hidden="true" />
                Reforma Tributária Sem Erros
              </li>
              <li>
                <Check aria-hidden="true" />
                Kit de Comunicados Prontos da Reforma Tributária
              </li>
              <li>
                <Check aria-hidden="true" />
                Simulador Visual de Preços e Lucros
              </li>
              <li>
                <Check aria-hidden="true" />
                SOS Nota Fiscal — Guia de Conferência
              </li>
              <li>
                <Check aria-hidden="true" />
                Garantia de 7 dias
              </li>
            </ul>
            <small>LEVE TUDO POR APENAS</small>
            <strong>R$ 47,00</strong>
            <p className="ref-one-payment">PAGAMENTO ÚNICO</p>
            <a className="ref-green-btn" href={checkoutUrl}>
              QUERO GARANTIR MEU ACESSO <ArrowRight aria-hidden="true" />
            </a>
            <div className="ref-payments">
              <ShieldCheck aria-hidden="true" /> 🔒 Compra segura · Garantia de 7 dias
            </div>
          </article>
        </div>
      </section>

      <section className="ref-sequence">
        <h2>DO ENTENDIMENTO À ROTINA</h2>
        <p className="ref-section-intro">Materiais para diferentes pontos da preparação</p>
        <div>
          {[
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
          ].map(([n, title, text]) => (
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

      <section className="ref-before">
        <h2>PREPARE-SE ANTES QUE OS ERROS VIREM RETRABALHO</h2>
        <p className="ref-section-intro">Tenha referências visuais para consultar no dia a dia</p>
        <p>Em vez de depender apenas de informações espalhadas, reúna em um só lugar:</p>
        <ul>
          {[
            "Conteúdo para entender",
            "Checklists para revisar",
            "Comunicados para usar",
            "Cenários para analisar",
            "Guia para conferir notas fiscais",
          ].map((text) => (
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

      <section className="ref-showcase">
        <h2>VEJA OS MATERIAIS POR DENTRO</h2>
        <p className="ref-section-intro">Você sabe exatamente o que está recebendo</p>
        <AutoCarousel images={gallery} label="Páginas do produto principal" />
        <AutoCarousel images={bonusSamples} label="Páginas dos bônus" />
        <p>Mostrar exemplos de:</p>
        <ul>
          {[
            "Novos tributos",
            "Erros e pontos de atenção",
            "Comunicados prontos",
            "Preços e custos",
            "Lucro e margem",
            "Dados fiscais",
            "NCM e CFOP",
            "Conferência de documentos",
          ].map((text) => (
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

      <section className="ref-depoimentos">
        <h2>QUEM JÁ ESTÁ UTILIZANDO OS MATERIAIS</h2>
        <p className="ref-section-intro">Veja a experiência de quem adquiriu</p>
        <AutoCarousel images={depoimentos} label="Depoimentos de clientes" />
        <a className="ref-green-btn" href="#oferta">
          QUERO GARANTIR MEU ACESSO <ArrowRight aria-hidden="true" />
        </a>
      </section>

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

      <section className="ref-steps">
        <h2>COMO VOCÊ RECEBE</h2>
        <p className="ref-section-intro">Acesso digital após a confirmação da compra</p>
        <div>
          {[
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
          ].map(({ Icon, title, text }) => (
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

      <section className="ref-cta">
        <h2>APROVEITE A OFERTA</h2>
        <p className="ref-section-intro">Garanta seu acesso agora</p>
        <p>
          Tenha materiais para entender as mudanças, revisar documentos e analisar pontos
          importantes da adaptação à Reforma Tributária.
        </p>
        <p>Comece sua preparação hoje</p>
        <ul className="ref-checks">
          {[
            "Reforma Tributária Sem Erros",
            "Bônus 01: Kit de Comunicados Prontos",
            "Bônus 02: Simulador Visual de Preços e Lucros",
            "Bônus 03: SOS Nota Fiscal — Guia de Conferência",
            "Garantia de 7 dias",
          ].map((text) => (
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

      <footer className="ref-footer">
        <div className="ref-footer-note">
          <strong>GUIA NA PRÁTICA</strong>
          <p>Material educacional e informativo.</p>
          <p>
            Este conteúdo não substitui orientação contábil, fiscal ou jurídica. Antes de aplicar
            regras tributárias ao seu caso, consulte a legislação vigente, fontes oficiais e
            profissionais responsáveis.
          </p>
          <p>
            <strong>Termos de Acesso · Política de Privacidade · Contato</strong>
          </p>
        </div>
        <p>© 2026 — Todos os direitos reservados.</p>
      </footer>
      <a className="ref-sticky" href="#oferta">
        QUERO MEU GUIA <ArrowRight aria-hidden="true" />
      </a>
    </main>
  );
}
