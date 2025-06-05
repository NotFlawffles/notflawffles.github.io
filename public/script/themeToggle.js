const fixNote = document.querySelector(".screenshot-wrapper").querySelector(".note");

const applyTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    fixNote.style.opacity = savedTheme == "light" ? "0%" : "100%";
};

const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
var savedTheme = localStorage.getItem('theme') || (prefersDark ? 'dark' : 'light');
applyTheme(savedTheme);

const toggle = document.querySelector(".theme-toggle");
const logo = toggle.querySelector(".logo");

const logoSrcs = {
    dark: "https://www.svgrepo.com/show/535505/moon-cloud.svg",
    light: "https://www.svgrepo.com/show/535671/sun-cloud.svg",
};

const updateToggleLog = () => {
    logo.src = savedTheme == "light" ? logoSrcs.dark : logoSrcs.light;
};

updateToggleLog();

const toggleTheme = () => {
    savedTheme = savedTheme == "dark" ? "light" : "dark";
    applyTheme(savedTheme);
    updateToggleLog();
};

toggle.addEventListener("click", toggleTheme);
knob.addEventListener("click", toggleTheme);
logo.addEventListener("click", toggleTheme);
