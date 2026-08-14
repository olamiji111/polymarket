document.addEventListener("DOMContentLoaded", () => {
    const loginButton = document.getElementById("login-button");
    const signupButton = document.getElementById("signup-button");
    const centerSheet = document.getElementById("centerSheet");

    if (loginButton && centerSheet) {
        loginButton.addEventListener("click", (event) => {
            event.preventDefault();
            event.stopPropagation();

            centerSheet.classList.add("active");
        });
    }

    if (signupButton && centerSheet) {
        signupButton.addEventListener("click", (event) => {
            event.preventDefault();
            event.stopPropagation();

            centerSheet.classList.add("active");
        });
    }
});