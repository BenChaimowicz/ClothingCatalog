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

const shirtColors: string[] = ['Red', 'Blue', 'Black', 'White', 'Yellow', 'Green', 'Pink', 'Purple'];
const maxShirtSize: number = 44;
const minShirtSize: number = 34;
const shirtFabrics: string[] = ['Cotton', 'Wool', 'Linen', 'Polyester'];
const minButtonCount: number = 4;
const maxButtonCount: number = 7;
const possibleText: string[] = [null, 'Im with Stupid', 'Something to write', 'Ask me anything', 'Ugly'];