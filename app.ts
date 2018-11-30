const generator: Generator = new Generator();

let productList: Item[] = [];

function createAndDisplay() {
    let item: Item = generator.getRandomItem();
    item.displayDetails(itemDisplayer);
    console.log(item);
}

genButton.onclick = () => {createAndDisplay()};