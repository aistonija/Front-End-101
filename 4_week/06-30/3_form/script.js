"use strict";

const form = document.querySelector("form");

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

  console.log(firstName, age, imageUrl, gender, relationship, aboutMe);
}
