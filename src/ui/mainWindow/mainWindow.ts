import resizer from "./resizer/resizer";
import canvas from "./canvas/canvas";
import sidebar from "./sidebar/sidebar";

const mainWindow = document.createElement("div");
mainWindow.className = "h-full grid grid-cols-[auto_0.2%_1fr]";
mainWindow.setAttribute("id", "main-window");

mainWindow.appendChild(canvas);
mainWindow.appendChild(resizer);
mainWindow.appendChild(sidebar);

export default mainWindow;
