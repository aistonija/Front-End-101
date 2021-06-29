"use strict";

// FOR LOOP
let numbers = [1, 5, 1, 12, 23];
let string = "labas";

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// loop through array
for (let i = 0; i < numbers.length; i++) {
  console.log(`Cycle Number: ${i}, and value is: ${numbers[i]}`);
}

// loop through string
for (let i = 0; i < string.length; i++) {
  console.log(`Cycle Number: ${i}, and value is: ${string[i]}`);
}

/*
Parašyti for ciklą, kuris suksis 20 kartų, ir išlogins lyginius skaičius :) 
*/

let arrayOfBooleans = [true, false, false, false, true, false];

/*
prasukti for ciklą per masyvą, ir pakeisti į atvirkštines reikšmes. 

prasukus ciklą išloginti originalų masyvą - jo reikšmės turi būti pasikeitusios į priešingas. 
*/

console.log(arrayOfBooleans);

for (let i = 0; i < arrayOfBooleans.length; i++) {
  // console.log(
  //   `Original value: ${arrayOfBooleans[i]}; opposite value: ${!arrayOfBooleans[
  //     i
  //   ]}`
  // );

  arrayOfBooleans[i] = !arrayOfBooleans[i];
}

console.log(arrayOfBooleans);
