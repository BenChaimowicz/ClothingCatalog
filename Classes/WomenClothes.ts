abstract class WomenClothes extends Item {
    private _color: string;
    private _perimeter: number;
    private _size: number;
}
class Skirt extends WomenClothes{
    private _skirtType: string;
}
class Dress extends WomenClothes{
    private _dressLength: number;
    private _bareBack: boolean;
}
class NightDress extends Dress{
    private _fabric: string;
}