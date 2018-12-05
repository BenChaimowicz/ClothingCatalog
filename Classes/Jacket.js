"use strict";
class Jacket extends Item {
    set color(c) {
        if (Jacket.JacketColors.findIndex(ele => { return ele === c; }) > -1) {
            this._color = c;
        }
        else {
            throw new Error(colorError);
        }
        ;
    }
    get color() { return this._color; }
    ;
    set thickness(t) {
        if (t < Jacket.minThickness || t > Jacket.maxThickness) {
            throw new Error(thicknessError);
        }
        else {
            this._thickness = t;
        }
        ;
    }
    get thickness() { return this._thickness; }
    ;
    set size(s) {
        if (s < Jacket.minSize || s > Jacket.maxSize) {
            throw new Error(sizeError);
        }
        else {
            this._size = s;
        }
        ;
    }
    get size() { return this._size; }
    ;
}
Jacket.JacketColors = ['Brown', 'White', 'Black', 'Dark Blue', 'Green', 'Gray'];
Jacket.minThickness = 0.01;
Jacket.maxThickness = 0.08;
Jacket.minSize = 36;
Jacket.maxSize = 52;
class Blazer extends Jacket {
    constructor() {
        super();
        this.image = './Assets/Images/14.jpg';
    }
    set pockets(p) {
        if (p < Blazer.minPockets || p > Blazer.maxPockets) {
            throw new Error(pocketError);
        }
        else {
            this._pockets = p;
        }
        ;
    }
    get pockets() { return this._pockets; }
    ;
    set price(p) {
        if (p < Blazer.minPrice || p > Blazer.maxPrice) {
            throw new Error(priceError);
        }
        else {
            this._price = p;
        }
        ;
    }
    get price() { return this._price; }
    ;
    displayDetails(element) {
        element.innerHTML += this.brand + lB;
        element.innerHTML += 'Price: ' + this.price + 'ILS' + lB;
        element.innerHTML += 'Size: ' + this.size + lB;
        element.innerHTML += 'Color: ' + this.color + lB;
        element.innerHTML += 'Thickness: ' + this.thickness + ' (in meters)' + lB;
        element.innerHTML += 'Pockets: ' + this.pockets + lB;
        let imgBox = document.createElement('img');
        imgBox.className = 'itemImg';
        element.appendChild(imgBox);
        this.displayImage(imgBox);
        element.innerHTML += '<hr>' + lB;
    }
}
Blazer.minPockets = 0;
Blazer.maxPockets = 6;
Blazer.minPrice = 499;
Blazer.maxPrice = 999;
class Coat extends Jacket {
    constructor() {
        super();
        this.image = './Assets/Images/15.jpg';
    }
    set raincoat(r) {
        this._raincoat = r;
    }
    get raincoat() { return this._raincoat; }
    ;
    set price(p) {
        if (p < Coat.minPrice || p > Coat.maxPrice) {
            throw new Error(priceError);
        }
        else {
            this._price = p;
        }
        ;
    }
    get price() { return this._price; }
    ;
    displayDetails(element) {
        element.innerHTML += this.brand + lB;
        element.innerHTML += 'Price: ' + this.price + 'ILS' + lB;
        element.innerHTML += 'Size: ' + this.size + lB;
        element.innerHTML += 'Color: ' + this.color + lB;
        element.innerHTML += 'Thickness: ' + this.thickness + ' (in meters)' + lB;
        element.innerHTML += 'Rainproof: ' + this.raincoat + lB;
        let imgBox = document.createElement('img');
        imgBox.className = 'itemImg';
        element.appendChild(imgBox);
        this.displayImage(imgBox);
        element.innerHTML += '<hr>' + lB;
    }
}
Coat.minPrice = 299;
Coat.maxPrice = 999;
