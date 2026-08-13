console.log("LOGIN MODAL JS LOADED");

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM READY");

    const loginButton = document.getElementById("login-button");
    const signupButton = document.getElementById("signup-button");
    const centerSheet = document.getElementById("centerSheet");

    console.log("login:", loginButton);
    console.log("signup:", signupButton);
    console.log("sheet:", centerSheet);

    if (loginButton && centerSheet) {
        loginButton.addEventListener("click", () => {
            console.log("LOGIN CLICKED");
            centerSheet.classList.toggle("active");
        });
    }

    if (signupButton && centerSheet) {
        signupButton.addEventListener("click", () => {
            console.log("SIGNUP CLICKED");
            centerSheet.classList.toggle("active");
        });
    }
});