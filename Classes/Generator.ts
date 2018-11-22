class Generator { 

    public getRandomItem(){
        let item: any = this.createItemType();
        
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

    private randomFromArray(arr: any[]): any {
        return (Math.floor(Math.random() * (arr.length)));
    }

    private getRandomNumber(min: number, max: number): number {
        return (Math.floor(Math.random() * (max - min + 1) + min));
    }

    private createItemType() :any {
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

    private createTShirt(tshirt: TShirt) {
        
    }
}