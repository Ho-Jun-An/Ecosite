const hamburgerButton = document.querySelector(".hamburger-button");
const hamburgerMenu = document.querySelector(".hamburger-menu");

hamburgerButton.addEventListener("click", menu);

function menu() {
    hamburgerButton.classList.toggle("active");
    hamburgerMenu.classList.toggle("active");
}