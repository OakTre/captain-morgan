import gsap from "gsap";
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

export default () => {
	const burgerButton = document.querySelector(".header__burger");
	const menu = document.querySelector(".menu");
	const menuItems = menu.querySelectorAll(".menu__item");
	const menuTitle = menu.querySelector(".menu__title");

	let timeline = gsap.timeline({
		paused: true,
		reversed: true
	})
	let flag = true;

	timeline.to(menu, {
		left: 0,
		duration: 0.7,
		ease: "expo.out"
	}).fromTo(menuTitle, {
		x: "-100%",
		opacity: 0
	}, {
		x: 0,
		opacity: 1
	},"-=0.6")

	menuItems.forEach(function(el) {
		timeline.fromTo(el,{
			x: "-100%",
			opacity: 0
		}, {
			x: 0,
			opacity: 1
		}, "-=0.4")
	});

	burgerButton.addEventListener("click", function(){
		this.classList.toggle("_active");

		if (timeline.isActive()) {
			e.preventDefault();
			return false;
		}

		isReversed(timeline);

		switch (flag) {
			case true:
				disableBodyScroll(menu);
				flag=false;
				break;
			case false:
				enableBodyScroll(menu);
				flag=true;
				break;
		}
	});

	function isReversed(animation) {
		animation.reversed() ? animation.play() : animation.reverse();
	}
};
