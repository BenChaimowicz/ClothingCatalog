"use strict";
class Glasses extends Item {
    set price(a) {
        if (a <= 0 || a > 2000) {
            throw new Error(priceError);
        }
        else {
            this.price = a;
        }
        ;
    }
    get price() { return this.price; }
    ;
    set frameColor(fc) {
        if (Glasses.GlassColors.findIndex(ele => { return ele === fc; }) > 0) {
            this._frameColor = fc;
        }
        else {
            throw new Error(colorError);
        }
        ;
    }
    get frameColor() { return this._frameColor; }
    ;
}
Glasses.GlassColors = ['Black', 'White', 'Red', 'Brown', 'Silver', 'Gold'];
class SunGlasses extends Glasses {
    constructor() {
        super();
        this.image = '../Assets/Images/19.jpg';
    }
    set glassColor(gc) {
        if (SunGlasses.ShadeColors.findIndex(ele => { return ele === gc; }) > 0) {
            this._glassColor = gc;
        }
        else {
            throw new Error(colorError);
        }
        ;
    }
}
SunGlasses.ShadeColors = ['Black', 'Yellow', 'Red', 'Blue', 'Rainbow'];
class OpticGlasses extends Glasses {
    constructor() {
        super();
        this.image = '../Assets/Images/20.jpg';
    }
    set readDistance(rd) {
        if (rd < OpticGlasses.minReadDistance || rd > OpticGlasses.maxReadDistance) {
            throw new Error(distanceError);
        }
        else {
            this._readDist = rd;
        }
        ;
    }
}
OpticGlasses.minReadDistance = 0.2;
OpticGlasses.maxReadDistance = 3;
