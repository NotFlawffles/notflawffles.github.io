const sidebar = document.querySelector(".sidebar");

const sections = {
    user: sidebar.querySelector("#user"),
    languages: sidebar.querySelector("#languages"),
    editor: sidebar.querySelector("#editor"),
    wipProjects: sidebar.querySelector("#wip-projects"),
    socials: sidebar.querySelector("#socials"),
};

const bodySections = {
    cover: document.querySelector("html"),
    favoriteLanguagesContainer: document.querySelector(".favorite-language-container"),
    editorContainer: document.querySelector(".editor-container"),
    wipProjects: document.querySelector(".wip-projects-container"),
    socials: document.querySelector(".socials"),
};

sections.user.addEventListener("click", () => {
    bodySections.cover.scrollIntoView({ behavior: "smooth" });
});

sections.languages.addEventListener("click", () => {
    bodySections.favoriteLanguagesContainer.scrollIntoView({ behavior: "smooth" });
});

sections.editor.addEventListener("click", () => {
    bodySections.editorContainer.scrollIntoView({ behavior: "smooth" });
});

sections.wipProjects.addEventListener("click", () => {
    bodySections.wipProjects.scrollIntoView({ behavior: "smooth" });
});

sections.socials.addEventListener("click", () => {
    bodySections.socials.scrollIntoView({ behavior: "smooth" });
});
