import documentReady from "./helpers/documentReady";
import lazyImages from "./modules/lazyImages";
import videoInit from "./blocks/videoInit";

documentReady(() => {
	lazyImages();
	videoInit();
});
