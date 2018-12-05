"use strict";
class Tester {
    constructor() {
        this._prodTypes = [TShirt, ButtonedShirt, WomenShirt, Jeans, RegularPants, Shorts, Skirt, Dress, NightDress, ElegantShoes, SportShoes, ComfyShoes, Heels, Blazer, Coat, Cap, TopHat, Belt, SunGlasses, OpticGlasses];
    }
    test() {
        let numOfItems = parseInt(prompt('Enter number of items to create:'));
        if (numOfItems < 1 || numOfItems == NaN) {
            throw new Error('Invalid Number!');
        }
        ;
        if (numOfItems > 20) {
            this._prodList = new Array(numOfItems);
            for (let i = 0; i < this._prodList.length; i++) {
                this._prodList[i] = createDisplayAndReturnRandom();
            }
        }
        else {
            this._prodList = new Array(numOfItems);
            let i = 0;
            while (i < numOfItems) {
                let rndNum = this.rollFromTypes();
                if (this._prodTypes[rndNum] != 0) {
                    this._prodList[i] = createSpecificAndReturn(rndNum);
                    this._prodTypes[rndNum] = 0;
                    i++;
                }
            }
        }
    }
    rollFromTypes() {
        let num = Math.floor(Math.random() * this._prodTypes.length);
        return num;
    }
}
