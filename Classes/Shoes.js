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
    constructor() {
        super();
        this.image = '../Assets/Images/10.jpg';
    }
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
    set price(p) {
        if (p < ElegantShoes.minPrice || p > ElegantShoes.maxPrice) {
            throw new Error(priceError);
        }
        else {
            this.price = p;
        }
        ;
    }
    displayDetails(element) {
        let imgBox = document.createElement('img');
        imgBox.className = 'itemImg';
        element.appendChild(imgBox);
        element.innerHTML += this.brand + lB;
        element.innerHTML += 'Price: ' + this.price + lB;
        element.innerHTML += 'Color: ' + this.color + lB;
        element.innerHTML += 'Made in: ' + this.madeIn + lB;
        element.innerHTML += 'Laces: ' + this.laces + lB;
        element.innerHTML += 'Material: ' + this.material + lB;
        this.displayImage(imgBox);
        element.innerHTML += '</hr>' + lB;
    }
}
ElegantShoes.eShoesMaterials = ['Leather', 'Cotton', 'Linen', 'Wood', 'Suede'];
ElegantShoes.minPrice = 249;
ElegantShoes.maxPrice = 999;
class SportShoes extends Shoes {
    constructor() {
        super();
        this.image = '../Assets/Images/11.jpg';
    }
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
    set price(p) {
        if (p < SportShoes.minPrice || p > SportShoes.maxPrice) {
            throw new Error(priceError);
        }
        else {
            this.price = p;
        }
        ;
    }
    displayDetails(element) {
        let imgBox = document.createElement('img');
        imgBox.className = 'itemImg';
        element.appendChild(imgBox);
        element.innerHTML += this.brand + lB;
        element.innerHTML += 'Price: ' + this.price + lB;
        element.innerHTML += 'Color: ' + this.color + lB;
        element.innerHTML += 'Made in: ' + this.madeIn + lB;
        element.innerHTML += 'Laces: ' + this.laces + lB;
        element.innerHTML += 'Manufacture Date: ' + this.manufactureDate + lB;
        this.displayImage(imgBox);
        element.innerHTML += '</hr>' + lB;
    }
}
SportShoes.minPrice = 199;
SportShoes.maxPrice = 699;
class ComfyShoes extends Shoes {
    constructor() {
        super();
        this.image = '../Assets/Images/12.jpg';
    }
    set laces(l) { this._laces = l; }
    ;
    get laces() { return this._laces; }
    ;
    set orthopedic(o) { this._orthopedic = o; }
    ;
    get orthopedic() { return this._orthopedic; }
    ;
    set price(p) {
        if (p < ComfyShoes.minPrice || p > ComfyShoes.maxPrice) {
            throw new Error(priceError);
        }
        else {
            this.price = p;
        }
        ;
    }
    displayDetails(element) {
        let imgBox = document.createElement('img');
        imgBox.className = 'itemImg';
        element.appendChild(imgBox);
        element.innerHTML += this.brand + lB;
        element.innerHTML += 'Price: ' + this.price + lB;
        element.innerHTML += 'Color: ' + this.color + lB;
        element.innerHTML += 'Made in: ' + this.madeIn + lB;
        element.innerHTML += 'Laces: ' + this.laces + lB;
        element.innerHTML += 'Orthopedic: ' + this.orthopedic + lB;
        this.displayImage(imgBox);
        element.innerHTML += '</hr>' + lB;
    }
}
ComfyShoes.minPrice = 199;
ComfyShoes.maxPrice = 399;
class Heels extends Shoes {
    constructor() {
        super();
        this.image = '../Assets/Images/13.jpg';
    }
    set heel(h) {
        if (Heels.HeelTypes.findIndex(ele => { return ele === h; }) > 0) {
            this._heelType = h;
        }
        else {
            throw new Error(heelError);
        }
        ;
    }
    set price(p) {
        if (p < Heels.minPrice || p > Heels.maxPrice) {
            throw new Error(priceError);
        }
        else {
            this.price = p;
        }
        ;
    }
    displayDetails(element) {
        let imgBox = document.createElement('img');
        imgBox.className = 'itemImg';
        element.appendChild(imgBox);
        element.innerHTML += this.brand + lB;
        element.innerHTML += 'Price: ' + this.price + lB;
        element.innerHTML += 'Color: ' + this.color + lB;
        element.innerHTML += 'Made in: ' + this.madeIn + lB;
        element.innerHTML += 'Heel Height: ' + this.heel + lB;
        this.displayImage(imgBox);
        element.innerHTML += '</hr>' + lB;
    }
}
Heels.HeelTypes = ['Low', 'Medium', 'High'];
Heels.minPrice = 149;
Heels.maxPrice = 1299;
