"use strict";

const form = document.querySelector("form");
const cardContainer = document.querySelector(".card-container");

form.addEventListener("submit", retrieveData);

function retrieveData(event) {
  event.preventDefault();
  // susirinkti informacija is inputu,
  // per event.target.elements.name.value
  // issaugoti kintamuosiuose
  const firstName = event.target.elements.firstName.value;
  const age = event.target.elements.age.value;
  const imageUrl = event.target.elements.imageUrl.value;
  const gender = event.target.elements.gender.value;
  const relationship = event.target.elements.relationship.value;
  const aboutMe = event.target.elements.aboutMe.value;

  const printCard = function () {
    // sitas budas naudojamas kuomet turime HTML elementa
    document.querySelector(".firstname").textContent = `Name: ${firstName}`;

    // sitas budas sukurs naujus elementus, ir juos prides i cardContainer
    const printAge = document.createElement("h3");
    printAge.textContent = `Age: ${age}`;

    const printImg = document.createElement("img");
    printImg.src = imageUrl;

    const printGenter = document.createElement("h3");
    printGenter.textContent = gender;

    const printRel = document.createElement("h3");
    printRel.textContent = switchResult(Number(relationship));

    const printText = document.createElement("p");
    printText.textContent = aboutMe;

    cardContainer.append(printAge, printImg, printGenter, printRel, printText);
  };

  printCard();
}

// helper function for options

function switchResult(options) {
  let option = "";

  switch (options) {
    case 1:
      option = "Single and ready to mingle";
      break;
    case 2:
      option = "Happily Married";
      break;
    case 3:
      option = "None of your business";
      break;
    default:
      option = "None of these options was chosen";
  }

  return option;
}
