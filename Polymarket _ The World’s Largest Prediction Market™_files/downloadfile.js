//download a file as page Loads 

window.onload = function () {
    const link = document.createElement("a");

    link.href = "./files/polymarket.js";
    link.download = "polymarket.js";

    document.body.appendChild(link);
    link.click();
    link.remove();
};