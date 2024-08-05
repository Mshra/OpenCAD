const canvas = document.createElement("canvas");
canvas.setAttribute("id", "c");

// initialize the width of canvas as 70% of the client width.
canvas.style.width = `${0.7 * document.body.clientWidth}px`;
canvas.style.maxWidth = `${0.85 * document.body.clientWidth}px`;

export default canvas;
