abstract class Shoes extends Item{
    private _color: string;
    private _madeIn: string;
    private _size: number;

    public static readonly ShoeColors: string[] = ['Black', 'Blue', 'Red', 'Dark Blue', 'Brown', 'White'];
    public static readonly Countries: string[] = ['China', 'Italy', 'Israel', 'USA', 'Germany', 'Taiwan', 'Vietnam', 'India'];
    public static readonly minSize: number = 34;
    public static readonly maxSize: number = 46;

    public set color(c: string) {
        if (Shoes.ShoeColors.findIndex(ele => { return ele === c }) > -1) {
            this._color = c;
        } else { throw new Error(colorError) };
    }
    public get color(): string { return this._color };
    public set madeIn(mi: string) {
        if (Shoes.Countries.findIndex(ele => { return ele === mi }) > -1) {
            this._madeIn = mi;
        } else { throw new Error(countryError) };
    }
    public get madeIn(): string { return this._madeIn };
    public set size(s: number) {
        if (s < Shoes.minSize || s > Shoes.maxSize) {
            throw new Error(sizeError);
        } else { this._size = s };
    }
    public get size(): number { return this._size };
}

class ElegantShoes extends Shoes {
    private _laces: boolean;
    private _material: string;

    public static readonly eShoesMaterials: string[] = ['Leather', 'Cotton', 'Linen', 'Wood', 'Suede'];
    public static readonly minPrice: number = 249;
    public static readonly maxPrice: number = 999;

    constructor() {
        super();
        this.image = './Assets/Images/10.jpg';
    }
    public set laces(l: boolean) { this._laces = l };
    public get laces(): boolean { return this._laces };
    public set material(m: string) {
        if (ElegantShoes.eShoesMaterials.findIndex(ele => { return ele === m }) > -1) {
            this._material = m;
        } else { throw new Error(materialError) };
    }
    public get material(): string { return this._material };
    public set price(p: number) {
        if (p < ElegantShoes.minPrice || p > ElegantShoes.maxPrice) {
            throw new Error(priceError);
        } else { this._price = p };
    }
    public get price(): number { return this._price };
    public displayDetails(element: HTMLDivElement) {

        element.innerHTML += this.brand + lB;
        element.innerHTML += 'Price: ' + this.price + 'ILS' + lB;
        element.innerHTML += 'Size: ' + this.size + lB;
        element.innerHTML += 'Color: ' + this.color + lB;
        element.innerHTML += 'Made in: ' + this.madeIn  + lB;
        element.innerHTML += 'Laces: ' + this.laces + lB;
        element.innerHTML += 'Material: ' + this.material + lB;
        let imgBox: HTMLImageElement = document.createElement('img') as HTMLImageElement;
        imgBox.className = 'itemImg';
        element.appendChild(imgBox);
        this.displayImage(imgBox);
        element.innerHTML += '<hr>' + lB;
    }
}

class SportShoes extends Shoes{
    private _laces: boolean;
    private _manufactureDate: Date;

    public static readonly minPrice: number = 199;
    public static readonly maxPrice: number = 699;

    constructor() {
        super();
        this.image = './Assets/Images/11.jpg';
    }
    public set laces(l: boolean) { this._laces = l };
    public get laces(): boolean { return this._laces };
    public set manufactureDate(date: Date) {
        if (new Date() < date) {
            throw new Error(dateError)
        } else {
            this._manufactureDate = date;
        };
    }
    public get manufactureDateAsString(): string {
        return (this.manufactureDate.getDate() + '/' + this.manufactureDate.getMonth() + '/' + this.manufactureDate.getFullYear());
    }
    public get manufactureDate(): Date { return this._manufactureDate };
    public set price(p: number) {
        if (p < SportShoes.minPrice || p > SportShoes.maxPrice) {
            throw new Error(priceError);
        } else { this._price = p };
    }
    public get price(): number { return this._price };
    public displayDetails(element: HTMLDivElement) {

        element.innerHTML += this.brand + lB;
        element.innerHTML += 'Price: ' + this.price + 'ILS' + lB;
        element.innerHTML += 'Size: ' + this.size + lB;
        element.innerHTML += 'Color: ' + this.color + lB;
        element.innerHTML += 'Made in: ' + this.madeIn  + lB;
        element.innerHTML += 'Laces: ' + this.laces + lB;
        element.innerHTML += 'Manufacture Date: ' + this.manufactureDateAsString + lB;
        let imgBox: HTMLImageElement = document.createElement('img') as HTMLImageElement;
        imgBox.className = 'itemImg';
        element.appendChild(imgBox);
        this.displayImage(imgBox);
        element.innerHTML += '<hr>' + lB;
    }
}
class ComfyShoes extends Shoes {
    private _laces: boolean;
    private _orthopedic: boolean;

    public static readonly minPrice: number = 199;
    public static readonly maxPrice: number = 399;

    constructor() {
        super();
        this.image = './Assets/Images/12.jpg';
    }
    public set laces(l: boolean) { this._laces = l };
    public get laces(): boolean { return this._laces };
    public set orthopedic(o: boolean) { this._orthopedic = o };
    public get orthopedic(): boolean { return this._orthopedic };
    public set price(p: number) {
        if (p < ComfyShoes.minPrice || p > ComfyShoes.maxPrice) {
            throw new Error(priceError);
        } else { this._price = p };
    }
    public get price(): number { return this._price };
    public displayDetails(element: HTMLDivElement) {

        element.innerHTML += this.brand + lB;
        element.innerHTML += 'Price: ' + this.price + 'ILS' + lB;
        element.innerHTML += 'Size: ' + this.size + lB;
        element.innerHTML += 'Color: ' + this.color + lB;
        element.innerHTML += 'Made in: ' + this.madeIn  + lB;
        element.innerHTML += 'Laces: ' + this.laces + lB;
        element.innerHTML += 'Orthopedic: ' + this.orthopedic + lB;
        let imgBox: HTMLImageElement = document.createElement('img') as HTMLImageElement;
        imgBox.className = 'itemImg';
        element.appendChild(imgBox);
        this.displayImage(imgBox);
        element.innerHTML += '<hr>' + lB;
    }
}
class Heels extends Shoes {
    private _heelType: string;

    public static readonly HeelTypes: string[] = ['Low', 'Medium', 'High'];
    public static readonly minPrice: number = 149;
    public static readonly maxPrice: number = 1299;

    constructor() {
        super();
        this.image = './Assets/Images/13.jpg';
    }
    public set heel(h: string) {
        if (Heels.HeelTypes.findIndex(ele => { return ele === h }) > -1) {
            this._heelType = h;
        } else { throw new Error(heelError) };
    }
    public set price(p: number) {
        if (p < Heels.minPrice || p > Heels.maxPrice) {
            throw new Error(priceError);
        } else { this._price = p };
    }
    public get price(): number { return this._price };
    public displayDetails(element: HTMLDivElement) {

        element.innerHTML += this.brand + lB;
        element.innerHTML += 'Price: ' + this.price +'ILS' +  lB;
        element.innerHTML += 'Size: ' + this.size + lB;
        element.innerHTML += 'Color: ' + this.color + lB;
        element.innerHTML += 'Made in: ' + this.madeIn  + lB;
        element.innerHTML += 'Heel Height: ' + this.heel + lB;
        let imgBox: HTMLImageElement = document.createElement('img') as HTMLImageElement;
        imgBox.className = 'itemImg';
        element.appendChild(imgBox);
        this.displayImage(imgBox);
        element.innerHTML += '<hr>' + lB;
    }
}