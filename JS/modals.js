const triggers = document.querySelectorAll(".modalBtn, .modal-link");
const overlay = document.getElementById("modal-overlay");

triggers.forEach((trigger) => {
  trigger.addEventListener("click", (e) => {
    e.preventDefault();

    const targetId = trigger.getAttribute("data-target");
    const modal = document.getElementById(targetId);

    if (modal) {
    modal.classList.add("is-open");
    overlay.classList.add("is-open");
    document.body.style.overflow = "hidden";
    }
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