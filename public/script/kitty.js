const kitty = document.querySelector(".cover").querySelector(".right").querySelector(".kitty");
const icon = kitty.querySelector(".icon");
const text = kitty.querySelector(".text");

setTimeout(() => {
    icon.style.opacity = "100%";
    icon.style.marginTop = "-5%";

    setTimeout(() => {
	icon.style.marginTop = "0%";
    }, 100);

    text.textContent = "meow!";

    const interactions = [
	"fwaffes is cute x3",
	"this page is so gei!",
	"go back to your country :3",
	"...",
    ];

    setInterval(() => {
	icon.style.opacity = "100%";
	icon.style.marginTop = "-5%";

	setTimeout(() => {
	    icon.style.marginTop = "0%";
	}, 100);

	const interactionIndex = Math.round(Math.random() * interactions.length);
	text.textContent = interactions[interactionIndex];
    }, 5000);
}, 2000);
