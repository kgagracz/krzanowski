window.addEventListener("DOMContentLoaded", () => {
	const header = document.querySelector(".header");

	//changing header color after scroll
	window.addEventListener("scroll", () => {
		if (window.scrollY > 200) {
			header.style.background = "#1d282d";
		} else {
			header.style.background = "rgba(255, 255, 255, 0.05)";
		}
	});
});
