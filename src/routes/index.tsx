import { createFileRoute } from "@tanstack/react-router";
import { AutoCarousel } from "@/components/sales/AutoCarousel";
import { ArrowRight, BookOpen, CalendarDays, Check, CheckCircle2, ChevronDown, Download, FileCheck2, ListChecks, ShieldCheck, TriangleAlert } from "lucide-react";

export const Route = createFileRoute("/")({ component: SalesPage });
const checkoutUrl = "https://checkout.wiven.com.br/checkout/cmvy9ira100k001og5qkt8tcv?offer=SFC56YZ";
const mockup = "/assets/mockup-principal.png";
const asset = (name: string) => `/assets/produto/${name}.webp`;
const cover = asset("principal-01");
const gallery = Array.from({ length: 19 }, (_, i) => `/assets/carrossel/pagina-${String(i + 1).padStart(2, "0")}.webp`);
const depoimentos = Object.values(import.meta.glob<{ url: string }>("@/assets/depoimentos/*.asset.json", { eager: true, import: "default" })).map(a => a.url);
const bonusSamples =  ["bonus1-01", "bonus1-03", "bonus1-06", "bonus2-01", "bonus2-04", "bonus2-10", "bonus3-01", "bonus3-03", "bonus3-07"].map(asset);
const bonuses = [
  { title: 'Checklist “O Que Entender Primeiro”', pages: 10, cover: asset("bonus1-01"), description: "Saiba por onde começar e avance do entendimento geral até a preparação da operação, em uma sequência de estudo visual.", items: ["Base da Reforma e identificação dos novos tributos", "Incidência, créditos e débitos", "Transição e análise do regime tributário", "Documentos, sistemas e preparação da operação"] },
  { title: "Linha do Tempo Visual da Reforma Tributária", pages: 20, cover: asset("bonus2-01"), description: "Visualize as etapas de 2026 a 2033 e organize o que estudar e acompanhar em cada fase da transição.", items: ["Visão geral do cronograma de implementação", "Fase de testes e mudanças por ano", "Tributos que saem e tributos que entram", "Impactos em documentos, sistemas e rotinas"] },
  { title: "Os 15 Erros Fiscais que Você Deve Evitar na Reforma Tributária", pages: 20, cover: asset("bonus3-01"), description: "Identifique pontos de atenção nos processos fiscais e use as orientações visuais para organizar sua revisão.", items: ["Classificação tributária, cadastros e códigos", "Emissão de documentos e parametrização do ERP", "Créditos, apuração assistida e conciliação", "Plano de ação e checklist final de revisão"] },
];
const topics = [
  "Visão geral da Reforma e comparação entre os modelos",
  "IBS, CBS e Imposto Seletivo explicados visualmente",
  "Base de cálculo e exemplo didático de cálculo em 2026",
  "Não cumulatividade, créditos, débitos e apuração assistida",
  "Notas de débito e crédito e documentos fiscais",
  "Cronograma de transição de 2026 a 2033",
  "Simples Nacional, MEI e rotinas contábeis e fiscais",
  "Destino, local da operação, exportações e importações",
  "Split payment, cashback e regimes diferenciados",
  "Regimes específicos, imunidades e operações especiais",
];
const heroChecks = [
  "Produto principal com 64 páginas ilustradas",
  "IBS, CBS, Imposto Seletivo e cálculos em explicações visuais",
  "Apuração assistida, notas de débito e crédito e documentos fiscais",
  "Simples Nacional, MEI e impactos nas rotinas contábeis e fiscais",
  "3 bônus: checklist de estudo, linha do tempo e guia dos 15 erros fiscais",
  "114 páginas ao todo, em 4 materiais digitais em PDF",
];
const ideal = [
  ["Entender a Reforma sem começar por textos extensos", "Mapas visuais para ter uma visão geral antes de aprofundar os temas."],
  ["Saber por onde começar a estudar", "Um checklist que organiza a sequência do básico à preparação prática."],
  ["Revisar IBS, CBS e os principais conceitos", "Explicações ilustradas, comparativos e exemplos para consultar."],
  ["Visualizar as etapas da transição", "Uma linha do tempo para acompanhar o cronograma e os pontos de atenção."],
  ["Organizar a revisão dos processos fiscais", "Um guia com 15 erros, situações de risco e cuidados de conferência."],
  ["Estudar e consultar no seu ritmo", "PDFs para ler no celular, tablet ou computador e imprimir se desejar."],
];
const faqs = [
  ["O que está incluído no pacote de R$ 47,00?", "Você recebe o Mapa Fácil da Reforma Tributária, com 64 páginas, e três bônus: Checklist “O Que Entender Primeiro” (10 páginas), Linha do Tempo Visual da Reforma Tributária (20 páginas) e Os 15 Erros Fiscais que Você Deve Evitar na Reforma Tributária (20 páginas). São quatro PDFs, com 114 páginas ao todo."],
  ["Preciso ser contador para estudar o material?", "O conteúdo usa mapas mentais e explicações ilustradas para facilitar o estudo. Pode ser usado por profissionais contábeis e fiscais, estudantes e empreendedores que desejam compreender os temas apresentados."],
  ["Vou receber um produto físico?", "Não. O pacote é digital, em PDF. Você pode ler os arquivos no celular, tablet ou computador e imprimir se desejar."],
  ["O material explica cálculos de IBS e CBS?", "Sim. O produto principal aborda base de cálculo, a lógica de incidência e um exemplo didático de cálculo em 2026. O pacote não inclui uma planilha calculadora."],
  ["O guia aborda Simples Nacional e MEI?", "Sim. O material principal inclui páginas sobre Simples Nacional e MEI, além de rotinas contábeis e fiscais, documentos e regimes específicos."],
  ["Os três bônus estão incluídos no preço?", "Sim. O pagamento único de R$ 47,00 inclui o produto principal e os três bônus apresentados nesta página."],
  ["Este material substitui orientação contábil ou jurídica?", "Não. Os PDFs são educacionais e informativos. Para aplicar regras a uma operação concreta, consulte a legislação vigente, as fontes oficiais e o profissional responsável."],
  ["Como funciona a garantia?", "Você tem 7 dias após a compra para solicitar o reembolso, conforme as condições da plataforma de pagamento."],
];

function SalesPage() {
  return <main className="ref-page">
    <div className="ref-top">⚡ AS REGRAS JÁ MUDARAM · ESTUDE AGORA</div>
    <section className="ref-hero">
      <div className="ref-brand">GUIA NA PRÁTICA · REFORMA TRIBUTÁRIA</div>
      <h1>Mapa Fácil da Reforma Tributária</h1>
      <h2><span className="ref-title-black">Entenda os principais pontos</span> <span className="ref-title-blue">da Reforma Tributária</span> de forma simples, visual e organizada</h2>
      <div className="ref-product-showcase ref-product-showcase--single"><img className="ref-main-cover" src={mockup} alt="Mockup do Mapa Fácil da Reforma Tributária" fetchPriority="high"/></div>
      <h3>Pare de pular entre conteúdos soltos. Organize seu estudo em mapas mentais e explicações ilustradas.</h3>
      <p>Um guia visual de 64 páginas sobre os novos tributos, a transição e os impactos na rotina — acompanhado de três bônus para orientar seu estudo e sua revisão.</p>
      <ul className="ref-checks">{heroChecks.map(text=><li key={text}><CheckCircle2 aria-hidden="true"/>{text}</li>)}</ul>
      <a className="ref-green-btn" href="#oferta">QUERO O PACOTE COMPLETO <ArrowRight aria-hidden="true"/></a>
      <div className="ref-delivery">4 PDFs · 114 páginas ao todo · Pagamento único de R$ 47,00</div>
      <small>Conteúdo educacional ilustrado para estudar, revisar e consultar.</small>
    </section>

    <section className="ref-gallery">
      <h2>VEJA POR DENTRO DO SEU MATERIAL</h2>
      <p className="ref-section-intro">Estas são páginas reais do Mapa Fácil da Reforma Tributária.</p>
      <AutoCarousel images={gallery} label="Amostras reais do produto principal"/>
      <p>Conceitos, comparativos e exemplos organizados visualmente para facilitar sua leitura.</p>
    </section>

    <section className="ref-features">
      <h2>UM CAMINHO VISUAL PARA ORGANIZAR SEU ESTUDO</h2>
      <div className="ref-feature-grid">
        {[
          { Icon: BookOpen, title: "64 páginas no guia principal", text: "Da visão geral da Reforma aos novos tributos, documentos, regimes e operações específicas." },
          { Icon: ListChecks, title: "Saiba o que entender primeiro", text: "O checklist de 10 páginas apresenta uma sequência de estudo da base da Reforma até a preparação da operação." },
          { Icon: CalendarDays, title: "Visualize a transição", text: "A linha do tempo de 20 páginas organiza o cronograma e os pontos de atenção de 2026 a 2033." },
          { Icon: TriangleAlert, title: "Revise os pontos de atenção", text: "O bônus de 20 páginas apresenta 15 erros fiscais, cuidados de revisão e um plano prático de ação." },
        ].map(({Icon,title,text})=><article key={title}><Icon className="ref-feature-svg" aria-hidden="true"/><div><h3>{title}</h3><p>{text}</p></div></article>)}
      </div>
      <a className="ref-green-btn" href="#oferta">QUERO ESTUDAR COM MAIS CLAREZA</a>
    </section>

    <section className="ref-blue-callout">
      <h2>ENTENDA A LÓGICA ANTES DE SE PERDER NOS DETALHES</h2>
      <ul>{["Comece pela visão geral e identifique IBS, CBS e Imposto Seletivo", "Entenda a lógica de créditos, débitos e apuração", "Visualize as fases da transição e os impactos nas rotinas", "Use os bônus para organizar o estudo e a revisão dos processos"].map(text=><li key={text}>{text}</li>)}</ul>
      <a className="ref-green-btn" href="#oferta">QUERO MEU GUIA + 3 BÔNUS</a>
    </section>
    <section className="ref-demonstration">
      <h2>CONHEÇA AS PÁGINAS DOS SEUS BÔNUS</h2>
      <p className="ref-section-intro">Checklist de estudo, linha do tempo e pontos de atenção fiscal em materiais ilustrados.</p>
      <AutoCarousel images={bonusSamples} label="Amostras reais dos três bônus"/>
    </section>
    <section className="ref-urgency">
      <h2>POR ONDE COMEÇAR QUANDO PARECE QUE TUDO ESTÁ MUDANDO?</h2>
      <p>Tenha uma sequência de estudo e materiais visuais para voltar aos temas sempre que precisar.</p>
      <a className="ref-green-btn" href="#oferta">QUERO ORGANIZAR MEU ESTUDO</a>
    </section>
    <section className="ref-ideal"><h2>ESTE MATERIAL É PARA VOCÊ QUE DESEJA</h2><div className="ref-ideal-grid">{ideal.map(([title,text])=><article key={title}><CheckCircle2 aria-hidden="true"/><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></section>

    <section className="ref-receive">
      <h2>TUDO O QUE VOCÊ VAI RECEBER</h2>
      <div className="ref-access-tag">PRODUTO PRINCIPAL · 64 PÁGINAS</div>
      <div className="ref-receive-card">
        <h3>MAPA FÁCIL DA REFORMA TRIBUTÁRIA</h3>
        <p>Material digital ilustrado com mapas mentais e explicações visuais sobre os principais temas da Reforma.</p>
        <img className="ref-real-cover" src={cover} alt="Capa real do produto principal" loading="lazy"/>
        <ul>{topics.map(text=><li key={text}><Check aria-hidden="true"/>{text}</li>)}</ul>
      </div>
      <h2 className="ref-more-title">E VOCÊ TAMBÉM RECEBE...</h2>
      <h3>Três materiais para complementar seu estudo</h3>
      <div className="ref-bonus-label">🎁 3 BÔNUS INCLUÍDOS</div>
      <div className="ref-bonus-grid ref-bonus-grid--three">{bonuses.map((bonus,i)=><article key={bonus.title}>
        <div className="ref-bonus-number">BÔNUS #{i+1} · {bonus.pages} PÁGINAS</div>
        <img src={bonus.cover} alt={`Capa: ${bonus.title}`} loading="lazy"/>
        <h3>{bonus.title}</h3><p>{bonus.description}</p>
        <ul>{bonus.items.map(text=><li key={text}><Check aria-hidden="true"/>{text}</li>)}</ul>
        <span>INCLUÍDO NO PACOTE</span>
      </article>)}</div>
    </section>

    <section className="ref-pricing" id="oferta">
      <div className="ref-last-chance">⚡ UM ÚNICO PACOTE COMPLETO</div>
      <h2>SEU GUIA VISUAL<br/>+ OS 3 BÔNUS</h2>
      <div className="ref-price-grid"><article className="ref-price-card ref-complete">
        <div className="ref-best">PRODUTO PRINCIPAL + 3 BÔNUS</div>
        <h3>PACOTE COMPLETO</h3>
        <img className="ref-offer-mockup" src={mockup} alt="Mockup do pacote Mapa Fácil da Reforma Tributária" loading="lazy"/>
        <b className="ref-4x">4 PDFs · 114 páginas ao todo</b>
        <ul><li><Check aria-hidden="true"/>Mapa Fácil da Reforma Tributária — 64 páginas</li>{bonuses.map((bonus,i)=><li key={bonus.title}><Check aria-hidden="true"/>Bônus {i+1}: {bonus.title} — {bonus.pages} páginas</li>)}<li><Check aria-hidden="true"/>Leitura no celular, tablet ou computador</li><li><Check aria-hidden="true"/>Arquivos em PDF que você pode imprimir</li></ul>
        <small>O pacote completo por apenas</small><strong>R$ 47,00</strong><p className="ref-one-payment">Pagamento único</p>
        <a className="ref-green-btn" href={checkoutUrl}>QUERO MEU PACOTE COMPLETO <ArrowRight aria-hidden="true"/></a>
        <div className="ref-payments"><ShieldCheck aria-hidden="true"/> Compra segura · Garantia de 7 dias</div>
      </article></div>
      <div className="ref-saving"><b>DO PRIMEIRO CONTATO À REVISÃO DOS PROCESSOS</b><p>Comece pelo checklist, estude o guia principal, acompanhe a linha do tempo e revise os 15 erros fiscais.</p></div>
    </section>

    <section className="ref-depoimentos">
      <h2>QUEM JÁ ESTÁ ESTUDANDO COM O MAPA</h2>
      <p className="ref-section-intro">Arraste para o lado ou use as setas para ver os depoimentos.</p>
      <AutoCarousel images={depoimentos} label="Depoimentos de clientes"/>
    </section>

    <section className="ref-study-path">
      <h2>UMA SEQUÊNCIA SIMPLES PARA APROVEITAR O PACOTE</h2>
      <div>{[
        ["1", "Organize seu ponto de partida", "Use o checklist para definir a ordem do estudo e entender os conceitos antes de aprofundar."],
        ["2", "Estude com os mapas visuais", "Leia o material principal e consulte a linha do tempo para relacionar os assuntos às fases da transição."],
        ["3", "Revise com mais atenção", "Use o guia dos 15 erros fiscais para identificar pontos de revisão em cadastros, documentos e processos."],
      ].map(([n,title,text])=><article key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      <a className="ref-green-btn" href="#oferta">QUERO COMEÇAR MEU ESTUDO</a>
    </section>
    <section className="ref-guarantee">
      <div className="ref-guarantee-seal"><ShieldCheck aria-hidden="true"/><strong>7 DIAS</strong><span>DE GARANTIA</span></div>
      <div><h2>7 DIAS PARA CONHECER O MATERIAL</h2><p>Acesse os PDFs, veja como os assuntos estão organizados e avalie se o pacote faz sentido para o seu estudo.</p><p>Se não quiser continuar com o produto, solicite o reembolso dentro de 7 dias após a compra, conforme as condições da plataforma de pagamento.</p></div>
    </section>
    <section className="ref-steps"><h2>COMO USAR SEUS MATERIAIS</h2><div>{[
      {Icon: Download, title:"Acesse os quatro PDFs", text:"Após a confirmação da compra, siga as instruções de acesso da plataforma de pagamento."},
      {Icon: ListChecks, title:"Comece pelo checklist", text:"Veja o que entender primeiro e organize seus próximos temas de estudo."},
      {Icon: BookOpen, title:"Estude e consulte", text:"Abra os arquivos no celular, tablet ou computador. Você também pode imprimir."},
      {Icon: FileCheck2, title:"Aplique à sua revisão", text:"Use os materiais como apoio educacional e confira as fontes oficiais antes de decisões fiscais."},
    ].map(({Icon,title,text})=><article key={title}><Icon className="ref-step-svg" aria-hidden="true"/><h3>{title}</h3><p>{text}</p></article>)}</div><a className="ref-green-btn" href="#oferta">QUERO MEU PACOTE COMPLETO</a></section>
    <section className="ref-faq"><h2>PERGUNTAS FREQUENTES</h2><div>{faqs.map(([question,answer])=><details key={question}><summary>{question}<ChevronDown aria-hidden="true"/></summary><p>{answer}</p></details>)}</div></section>
    <footer className="ref-footer"><p>© 2026 <strong>Guia na Prática</strong>. Todos os direitos reservados.</p><p>É proibida a reprodução ou distribuição, total ou parcial, deste material sem autorização prévia e expressa do Guia na Prática, ressalvadas as exceções previstas em lei. Protegido pela Lei nº 9.610/1998 (Lei de Direitos Autorais), especialmente o art. 29. A violação de direitos autorais pode configurar crime nos termos do art. 184 do Código Penal.</p><p>Material educacional e informativo. Consulte a legislação vigente, as fontes oficiais e orientação profissional antes de aplicar regras tributárias ao seu caso.</p></footer>
    <a className="ref-sticky" href="#oferta">QUERO MEU GUIA <ArrowRight aria-hidden="true"/></a>
  </main>;
}
