"use strict";
class Shirt extends Item {
    set color(c) {
        let match = false;
        for (let i = 0; i < Shirt.shirtColors.length; i++) {
            if (c === Shirt.shirtColors[i]) {
                match = true;
                this._color = c;
                break;
            }
            ;
        }
        if (match == false) {
            throw new Error(colorError);
        }
    }
    set sleeveLength(sl) {
        if (sl > Shirt.maxSleeveLength || sl < Shirt.minSleeveLength) {
            throw new Error(lengthError);
        }
        else {
            this._sleeveLength = sl;
        }
        ;
    }
    set size(s) {
        if (s > Shirt.maxShirtSize || s < Shirt.minShirtSize) {
            throw new Error(sizeError);
        }
        else {
            this._size = s;
        }
        ;
    }
}
Shirt.shirtColors = ['Red', 'Blue', 'Black', 'White', 'Yellow', 'Green', 'Pink', 'Purple'];
Shirt.maxShirtSize = 44;
Shirt.minShirtSize = 34;
Shirt.maxSleeveLength = 1.2;
Shirt.minSleeveLength = 0;
class TShirt extends Shirt {
    constructor() {
        super();
        this.image = '../Assets/Images/01.jpg';
    }
    set text(txt) {
        if (txt != '' || txt != undefined) {
            this._text = txt;
        }
        else {
            this._text = null;
        }
        ;
    }
    get text() { return this._text; }
    ;
    set price(p) {
        if (p < TShirt.minPrice || p > TShirt.maxPrice) {
            throw new Error(priceError);
        }
        else {
            this.price = p;
        }
        ;
    }
}
TShirt.TShirtText = ['Go', 'Hello', 'Goodbye', 'Fuck Off', null];
TShirt.minPrice = 29;
TShirt.maxPrice = 149;
class ButtonedShirt extends Shirt {
    constructor() {
        super();
        this.image = '../Assets/Images/02.jpg';
    }
    set buttons(b) {
        if (b < ButtonedShirt.minButtonCount || b > ButtonedShirt.maxButtonCount) {
            throw new Error(ButtonedShirt.buttonError);
        }
        else {
            this._buttons = b;
        }
        ;
    }
    get buttons() { return this._buttons; }
    ;
    set price(p) {
        if (p < ButtonedShirt.minPrice || p > ButtonedShirt.maxPrice) {
            throw new Error(priceError);
        }
        else {
            this.price = p;
        }
        ;
    }
}
ButtonedShirt.buttonError = 'Invalid button number!';
ButtonedShirt.minButtonCount = 4;
ButtonedShirt.maxButtonCount = 7;
ButtonedShirt.minPrice = 89;
ButtonedShirt.maxPrice = 299;
class WomenShirt extends Shirt {
    constructor() {
        super();
        this.image = '../Assets/Images/03.jpg';
    }
    set fabric(f) {
        let match = false;
        for (let i = 0; i < WomenShirt.shirtFabrics.length; i++) {
            if (f === WomenShirt.shirtFabrics[i]) {
                match = true;
                this._fabric = f;
                break;
            }
        }
        if (match == false) {
            throw new Error(fabricError);
        }
        ;
    }
    get fabric() { return this._fabric; }
    ;
    set price(p) {
        if (p < WomenShirt.minPrice || p > WomenShirt.maxPrice) {
            throw new Error(priceError);
        }
        else {
            this.price = p;
        }
        ;
    }
}
WomenShirt.shirtFabrics = ['Cotton', 'Wool', 'Linen', 'Polyester'];
WomenShirt.minPrice = 29;
WomenShirt.maxPrice = 189;
