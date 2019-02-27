export enum FoodConstraint {
    GlutenIntolerant = 'gluten-intolerant',
    Vegan = 'vegan'
}

export class Person {

    firstName: string;
    lastName: string;
    foodConstraintList: FoodConstraint[];

    constructor(args: Partial<Person> = {}) {
        this.firstName = args.firstName;
        this.lastName = args.lastName;
        this.foodConstraintList = args.foodConstraintList;
    }

}
