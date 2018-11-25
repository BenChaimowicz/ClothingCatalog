"use strict";
class WomenClothes extends Item {
    set color(c) {
        if (WomenClothes.wColors.findIndex(ind => { return ind === c; }) > 0) {
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
    set longSkirt(s) { this._isLongSkirt = s; }
    ;
    get longSkirt() { return this._isLongSkirt; }
    ;
}
class Dress extends WomenClothes {
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
}
Dress.minLength = 1;
Dress.maxLength = 1.8;
class NightDress extends Dress {
    set fabric(f) {
        if (NightDress.NDressFabrics.findIndex(fa => { return fa === f; }) > 0) {
            this._fabric = f;
        }
        else {
            throw new Error(fabricError);
        }
        ;
    }
    get fabric() { return this._fabric; }
    ;
}
NightDress.NDressFabrics = ['Silk', 'Cotton', 'Polyester', 'Wool', 'Linen'];
