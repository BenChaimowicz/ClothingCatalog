abstract class Glasses extends Item{
    private _frameColor: string;

    public static readonly GlassColors: string[] = ['Black', 'White', 'Red', 'Brown', 'Silver', 'Gold'];

    public set price(a: number) {
        if (a <= 0 || a > 2000) {
            throw new Error(priceError);
        } else { this.price = a };
    }
    public get price(): number { return this.price };
    public set frameColor(fc: string) {
        if (Glasses.GlassColors.findIndex(ele => { return ele === fc }) > 0) {
            this._frameColor = fc;
        } else { throw new Error(colorError) };
    }
    public get frameColor(): string { return this._frameColor };
}
class SunGlasses extends Glasses {
    private _glassColor: string;

    public static readonly ShadeColors: string[] = ['Black', 'Yellow', 'Red', 'Blue', 'Rainbow'];

    public set glassColor(gc: string) {
        if (SunGlasses.ShadeColors.findIndex(ele => { return ele === gc }) > 0) {
            this._glassColor = gc;
        } else { throw new Error(colorError) };
    }
}
class OpticGlasses extends Glasses{
    private _readDist: number;

    public static readonly minReadDistance: number = 0.2;
    public static readonly maxReadDistance: number = 3;

    public set readDistance(rd: number) {
        if (rd < OpticGlasses.minReadDistance || rd > OpticGlasses.maxReadDistance) {
            throw new Error(distanceError);
        } else { this._readDist = rd };
    }
}