"use strict";
class Glasses extends Item {
    set frameColor(fc) {
        if (Glasses.GlassColors.findIndex(ele => { return ele === fc; }) > -1) {
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
        this.image = './Assets/Images/19.jpg';
    }
    set glassColor(gc) {
        if (SunGlasses.ShadeColors.findIndex(ele => { return ele === gc; }) > -1) {
            this._glassColor = gc;
        }
        else {
            throw new Error(colorError);
        }
        ;
    }
    get glassColor() { return this._glassColor; }
    ;
    set price(p) {
        if (p < SunGlasses.minPrice || p > SunGlasses.maxPrice) {
            throw new Error(priceError);
        }
        else {
            this.price = p;
        }
        ;
    }
    displayDetails(element) {
        element.innerHTML += this.brand + lB;
        element.innerHTML += 'Price: ' + this.price + lB;
        element.innerHTML += 'Frame Color: ' + this.frameColor + lB;
        element.innerHTML += 'Shade Color: ' + this.glassColor + lB;
        let imgBox = document.createElement('img');
        imgBox.className = 'itemImg';
        element.appendChild(imgBox);
        this.displayImage(imgBox);
        element.innerHTML += '</hr>' + lB;
    }
}
SunGlasses.ShadeColors = ['Black', 'Yellow', 'Red', 'Blue', 'Rainbow'];
SunGlasses.minPrice = 99;
SunGlasses.maxPrice = 499;
class OpticGlasses extends Glasses {
    constructor() {
        super();
        this.image = './Assets/Images/20.jpg';
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
    get readDistance() { return (this._readDist); }
    ;
    set price(p) {
        if (p < OpticGlasses.minPrice || p > OpticGlasses.maxPrice) {
            throw new Error(priceError);
        }
        else {
            this.price = p;
        }
        ;
    }
    displayDetails(element) {
        element.innerHTML += this.brand + lB;
        element.innerHTML += 'Price: ' + this.price + lB;
        element.innerHTML += 'Frame Color: ' + this.frameColor + lB;
        element.innerHTML += 'Recommended Reading Distance: ' + this.readDistance + ' Meters' + lB;
        let imgBox = document.createElement('img');
        imgBox.className = 'itemImg';
        element.appendChild(imgBox);
        this.displayImage(imgBox);
        element.innerHTML += '</hr>' + lB;
    }
}
OpticGlasses.minReadDistance = 0.2;
OpticGlasses.maxReadDistance = 3;
OpticGlasses.minPrice = 299;
OpticGlasses.maxPrice = 1299;
