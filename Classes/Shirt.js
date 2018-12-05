"use strict";
class Shirt extends Item {
    set color(c) {
        if (Shirt.shirtColors.findIndex(ele => ele === c) > -1) {
            this._color = c;
        }
        else {
            throw new Error(colorError);
        }
        ;
    }
    get color() { return this._color; }
    ;
    set sleeveLength(sl) {
        if (sl > Shirt.maxSleeveLength || sl < Shirt.minSleeveLength) {
            throw new Error(lengthError);
        }
        else {
            this._sleeveLength = sl;
        }
        ;
    }
    get sleeveLength() { return this._sleeveLength; }
    ;
    set size(s) {
        if (s > Shirt.maxShirtSize || s < Shirt.minShirtSize) {
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
Shirt.shirtColors = ['Red', 'Blue', 'Black', 'White', 'Yellow', 'Green', 'Pink', 'Purple'];
Shirt.maxShirtSize = 44;
Shirt.minShirtSize = 34;
Shirt.maxSleeveLength = 1.2;
Shirt.minSleeveLength = 0;
class TShirt extends Shirt {
    constructor() {
        super();
        this.image = './Assets/Images/01.jpg';
    }
    set text(txt) {
        if (txt != '' || txt != undefined) {
            this._text = txt;
        }
        else {
            this._text = null;
        }
        ;
    }
    get text() { return this._text; }
    ;
    set price(p) {
        if (p < TShirt.minPrice || p > TShirt.maxPrice) {
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
        element.innerHTML += 'Sleeve Length: ' + this.sleeveLength + ' (in meters)' + lB;
        element.innerHTML += 'Printed Text: ' + this.text + lB;
        let imgBox = document.createElement('img');
        imgBox.className = 'itemImg';
        element.appendChild(imgBox);
        this.displayImage(imgBox);
        element.innerHTML += '<hr>' + lB;
    }
}
TShirt.TShirtText = ['Go', 'Hello', 'Goodbye', 'Fuck Off', null];
TShirt.minPrice = 29;
TShirt.maxPrice = 149;
class ButtonedShirt extends Shirt {
    constructor() {
        super();
        this.image = './Assets/Images/02.jpg';
    }
    set buttons(b) {
        if (b < ButtonedShirt.minButtonCount || b > ButtonedShirt.maxButtonCount) {
            throw new Error(ButtonedShirt.buttonError);
        }
        else {
            this._buttons = b;
        }
        ;
    }
    get buttons() { return this._buttons; }
    ;
    set price(p) {
        if (p < ButtonedShirt.minPrice || p > ButtonedShirt.maxPrice) {
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
        element.innerHTML += 'Sleeve Length: ' + this.sleeveLength + ' (in meters)' + lB;
        element.innerHTML += 'Buttons: ' + this.buttons + lB;
        let imgBox = document.createElement('img');
        imgBox.className = 'itemImg';
        element.appendChild(imgBox);
        this.displayImage(imgBox);
        element.innerHTML += '<hr>' + lB;
    }
}
ButtonedShirt.buttonError = 'Invalid button number!';
ButtonedShirt.minButtonCount = 4;
ButtonedShirt.maxButtonCount = 7;
ButtonedShirt.minPrice = 89;
ButtonedShirt.maxPrice = 299;
class WomenShirt extends Shirt {
    constructor() {
        super();
        this.image = './Assets/Images/03.jpg';
    }
    set fabric(f) {
        if (WomenShirt.shirtFabrics.findIndex(ele => ele === f) > -1) {
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
        if (p < WomenShirt.minPrice || p > WomenShirt.maxPrice) {
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
        element.innerHTML += 'Sleeve Length: ' + this.sleeveLength + ' (in meters)' + lB;
        element.innerHTML += 'Fabric: ' + this.fabric + lB;
        let imgBox = document.createElement('img');
        imgBox.className = 'itemImg';
        element.appendChild(imgBox);
        this.displayImage(imgBox);
        element.innerHTML += '<hr>' + lB;
    }
}
WomenShirt.shirtFabrics = ['Cotton', 'Wool', 'Linen', 'Polyester'];
WomenShirt.minPrice = 29;
WomenShirt.maxPrice = 189;
