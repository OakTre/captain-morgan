import documentReady from "./helpers/documentReady";
import lazyImages from "./modules/lazyImages";
import videoInit from "./blocks/videoInit";
import openMenu from "./blocks/openMenu";
import openModal from "./blocks/openModal";

import SimpleBar from "simplebar";

documentReady(() => {
	lazyImages();
	videoInit();
	openMenu();
	openModal();


	if (window.matchMedia("(max-width: 740px)").matches) {
		new SimpleBar(document.querySelector(".menu__content_inner"));
	}

});
