import Element from "../constructor/Element.js";

const cardData = [
    'Card 1',
    'Card 2',
    'Card 3',
    'Card 4',
    'Card 5',
];



const cards2 = cardData.map(el => new Element('div', 'card2', el));
export default cards2