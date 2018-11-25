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
        if (WomenClothes.wColors.findIndex(ind => { return ind === c }) > 0) {
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

    public set longSkirt(s: boolean) { this._isLongSkirt = s };
    public get longSkirt(): boolean { return this._isLongSkirt };
}
class Dress extends WomenClothes{
    private _dressLength: number;
    private _bareBack: boolean;

    public static readonly minLength: number = 1;
    public static readonly maxLength: number = 1.8;

    public set dressLength(l: number) {
        if (l < Dress.minLength || l > Dress.maxLength) {
            throw new Error(lengthError);
        } else { this._dressLength = l };
    }
    public get dressLength(): number { return this._dressLength };
    public set bareback(b: boolean) { this._bareBack = b };
    public get bareback(): boolean { return this._bareBack };
}
class NightDress extends Dress{
    private _fabric: string;

    public static readonly NDressFabrics: string[] = ['Silk', 'Cotton', 'Polyester', 'Wool', 'Linen'];

    public set fabric(f: string) {
        if (NightDress.NDressFabrics.findIndex(fa => { return fa === f }) > 0) {
            this._fabric = f;
        } else { throw new Error(fabricError) };
    }
    public get fabric(): string { return this._fabric };
}