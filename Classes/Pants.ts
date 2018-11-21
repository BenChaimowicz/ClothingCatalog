abstract class Pants extends Item {
    private _color: string;
    private _pantLength: number;
    private _size: number;
}
class Jeans extends Pants {
    private _ripped: boolean;
}
class RegularPants extends Pants {
    private _pockets: number;
}
class Shorts extends Pants {
    private _fabric: string;
}