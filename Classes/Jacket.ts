abstract class Jacket extends Item {
    private _color: string;
    private _thickness: number;
    private _size: number;

    public static readonly JacketColors: string[] = ['Brown', 'White', 'Black', 'Dark Blue', 'Green', 'Gray'];
    public static readonly minThickness: number = 0.01;
    public static readonly maxThickness: number = 0.08;
    public static readonly minSize: number = 36;
    public static readonly maxSize: number = 52;

    public set color(c: string) {
        if (Jacket.JacketColors.findIndex(ele => { return ele === c }) > -1) {
            this._color = c;
        } else { throw new Error(colorError) };
    }
    public get color() { return this._color };
    public set thickness(t: number) {
        if (t < Jacket.minThickness || t > Jacket.maxThickness) {
            throw new Error(thicknessError);
        } else { this._thickness = t };
    }
    public get thickness(): number { return this._thickness };
    public set size(s: number) {
        if (s < Jacket.minSize || s > Jacket.maxSize) {
            throw new Error(sizeError);
        } else { this._size = s };
    }
    public get size(): number { return this._size };
}
class Blazer extends Jacket{
    private _pockets: number;

    public static readonly minPockets: number = 0;
    public static readonly maxPockets: number = 6;
    public static readonly minPrice: number = 499;
    public static readonly maxPrice: number = 999;

    constructor() {
        super();
        this.image = './Assets/Images/14.jpg';
    }
    public set pockets(p: number) {
        if (p < Blazer.minPockets || p > Blazer.maxPockets) {
            throw new Error(pocketError);
        } else { this._pockets = p };
    }
    public get pockets(): number { return this._pockets };
    public set price(p: number) {
        if (p < Blazer.minPrice || p > Blazer.maxPrice) {
            throw new Error(priceError);
        } else { this._price = p };
    }
    public get price(): number { return this._price };
    public displayDetails(element: HTMLDivElement) {
        element.innerHTML += this.brand + lB;
        element.innerHTML += 'Price: ' + this.price + lB;
        element.innerHTML += 'Color: ' + this.color + lB;
        element.innerHTML += 'Thickness: ' + this.thickness + ' (in meters)' + lB;
        element.innerHTML += 'Pockets: ' + this.pockets + lB;
        let imgBox: HTMLImageElement = document.createElement('img') as HTMLImageElement;
        imgBox.className = 'itemImg';
        element.appendChild(imgBox);
        this.displayImage(imgBox);
        element.innerHTML += '<hr>' + lB;
    }
}
class Coat extends Jacket{
    private _raincoat: boolean;

    public static readonly minPrice: number = 299;
    public static readonly maxPrice: number = 999;

    constructor() {
        super();
        this.image = './Assets/Images/15.jpg';
    }
    public set raincoat(r: boolean) {
        this._raincoat = r;
    }
    public get raincoat(): boolean { return this._raincoat };
    public set price(p: number) {
        if (p < Coat.minPrice || p > Coat.maxPrice) {
            throw new Error(priceError);
        } else { this._price = p };
    }
    public get price(): number { return this._price };
    public displayDetails(element: HTMLDivElement) {

        element.innerHTML += this.brand + lB;
        element.innerHTML += 'Price: ' + this.price + lB;
        element.innerHTML += 'Color: ' + this.color + lB;
        element.innerHTML += 'Thickness: ' + this.thickness + ' (in meters)' + lB;
        element.innerHTML += 'Rainproof: ' + this.raincoat + lB;
        let imgBox: HTMLImageElement = document.createElement('img') as HTMLImageElement;
        imgBox.className = 'itemImg';
        element.appendChild(imgBox);
        this.displayImage(imgBox);
        element.innerHTML += '<hr>' + lB;
    }
}