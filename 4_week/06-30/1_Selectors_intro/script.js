"use strict";

document.getElementById("main-title").classList.add("red");
document.getElementById("main-title").classList.remove("red");

document.querySelector("p").setAttribute("id", "unique-paragraph");

const images = document.querySelectorAll("img");
images[0].src =
  "https://images-na.ssl-images-amazon.com/images/I/81LyLwhZeBL.png";
images[0].style.width = "100px";
