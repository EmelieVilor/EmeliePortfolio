const toggleBtn = document.querySelector (".menu-icon");
const navMenu = document.querySelector (".menu");


document.addEventListener("DOMContentLoaded", () => {

    const savedMode = localStorage.getItem("lightmode");

    if (savedMode === "true") {
        document.body.classList.add("lightmode");
    } else {
        document.body.classList.remove("lightmode");
    }
});

//lägger till en funktion på knappen toggleBtn
toggleBtn.addEventListener("click", hamburgerMenu);


//vad som händer när man trycker på toggleBtn
function hamburgerMenu() {
    navMenu.classList.toggle("show");
    toggleBtn.classList.toggle("fa-x");
}

//dark-light-mode 
const modeBtn = document.querySelector('.modeBtn');

modeBtn.addEventListener("click", themeSwitch);

function themeSwitch() {
    document.body.classList.toggle('lightmode');

    if (document.body.classList.contains('lightmode')) {
        localStorage.setItem("lightmode", "true");
    } else {
        localStorage.removeItem("lightmode");
    }
}

// Date in footer
let date = new Date().toLocaleDateString("sv-SE");
console.log(date);
document.getElementById("date").innerHTML = date + " &copy Emelie Nilsson Vilör";