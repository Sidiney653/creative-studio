import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight, Check, CheckCircle2, Clock3, Download, FileText, Gift,
  Mail, ShieldCheck, Smartphone,
  BookOpen, Calculator, CalendarDays, Table2, ClipboardCheck, Sparkles,
  ChevronDown, Zap, LockKeyhole
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: SalesPage,
});

const cover = "https://materialseguro.site/wp-content/uploads/2026/07/MockupCompleto-1.webp";
const previewImages = [
  "https://materialseguro.site/wp-content/uploads/2026/07/2.webp",
  "https://materialseguro.site/wp-content/uploads/2026/07/3-1.webp",
  "https://materialseguro.site/wp-content/uploads/2026/07/4.webp",
  "https://materialseguro.site/wp-content/uploads/2026/07/5.webp",
  "https://materialseguro.site/wp-content/uploads/2026/07/6.webp",
  "https://materialseguro.site/wp-content/uploads/2026/07/7.webp",
  "https://materialseguro.site/wp-content/uploads/2026/07/MockupDemonstrativo.webp",
];
const bonusImages = [
  "https://materialseguro.site/wp-content/uploads/2026/07/GlossarioMockup2-768x960.webp",
  "https://materialseguro.site/wp-content/uploads/2026/07/1WEBP-768x576.webp",
  "https://materialseguro.site/wp-content/uploads/2026/07/Checklist-O-Que-Entender-Primeiro-819x1024.webp",
  "https://materialseguro.site/wp-content/uploads/2026/07/2WEBP-1024x683.webp",
  "https://materialseguro.site/wp-content/uploads/2026/07/LinhadoTempo-1024x768.webp",
  "https://materialseguro.site/wp-content/uploads/2026/07/3WEBP-819x1024.webp",
  "https://materialseguro.site/wp-content/uploads/2026/07/QuadroAnteseDepois-1024x768.png",
  "https://materialseguro.site/wp-content/uploads/2026/07/Mockup-1024x768.png",
];
const basicCheckout = "https://pay.hotmart.com/B106933353W?checkoutMode=10";
const completeCheckout = "https://pay.hotmart.com/J106917128D?checkoutMode=10";

const bonuses = [
  { n: "01", image: bonusImages[0], title: "Glossário Visual da Reforma Tributária", desc: "Consulte os principais termos da Reforma com explicações diretas, sem ficar perdido no juridiquês.", icon: BookOpen },
  { n: "02", image: bonusImages[1], title: "Tabela pronta de CST, cClassTrib, cIndOp e cCredPres", desc: "Uma tabela organizada para facilitar a consulta dos códigos e classificações.", icon: Table2 },
  { n: "03", image: bonusImages[2], title: "Checklist: O Que Entender Primeiro", desc: "Saiba quais assuntos priorizar e tenha um caminho mais claro para começar.", icon: ClipboardCheck },
  { n: "04", image: bonusImages[3], title: "Planilha Calculadora de IBS/CBS", desc: "Uma planilha de apoio para simular cálculos de IBS e CBS com mais praticidade.", icon: Calculator },
  { n: "05", image: bonusImages[4], title: "Linha do Tempo Visual", desc: "Visualize as fases e os principais períodos de transição da Reforma Tributária.", icon: CalendarDays },
  { n: "06", image: bonusImages[5], title: "Gabarito de preenchimento do IBS/CBS na Nota Fiscal", desc: "Consulte os campos e etapas envolvidos no preenchimento dos documentos fiscais.", icon: FileText },
  { n: "07", image: bonusImages[6], title: "Quadro Antes x Depois da Reforma", desc: "Compare o modelo atual com o novo sistema e identifique as principais mudanças.", icon: ArrowRight },
  { n: "08", image: bonusImages[7], title: "Guia de emissão de documentos fiscais", desc: "Material de apoio sobre NF-e, NFC-e, CT-e e NFS-e, com orientações para o cenário de 2026.", icon: Download },
];

const faqs = [
  ["Preciso ser contador para entender o conteúdo?", "Não. O material foi pensado para profissionais contábeis, fiscais, estudantes e também para quem precisa compreender os principais pontos da Reforma Tributária."],
  ["O acesso é imediato após a compra?", "Sim. Após a confirmação do pagamento, a Hotmart libera as informações para acessar a área de membros."],
  ["O material explica IBS, CBS e Imposto Seletivo?", "Sim. Esses temas fazem parte do conteúdo principal e são apresentados de forma visual e organizada."],
  ["Vou receber os bônus também?", "Sim. Os oito bônus estão incluídos no Plano Completo."],
  ["O material será atualizado?", "O conteúdo poderá receber atualizações conforme mudanças relevantes da Reforma Tributária."],
  ["Por quanto tempo terei acesso?", "O acesso é digital e você poderá consultar os materiais conforme as condições apresentadas na área de membros."],
  ["Esse produto substitui uma consultoria contábil, fiscal ou jurídica?", "Não. O Mapa Fácil é um material educacional e informativo. Ele não substitui orientação profissional individual."],
  ["Posso pagar no cartão ou Pix?", "As formas de pagamento disponíveis aparecem diretamente no checkout seguro da Hotmart."],
];

function SalesPage() {
  return (
    <main className="sales-page">
      <div className="top-strip"><Zap size={14} fill="currentColor" /> ⚡ OFERTA ESPECIAL DISPONÍVEL APENAS HOJE</div>
      <header className="site-header">
        <a href="#inicio" className="brand"><span className="brand-mark">MF</span><span>MAPA FÁCIL<small>REFORMA TRIBUTÁRIA</small></span></a>
        <a className="header-cta" href="#oferta">Ver planos <ArrowRight size={16}/></a>
      </header>

      <section className="hero section-wrap" id="inicio">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-dot"/> MAPA FÁCIL DA REFORMA TRIBUTÁRIA</div>
          <h1>Entenda a Reforma Tributária <em>sem se perder</em> em leis e explicações complicadas.</h1>
          <p className="hero-lead">Material feito para entender IBS, CBS, Imposto Seletivo, como calcular, Notas Fiscais, Apuração Assistida, Nota de Débito e Crédito e as principais mudanças de forma simples, visual e organizada.</p>
          <ul className="check-list hero-checks">
            <li><CheckCircle2/> Mapas mentais prontos e organizados por tema</li>
            <li><CheckCircle2/> Explicações visuais dos novos tributos</li>
            <li><CheckCircle2/> Como ficam Simples Nacional, Lucro Presumido e Lucro Real</li><li><CheckCircle2/> Cálculos de IBS e CBS, Apuração Assistida e Nota de Débito e Crédito</li><li><CheckCircle2/> Glossário visual e checklist para saber por onde começar</li>
          </ul>
          <a className="button button-primary" href="#oferta">QUERO ACESSAR O MATERIAL <ArrowRight size={18}/></a>
          <div className="secure-note"><LockKeyhole size={14}/> Compra segura • Material digital • Acesso após a confirmação</div>
        </div>
        <div className="hero-visual">
          <div className="visual-glow"/>
          <img src={cover} alt="Kit visual Mapa Fácil da Reforma Tributária e materiais complementares" />
          <div className="floating-note"><span className="note-icon"><Download size={18}/></span><span><b>Material digital</b><small>Consulte em seus dispositivos</small></span></div>
        </div>
      </section>

      <section className="trust-row">
        <div><ShieldCheck/><span><b>Compra protegida</b><small>Checkout Hotmart</small></span></div>
        <div><Download/><span><b>Acesso digital</b><small>Após a confirmação</small></span></div>
        <div><Smartphone/><span><b>Estude onde quiser</b><small>Celular, tablet ou computador</small></span></div>
        <div><Clock3/><span><b>Consulte sempre</b><small>Material para revisar</small></span></div>
      </section>

      <section className="section section-soft">
        <div className="section-wrap intro-grid">
          <div><div className="eyebrow">MAIS CLAREZA, MENOS CONFUSÃO</div><h2>Um assunto complexo fica mais fácil quando está <em>bem organizado.</em></h2></div>
          <div className="intro-text"><p>A Reforma Tributária traz novos conceitos, siglas e mudanças que precisam ser acompanhadas. O Mapa Fácil reúne os principais temas em uma sequência visual, para ajudar você a construir uma visão geral antes de se aprofundar.</p><p>Em vez de juntar informações soltas, você encontra os assuntos separados e prontos para estudar, revisar e consultar.</p></div>
        </div>
      </section>

      <section className="section section-wrap">
        <div className="section-heading"><div className="eyebrow">CONTEÚDO PRINCIPAL</div><h2>O que você encontra no <em>Mapa Fácil</em></h2><p>Uma visão organizada dos principais pontos da Reforma Tributária.</p></div>
        <div className="feature-grid">
          <article className="feature-card"><span className="feature-icon"><BookOpen/></span><h3>Mapas mentais prontos</h3><p>Os principais temas organizados visualmente para você não precisar começar seus resumos do zero.</p></article>
          <article className="feature-card"><span className="feature-icon"><Sparkles/></span><h3>Novos tributos explicados</h3><p>IBS, CBS e Imposto Seletivo apresentados de maneira mais clara e didática.</p></article>
          <article className="feature-card"><span className="feature-icon"><FileText/></span><h3>Conteúdo por assunto</h3><p>Transição, documentos fiscais, obrigações, regimes específicos e rotina contábil separados por tema.</p></article>
          <article className="feature-card"><span className="feature-icon"><Download/></span><h3>Arquivos digitais</h3><p>Materiais prontos para estudar, revisar e consultar no celular, tablet ou computador.</p></article>
        </div>
      </section>

      <section className="section preview-section">
        <div className="section-wrap preview-grid">
          <div className="preview-copy"><div className="eyebrow">VEJA COMO É POR DENTRO</div><h2>Visualize os assuntos. <em>Conecte as informações.</em></h2><p>O material foi pensado para transformar temas técnicos em páginas visuais, com tópicos e explicações organizadas para facilitar a consulta.</p><a className="text-link" href="#oferta">Quero conhecer o material <ArrowRight size={16}/></a></div>
          <div className="preview-image"><img src={cover} alt="Prévia dos mapas mentais e materiais do Mapa Fácil"/></div>
        </div>
      </section>

      <section className="section section-wrap audience-section">
        <div className="section-heading"><div className="eyebrow">PARA QUEM É ESTE MATERIAL</div><h2>Feito para quem precisa <em>entender e acompanhar</em> a Reforma</h2></div>
        <div className="audience-grid">
          {["Profissionais da contabilidade","Analistas fiscais e tributários","Estudantes de Ciências Contábeis","Empreendedores e gestores","Quem deseja acompanhar as mudanças"].map((item)=><div className="audience-item" key={item}><Check size={17}/>{item}</div>)}
        </div>
      </section>


      <section className="section section-soft contents-section">
        <div className="section-wrap contents-grid">
          <div><div className="eyebrow">TUDO O QUE VOCÊ VAI RECEBER</div><h2>Um material completo para estudar, revisar e <em>consultar sempre.</em></h2><p className="contents-lead">Após a compra, você terá acesso aos conteúdos digitais organizados por assunto, com mapas mentais e materiais de apoio.</p><img className="contents-cover" src={cover} alt="Materiais digitais do Mapa Fácil da Reforma Tributária"/></div>
          <div className="contents-list">
            {["Mapa Fácil da Reforma Tributária","Visão geral da Reforma Tributária","IBS explicado visualmente","CBS explicado visualmente","Apuração Assistida explicada","Quando fazer Nota de Débito e Crédito","Imposto Seletivo","Transição da Reforma","Impactos na rotina contábil e fiscal","Documentos fiscais e obrigações","Simples Nacional, MEI e regimes específicos","Termos técnicos traduzidos","Mapas mentais organizados por tema","Atualizações conforme mudanças relevantes da Reforma"].map((item)=><p key={item}><CheckCircle2/>{item}</p>)}
          </div>
        </div>
      </section>
      <section className="reference-urgency">
        <div className="section-wrap"><div className="eyebrow">OFERTA ESPECIAL POR TEMPO LIMITADO</div><h2>Quanto tempo você ainda vai perder tentando entender a Reforma Tributária em conteúdos soltos?</h2><p>Aproveite a condição especial e escolha seu acesso.</p><a className="button button-primary" href="#oferta">QUERO ACESSAR AGORA <ArrowRight size={18}/></a></div>
      </section>\n      <section className="section section-dark">
        <div className="section-wrap">
          <div className="section-heading light"><div className="eyebrow">VOCÊ RECEBE NO PLANO COMPLETO</div><h2>O material principal + <em>8 bônus exclusivos</em></h2><p>Mais recursos para consultar e organizar seus estudos.</p></div>
          <div className="bonus-grid">
            {bonuses.map((bonus)=>{const Icon=bonus.icon;return <article className="bonus-card" key={bonus.n}><div className="bonus-top"><span>BÔNUS {bonus.n}</span><Gift size={18}/></div><div className="bonus-image"><img src={bonus.image} alt={bonus.title}/></div><div className="bonus-icon"><Icon size={22}/></div><h3>{bonus.title}</h3><p>{bonus.desc}</p><div className="bonus-free"><span>INCLUSO</span><b>GRÁTIS</b></div></article>})}
          </div>
          <div className="bonus-bottom"><Gift size={18}/> Os 8 bônus estão incluídos no Plano Completo, sem cobrança adicional.</div>
        </div>
      </section>

      <section className="section section-wrap pricing-section" id="oferta">
        <div className="section-heading"><div className="eyebrow">ESCOLHA SEU ACESSO</div><h2>Qual opção faz mais sentido <em>para você?</em></h2><p>Escolha seu plano e conclua a compra no ambiente seguro da Hotmart.</p></div>
        <div className="pricing-grid">
          <article className="price-card">
            <img className="plan-cover" src="https://materialseguro.site/wp-content/uploads/2026/07/MockupBasico.webp" alt="Mockup do Plano Básico"/><div className="plan-name">PLANO BÁSICO</div><h3>Mapa Fácil</h3><p className="plan-desc">Para ter acesso ao material principal e começar a organizar seus estudos.</p>
            <div className="price-old">De R$ 57,90 por</div><div className="price"><span>R$</span>27<small>,90</small></div><div className="price-note">Pagamento à vista</div>
            <div className="plan-divider"/>
            <ul className="plan-list"><li><Check/> Mapa Fácil da Reforma Tributária</li><li><Check/> Mapas mentais e temas principais</li><li><Check/> Acesso à área de membros</li></ul>
            <a className="button button-outline" href={basicCheckout} target="_blank" rel="noreferrer">QUERO O PLANO BÁSICO <ArrowRight size={17}/></a>
            <div className="price-foot"><LockKeyhole size={13}/> Checkout seguro Hotmart</div>
          </article>
          <article className="price-card featured">
            <div className="popular-tag"><Zap size={14} fill="currentColor"/> PLANO MAIS COMPLETO</div>
            <img className="plan-cover" src={cover} alt="Mockup do Plano Completo"/><div className="plan-name">PLANO COMPLETO</div><h3>Mapa Fácil + 8 Bônus</h3><p className="plan-desc">O pacote completo para estudar, revisar e consultar os principais materiais.</p>
            <div className="price-old">De R$ 77,90 por</div><div className="price"><span>R$</span>37<small>,90</small></div><div className="price-note">Pagamento à vista</div>
            <div className="plan-divider"/>
            <ul className="plan-list"><li><Check/> Tudo do Plano Básico</li><li><Check/> Glossário Visual da Reforma</li><li><Check/> Tabelas CST, cClassTrib, cIndOp e cCredPres</li><li><Check/> Checklist do que entender primeiro</li><li><Check/> Planilha Calculadora de IBS/CBS</li><li><Check/> Linha do Tempo Visual</li><li><Check/> Gabarito IBS/CBS na Nota Fiscal</li><li><Check/> Quadro Antes x Depois</li><li><Check/> Guia de emissão de documentos fiscais</li></ul>
            <a className="button button-primary" href={completeCheckout} target="_blank" rel="noreferrer">QUERO O PLANO COMPLETO <ArrowRight size={18}/></a>
            <div className="price-foot"><ShieldCheck size={14}/> Compra protegida • Garantia de 7 dias</div>
          </article>
        </div>
        <p className="pricing-disclaimer">Os valores e condições finais são confirmados no checkout. O parcelamento pode incluir acréscimos.</p>
      </section>

      <section className="section guarantee-section">
        <div className="section-wrap guarantee-card"><div className="guarantee-seal"><ShieldCheck size={44}/><b>7 DIAS</b><small>GARANTIA</small></div><div><div className="eyebrow">SUA COMPRA COM MAIS TRANQUILIDADE</div><h2>Você tem 7 dias de <em>garantia.</em></h2><p>Após a compra, você tem o prazo de 7 dias para avaliar o material. Se decidir que ele não é para você, poderá solicitar o reembolso conforme as condições da plataforma.</p><a href={completeCheckout} className="text-link" target="_blank" rel="noreferrer">Acessar o checkout <ArrowRight size={16}/></a></div></div>
      </section>

      <section className="section section-wrap steps-section">
        <div className="section-heading"><div className="eyebrow">SIMPLES E DIGITAL</div><h2>Como você recebe seu <em>material</em></h2></div>
        <div className="steps-grid">
          <div className="step"><span>01</span><div className="step-icon"><LockKeyhole/></div><h3>Conclua sua compra</h3><p>Escolha o plano e finalize o pagamento no checkout seguro.</p></div>
          <div className="step"><span>02</span><div className="step-icon"><Mail/></div><h3>Receba o acesso</h3><p>Após a confirmação, você recebe as instruções para acessar a área de membros.</p></div>
          <div className="step"><span>03</span><div className="step-icon"><Download/></div><h3>Acesse os arquivos</h3><p>Encontre os mapas e materiais organizados para consultar.</p></div>
          <div className="step"><span>04</span><div className="step-icon"><Smartphone/></div><h3>Estude onde quiser</h3><p>Consulte pelo celular, tablet ou computador, no seu ritmo.</p></div>
        </div>
      </section>

      <section className="section faq-section">
        <div className="section-wrap faq-wrap"><div className="faq-intro"><div className="eyebrow">AINDA TEM DÚVIDAS?</div><h2>Perguntas <em>frequentes</em></h2><p>Veja as respostas para as dúvidas mais comuns sobre o material e o acesso.</p></div><div className="faq-list">{faqs.map(([q,a])=><details className="faq-item" key={q}><summary>{q}<ChevronDown size={19}/></summary><p>{a}</p></details>)}</div></div>
      </section>

      <section className="final-cta"><div className="section-wrap final-inner"><div className="eyebrow">MAPA FÁCIL DA REFORMA TRIBUTÁRIA</div><h2>Organize seu conhecimento. <em>Entenda com mais clareza.</em></h2><p>Escolha seu plano e tenha acesso aos materiais digitais.</p><a className="button button-light" href="#oferta">ESCOLHER MEU PLANO <ArrowRight size={18}/></a></div></section>

      <footer className="site-footer"><div className="section-wrap footer-inner"><a href="#inicio" className="brand footer-brand"><span className="brand-mark">MF</span><span>MAPA FÁCIL<small>REFORMA TRIBUTÁRIA</small></span></a><p>Material educacional e informativo. Não substitui consultoria ou orientação profissional contábil, fiscal ou jurídica individual.</p><small>© {new Date().getFullYear()} • Todos os direitos reservados.</small></div></footer>
      <a className="mobile-sticky" href="#oferta">VER PLANOS E ACESSAR <ArrowRight size={17}/></a>
    </main>
  );
}
