import file from "./file/file";
import edit from "./edit/edit";
import add from "./add/add";

const menubar = document.createElement("div");
menubar.setAttribute("id", "menubar");

menubar.appendChild(file);
menubar.appendChild(edit);
menubar.appendChild(add);

export default menubar;
