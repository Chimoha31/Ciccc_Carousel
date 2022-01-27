"use strict";

const prevBtn = document.querySelector("#prev-button");
const nextBtn = document.querySelector("#next-button");
const imgFrame = document.querySelector(".imageCarousel");
let imgTag = document.querySelector("img");

let currentIndex = 0;

const images = [
  "./images/avocado.jpeg",
  "./images/pancake.jpeg",
  "./images/sandwich.jpeg",
  "./images/spaghetti.jpeg",
];

nextBtn.addEventListener("click", function () {
  // console.log(currentIndex);
  if (currentIndex === images.length - 1) {
    currentIndex = 0;
    imgTag.setAttribute("src", "");
    imgTag.setAttribute("src", images[currentIndex]);
  } else {
    currentIndex++;
    imgTag.setAttribute("src", images[currentIndex]);
  }
});


prevBtn.addEventListener("click", function () {
  console.log(currentIndex);
  if(currentIndex === 0) {
    currentIndex = images.length - 1;
    imgTag.setAttribute('src', images[currentIndex]);
  }else {
    currentIndex--;
    imgTag.setAttribute("src", images[currentIndex]);
  }
});

