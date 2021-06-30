"use strict";

// elements
const flexContainer = document.querySelector(".flex-container");
const flexItems = document.querySelectorAll(".flex-item");

// events
// Kuomet pele uzvedama ant elemento, uzdedame outline (event)
flexContainer.addEventListener("mouseenter", function () {
  flexContainer.style.outline = "6px solid hotpink";
});

// // Kuomet pele patraukiama nuo elemento, outline nuimame
flexContainer.addEventListener("mouseleave", removeOutline);

// Sukame cikla per visus flex-items, kad galetume identifikuoti, kiekviena atskirai

for (let i = 0; i < flexItems.length; i++) {
  let square = flexItems[i];
  //   console.log(i, square);

  square.addEventListener("mouseenter", function () {
    square.style.outline = "4px solid orange";
  });

  square.addEventListener("mouseleave", function () {
    square.style.outline = "none";
  });

  square.addEventListener("click", function () {
    square.style.backgroundColor = `rgb(${randomInt()}, ${randomInt()}, ${randomInt()})`;
    // pamastyti/pasirasyti if salyga, kad:
    // paspaudus peles klavisa spalva uzsideda, arba nusiima.
  });
}

// functions
function removeOutline() {
  flexContainer.style.outline = "none";
}

// helper function
// background-color: rgb(15,85,0)
function randomInt() {
  return Math.floor(Math.random() * 256);
}
