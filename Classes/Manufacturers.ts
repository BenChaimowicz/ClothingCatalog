abstract class Manufacturers {
    public static ManufacturerList: Manufacturer[] = [];
}

class Manufacturer {
    private _name: string;
    private _models: string[];

    public set name(n: string) {
        if (n != null || n != '') {
            this._name = n;
        } else { this._name = 'Anonymous' };
    }
    public get name(): string{
        return this._name;
    }
    public addModel(model: string) {
        this._models.push(model);
    }
    public get models(): string[]{
        return this._models;
    }
}

