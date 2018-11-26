"use strict";
class Belt extends Item {
    constructor() {
        super();
        this._beltDim = new Dimensions();
    }
    set price(a) {
        if (a <= 0 || a > 300) {
            throw new Error('Invalid price for this product!');
        }
        else {
            this.price = a;
        }
        ;
    }
    get price() { return this.price; }
    ;
    set beltColor(bc) {
        if (Belt.BeltColors.findIndex(ele => { return ele === bc; }) > 0) {
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
        if (Belt.BuckleColors.findIndex(ele => { return ele === bc; }) > 0) {
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
        if (Belt.BuckleMaterials.findIndex(ele => { return ele === bm; }) > 0) {
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
}
Belt.BeltColors = ['Black', 'Brown', 'Dark Green', 'Dark Blue', 'Gray'];
Belt.BuckleColors = ['Silver', 'Black', 'Gray', 'Gold'];
Belt.BuckleMaterials = ['Gold', 'Plastic', 'Copper', 'Iron', 'Steel', 'Silver', 'Iron'];
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
