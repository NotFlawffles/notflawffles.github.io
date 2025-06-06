const editorScreenshot = document.querySelector(".screenshot-wrapper").querySelector(".screenshot");
const editorScreenshotShadow = document.querySelector(".screenshot-wrapper").querySelector(".screenshot-shadow");

const updateEditorScreenshot = (theme) => {
    if (theme == "light") {
        editorScreenshot.src = "public/image/editor-screenshot-dark.png";
	editorScreenshotShadow.src = "public/image/editor-screenshot-dark.png";
    } else {
	editorScreenshot.src = "public/image/editor-screenshot-light.png";
	editorScreenshotShadow.src = "public/image/editor-screenshot-light.png";
    }
};

const applyTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    updateEditorScreenshot(theme);
};

const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
var savedTheme = localStorage.getItem('theme') || (prefersDark ? 'dark' : 'light');
applyTheme(savedTheme);

const container = document.querySelector(".theme-toggle-container");
const logo = container.querySelector(".logo");
const movingPart = container.querySelector(".moving-part");

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
    movingPart.style.display = "none";
};

container.addEventListener("click", toggleTheme);
logo.addEventListener("click", toggleTheme);
