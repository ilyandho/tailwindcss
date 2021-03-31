const burger = document.querySelector(".burger");
const cross = document.querySelector(".cross");
const nav = document.querySelector("nav");

burger.addEventListener("click", () => {
  nav.classList.remove("hidden");
  burger.classList.add("hidden");
  cross.classList.remove("hidden");
});

cross.addEventListener("click", () => {
  nav.classList.add("hidden");
  burger.classList.remove("hidden");
  cross.classList.add("hidden");
});
