abstract class Pants extends Item {
    private _color: string;
    private _pantLength: number;
    private _size: number;

    public static readonly pantsColors: string[] = ['Black', 'Gray', 'Brown', 'Blue', 'Dark Blue', 'Green', 'Khaki'];
    public static readonly minLength: number = 0.3;
    public static readonly maxLength: number = 1.3;
    public static readonly minSize: number = 36;
    public static readonly maxSize: number = 48;

    public set color(c: string) {
        let match: boolean = false;
        for (let i = 0; i < Pants.pantsColors.length; i++){
            if (c === Pants.pantsColors[i]) {
                match = true;
                this.color = c;
                break;
            }
        }
        if (match === false) { throw new Error(colorError); };
    }
    public get color(): string{
        return this._color;
    }
    public set pantLength(plen: number) {
        if (plen < Pants.minLength || plen > Pants.maxLength) {
            throw new Error(lengthError);
        } else { this._pantLength = plen };
    }
    public get pantLength(): number{
        return this._pantLength;
    }
    public set size(s: number) {
        if (s < Pants.minSize || s > Pants.maxSize) {
            throw new Error(sizeError);
        } else { this._size = s };
    }
    public get size(): number{
        return this._size;
    }
}
class Jeans extends Pants {
    private _ripped: boolean;

    constructor() {
        super();
        this.image = '../Assets/Images/04.jpg';
    }
    public set ripped(r: boolean) {
        this._ripped = r;
    }
    public get ripped(): boolean{
        return this._ripped;
    }
}
class RegularPants extends Pants {
    private _pockets: number;

    public static readonly minPockets: number = 2;
    public static readonly maxPockets: number = 8;

    constructor() {
        super();
        this.image = '../Assets/Images/05.jpg';
    }
    public set pockets(po: number) {
        if (po < RegularPants.minPockets || po > RegularPants.maxPockets) {
            throw new Error(pocketError);
        } else { this._pockets = po };
    }
    public get pockets(): number {
        return this._pockets;
    }
}
class Shorts extends Pants {
    private _fabric: string;

    public static readonly minLength: number = 0.2;
    public static readonly maxLength: number = 0.5;
    public static readonly fabrics: string[] = ['Cotton', 'Polyester', 'Khaki', 'Rayon', 'Linen'];

    constructor() {
        super();
        this.image = '../Assets/Images/06.jpg';
    }
    public set fabric(f: string) {
        if (Shorts.fabrics.findIndex(function(elem) { return elem === f }) >= 0){
            this._fabric = f;
        } else { throw new Error(fabricError) };
    }
    public get fabric(): string {
        return this._fabric;
    }
}

