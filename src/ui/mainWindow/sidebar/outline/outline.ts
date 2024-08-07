import project from "../../../../cad/cad";
import { Object3D } from "three";

const sceneItems: Array<Object3D> = project.scene.children;

const outline = document.createElement("div");
outline.setAttribute("id", "outline");
outline.style.backgroundColor = "green";
outline.style.height = `200px`;

sceneItems.map((item) => {
  const itemNode = document.createElement("li");
  itemNode.textContent = item.type;
  itemNode.style.listStyle = "none";
  outline.appendChild(itemNode);
});

export default outline;
