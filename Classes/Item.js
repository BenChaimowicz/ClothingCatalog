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
    get manufacturer() { return this._manufacturer; }
    ;
    set model(m) {
        if (m == '' || m == undefined) {
            throw new Error(emptyError);
        }
        else {
            this._model = m;
        }
        ;
    }
    get model() { return this._model; }
    ;
    get price() { return this._price; }
    ;
    set image(img) { this._imageURL = img; }
    ;
    displayDetails(element) { }
    ;
    displayImage(element) { element.src = this._imageURL; }
    getPriceWithoutVAT() {
        return (this.price / (1 + Item.VAT / 100));
    }
    get brand() {
        return ('This is ' + this._model + ' by ' + this._manufacturer);
    }
}
