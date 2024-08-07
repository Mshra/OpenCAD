import file from "./file/file";
import edit from "./edit/edit";
import add from "./add/add";

const menubar = document.createElement("div");

menubar.className =
  "w-full h-[32px] flex items-center text-[#838383] bg-[#0a0a0a] gap-8 cursor-default";

menubar.appendChild(file);
menubar.appendChild(edit);
menubar.appendChild(add);

export default menubar;
