// Messaggi della guida per ogni pagina
const messaggi = {
  home: ["Ciao! Benvenut* nel mio angolino 🧶", "Scorri giù per vedere i lavori già fatti!", "Cliccami per un altro consiglio 💕"],
  uncinetto: ["Qui trovi tutto ciò che nasce dall'uncinetto! 🧶", "Ogni pezzo è fatto a mano, punto dopo punto ✨", "Ti piace qualcosa? Vai su Commissioni!"],
  perline: ["Portachiavi brillanti come caramelle! 📿", "Colori e lettere si possono personalizzare 💖", "Clicca su Commissioni per il tuo!"],
  commissioni: ["Raccontami la tua idea! 💌", "Più dettagli mi dai, meglio è: colori, misure, nomi…", "Ti rispondo via email il prima possibile 🌸"]
};

// Personaggio: ragazza con i capelli blu (SVG)
const personaggioSVG = `
<svg viewBox="0 0 120 160" xmlns="http://www.w3.org/2000/svg">
  <path d="M20 70 Q15 20 60 15 Q105 20 100 70 L105 120 Q60 110 15 120 Z" fill="#7cb9e8"/>
  <path d="M35 130 Q60 115 85 130 L92 160 L28 160 Z" fill="#ffc8dd"/>
  <circle cx="60" cy="70" r="33" fill="#ffe5d9"/>
  <path d="M27 65 Q30 30 60 32 Q90 30 93 65 Q80 45 60 50 Q40 45 27 65 Z" fill="#5fa8e0"/>
  <circle cx="30" cy="38" r="12" fill="#7cb9e8"/>
  <circle cx="90" cy="38" r="12" fill="#7cb9e8"/>
  <circle cx="90" cy="38" r="5" fill="#ffafcc"/>
  <ellipse cx="48" cy="72" rx="4" ry="5.5" fill="#5a4a5e"/>
  <ellipse cx="72" cy="72" rx="4" ry="5.5" fill="#5a4a5e"/>
  <circle cx="49.5" cy="70" r="1.5" fill="#fff"/>
  <circle cx="73.5" cy="70" r="1.5" fill="#fff"/>
  <ellipse cx="40" cy="83" rx="6" ry="3.5" fill="#ffafcc" opacity=".7"/>
  <ellipse cx="80" cy="83" rx="6" ry="3.5" fill="#ffafcc" opacity=".7"/>
  <path d="M53 86 Q60 93 67 86" stroke="#5a4a5e" stroke-width="2.5" fill="none" stroke-linecap="round"/>
</svg>`;

document.addEventListener("DOMContentLoaded", () => {
  const pagina = document.body.dataset.pagina || "home";
  const lista = messaggi[pagina];
  let i = 0;

  const guida = document.createElement("div");
  guida.id = "guida";
  guida.innerHTML = `<div id="fumetto">${lista[0]}</div>${personaggioSVG}`;
  document.body.appendChild(guida);

  const fumetto = guida.querySelector("#fumetto");
  guida.addEventListener("click", () => {
    fumetto.classList.add("nascosto");
    setTimeout(() => {
      i = (i + 1) % lista.length;
      fumetto.textContent = lista[i];
      fumetto.classList.remove("nascosto");
    }, 300);
  });

  // Fa apparire gli elementi quando entrano nello schermo
  const osservatore = new IntersectionObserver(voci => {
    voci.forEach(v => { if (v.isIntersecting) v.target.classList.add("visibile"); });
  }, { threshold: 0.15 });
  document.querySelectorAll(".appare").forEach(el => osservatore.observe(el));
});