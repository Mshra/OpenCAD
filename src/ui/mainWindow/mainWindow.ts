import resizer from "./resizer/resizer";
import canvas from "./canvas/canvas";
import sidebar from "./sidebar/sidebar";

const mainWindow = document.createElement("div");
mainWindow.setAttribute("id", "main-window");

mainWindow.appendChild(canvas);
mainWindow.appendChild(resizer);
mainWindow.appendChild(sidebar);

export default mainWindow;
