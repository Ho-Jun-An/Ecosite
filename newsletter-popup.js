const popupOpen = document.querySelector("#article-panel-newsletter");
const popupClose = document.querySelector("#newsletter-popup-close-button");
const popupContainer = document.querySelector("#newsletter-popup-container");

popupOpen.addEventListener("click", popup);
popupClose.addEventListener("click", popup);

function popup() {
    popupContainer.classList.toggle("active");
}