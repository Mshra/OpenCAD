import "./ui/ui";
import "./solace/cad";

export default function canvas(): HTMLCanvasElement | null {
  return document.querySelector("#c");
}
