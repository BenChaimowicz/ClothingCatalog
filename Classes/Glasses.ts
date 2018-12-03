abstract class Glasses extends Item{
    private _frameColor: string;

    public static readonly GlassColors: string[] = ['Black', 'White', 'Red', 'Brown', 'Silver', 'Gold'];


    public set frameColor(fc: string) {
        if (Glasses.GlassColors.findIndex(ele => { return ele === fc }) > -1) {
            this._frameColor = fc;
        } else { throw new Error(colorError) };
    }
    public get frameColor(): string { return this._frameColor };
}
class SunGlasses extends Glasses {
    private _glassColor: string;

    public static readonly ShadeColors: string[] = ['Black', 'Yellow', 'Red', 'Blue', 'Rainbow'];
    public static readonly minPrice: number = 99;
    public static readonly maxPrice: number = 499;

    constructor() {
        super();
        this.image = './Assets/Images/19.jpg';
    }
    public set glassColor(gc: string) {
        if (SunGlasses.ShadeColors.findIndex(ele => { return ele === gc }) > -1) {
            this._glassColor = gc;
        } else { throw new Error(colorError) };
    }
    public get glassColor(): string { return this._glassColor };
    public set price(p: number) {
        if (p < SunGlasses.minPrice || p > SunGlasses.maxPrice) {
            throw new Error(priceError);
        } else { this.price = p };
    }
    public displayDetails(element: HTMLDivElement) {
        element.innerHTML += this.brand + lB;
        element.innerHTML += 'Price: ' + this.price + lB;
        element.innerHTML += 'Frame Color: ' + this.frameColor + lB;
        element.innerHTML += 'Shade Color: ' + this.glassColor + lB;
        let imgBox: HTMLImageElement = document.createElement('img');
        imgBox.className = 'itemImg';
        element.appendChild(imgBox);
        this.displayImage(imgBox);
        element.innerHTML += '</hr>' + lB;
    }
}
class OpticGlasses extends Glasses{
    private _readDist: number;

    public static readonly minReadDistance: number = 0.2;
    public static readonly maxReadDistance: number = 3;
    public static readonly minPrice: number = 299;
    public static readonly maxPrice: number = 1299;

    constructor() {
        super();
        this.image = './Assets/Images/20.jpg';
    }
    public set readDistance(rd: number) {
        if (rd < OpticGlasses.minReadDistance || rd > OpticGlasses.maxReadDistance) {
            throw new Error(distanceError);
        } else { this._readDist = rd };
    }
    public get readDistance(): number { return (this._readDist) };
    public set price(p: number) {
        if (p < OpticGlasses.minPrice || p > OpticGlasses.maxPrice) {
            throw new Error(priceError);
        } else { this.price = p };
    }
    public displayDetails(element: HTMLDivElement) {
        element.innerHTML += this.brand + lB;
        element.innerHTML += 'Price: ' + this.price + lB;
        element.innerHTML += 'Frame Color: ' + this.frameColor + lB;
        element.innerHTML += 'Recommended Reading Distance: ' + this.readDistance + ' Meters' + lB;
        let imgBox: HTMLImageElement = document.createElement('img');
        imgBox.className = 'itemImg';
        element.appendChild(imgBox);
        this.displayImage(imgBox);
        element.innerHTML += '</hr>' + lB;
    }
}