"use strict";
const generator = new Generator();
let productList = [];
function createDisplayAndReturnRandom() {
    let item = generator.getRandomItem();
    item.displayDetails(itemDisplayer);
    return item;
}
function createSpecificAndReturn(index) {
    let item = generator.getRandomItem(index);
    item.displayDetails(itemDisplayer);
    return item;
}
function createAndDisplayRandom() {
    let item = generator.getRandomItem();
    item.displayDetails(itemDisplayer);
    console.log(item);
}
function createSpecificItem(index) {
    let item = generator.getRandomItem(index);
    item.displayDetails(itemDisplayer);
}
function clearScreen() {
    itemDisplayer.innerHTML = '';
}
clearButton.onclick = () => { clearScreen(); };
genRndSpecButton.onclick = () => { createSpecificItem(parseInt(indexInput.value)); };
genButton.onclick = () => { createAndDisplayRandom(); };
