"use strict";
class Hat extends Item {
    set color(c) {
        if (Hat.HatColors.findIndex(ele => { return ele === c; }) > 0) {
            this._color = c;
        }
        else {
            throw new Error(colorError);
        }
        ;
    }
    get color() { return this._color; }
    ;
    set setDiameterAndSize(d) {
        if (d < Hat.minDiameter || d > Hat.maxDiameter) {
            throw new Error(sizeError);
        }
        else {
            this._diameter = d;
            this._size = d;
        }
        ;
    }
    get getDiameter() { return this._diameter; }
    ;
    get getSize() { return this._size; }
    ;
}
Hat.HatColors = ['Black', 'Red', 'Blue', 'Green', 'White', 'Gray', 'Brown'];
Hat.minDiameter = 45;
Hat.maxDiameter = 70;
Hat.minSize = Hat.minDiameter;
Hat.maxSize = Hat.maxDiameter;
class Cap extends Hat {
    constructor() {
        super();
        this.image = '../Assets/Images/16.jpg';
    }
    set ad(ad) { this._ad = ad; }
    ;
    get ad() { return this._ad; }
    ;
    set price(p) {
        if (p < Cap.minPrice || p > Cap.maxPrice) {
            throw new Error(priceError);
        }
        else {
            this.price = p;
        }
        ;
    }
}
Cap.minPrice = 29;
Cap.maxPrice = 99;
class TopHat extends Hat {
    constructor() {
        super();
        this.image = '../Assets/Images/17.jpg';
    }
    set height(h) {
        if (h < TopHat.minHeight || h > TopHat.maxHeight) {
            throw new Error(heightError);
        }
        else {
            this._height = h;
        }
        ;
    }
    get height() { return this._height; }
    ;
    set price(p) {
        if (p < TopHat.minPrice || p > TopHat.maxPrice) {
            throw new Error(priceError);
        }
        else {
            this.price = p;
        }
        ;
    }
}
TopHat.minHeight = 0.2;
TopHat.maxHeight = 0.8;
TopHat.minPrice = 69;
TopHat.maxPrice = 199;
