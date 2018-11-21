class Belt extends Item {
    private _beltColor: string;
    private _buckleColor: string;
    private _buckleMat: string;
    private _beltDim: Dimensions;

    public set price(a: number) {
        if (a <= 0 || a > 300) {
            throw new Error('Invalid price for this product!');
        } else { this.price = a };
    }
}
class Dimensions {
    private _length: number;
    private _width: number;
    private _height: number;

    public set length(l: number) {
        if (l > 2 || l < 0.5) {
            throw new Error('Invalid belt length!');
        } else { this._length = l };
    }
    public set width(w: number) {
        if (w > 0.3 || w <= 0) {
            throw new Error('Invalid belt width!');
        } else { this._width = w };
    }
    public set height(h: number) {
        if (h > 0.3 || h <= 0) {
            throw new Error('Invalid belt height!');
        } else { this._height = h };
    }
}