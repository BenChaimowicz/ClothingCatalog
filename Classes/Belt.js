"use strict";
class Belt extends Item {
    constructor() {
        super();
        this.image = './Assets/Images/18.jpg';
        this._beltDim = new Dimensions();
    }
    set price(p) {
        if (p < Belt.minPrice || p > Belt.maxPrice) {
            throw new Error(priceError);
        }
        else {
            this._price = p;
        }
        ;
    }
    get price() { return this._price; }
    ;
    set beltColor(bc) {
        if (Belt.BeltColors.findIndex(ele => { return ele === bc; }) > -1) {
            this._beltColor = bc;
        }
        else {
            throw new Error(colorError);
        }
        ;
    }
    get beltColor() { return this._beltColor; }
    ;
    set buckleColor(bc) {
        if (Belt.BuckleColors.findIndex(ele => { return ele === bc; }) > -1) {
            this._buckleColor = bc;
        }
        else {
            throw new Error(colorError);
        }
        ;
    }
    get buckleColor() { return this._buckleColor; }
    ;
    set buckleMaterial(bm) {
        if (Belt.BuckleMaterials.findIndex(ele => { return ele === bm; }) > -1) {
            this._buckleMat = bm;
        }
        else {
            throw new Error(materialError);
        }
        ;
    }
    get buckleMaterial() { return this._buckleMat; }
    ;
    set beltDimensions(bdm) { this._beltDim = bdm; }
    ;
    get beltDimensions() { return this._beltDim; }
    ;
    displayDetails(element) {
        element.innerHTML += this.brand + lB;
        element.innerHTML += 'Price: ' + this.price + lB;
        element.innerHTML += 'Color: ' + this.beltColor + lB;
        element.innerHTML += 'Buckle info: ' + this.buckleColor + ' ' + this.buckleMaterial + lB;
        element.innerHTML += 'Dimensions in meters: (L/W/H)' + this.beltDimensions.length + '/' + this.beltDimensions.width + '/' + this.beltDimensions.height + lB;
        let imgBox = document.createElement('img');
        imgBox.className = 'itemImg';
        element.appendChild(imgBox);
        this.displayImage(imgBox);
        element.innerHTML += '<hr>' + lB;
    }
}
Belt.BeltColors = ['Black', 'Brown', 'Dark Green', 'Dark Blue', 'Gray'];
Belt.BuckleColors = ['Silver', 'Black', 'Gray', 'Gold'];
Belt.BuckleMaterials = ['Gold', 'Plastic', 'Copper', 'Iron', 'Steel', 'Silver', 'Iron'];
Belt.minPrice = 99;
Belt.maxPrice = 199;
class Dimensions {
    set length(l) {
        if (l > Dimensions.maxLength || l < Dimensions.minLength) {
            throw new Error('Invalid belt length!');
        }
        else {
            this._length = l;
        }
        ;
    }
    set width(w) {
        if (w > Dimensions.maxWidth || w < Dimensions.minWidth) {
            throw new Error('Invalid belt width!');
        }
        else {
            this._width = w;
        }
        ;
    }
    set height(h) {
        if (h > Dimensions.maxHeight || h < Dimensions.minHeight) {
            throw new Error('Invalid belt height!');
        }
        else {
            this._height = h;
        }
        ;
    }
}
Dimensions.minLength = 0.5;
Dimensions.maxLength = 2;
Dimensions.minWidth = 0;
Dimensions.maxWidth = 0.3;
Dimensions.minHeight = 0;
Dimensions.maxHeight = 0.3;
