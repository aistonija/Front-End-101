"use strict";

// Functions

// function declaration
function logger() {
  console.log("Labas rytas");
}

logger();

function greeting(firstName) {
  return `Laba diena, ${firstName}`;
}
console.log(greeting("Lukas"));

let greetName = greeting("Aiste");
console.log(greetName);

// function expression
let greetLastName = function (lastName) {
  return `Laba diena, ${lastName}`;
};

console.log(greetLastName("Meskauskas"));

// arrow functions

let greet = () => console.log("Sveiki gyvi");

greet();

let greeting2 = (fname) => `labas, ${fname} yra krabas`;

console.log(greeting2("Aiste"));

let numbers = [65, 44, 12, 4];

// 1 option
numbers.forEach(myFunction);

function myFunction(item, index, arr) {
  arr[index] = item * 10;
}

// 2 option
numbers.forEach((element, index, array) => (array[index] = element * 10));

/*
parasyti funkcija, kuriai padavus gimimo metus ir dabartinius metus, bus apskaiciuojami metai like iki pensijos (tebunie - pensija prasideda 65 metu), jeigu zmogus jau pensijoje, tai ir turime pranesti, kad jau pensijoje. 
*/

function yearsUntilRetirement(birthYear, currentYear) {
  let personAge = currentYear - birthYear;
  let yearsUntilRetired = 65 - personAge;

  return yearsUntilRetired > 0
    ? `${yearsUntilRetired} years left`
    : "already retired";
}

console.log(yearsUntilRetirement(1991, 2037));
