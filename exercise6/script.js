let boxes = document.querySelectorAll(".box");

let palette = ["#DDFFF7", "#93E1D8", "#FFA69E", "#AA4465", "#861657"];

let randomColor = Math.floor(Math.random() * palette.length);

for (box of boxes) {
  box.style.backgroundColor = palette[Math.floor(Math.random() * palette.length)];
}
  