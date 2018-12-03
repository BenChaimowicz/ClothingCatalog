class Belt extends Item {
    private _beltColor: string;
    private _buckleColor: string;
    private _buckleMat: string;
    private _beltDim: Dimensions;

    public static readonly BeltColors: string[] = ['Black', 'Brown', 'Dark Green', 'Dark Blue', 'Gray'];
    public static readonly BuckleColors: string[] = ['Silver', 'Black', 'Gray', 'Gold'];
    public static readonly BuckleMaterials: string[] = ['Gold', 'Plastic', 'Copper', 'Iron', 'Steel', 'Silver', 'Iron'];
    public static readonly minPrice: number = 99;
    public static readonly maxPrice: number = 199;

    constructor() {
        super();
        this.image = './Assets/Images/18.jpg';
        this._beltDim = new Dimensions();
    }

    public set price(p: number) {
        if (p < Belt.minPrice || p > Belt.maxPrice) {
            throw new Error(priceError);
        } else { this.price = p };
    }
    public set beltColor(bc: string) {
        if (Belt.BeltColors.findIndex(ele => { return ele === bc }) >-1) {
            this._beltColor = bc;
        } else { throw new Error(colorError) };
    }
    public get beltColor(): string { return this._beltColor };
    public set buckleColor(bc: string) {
        if (Belt.BuckleColors.findIndex(ele => { return ele === bc }) > -1) {
            this._buckleColor = bc;
        } else { throw new Error(colorError) };
    }
    public get buckleColor(): string { return this._buckleColor };
    public set buckleMaterial(bm: string) {
        if (Belt.BuckleMaterials.findIndex(ele => { return ele === bm }) >-1) {
            this._buckleMat = bm;
        } else { throw new Error(materialError) };
    }
    public get buckleMaterial(): string { return this._buckleMat };
    public set beltDimensions(bdm: Dimensions) { this._beltDim = bdm };
    public get beltDimensions(): Dimensions { return this._beltDim };

    public displayDetails(element: HTMLDivElement) {

        element.innerHTML += this.brand + lB;
        element.innerHTML += 'Price: ' + this.price + lB;
        element.innerHTML += 'Color: ' + this.beltColor + lB;
        element.innerHTML += 'Buckle info: ' + this.buckleColor + ' ' + this.buckleMaterial + lB;
        element.innerHTML += 'Dimensions in meters: (L/W/H)' + this.beltDimensions.length + '/' + this.beltDimensions.width + '/' + this.beltDimensions.height + lB;
        let imgBox: HTMLImageElement = document.createElement('img');
        imgBox.className = 'itemImg';
        element.appendChild(imgBox);
        this.displayImage(imgBox);
        element.innerHTML += '</hr>' + lB;
    }
}
class Dimensions {
    private _length: number;
    private _width: number;
    private _height: number;

    public static readonly minLength: number = 0.5;
    public static readonly maxLength: number = 2;
    public static readonly minWidth: number = 0;
    public static readonly maxWidth: number = 0.3;
    public static readonly minHeight: number = 0;
    public static readonly maxHeight: number = 0.3;

    public set length(l: number) {
        if (l > Dimensions.maxLength || l < Dimensions.minLength) {
            throw new Error('Invalid belt length!');
        } else { this._length = l };
    }
    public set width(w: number) {
        if (w > Dimensions.maxWidth || w < Dimensions.minWidth) {
            throw new Error('Invalid belt width!');
        } else { this._width = w };
    }
    public set height(h: number) {
        if (h > Dimensions.maxHeight || h < Dimensions.minHeight) {
            throw new Error('Invalid belt height!');
        } else { this._height = h };
    }
}