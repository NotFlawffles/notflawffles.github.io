const sidebar = document.querySelector(".sidebar");

const sections = {
    user: sidebar.querySelector("#user"),
    languages: sidebar.querySelector("#languages"),
    editor: sidebar.querySelector("#editor"),
    socials: sidebar.querySelector("#socials"),
};

const bodySections = {
    cover: document.querySelector("html"),
    favoriteLanguagesContainer: document.querySelector(".favorite-language-container"),
    editorContainer: document.querySelector(".editor-container"),
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

sections.socials.addEventListener("click", () => {
    bodySections.socials.scrollIntoView({ behavior: "smooth" });
});
