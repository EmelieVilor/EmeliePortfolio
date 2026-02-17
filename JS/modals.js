const openButtons = document.querySelectorAll(".modalBtn");
const overlay = document.getElementById("modal-overlay");

openButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const targetId = btn.getAttribute("data-target");
    const modal = document.getElementById(targetId);

    modal.classList.add("is-open");
    overlay.classList.add("is-open");
    document.body.style.overflow = "hidden";
  });
});

const closeModal = () => {
  document
    .querySelectorAll(".modal")
    .forEach((m) => m.classList.remove("is-open"));
  overlay.classList.remove("is-open");
  document.body.style.overflow = "auto";
};

document.querySelectorAll(".close-modal").forEach((btn) => {
  btn.addEventListener("click", closeModal);
});

overlay.addEventListener("click", closeModal);