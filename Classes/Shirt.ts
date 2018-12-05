abstract class Shirt extends Item {
    private _color: string;
    private _sleeveLength: number;
    private _size: number;

    public static readonly shirtColors: string[] = ['Red', 'Blue', 'Black', 'White', 'Yellow', 'Green', 'Pink', 'Purple'];
    public static readonly maxShirtSize: number = 44;
    public static readonly minShirtSize: number = 34;
    public static readonly maxSleeveLength: number = 1.2;
    public static readonly minSleeveLength: number = 0;

    public set color(c: string) {
        if (Shirt.shirtColors.findIndex(ele => ele === c) > -1) {
            this._color = c;
        } else { throw new Error(colorError) };
    }
    public get color(): string { return this._color };
    public set sleeveLength(sl: number) {
        if (sl > Shirt.maxSleeveLength || sl < Shirt.minSleeveLength) {
            throw new Error(lengthError);
        } else { this._sleeveLength = sl };
    }
    public get sleeveLength(): number { return this._sleeveLength };
    public set size(s: number) {
        if (s > Shirt.maxShirtSize || s < Shirt.minShirtSize) {
            throw new Error(sizeError);
        } else { this._size = s };
    }
    public get size(): number { return this._size };
}

class TShirt extends Shirt {
    private _name: string = 'T-Shirt';
    private _text: string;

    public static readonly TShirtText: string[] = ['Go', 'Hello', 'Goodbye', 'Fuck Off', null];
    public static readonly minPrice: number = 29;
    public static readonly maxPrice: number = 149;

    constructor() {
        super();
        this.image = './Assets/Images/01.jpg';
    }
    public get name(): string { return this._name };
    public set text(txt: string) {
        if (txt != '' || txt != undefined) {
            this._text = txt;
        } else { this._text = null };
    }
    public get text(): string { return this._text };
    public set price(p: number) {
        if (p < TShirt.minPrice || p > TShirt.maxPrice) {
            throw new Error(priceError);
        } else { this._price = p };
    }
    public get price(): number { return this._price };
    public displayDetails(element: HTMLDivElement) {

        element.innerHTML += this.brand + lB;
        element.innerHTML += 'Price: ' + this.price + 'ILS' + lB;
        element.innerHTML += 'Size: ' + this.size + lB;
        element.innerHTML += 'Color: ' + this.color + lB;
        element.innerHTML += 'Sleeve Length: ' + this.sleeveLength + ' (in meters)' + lB;
        element.innerHTML += 'Printed Text: ' + this.text + lB;
        let imgBox: HTMLImageElement = document.createElement('img') as HTMLImageElement;
        imgBox.className = 'itemImg';
        element.appendChild(imgBox);
        this.displayImage(imgBox);
        element.innerHTML += '<hr>' + lB;
    }
}
class ButtonedShirt extends Shirt {
    private _name: string = 'Buttoned Shirt';
    private _buttons: number;

    public static readonly buttonError: string = 'Invalid button number!';
    public static readonly minButtonCount: number = 4;
    public static readonly maxButtonCount: number = 7;
    public static readonly minPrice: number = 89;
    public static readonly maxPrice: number = 299;

    constructor() {
        super();
        this.image = './Assets/Images/02.jpg';
    }
    public get name(): string { return this._name };
    public set buttons(b: number) {
        if (b < ButtonedShirt.minButtonCount || b > ButtonedShirt.maxButtonCount) {
            throw new Error(ButtonedShirt.buttonError);
        } else { this._buttons = b };
    }
    public get buttons(): number { return this._buttons };
    public set price(p: number) {
        if (p < ButtonedShirt.minPrice || p > ButtonedShirt.maxPrice) {
            throw new Error(priceError);
        } else { this._price = p };
    }
    public get price(): number { return this._price };
    public displayDetails(element: HTMLDivElement) {
        element.innerHTML += this.brand + lB;
        element.innerHTML += 'Price: ' + this.price + 'ILS' + lB;
        element.innerHTML += 'Size: ' + this.size + lB;
        element.innerHTML += 'Color: ' + this.color + lB;
        element.innerHTML += 'Sleeve Length: ' + this.sleeveLength + ' (in meters)' + lB;
        element.innerHTML += 'Buttons: ' + this.buttons + lB;
        let imgBox: HTMLImageElement = document.createElement('img') as HTMLImageElement;
        imgBox.className = 'itemImg';
        element.appendChild(imgBox);
        this.displayImage(imgBox);
        element.innerHTML += '<hr>' + lB;
    }
}
class WomenShirt extends Shirt {
    private _name: string = "Woman Shirt";
    private _fabric: string;

    public static readonly shirtFabrics: string[] = ['Cotton', 'Wool', 'Linen', 'Polyester'];
    public static readonly minPrice: number = 29;
    public static readonly maxPrice: number = 189;

    constructor() {
        super();
        this.image = './Assets/Images/03.jpg';
    }
    public get name(): string { return this._name };
    public set fabric(f: string) {
        if (WomenShirt.shirtFabrics.findIndex(ele => ele === f) > -1) {
            this._fabric = f;
        } else { throw new Error(fabricError) };
    }
    public get fabric(): string { return this._fabric };
    public set price(p: number) {
        if (p < WomenShirt.minPrice || p > WomenShirt.maxPrice) {
            throw new Error(priceError);
        } else { this._price = p };
    }
    public get price(): number { return this._price };
    public displayDetails(element: HTMLDivElement) {

        element.innerHTML += this.brand + lB;
        element.innerHTML += 'Price: ' + this.price + 'ILS' + lB;
        element.innerHTML += 'Size: ' + this.size + lB;
        element.innerHTML += 'Color: ' + this.color + lB;
        element.innerHTML += 'Sleeve Length: ' + this.sleeveLength + ' (in meters)' + lB;
        element.innerHTML += 'Fabric: ' + this.fabric + lB;
        let imgBox: HTMLImageElement = document.createElement('img') as HTMLImageElement;
        imgBox.className = 'itemImg';
        element.appendChild(imgBox);
        this.displayImage(imgBox);
        element.innerHTML += '<hr>' + lB;
    }
}

