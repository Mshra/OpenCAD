import canvas from "../canvas/canvas";
const resizer = document.createElement("div");
resizer.setAttribute("id", "resizer");

let isdragging = false;
function resize(e: MouseEvent) {
  if (isdragging) {
    canvas.style.width = `${e.clientX}px`;
  }
}
resizer.onmousedown = () => {
  isdragging = true;
  document.body.style.cursor = "col-resize";
};
document.body.addEventListener("mousemove", resize);
document.body.onmouseup = () => {
  isdragging = false;
  document.body.style.cursor = "default";
};

export default resizer;
