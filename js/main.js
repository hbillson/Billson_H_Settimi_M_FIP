(() => {
	// variables up here

	let lightBox = document.querySelector(".lightbox"),
		vid = lightBox.querySelector("video"), 
		head = document.querySelector("#header"),
		caption = lightBox.querySelector("span"),
		controls = document.querySelector(".controls"),
		rewind = document.querySelector(".rWind"),
		closeLightBox = document.querySelector(".lightbox-close"),
		products = document.querySelectorAll(".product"),
		prodImage = document.querySelector("#productsImage"),
		bars = document.querySelectorAll(".bar");

	// functions here

	function playVid() {
		caption.classList.add("hidden");
		if (vid.classList.contains("playing")) {
			showButtons();
			caption.classList.remove("hidden");
			return false;
		}
		vid.play();
		controls.classList.remove("controlsShowing");
		vid.classList.add("playing");
	}

	function hideLightBox() {
		console.log("clicked close");
		vid.pause();
		head.scrollIntoView(true);
	}

	function showButtons() {
		vid.pause();
		controls.classList.add("controlsShowing");
		vid.classList.remove("playing");
	}

	function reWind() {
		vid.currentTime = 0;
		vid.classList.add("playing");
		caption.classList.add("hidden");
		controls.classList.remove("controlsShowing");
		vid.play();
	}

	function finished() {
		controls.classList.add("controlsShowing");
		vid.classList.remove("playing");
		head.scrollIntoView(true);
	}

	function changeProduct() {
		debugger;
		let currentBar = document.querySelector(".desc");
		if (currentBar) {
			currentBar.classList.remove("desc");
		}
		let prodName = this.className.split(" ")[1];
		let newProduct = `images/${prodName}_product.jpg`;
		prodImage.src = newProduct;
		let newBar = document.querySelector(`.${prodName}`);
		let newText = document.querySelector(`.t_${prodName}`);
		newBar.classList.add("desc");
		newText.classList.add("textShowing");
	}

	// things that call the functions here
	closeLightBox.addEventListener("click", hideLightBox);
	vid.addEventListener("ended", finished);
	vid.addEventListener("click", playVid);
	rewind.addEventListener("click", reWind);
	products.forEach(product => product.addEventListener("click", changeProduct));
})();