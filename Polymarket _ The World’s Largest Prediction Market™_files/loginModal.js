function closeSheet() {
    const centerSheet = document.getElementById("centerSheet");

    if (centerSheet) {
        centerSheet.classList.remove("active");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const loginButton = document.getElementById("login-button");
    const signupButton = document.getElementById("signup-button");
    const centerSheet = document.getElementById("centerSheet");

    if (!centerSheet) return;

    closeSheet();

    function toggleSheet(event) {
        event.preventDefault();
        event.stopPropagation();

        centerSheet.classList.toggle("active");
    }

    loginButton?.addEventListener("click", toggleSheet);
    signupButton?.addEventListener("click", toggleSheet);
});

window.addEventListener("pageshow", closeSheet);