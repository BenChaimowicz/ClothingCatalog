class Tester {
    private _prodList: Item[];
    private _prodTypes: any[];

    constructor() {
        this._prodTypes = [TShirt, ButtonedShirt, WomenShirt, Jeans, RegularPants, Shorts, Skirt, Dress, NightDress, ElegantShoes, SportShoes, ComfyShoes, Heels, Blazer, Coat, Cap, TopHat, Belt, SunGlasses, OpticGlasses];
    }
    public test(): void {
        let numOfItems: number = parseInt(prompt('Enter number of items to create:'));
        if (numOfItems < 1 || numOfItems == NaN) { throw new Error('Invalid Number!') };
        if (numOfItems > 20) {
            this._prodList = new Array<Item>(numOfItems);
            for (let i = 0; i < this._prodList.length;i++){
                this._prodList[i] = createDisplayAndReturnRandom();
            }
        } else {
            this._prodList = new Array<Item>(numOfItems);
            let i: number = 0;
            while(i < numOfItems){
                let rndNum: number = this.rollFromTypes();
                if (this._prodTypes[rndNum] != 0) {
                    this._prodList[i] = createSpecificAndReturn(rndNum);
                    this._prodTypes[rndNum] = 0;
                    i++;
                }
            }
        }
    }

    private rollFromTypes(): number {
        let num: number = Math.floor(Math.random() * this._prodTypes.length);
        return num;
    }
}