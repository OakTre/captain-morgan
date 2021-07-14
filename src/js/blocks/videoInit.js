export default () => {
	const buttonHero = document.querySelector(".morgan-hero__button");
	const video = document.querySelector(".morgan-hero__video");
	const info = document.querySelector(".morgan-hero__info");
	const title = document.querySelector(".morgan-hero__title");
	const playButton = document.querySelector(".play-button-js");

	let currentStep = 'first';
	let steps = {
		first: {
			time: 4.77,
			nextStep: 'second'
		},
		second: {
			time: 11.29,
			nextStep: 'third'
		},
		third: {
			time: 16.85,
			nextStep: 'thourth'
		},
		thourth: {
			time: 20.71,
			nextStep: 'fifth'
		},
		fifth: {
			time: 100,
			nextStep: 'end'
		}
	};

	playButton.addEventListener("click", function(){
		video.play();
	});

	buttonHero.addEventListener("click", function(){

		title.classList.add("_active");

		this.classList.add("_active");

		video.play();
	});


	video.addEventListener("timeupdate", function(){
		let curTime = this.currentTime;

		if (currentStep) {

			if (curTime > steps[currentStep].time) {
			  currentStep = steps[currentStep].nextStep;

			  document.querySelector(`.morgan-title[data-text="${currentStep}"]`).classList.add("_active");

			  hideText(currentStep);

			  this.pause();
			}

		} else {
			video.stop();
		}
	});

	function hideText(step) {
		const parent = document.querySelector(`.morgan-title[data-text="${step}"]`);
		const currentButton = parent.querySelector(".main-button");

		currentButton.addEventListener("click", function(){
			parent.classList.remove("_active");
			video.play();
		});
	}

}
