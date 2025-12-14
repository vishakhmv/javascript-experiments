let b = document.getElementsByTagName("body")[0];

let btn = document.createElement("button");
btn.innerText = "click me!";
btn.style.backgroundColor = "red";
btn.style.color = "white";
b.prepend(btn);
