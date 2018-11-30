"use strict";
class Pants extends Item {
    set color(c) {
        let match = false;
        for (let i = 0; i < Pants.pantsColors.length; i++) {
            if (c === Pants.pantsColors[i]) {
                match = true;
                this.color = c;
                break;
            }
        }
        if (match === false) {
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
Pants.minLength = 0.3;
Pants.maxLength = 1.3;
Pants.minSize = 36;
Pants.maxSize = 48;
class Jeans extends Pants {
    constructor() {
        super();
        this.image = '../Assets/Images/04.jpg';
    }
    set ripped(r) { this._ripped = r; }
    ;
    get ripped() { return this._ripped; }
    ;
    set price(p) {
        if (p < Jeans.minPrice || p > Jeans.maxPrice) {
            throw new Error(priceError);
        }
        else {
            this.price = p;
        }
        ;
    }
}
Jeans.minPrice = 149;
Jeans.maxPrice = 349;
class RegularPants extends Pants {
    constructor() {
        super();
        this.image = '../Assets/Images/05.jpg';
    }
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
            this.price = p;
        }
        ;
    }
}
RegularPants.minPockets = 2;
RegularPants.maxPockets = 8;
RegularPants.minPrice = 129;
RegularPants.maxPrice = 349;
class Shorts extends Pants {
    constructor() {
        super();
        this.image = '../Assets/Images/06.jpg';
    }
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
            this.price = p;
        }
        ;
    }
}
Shorts.minLength = 0.2;
Shorts.maxLength = 0.5;
Shorts.fabrics = ['Cotton', 'Polyester', 'Khaki', 'Rayon', 'Linen'];
Shorts.minPrice = 99;
Shorts.maxPrice = 199;
