/* Das einzige JavaScript der Seite.

   Es steht bewusst in einer eigenen Datei und nicht im HTML: eine strenge
   Content-Security-Policy (script-src 'self') verbietet Skripte im Markup.
   Wer hier etwas zurück ins HTML schreibt, macht die CSP wirkungslos und
   damit die wichtigste Schutzschicht dieser Seite.

   Die Seite funktioniert ohne dieses Skript vollständig. Es tut dreierlei:
   die Klasse "js" setzen, das Menü auf schmalen Schirmen umschalten, und
   den Formularen einen Zeitstempel mitgeben. */

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

/* Zeitstempel für die Spamabwehr. Ein Skript füllt ein Formular in
   Millisekunden aus; ein Mensch braucht länger. envoi.php verwirft, was in
   unter drei Sekunden zurückkommt.

   Der Wert wird hier gesetzt und nicht ins HTML geschrieben, weil die
   Seiten statisch sind: ein im Markup stehender Zeitstempel wäre der
   Zeitpunkt des letzten Builds, nicht der des Seitenaufrufs.

   Ohne JavaScript bleibt das Feld leer. Dann überspringt envoi.php die
   Prüfung — der Honigtopf und die Obergrenze je IP greifen weiterhin. */
document.addEventListener("DOMContentLoaded", function () {
  var felder = document.querySelectorAll('.formulaire input[name="jeton"]');
  for (var i = 0; i < felder.length; i++) {
    felder[i].value = String(Date.now());
  }
});
