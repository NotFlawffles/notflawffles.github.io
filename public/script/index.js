const favoriteEditorsClickables = {
    neovim: {
        icon: document.getElementById("neovim-icon"),
        text: document.getElementById("neovim-text"),
        link: "https://www.neovim.io/"
    },

    visualStudioCode: {
        icon: document.getElementById("visual-studio-code-icon"),
        text: document.getElementById("visual-studio-code-text"),
        link: "https://code.visualstudio.com/"
    }
};

favoriteEditorsClickables.neovim.icon.addEventListener("click", (_) => {
    window.open(favoriteEditorsClickables.neovim.link);
});

favoriteEditorsClickables.neovim.text.addEventListener("click", (_) => {
    window.open(favoriteEditorsClickables.neovim.link);
});

favoriteEditorsClickables.visualStudioCode.icon.addEventListener("click", (_) => {
    window.open(favoriteEditorsClickables.visualStudioCode.link);
});

favoriteEditorsClickables.visualStudioCode.text.addEventListener("click", (_) => {
    window.open(favoriteEditorsClickables.visualStudioCode.link);
});