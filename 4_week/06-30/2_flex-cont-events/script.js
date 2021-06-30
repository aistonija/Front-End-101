"use strict";

// elements
const flexContainer = document.querySelector(".flex-container");

// events
// Kuomet pele uzvedama ant elemento, uzdedame outline (event)
flexContainer.addEventListener("mouseenter", addOutline);

// Kuomet pele patraukiama nuo elemento, outline nuimame
flexContainer.addEventListener("mouseleave", removeOutline);

// functions
function addOutline() {
  flexContainer.style.outline = "6px solid hotpink";
}

function removeOutline() {
  flexContainer.style.outline = "none";
}
