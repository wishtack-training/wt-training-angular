export enum SandwichConstraint {
    GlutenFree = 'gluten-free',
    Vegan = 'vegan',
    Vegetarian = 'vegetarian'
}

export class Sandwich {

    constructor(
        public name: string,
        public sandwichConstraintList: SandwichConstraint[] = []
    ) {
    }


}
