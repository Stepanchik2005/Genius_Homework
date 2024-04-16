const modal = document.querySelector(".backdrop");
const modalBtnOpen = document.querySelector(".model-btn-open");
const modalBtnClose = document.querySelector(".model-btn-close");

const toggleModal = () => modal.classList.toggle("backdrop__is-hidden");

modalBtnOpen.addEventListener("click", toggleModal);
modalBtnClose.addEventListener("click", toggleModal);
