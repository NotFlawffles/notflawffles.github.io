const element = {
    time: document.querySelector(".time"),
    profilePicture: document.querySelector(".profile-picture"),
    profilePictureShadow: document.querySelector(".profile-picture-shadow"),
    github: document.querySelector("#github"),
    discord: document.querySelector("#discord"),
    reddit: document.querySelector("#reddit"),
};

element.github.addEventListener("click", () => {
    window.open("https://github.com/notflawffles");
});

element.discord.addEventListener("click", () => {
    window.open("https://discordapp.com/users/519826321552048129");
});

element.reddit.addEventListener("click", () => {
    window.open("https://www.reddit.com/user/NotFlawffles/");
});

const updateTime = () => {
    const time = new Date().toLocaleString("en-US", { timeZone: "Asia/Baghdad" }).replace(",", " 🞄  ");
    element.time.textContent = time;
};

updateTime();

setInterval(() => {
    updateTime();
}, 1000);
