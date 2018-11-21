abstract class Item {
    private _manufacturer: string;
    private _model: string;
    private _price: number;
    private _imageURL: string;
    private static VAT: number;

    constructor() {
        Item.VAT = 17;
    }
    
    public set price(a: number) {
        a > 0 ? (this._price = a) : new Error('Price cannot be 0 or lower!');
    }
    
    public displayDetails() {
        
    }

    public displayImage() {
        
    }

    public getPriceWithoutVAT(): number{
        return (this.price / (1 + Item.VAT / 100))
    }

    public get brand(): string {
        return (
            'This is ' + this._model + ' by ' + this._manufacturer
        )
    }
}