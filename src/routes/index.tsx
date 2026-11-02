import { createFileRoute } from "@tanstack/react-router";
import { Check, CheckCircle2, ArrowRight, ShieldCheck, Download, Smartphone, BookOpen, Calculator, FileText, Gift, Clock3, ChevronDown, Zap, Mail, Printer, Users } from "lucide-react";

export const Route = createFileRoute("/")({ component: SalesPage });

const cover = "https://materialseguro.site/wp-content/uploads/2026/07/MockupCompleto-1.webp";
const basic = "https://pay.hotmart.com/B106933353W?checkoutMode=10";
const complete = "https://pay.hotmart.com/J106917128D?checkoutMode=10";
const gallery = [
 "https://materialseguro.site/wp-content/uploads/2026/07/MockupDemonstrativo.webp",
 "https://materialseguro.site/wp-content/uploads/2026/07/2.webp",
 "https://materialseguro.site/wp-content/uploads/2026/07/3-1.webp",
 "https://materialseguro.site/wp-content/uploads/2026/07/4.webp",
 "https://materialseguro.site/wp-content/uploads/2026/07/5.webp",
 "https://materialseguro.site/wp-content/uploads/2026/07/6.webp",
 "https://materialseguro.site/wp-content/uploads/2026/07/7.webp",
];
const lifestyle = [
 "https://materialseguro.site/wp-content/uploads/2026/07/1-2.webp",
 "https://materialseguro.site/wp-content/uploads/2026/07/3-2.webp",
 "https://materialseguro.site/wp-content/uploads/2026/07/7-1.webp",
 "https://materialseguro.site/wp-content/uploads/2026/07/9.webp",
 "https://materialseguro.site/wp-content/uploads/2026/07/10.webp",
];
const bonuses = [
 ["Glossário Visual da Reforma Tributária","Um material simples para consultar os principais termos da Reforma sem ficar perdido no juridiquês.","https://materialseguro.site/wp-content/uploads/2026/07/GlossarioMockup2-768x960.webp"],
 ["Tabela pronta com CST, cClassTrib, cIndOp e cCredPres","Uma tabela pronta para consulta rápida dos principais códigos da Reforma.","https://materialseguro.site/wp-content/uploads/2026/07/1WEBP-768x576.webp"],
 ["Checklist “O Que Entender Primeiro”","Uma lista prática para saber quais temas priorizar antes de se aprofundar na Reforma.","https://materialseguro.site/wp-content/uploads/2026/07/Checklist-O-Que-Entender-Primeiro-819x1024.webp"],
 ["Planilha Calculadora de IBS/CBS","Uma planilha pronta para calcular IBS/CBS, de forma visual e organizada.","https://materialseguro.site/wp-content/uploads/2026/07/2WEBP-1024x683.webp"],
 ["Linha do Tempo Visual","Um material visual para entender a transição da Reforma Tributária com mais clareza.","https://materialseguro.site/wp-content/uploads/2026/07/LinhadoTempo-1024x768.webp"],
 ["Gabarito de preenchimento do IBS/CBS na Nota Fiscal","Um gabarito para verificar o que preencher na nota fiscal e conferir os campos.","https://materialseguro.site/wp-content/uploads/2026/07/3WEBP-819x1024.webp"],
 ["Quadro Antes x Depois da Reforma","Um comparativo simples para visualizar o que muda entre o sistema atual e o novo modelo tributário.","https://materialseguro.site/wp-content/uploads/2026/07/QuadroAnteseDepois-1024x768.png"],
 ["Guia de Emissão de NF-e, NFC-e, CT-e e NFS-e","Um guia para entender a emissão dos principais documentos fiscais.","https://materialseguro.site/wp-content/uploads/2026/07/Mockup-1024x768.png"]
];
const ideal = [
 ["Entender a Reforma Tributária sem começar por leis extensas","Compreender os principais pontos sem travar em textos técnicos logo de início."],
 ["Organizar tudo o que está sendo falado no mercado","IBS, CBS, Imposto Seletivo e transição em uma sequência mais clara."],
 ["Estudar sem depender de lives longas","Acessar mapas visuais e revisar os temas de forma mais rápida."],
 ["Saber por onde começar","Seguir um caminho simples sem ficar pulando de conteúdo em conteúdo."],
 ["Ganhar mais segurança para falar sobre o tema","Acompanhar conversas, reuniões e conteúdos com mais clareza."],
 ["Traduzir termos técnicos com facilidade","Consultar conceitos importantes em uma linguagem mais simples."]
];
const faqs = [
 ["Preciso ser contador para entender o conteúdo?","Não. O material foi criado para profissionais contábeis, fiscais, estudantes e também para quem precisa entender a Reforma sem começar por leis extensas ou explicações complicadas."],
 ["O acesso é imediato após a compra?","Sim. Após a confirmação do pagamento, você recebe as informações de acesso para consultar os materiais."],
 ["O material explica IBS, CBS e Imposto Seletivo?","Sim. Esses temas fazem parte do conteúdo principal e são apresentados de forma visual para facilitar o entendimento."],
 ["Vou receber os bônus também?","Os bônus fazem parte do Plano Completo. Nele, você recebe o Mapa Fácil da Reforma Tributária + todos os bônus exclusivos."],
 ["O material será atualizado?","Sim. Como a Reforma Tributária ainda pode ter mudanças relevantes, o material poderá receber atualizações conforme necessário."],
 ["Por quanto tempo terei acesso ao material?","Você terá acesso ao material digital adquirido para consultar, revisar e estudar sempre que precisar."],
 ["Esse produto substitui uma consultoria contábil, fiscal ou jurídica?","Não. O Mapa Fácil da Reforma Tributária é um material educacional e informativo. Ele não substitui orientação profissional individual."],
 ["Posso pagar no cartão ou Pix?","Sim. As formas de pagamento disponíveis aparecem na página de checkout no momento da compra."]
];
function SalesPage() {
 return <main className="ref-page">
  <div className="ref-top">⚡ OFERTA ESPECIAL • CONDIÇÃO PROMOCIONAL</div>
  <section className="ref-hero">
   <div className="ref-brand">MAPA FÁCIL DA REFORMA TRIBUTÁRIA</div>
   <h1>Mapa Fácil da Reforma Tributária</h1>
   <h2>Material visual para entender IBS, CBS, Imposto Seletivo e as principais mudanças de forma simples, visual e organizada</h2>
   <img className="ref-main-cover" src={cover} alt="Kit Mapa Fácil da Reforma Tributária"/>
   <h3>Entenda a Reforma Tributária sem se perder em leis extensas, lives longas ou explicações complicadas</h3>
   <p>Material feito para entender IBS, CBS, Imposto Seletivo, como calcular, Notas Fiscais, Apuração Assistida, Nota de Débito e Crédito e as principais mudanças de forma simples, visual e organizada.</p>
   <ul className="ref-checks">
    {["Arquivos digitais organizados para consulta rápida","Mapas mentais visuais sobre os principais pontos da Reforma Tributária","IBS, CBS, Imposto Seletivo e transição explicados com mais clareza","Como ficam os Regimes Tributários como Simples Nacional, Lucro Presumido e Lucro Real","Cálculos de IBS e CBS explicados","Glossário visual para traduzir termos técnicos","Checklist para saber o que entender primeiro","Apuração Assistida e Nota de Débito e Crédito","Material educacional e informativo, com atualizações conforme mudanças relevantes"].map(x=><li key={x}><CheckCircle2/>{x}</li>)}
   </ul>
   <a className="ref-green-btn" href="#oferta">ACESSAR AGORA</a>
   <div className="ref-delivery">Você recebe tudo na hora, direto no WhatsApp e no e-mail</div>
   <small>Materiais e Marcas Registrados no INPI</small>
  </section>
  <section className="ref-gallery">
   <h2>VEJA COMO A REFORMA TRIBUTÁRIA FICA MAIS FÁCIL QUANDO ESTÁ ORGANIZADA VISUALMENTE</h2>
   <img className="ref-gallery-main" src={gallery[0]} alt="Demonstração do material"/>
   <div className="ref-gallery-row">{gallery.slice(1).map((src,i)=><img key={src} src={src} alt={`Mapa visual ${i+1}`}/>)}</div>
   <p>O Mapa Fácil da Reforma Tributária foi pensado para transformar um assunto técnico em um material mais simples de visualizar.</p>
  </section>
  <section className="ref-features">
   <h2>O MAPA FÁCIL DA REFORMA TRIBUTÁRIA POSSUI:</h2>
   <div className="ref-feature-grid">
    {[["▤","Mapas mentais prontos","Você não precisa montar resumos do zero. Os principais temas da Reforma já estão organizados em mapas visuais para facilitar sua compreensão."],["◈","Explicação visual dos novos tributos","IBS, CBS e Imposto Seletivo apresentados de forma mais clara, para você entender o papel de cada um sem se perder em termos técnicos."],["▧","Conteúdo organizado por temas","Visão geral, transição, impactos na rotina contábil, documentos fiscais, obrigações, regimes específicos e termos técnicos separados de forma lógica."],["⇩","Arquivos Organizados","Tudo organizado para você estudar e entender da maneira correta. Materiais prontos para estudar."]].map(([ic,t,d])=><article key={t}><span>{ic}</span><div><h3>{t}</h3><p>{d}</p></div></article>)}
   </div>
   <a className="ref-green-btn" href="#oferta">QUERO O MAPA FÁCIL DA REFORMA TRIBUTÁRIA</a>
  </section>
  <section className="ref-blue-callout">
   <h2>ENTENDA A REFORMA TRIBUTÁRIA DE UMA MANEIRA MAIS SIMPLES E ORGANIZADA</h2>
   <ul>{["Pare de perder tempo tentando organizar tudo sozinho","Entenda IBS, CBS e Imposto Seletivo com mais clareza","Veja como os principais pontos da Reforma se conectam","Ganhe segurança para acompanhar conversas sobre o tema","Acompanhe atualizações relevantes sem ficar perdido no excesso de informação"].map(x=><li key={x}>{x}</li>)}</ul>
   <a className="ref-green-btn" href="#oferta">QUERO ACESSAR AGORA E USAR HOJE</a>
  </section>
  <section className="ref-photo-strip">{lifestyle.map(src=><img key={src} src={src} alt="Material sendo estudado"/> )}</section>
  <section className="ref-urgency"><h2>QUANTO TEMPO VOCÊ AINDA VAI PERDER TENTANDO ENTENDER A REFORMA TRIBUTÁRIA EM CONTEÚDOS SOLTOS?</h2><p>Aproveite a oferta por tempo limitado</p><a className="ref-green-btn" href="#oferta">QUERO ACESSAR AGORA E USAR HOJE</a></section>
  <section className="ref-ideal"><h2>ESTE MATERIAL É IDEAL PARA VOCÊ QUE DESEJA</h2><div className="ref-ideal-grid">{ideal.map(([t,d])=><article key={t}><CheckCircle2/><div><h3>{t}</h3><p>{d}</p></div></article>)}</div></section>
  <section className="ref-receive">
   <h2>TUDO O QUE VOCÊ VAI RECEBER</h2>
   <div className="ref-access-tag">ACESSO IMEDIATO</div>
   <div className="ref-receive-card"><h3>TUDO FOI ORGANIZADO PARA SER SIMPLES, VISUAL E FÁCIL DE CONSULTAR.</h3><p>Após a compra, você recebe acesso imediato aos materiais digitais organizados para estudar, revisar e consultar sempre que precisar.</p><img src={cover} alt="Conteúdo principal"/><ul>{["Mapa Fácil da Reforma Tributária","Visão geral da Reforma Tributária","IBS explicado visualmente","CBS explicado visualmente","Apuração Assistida Explicada","Quando Fazer Nota de Débito e Crédito","Imposto Seletivo","Transição da Reforma","Impactos na rotina contábil e fiscal","Documentos fiscais e obrigações","Simples Nacional, MEI e regimes específicos","Termos técnicos traduzidos","Mapas mentais organizados por tema","Atualizações conforme mudanças relevantes da Reforma"].map(x=><li key={x}><Check/>{x}</li>)}</ul></div>
   <h2 className="ref-more-title">E NÃO PARA POR AÍ...<br/>TEM MAIS!</h2><h3>Você também vai receber...</h3><div className="ref-bonus-label">🔥 8 BÔNUS EXCLUSIVOS</div>
   <div className="ref-bonus-grid">{bonuses.map(([t,d,img],i)=><article key={t}><img src={img} alt={t}/><h3>{t}</h3><p>{d}</p><ul>{(i===0?["IBS, CBS e Imposto Seletivo explicados","Termos técnicos traduzidos","Consulta rápida sempre que surgir dúvida"]:i===1?["Tabela de CST","Tabela de cClassTrib","Tabela de cIndOp","Tabela de cCredPres"]:i===2?["Evita excesso de informação","Ajuda a organizar o raciocínio","Facilita sua primeira visão geral"]:i===3?["Evita excesso de informação","Ajuda a organizar o raciocínio"]:i===4?["Fases da implementação","Principais períodos de mudança","Visão organizada da transição"]:i===5?["Preenchimento correto nas Notas Fiscais","Acompanhamento por etapa","Conferência dos campos nos XMLs"]:i===6?["Sistema atual x novo sistema","Mudanças principais em destaque","Mais facilidade para comparar"]:["Guia de NF-e","Guia de NFS-e","Guia de CT-e","Guia de NFC-e"]).map(v=><li key={v}><Check/>{v}</li>)}</ul><span>Valor: <s>R$27</s> GRÁTIS</span></article>)}</div>
  </section>
  <section className="ref-pricing" id="oferta">
   <div className="ref-last-chance">🔥 OFERTA ESPECIAL • CONDIÇÃO PROMOCIONAL</div><h2>ESCOLHA A OPÇÃO IDEAL<br/>PARA VOCÊ</h2>
   <div className="ref-price-grid">
    <article className="ref-price-card"><h3>PLANO BÁSICO</h3><img src="https://materialseguro.site/wp-content/uploads/2026/07/MockupDemonstrativo.webp" alt="Plano básico"/><p>Você recebe:</p><ul><li><Check/>Mapa Fácil da Reforma Tributária</li><li><Check/>Acesso imediato pela área de membros</li></ul><small>de R$57,90 por:</small><strong>R$27,90</strong><a className="ref-green-btn" href={basic} target="_blank" rel="noreferrer">QUERO SOMENTE O BÁSICO</a></article>
    <div className="ref-price-aside">92% das pessoas aproveitam a oferta abaixo:</div>
    <article className="ref-price-card ref-complete"><div className="ref-best">⚡ MAIS VENDIDO</div><div className="ref-last-chance">🔥 OFERTA ESPECIAL • CONDIÇÃO PROMOCIONAL</div><h3>PLANO COMPLETO</h3><img src={cover} alt="Plano completo"/><b className="ref-4x">⚡ 4x mais conteúdos</b><ul>{["Mapa Fácil da Reforma Tributária","Mapas mentais sobre os principais pontos da Reforma","Visão geral da Reforma Tributária","IBS explicado visualmente","CBS explicado visualmente","Imposto Seletivo explicado visualmente","Transição da Reforma","Atualizações conforme mudanças relevantes","Simples Nacional, MEI e regimes específicos","Documentos fiscais e obrigações",...bonuses.map(([t])=>"🎁 "+t)].map(x=><li key={x}><Check/>{x}</li>)}</ul><small>de R$77,90 por:</small><strong>R$37,90</strong><a className="ref-green-btn" href={complete} target="_blank" rel="noreferrer">QUERO O PLANO COMPLETO</a><div className="ref-payments">Compra segura • Hotmart</div></article>
   </div>
   <div className="ref-saving"><b>UM ÚNICO MAPA PODE ECONOMIZAR HORAS TENTANDO ENTENDER A REFORMA POR CONTEÚDOS SOLTOS.</b><p>Todo o resto vira clareza para estudar, revisar e acompanhar as mudanças.</p></div>
  </section>
  <section className="ref-testimonials"><h2>VEJA O QUE NOSSOS CLIENTES ESTÃO DIZENDO</h2><p>Leia os depoimentos de quem já tomou a decisão certa.</p><div className="ref-testimonial-grid">
   {[["https://materialseguro.site/wp-content/uploads/2026/07/3-3.webp","Mariana S.","Auxiliar Fiscal","Eu via todo mundo falando de IBS, CBS e transição, mas parecia tudo muito técnico. Com o material visual, consegui entender a lógica da Reforma sem precisar ficar pulando de vídeo em vídeo."],["https://materialseguro.site/wp-content/uploads/2026/07/2-1.png","Lucas R.","Estudante de Ciências Contábeis - UNIVEM","O que mais me ajudou foi ver os assuntos em mapas. Antes eu lia sobre Reforma Tributária e ficava perdido. Agora consigo entender melhor o que muda e como os principais pontos se conectam."],["https://materialseguro.site/wp-content/uploads/2026/07/1-3.webp","Renata M.","Contadora","O material deixou a Reforma muito mais simples de explicar. Gostei principalmente do glossário e da linha do tempo, porque ajudam a visualizar os termos e as etapas sem complicação."]].map(([img,n,role,quote])=><article key={n}><div className="ref-review-head"><img src={img} alt=""/><div><b>{n}</b><small>{role}</small><span>★★★★★</span></div></div><p>{quote}</p></article>)}</div><a className="ref-green-btn" href="#oferta">QUERO MEU ACESSO AGORA</a></section>
  <section className="ref-guarantee"><img src="https://materialseguro.site/wp-content/uploads/2026/06/Selo7dias-1024x683.webp" alt="Garantia de 7 dias"/><div><h2>GARANTIA DE 7 DIAS: O RISCO FICA DO NOSSO LADO</h2><p>Isso significa que, durante esse tempo, se você achar que:</p><ul><li>o material não deixou a Reforma Tributária mais clara para você</li><li>os conteúdos não ajudaram você a entender os principais pontos da Reforma</li><li>ou simplesmente não quiser continuar com o produto</li></ul><p>👉 você pode solicitar o reembolso. Sem burocracia. Sem explicação obrigatória.</p><p>Essa garantia existe porque acreditamos no valor prático do material. Você não está comprando mais um conteúdo solto sobre Reforma Tributária. Está comprando mapas mentais, materiais visuais e conteúdos organizados para facilitar seu entendimento.</p></div></section>
  <section className="ref-steps"><h2>COMO É O ACESSO</h2><small>(PASSO A PASSO)</small><div>{[[ "🛒","Conclua sua compra","Após o pagamento, seu acesso é liberado automaticamente."],["🎉","Entre na área de membros","Você recebe os dados para acessar a área de membros, onde todo o material fica organizado."],["📂","Baixe os arquivos","Dentro do material, você encontra os mapas mentais, glossário visual, checklist e bônus organizados por tema."],["📈","Estude pelo Celular/Tablet ou Imprima","Use os materiais para estudar, revisar, acompanhar mudanças e ganhar mais clareza."]].map(([ic,t,d])=><article key={t}><span>{ic}</span><h3>{t}</h3><p>{d}</p></article>)}</div><a className="ref-green-btn" href="#oferta">QUERO MEU ACESSO AGORA</a></section>
  <section className="ref-faq"><h2>PERGUNTAS<br/>FREQUENTES</h2><div>{faqs.map(([q,a])=><details key={q}><summary>{q}<ChevronDown/></summary><p>{a}</p></details>)}</div></section>
  <footer className="ref-footer"><b>Direitos Reservados</b><p>Este site não é afiliado ao Facebook™, Instagram™, Google™ ou qualquer outra plataforma mencionada. Todos os direitos sobre a obra “Mapa Fácil da Reforma Tributária” são reservados aos seus titulares.</p><p>A reprodução não autorizada desta publicação, no todo ou em parte, por quaisquer meios, constitui violação dos direitos autorais.</p></footer>
  <a className="ref-sticky" href="#oferta">QUERO ACESSAR AGORA <ArrowRight/></a>
 </main>;
}
