document.addEventListener("DOMContentLoaded", () => {
    const loginButton = document.getElementById("login-button");
    const signupButton = document.getElementById("signup-button");
    const centerSheet = document.getElementById("centerSheet");

    if (!centerSheet) return;

    function closeSheet() {
        centerSheet.classList.remove("active");
    }

    function toggleSheet(event) {
        event.preventDefault();
        event.stopPropagation();

        centerSheet.classList.toggle("active");
    }

    loginButton?.addEventListener("click", toggleSheet);
    signupButton?.addEventListener("click", toggleSheet);

    // Start closed
    closeSheet();
});

// Also runs when the browser restores the page using Back/Forward
window.addEventListener("pageshow", () => {
    const centerSheet = document.getElementById("centerSheet");

    if (centerSheet) {
        centerSheet.classList.remove("active");
    }
});