"use strict";
class Manufacturers {
    static modelsByManufacturer(manu) {
        console.log(manu);
        let modelIndex = Manufacturers.ManufacturerList.findIndex(ele => { console.log(ele.name); return (ele.name === manu); });
        if (modelIndex === -1) {
            throw new Error('Not found in array!');
        }
        else {
            return Manufacturers.ManufacturerList[modelIndex].models;
        }
        ;
    }
}
Manufacturers.ManufacturerList = [];
class Manufacturer {
    constructor() {
        this._models = [];
    }
    set name(n) {
        if (n != null || n != '') {
            this._name = n;
        }
        else {
            this._name = 'Anonymous';
        }
        ;
    }
    get name() {
        return this._name;
    }
    addModel(model) {
        this._models.push(model);
    }
    get models() {
        return this._models;
    }
}
