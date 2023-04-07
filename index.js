const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const images = document.querySelector(".slider-images");

let counter = 1; 

nextBtn.addEventListener("click", () => {
if (counter >= images.children.length - 1) return;
counter++;
  images.style.transform = `translateX(-${counter * 33.33}%)`;
});

prevBtn.addEventListener("click", () => {
if (counter <= 0) return;
counter--;
images.style.transform = `translateX(-${counter * 33.33}%)`;
});
