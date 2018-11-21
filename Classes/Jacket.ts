abstract class Jacket extends Item {
    private _color: string;
    private _thickness: number;
    private _size: number;
}
class Blazer extends Jacket{
    private _pockets: number;
}
class Coat extends Jacket{
    private _raincoat: boolean;
}