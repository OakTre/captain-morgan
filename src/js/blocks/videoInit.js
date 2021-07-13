export default () => {
	const button = document.querySelector(".morgan-hero__button");
	const video = document.querySelector(".morgan-hero__video");
	const info = document.querySelector(".morgan-hero__info");

	button.addEventListener("click", function(){
		video.play();

		info.style.display = "none";
	});

}
