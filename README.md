# Creative Studio

crie

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/93eb4102-accd-46b4-8ec9-d0b584bef9a8).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Página de vendas — atualização

Layout baseado na referência Mapa Fácil da Reforma Tributária, com imagens e fonte locais.
Oferta única: produto principal com 64 páginas + 3 bônus (10, 20 e 20 páginas), por R$ 47,00, pagamento único.
Grades adaptativas para celular, tablet e desktop.

### Pagamento

Todos os CTAs da página apontam para `#oferta`. O botão do card de R$ 47,00 abre o checkout Wiven fornecido pelo proprietário, configurado em `src/routes/index.tsx`.

### Rodar e validar

```sh
npm install
npm run dev
npx tsc --noEmit
npm test
npm run build
```

Conteúdo da página: `src/routes/index.tsx`. Estilos: `src/styles.css`. Imagens: `public/assets`.

### Galerias automáticas

As páginas de amostra e as fotos de demonstração usam carrosséis em loop, com avanço a cada 3 segundos. É possível arrastar no celular, navegar pelas setas e pausar. O movimento pausa ao passar o mouse, focar nos controles ou trocar de aba. Respeita a preferência de movimento reduzido do dispositivo.

### Conteúdo da oferta

Produto principal: Mapa Fácil da Reforma Tributária (64 páginas). Bônus 1: Checklist “O Que Entender Primeiro” (10 páginas). Bônus 2: Linha do Tempo Visual da Reforma Tributária (20 páginas). Bônus 3: Os 15 Erros Fiscais que Você Deve Evitar na Reforma Tributária (20 páginas). Total: quatro PDFs e 114 páginas. As imagens em `public/assets/produto` são amostras renderizadas dos PDFs fornecidos pelo proprietário. Os PDFs completos não ficam na pasta pública.

### Pixel UTMify

Pixel `6a7f1e9c8b84f3fcafe0d5dc` carregado no cabeçalho via `https://cdn.utmify.com.br/scripts/pixel/pixel.js`, com proteção contra duplicidade. Código em `src/lib/utmify-pixel.ts`. O recebimento dos eventos deve ser conferido no painel UTMify após publicar a página.

O script de UTMs também é carregado no cabeçalho, via `https://cdn.utmify.com.br/scripts/utms/latest.js`, preservando os atributos `data-utmify-prevent-xcod-sck` e `data-utmify-prevent-subids` do snippet fornecido. Código em `src/lib/utmify-utms.ts`, com proteção contra duplicidade.
