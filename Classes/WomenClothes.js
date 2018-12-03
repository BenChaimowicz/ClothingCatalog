"use strict";
class WomenClothes extends Item {
    set color(c) {
        if (WomenClothes.wColors.findIndex(ind => { return ind === c; }) > -1) {
            this._color = c;
        }
        else {
            throw new Error(colorError);
        }
        ;
    }
    get color() { return this._color; }
    ;
    set perimiter(p) {
        if (p < WomenClothes.minPerimiter || p > WomenClothes.maxPerimiter) {
            throw new Error(perimiterError);
        }
        else {
            this._perimeter = p;
        }
        ;
    }
    get perimiter() { return this._perimeter; }
    ;
    set size(s) {
        if (s < WomenClothes.minSize || s > WomenClothes.maxSize) {
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
WomenClothes.wColors = ['White', 'Black', 'Blue', 'Red', 'Yellow', 'Pink', 'Purple', 'Green', 'Orange'];
WomenClothes.minPerimiter = 48;
WomenClothes.maxPerimiter = 80;
WomenClothes.minSize = 34;
WomenClothes.maxSize = 48;
class Skirt extends WomenClothes {
    constructor() {
        super();
        this.image = './Assets/Images/07.jpg';
    }
    set longSkirt(s) { this._isLongSkirt = s; }
    ;
    get longSkirt() { return this._isLongSkirt; }
    ;
    set price(p) {
        if (p < Skirt.minPrice || p > Skirt.maxPrice) {
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
        element.innerHTML += 'Color: ' + this.color + lB;
        element.innerHTML += 'Perimiter: ' + this.perimiter + lB;
        element.innerHTML += 'Long Skirt: ' + this.longSkirt + lB;
        let imgBox = document.createElement('img');
        imgBox.className = 'itemImg';
        element.appendChild(imgBox);
        this.displayImage(imgBox);
        element.innerHTML += '</hr>' + lB;
    }
}
Skirt.minPrice = 59;
Skirt.maxPrice = 199;
class Dress extends WomenClothes {
    constructor() {
        super();
        this.image = './Assets/Images/08.jpg';
    }
    set dressLength(l) {
        if (l < Dress.minLength || l > Dress.maxLength) {
            throw new Error(lengthError);
        }
        else {
            this._dressLength = l;
        }
        ;
    }
    get dressLength() { return this._dressLength; }
    ;
    set bareback(b) { this._bareBack = b; }
    ;
    get bareback() { return this._bareBack; }
    ;
    set price(p) {
        if (p < Dress.minPrice || p > Dress.maxPrice) {
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
        element.innerHTML += 'Color: ' + this.color + lB;
        element.innerHTML += 'Perimiter: ' + this.perimiter + lB;
        element.innerHTML += 'Dress Length: ' + this.dressLength + lB;
        element.innerHTML += 'Bare Back: ' + this.bareback + lB;
        let imgBox = document.createElement('img');
        imgBox.className = 'itemImg';
        element.appendChild(imgBox);
        this.displayImage(imgBox);
        element.innerHTML += '</hr>' + lB;
    }
}
Dress.minLength = 1;
Dress.maxLength = 1.8;
Dress.minPrice = 199;
Dress.maxPrice = 999;
class NightDress extends Dress {
    constructor() {
        super();
        this.image = './Assets/Images/09.jpg';
    }
    set fabric(f) {
        if (NightDress.NDressFabrics.findIndex(fa => { return fa === f; }) > -1) {
            this._fabric = f;
        }
        else {
            throw new Error(fabricError);
        }
        ;
    }
    get fabric() { return this._fabric; }
    ;
    set price(p) {
        if (p < NightDress.minPrice || p > NightDress.maxPrice) {
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
        element.innerHTML += 'Color: ' + this.color + lB;
        element.innerHTML += 'Perimiter: ' + this.perimiter + lB;
        element.innerHTML += 'Dress Length: ' + this.dressLength + lB;
        element.innerHTML += 'Bare Back: ' + this.bareback + lB;
        element.innerHTML += 'Fabric: ' + this.fabric + lB;
        let imgBox = document.createElement('img');
        imgBox.className = 'itemImg';
        element.appendChild(imgBox);
        this.displayImage(imgBox);
        element.innerHTML += '</hr>' + lB;
    }
}
NightDress.NDressFabrics = ['Silk', 'Cotton', 'Polyester', 'Wool', 'Linen'];
NightDress.minPrice = 499;
NightDress.maxPrice = 3499;
