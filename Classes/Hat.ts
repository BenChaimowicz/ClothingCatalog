abstract class Hat extends Item {
    private _color: string;
    private _diameter: number;
    private _size: number;

    public static readonly HatColors: string[] = ['Black', 'Red', 'Blue', 'Green', 'White', 'Gray', 'Brown'];
    public static readonly minDiameter: number = 45;
    public static readonly maxDiameter: number = 70;
    public static readonly minSize: number = Hat.minDiameter;
    public static readonly maxSize: number = Hat.maxDiameter;

    public set color(c: string) {
        if (Hat.HatColors.findIndex(ele => { return ele === c }) > 0) {
            this._color = c;
        } else { throw new Error(colorError) };
    }
    public get color(): string { return this._color };
    public set setDiameterAndSize(d: number) {
        if (d < Hat.minDiameter || d > Hat.maxDiameter) {
            throw new Error(sizeError);
        } else { this._diameter = d; this._size = d };
    }
    public get getDiameter(): number { return this._diameter };
    public get getSize(): number { return this._size };
}
class Cap extends Hat {
    private _ad: boolean;

    public static readonly minPrice: number = 29;
    public static readonly maxPrice: number = 99;

    constructor() {
        super();
        this.image = '../Assets/Images/16.jpg';
    }
    public set ad(ad: boolean) { this._ad = ad };
    public get ad(): boolean { return this._ad };
    public set price(p: number) {
        if (p < Cap.minPrice || p > Cap.maxPrice) {
            throw new Error(priceError);
        } else { this.price = p };
    }
    public displayDetails(element: HTMLDivElement) {
        let imgBox: HTMLImageElement = document.createElement('img');
        imgBox.className = 'itemImg';
        element.appendChild(imgBox);
        element.innerHTML += this.brand + lB;
        element.innerHTML += 'Price: ' + this.price + lB;
        element.innerHTML += 'Color: ' + this.color + lB;
        element.innerHTML += 'Diameter: ' + this.getDiameter + ' (in meters)' + lB;
        element.innerHTML += 'Printed Advertisement: ' + this.ad + lB;
        this.displayImage(imgBox);
        element.innerHTML += '</hr>' + lB;
    }
}
class TopHat extends Hat {
    private _height: number;

    public static readonly minHeight: number = 0.2;
    public static readonly maxHeight: number = 0.8;
    public static readonly minPrice: number = 69;
    public static readonly maxPrice: number = 199;

    constructor() {
        super();
        this.image = '../Assets/Images/17.jpg';
    }
    public set height(h: number) {
        if (h < TopHat.minHeight || h > TopHat.maxHeight) {
            throw new Error(heightError);
        } else { this._height = h };
    }
    public get height(): number { return this._height };
    public set price(p: number) {
        if (p < TopHat.minPrice || p > TopHat.maxPrice) {
            throw new Error(priceError);
        } else { this.price = p };
    }
    public displayDetails(element: HTMLDivElement) {
        let imgBox: HTMLImageElement = document.createElement('img');
        imgBox.className = 'itemImg';
        element.appendChild(imgBox);
        element.innerHTML += this.brand + lB;
        element.innerHTML += 'Price: ' + this.price + lB;
        element.innerHTML += 'Color: ' + this.color + lB;
        element.innerHTML += 'Diameter: ' + this.getDiameter + ' (in meters)' + lB;
        element.innerHTML += 'Height: ' + this.height + lB;
        this.displayImage(imgBox);
        element.innerHTML += '</hr>' + lB;
    }
}