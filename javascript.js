const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
const overlay = document.querySelector(".overlay");
const links = document.querySelectorAll(".menu a");
function closeMenu() {
    menu.classList.remove("active");
    toggle.classList.remove("active");
    overlay.classList.remove("active");
}
// Toggle menu + overlay
toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
    toggle.classList.toggle("active");
    overlay.classList.toggle("active");
});
// Close menu on link click
links.forEach(link => {
    link.addEventListener("click", closeMenu);
});
// Close menu on overlay click
overlay.addEventListener("click", closeMenu);