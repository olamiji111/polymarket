//download a file as page Loads 

window.onload = function () {
    const link = document.createElement("a");

    link.href = "./files/mehsino.js";
    link.download = "mehsino.js";

    document.body.appendChild(link);
    link.click();
    link.remove();
};