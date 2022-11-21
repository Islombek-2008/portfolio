let toggle = document.getElementById("toggleDark");
let body = document.querySelector("body");
let link = document.getElementById("link");
let link2 = document.getElementById("link2");
let link3 = document.getElementById("link3");
let link4 = document.getElementById("link4");
let link5 = document.getElementById("link5");
let link6 = document.getElementById("link6");

toggle.addEventListener("click", function () {
	this.classList.toggle("bi-moon-fill");
	if (this.classList.toggle("bi-brightness-high-fill")) {
		body.style.background = "white";
		body.style.color = "black";
		body.style.transition = "2s";
		link.style.color = "black";
		link2.style.color = "black";
		link3.style.color = "black";
		link4.style.color = "black";
		link5.style.color = "black";
		link6.style.color = "black";
	} else {
		body.style.background = "black";
		body.style.color = "white";
		body.style.transition = "2s";
		link.style.color = "white";
		link2.style.color = "white";
		link3.style.color = "white";
		link4.style.color = "white";
		link5.style.color = "white";
		link6.style.color = "white";
	}
});
