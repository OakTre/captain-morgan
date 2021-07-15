import documentReady from "./helpers/documentReady";
import lazyImages from "./modules/lazyImages";
import videoInit from "./blocks/videoInit";
import openMenu from "./blocks/openMenu";
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

documentReady(() => {
	lazyImages();
	videoInit();
	openMenu();

	const warningModal = document.querySelector(".warining-modal");
	const warningModalContent = document.querySelector(".warining-modal__content");
	const heroTitle = document.querySelector(".morgan-hero__title");
	const heroButton = document.querySelector(".morgan-hero__button");

	disableBodyScroll(warningModalContent);

	if (warningModal) {
		warningModalContent.addEventListener("click", function(e){
			if(e.target.classList.contains("_age-yes")) {
				warningModal.classList.add("_hide");

				setTimeout(()=>{
					warningModal.style.display = "none";
					heroTitle.classList.remove("_active");
					heroButton.classList.remove("_active");
				}, 200)

				enableBodyScroll(warningModal);

				let date = new Date(new Date().getTime() + 259200 * 1000);  //3 days
    			document.cookie = "age_true=checked; path=/; expires=" + date.toUTCString();

			} else if (e.target.classList.contains("_age-no")) {
				warningModalContent.querySelector(".warining-modal__cancel").classList.add("_show");

				warningModalContent.querySelector(".warining-modal__button._age-no").classList.add("_active");
			}
		})
	}

});
