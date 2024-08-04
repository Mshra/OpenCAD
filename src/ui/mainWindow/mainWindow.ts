import resizer from "./resizer/resizer";
import canvas from "./canvas/canvas";
import propertiesPane from "./properties/properties";

const mainWindow = document.createElement("div");
mainWindow.setAttribute("id", "main-window");

mainWindow.appendChild(canvas);
mainWindow.appendChild(resizer);
mainWindow.appendChild(propertiesPane);

export default mainWindow;
