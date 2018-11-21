abstract class Glasses extends Item{
    private _frameColor: string;

    public set price(a: number) {
        if (a <= 0 || a > 2000) {
            throw new Error(priceError);
        } else { this.price = a };
    }
}
class SunGlasses extends Glasses {
    private _glassColor: string;
}
class OpticGlasses extends Glasses{
    private _readDist: number;
}