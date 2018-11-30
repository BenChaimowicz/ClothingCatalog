class Manufacturers {
    public static ManufacturerList: Manufacturer[] = [];

    public static modelsByManufacturer(manu: string): string[] {
        console.log(manu);        
        let modelIndex: number = Manufacturers.ManufacturerList.findIndex(ele => { console.log(ele.name); return (ele.name === manu) });
        if (modelIndex === -1) { throw new Error('Not found in array!') }
        else { return Manufacturers.ManufacturerList[modelIndex].models };
    }
}

class Manufacturer {
    private _name: string;
    private _models: string[] = [];

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

