abstract class Shirt extends Item {
    private _color: string;
    private _sleeveLength: number;
    private _size: number;
}

class TShirt extends Shirt {
    private _text: string;
}
class ButtonedShirt extends Shirt {
    private _buttons: number;
}
class WomenShirt extends Shirt {
    private _fabric: string;
}