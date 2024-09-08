import Element from "../constructor/Element.js";


const itemLeft = new Element('div','conteiner__item','');
const itemRicht = new Element('div','conteiner__item','')
itemLeft.getId('itemLeft');
itemRicht.getId('itemRicht')
const content = new Element('div', 'content', [itemLeft.get(),itemRicht.get()]);

export default content;
