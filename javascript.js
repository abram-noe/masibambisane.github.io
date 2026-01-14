// ===== Select Elements =====
const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
const overlay = document.querySelector(".overlay");
const links = document.querySelectorAll(".menu a");

// ===== Functions =====
function closeMenu() {
    menu.classList.remove("active");
    toggle.classList.remove("active");
    overlay.classList.remove("active");
}

function toggleMenu() {
    menu.classList.toggle("active");
    toggle.classList.toggle("active");
    overlay.classList.toggle("active");
}

// ===== Event Listeners =====
// Toggle menu on hamburger click
toggle.addEventListener("click", toggleMenu);

// Close menu on overlay click
overlay.addEventListener("click", closeMenu);

// Close menu when a menu link is clicked
links.forEach(link => link.addEventListener("click", closeMenu));

// Highlight current page link automatically
links.forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add("active");
    }
});
