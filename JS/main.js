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

const menuIcon = document.querySelector(".menu-icon");
const topNav = document.querySelector(".menu");

menuIcon.addEventListener("click", hamburgerMenu);

function hamburgerMenu() {
  topNav.classList.toggle("show");
  menuIcon.classList.toggle("fa-x");
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
