document.addEventListener("DOMContentLoaded", () => {
    const loginButton = document.getElementById("login-button");
    const signupButton = document.getElementById("signup-button");
    const centerSheet = document.getElementById("centerSheet");

    if (!centerSheet) {
        console.error("centerSheet not found");
        return;
    }

    if (loginButton) {
        loginButton.addEventListener("click", () => {
            centerSheet.classList.toggle("active");
        });
    }

    if (signupButton) {
        signupButton.addEventListener("click", () => {
            centerSheet.classList.toggle("active");
        });
    }
});