const possibleManufacturerNames:string[] = ['Melvin Fine', 'Rolo', 'Gastro', 'A2M', 'Barf Lauren', 'Lance', 'Dongy Middlefinger'];
const possibleModelNames: string[] = ['Amore', 'Le Hate', 'Poopon', 'Bleh', 'Tre', 'Coup', 'Manly', 'Femme', 'Pedot', 'Bourbon', 'Canale','Piss','Urtne','Haggis'];

class Generator { 
    constructor() {
        this.createManufacturers();
    }

    private createManufacturers() {
        for (let i = 0; i < possibleManufacturerNames.length; i++) {
            let manufacturer: Manufacturer = new Manufacturer();
            manufacturer.name = possibleManufacturerNames[i];
            manufacturer.addModel(this.randomFromArray(possibleModelNames, true));
            manufacturer.addModel(this.randomFromArray(possibleModelNames, true));
            Manufacturers.ManufacturerList.push(manufacturer);
        }
    }

    public getRandomItem(){
        let item: any = this.createItemType();
        // Shirts
        item instanceof TShirt ? this.createTShirt(item) : null;
        item instanceof ButtonedShirt ? this.createBShirt(item) : null;
        item instanceof WomenShirt ? this.createWShirt(item) : null;
        // Pants
        item instanceof Jeans ? this.createJeans(item) : null;
        item instanceof RegularPants ? this.createRPants(item) : null;
        item instanceof Shorts ? this.createShorts(item) : null;
        // Dresses
        item instanceof Skirt ? this.createSkirt(item) : null;
        item instanceof Dress ? this.createDress(item) : null;
        item instanceof NightDress ? this.createNDress(item) : null;
        // Jackets
        item instanceof Blazer ? this.createBlazer(item) : null;
        item instanceof Coat ? this.createCoat(item) : null;
        // Hats
        item instanceof Cap ? this.createCap(item) : null;
        item instanceof TopHat ? this.createTHat(item) : null;
        // Belt
        item instanceof Belt ? this.createBelt(item) : null;
        // Glasses
        item instanceof SunGlasses ? this.createSunGlasses(item) : null;
        item instanceof OpticGlasses ? this.createOpticGlassses(item) : null;
    }

    private randomFromArray(arr: any[], del: boolean = false): any {
        let rnd: number = (Math.floor(Math.random() * (arr.length)));
        if (del == true) {
            let item: any = arr.splice(rnd, 1);
            return item;
        } else { return arr[rnd] };
    }

    private getRandomNumber(min: number, max: number): any {
        let rnd: any = (Math.floor(Math.random() * (max - min + 1) + min));
        if (min != 0 && max != 1) {
            return rnd;
        } else {
            if (rnd > 0) { return true; }
            else { return false;}
        }
    }

    private createItemType() : any {
        let num: number = this.getRandomNumber(1, 20);
        switch (num) {
            case 1:
                return new TShirt();
            case 2:
                return new ButtonedShirt();
            case 3:
                return new WomenShirt();
            case 4:
                return new Jeans();
            case 5:
                return new RegularPants();
            case 6:
                return new Shorts();
            case 7:
                return new Skirt();
            case 8:
                return new Dress();
            case 9:
                return new NightDress();
            case 10:
                return new ElegantShoes();
            case 11:
                return new SportShoes();
            case 12:
                return new ComfyShoes();
            case 13:
                return new Heels();
            case 14:
                return new Blazer();
            case 15:
                return new Coat();
            case 16:
                return new Cap();
            case 17:
                return new TopHat();
            case 18:
                return new Belt();
            case 19:
                return new SunGlasses();
            case 20:
                return new OpticGlasses();
        }
    }

    private shirtStandards(shirt: Shirt) {
        shirt.manufacturer = this.randomFromArray(Manufacturers.ManufacturerList);
        shirt.model = this.randomFromArray(Manufacturers.modelsByManufacturer(shirt.manufacturer));
        shirt.size = this.getRandomNumber(Shirt.minShirtSize, Shirt.maxShirtSize);
        shirt.color = this.randomFromArray(Shirt.shirtColors);
        shirt.sleeveLength = this.getRandomNumber(Shirt.minSleeveLength, Shirt.maxSleeveLength);
    }
    private createTShirt(tshirt: TShirt) {
        this.shirtStandards(tshirt);
        tshirt.text = this.randomFromArray(TShirt.TShirtText);
    }
    private createBShirt(bshirt: ButtonedShirt) {
        this.shirtStandards(bshirt);
        bshirt.buttons = this.getRandomNumber(ButtonedShirt.minButtonCount, ButtonedShirt.maxButtonCount);
    }
    private createWShirt(wshirt: WomenShirt) {
        this.shirtStandards(wshirt);
        wshirt.fabric = this.randomFromArray(WomenShirt.shirtFabrics);
    }
    private pantsStandards(pants: Pants) {
        pants.manufacturer = this.randomFromArray(Manufacturers.ManufacturerList);
        pants.model = this.randomFromArray(Manufacturers.modelsByManufacturer(pants.manufacturer));
        pants.size = this.getRandomNumber(Pants.minSize, Pants.maxSize);
        pants.color = this.randomFromArray(Pants.pantsColors);
        pants.pantLength = this.getRandomNumber(Pants.minLength, Pants.maxLength);
    }
    private createJeans(jeans: Jeans) {
        this.pantsStandards(jeans);
        if (this.getRandomNumber(0, 1) > 0) {
            jeans.ripped = true;
        } else { jeans.ripped = false; };
    }
    private createRPants(rPants: RegularPants) {
        this.pantsStandards(rPants);
        rPants.pockets = this.getRandomNumber(RegularPants.minPockets, RegularPants.maxPockets);
    }
    private createShorts(shorts: Shorts) {
        this.pantsStandards(shorts);
        shorts.pantLength = this.getRandomNumber(Shorts.minLength, Shorts.maxLength);
        shorts.fabric = this.randomFromArray(Shorts.fabrics);
    }
    private womenClothesStandards(c: WomenClothes) {
        c.manufacturer = this.randomFromArray(Manufacturers.ManufacturerList);
        c.model = this.randomFromArray(Manufacturers.modelsByManufacturer(c.manufacturer));
        c.color = this.randomFromArray(WomenClothes.wColors);
        c.size = this.getRandomNumber(WomenClothes.minSize, WomenClothes.maxSize);
        c.perimiter = this.getRandomNumber(WomenClothes.minPerimiter, WomenClothes.maxPerimiter);
    }
    private createSkirt(skirt: Skirt) {
        this.womenClothesStandards(skirt);
        skirt.longSkirt = this.getRandomNumber(0, 1);
    }
    private createDress(dress: Dress) {
        this.womenClothesStandards(dress);
        dress.dressLength = this.getRandomNumber(Dress.minLength, Dress.maxLength);
        dress.bareback = this.getRandomNumber(0, 1);
    }
    private createNDress(nDress: NightDress) {
        this.createDress(nDress);
        nDress.fabric = this.randomFromArray(NightDress.NDressFabrics);
    }
    private jacketStandards(jacket: Jacket) {
        jacket.manufacturer = this.randomFromArray(Manufacturers.ManufacturerList);
        jacket.model = this.randomFromArray(Manufacturers.modelsByManufacturer(jacket.manufacturer));
        jacket.color = this.randomFromArray(Jacket.JacketColors);
        jacket.size = this.getRandomNumber(Jacket.minSize, Jacket.maxSize);
        jacket.thickness = this.getRandomNumber(Jacket.minThickness,Jacket.maxThickness);
    }
    private createBlazer(blazer: Blazer) {
        this.jacketStandards(blazer);
        blazer.pockets = this.getRandomNumber(Blazer.minPockets, Blazer.maxPockets);
    }
    private createCoat(coat: Coat) {
        this.jacketStandards(coat);
        coat.raincoat = this.getRandomNumber(0, 1);
    }
}