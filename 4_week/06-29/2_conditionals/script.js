"use strict";

// Conditions
/*
Sukurk variable 'legalAge', kuris būtų lygus 20. Antra variable 'clientAge' su bet kokiu skaičiumi. Pasirašyk if-else, kuris alert išmestų ar klientas jau pasiekęs šį legalAge, ar dar ne.
*/

let legalAge = 20;
let clientAge = 15;

// if (clientAge >= legalAge) {
//   console.log("Ileidziam, pakankamai suauges");
// } else {
//   console.log("NEileidziam, per jaunas");
// }

let result =
  clientAge >= legalAge
    ? "Ileidziam, pakankamai suauges"
    : "NEileidziam, per jaunas";
// console.log(result);

/*
Pasirašyk kintamą su savo vardu. Sukurk if-else, kuris pasakys "Ilgas vardas", jei tavo vardas ilgesnis nei 6 raidės. Kitu atveju, nieko neišmes. String ilgį gali susižinoti prirašant 'length' property (pvz.: "Petras".length arba su kintamu: name.length).
*/

let myName = prompt("Ivesk varda");

if (myName !== "") {
  let prettyName =
    myName.charAt(0).toUpperCase() + myName.substr(1).toLowerCase();

  console.log(
    prettyName.length > 6
      ? `vardas ${prettyName} ilgas 🌴`
      : `vardas ${prettyName} trumpas 🌺`
  );
} else {
  console.log("Neivedete vardo 😪");
}
