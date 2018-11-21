abstract class Glasses extends Item{
    private _frameColor: string;
}
class SunGlasses extends Glasses {
    private _glassColor: string;
}
class OpticGlasses extends Glasses{
    private _readDist: number;
}