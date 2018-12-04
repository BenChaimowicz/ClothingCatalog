abstract class Item {
    private _manufacturer: string;
    private _model: string;
    private _imageURL: string;
    protected _price: number;
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
    public set image(img: string) { this._imageURL = img };
    public set price(p: number) {
        this._price = p;
    }
    public get price(): number { return this._price };
    public displayDetails(element: HTMLDivElement) {};

    public displayImage(element:HTMLImageElement) {element.src = this._imageURL}

    public getPriceWithoutVAT(): number{
        return (this.price / (1 + Item.VAT / 100))
    }

    public get brand(): string {
        return (
            'This is ' + this._model + ' by ' + this._manufacturer
        )
    }
}