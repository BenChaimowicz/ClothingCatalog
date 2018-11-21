abstract class Shoes extends Item{
    private _color: string;
    private _madeIn: string;
    private _size: number;
}

class ElegantShoes extends Shoes {
    private _laces: boolean;
    private _material: string;
}
class SportShoes extends Shoes{
    private _laces: boolean;
    private _manufactureDate: Date;
}
class ComfyShoes extends Shoes {
    private _laces: boolean;
    private _orthopedic: boolean;
}
class Heels extends Shoes {
    private _heelType: string;
}