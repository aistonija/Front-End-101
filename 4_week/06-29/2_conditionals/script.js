"use strict";

// Conditions
/*
Sukurk variable 'legalAge', kuris būtų lygus 20. Antra variable 'clientAge' su bet kokiu skaičiumi. Pasirašyk if-else, kuris alert išmestų ar klientas jau pasiekęs šį legalAge, ar dar ne.
*/

let legalAge = 20;
let clientAge = Number(prompt("Iveskite amziu"));

if (clientAge >= legalAge) {
  console.log("Ileidziam, pakankamai suauges");
} else {
  console.log("NEileidziam, per jaunas");
}

let result =
  clientAge >= legalAge
    ? "Ileidziam, pakankamai suauges"
    : "NEileidziam, per jaunas";
console.log(result);
