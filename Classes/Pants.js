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
    set ripped(r) {
        this._ripped = r;
    }
    get ripped() {
        return this._ripped;
    }
}
class RegularPants extends Pants {
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
}
RegularPants.minPockets = 2;
RegularPants.maxPockets = 8;
class Shorts extends Pants {
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
}
Shorts.minLength = 0.2;
Shorts.maxLength = 0.5;
Shorts.fabrics = ['Cotton', 'Polyester', 'Khaki', 'Rayon', 'Linen'];
