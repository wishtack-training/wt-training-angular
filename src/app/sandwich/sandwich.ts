export enum SandwichConstraint {
    GlutenFree = 'gluten-free',
    Vegan = 'vegan',
    Vegetarian = 'vegetarian'
}

export class Sandwich {

    id: string;

    constraintList: SandwichConstraint[];
    name: string;
    price: {
        amount: number;
        currency: string;
    };
    score: number;

    constructor(args: Partial<Sandwich> = {}) {
        this.id = args.id;
        this.name = args.name;
        this.price = args.price;
        this.constraintList = args.constraintList;
        this.score = args.score || 0;
    }

}
