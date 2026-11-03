// Equivalente legível ao script de UTMs enviado pelo proprietário.
export const UTMIFY_UTMS_SCRIPT = `(function () {
  if (document.getElementById("utmify-utms-source")) return;
  var script = document.createElement("script");
  script.id = "utmify-utms-source";
  script.src = "https://cdn.utmify.com.br/scripts/utms/latest.js";
  script.async = true;
  script.defer = true;
  script.setAttribute("data-utmify-prevent-xcod-sck", "");
  script.setAttribute("data-utmify-prevent-subids", "");
  (document.head || document.documentElement).appendChild(script);
})();`;
