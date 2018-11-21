"use strict";
class Belt extends Item {
    set price(a) {
        if (a <= 0 || a > 300) {
            throw new Error('Invalid price for this product!');
        }
        else {
            this.price = a;
        }
        ;
    }
}
class Dimensions {
    set length(l) {
        if (l > 2 || l < 0.5) {
            throw new Error('Invalid belt length!');
        }
        else {
            this._length = l;
        }
        ;
    }
    set width(w) {
        if (w > 0.3 || w <= 0) {
            throw new Error('Invalid belt width!');
        }
        else {
            this._width = w;
        }
        ;
    }
    set height(h) {
        if (h > 0.3 || h <= 0) {
            throw new Error('Invalid belt height!');
        }
        else {
            this._height = h;
        }
        ;
    }
}
