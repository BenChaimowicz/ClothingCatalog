const generator: Generator = new Generator();

let productList: Item[] = [];

function createAndDisplayRandom() {
    let item: Item = generator.getRandomItem();
    item.displayDetails(itemDisplayer);
    console.log(item);
}

function createSpecificItem(index: number) {
    let item: Item = generator.getRandomItem(index);
    item.displayDetails(itemDisplayer);
}

genRndSpecButton.onclick = () => { createSpecificItem(parseInt(indexInput.value)) };
genButton.onclick = () => {createAndDisplayRandom()};