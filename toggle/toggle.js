let btn = document.querySelector(".btn");
let mode = "light";
let b = document.querySelector("body");
btn.addEventListener("click", () => {
  if (mode === "light") {
    b.style.backgroundColor = "black";
    mode = "dark";
  } else {
    b.style.backgroundColor = "white";
    mode = "light";
  }
});
