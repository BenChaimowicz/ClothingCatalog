"use strict";
class Shirt extends Item {
    set color(c) {
        let match = false;
        for (let i = 0; i < Shirt.shirtColors.length; i++) {
            if (c === Shirt.shirtColors[i]) {
                match = true;
                this._color = c;
                break;
            }
            ;
        }
        if (match == false) {
            throw new Error(colorError);
        }
    }
    set sleeveLength(sl) {
        if (sl > Shirt.maxSleeveLength || sl < Shirt.minSleeveLength) {
            throw new Error(lengthError);
        }
        else {
            this._sleeveLength = sl;
        }
        ;
    }
    set size(s) {
        if (s > Shirt.maxShirtSize || s < Shirt.minShirtSize) {
            throw new Error(sizeError);
        }
        else {
            this._size = s;
        }
        ;
    }
}
Shirt.shirtColors = ['Red', 'Blue', 'Black', 'White', 'Yellow', 'Green', 'Pink', 'Purple'];
Shirt.maxShirtSize = 44;
Shirt.minShirtSize = 34;
Shirt.maxSleeveLength = 1.2;
Shirt.minSleeveLength = 0;
class TShirt extends Shirt {
    set text(txt) {
        if (txt != '' || txt != undefined) {
            this._text = txt;
        }
        else {
            this._text = null;
        }
        ;
    }
}
class ButtonedShirt extends Shirt {
    set buttons(b) {
        if (b < ButtonedShirt.minButtonCount || b > ButtonedShirt.maxButtonCount) {
            throw new Error(ButtonedShirt.buttonError);
        }
        else {
            this._buttons = b;
        }
        ;
    }
}
ButtonedShirt.buttonError = 'Invalid button number!';
ButtonedShirt.minButtonCount = 4;
ButtonedShirt.maxButtonCount = 7;
class WomenShirt extends Shirt {
    set fabric(f) {
        let match = false;
        for (let i = 0; i < WomenShirt.shirtFabrics.length; i++) {
            if (f === WomenShirt.shirtFabrics[i]) {
                match = true;
                this._fabric = f;
                break;
            }
        }
        if (match == false) {
            throw new Error(fabricError);
        }
        ;
    }
}
WomenShirt.shirtFabrics = ['Cotton', 'Wool', 'Linen', 'Polyester'];
