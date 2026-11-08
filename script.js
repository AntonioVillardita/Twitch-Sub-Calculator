const prime = document.getElementById("prime");
const tier1 = document.getElementById("tier1");
const tier2 = document.getElementById("tier2");
const tier3 = document.getElementById("tier3");

const partner = document.getElementById("partner");

const btnCalcola = document.getElementById("btnCalcola");

const risultato = document.getElementById("risultato");

btnCalcola.addEventListener("click", () => {
  const newPrime = Number(prime.value) * 4.4;
  const newTier1 = Number(tier1.value) * 5;
  const newTier2 = Number(tier2.value) * 10;
  const newTier3 = Number(tier3.value) * 25;

  const percentuale = Number(partner.value);

  const totSomma = newPrime + newTier1 + newTier2 + newTier3;

  const valoreFormattato = (totSomma * percentuale).toLocaleString("it-IT", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  risultato.textContent = "€ " + valoreFormattato;
});
