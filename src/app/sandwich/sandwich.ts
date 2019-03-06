export enum SandwichConstraint {
    GlutenFree = 'gluten-free',
    Vegan = 'vegan',
    Vegetarian = 'vegetarian'
}

export class Sandwich {

    constraintList: SandwichConstraint[];
    name: string;
    score: number;

    constructor(args: Partial<Sandwich> = {}) {
        this.name = args.name;
        this.constraintList = args.constraintList;
        this.score = args.score;
    }

}
