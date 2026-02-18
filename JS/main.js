// Saved light mode

document.addEventListener("DOMContentLoaded", () => {
  const savedMode = localStorage.getItem("lightmode");

  if (savedMode === "true") {
    document.body.classList.add("lightmode");
  } else {
    document.body.classList.remove("lightmode");
  }
});

// Mode button

const toggleBtn = document.querySelector(".menu-icon");
const navMenu = document.querySelector(".menu");

toggleBtn.addEventListener("click", hamburgerMenu);

function hamburgerMenu() {
  navMenu.classList.toggle("show");
  toggleBtn.classList.toggle("fa-x");
}

// Dark-light-mode

const modeBtn = document.querySelector(".modeBtn");

modeBtn.addEventListener("click", themeSwitch);

function themeSwitch() {
  document.body.classList.toggle("lightmode");

  if (document.body.classList.contains("lightmode")) {
    localStorage.setItem("lightmode", "true");
  } else {
    localStorage.removeItem("lightmode");
  }
}

// Date in footer

let date = new Date().toLocaleDateString("sv-SE");
document.getElementById("date").innerHTML =
  date + " &copy Emelie Nilsson Vilör";
