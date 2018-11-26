"use strict";
class Jacket extends Item {
    set color(c) {
        if (Jacket.JacketColors.findIndex(ele => { return ele === c; }) > 0) {
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
        this.image = '../Assets/Images/14.jpg';
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
}
Blazer.minPockets = 0;
Blazer.maxPockets = 6;
class Coat extends Jacket {
    constructor() {
        super();
        this.image = '../Assets/Images/15.jpg';
    }
    set raincoat(r) {
        this._raincoat = r;
    }
    get raincoat() { return this._raincoat; }
    ;
}
