export class Sandwich {

    title: string;
    price: number;
    ingredientList: string[];

    constructor(args: Partial<Sandwich> = {}) {
        this.price = args.price;
        this.title = args.title;
        this.ingredientList = args.ingredientList;
    }

}
