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
        let match: boolean = false;
        for (let i = 0; i < Shirt.shirtColors.length; i++){
            if (c === Shirt.shirtColors[i]) {
                match = true;
                this._color = c;
                break;
            };
        }
        if (match == false) { throw new Error(colorError);}
    }
    public set sleeveLength(sl: number) {
        if (sl > Shirt.maxSleeveLength || sl < Shirt.minSleeveLength) {
            throw new Error(lengthError);
        } else { this._sleeveLength = sl };
    }
    public set size(s: number) {
        if (s > Shirt.maxShirtSize || s < Shirt.minShirtSize) {
            throw new Error(sizeError);
        } else { this._size = s };
    }
}

class TShirt extends Shirt {
    private _text: string;

    public static readonly TShirtText: string[] = ['Go', 'Hello', 'Goodbye', 'Fuck Off', null];
    public static readonly minPrice: number = 29;
    public static readonly maxPrice: number = 149;

    constructor() {
        super();
        this.image = '../Assets/Images/01.jpg';
    }
    public set text(txt: string) {
        if (txt != '' || txt != undefined) {
            this._text = txt;
        } else { this._text = null };
    }
    public get text(): string { return this._text };
    public set price(p: number) {
        if (p < TShirt.minPrice || p > TShirt.maxPrice) {
            throw new Error(priceError);
        } else { this.price = p };
    }
}
class ButtonedShirt extends Shirt {
    private _buttons: number;

    public static readonly buttonError: string = 'Invalid button number!';
    public static readonly minButtonCount: number = 4;
    public static readonly maxButtonCount: number = 7;
    public static readonly minPrice: number = 89;
    public static readonly maxPrice: number = 299;

    constructor() {
        super();
        this.image = '../Assets/Images/02.jpg';
    }
    public set buttons(b: number) {
        if (b < ButtonedShirt.minButtonCount || b > ButtonedShirt.maxButtonCount) {
            throw new Error(ButtonedShirt.buttonError);
        } else { this._buttons = b };
    }
    public get buttons(): number { return this._buttons };
    public set price(p: number) {
        if (p < ButtonedShirt.minPrice || p > ButtonedShirt.maxPrice) {
            throw new Error(priceError);
        } else { this.price = p };
    }
}
class WomenShirt extends Shirt {
    private _fabric: string;

    public static readonly shirtFabrics: string[] = ['Cotton', 'Wool', 'Linen', 'Polyester'];
    public static readonly minPrice: number = 29;
    public static readonly maxPrice: number = 189;

    constructor() {
        super();
        this.image = '../Assets/Images/03.jpg';
    }
    public set fabric(f: string) {
        let match: boolean = false;
        for (let i = 0; i < WomenShirt.shirtFabrics.length; i++){
            if (f === WomenShirt.shirtFabrics[i]) {
                match = true;
                this._fabric = f;
                break;
            }
        }
        if (match == false) { throw new Error(fabricError); };
    }
    public get fabric(): string { return this._fabric };
    public set price(p: number) {
        if (p < WomenShirt.minPrice || p > WomenShirt.maxPrice) {
            throw new Error(priceError);
        } else { this.price = p };
    }
}

