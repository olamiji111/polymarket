console.log("MODAL SCRIPT LOADED");

document.addEventListener("click", function (event) {

    const loginButton = event.target.closest("#login-button");
    const signupButton = event.target.closest("#signup-button");

    if (!loginButton && !signupButton) {
        return;
    }

    event.preventDefault();
    event.stopPropagation();

    const centerSheet = document.getElementById("centerSheet");

    if (!centerSheet) {
        console.error("centerSheet NOT FOUND");
        return;
    }

    const isOpen = centerSheet.classList.contains("active");

    if (isOpen) {
        centerSheet.classList.remove("active");
        console.log("SHEET CLOSED");
    } else {
        centerSheet.classList.add("active");
        console.log("SHEET OPENED");
    }
}, true);