abstract class Pants extends Item {
    private _color: string;
    private _pantLength: number;
    private _size: number;

    public static readonly pantsColors: string[] = ['Black', 'Gray', 'Brown', 'Blue', 'Dark Blue', 'Green', 'Khaki'];
    public static readonly minLength: number = 0.2;
    public static readonly maxLength: number = 1.3;
    public static readonly minSize: number = 36;
    public static readonly maxSize: number = 48;

    public set color(c: string) {
        if (Pants.pantsColors.findIndex(ele => ele === c) > -1) {
            this._color = c;
        } else { throw new Error(colorError) };
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

    public static readonly minPrice: number = 149;
    public static readonly maxPrice: number = 349;

    constructor() {
        super();
        this.image = './Assets/Images/04.jpg';
    }
    public set ripped(r: boolean) { this._ripped = r };
    public get ripped(): boolean { return this._ripped };
    public set price(p: number) {
        if (p < Jeans.minPrice || p > Jeans.maxPrice) {
            throw new Error(priceError);
        } else { this.price = p };
    }
    public displayDetails(element: HTMLDivElement) {

        element.innerHTML += this.brand + lB;
        element.innerHTML += 'Price: ' + this.price + lB;
        element.innerHTML += 'Color: ' + this.color + lB;
        element.innerHTML += 'Length: ' + this.pantLength + ' (in meters)' + lB;
        element.innerHTML += 'Ripped: ' + this.ripped + lB;
        let imgBox: HTMLImageElement = document.createElement('img') as HTMLImageElement;
        imgBox.className = 'itemImg';
        element.appendChild(imgBox);
        this.displayImage(imgBox);
        element.innerHTML += '<hr>' + lB;
    }
}
class RegularPants extends Pants {
    private _pockets: number;

    public static readonly minPockets: number = 2;
    public static readonly maxPockets: number = 8;
    public static readonly minPrice: number = 129;
    public static readonly maxPrice: number = 349;

    constructor() {
        super();
        this.image = './Assets/Images/05.jpg';
    }
    public set pockets(po: number) {
        if (po < RegularPants.minPockets || po > RegularPants.maxPockets) {
            throw new Error(pocketError);
        } else { this._pockets = po };
    }
    public get pockets(): number {
        return this._pockets;
    }
    public set price(p: number) {
        if (p < RegularPants.minPrice || p > RegularPants.maxPrice) {
            throw new Error(priceError);
        } else { this.price = p };
    }
    public displayDetails(element: HTMLDivElement) {

        element.innerHTML += this.brand + lB;
        element.innerHTML += 'Price: ' + this.price + lB;
        element.innerHTML += 'Color: ' + this.color + lB;
        element.innerHTML += 'Length: ' + this.pantLength + ' (in meters)' + lB;
        element.innerHTML += 'Pockets: ' + this.pockets + lB;
        let imgBox: HTMLImageElement = document.createElement('img')as HTMLImageElement;
        imgBox.className = 'itemImg';
        element.appendChild(imgBox);
        this.displayImage(imgBox);
        element.innerHTML += '<hr>' + lB;
    }
}
class Shorts extends Pants {
    private _fabric: string;
    private _shortPantLength: number;

    public static readonly minLength: number = 0.2;
    public static readonly maxLength: number = 0.5;
    public static readonly fabrics: string[] = ['Cotton', 'Polyester', 'Khaki', 'Rayon', 'Linen'];
    public static readonly minPrice: number = 99;
    public static readonly maxPrice: number = 199;

    constructor() {
        super();
        this.image = './Assets/Images/06.jpg';
    }
    public set pantLength(pl: number) {
        if (pl < Shorts.minLength || Shorts.maxLength) {
            throw new Error(lengthError);
        } else { this._shortPantLength = pl };
    }
    public get pantLength(): number { return this._shortPantLength };
    public set fabric(f: string) {
        if (Shorts.fabrics.findIndex(function(elem) { return elem === f }) >= 0){
            this._fabric = f;
        } else { throw new Error(fabricError) };
    }
    public get fabric(): string {
        return this._fabric;
    }
    public set price(p: number) {
        if (p < Shorts.minPrice || p > Shorts.maxPrice) {
            throw new Error(priceError);
        } else { this.price = p };
    }
    public displayDetails(element: HTMLDivElement) {
        element.innerHTML += this.brand + lB;
        element.innerHTML += 'Price: ' + this.price + lB;
        element.innerHTML += 'Color: ' + this.color + lB;
        element.innerHTML += 'Length: ' + this.pantLength + ' (in meters)' + lB;
        element.innerHTML += 'Fabric: ' + this.fabric + lB;
        let imgBox: HTMLImageElement = document.createElement('img') as HTMLImageElement;
        imgBox.className = 'itemImg';
        element.appendChild(imgBox);
        this.displayImage(imgBox);
        element.innerHTML += '<hr>' + lB;
    }
}

