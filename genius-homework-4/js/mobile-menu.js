const mobileMenu = document.querySelector(".mobile-menu");
const mobileBtnOpen = document.querySelector(".menu-btn-open");
const mobileBtnClose = document.querySelector(".menu-btn-close");

const toggleMenu = () => mobileMenu.classList.toggle("mobile-menu__is-open");

mobileBtnOpen.addEventListener("click", toggleMenu);
mobileBtnClose.addEventListener("click", toggleMenu);
