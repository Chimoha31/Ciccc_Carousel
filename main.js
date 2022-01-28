"use strict";

const prevBtn = document.querySelector("#prev-button");
const nextBtn = document.querySelector("#next-button");
const imgFrame = document.querySelector(".imageCarousel");
const nav = document.querySelector("nav");
let imgTag = document.querySelector("img");
let currentIndex = 0;

const dots = [];

const images = [
  "./images/avocado.jpeg",
  "./images/pancake.jpeg",
  "./images/sandwich.jpeg",
  "./images/spaghetti.jpeg",
];

nextBtn.addEventListener("click", function () {
  if (currentIndex === images.length - 1) {
    currentIndex = 0;
    imgTag.setAttribute("src", "");
    imgTag.setAttribute("src", images[currentIndex]);
  } else {
    currentIndex++;
    imgTag.setAttribute("src", images[currentIndex]);

    for (let j = 0; j < images.length; j++) {
      currentIndex = j;
      dots.forEach((dot) => {
        dot.classList.remove("current");
      });
      dots[currentIndex].classList.add("current");
    }
  }
});

prevBtn.addEventListener("click", function () {
  console.log(currentIndex);
  if (currentIndex === 0) {
    currentIndex = images.length - 1;
    imgTag.setAttribute("src", images[currentIndex]);
  } else {
    currentIndex--;
    imgTag.setAttribute("src", images[currentIndex]);
  }
});

// dot

for (let i = 0; i < images.length; i++) {
  let btnDot = document.createElement("button");
  btnDot.addEventListener("click", function () {
    currentIndex = i;
    dots.forEach((dot) => {
      dot.classList.remove("current");
    });
    dots[currentIndex].classList.add("current");
    // bottonを押したらそのボタンの順番通りの画像を抽出
    imgTag.setAttribute("src", images[currentIndex]);
  });
  dots.push(btnDot);
  nav.appendChild(btnDot);
  // 最初の画像には(アボカドの画像)最初からdotに色を付与
  dots[0].classList.add("current");
}
