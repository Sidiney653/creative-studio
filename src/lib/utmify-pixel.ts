// Equivalente legível ao snippet UTMify fornecido pelo proprietário.
// O identificador do pixel é público; nenhuma credencial é armazenada aqui.
export const UTMIFY_PIXEL_SCRIPT = `(function () {
  if (document.getElementById("utmify-pixel-source")) return;
  window.pixelId = "6a7f1e9c8b84f3fcafe0d5dc";
  var script = document.createElement("script");
  script.id = "utmify-pixel-source";
  script.src = "https://cdn.utmify.com.br/scripts/pixel/pixel.js";
  script.async = true;
  script.defer = true;
  (document.head || document.documentElement).appendChild(script);
})();`;
