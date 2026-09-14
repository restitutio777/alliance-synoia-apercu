/* Das einzige JavaScript der Seite.

   Es steht bewusst in einer eigenen Datei und nicht im HTML: eine strenge
   Content-Security-Policy (script-src 'self') verbietet Skripte im Markup.
   Wer hier etwas zurück ins HTML schreibt, macht die CSP wirkungslos und
   damit die wichtigste Schutzschicht dieser Seite.

   Die Seite funktioniert ohne dieses Skript vollständig. Es tut zweierlei:
   die Klasse "js" setzen, und das Menü auf schmalen Schirmen umschalten. */

document.documentElement.classList.add("js");

document.addEventListener("DOMContentLoaded", function () {
  var kopf = document.querySelector(".site-header");
  var knopf = kopf && kopf.querySelector(".nav-bascule");
  if (!knopf) return;
  knopf.addEventListener("click", function () {
    var offen = kopf.classList.toggle("est-ouverte");
    knopf.setAttribute("aria-expanded", String(offen));
  });
});
