abstract class Manufacturers {
    public static ManufacturerList: Manufacturer[] = [];

    public static modelsByManufacturer(manu: string): string[]{
        for (let i = 0; i < Manufacturers.ManufacturerList.length; i++){
            if (manu === Manufacturers.ManufacturerList[i].name) {
                return Manufacturers.ManufacturerList[i].models;
            }
        }
    }
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

