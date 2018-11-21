"use strict";
class Glasses extends Item {
    set price(a) {
        if (a <= 0 || a > 2000) {
            throw new Error(priceError);
        }
        else {
            this.price = a;
        }
        ;
    }
}
class SunGlasses extends Glasses {
}
class OpticGlasses extends Glasses {
}
