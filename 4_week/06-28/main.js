"use strict";

// console.log("Hi World");
// console.log("Hi World");

// Single Line Comments

/*
Multi-line comments
Multi-line comments
Multi-line comments
 */

// Variables - kintamieji

// var - senas būdas kintamajam kurti. Globalus.
// let - paprastas kintamasis, kurio tiesioginė reikšmė gali kisti, gali būti perrašyta.
// const - veikia kaip konstanta - tiesiogine reiksme negali buti perrasyta.

// let firstName = "Aiste",
//   lastName = "",
//   age = 60,
//   gender = "woman";

// firstName = "Kotryna";
// // console.log(firstName, lastName, age, gender);

// const birthYear = 1991;

// const person = {
//   height: 170,
//   eyesColor: "blue",
// };

// // console.log(person);
// // console.log(person.eyesColor);

// person.hairColor = "brown";
// // console.log(person);

// // DATA TYPES - duomenų tipai
// // Number

// let num = -12;
// // console.log(num);
// // console.log(typeof num);

// let numToString = num.toString();
// // console.log(numToString);
// // console.log(typeof numToString);

// // let ageInput = Number(prompt("Enter your age"));
// // console.log(ageInput, typeof ageInput);

// // STRING - tekstinė reikšmė

// let string = '"John\'s life"';
// let book = "This book+name is:";

// let phrase = book + " " + string + " and I love it";
// console.log(phrase);
// console.log("this phrase length is:", phrase.length);

// let betterPhrase = `${book} ${string} and I love it`;
// let book2 = `Life of PI`;
// console.log(betterPhrase);

// let newString = string.replace("John's", "Mark's");
// console.log(newString);

// console.log(book.charAt(12));
// let bookArray = book.split("");
// console.log(bookArray);

// // Boolean - loginis duomenų tipas

// let isGreater = 4 < 1;
// let isTrue;

// console.log(isGreater);

// if (isTrue) {
//   console.log("sitas simbolis yra true");
// } else {
//   console.log("sitas simbolis yra false");
// }

// // Null - It’s just a special value which represents “nothing”, “empty” or “value unknown”.

// // Undefined

// console.log(isTrue);

// // Object - savybių ir metodų rinkinys, naudojamas “key: value” poromis.

// const house = {
//   windowsCount: 6,
//   doorsCount: 8,
//   roomsCount: 5,
//   address: "Taikos g. 263C",
//   isOnSale: false,
//   familyMembers: ["Aiste", "Lexa", "Aurimas", "Tachalla"],
// };

// console.log(house.address.toUpperCase());

// house.builtYear = 1980;

// console.log(house);

// house.roomsCount = house.roomsCount - 1;
// house.roomsCount -= 1;

// Array - masyvas, reikšmių sąrašas

// const listOfThings = ["Cup of Coffee", "Laptop", true, false, 1, -50];

// console.log(listOfThings);

const listOfNames = ["Rimante", "Giedrius", "Jonas", "Lidija", "Andrius"];

console.log(listOfNames);
// console.log(listOfNames.join(", "));

// pop - removes last element from an array and returns it
listOfNames.pop();

console.log(listOfNames);

// push - add new item to the end of an array

listOfNames.push("Audrone");
console.log(listOfNames);

// shift - removes first element from an array and returns it

listOfNames.shift();
console.log(listOfNames);

// unshift - add new item to the beginning of an array

listOfNames.unshift("Martynas");
console.log(listOfNames);

listOfNames[4] = "Emilija";
console.log(listOfNames);

console.log(listOfNames.indexOf("Aiste"));
