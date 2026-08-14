document.addEventListener("DOMContentLoaded", () => {
    const loginButton = document.getElementById("login-button");
    const signupButton = document.getElementById("signup-button");
    const centerSheet = document.getElementById("centerSheet");

    function toggleSheet(event) {
        event.preventDefault();
        event.stopPropagation();

        if (centerSheet.classList.contains("active")) {
            centerSheet.classList.remove("active");
        } else {
            centerSheet.classList.add("active");
        }
    }

    if (loginButton && centerSheet) {
        loginButton.addEventListener("click", toggleSheet);
    }

    if (signupButton && centerSheet) {
        signupButton.addEventListener("click", toggleSheet);
    }
});