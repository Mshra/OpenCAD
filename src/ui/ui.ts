import WebGL from "three/addons/capabilities/WebGL.js";
import menubar from "./menubar/menubar";
import mainWindow from "./mainWindow/mainWindow";

if (WebGL.isWebGL2Available()) {
  document.body.appendChild(menubar);
  document.body.appendChild(mainWindow);
} else {
  const noWebGL2found = WebGL.getWebGL2ErrorMessage();
  document.body.appendChild(noWebGL2found);
}
