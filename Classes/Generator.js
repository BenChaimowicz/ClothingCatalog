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
    getRandomItem(index = 0) {
        let item = index != 0 ? this.createItemType(index) : this.createItemType();
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
        // Shoes
        item instanceof ElegantShoes ? this.createEShoes(item) : null;
        item instanceof SportShoes ? this.createSShoes(item) : null;
        item instanceof ComfyShoes ? this.createCShoes(item) : null;
        item instanceof Heels ? this.createHeels(item) : null;
        // Hats
        item instanceof Cap ? this.createCap(item) : null;
        item instanceof TopHat ? this.createTHat(item) : null;
        // Belt
        item instanceof Belt ? this.createBelt(item) : null;
        // Glasses
        item instanceof SunGlasses ? this.createSunGlasses(item) : null;
        item instanceof OpticGlasses ? this.createOpticGlasses(item) : null;
        return item;
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
    getRandomNumber(min, max, fraction) {
        if (min === 0 && max === 1) {
            let rnd = (Math.floor(Math.random() * (max - min + 1) + min));
            if (rnd > 0) {
                return true;
            }
            else {
                return false;
            }
        }
        if (!fraction) {
            let rnd = (Math.floor(Math.random() * (max - min + 1) + min));
            return rnd;
        }
        else {
            return parseFloat((Math.random() * (max - min) + min).toFixed(2));
        }
    }
    createItemType(index = 0) {
        let num = index != 0 ? index : this.getRandomNumber(1, 20);
        console.log(num);
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
        shirt.manufacturer = this.randomFromArray(Manufacturers.ManufacturerList).name;
        shirt.model = this.randomFromArray(Manufacturers.modelsByManufacturer(shirt.manufacturer));
        shirt.size = this.getRandomNumber(Shirt.minShirtSize, Shirt.maxShirtSize);
        shirt.color = this.randomFromArray(Shirt.shirtColors);
        shirt.sleeveLength = this.getRandomNumber(Shirt.minSleeveLength, Shirt.maxSleeveLength, true);
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
        pants.manufacturer = this.randomFromArray(Manufacturers.ManufacturerList).name;
        pants.model = this.randomFromArray(Manufacturers.modelsByManufacturer(pants.manufacturer));
        pants.size = this.getRandomNumber(Pants.minSize, Pants.maxSize);
        pants.color = this.randomFromArray(Pants.pantsColors);
        if (pants instanceof Shorts === false) {
            pants.pantLength = this.getRandomNumber(Pants.minLength, Pants.maxLength, true);
        }
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
        shorts.pantLength = this.getRandomNumber(Shorts.minLength, Shorts.maxLength, true);
        shorts.fabric = this.randomFromArray(Shorts.fabrics);
    }
    womenClothesStandards(c) {
        c.manufacturer = this.randomFromArray(Manufacturers.ManufacturerList).name;
        c.model = this.randomFromArray(Manufacturers.modelsByManufacturer(c.manufacturer));
        c.color = this.randomFromArray(WomenClothes.wColors);
        c.size = this.getRandomNumber(WomenClothes.minSize, WomenClothes.maxSize);
        c.perimiter = this.getRandomNumber(WomenClothes.minPerimiter, WomenClothes.maxPerimiter);
    }
    createSkirt(skirt) {
        this.womenClothesStandards(skirt);
        skirt.longSkirt = this.getRandomNumber(0, 1);
    }
    createDress(dress) {
        this.womenClothesStandards(dress);
        dress.dressLength = this.getRandomNumber(Dress.minLength, Dress.maxLength, true);
        dress.bareback = this.getRandomNumber(0, 1);
    }
    createNDress(nDress) {
        nDress.fabric = this.randomFromArray(NightDress.NDressFabrics);
    }
    jacketStandards(jacket) {
        jacket.manufacturer = this.randomFromArray(Manufacturers.ManufacturerList).name;
        jacket.model = this.randomFromArray(Manufacturers.modelsByManufacturer(jacket.manufacturer));
        jacket.color = this.randomFromArray(Jacket.JacketColors);
        jacket.size = this.getRandomNumber(Jacket.minSize, Jacket.maxSize);
        jacket.thickness = this.getRandomNumber(Jacket.minThickness, Jacket.maxThickness, true);
    }
    createBlazer(blazer) {
        this.jacketStandards(blazer);
        blazer.pockets = this.getRandomNumber(Blazer.minPockets, Blazer.maxPockets);
    }
    createCoat(coat) {
        this.jacketStandards(coat);
        coat.raincoat = this.getRandomNumber(0, 1);
    }
    shoeStandards(shoe) {
        shoe.manufacturer = this.randomFromArray(Manufacturers.ManufacturerList).name;
        shoe.model = this.randomFromArray(Manufacturers.modelsByManufacturer(shoe.manufacturer));
        shoe.color = this.randomFromArray(Shoes.ShoeColors);
        shoe.size = this.getRandomNumber(Shoes.minSize, Shoes.maxSize);
        shoe.madeIn = this.randomFromArray(Shoes.Countries);
    }
    createEShoes(shoes) {
        this.shoeStandards(shoes);
        shoes.laces = this.getRandomNumber(0, 1);
        shoes.material = this.randomFromArray(ElegantShoes.eShoesMaterials);
    }
    createSShoes(shoes) {
        this.shoeStandards(shoes);
        shoes.laces = this.getRandomNumber(0, 1);
        shoes.manufactureDate = randomDate(new Date(2012, 1, 1), new Date());
        function randomDate(start, end) {
            return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
        }
    }
    createCShoes(shoes) {
        this.shoeStandards(shoes);
        shoes.laces = this.getRandomNumber(0, 1);
        shoes.orthopedic = this.getRandomNumber(0, 1);
    }
    createHeels(heels) {
        this.shoeStandards(heels);
        heels.heel = this.randomFromArray(Heels.HeelTypes);
    }
    hatStandards(hat) {
        hat.manufacturer = this.randomFromArray(Manufacturers.ManufacturerList).name;
        hat.model = this.randomFromArray(Manufacturers.modelsByManufacturer(hat.manufacturer));
        hat.color = this.randomFromArray(Hat.HatColors);
        hat.setDiameterAndSize = this.getRandomNumber(Hat.minDiameter, Hat.maxDiameter);
    }
    createCap(cap) {
        this.hatStandards(cap);
        cap.ad = this.getRandomNumber(0, 1);
    }
    createTHat(tophat) {
        this.hatStandards(tophat);
        tophat.height = this.getRandomNumber(TopHat.minHeight, TopHat.maxHeight, true);
    }
    createBelt(belt) {
        belt.manufacturer = this.randomFromArray(Manufacturers.ManufacturerList).name;
        belt.model = this.randomFromArray(Manufacturers.modelsByManufacturer(belt.manufacturer));
        belt.beltColor = this.randomFromArray(Belt.BeltColors);
        belt.buckleColor = this.randomFromArray(Belt.BuckleColors);
        belt.buckleMaterial = this.randomFromArray(Belt.BuckleMaterials);
        belt.beltDimensions.height = this.getRandomNumber(Dimensions.minHeight, Dimensions.maxHeight, true);
        belt.beltDimensions.length = this.getRandomNumber(Dimensions.minLength, Dimensions.maxLength, true);
        belt.beltDimensions.width = this.getRandomNumber(Dimensions.minWidth, Dimensions.maxWidth, true);
    }
    GlassesStandards(glasses) {
        glasses.manufacturer = this.randomFromArray(Manufacturers.ManufacturerList).name;
        glasses.model = this.randomFromArray(Manufacturers.modelsByManufacturer(glasses.manufacturer));
        glasses.frameColor = this.randomFromArray(Glasses.GlassColors);
    }
    createSunGlasses(sGlasses) {
        this.GlassesStandards(sGlasses);
        sGlasses.glassColor = this.randomFromArray(SunGlasses.ShadeColors);
    }
    createOpticGlasses(oGlasses) {
        this.GlassesStandards(oGlasses);
        oGlasses.readDistance = this.getRandomNumber(OpticGlasses.minReadDistance, OpticGlasses.maxReadDistance, true);
    }
}
