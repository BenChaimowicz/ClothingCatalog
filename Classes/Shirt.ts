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

    public set text(txt: string) {
        if (txt != '' || txt != undefined) {
            this._text = txt;
        } else { this._text = null };
    }
}
class ButtonedShirt extends Shirt {
    private _buttons: number;

    public static readonly buttonError: string = 'Invalid button number!';
    public static readonly minButtonCount: number = 4;
    public static readonly maxButtonCount: number = 7;

    public set buttons(b: number) {
        if (b < ButtonedShirt.minButtonCount || b > ButtonedShirt.maxButtonCount) {
            throw new Error(ButtonedShirt.buttonError);
        } else { this._buttons = b };
    }
}
class WomenShirt extends Shirt {
    private _fabric: string;

    public static readonly shirtFabrics: string[] = ['Cotton', 'Wool', 'Linen', 'Polyester'];

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
}

