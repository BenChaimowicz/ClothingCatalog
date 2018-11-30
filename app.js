"use strict";
const generator = new Generator();
let productList = [];
function createAndDisplay() {
    let item = generator.getRandomItem();
    item.displayDetails(itemDisplayer);
    console.log(item);
}
genButton.onclick = () => { createAndDisplay(); };
