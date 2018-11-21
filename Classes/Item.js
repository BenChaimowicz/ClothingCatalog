"use strict";
class Item {
    constructor() {
        Item.VAT = 17;
    }
    set price(a) {
        if (a > 0) {
            this._price = a;
        }
        else {
            throw new Error('Price cannot be 0 or lower!');
        }
        ;
    }
    displayDetails() {
    }
    displayImage() {
    }
    getPriceWithoutVAT() {
        return (this.price / (1 + Item.VAT / 100));
    }
    get brand() {
        return ('This is ' + this._model + ' by ' + this._manufacturer);
    }
}
