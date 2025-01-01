const next_btn = document.querySelector(".next-icon");
const prev_btn = document.querySelector(".prev-icon");
const anchors = document.querySelectorAll(".slider a");
const arr = [
  "HTML",
  "CSS",
  "JAVASCRIPT",
  "SQL",
  "PYTHON",
  "JAVA",
  "PHP",
  "HOW TO",
  "W3.CSS",
  "C",
  "C++",
  "C#",
  "BOOTSTRAP",
  "REACT",
  "MYSQL",
  "JQUERY",
  "EXCEL",
  "XML",
  "DJANGO",
  "NUMPY",
  "PANDAS",
  "NODEJS",
];

anchors.forEach((anchor, index) => {
  anchor.textContent = arr[index];
  anchor.href = `https://www.w3schools.com/${arr[
    index
  ].toLowerCase()}/default.asp`;
});

function slideNext() {
  const firstItem = arr.shift();
  arr.push(firstItem);

  anchors.forEach((anchor, index) => {
    anchor.textContent = arr[index];
  });
}

function slidePrev() {
  const lastItem = arr.pop();
  arr.unshift(lastItem);

  anchors.forEach((anchor, index) => {
    anchor.textContent = arr[index];
  });
}

next_btn.addEventListener("click", slideNext);
prev_btn.addEventListener("click", slidePrev);

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
