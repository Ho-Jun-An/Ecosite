const hamburgerButton = document.querySelector(".hamburger-button-icon");
const hamburgerMenu = document.querySelector(".hamburger-menu");

hamburger.addEventListener("click", menu);

function menu() {
    hamburgerButton.classList.toggle("active");
    hamburgerMenu.classList.toggle("active");
}