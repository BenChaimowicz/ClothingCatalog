"use strict";
class Item {
    constructor() {
        Item.VAT = 17;
    }
    set manufacturer(m) {
        if (m == '' || m == undefined) {
            throw new Error(emptyError);
        }
        else {
            this._manufacturer = m;
        }
        ;
    }
    set model(m) {
        if (m == '' || m == undefined) {
            throw new Error(emptyError);
        }
        else {
            this._model = m;
        }
        ;
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
    set image(img) {
        this._imageURL = img;
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
