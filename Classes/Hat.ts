abstract class Hat extends Item {
    private _color: string;
    private _diameter: number;
    private _size: number;
}
class Cap extends Hat {
    private _ad: boolean;
}
class TopHat extends Hat {
    private height: number;
}