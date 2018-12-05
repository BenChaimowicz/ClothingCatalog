"use strict";
class Pants extends Item {
    set color(c) {
        if (Pants.pantsColors.findIndex(ele => ele === c) > -1) {
            this._color = c;
        }
        else {
            throw new Error(colorError);
        }
        ;
    }
    get color() {
        return this._color;
    }
    set pantLength(plen) {
        if (plen < Pants.minLength || plen > Pants.maxLength) {
            throw new Error(lengthError);
        }
        else {
            this._pantLength = plen;
        }
        ;
    }
    get pantLength() {
        return this._pantLength;
    }
    set size(s) {
        if (s < Pants.minSize || s > Pants.maxSize) {
            throw new Error(sizeError);
        }
        else {
            this._size = s;
        }
        ;
    }
    get size() {
        return this._size;
    }
}
Pants.pantsColors = ['Black', 'Gray', 'Brown', 'Blue', 'Dark Blue', 'Green', 'Khaki'];
Pants.minLength = 0.2;
Pants.maxLength = 1.3;
Pants.minSize = 36;
Pants.maxSize = 48;
class Jeans extends Pants {
    constructor() {
        super();
        this.image = './Assets/Images/04.jpg';
    }
    get name() { return this._name; }
    ;
    set ripped(r) { this._ripped = r; }
    ;
    get ripped() { return this._ripped; }
    ;
    set price(p) {
        if (p < Jeans.minPrice || p > Jeans.maxPrice) {
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
        element.innerHTML += 'Length: ' + this.pantLength + ' (in meters)' + lB;
        element.innerHTML += 'Ripped: ' + this.ripped + lB;
        let imgBox = document.createElement('img');
        imgBox.className = 'itemImg';
        element.appendChild(imgBox);
        this.displayImage(imgBox);
        element.innerHTML += '<hr>' + lB;
    }
}
Jeans.minPrice = 149;
Jeans.maxPrice = 349;
class RegularPants extends Pants {
    constructor() {
        super();
        this._name = 'Regular Pants';
        this.image = './Assets/Images/05.jpg';
    }
    get name() { return this._name; }
    ;
    set pockets(po) {
        if (po < RegularPants.minPockets || po > RegularPants.maxPockets) {
            throw new Error(pocketError);
        }
        else {
            this._pockets = po;
        }
        ;
    }
    get pockets() {
        return this._pockets;
    }
    set price(p) {
        if (p < RegularPants.minPrice || p > RegularPants.maxPrice) {
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
        element.innerHTML += 'Length: ' + this.pantLength + ' (in meters)' + lB;
        element.innerHTML += 'Pockets: ' + this.pockets + lB;
        let imgBox = document.createElement('img');
        imgBox.className = 'itemImg';
        element.appendChild(imgBox);
        this.displayImage(imgBox);
        element.innerHTML += '<hr>' + lB;
    }
}
RegularPants.minPockets = 2;
RegularPants.maxPockets = 8;
RegularPants.minPrice = 129;
RegularPants.maxPrice = 349;
class Shorts extends Pants {
    constructor() {
        super();
        this._name = 'Shorts';
        this.image = './Assets/Images/06.jpg';
    }
    get name() { return this._name; }
    ;
    set pantLength(pl) {
        if (pl < Shorts.minLength || pl > Shorts.maxLength) {
            throw new Error(lengthError);
        }
        else {
            this._shortPantLength = pl;
        }
        ;
    }
    get pantLength() { return this._shortPantLength; }
    ;
    set fabric(f) {
        if (Shorts.fabrics.findIndex(function (elem) { return elem === f; }) >= 0) {
            this._fabric = f;
        }
        else {
            throw new Error(fabricError);
        }
        ;
    }
    get fabric() {
        return this._fabric;
    }
    set price(p) {
        if (p < Shorts.minPrice || p > Shorts.maxPrice) {
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
        element.innerHTML += 'Length: ' + this.pantLength + ' (in meters)' + lB;
        element.innerHTML += 'Fabric: ' + this.fabric + lB;
        let imgBox = document.createElement('img');
        imgBox.className = 'itemImg';
        element.appendChild(imgBox);
        this.displayImage(imgBox);
        element.innerHTML += '<hr>' + lB;
    }
}
Shorts.minLength = 0.2;
Shorts.maxLength = 0.5;
Shorts.fabrics = ['Cotton', 'Polyester', 'Khaki', 'Rayon', 'Linen'];
Shorts.minPrice = 99;
Shorts.maxPrice = 199;
