import Wrapper from "./constructor/Wrapper.js";
import cards from "./modules/cardsLeft.js";
import cards2 from "./modules/cardsRicht.js";
import content from "./modules/content.js";
import footer from "./modules/footer.js";
import header from "./modules/header.js";
import sidebar from "./modules/sidebar.js";



new Wrapper('#root', [header, content, sidebar, footer]);
cards.forEach(el => new Wrapper('#itemLeft', [el]))
cards2.forEach(el => new Wrapper('#itemRicht', [el]))