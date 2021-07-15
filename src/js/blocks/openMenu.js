import gsap from "gsap";

export default () => {
	const burgerButton = document.querySelector(".header__burger");
	const menu = document.querySelector(".menu");

	let timeline = gsap.timeline({
		paused: true,
		reversed: true
	})

	timeline.to(menu, {
		left: 0,
		duration: 0.7,
		ease: "expo.out"
	})

	burgerButton.addEventListener("click", function(){
		this.classList.toggle("_active");

		if (timeline.isActive()) {
			e.preventDefault();
			return false;
		}

		isReversed(timeline);
	});

	function isReversed(animation) {
		animation.reversed() ? animation.play() : animation.reverse();
	}
};
