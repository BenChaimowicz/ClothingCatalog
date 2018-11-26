abstract class Item {
    private _manufacturer: string;
    private _model: string;
    private _price: number;
    private _imageURL: string;
    private static VAT: number;

    constructor() {
        Item.VAT = 17;
    }
    public set manufacturer(m: string) {
        if (m == '' || m == undefined) {
            throw new Error(emptyError);
        } else { this._manufacturer = m };
    }
    public get manufacturer(): string { return this._manufacturer };
    public set model(m: string) {
        if (m == '' || m == undefined) {
            throw new Error(emptyError);
        } else { this._model = m };
    }
    public get model(): string { return this._model };
    public set price(a: number) {
        if (a > 0) {
            this._price = a;
        } else { throw new Error('Price cannot be 0 or lower!') };
    }
    public get price(): number { return this._price };
    public set image(img: string) { this._imageURL = img };
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