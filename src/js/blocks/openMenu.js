import gsap from "gsap";
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

export default () => {
	const burgerButton = document.querySelector(".header__burger");
	const menu = document.querySelector(".menu");
	const menuItems = menu.querySelectorAll(".menu__item");
	const menuTitle = menu.querySelector(".menu__title");
	const menuContainer = menu.querySelector(".menu__content_inner");

	let timeline = gsap.timeline({
		paused: true,
		reversed: true
	})
	let flag = true;

	timeline.to(menu, {
		left: 0,
		duration: 0.7,
		ease: "expo.out",
		onComplete: function(){
			menu.classList.add("opened");
		}
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
				disableBodyScroll(menuContainer);
				flag=false;
				break;
			case false:
				clearAllBodyScrollLocks();
				flag=true;
				break;
		}
	});

	function isReversed(animation) {
		animation.reversed() ? animation.play() : animation.reverse();
	}

	document.addEventListener("click", function(e){
		if (menu.classList.contains("opened")) {
			if (!e.target.classList.contains("menu") && !e.target.classList.contains("header__burger") && !e.target.classList.contains("menu__content") && !e.target.classList.contains("menu__list") && !e.target.classList.contains("menu__title") && !e.target.classList.contains("menu__content_inner") && !e.target.classList.contains("menu__item") && !e.target.classList.contains("menu__item-img") && !e.target.classList.contains("menu__item-title") && !e.target.classList.contains("header")) {
				timeline.reverse();

				burgerButton.classList.remove("_active");
			}
		}
	});
};
