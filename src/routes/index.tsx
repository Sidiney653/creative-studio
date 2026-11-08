import { createFileRoute } from "@tanstack/react-router";
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

import {
  HeroSection,
  GallerySection,
  SequenceSection,
  BeforeSection,
  ShowcaseSection,
  DepoimentosSection,
  GuaranteeSection,
  StepsSection,
  FAQSection,
  FooterSection,
} from "@/components/sales/sections";

import { AutoCarousel } from "@/components/sales/AutoCarousel";

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

function SalesPage() {
  return (
    <main className="ref-page">
      <div className="ref-top">⚡ AS REGRAS JÁ MUDARAM · PREPARE-SE AGORA</div>

      <HeroSection />

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

      <SequenceSection />
      <BeforeSection />
      <ShowcaseSection gallery={gallery} bonusSamples={bonusSamples} />
      <DepoimentosSection depoimentos={depoimentos} />
      <GuaranteeSection />
      <StepsSection />
      <FAQSection />
      <FooterSection />

      <a className="ref-sticky" href="#oferta">
        QUERO MEU GUIA <ArrowRight aria-hidden="true" />
      </a>
    </main>
  );
}
