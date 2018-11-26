"use strict";
class Shoes extends Item {
    set color(c) {
        if (Shoes.ShoeColors.findIndex(ele => { return ele === c; }) > 0) {
            this._color = c;
        }
        else {
            throw new Error(colorError);
        }
        ;
    }
    get color() { return this._color; }
    ;
    set madeIn(mi) {
        if (Shoes.Countries.findIndex(ele => { return ele === mi; }) > 0) {
            this._madeIn = mi;
        }
        else {
            throw new Error(countryError);
        }
        ;
    }
    get madeIn() { return this._madeIn; }
    ;
    set size(s) {
        if (s < Shoes.minSize || s > Shoes.maxSize) {
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
Shoes.ShoeColors = ['Black', 'Blue', 'Red', 'Dark Blue', 'Brown', 'White'];
Shoes.Countries = ['China', 'Italy', 'Israel', 'USA', 'Germany', 'Taiwan', 'Vietnam', 'India'];
Shoes.minSize = 34;
Shoes.maxSize = 46;
class ElegantShoes extends Shoes {
    set laces(l) { this._laces = l; }
    ;
    get laces() { return this._laces; }
    ;
    set material(m) {
        if (ElegantShoes.eShoesMaterials.findIndex(ele => { return ele === m; }) > 0) {
            this._material = m;
        }
        else {
            throw new Error(materialError);
        }
        ;
    }
    get material() { return this._material; }
    ;
}
ElegantShoes.eShoesMaterials = ['Leather', 'Cotton', 'Linen', 'Wood', 'Suede'];
class SportShoes extends Shoes {
    set laces(l) { this._laces = l; }
    ;
    get laces() { return this._laces; }
    ;
    set manufactureDate(date) {
        if (new Date() < date) {
            throw new Error(dateError);
        }
        else {
            this._manufactureDate = date;
        }
        ;
    }
    get manufactureDate() { return this._manufactureDate; }
    ;
}
class ComfyShoes extends Shoes {
    set laces(l) { this._laces = l; }
    ;
    get laces() { return this._laces; }
    ;
    set orthopedic(o) { this._orthopedic = o; }
    ;
    get orthopedic() { return this._orthopedic; }
    ;
}
class Heels extends Shoes {
    set heel(h) {
        if (Heels.HeelTypes.findIndex(ele => { return ele === h; }) > 0) {
            this._heelType = h;
        }
        else {
            throw new Error(heelError);
        }
        ;
    }
}
Heels.HeelTypes = ['Low', 'Medium', 'High'];
