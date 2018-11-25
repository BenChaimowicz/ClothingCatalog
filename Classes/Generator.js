"use strict";
const possibleManufacturerNames = ['Melvin Fine', 'Rolo', 'Gastro', 'A2M', 'Barf Lauren', 'Lance', 'Dongy Middlefinger'];
const possibleModelNames = ['Amore', 'Le Hate', 'Poopon', 'Bleh', 'Tre', 'Coup', 'Manly', 'Femme', 'Pedot', 'Bourbon', 'Canale', 'Piss', 'Urtne', 'Haggis'];
class Generator {
    constructor() {
        this.createManufacturers();
    }
    createManufacturers() {
        for (let i = 0; i < possibleManufacturerNames.length; i++) {
            let manufacturer = new Manufacturer();
            manufacturer.name = possibleManufacturerNames[i];
            manufacturer.addModel(this.randomFromArray(possibleModelNames, true));
            manufacturer.addModel(this.randomFromArray(possibleModelNames, true));
            Manufacturers.ManufacturerList.push(manufacturer);
        }
    }
    getRandomItem() {
        let item = this.createItemType();
        item instanceof TShirt ? this.createTShirt(item) : null;
        item instanceof ButtonedShirt ? this.createBShirt(item) : null;
        item instanceof WomenShirt ? this.createWShirt(item) : null;
        item instanceof Jeans ? this.createJeans(item) : null;
        item instanceof RegularPants ? this.createRPants(item) : null;
        item instanceof Shorts ? this.createShorts(item) : null;
        item instanceof Skirt ? this.createSkirt(item) : null;
        item instanceof Dress ? this.createDress(item) : null;
        item instanceof NightDress ? this.createNDress(item) : null;
        item instanceof Blazer ? this.createBlazer(item) : null;
        item instanceof Coat ? this.createCoat(item) : null;
        item instanceof Cap ? this.createCap(item) : null;
        item instanceof TopHat ? this.createTHat(item) : null;
        item instanceof Belt ? this.createBelt(item) : null;
        item instanceof SunGlasses ? this.createSunGlasses(item) : null;
        item instanceof OpticGlasses ? this.createOpticGlassses(item) : null;
    }
    randomFromArray(arr, del = false) {
        let rnd = (Math.floor(Math.random() * (arr.length)));
        if (del == true) {
            let item = arr.splice(rnd, 1);
            return item;
        }
        else {
            return arr[rnd];
        }
        ;
    }
    getRandomNumber(min, max) {
        return (Math.floor(Math.random() * (max - min + 1) + min));
    }
    createItemType() {
        let num = this.getRandomNumber(1, 20);
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
    shirtStandards(shirt) {
        shirt.manufacturer = this.randomFromArray(Manufacturers.ManufacturerList);
        shirt.model = this.randomFromArray(Manufacturers.modelsByManufacturer(shirt.manufacturer));
        shirt.size = this.getRandomNumber(Shirt.minShirtSize, Shirt.maxShirtSize);
        shirt.color = this.randomFromArray(Shirt.shirtColors);
        shirt.sleeveLength = this.getRandomNumber(Shirt.minSleeveLength, Shirt.maxSleeveLength);
    }
    createTShirt(tshirt) {
        this.shirtStandards(tshirt);
        tshirt.text = this.randomFromArray(TShirt.TShirtText);
    }
    createBShirt(bshirt) {
        this.shirtStandards(bshirt);
        bshirt.buttons = this.getRandomNumber(ButtonedShirt.minButtonCount, ButtonedShirt.maxButtonCount);
    }
    createWShirt(wshirt) {
        this.shirtStandards(wshirt);
        wshirt.fabric = this.randomFromArray(WomenShirt.shirtFabrics);
    }
    pantsStandards(pants) {
        pants.manufacturer = this.randomFromArray(Manufacturers.ManufacturerList);
        pants.model = this.randomFromArray(Manufacturers.modelsByManufacturer(pants.manufacturer));
        pants.size = this.getRandomNumber(Pants.minSize, Pants.maxSize);
        pants.color = this.randomFromArray(Pants.pantsColors);
        pants.pantLength = this.getRandomNumber(Pants.minLength, Pants.maxLength);
    }
    createJeans(jeans) {
        this.pantsStandards(jeans);
        if (this.getRandomNumber(0, 1) > 0) {
            jeans.ripped = true;
        }
        else {
            jeans.ripped = false;
        }
        ;
    }
    createRPants(rPants) {
        this.pantsStandards(rPants);
        rPants.pockets = this.getRandomNumber(RegularPants.minPockets, RegularPants.maxPockets);
    }
    createShorts(shorts) {
        this.pantsStandards(shorts);
        shorts.pantLength = this.getRandomNumber(Shorts.minLength, Shorts.maxLength);
        shorts.fabric = this.randomFromArray(Shorts.fabrics);
    }
    womenClothesStandards(c) {
        c.manufacturer = this.randomFromArray(Manufacturers.ManufacturerList);
        c.model = this.randomFromArray(Manufacturers.modelsByManufacturer(c.manufacturer));
    }
}
