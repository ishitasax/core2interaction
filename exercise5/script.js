let boxes = document.querySelectorAll(".box");

let palette = ["#F9DBBD", "#FCA17D", "#DA627D", "#9A348E", "#2274A5"];

let randomColor = Math.floor(Math.random() * palette.length);

for (box of boxes) {
  box.style.backgroundColor = palette[Math.floor(Math.random() * palette.length)];
}