const loginButton = document.getElementById("login-button");
const signupButton = document.getElementById("signup-button");
const centerSheet = document.getElementById("centerSheet");

loginButton.addEventListener("click", () => {
    centerSheet.classList.toggle("active");
});

signupButton.addEventListener("click", () => {
    centerSheet.classList.toggle("active");
});