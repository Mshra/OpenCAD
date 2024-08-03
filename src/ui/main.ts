import WebGL from "three/addons/capabilities/WebGL.js";

if (WebGL.isWebGL2Available()) {
  const menubar = document.createElement("div");
  menubar.setAttribute("id", "menubar");
  document.body.appendChild(menubar);

  menubar.onmouseover = () => {
    menubar.style.cursor = "default";
  };

  const file = document.createElement("div");
  file.textContent = "File";
  menubar.appendChild(file);

  const edit = document.createElement("div");
  edit.textContent = "Edit";
  menubar.appendChild(edit);

  const add = document.createElement("div");
  add.textContent = "Add";
  menubar.appendChild(add);

  /** ------------------------------------- */
  const mainWindow = document.createElement("div");
  mainWindow.setAttribute("id", "main-window");
  document.body.appendChild(mainWindow);

  /** ------------------------------------- */
  const canvas = document.createElement("canvas");
  canvas.setAttribute("id", "c");
  mainWindow.appendChild(canvas);

  /** ------------------------------------- */
  const resizer = document.createElement("div");
  resizer.setAttribute("id", "resizer");
  mainWindow.appendChild(resizer);

  /** ------------------------------------- */
  const propertiesPane = document.createElement("div");
  propertiesPane.setAttribute("id", "properties");
  mainWindow.appendChild(propertiesPane);

  /** */
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

  /** add functionality */
  // add.onmouseenter = () => {
  //   const listOfMesh = document.createElement("div");
  //   const listofMeshStyles = `

  //   `;
  //   add.appendChild(listOfMesh);

  //   const cube = document.createElement("li");
  // };

  add.onmouseleave = () => {
    console.log("pointer removed");
  };
} else {
  const noWebGL2found = WebGL.getWebGL2ErrorMessage();
  document.body.appendChild(noWebGL2found);
}
