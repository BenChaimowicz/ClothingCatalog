"use strict";
class Manufacturers {
    static modelsByManufacturer(manu) {
        for (let i = 0; i < Manufacturers.ManufacturerList.length; i++) {
            if (manu === Manufacturers.ManufacturerList[i].name) {
                return Manufacturers.ManufacturerList[i].models;
            }
        }
    }
}
Manufacturers.ManufacturerList = [];
class Manufacturer {
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
