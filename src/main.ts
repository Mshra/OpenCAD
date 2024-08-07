import "./ui/ui";
import "./cad/cad";

export default function canvas(): HTMLCanvasElement | null {
  return document.querySelector("#c");
}
