const toggle = document.querySelector(".cover").querySelector(".right").querySelector(".fullscreen-toggle");
const right = document.querySelector(".cover").querySelector(".right");
const left = document.querySelector(".cover").querySelector(".left");

const toggleSrcs = {
    full: "https://www.svgrepo.com/show/503031/fullscreen.svg",
    unfull: "https://www.svgrepo.com/show/491637/fullscreen-exit.svg",
};

toggle.src = toggleSrcs.full;

toggle.addEventListener("click", () => {
    if (left.style.width == "0%") {
	toggle.src = toggleSrcs.full;
	left.style.width = "50%";
	left.style.opacity = "100%";
	toggle.style.left = "50%";
	right.style.width = "50%";
    } else {
	toggle.src = toggleSrcs.unfull;
	left.style.width = "0%";
	left.style.opacity = "0%";
	toggle.style.left = "10%";

	setTimeout(() => {
	    right.style.width = "100%";
	}, 600);
    }
});
