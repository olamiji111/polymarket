document.addEventListener("DOMContentLoaded", () => {
    const loginButton = document.getElementById("login-button");
    const signupButton = document.getElementById("signup-button");
    const centerSheet = document.getElementById("centerSheet");

    function handleSheet(event) {
        event.preventDefault();
        event.stopPropagation();

        if (centerSheet.classList.contains("active")) {
            // Sheet is open → close it
            centerSheet.classList.remove("active");
        } else {
            // Sheet is closed → open it
            centerSheet.classList.add("active");
        }
    }

    if (loginButton) {
        loginButton.addEventListener("click", handleSheet);
    }

    if (signupButton) {
        signupButton.addEventListener("click", handleSheet);
    }
});