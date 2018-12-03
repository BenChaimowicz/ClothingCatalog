abstract class WomenClothes extends Item {
    private _color: string;
    private _perimeter: number;
    private _size: number;

    public static readonly wColors: string[] = ['White', 'Black', 'Blue', 'Red', 'Yellow', 'Pink', 'Purple', 'Green', 'Orange'];
    public static readonly minPerimiter: number = 48;
    public static readonly maxPerimiter: number = 80;
    public static readonly minSize: number = 34;
    public static readonly maxSize: number = 48;

    public set color(c: string) {
        if (WomenClothes.wColors.findIndex(ind => { return ind === c }) > -1) {
            this._color = c;
        } else { throw new Error(colorError); };
    }
    public get color(): string { return this._color };
    public set perimiter(p: number) {
        if (p < WomenClothes.minPerimiter || p > WomenClothes.maxPerimiter) {
            throw new Error(perimiterError);
        } else { this._perimeter = p };
    }
    public get perimiter(): number { return this._perimeter };
    public set size(s: number) {
        if (s < WomenClothes.minSize || s > WomenClothes.maxSize) {
            throw new Error(sizeError);
        } else { this._size = s };
    }
    public get size(): number { return this._size };
}

class Skirt extends WomenClothes{
    private _isLongSkirt: boolean;

    public static readonly minPrice: number = 59;
    public static readonly maxPrice: number = 199;

    constructor() {
        super();
        this.image = './Assets/Images/07.jpg';
    }
    public set longSkirt(s: boolean) { this._isLongSkirt = s };
    public get longSkirt(): boolean { return this._isLongSkirt };
    public set price(p: number) {
        if (p < Skirt.minPrice || p > Skirt.maxPrice) {
            throw new Error(priceError);
        } else { this.price = p };
    }
    public displayDetails(element: HTMLDivElement) {

        element.innerHTML += this.brand + lB;
        element.innerHTML += 'Price: ' + this.price + lB;
        element.innerHTML += 'Color: ' + this.color + lB;
        element.innerHTML += 'Perimiter: ' + this.perimiter  + lB;
        element.innerHTML += 'Long Skirt: ' + this.longSkirt + lB;
        let imgBox: HTMLImageElement = document.createElement('img');
        imgBox.className = 'itemImg';
        element.appendChild(imgBox);
        this.displayImage(imgBox);
        element.innerHTML += '</hr>' + lB;
    }
}
class Dress extends WomenClothes{
    private _dressLength: number;
    private _bareBack: boolean;

    public static readonly minLength: number = 1;
    public static readonly maxLength: number = 1.8;
    public static readonly minPrice: number = 199;
    public static readonly maxPrice: number = 999;

    constructor() {
        super();
        this.image = './Assets/Images/08.jpg';
    }
    public set dressLength(l: number) {
        if (l < Dress.minLength || l > Dress.maxLength) {
            throw new Error(lengthError);
        } else { this._dressLength = l };
    }
    public get dressLength(): number { return this._dressLength };
    public set bareback(b: boolean) { this._bareBack = b };
    public get bareback(): boolean { return this._bareBack };
    public set price(p: number) {
        if (p < Dress.minPrice || p > Dress.maxPrice) {
            throw new Error(priceError);
        } else { this.price = p };
    }
    public displayDetails(element: HTMLDivElement) {
 
        element.innerHTML += this.brand + lB;
        element.innerHTML += 'Price: ' + this.price + lB;
        element.innerHTML += 'Color: ' + this.color + lB;
        element.innerHTML += 'Perimiter: ' + this.perimiter  + lB;
        element.innerHTML += 'Dress Length: ' + this.dressLength + lB;
        element.innerHTML += 'Bare Back: ' + this.bareback + lB;
        let imgBox: HTMLImageElement = document.createElement('img') as HTMLImageElement;
        imgBox.className = 'itemImg';
        element.appendChild(imgBox);
        this.displayImage(imgBox);
        element.innerHTML += '</hr>' + lB;
    }
}
class NightDress extends Dress{
    private _fabric: string;

    public static readonly NDressFabrics: string[] = ['Silk', 'Cotton', 'Polyester', 'Wool', 'Linen'];
    public static readonly minPrice: number = 499;
    public static readonly maxPrice: number = 3499;

    constructor() {
        super();
        this.image = './Assets/Images/09.jpg';
    }

    public set fabric(f: string) {
        if (NightDress.NDressFabrics.findIndex(fa => { return fa === f }) > -1) {
            this._fabric = f;
        } else { throw new Error(fabricError) };
    }
    public get fabric(): string { return this._fabric };
    public set price(p: number) {
        if (p < NightDress.minPrice || p > NightDress.maxPrice) {
            throw new Error(priceError);
        } else { this.price = p };
    }
    public displayDetails(element: HTMLDivElement) {

        element.innerHTML += this.brand + lB;
        element.innerHTML += 'Price: ' + this.price + lB;
        element.innerHTML += 'Color: ' + this.color + lB;
        element.innerHTML += 'Perimiter: ' + this.perimiter  + lB;
        element.innerHTML += 'Dress Length: ' + this.dressLength + lB;
        element.innerHTML += 'Bare Back: ' + this.bareback + lB;
        element.innerHTML += 'Fabric: ' + this.fabric + lB;
        let imgBox: HTMLImageElement = document.createElement('img') as HTMLImageElement;
        imgBox.className = 'itemImg';
        element.appendChild(imgBox);
        this.displayImage(imgBox);
        element.innerHTML += '</hr>' + lB;
    }
}